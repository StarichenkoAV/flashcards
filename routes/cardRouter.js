const router = require('express').Router();
const Card = require('../views/Card');
const { Quiz } = require('../db/models');

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const card = await Quiz.findAll({ where: { topic_id: id }, raw: true });
  res.renderComponent(Card, { card: card[0], length: card.length });
});

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const card = await Quiz.findOne({ where: { id }, raw: true });
  res.json(card);
});

module.exports = router;
