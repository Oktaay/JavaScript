//Deklarerar Variabel 
var username; 
var message;

//Assainar värdet av variabeln 
username = "Molly";
message = "See our upcoming range";

//Hämtar SPAN med ID namnet ('name')
var elName = document.getElementById('name'); 
//Istället för Friend så skriver textContet över till MOLLY
elName.textContent = username; 

var elNote = document.getElementById('note')
elNote.textContent = message;