// metodo ready
$(() => {
  clickBtnOpenBurgerMenu();
  changeColorSVG();
  changeColorSVGMobile();
});

// function al clickear el btn de burger menu
function clickBtnOpenBurgerMenu() {
  $("#btnChangeToWhite").click(() => {
    // cambia de color el header y el navbar
    $("header, #navBar").css({
      "background-color": "white",
      "box-shadow": "2px 2px 6px rgba(0, 0, 0, 0.25)",
    });

    // se elimina la imagen de burger menu
    $("#btnChangeToWhite").remove();

    // se crea la x para cerrar el burger menu
    crearXBurgerMenu();
  });
}

// function para agregar la x, para cerrar el burger menu
function crearXBurgerMenu() {
  // para agregar la x en la posicion [1]
  $("#containerBurgerMenu a:eq(0)").after(`
  <img
    id="btnChangeToBlack"
    src="img/logos/x.svg"
    alt="img-x"
    width="44"
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  />`);

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

    // se elimina la x de burger menu
    $("#btnChangeToBlack").remove();

    // se crea el btn para abrir el burger menu
    crearImgBurgerMenu();
  });
}

// function para agregar el btn original del burger menu, para abrirlo
function crearImgBurgerMenu() {
  $("#containerBurgerMenu a:eq(0)").after(`
  <img
    id="btnChangeToWhite"
    src="img/logos/burger-menu.svg"
    alt="img-burger-menu"
    width="77"
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  />`);

  clickBtnOpenBurgerMenu();
}

// --------------------
// cambia los svg al hacer hover en desktop
function changeColorSVG() {
  // instagram
  $("#imgInstaWhite").mouseenter(() => {
    $("#imgInstaWhite").hide();
    $("#imgInstaRed").show();
  });

  $("#imgInstaRed").mouseleave(() => {
    $("#imgInstaRed").hide();
    $("#imgInstaWhite").show();
  });

  // facebook
  $("#imgFaceWhite").mouseenter(() => {
    $("#imgFaceWhite").hide();
    $("#imgFaceRed").show();
  });

  $("#imgFaceRed").mouseleave(() => {
    $("#imgFaceRed").hide();
    $("#imgFaceWhite").show();
  });

  // youtube
  $("#imgYTWhite").mouseenter(() => {
    $("#imgYTWhite").hide();
    $("#imgYTRed").show();
  });

  $("#imgYTRed").mouseleave(() => {
    $("#imgYTRed").hide();
    $("#imgYTWhite").show();
  });
}

// cambia los svg al hacer hover en mobile
function changeColorSVGMobile() {
  // instagram
  $("#imgInstaBlack").click(() => {
    $("#imgInstaBlack").hide();
    $("#imgInstaRed2").show();
  });

  // $("#imgInstaRed2").change(() => {
  //   $("#imgInstaRed2").hide();
  //   $("#imgInstaBlack").show();
  // });

  // facebook
  $("#imgFaceBlack").click(() => {
    $("#imgFaceBlack").hide();
    $("#imgFaceRed2").show();
  });

  // $("#imgFaceRed2").mouseleave(() => {
  //   $("#imgFaceRed2").hide();
  //   $("#imgFaceBlack").show();
  // });

  // youtube
  $("#imgYTBlack").click(() => {
    $("#imgYTBlack").hide();
    $("#imgYTRed2").show();
  });

  // $("#imgYTRed2").mouseleave(() => {
  //   $("#imgYTRed2").hide();
  //   $("#imgYTBlack").show();
  // });
}
