const React = require('react')

const Layout = ({ children }) => {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<title>Title</title>
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}

module.exports = Layout