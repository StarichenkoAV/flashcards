const router = require('express').Router();
const CardPage = require('../views/CardPage');
const { Quiz } = require('../db/models');

router.get('/:topic', async (req, res) => {
  const { topic } = req.params;
  const quizzes = await Quiz.findAll({ where: { topic_id: topic } });
  res.renderComponent(CardPage, { quizzes });
  console.log(quizzes);
});

router.post('/:topic', async (req, res) => {
  const { answer } = req.body; // то что мы вводили, ответ

  const rightAnswer = await Quiz.findOne({ where: { id: req.params.topic } });
  //console.log(rightAnswer.answer);
  if (answer.toLowerCase() === rightAnswer.answer.toLowerCase()) {
    return res.json({ status: true, message: 'Верно!' });
  }
  return res.json({ status: false, message: 'Ответ неверный' });
});

module.exports = router;
