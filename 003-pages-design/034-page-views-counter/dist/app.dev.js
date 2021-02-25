"use strict";

var countElement = document.getElementById('count');
visitorCounter();

function visitorCounter() {
  fetch("https://api.countapi.xyz/update/f-a/jo-jo/?amount=1").then(function (res) {
    return res.json();
  }).then(function (res) {
    countElement.innerHTML = res.value;
  });
}