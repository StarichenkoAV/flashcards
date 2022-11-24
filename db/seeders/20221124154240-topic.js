const { Topic } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Topic.bulkCreate([
      {
        title: 'nana',
      },
      {
        title: 'lala',
      },
      {
        title: 'vava',
      },
    ]);
  },

  async down() {
    await Topic.destroy({ truncate: { cascade: true } });
  },
};
