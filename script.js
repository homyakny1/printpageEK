$(function () {
  console.log("ready!");
  $("#datetime").html(showDateTime());
  $("#sky").attr("src", "sky" + getMap() + ".jpg");
  $(".button").click(function () {
    location.reload(true);
  });
  $("#print").click(function () {
    var prtContent = document.getElementById("printPage");
    var WinPrint = window.open(
      "",
      "",
      "left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0"
    );
    WinPrint.document.write(prtContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  });
});
