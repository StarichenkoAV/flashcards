const React = require('react');
const Layout = require('./Layout');

function Card({ card, length }) {
  return (
    <Layout>
      <div>
        <div>
          <div id="counter">{card.id}</div>
          из
          <div id="length">{length}</div>
        </div>
        <h2>Угадайте по кадру:</h2>
        <div className="card-container">
          <img src={card.image} alt="" />
          <form id={`${card.id}`} action={`/cards/${card.id}`} method="post">
            <input name="answer" />
            <input type="submit" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Card;
