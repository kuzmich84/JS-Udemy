var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  if(arr.length === 0) {
    return null;
  }
  return maxElement;

};

var arrMy =[];
var result = getMaxElement(arrMy);
console.log(result);
