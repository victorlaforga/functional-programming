import { runQuery, url, query } from "./function.js";

export function useData() {
  runQuery(url, query).then(results => {
    
    const lengthObjects = results.map(results => results.lengte.value);

    const cleanData = lengthObjects.map(size => {
      size = size.toLowerCase();

      // regex expression which matches all characters except in between ()
      size = size.replace(size.match(/\(.*?\)/g), "");
      // regex expression which matches all characters except: l, numbers, '.' , whitespace & x
      size = size.replace(/[^l0-9\d\sx.]/g, "");

      if (typeof size === "string") {
        size = size.replace(/,/g, ".");

        if (size.match("l")) {
          return size.slice(0, 7).replace(/[^0-9/.]/g, "");
        }
        if (size.match(/[ˆ(\d|+|\-)]/g) === null) {
          return size.replace(size, "");
        }

        // if first character of string is a number, slice vanaf het 3de character (omdat er geen lengtes zij van meer dan 4 cijfers)
        if (size.charAt(0) != NaN) {
          return size.slice(0, 3);
        }
      }
    });

    let dataIntoNumber = cleanData.map(Number);

    console.log(dataIntoNumber);

    const restOfData = results.map(item => {
      let newArr = {};
      newArr.title = item.title.value;
      newArr.pic = item.pic.value;
      newArr.regio = item.placeRegioName.value;
      return newArr;
    });
    // for loop gemaakt met Eyup & Robert
    for (let count = 0; count < restOfData.length; count++) {
      restOfData[count].size = dataIntoNumber[count];
    }
    const restOfDataWithSize = restOfData;
    const data = restOfDataWithSize;
    

    // tooltip samen met Gio gemaakt
    let tooltip = d3
      .select("#content")
      .append("div")
      .style("position", "fixed")
      .style("overflow", "scroll")
      .style("visibility", "hidden");
    const width = 100000;
    const height = 550;
    const barWidth = 70;
    const barOffset = 5;
    const scale = d3.scaleLinear()
                  .domain([d3.min(data), d3.max(data)])
                  .range([0, width - 100]);

    // Add scales to axis
    const y_axis = d3.axisLeft()
                   .scale(scale);
    const x_axis = d3.axisBottom()
                     .scale(scale);    


            
                   

    const myChart = d3
      .select("#content")
      .append("svg")
      .call(x_axis)
      .call(y_axis)
      .attr("width", width)
      .attr("height", height)
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      
      .attr("width", barWidth)
      .attr("height", function(d) {
        return d.size;
      })
      .on("mouseout", function() {
        tooltip.style("visibility", "hidden");
      })
      .on("click", d => {
        tooltip.style("visibility", "visible")
                .text(d.title);
                
      })
      .attr("x", function(d, i) {
        return i * (barWidth + barOffset);
      })
      .attr("y", function(d) {
        return height - d.size;
      });

    return cleanData;
  });
}
useData();

