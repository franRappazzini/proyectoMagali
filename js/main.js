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
