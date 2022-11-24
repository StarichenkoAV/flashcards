const { Quiz } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Quiz.bulkCreate([
      {
        question: 'Blah-Blah-Blah',
        answer: 'Blah!',
        image: 'https://storage.theoryandpractice.ru/tnp/uploads/image_block/000/052/014/image/base_d9dd9b626f.jpg',
        topic_id: 1,
      },
      {
        question: 'La-la-la',
        answer: 'La!',
        image: 'https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg',
        topic_id: 2,
      },
      {
        question: 'Test',
        answer: 'Test!!!',
        image: 'https://www.m24.ru/b/d/nBkSUhL2gVMkn8-0PqzJrMCqzJ3w-pun2XyQ2q2C_2OZcGuaSnvVjCdg4M4S7FjDvM_AtC_QbIk8W7zj1GdwKSGT_w=NWGtprpGA6b7Cy2657h8rw.jpg',
        topic_id: 3,
      },
    ]);
  },

  async down() {
    await Quiz.destroy({ truncate: { cascade: true } });
  },
};
