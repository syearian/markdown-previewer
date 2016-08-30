var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/containers/Main.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
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
				include: __dirname + '/src',
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(
						'style', // The backup style loader
						'css?sourceMap!sass?sourceMap'
				)
			}
	  ]
	},
	sassLoader: {
			includePaths: [ 'src/sass' ]
	},
  plugins: [
		HTMLWebpackPluginConfig,
		new ExtractTextPlugin('[name].css')
	]
};





