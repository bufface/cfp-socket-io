/*
  true => juega con las X
  false => juega con los O
*/
(function () {
  var juego = false;

  function $(el) {
    return document.querySelector(el);
  }

  function jugar(elemento_seleccionado) {
    if (juego) {
      elemento_seleccionado.innerHTML = 'X';
    } else {
      elemento_seleccionado.innerHTML = '0';
    }
  }

  function definir_eventos() {
    var elements = document.querySelectorAll('.cat-element');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      element.addEventListener('click', function () {
        jugar(this);
      })
    }
  }

  function build_cat() {
    for (var i = 0; i < 9; i++) {
      var item = build_item(i);

      $('#cat').innerHTML += item;
    }

    definir_eventos();
  }

  function build_item(i) {
    return '<div class="cat-element col-xs-4" id="elemento-' + i + '"></div>'
  }

  build_cat();
})();