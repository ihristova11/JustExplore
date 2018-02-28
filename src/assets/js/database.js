const databaseFunction = function() {
  var dataObj = [];
  $.ajax({
    async: false,
    url: configuration.localDb,
    type: "get",
    dataType: "json",
    error: function(data) {},
    success: function(data) {
      // console.log(data);
      // var p = JSON.stringify(data);
      // var pp = JSON.parse(p)
      dataObj.push(data);
      // console.log(data.name)
    }
  });
  return dataObj[0];
};

// console.log(databaseFunction().isHome)
