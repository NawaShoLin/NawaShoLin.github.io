(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  (function($) {
    var ApplyswitchEffect, parseDash;
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
      var ary, id, splitSymbol, to_find;
      if (options == null) {
        options = {};
      }
      id = options['id'] != null ? options['id'] : null;
      splitSymbol = options['spliter'] || '-';
      to_find = (typeof options['find'] === "function" ? options['find'](options['find']) : void 0) ? void 0 : null;
      ary = str.split(splitSymbol);
      if (to_find === !null) {
        return (__indexOf.call(ary, to_find) >= 0);
      }
      if (id === null) {
        return ary;
      }
      return ary[id];
    };
    ApplyswitchEffect = function(key, effectName, hideTime, showTime) {
      var lis, outBlock, swDivs;
      if (effectName == null) {
        effectName = 'blind';
      }
      if (hideTime == null) {
        hideTime = 500;
      }
      if (showTime == null) {
        showTime = 500;
      }
      outBlock = $(key);
      lis = outBlock.find('ul').filter(".sw-ul").children('li');
      swDivs = outBlock.find('div').filter('.sw-div');
      return lis.click(function() {
        var name;
        if (!$(this).hasClass('active')) {
          lis.filter('.active').removeClass('active');
          $(this).addClass('active');
        }
        name = parseDash($(this).attr('id'), {
          id: 0
        });
        return swDivs.each(function() {
          var divName, that;
          divName = parseDash(this.id, {
            id: 0
          });
          if (divName === name) {
            if (this.style.display === 'none') {
              that = this;
              return setTimeout(function() {
                return $(that).show('blind', {}, showTime);
              }, hideTime);
            }
          } else if (this.style.display !== 'none') {
            return $(this).hide('blind', {}, hideTime);
          }
        });
      });
    };
    ApplyswitchEffect('.switchable', 'blind', 640, 800);
    return void 0;
  })(jQuery);

}).call(this);
