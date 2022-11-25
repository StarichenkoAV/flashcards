const { Topic } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Topic.bulkCreate([
      {
        title: 'Угадываем сериал по кадру',
      },
      {
        title: 'Языки программирования',
      },
      {
        title: 'Угадываем игру по кадру',
      },
    ]);
  },

  async down() {
    await Topic.destroy({ truncate: { cascade: true } });
  },
};
