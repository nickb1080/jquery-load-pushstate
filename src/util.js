// Generated by CoffeeScript 1.6.3
var util,
  __slice = [].slice;

Gofer.util = util = {
  wrap: function(func, wrapper) {
    return function() {
      var args;
      args = [func];
      Array.prototype.push.apply(args, arguments);
      return wrapper.apply(this, args);
    };
  },
  removeVals: function() {
    var arr, spot, val, vals, _i, _len;
    arr = arguments[0], vals = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = vals.length; _i < _len; _i++) {
      val = vals[_i];
      if ((spot = arr.indexOf(val)) !== -1) {
        arr.splice(spot, 1);
      }
    }
    return arr;
  },
  getType: function(obj) {
    var classToType;
    if (obj == null) {
      return String(obj);
    }
    classToType = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regexp',
      '[object Object]': 'object'
    };
    return classToType[Object.prototype.toString.call(obj)];
  }
};
