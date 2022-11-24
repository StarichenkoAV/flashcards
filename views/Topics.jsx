const React = require('react');
const Layout = require('./Layout');

function Topics({ topics }) {
  return (
    <Layout>
      <div className="container">
        <h1>Topics:</h1>
        {topics.map((topic) => (
          <div id={topic.id}>
            {topic.title}
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Topics;
