// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var holder;
  if (typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString();
  } else if (typeof obj === "string") {
    return "\"" + obj + "\"";
  } else if (obj === null) {
    return "null";
  } else if (obj === undefined) {
    return undefined;
  } else if (Array.isArray(obj) === true) {
    holder = "[";
    for (let i = 0; i < obj.length; i++) {
      holder.push(obj[i]);
    }
    holder.push("]");
    return holder + stringifyJSON(obj);
  }
};
var example = [1, 2, [3], [[4,5]]];
var example2 = "1, 2, [3], [4,5]";