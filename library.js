(function(module) {
  "use strict";

  var basicUrl       = /<a href="(?:https?:\/\/)?(?:www\.)?break\.com\/video\/.+-(\d+)[&\/]?.*">.*<\/a>/gi;
  var Breakdotcom    = {};
  
  Breakdotcom.parse  = function(postContent, callback) {
    var embed        = '<div class="video-container"><iframe class="breakdotcom-plugin" src="//www.break.com/embed/$1?embed=0" allowfullscreen mozallowfullscreen webkitallowfullscreen></iframe></div>';

    if (postContent.match(basicUrl)) {
      postContent    = postContent.replace(basicUrl, embed);
    }

    callback(null, postContent);
  };

  module.exports     = Breakdotcom;
}(module));

