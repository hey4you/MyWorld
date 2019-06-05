$(document).ready(function () {
    $("#imgDino").hover(
      function () {
        $(this).attr("src", "img/gallery/SecurityGif.gif");
      },
      function () {
        $(this).attr("src", "img/gallery/SecurityGif.png");
      }
    );
  });