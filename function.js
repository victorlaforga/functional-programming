
const dataArray = data.results.bindings;
const lengthObjects = dataArray.map(dataArray => dataArray.lengte.value)

console.log(dataArray)
console.log(lengthObjects)

lengthObjects.map(function(sizeObj) {
	
	// Dit if statement heb ik van Robert https://codepen.io/robertspier/pen/oNNqVNX?editors=0001
	if(sizeObj === "[N.B.]") {

					// Create a new object, use x + y for dimensions
					sizeObj = {
						x: null,
						y: null
					}
				} 

	if(sizeObj && typeof sizeObj === "string") {
		// Use a RegExp to match any content between ( and )
			// and remove it from the string 
			// bron: https://codepen.io/robertspier/pen/oNNqVNX?editors=0001
		sizeObj = sizeObj.replace(sizeObj.match(/\(.*?\)/g), "");
		// sizeObj = sizeObj.replace('x', "");
		sizeObj = sizeObj.replace(/;/g, "");
		sizeObj = sizeObj.replace(/x/g, "");
		
		console.log(sizeObj)
	}

	// if(sizeObj.charAt(0) === "L") {
		
	// }
	
	


	console.log(sizeObj)
})


// function fixCharacters(lengthObj) {
// 		return lengthObj
// 			.replace(/[,]/g, '.')
// 			.replace(/circa/g, '')
// 			.replace(/midden/g, '')
// 			.replace(/object/g, '')
// 			.replace(/algemeen/g, '')
// 			.replace(/[;]/g, '')
// 			.replace(/[:]/g, '')
// 	}
// 	fixCharacters;

// function filterData(dataArray) {
	
		
// 		// Remove entries for length and width 
// 		// that are unknown (niet bekend)
// 		if(lengthObj.value === "[N.B.]") {

// 			// Create a new object, use x + y for dimensions
// 			lengthObj = {
// 				x: null,
// 				y: null
// 			}
// 		} 
		
// 		// Check if the object hasn't been created here yet
// 		if(lengthObj && typeof lengthObj === "string") {

// 			// Use a RegExp to match any content between ( and )
// 			// and remove it from the string
// 			lengthObj = lengthObj.replace(lengthObj.match(/\(.*?\)/g), "");
			
// 			// Remove the CM, we don't need the CM suffix
// 			lengthObj = lengthObj.replace('cm', "");
			
// 			// We can now also remove all spaces, we don't need spaces
// 			// \s means whitespace in regex, /g means 'all instances' (global)
// 			lengthObj = lengthObj.replace(/\s/g, "");
			
// 			// Let's split the data on the X, it is used to seperate
// 			// Delta is just a placeholder term, it could also so 'dimension'
// 			let splitDelta = lengthObj.split('X');
			
// 			lengthObj = {
// 				x: splitDelta[0],
// 				y: splitDelta[1]
// 			}
// 		}
		
// 		console.log(lengthObj);
	
	
// 	let newArr = arr;
// 	return newArr;

// }
// main();