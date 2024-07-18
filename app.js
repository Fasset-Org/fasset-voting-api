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
  UserVoteCategory
} = require("./models");
const path = require("path");

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

    res
      .status(201)
      .json({ success: true, message: "Your vote was submitted successfully" });
  } catch (e) {
    console.log(e);
    await t.rollback();

    res
      .status(500)
      .json({ success: false, message: "Failed to submit your vote" });
  }
});

app.get(`${API_BASE_URL}/results`, async (req, res, next) => {
  const votes = Vote.findAll({
    attributes: [
      "employeeId",
      [sequelize.fn("COUNT", sequelize.col("employeeId")), "voteCount"]
    ],
    include: [
      {
        model: Employee
      },
      {
        model: Category
      }
    ],
    group: ["employeeId", "categoryId"],
    having: sequelize.literal("COUNT(employeeId) > 0")
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} and version ${VERSION}`);
  sequelize.authenticate();
  console.log(`Database connected on port ${5432}`);
});
