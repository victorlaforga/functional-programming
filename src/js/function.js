
export const query = `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?lengte ?cho ?place ?placeRegio ?placeRegioName ?title ?pic WHERE {
?cho edm:isRelatedTo <https://hdl.handle.net/20.500.11840/termmaster2091> .
?cho dct:spatial ?place .
?cho dc:title ?title .
?cho edm:isShownBy ?pic .
?place skos:broader ?placeRegio .
?placeRegio skos:prefLabel ?placeRegioName .
  ?cho dct:extent ?lengte.
} 
`;
export const url =
  "https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-16/sparql";




export async function runQuery (url, query) {
    // Call the url with the query attached, output data
    let fetched = await fetch(url + "?query=" + encodeURIComponent(query) + "&format=json")
      .then(res => res.json())
      .then(json => {
        const dataArray = json.results.bindings;
        
        
        return dataArray;
      })
    return fetched;    
  };
  
  
  

