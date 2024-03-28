$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  $(".toggler").click(function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
  });

  var typed = new Typed(".typing", {
    strings: ["You-Tuber", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });
});
