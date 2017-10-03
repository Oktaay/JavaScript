//Deklrerar variabel
var title;
var message;

//Assignar ett värde till variabeln
title = "Molly's Special Offers"
message = '<a href="https://www.instagram.com/onewaykarate/">25% off!</a>'

//Hämtar id=title
var elTitle = document.getElementById('title');
//Skriver över till värdet vi har valt
elTitle.innerHTML = title;

var elMessage = document.getElementById('note')
elMessage.innerHTML = message;
