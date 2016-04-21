var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: {
	header:['./app_components/header'],
	footer:['./app_components/footer'],
	onas:['./app_components/contents/onas'],
	index:['./app_components/contents/index'],
	contact:['./app_components/contents/contact']
		},
  output: { path:  __dirname + "/generated_js/",
	    filename: '[name].js',
	    publicPath: "/generated_js/"	 
		},
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
