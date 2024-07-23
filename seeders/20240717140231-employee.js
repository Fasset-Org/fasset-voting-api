"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Employees",
      [
        {
          fullName: "Ntsebeng Khoarai",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Evodia Talent Mtimkulu",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nobuntu Gwala",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thandeka Nyambose",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Ntokozo Pretty Nzimande",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Akhona Patrick Mdolo",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lorraine Nchabeleng",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Ayanda Mafuleka",
          position: "Executive ",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Zakariya Alli",
          position: "Executive",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nokulunga Cynthia Mthombeni",
          position: "Executive",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Makabongwe Siziba",
          position: "Executive",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "A'eeda Rhodes",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Bomkazi Mnombeli",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Glodinah Moleko",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Pearl Thomo",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "S'phamandla Andile Cele",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lwazi Mduduzi Dladla",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Apatame Rajabu",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lundikazi  Peter",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Ndoda Monama",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Raymond Mulovhedzi",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sidney Matjeke",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Boitumelo Sepeng",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Vuyisa Xola Nongendzi",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Rudzani Munzhedzi Ramphfumedzi",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thabo George Khwenenyana",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Phuti Theodora Matsi",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thabile Mgoza",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Karabo Samuel Dikgore",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Igor Felipe Rivera-Green",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thato Modise   ",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Madiabe Mokgalong",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Maphala Seakamela",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sanele Biyela",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sandi Silevana",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Themba Makamu",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thabiso Fanchy Sebashe",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Vusi  Mahlangu",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Banele Nduli",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nokulunga Linganisa",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Zibuyile Busisiwe Nkabinde",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Spencer Nhunzvi",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Khomotso Phetla",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nomadlozi Buthelezi",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Simon  Mokete",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Unathi Nkosiyane",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Mamarothi Carin Mathibe",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nomandla Aphane",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nomsa Makwarela  ",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Godfrey Maswanganye",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thifhelimbilu Rathogwa ",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Surprise Majeke",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lehlogonolo Mmopane",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sandisiwe Mgidi",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Prince Ntetha",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Khulekani Khoza",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Xola Mguzulwa",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Chantal Monyane",
          position: "Manager",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Njabulo Mabuza",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Silindile Penelope Zulu",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Patience Motloung",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Gcina Sphiwo Goba",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Maphuti Ally Somo",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Benghali Matthias Mokoatle",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Tendani Sivhugwana",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Zethembe Talent Simelane",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Wandise Cekuse",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Esther Morake ",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Tshifhiwa Leonard Maumela ",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nonhlanhla Nkabinde ",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sanele Dlamini",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lunga Ndumiso Bernard",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Queen Maphoto",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sizwe Ennocent Mfusi",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sandile Mfeka",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        // {
        //   fullName: "Thandekile Nduli",
        //   position: "Specialist",
        //   dateCreated: new Date(),
        //   dateUpdated: new Date(),
        //   type: "employee",
        //   id: uuidv4()
        // },
        // {
        //   fullName: "Sanele Maluleke",
        //   position: "Manager",
        //   dateCreated: new Date(),
        //   dateUpdated: new Date(),
        //   type: "employee",
        //   id: uuidv4()
        // },
        {
          fullName: "Kgomotso Mosese",
          position: "Administrator",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thokolo France Lebogo",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Shane Maduana",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Communications and Stakeholder Engagement",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },
        {
          fullName: "Facilities",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },
        {
          fullName: "Finance",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },
        {
          fullName: "Processing and Quality Assurance (PQA)",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },

        {
          fullName: "Skills Planning and Research",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },
        {
          fullName: "Supply Chain Management",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },
        {
          fullName: "Audit Risk Compliance",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },
        {
          fullName: "Quality and Monitoring",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },
        {
          fullName: "Company Secretary Office",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },
        {
          fullName: "Human Resources",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },
        {
          fullName: "Information Technology",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },
        {
          fullName: "Executive Office",
          position: "Department",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "department",
          id: uuidv4()
        },

        {
          fullName: "Siyamthanda Nyathi",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thando Permly Njoko",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lethiwe Portia Mbatha",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lucas Otletseng",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Celimpilo Sibiya",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Bongeka Zamisa",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Clinton Motlhoding",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Luyanda Mbatha",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lerato Mbhele",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Maki Magatolle",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Calvonia Ntlema",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Kabelo Moloi",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Kwanda Buthelezi",
          position: "Intern",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        // {
        //   fullName: "Mpho Gift Matladi",
        //   position: "Intern",
        //   dateCreated: new Date(),
        //   dateUpdated: new Date(),
        //   type: "employee",
        //   id: uuidv4()
        // },
        // {
        //   fullName: "Tshegofatjo Zedan Masoga",
        //   position: "Intern",
        //   dateCreated: new Date(),
        //   dateUpdated: new Date(),
        //   type: "employee",
        //   id: uuidv4()
        // }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
