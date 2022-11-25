const router = require('express').Router();
const Topics = require('../views/Topics');
const { Topic } = require('../db/models');

router.get('/', async (req, res) => {
  const topics = await Topic.findAll({ raw: true });
  res.renderComponent(Topics, { topics });
});

module.exports = router;
