$(function() {
  var currencies = [
    { name: "Blagoevgrad" },
    { name: "Burgas" },
    { name: "Dobrich" },
    { name: "Gabrovo" },
    { name: "Haskovo" },
    { name: "Kardzhali" },
    { name: "Kyustendil" },
    { name: "Lovech" },
    { name: "Montana" },
    { name: "Pazardzhik" },
    { name: "Pernik" },
    { name: "Pleven" },
    { name: "Plovdiv" },
    { name: "Yambol" },
    { name: "Razgrad" },
    { name: "Ruse" },
    { name: "Shumen" },
    { name: "Silistra" },
    { name: "Sliven" },
    { name: "Smolyan" },
    { name: "Sofia" },
    { name: "Stara Zagora" },
    { name: "Targovishte" },
    { name: "Varna" },
    { name: "Veliko Tarnovo" },
    { name: "Vidin" },
    { name: "Vratsa" }
  ];

  // setup autocomplete function pulling from currencies[] array
  $("#autocomplete").autocomplete({
    lookup: currencies,
    onSelect: function(suggestion) {
      var thehtml =
        "<strong>Currency Name:</strong> " +
        suggestion.value +
        " <br> <strong>Symbol:</strong> " +
        suggestion.data;
      $("#outputcontent").html(thehtml);
    }
  });
});
