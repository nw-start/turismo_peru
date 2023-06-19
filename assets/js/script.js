$(document).ready(function(){
  // Agregua desplazamiento suave a todos los enlaces
  $("a").on('click', function(event) {

    // Es importante que this.hash tenga un valor antes de anular el comportamiento predeterminado
    if (this.hash !== "") {
      // Evitar el comportamiento predeterminado
      event.preventDefault();

      // Almancena hash
      var hash = this.hash;

      // Usando el método animate () de jQuery para agregar un desplazamiento de página suave
      // El número "1000" especifica el número de milisegundos que se tarda en desplazarse al área especificada
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Agrega hash (#) a la URL cuando termine de desplazarse (comportamiento de clic predeterminado)
        window.location.hash = hash;
      });
    } // Cierre del condicional
  });
});