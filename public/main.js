/*
  true => juega con las X
  false => juega con los O
*/
(function () {

  function $(el) {
    return document.querySelector(el);
  }

  function jugar(elemento_seleccionado) {
    if (true) {
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
        var posicion = this.id.split('-')[1];
        socket.play(posicion);
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

  var socket = new Socket(function (figura, posicion) {
    $('#elemento-' + posicion).innerHTML = figura;
  }, 2, 3);
})();