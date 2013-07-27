(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  (function($) {
    var ApplyswitchEffect, loadFeeds, parseDash;
    loadFeeds = function(feedObjects) {
      var initialize;
      google.load("feeds", "1");
      initialize = function() {
        var fo, loadFeed, _i, _len, _results;
        loadFeed = function(container, url, num) {
          var feed;
          feed = new google.feeds.Feed(url);
          if (num != null) {
            feed.setNumEntries(num);
          }
          return feed.load(function(result) {
            var a, entry, li, _i, _len, _ref, _results;
            _ref = result.feed.entries;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              entry = _ref[_i];
              a = $('<a></a>').attr({
                href: entry.link,
                target: '_blank'
              }).html(entry.title);
              li = $('<li></li>').append(a);
              _results.push(container.append(li));
            }
            return _results;
          });
        };
        _results = [];
        for (_i = 0, _len = feedObjects.length; _i < _len; _i++) {
          fo = feedObjects[_i];
          _results.push(loadFeed(fo.container, fo.url, fo.num));
        }
        return _results;
      };
      return google.setOnLoadCallback(initialize);
    };
    (function() {
      var logdown, owo;
      owo = {
        container: $('#owo-rss-nav-ul'),
        url: "http://qmono2.blogspot.com/feeds/posts/default",
        num: 5
      };
      logdown = {
        container: $('#logdown-rss-nav-ul'),
        url: "http://feeds.feedburner.com/0w0",
        num: 5
      };
      return loadFeeds([owo, logdown]);
    })();
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
