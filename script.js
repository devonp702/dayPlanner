$("document").ready(function () {
  var month = dayjs().month() + 1; // Time variables
  var day = dayjs().date();
  var year = dayjs().year();
  var hour = dayjs().hour();
  var storage = { //data storage object
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
  var load = localStorage.getItem("storage"); //if there is local storage, load it to the page
  if (load !== null) {
    storage = JSON.parse(load);
    $("textarea").each(function (index) {
      $(this).val(storage[9 + index]);
    });
  }
  $("#currentDay").text("Current Day is: " + month + "/" + day + "/" + year); // display today's date
  $(".hour").each(function (index) {
    $(this).attr("data-time", 9 + index); // set attribute to time in military time
  });
  $(".hour").each(function () { //figuring out how to make the time colors work
    var temp = $(this).attr("data-time");
    //console.log("Page: " + dayjs().hour(temp));
    //console.log("Now: " + hour);
  });
  //Data Handling
  $("button").on("click", function () { //when button is clicked, get content, and save it to temp storage, then send to local storage
    var str = $(this).prev().val();
    var idx = $(this).prev().prev().attr("data-time");
    storage[idx] = str;
    localStorage.setItem("storage", JSON.stringify(storage));
  });
});