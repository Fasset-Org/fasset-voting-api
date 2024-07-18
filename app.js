/**
 * Author : Themba Makamu
 * Date : 17 July 2024
 */

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {
  sequelize,
  Employee,
  Category,
  Vote,
  UserVoteCategory,
  Sequelize
} = require("./models");
const path = require("path");
const category = require("./models/category");

// initalize express application
const app = express();

dotenv.config({ path: `${__dirname}/config/config.env` });

// middlewares
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(morgan("method :url :status :res[content-length] - :response-time ms"));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const VERSION = process.env.API_VERSION || "v1";
const API_BASE_URL = `/api/${VERSION}`;
const PORT = process.env.PORT || 8001;

app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "Yes, it is working"
  });
});

app.get(`${API_BASE_URL}/getAllEmplyees`, async (req, res, next) => {
  const employees = await Employee.findAll();

  return res.status(200).json({
    success: true,
    message: "All stuff fetched",
    employees: employees
  });
});

app.get(`${API_BASE_URL}/getAllDepartments`, async (req, res, next) => {
  const departments = await Employee.findAll({ where: { type: "department" } });

  return res.status(200).json({
    success: true,
    message: "All departments fetched",
    departments: departments
  });
});

app.get(`${API_BASE_URL}/getAllCategories`, async (req, res, next) => {
  const categories = await Category.findAll();

  return res.status(200).json({
    success: true,
    message: "All categories fetched",
    categories: categories
  });
});

app.post(`${API_BASE_URL}/voteCategory`, async (req, res, next) => {
  const t = await sequelize.transaction();

  try {
    const usrVote = await UserVoteCategory.findOne({
      where: {
        userVotingEmail: req.body.userVotingEmail,
        categoryId: req.body.categoryId
      }
    });

    if (usrVote) {
      return res.status(404).json({
        success: false,
        message: "You already voted for this category"
      });
    }

    const userVote = await UserVoteCategory.create(
      {
        userVotingEmail: req.body.userVotingEmail,
        categoryId: req.body.categoryId
      },
      { transaction: t }
    );

    const vote = await Vote.create(
      {
        employeeId: req.body.employeeId,
        categoryId: req.body.categoryId
      },
      { transaction: t }
    );

    await t.commit();

    return res
      .status(201)
      .json({ success: true, message: "Your vote was submitted successfully" });
  } catch (e) {
    console.log(e);
    await t.rollback();

    return res
      .status(500)
      .json({ success: false, message: "Failed to submit your vote" });
  }
});

app.get(
  `${API_BASE_URL}/getUserVotes/:userVoteEmail`,
  async (req, res, next) => {
    const { userVoteEmail } = req.params;

    console.log(req.params);

    const userVotes = await UserVoteCategory.findAll({
      where: { userVotingEmail: userVoteEmail }
    });

    return res.status(200).json({
      success: true,
      message: "User votes fetched",
      userVotes: userVotes
    });
  }
);

app.get(`${API_BASE_URL}/getAllVotes`, async (req, res, next) => {
  const votes = await Vote.findAll({ include: [Employee] });

  return res
    .status(200)
    .json({ success: true, message: "All votes fetched", votes: votes });
});

app.get(`${API_BASE_URL}/results/:categoryId`, async (req, res, next) => {
  const { categoryId } = req.params;

  const results = await Employee.findAll({
    attributes: ["fullName", "position", "id"],
    include: [
      {
        model: Vote,
        where: { categoryId: categoryId }
      }
    ]
  });

  res.status(200).json({
    success: true,
    message: "Vote results checked",
    votes: results
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} and version ${VERSION}`);
  sequelize.authenticate();
  console.log(`Database connected on port ${5432}`);
});
