$("document").ready(function () {
  var month = dayjs().month() + 1; // Time stuff
  var day = dayjs().date();
  var year = dayjs().year();
  var hour = dayjs().hour();
  var storage = {
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: ""
  };
  var load = localStorage.getItem("storage");
  if (load !== null) {
    storage = JSON.parse(load);
    $("textarea").each(function (index) {
      $(this).val(storage[9 + index]);
    });
  }
  $("#currentDay").text("Current Day is: " + month + "/" + day + "/" + year);
  for (var i = 0; i < storage.length; i++) {
    console.log(storage[i]);
    var replace = storage[i];
    $(".textarea").index(i).val(replace);
  }
  $(".hour").each(function (index) {
    $(this).attr("data-time", 9 + index); // set attribute to time in military time
  });
  $(".hour").each(function () {
    var temp = $(this).attr("data-time");
    //console.log("Page: " + dayjs().hour(temp));
    //console.log("Now: " + hour);
  });
  //Data Handling
  $("button").on("click", function () {
    var str = $(this).prev().val();
    var idx = $(this).prev().prev().attr("data-time");
    storage[idx] = str;
    localStorage.setItem("storage", JSON.stringify(storage))
  });
});