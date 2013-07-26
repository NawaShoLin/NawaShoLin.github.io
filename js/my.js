(function() {
  (function($) {
    var parseDash;
    (function() {
      var cont;
      cont = $('#rss-nav-ul');
      loadFeeds(cont, "http://qmono2.blogspot.com/feeds/posts/default", 5);
      return void 0;
    })();
    /*
    (->
      $('#main-article').css('margin-top', '+=24px')
    
      runEffect = (ele)->
        selectedEffect = "slide"
        options = {}
        ele.hide( selectedEffect, options, 1000, callback )
        callback = ->
    
      $("#me").click(->
        runEffect($('#about-content'))
        false
      )
    )()
    */

    parseDash = function(str, options) {
      var ary, id, splitSymbol;
      if (options == null) {
        options = {};
      }
      id = options['id'] != null ? options['id'] : null;
      splitSymbol = options['spliter'] || '-';
      ary = str.split(splitSymbol);
      if (id === null) {
        return ary;
      }
      return ary[id];
    };
    (function() {
      var swfun;
      swfun = function() {};
      return $('.switchable').find('ul').filter(".sw-ul").children('*').click(function() {
        var name;
        return name = parseDash($(this).attr('id'), {
          id: 0
        });
      });
    })();
    return void 0;
  })(jQuery);

}).call(this);
