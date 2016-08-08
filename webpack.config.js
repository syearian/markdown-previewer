var webpack = require('webpack');
var dev = process.env.NODE_ENV !== "production";

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: dev ? "builds/development" : 'builds/production',
		filename: 'app.js'
	},
	devServer: {
		inline: true,
		contentBase: './build',
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, 
				{
			    test: /\.(png|jpg)$/,
			    loader: 'url-loader?limit=10000'
			}
	 ]
	}
};





