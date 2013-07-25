(function() {
  var loadFeeds;

  loadFeeds = function(container, url, num) {
    var initialize;
    google.load("feeds", "1");
    initialize = function() {
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
    return google.setOnLoadCallback(initialize);
  };

  window.loadFeeds = loadFeeds;

}).call(this);
