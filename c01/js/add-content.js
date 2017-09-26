var today = new Date(); //Create a new data object .
var hoursNow = today.getHours(); //Finde the current hour
var greeting; 

//Display the appropriate greeting based on the current time 
if (hoursNow > 18)
{
greeting = 'Good evning!';	
}
else if (hoursNow > 12) 
{
greeting = 'Good afternoon!';
} 
else if (hoursNow < 2) 
{
greeting = 'Good morning';
} 
else
{
	greeting = 'Welcome';
} 

document.write('<h3>' + greeting + '</h3>');