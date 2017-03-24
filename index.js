function getFirstSelector(selector) {
    var dom = document.querySelector(selector);
    return dom;
}
function nestedTarget() {
    return document.querySelector('#nested .target');
}
function deepestChild() {
      var list = document.getElementById('grand-node').querySelectorAll('div');
      var amount = list.length;
      return list[amount - 1];
}
function increaseRankBy(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
      for (var i = 0; i < list.length; i++) {
      var thing = parseInt(list[i].innerHTML);
      list[i].innerHTML = (thing + n);
    }
    return list;
}
