function init() {

// Margins & Dimensions of graph
var margin = {top: 15, right: 30, bottom: 25, left: 30},
                  width = 460 - margin.left - margin.right,
                  height = 450 - margin.top - margin.bottom;

/*------------------- Append the svg object to the body of the page --------------------------------------
  Below: Margins give some padding to the chart in terms of 'width' and 'height'.
----------------------------------------------------------------------------------------------------------*/

var svg = d3.select("#chart")
            .append("center")   // Pushes Chart into center of Screen
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                  "translate(" + margin.left + "," + margin.top + ")");

  
// Parse the Data / https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_stacked.csv
// wasteSectorIntensity2.csv

d3.csv("WasteGenerationByWasteMaterial.csv", function(data) { 

  // List of subsectors = header of each sector in csv file: 
  var subsectors = data.columns.slice(1)

  // List of sectors = Waste Generators: value of the first column 'year' (X-Axis)
  var sectors = d3.map(data, function(d){return(d.year)}).keys()

  // Add X-Axis
  var x = d3.scaleBand()
            .domain(sectors)
            .range([0, width])  // Range = chart width 
            .padding([0.1])     // Padding 1% of chart width

/*--------------------------------------------------------------------------
Below: The call() function passes x-axis and associated 'ticks' argument
       and the 'transform=translate' plus height of chart to 'g' grouping
       function, which is then appended to the 'SVG' chart.
----------------------------------------------------------------------------*/

  svg.append("g")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(x).tickSizeOuter(1));

  // Add Y-Axis
  var y = d3.scaleLinear()
            .domain([0, 75])       // Domain = y-scale measurement (tick values) ends at 500 tonnes limit
            .range([ height, 0 ]);  // Range = chart height

/*------------------------------ BELOW ----------------------------------
Pass 'y' (shown above) variable as argument to call() function
Insert call() function to group 'g' then append to group 'svg'.
-------------------------------------------------------------------------*/

  svg.append("g")
     .call(d3.axisLeft(y));

  // color palette = one color per subsector / d3.schemeAccent / d3.schemeCategory10

  var color = d3.scaleOrdinal(d3.schemeCategory10)
                .domain(subsectors)
        //  .range(['#2e8b57','#c71585','#9400d3','#FF7F00'])


/*------------------------------ D3 STACK FUNCTION ---------------------------------------------
The d3.stack() function stacks our data and determines new positions of the 'subsectors' on the
y-Axis and passes it to the 'stackedData' variable.
------------------------------------------------------------------------------------------------*/

  var stackedData = d3.stack()
                      .keys(subsectors) // stacked according to subsector
                      (data)
  //  .order(d3.stackOrderAscending); - this determines stacking order (Doesn't work here)

  /* -----------------------------------------------------------------
                          Create a tooltip
  --------------------------------------------------------------------*/
  var tooltip = d3.select("#chart")
                  .append("center")
                  .append("div")
                  .style("opacity", 0)        // Opacity of tooltip is completely invisible via CSS
                  .attr("class", "tooltip")   // Class is 'tooltip'
  

/*--------------------- BELOW: 3 MOUSE FUNCTIONS for TOOLTIP ------------------------------------
                MOUSEOVER: Uses HTML 'span' styling for the 'tooltip'
-------------------------------------------------------------------------------------------------*/

  var mouseover = function(d) {
        var substack = d3.select(this.parentNode).datum().key;  // This is the Key
        var substackValue = d.data[substack];                   // This is the Value
        tooltip
            .html("<b><span style='color:blue'>Substack: </span></b>" + substack + "<br>" + 
            "<b><span style='color:blue'>Million Tonnes: </scan></b>" + substackValue)
            .style("opacity", 1)  // Opacity 1 means it's compeletely visible when hovered over substack
  }


/*------------------------------------- MOUSEMOVE --------------------------------------------
The styling functions below specify 'left' + 'top' coordinate position of 'tooltip' on canvas
----------------------------------------------------------------------------------------------*/
  var mousemove = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }

/*------------------------------------- MOUSEOUT --------------------------------------------
            When mouse is moved back out - 'tooltip' once again becomes invisible
----------------------------------------------------------------------------------------------*/

  var mouseout = function(d) {
    tooltip
      .style("opacity", 0)  // When mouse cursor is moved away, it once again becomes invisible
  }

	
/*---------------------------------------- Show the bars ----------------------------------- */

  svg.append("g")
     .selectAll("g")
        // Enter in the stack data = loop key per key = year per year
     .data(stackedData)
     .enter()
     .append("g")
     .attr("fill", function(d) { return color(d.key); })  // Return color based on key category
     .selectAll("rect")
      // Re-enter second time = loop subsector per subsector to add all rectangles
    .data(function(d) { return d; })
    .enter().append("rect")
        .attr("x", function(d) { return x(d.data.year); })  // Returns year (x-axis) referenced from .csv file
        .attr("y", function(d) { return y(d[1]); })         // 
        .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .attr("width", x.bandwidth()) // Automatically calculates width of each bar based on width of chart
        .attr("stroke", "pink")     // Creates thin line of separation between each block
        .on("mouseover", mouseover) // Calls mouseover function
        .on("mousemove", mousemove) // Calls mousemove function
        .on("mouseout", mouseout)   // Calls mouseout function

})


}

window.onload = init;

