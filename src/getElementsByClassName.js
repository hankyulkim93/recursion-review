// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // declare holder variable 
  // classList && classList.contains(className) --> holder.push(element)
  // check for child elements, iterate through with a for loop, call function again (recursive case)
  var result = [];
  var current = window.document.body;
  var findPlease = function(element,className) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    if (element.hasChildNodes()) { // if has children
      for (let i = 0; i < element.childNodes.length; i++) {
        findPlease((element.childNodes[i]),className);
      }
    }
  };
  findPlease(current,className);
  return result;
};
// getElementsByClassName("targetClassName");