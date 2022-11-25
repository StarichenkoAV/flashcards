const React = require('react');
const Layout = require('./Layout');

function Topics({ topics }) {
  return (
    <Layout>
      <h1>Викторина</h1>
      <h2>Выберите тему</h2>
      <div className="cards-container">
        {topics.map((topic) => (
          // <div className="cards">
          <div className="card-container">
            <h5 className="card-title">{topic.title}</h5>
            <div id={topic.id} className={`card text-center card-${topic.id}`} style={{ width: '25rem' }}>
              <div className="card-body">
                <a href={`/cards/${topic.id}`} className="btn btn-info">Выбрать</a>
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Topics;
