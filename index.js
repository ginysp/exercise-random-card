window.onload = function()
{
    init();	
};

function init()
{
	var numbers = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
	var types = ["spades","clubs","hearts","diamonds"];
    
	var numberchosen = numbers[Math.floor(Math.random() * numbers.length)];
	var typechosen = types[Math.floor(Math.random() * types.length)];	
	
    var p = document.querySelector("#number");
    p.innerHTML = numberchosen;
	
	var t = document.querySelector("#type");
    t.className = typechosen;
}