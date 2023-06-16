// Añadir la clase selected cuando se seleccione un item de la barra de navegación. Usando jquery
$(document).ready(function () {
  $(".nav-link").on("click", function () {
    $(".nav-link").removeClass("selected");
    $(this).addClass("selected");
  });
});
