/*
comb(0, [[1], [2]])
=> [
    [[0],[1],[2]],
    [[1, 2], [3]],
    [[1], [2, 3]]  
   ]
*/


(function() {
  var allComb, comb, evalComb, extendArray, getBestComb, mergeList, normalCost, the1yuan, the1yuanCost;

  comb = function(x, ys) {
    var a, i, result, t, zs, _i, _ref;
    a = ys.slice(0);
    a.push([x]);
    result = [a];
    for (i = _i = 0, _ref = ys.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      zs = ys.slice(0);
      t = zs[i].slice(0);
      t.push(x);
      zs[i] = t;
      result.push(zs);
    }
    return result;
  };

  extendArray = function(xs, ys) {
    return xs.push.apply(xs, ys);
  };

  allComb = function(items) {
    var ary, e, tail, ys, _i, _len;
    if (items.length === 1) {
      return [[items]];
    }
    tail = allComb(items.slice(1));
    ary = [];
    for (_i = 0, _len = tail.length; _i < _len; _i++) {
      e = tail[_i];
      ys = comb(items[0], e);
      extendArray(ary, ys);
    }
    return ary;
  };

  evalComb = function(comb, rate) {
    var sum, totalCost, x, xs, _i, _j, _len, _len1;
    totalCost = 0;
    for (_i = 0, _len = comb.length; _i < _len; _i++) {
      xs = comb[_i];
      sum = 0;
      for (_j = 0, _len1 = xs.length; _j < _len1; _j++) {
        x = xs[_j];
        sum += x.price;
      }
      totalCost += Math.round(sum * rate);
    }
    return totalCost;
  };

  getBestComb = function(items, rate) {
    var bestComb, bestCost, combList, x, xCost, _i, _len;
    combList = allComb(items);
    bestComb = combList[0];
    bestCost = evalComb(combList[0], rate);
    for (_i = 0, _len = combList.length; _i < _len; _i++) {
      x = combList[_i];
      xCost = evalComb(x, rate);
      if (xCost < bestCost || (xCost === bestCost && x.length < bestComb.length)) {
        bestComb = x;
        bestCost = xCost;
      }
    }
    return bestComb;
  };

  mergeList = function(items) {
    var c, cloneItem, contains, item, newList, _i, _len;
    contains = function(ary, item) {
      var i, _i, _ref;
      for (i = _i = 0, _ref = ary.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (ary[i].name === item.name) {
          return i;
        }
      }
      return false;
    };
    newList = [];
    for (_i = 0, _len = items.length; _i < _len; _i++) {
      item = items[_i];
      cloneItem = {
        num: 1,
        price: item.price,
        name: item.name
      };
      c = contains(newList, cloneItem);
      if (c !== false) {
        newList[c].num += 1;
      } else {
        newList.push(cloneItem);
      }
    }
    return newList;
  };

  the1yuan = function(itemList, rate) {
    var i, item, newList, result, x, _i, _j, _k, _len, _len1, _ref, _results;
    newList = [];
    for (_i = 0, _len = itemList.length; _i < _len; _i++) {
      item = itemList[_i];
      for (i = _j = 1, _ref = item.num; 1 <= _ref ? _j <= _ref : _j >= _ref; i = 1 <= _ref ? ++_j : --_j) {
        newList.push(item);
      }
    }
    result = getBestComb(newList, rate);
    _results = [];
    for (_k = 0, _len1 = result.length; _k < _len1; _k++) {
      x = result[_k];
      _results.push(mergeList(x));
    }
    return _results;
  };

  the1yuanCost = function(itemList, rate) {
    var s, sum, x, xs, _i, _j, _len, _len1;
    sum = 0;
    for (_i = 0, _len = itemList.length; _i < _len; _i++) {
      xs = itemList[_i];
      s = 0;
      for (_j = 0, _len1 = xs.length; _j < _len1; _j++) {
        x = xs[_j];
        s += x.price * x.num;
      }
      s = Math.round(s * rate);
      sum += s;
    }
    return sum;
  };

  normalCost = function(itemList, rate) {
    var sum, x, _i, _len;
    sum = 0;
    for (_i = 0, _len = itemList.length; _i < _len; _i++) {
      x = itemList[_i];
      sum += x.price * x.num;
    }
    return Math.round(sum * rate);
  };

  window.the1yuan = the1yuan;

  window.the1yuanCost = the1yuanCost;

  window.normalCost = normalCost;

}).call(this);
