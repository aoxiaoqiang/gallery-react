'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');

// 获取image数据
var imageDatas = require('../data/imageDatas.json');

// 获取图片url地址
var imageDatas = (function(image){
	var singleImage = "";
	for (var i = 0; i < image.length; i++) {
		singleImage = image[i];
		singleImage.imageUrl = require('../images/' + singleImage.fileName);
		image[i] = singleImage;
	}
	return image;
})(imageDatas);


var GalleryReactApp = React.createClass({
  render: function() {
    return (
      <div><img src={imageDatas[0].imageUrl} /></div>
    );
  }
});
React.render(<GalleryReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryReactApp;
