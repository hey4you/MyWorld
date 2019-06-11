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

$(document).ready(function () {
  $("#imgDino2").hover(
    function () {
      $(this).attr("src", "img/gallery/benefitGIF.gif");
    },
    function () {
      $(this).attr("src", "img/gallery/benefitGIF.png");
    }
  );
});