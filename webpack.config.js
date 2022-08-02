const HtmlWebpackPlugin = require ('html-webpack-plugin');
const path = require('path');

const buildFolder = 'docs';  //use docs for github deploy or dist for other deploy
const projectTitle = 'Threejs Simple Starter'  //Title for project

module.exports = {
    mode: 'development',
    entry: {
	bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
	path: path.resolve(__dirname, buildFolder),
	filename: '[name][contenthash].js',
	clean: true,
	assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
	static: {
	    directory: path.resolve(__dirname, 'dist')
	},
	port: 3000,
	open: true,
	hot: true,
	compress: true,
	historyApiFallback: true,
    },
    module: {
	rules: [
	    {
		test:/\.js$/,
		exclude: /node_modules/,
		use: {
		    loader: 'babel-loader',
		    options: {
			presets: ['@babel/preset-env']
		    },
		},
	    },
	    {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	    },
	    {
		test: /\.s[ac]ss$/i,
		use: [
		    'style-loader',
		    'css-loader',
		    'sass-loader'
		],
	    },
	],
    },
    plugins: [
	new HtmlWebpackPlugin({
	    title: projectTitle,
	    filename: 'index.html',
	    template: 'src/template.html'
	})
    ],
}
