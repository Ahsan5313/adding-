var heading1 = document.createElement( "h1" );
var text = document.createTextNode ("this is heading");
heading1.appendChild(text);

var my_div = document.getElementsByClassName("my_div")[0];

my_div.appendChild(heading1);

heading2 = document.getElementsByTagName("h1")[1];
my_div.removeChild(heading2);

var heading0 = document.createElement( "h1" );
var text0 = document.createTextNode ("this is heading 0");
heading0.appendChild(text0);
heading1 = document.getElementsByTagName("h1")[0];
my_div.insertBefore(heading0, heading1);