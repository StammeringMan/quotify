
var quotation = [

	{	
		"quote": "The way of getting started is to quit talking and begin doing.",
		"author": " - Walt Disney"
	},
	
	{	
		"quote": "The Pessimist sees difficulty in every opportunity.The Optimist sees the opportunity in every difficulty",
		"author": " - Winston Churchill"
	},

	{
		"quote": "Don’t let yesterday take up too much of today.",
		"author": "- Will Rogers"
	},

	{
		"quote": "You learn more from failure than from success. Don’t let it stop you. Failure builds Character.",
		"author": "- Unknown"
	},

	{
		"quote": "It’s not whether you get knocked down, It’s whether you get up.",
		"author": "– Vince Lombardi"
	},

	{
		"quote": "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.",
		"author": "- Steve Jobs"
	},

	{
		"quote": "People who are crazy enough to think they can change the world, are the ones who do.",
		"author": "- Rob Siltanen"
	},

	{
		"quote": "Failure will never overtake me if my determination to succeed is strong enough.",
		"author": "- Og Mandino"
	},

	{
		"quote": "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That’s the classic entrepreneur.",
		"author": "- Mohnish Pabrai"
	}
]


var result = quotation;

var key = [];
var value = [];

result.forEach(function(item){
 
  for(var i in item)
  {
    key.push(i);
    value.push(item[i]);
  }
   
}); 

var quotationArray = [];
var authorArray = [];
for(var i = 0; i < value.length; i++){
	if(i % 2 === 0){
		quotationArray.push(value[i]);
    }else{
		authorArray.push(value[i]);
    }
}



var colors = [
	'#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"
]

var colorIndex = 0;
var timer;
var col = document.getElementById('body');
var mainquotescol = document.getElementById('mainquotes');
var paragraphcol = document.getElementById('paragraph');
var fbcol = document.getElementById('fbutt');
var twitcol = document.getElementById('twitbutt');
var quotescol = document.getElementById('quotes');
var  getThingsDone = document.getElementById('next');


getThingsDone.addEventListener('click', function(){
	var randomnumber = Math.floor(Math.random() * (quotationArray.length, authorArray.length));
	document.getElementById('mainquotes').innerHTML = quotationArray[randomnumber];
	document.getElementById('paragraph').innerHTML = authorArray[randomnumber];

}); 

getThingsDone.addEventListener('click', function(){
		
		if(colorIndex >= colors.length){
			colorIndex = 0;
		}

		mainquotescol.style.color = colors[colorIndex];
		paragraphcol.style.color = colors[colorIndex];
		quotescol.style.color = colors[colorIndex];
		twitbutt.style.backgroundColor = colors[colorIndex];
		fbcol.style.backgroundColor = colors[colorIndex];
		mainquotescol.style.color = colors[colorIndex];
		col.style.backgroundColor = colors[colorIndex];
		getThingsDone.style.backgroundColor = colors[colorIndex];
		colorIndex++;	
});


