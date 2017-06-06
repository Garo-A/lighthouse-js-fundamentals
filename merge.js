var merge = function(array1, array2) {

  // Concatenate Arrays

  for (var i = 0; i < array2.length; i ++) {

    array1.push (array2[i]);
  }

  // Put anchor as first value in array

  for (var x = 0; x < array1.length; x ++) {

    // For each element after anchor, evaluate if it is smaller than anchor, and replace.

    for (var a = (x + 1); a < array1.length; a ++) {

      var store;

      if (array1[a] < array1[x]) {

        var store = array1[x];
        array1[x] = array1[a];
        array1[a] = store
      }

    }

  }

    return array1;
 }

