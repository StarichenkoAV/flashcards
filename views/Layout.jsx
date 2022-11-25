const React = require('react');

function Layout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<script defer src="/js/nextCard.js" />
				<title>Title</title>
				<script />
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}

module.exports = Layout;
