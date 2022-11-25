const { Quiz } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Quiz.bulkCreate([
      {
        question: 'Из какого сериала этот кадр?',
        answer: 'Кремниевая долина',
        image: 'https://school.techrocks.ru/wp-content/uploads/2020/09/silicon-valley-600x400-1.jpg',
        topic_id: 1,
      },
      {
        question: 'Из какого сериала этот кадр?',
        answer: 'Бумажный дом',
        image: 'https://www.atresmediaformacion.com/wp-content/uploads/2020/09/LCDP_CAP4_10-1536x864.jpg',
        topic_id: 1,
      },
      {
        question: 'Из какого сериала этот кадр?',
        answer: 'Офис',
        image: 'https://memepedia.ru/wp-content/uploads/2018/05/cover-1-27-768x551.jpg',
        topic_id: 1,
      },
      {
        question: 'Из какого сериала этот кадр?',
        answer: 'Ход королевы',
        image: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/2381555/8864f7a4cb53680e47d2ceeb639ffb21/1920x1080',
        topic_id: 1,
      },
      {
        question: 'Из какого сериала этот кадр?',
        answer: 'Аркейн',
        image: 'https://medialeaks.ru/wp-content/uploads/2021/11/fetnnhlwuael5sa-768x639.jpg',
        topic_id: 1,
      },
      {
        question: 'Из какого сериала этот кадр?',
        answer: 'Голяк',
        image: 'https://www.tvserial.it/wp-content/uploads/2021/10/i-protagonisti-di-brassic-credits-serially.jpeg',
        topic_id: 1,
      },
      {
        question: 'Из какого сериала этот кадр?',
        answer: 'Отбросы',
        image: 'http://download.loveradio.ru/pub/1393454.jpg',
        topic_id: 1,
      },
      {
        question: 'Какой это язык программирования?',
        answer: 'Python',
        image: 'https://luxe-host.ru/wp-content/uploads/b/0/d/b0dec779b0d5bdeeed253ef976493013.png',
        topic_id: 2,
      },
      {
        question: 'Какой это язык программирования?',
        answer: '1С',
        image: 'https://i.stack.imgur.com/3gHsH.png',
        topic_id: 2,
      },
      {
        question: 'Какой это язык программирования?',
        answer: 'JavaScript',
        image: 'https://fuzeservers.ru/wp-content/uploads/b/2/7/b27d3e5a72cbf8ad394673ddbc709d0f.png',
        topic_id: 2,
      },
      {
        question: 'Какой это язык программирования?',
        answer: 'Go',
        image: 'https://otus.ru/journal/wp-content/uploads/2020/12/3-2.png',
        topic_id: 2,
      },
      {
        question: 'Какой это язык программирования?',
        answer: 'PHP',
        image: 'https://otus.ru/journal/wp-content/uploads/2020/12/4-2.png',
        topic_id: 2,
      },
      {
        question: 'Какой это язык программирования?',
        answer: 'C++',
        image: 'https://otus.ru/journal/wp-content/uploads/2020/12/9-1.png',
        topic_id: 2,
      },
      {
        question: 'Какой это язык программирования?',
        answer: 'Kotlin',
        image: 'https://otus.ru/journal/wp-content/uploads/2020/12/10-1.png',
        topic_id: 2,
      },
      {
        question: '1',
        answer: 'Dota 2',
        image: 'https://mmo13.ru/download/content/201501/image_54afebba7719c2.41400146.jpg',
        topic_id: 3,
      },
      {
        question: '1',
        answer: 'Resident evil 8',
        image: 'https://games.mail.ru/hotbox/content_files/news/2021/01/18/8ffe480ff6b44ee299f8b9fed9bbe3ed.jpg',
        topic_id: 3,
      },
      {
        question: 'La-la-la',
        answer: 'God of war',
        image: 'https://cdn.kanobu.ru/screenshots/88/d45c3965-7b1b-4805-aca9-55e1958ba8dd.jpg',
        topic_id: 3,
      },
      {
        question: 'Test',
        answer: 'Fallout 2',
        image: 'https://cdn.kanobu.ru/blog/12970/615f105f-5cca-4892-a2fc-de5db3b3c9c5.jpg',
        topic_id: 3,
      },
      {
        question: 'Test',
        answer: 'Disco elysium',
        image: 'http://s01.riotpixels.net/data/08/08/0808c502-1eac-445b-847d-39a7eac40ea5.jpg/screenshot.disco-elysium.1920x1080.2020-01-16.128.jpg',
        topic_id: 3,
      },
      {
        question: 'Test',
        answer: 'PUBG',
        image: 'https://image.winudf.com/v2/image/ZXhvY29uLnB1Ymdpc2xhbmRtYXBvZmVyYW5nZWxsb290bG9jYXRpb25zX3NjcmVlbl81XzE1MTQxOTIxMDhfMDcy/screen-5.jpg?fakeurl=1&type=.webp',
        topic_id: 3,
      },
      {
        question: 'Test',
        answer: 'CS 1.6',
        image: 'https://image.winudf.com/v2/image/dGlwcy5ndWlkZS5rYWxrbmlqb2thdmFzX3NjcmVlbl81X3l0ZnZuNGZw/screen-5.jpg?fakeurl=1&type=.webp',
        topic_id: 3,
      },
    ]);
  },

  async down() {
    await Quiz.destroy({ truncate: { cascade: true } });
  },
};
