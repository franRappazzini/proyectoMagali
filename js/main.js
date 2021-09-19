// metodo ready
$(() => {
  clickBtnOpenBurgerMenu();
});

// function al clickear el btn de burger menu
function clickBtnOpenBurgerMenu() {
  $("#btnChangeToWhite").click(() => {
    // cambia de color el header y el navbar
    $("header, #navBar").css({
      "background-color": "white",
      "box-shadow": "2px 2px 6px rgba(0, 0, 0, 0.25)",
    });

    // se cambia la img para cerrar el burger menu
    $("#btnChangeToWhite").hide();

    $("#btnChangeToBlack").show();
  });

  clickBtnCloseBurgerMenu();
}

// function al clickear el btn x del burger menu
function clickBtnCloseBurgerMenu() {
  $("#btnChangeToBlack").click(() => {
    // cambia de color el header y el navbar
    $("header, #navBar").css({
      "background-color": "#191414",
      "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25);",
    });

    // se cambia la x para abrir el burger menu
    $("#btnChangeToBlack").hide();
    $("#btnChangeToWhite").show();
  });
}
