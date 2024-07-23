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
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Evodia Talent Mtimkulu",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nobuntu Gwala",
          position: "Manager",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thandeka Nyambose",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Ntokozo Pretty Nzimande",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Akhona Patrick Mdolo",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lorraine Nchabeleng",
          gender: "F",
          position: "Specialist",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        // {
        //   fullName: "Ayanda Mafuleka",
        //   gender: "F",
        //   position: "Executive",
        //   dateCreated: new Date(),
        //   dateUpdated: new Date(),
        //   type: "employee",
        //   id: uuidv4()
        // },
        {
          fullName: "Zakariya Alli",
          gender: "M",
          position: "Executive",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nokulunga Cynthia Mthombeni",
          position: "Executive",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Makabongwe Siziba",
          position: "Executive",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "A'eeda Rhodes",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Bomkazi Mnombeli",
          position: "Manager",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Glodinah Moleko",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Pearl Thomo",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "S'phamandla Andile Cele",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lwazi Mduduzi Dladla",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Apatame Rajabu",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lundikazi  Peter",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Ndoda Monama",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Raymond Mulovhedzi",
          position: "Manager",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sidney Matjeke",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Boitumelo Sepeng",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Vuyisa Xola Nongendzi",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Rudzani Munzhedzi Ramphfumedzi",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thabo George Khwenenyana",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Phuti Theodora Matsi",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thabile Mgoza",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Karabo Samuel Dikgore",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Igor Felipe Rivera-Green",
          position: "Manager",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thato Modise   ",
          position: "Manager",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Madiabe Mokgalong",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Maphala Seakamela",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sanele Biyela",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sandi Silevana",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Themba Makamu",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thabiso Fanchy Sebashe",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Vusi  Mahlangu",
          position: "Manager",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Banele Nduli",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nokulunga Linganisa",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Zibuyile Busisiwe Nkabinde",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Spencer Nhunzvi",
          position: "Manager",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Khomotso Phetla",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nomadlozi Buthelezi",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Simon  Mokete",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Unathi Nkosiyane",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Mamarothi Carin Mathibe",
          position: "Manager",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nomandla Aphane",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nomsa Makwarela",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Godfrey Maswanganye",
          position: "Manager",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Thifhelimbilu Rathogwa",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Surprise Majeke",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lehlogonolo Mmopane",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sandisiwe Mgidi",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Prince Ntetha",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Khulekani Khoza",
          position: "Manager",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Xola Mguzulwa",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Chantal Monyane",
          position: "Manager",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Njabulo Mabuza",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Silindile Penelope Zulu",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Patience Motloung",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Gcina Sphiwo Goba",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Maphuti Ally Somo",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Benghali Matthias Mokoatle",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Tendani Sivhugwana",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Zethembe Talent Simelane",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Wandise Cekuse",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Esther Morake ",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Tshifhiwa Leonard Maumela",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Nonhlanhla Nkabinde",
          position: "Specialist",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sanele Dlamini",
          position: "Specialist",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Lunga Ndumiso Bernard",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Queen Maphoto",
          position: "Administrator",
          gender: "F",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        {
          fullName: "Sizwe Ennocent Mfusi",
          position: "Administrator",
          gender: "M",
          dateCreated: new Date(),
          dateUpdated: new Date(),
          type: "employee",
          id: uuidv4()
        },
        // {
        //   fullName: "Sandile Mfeka",
        //   position: "Administrator",
        //   gender: "M",
        //   dateCreated: new Date(),
        //   dateUpdated: new Date(),
        //   type: "employee",
        //   id: uuidv4()
        // },
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
        // {
        //   fullName: "Kgomotso Mosese",
        //   position: "Administrator",
        //   gender: "F",
        //   dateCreated: new Date(),
        //   dateUpdated: new Date(),
        //   type: "employee",
        //   id: uuidv4()
        // },
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
