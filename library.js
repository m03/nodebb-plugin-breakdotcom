(function(module) {
  "use strict";

  var url = /<a href="(?:https?:\/\/)?(?:www\.)?break\.com\/video\/.+-(\d+)[&\/]?.*">.*<\/a>/gi,
      embed = '<div class="video-container"><iframe class="breakdotcom-plugin" src="//www.break.com/embed/$1?embed=0" allowfullscreen mozallowfullscreen webkitallowfullscreen></iframe></div>',
      Breakdotcom = {};
  
  Breakdotcom.parse = function(postContent, callback) {
    postContent = postContent.replace(url, embed);

    callback(null, postContent);
  };

  module.exports = Breakdotcom;
}(module));

