"use strict";

/** @type {import('sequelize-cli').Migration} */

const airlines = [
    {
        airline_code: "IU",
        airline_name: "Super Air Jet",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        airline_code: "GA",
        airline_name: "Garuda Indonesia",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        airline_code: "ID",
        airline_name: "Batik Air",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        airline_code: "QG",
        airline_name: "Citilink",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        airline_code: "AK",
        airline_name: "Air Asia",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        airline_code: "JT",
        airline_name: "Lion Air",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        airline_code: "SJ",
        airline_name: "Sriwijaya Air",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

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
         * 
         * id: 
airline_code
airline_name
createdAt
updatedAt
         */
        await queryInterface.bulkInsert("Airlines", airlines, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         */
        await queryInterface.bulkDelete("Airlines", null, {});
    },
};
