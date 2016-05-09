
for(var i = 0; i < 986; i++){
var tile = document.createElement("div");

	tile.style.backgroundColor = "white";
	tile.style.paddingBottom = "3%";
	tile.style.width = "3%";
	tile.style.float = "right";
	tile.style.border = "1.5px solid black";
	tile.style.margin = "0.2%";
	tile.style.boxSizing = "border-box";
	
	tile.addEventListener('click', function(event) {
	  var currColor = event.target.style;
	  	if(!currColor.backgroundColor){
	  		currColor.backgroundColor = oldColor;
	  	} else {
			currColor.backgroundColor = "";
	  	}
});
	document.body.appendChild(tile);
}	


var oldColor = "red";
var newColors = ["green", "yellow", "blue", "orange", "pink", "purple", "grey", "aqua", "olive", "plum", "lightcoral", "teal", "forestgreen", "steelblue"];
	
for(var i = 0; i < newColors.length; i++){
	var palette = document.createElement("div");
	
		palette.style.backgroundColor = newColors[i];	
		palette.style.padding = "3%";
		palette.style.width = "3%";
		palette.style.height = "3%"
		palette.style.float = "right";
		palette.style.border = "1.5px solid black";
		palette.style.margin = "0.2%";
		palette.style.boxSizing = "border-box";

	
		palette.addEventListener('click', function(event) {
			oldColor = event.target.style.backgroundColor;
});
	document.body.appendChild(palette);
};
