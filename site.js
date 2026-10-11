(function () {
  var list = window.WIDGETS || [];
  var container = document.getElementById('widgets');
  document.getElementById('empty').hidden = list.length > 0;
  list.forEach(function (w) {
    var card = document.createElement('article');
    card.className = 'card';
    var h = document.createElement('h3');
    h.textContent = w.name;
    var p = document.createElement('p');
    p.textContent = w.description || '';
    var access = document.createElement('p');
    access.className = 'meta';
    access.textContent = 'Accès : ' + (w.access || 'read table');
    var a = document.createElement('a');
    a.href = w.url;
    a.textContent = 'Ouvrir le widget';
    var code = document.createElement('code');
    code.textContent = new URL(w.url, location.href).href;
    card.append(h, p, access, a, code);
    container.appendChild(card);
  });
})();
