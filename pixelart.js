
for(var i = 0; i < 1050; i++){
var tile = document.createElement("div");

	// tile.style.backgroundColor = "white";
	// tile.style.paddingBottom = "3%";
	// tile.style.width = "3%";
	// tile.style.float = "right";
	// tile.style.border = "1.5px solid black";
	// tile.style.margin = "0.2%";
	// tile.style.boxSizing = "border-box";

	tile.style.backgroundColor = "white";
	tile.style.paddingBottom = "2%";
	tile.style.width = "2%";
	tile.style.float = "right";
	tile.style.border = "1px solid black";
	// tile.style.margin = "0.1%";
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
var newColors = ["6D696A", "6B9080", "EF5D60", "809BCE", "FCF6BD", "247BA0", "051014", "C3423F", "2F3061", "AFA2FF", "FFC857", "119DA4", "A8D0DB", "7180AC", "D0E37F", "F87060", "57E2E5", "6A7FDB", "45CB85", "F2DDA4", "8BAAAD", "BFF0D4", "46B1C9", "8CB369", "EE964B", "FF3864", "F8F32B", "AAC0AA", "88A2AA"];

for(var i = 0; i < newColors.length; i++){
	var palette = document.createElement("div");

		// palette.style.backgroundColor = newColors[i];
		// palette.style.padding = "3%";
		// palette.style.width = "3%";
		// palette.style.height = "3%";
		// palette.style.float = "right";
		// palette.style.border = "1.5px solid black";
		// palette.style.margin = "0.2%";
		// palette.style.boxSizing = "border-box";


		palette.style.backgroundColor = newColors[i];
		palette.style.padding = "1.5%";
		palette.style.width = "2%";
		palette.style.height = "2%";
		palette.style.float = "right";
		palette.style.border = "1px solid black";
		palette.style.margin = "0.15%";
		palette.style.boxSizing = "border-box";


		palette.addEventListener('click', function(event) {
			oldColor = event.target.style.backgroundColor;
});
	document.body.appendChild(palette);
}
