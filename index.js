// const query = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
// PREFIX dc: <http://purl.org/dc/elements/1.1/>
// PREFIX dct: <http://purl.org/dc/terms/>
// PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
// PREFIX edm: <http://www.europeana.eu/schemas/edm/>
// PREFIX foaf: <http://xmlns.com/foaf/0.1/>

// SELECT ?lengte ?cho ?place ?placeRegio ?placeRegioName ?title ?pic WHERE {
// ?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2091> .
// ?cho dct:spatial ?place .
// ?cho dc:title ?title .
// ?cho edm:isShownBy ?pic .
// ?place skos:broader ?placeRegio .
// ?placeRegio skos:prefLabel ?placeRegioName .
//   ?cho dct:extent ?lengte.
// } 
// `;
// const url =
//   "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-16/sparql";

// const runQuery = (url, query) => {
//   // Call the url with the query attached, output data
//   fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
//     .then(res => res.json())
//     .then(json => {
//   const dataArray = json.results.bindings;
//   const lengthObjects = dataArray.map(dataArray => dataArray.lengte.value);

// const cleanData = lengthObjects.map(size => {
//   size = size.toLowerCase();
//   // regex expression which matches all characters except: l, numbers, '.' & whitespace
//   size = size.replace(/[^l0-9\d,/.]/g, "");

//   if (typeof size === "string") {
//     size = size.replace(/,/g, ".");

//     if (size.match("l")) {
//       size = size.slice(0, 7).replace(/[^0-9/.]/g, "");
//     } else if (size)
//       if (size.match(/[ˆ(\d|+|\-)]/g) === null) {
//         return size.replace(size, "");
//       }

//     // if first character of string is a number, slice vanaf het 3de character (omdat er geen lengtes zij van meer dan 4 cijfers)
//     if (size.charAt(0) != NaN) {
//       return size.slice(0, 3);
//     }
//   }
// });

// let dataIntoNumber = cleanData.map(Number);

// // function smallerThan(size) {
// //   return size >= 5;
// // }

// // function ifNan(size) {
// //   return !Number.isNaN(size);
// // }

// dataIntoNumber = dataIntoNumber.filter(smallerThan, ifNan);

// console.log(dataIntoNumber);
      
//     });
    
// };

// runQuery(url, query);
