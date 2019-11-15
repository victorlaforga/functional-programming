// // import { dataIntoNumber } from './cleanData.js';
// import { useData } from './cleanData.js';

// // import { restOfDataWithSize } from './cleanData.js';

// console.log(restOfDataWithSize);

// const allSizes = restOfDataWithSize.map(element =>{
//     const pic = element.pic;
//     const title = element.title;
//     const size = element.size;
//     return [pic,size,title];
//   });
//   const data = restOfDataWithSize;
// // const data = dataIntoNumber.sort(d3.ascending);
// const zoom = d3.zoom();

// // tooltip samen met Gio gemaakt
// let tooltip = d3.select("#content").append("div")
//                                     .style("position", "absolute")
//                                     .style("visibility", "hidden");
// const width = 100000;
// const height = 550;
// const barWidth = 70;
// const barOffset = 5;

// const myChart = d3.select("#content").append("svg")
//                         .attr("width", width)
//                         .attr("height", height)
//                         .selectAll("rect")
//                             .data(data)
//                             .enter()
//                             .append("rect")
//                                 .attr("width", barWidth)
//                                 .attr("height", function(d) {
//                                     return d.size;
//                                 })
//                                 .on('mouseout', function() {
//                                     tooltip.style("visibility", "hidden")
//                                 })
//                                 .on("click", (d) => {
//                                     tooltip
//                                     .style("visibility", "visible")
//                                     .text(d.title);
//                                 })
//                                 // .append("svg:image")
//                                 // .attr("xlink:href",function(d) {return d.pic;})
//                               .attr("x", function(d, i){
//                                     return i * (barWidth + barOffset);
//                                 })
//                                 .attr("y", function(d){
//                                     return height - d.size;
//                                 });


        
//     // .append('image')
//     // .attr('xlink:href', 'http://www.clker.com/cliparts/P/Z/w/n/R/W/red-smiley-face-hi.png')
//     // .attr("width", x.bandwidth())
//     // .attr("height", "28px")
//     // .attr("y", function (d) { return y(d.frequency) - 14; })
//     // .attr("x", function (d) { return x(d.letter); })
//     // .attr("preserveAspectRatio", "none");