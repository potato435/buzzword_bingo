const path = require('path');
module.exports = {
	entry: {
		main: "./src/App.jsx",
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			}
		]
	},
}