
///********[DV3]- The Radial Multi-Line Chart***************///
/*

	chart data characteristics:
	> Displays the amounts in tonnes of the different waste types 
	> The buttons are for filtering the year period 
	> the nested inner radius pie-chart shows the different waste categories
	> the spokes or extended radii show the different waste sub-types
	> the multiple lines of different hue show the different industries
	
	must-have features included
	> proper scaling and legend has been implemented
	
	interactive features included
	> hover-over in the legend
	> button filter
	> hover-over tooltip for data points
	> transformation into a linear chart
	> fisheye zoom-in

	references:
	> Yan Holtz, Line graph with several groups, D3 js Graph Gallery, May 12 2021, <https://www.d3-graph-gallery.com/graph/line_several_group.html>
	> Cale Tilford, Oct 22 2019, Radial Line Chart, Observable.hq, May 3 2021, <https://bl.ocks.org/tlfrd/fd6991b2d1947a3cb9e0bd20053899d6>
	> Zack Ciminera, Apr 15 2019, Flat-to-Radial area chart, Observable, May 20 2021, <https://observablehq.com/@zechasault/flat-to-radial-area-chart>
*/

//global variable to keep track of what chart year period is being chosen/displayed
surfno=1;	


//main function responsible for generating the chart(s)
window.onload=function init(file){

	//to begin with the 2019-18 chart year period
	//file = typeof file !== '[Object Event]' ? file : "project2.csv";
	//file = file || "project2.csv";
	if(surfno==1)
	{
		file="project2.csv";
		d3.select("#t1").style("border", "5px solid Black");
		d3.select("#t1").style("font-weight", "bold");
	}
	
	//variables to standardize the svg for the chart and legend placeholders
	var margin = {top: 50, right: 20, bottom: 20, left: 50};
    
    var width = 1200 - margin.left - margin.right,
    	height = 1000 - margin.top - margin.bottom;
    
    var svg = d3.select("#linechart").append("svg")
    	.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.attr("opacity", 1)
		.attr("id", "chart");
	
	// for the legend to be alongside the chart
	 var svg2 = d3.select("#linechart").append("svg")
					.attr("width",300)
					.attr("height",height)
					.attr("id", "legend");
	
	
    // placement of the radial chart
    var g = svg.append("g")
    	.attr("transform", "translate(" + (width / 2+50) + "," + (height / 2 +50)+ ")");
    
    var innerRadius = 250,
        outerRadius = Math.min(width, height) / 2 - 6;
    
    var fullCircle = 2 * Math.PI * 23/24;
    
	// scaling parameters
    var x = d3.scaleLinear()
        .range([0, fullCircle]);
    
    var y = d3.scaleLinear()
    		.range([innerRadius, outerRadius]);
    
	// different hues pre-set for the multiple lines
    var color=["rgb(255, 0, 0)","rgb(0, 0, 255)","rgb(60, 179, 113)","rgb(238, 130, 238)","rgb(255, 165, 0)","rgb(106, 90, 205)","rgb(51, 204, 204)","rgb(255, 246, 77)","rgb(171, 167, 204)"];
	var file;
	
	// event listeners for the button clicks
	d3.select("#t2")
			.on("click", function(){
				var myobj = document.getElementById("chart");
				myobj.remove();
				var myobj2 = document.getElementById("legend");
				myobj2.remove();
				d3.select("#t1").style("border", "1px solid Yellow");
				d3.select("#t1").style("font-weight", "400");
				d3.select("#t3").style("border", "1px solid Yellow");
				d3.select("#t3").style("font-weight", "400");
				d3.select("#t2").style("border", "5px solid Black");
				d3.select("#t2").style("font-weight", "bold");
				surfno+=1;
				file="project2_2.csv";	// year 2017-18
				init("project2_2.csv");});
				
	d3.select("#t1")
			.on("click", function(){
				var myobj = document.getElementById("chart");
				myobj.remove();
				surfno+=1;
				var myobj2 = document.getElementById("legend");
				myobj2.remove();
				d3.select("#t3").style("border", "1px solid Yellow");
				d3.select("#t3").style("font-weight", "400");
				d3.select("#t2").style("border", "1px solid Yellow");
				d3.select("#t2").style("font-weight", "400");
				d3.select("#t1").style("border", "5px solid Black");
				d3.select("#t1").style("font-weight", "bold");
				file="project.csv";		// year 2018-19
				init("project2.csv");});

	d3.select("#t3")
			.on("click", function(){
				var myobj = document.getElementById("chart");
				myobj.remove();
				surfno+=1;
				var myobj2 = document.getElementById("legend");
				myobj2.remove();
				d3.select("#t1").style("border", "1px solid Yellow");
				d3.select("#t1").style("font-weight", "400");
				d3.select("#t2").style("border", "1px solid Yellow");
				d3.select("#t2").style("font-weight", "400");
				d3.select("#t3").style("border", "5px solid Black");
				d3.select("#t3").style("font-weight", "bold");
				file="project2_3.csv";		// year 2016-17
				init("project2_3.csv");});
			
	d3.csv(file,function(d) {
		d.Type = d.Type;
		d.Subtype=+d.Subtype;
		d.Agriculture = +d.Agriculture;
		d.Mining=+d.Mining;
		d.Manufacturing=+d.Manufacturing;
		d.Electric=+d.EGW;
		d.Construction=+d.Construction;
		d.Public=+d.Public;
		d.Other=+d.All_other_industries;
		d.Households=+d.Households;
		d.Imports=+d.Imports;

		
		return d;
    }, function(error, data) {
      if (error) throw error;
      
	  // to separate out the columns into an array to change in the brushing tool in the linear chart
	  var separate1 = data.map(function(d) { return d.Agriculture; });
	  var separate2 = data.map(function(d) { return d.Mining; });
	  var separate3 = data.map(function(d) { return d.Manufacturing; });
	  var separate4 = data.map(function(d) { return d.Electric; });
	  var separate5 = data.map(function(d) { return d.Construction; });
	  var separate6 = data.map(function(d) { return d.Public; });
	  var separate7 = data.map(function(d) { return d.Other; });
	  var separate8 = data.map(function(d) { return d.Households; });
	  var separate9 = data.map(function(d) { return d.Imports; });
	  
	  //according to the columns with the most extreme values
      x.domain(d3.extent(data, function(d) { return d.Type; }));
  	  y.domain(d3.extent(data, function(d) { return d.Agriculture; }));
	
		var dataset=[];

		//setting up the axes and tick values and number
		var yAxis = g.append("g")
		.attr("class", "yaxisRadial")
          .attr("text-anchor", "middle");

		var yTick = yAxis
			.selectAll(".yaxisRadial")
			.data(y.ticks(5))	// number of concentric circles in the y-axis
			.enter().append("g");
      
		yTick.append("circle")
			.attr("fill", "none")
			.attr("stroke", "black")
      		.attr("opacity", 0.2)
			.attr("r", y);
      
		yAxis.append("circle")
      		.attr("fill", "none")
			.attr("stroke", "black")
      		.attr("opacity", 0.2)
			.attr("r", function() { return y(y.domain()[0])});
      
      var labels = yTick.append("text")
          .attr("y", function(d) { return -y(d); })
          .attr("dy", "0.20em")
          .attr("fill", "none")
		  .attr("font-weight","bold")
          .attr("stroke", "#fff")
          .attr("stroke-width", 5)
          .attr("stroke-linejoin", "round");
	
		for (index = 0; index < data.length; ++index) 
		{
			var temp=""
			dataset.push(temp);
		}
  
		// for the subtypes radii, do be on the background layer
		var spokes=g.append("g");
		var drawSpokes=spokes.selectAll("g")
						.data(dataset)
						.enter()
						.append("g")
						.attr("class","radials");
						
		yTick.append("text")
			.attr("y", function(d) { return -y(d); })
			.attr("dy", "0.35em")
			.text(function(d) { return d; });
			
		var xAxis = g.append("g")
		.attr("class","xaxisRadial");
	  
		var xTick = xAxis
				.selectAll(".xaxisRadial")
				.data(dataset)
				.enter().append("g")
				.attr("text-anchor", "middle")
				.attr("fill","black")
				.attr("stroke", "black")
				.attr("stroke-width","5px")
				.attr("background-color","White")
				.attr("transform", function(d, i, arr) {
						return "rotate(" + ((i * (360 / arr.length))-90) + ")translate(" + innerRadius + ",0)";
						});

			xTick.append("line")
				.attr("x2", -5)
				.attr("stroke", "#0000000");

			xTick.append("text")
				.attr('transform', (d,i,arr) => ((i * 360/arr.length) % 360 > 180
                ? "rotate(90)translate(0,18)"
                : "rotate(90)translate(50,18)"));
				
		// explicit iteration to generate the lines
		var j=0;	
		var dots=g.append("g");
			var line = d3.lineRadial()
					.defined(function(d){return d.Agriculture>=0;})
					.angle(function(d,i,arr){return (i * (2*Math.PI / arr.length));})
					.radius(function(d) { return y(d.Agriculture); });
			
			var linePlot = g.append("path")
							.datum(data)
							.attr("fill", "none")
							.attr("id", "line"+(j+1))
							.attr("stroke", function(){return color[j];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			var lineLength = linePlot.node().getTotalLength();
				
				linePlot
					.attr("stroke-dasharray", lineLength + " " + lineLength)
					.attr("stroke-dashoffset", lineLength)
					.transition()
					.duration(1000)
					.delay(1300*j)
					.ease(d3.easeLinear)
					.attr("stroke-dashoffset", 0)
		            .attr("stroke-linejoin", "round");
	
			// the circle for each data point on the lines		
			dots.selectAll(".dot")
				.data(data)
				.enter()
				.append("circle") 
				.transition()
				.duration(500)
				.delay(1300*j)
				.ease(d3.easeLinear)
				.attr("class", "dot") // Assign a class for styling
				.attr("cx", function(d, i, arr){return (y(d.Agriculture))*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})	// to calculate the hypotenuse
				.attr("cy", function(d, i, arr){return (y(d.Agriculture))*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("r", "3px")
				.attr("fill", function(){return color[j];})
				.attr("stroke", "LightBlue")
				.attr("stroke-width","1");

			j+=1;

			var line = d3.lineRadial()
					.defined(function(d){return d.Mining>=0;})
					.angle(function(d,i,arr){return (i * (2*Math.PI / arr.length));})
					.radius(function(d) { return y(d.Mining); });
			
			var linePlot = g.append("path")
							.datum(data)
							.attr("fill", "none")
							.attr("id", "line"+(j+1))
							.attr("stroke", function(){return color[j];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			var lineLength = linePlot.node().getTotalLength();
				
				linePlot
					.attr("stroke-dasharray", lineLength + " " + lineLength)
					.attr("stroke-dashoffset", lineLength)
					.transition()
					.duration(1000)
					.delay(1300*j)
					.ease(d3.easeLinear)
					.attr("stroke-dashoffset", 0)
		            .attr("stroke-linejoin", "round");
	
					
			dots.selectAll(".dot")
				.data(data)
				.enter()
				.append("circle")
				.transition()
				.duration(500)
				.delay(1300*j)
				.ease(d3.easeLinear)
				.attr("class", "dot") 
				.attr("cx", function(d, i, arr){return (y(d.Mining))*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("cy", function(d, i, arr){return (y(d.Mining))*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("r", "3px")
				.attr("fill", function(){return color[j];})
				.attr("stroke", "LightBlue")
				.attr("stroke-width","1");

			j+=1;			
			
					
			var line = d3.lineRadial()
					.defined(function(d){return d.Manufacturing>=0;})
					.angle(function(d,i,arr){return (i * (2*Math.PI / arr.length));})
					.radius(function(d) { return y(d.Manufacturing); });
			
			var linePlot = g.append("path")
							.datum(data)
							.attr("fill", "none")
							.attr("id", "line"+(j+1))
							.attr("stroke", function(){return color[j];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			var lineLength = linePlot.node().getTotalLength();
				
				linePlot
					.attr("stroke-dasharray", lineLength + " " + lineLength)
					.attr("stroke-dashoffset", lineLength)
					.transition()
					.duration(1000)
					.delay(1300*j)
					.ease(d3.easeLinear)
					.attr("stroke-dashoffset", 0)
		            .attr("stroke-linejoin", "round");
	
					
			dots.selectAll(".dot")
				.data(data)
				.enter()
				.append("circle") 
				.transition()
				.duration(500)
				.delay(1300*j)
				.ease(d3.easeLinear)
				.attr("class", "dot") 
				.attr("cx", function(d, i, arr){return (y(d.Manufacturing))*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("cy", function(d, i, arr){return (y(d.Manufacturing))*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("r", "3px")
				.attr("fill", function(){return color[j];})
				.attr("stroke", "LightBlue")
				.attr("stroke-width","1");
			
					
			j+=1;			
					
			var line = d3.lineRadial()
					.defined(function(d){return d.Electric>=0;})
					.angle(function(d,i,arr){return (i * (2*Math.PI / arr.length));})
					.radius(function(d) { return y(d.Electric); });
			
			var linePlot = g.append("path")
							.datum(data)
							.attr("fill", "none")
							.attr("id", "line"+(j+1))
							.attr("stroke", function(){return color[j];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			var lineLength = linePlot.node().getTotalLength();
				
				linePlot
					.attr("stroke-dasharray", lineLength + " " + lineLength)
					.attr("stroke-dashoffset", lineLength)
					.transition()
					.duration(1000)
					.delay(1300*j)
					.ease(d3.easeLinear)
					.attr("stroke-dashoffset", 0)
		            .attr("stroke-linejoin", "round");
	
					
			dots.selectAll(".dot")
				.data(data)
				.enter()
				.append("circle") 
				.transition()
				.duration(500)
				.delay(1300*j)
				.ease(d3.easeLinear)
				.attr("class", "dot") // Assign a class for styling
				.attr("cx", function(d, i, arr){return (y(d.Electric))*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("cy", function(d, i, arr){return (y(d.Electric))*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("r", "3px")
				.attr("fill", function(){return color[j];})
				.attr("stroke", "LightBlue")
				.attr("stroke-width","1");
			

		j+=1;

			var line = d3.lineRadial()
					.defined(function(d){return d.Construction>=0;})
					.angle(function(d,i,arr){return (i * (2*Math.PI / arr.length));})
					.radius(function(d) { return y(d.Construction); });
			
			var linePlot = g.append("path")
							.datum(data)
							.attr("fill", "none")
							.attr("id", "line"+(j+1))
							.attr("stroke", function(){return color[j];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			var lineLength = linePlot.node().getTotalLength();
				
				linePlot
					.attr("stroke-dasharray", lineLength + " " + lineLength)
					.attr("stroke-dashoffset", lineLength)
					.transition()
					.duration(1000)
					.delay(1300*j)
					.ease(d3.easeLinear)
					.attr("stroke-dashoffset", 0)
		            .attr("stroke-linejoin", "round");
	
					
			dots.selectAll(".dot")
				.data(data)
				.enter()
				.append("circle") 
				.transition()
				.duration(500)
				.delay(1300*j)
				.ease(d3.easeLinear)
				.attr("class", "dot") 
				.attr("cx", function(d, i, arr){return (y(d.Construction))*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("cy", function(d, i, arr){return (y(d.Construction))*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("r", "3px")
				.attr("fill", function(){return color[j];})
				.attr("stroke", "LightBlue")
				.attr("stroke-width","1");	
				

			j+=1;

			var line = d3.lineRadial()
					.defined(function(d){return d.Public>=0;})
					.angle(function(d,i,arr){return (i * (2*Math.PI / arr.length));})
					.radius(function(d) { return y(d.Public); });
			
			var linePlot = g.append("path")
							.datum(data)
							.attr("fill", "none")
							.attr("id", "line"+(j+1))
							.attr("stroke", function(){return color[j];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			var lineLength = linePlot.node().getTotalLength();
				
				linePlot
					.attr("stroke-dasharray", lineLength + " " + lineLength)
					.attr("stroke-dashoffset", lineLength)
					.transition()
					.duration(1000)
					.delay(1300*j)
					.ease(d3.easeLinear)
					.attr("stroke-dashoffset", 0)
		            .attr("stroke-linejoin", "round");
	
					
			dots.selectAll(".dot")
				.data(data)
				.enter()
				.append("circle")
				.transition()
				.duration(500)
				.delay(1300*j)
				.ease(d3.easeLinear)
				.attr("class", "dot") 
				.attr("cx", function(d, i, arr){return (y(d.Public))*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("cy", function(d, i, arr){return (y(d.Public))*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("r", "3px")
				.attr("fill", function(){return color[j];})
				.attr("stroke", "LightBlue")
				.attr("stroke-width","1");

			j+=1;

			var line = d3.lineRadial()
					.defined(function(d){return d.Other>=0;})
					.angle(function(d,i,arr){return (i * (2*Math.PI / arr.length));})
					.radius(function(d) { return y(d.Other); });
			
			var linePlot = g.append("path")
							.datum(data)
							.attr("fill", "none")
							.attr("id", "line"+(j+1))
							.attr("stroke", function(){return color[j];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			var lineLength = linePlot.node().getTotalLength();
				
				linePlot
					.attr("stroke-dasharray", lineLength + " " + lineLength)
					.attr("stroke-dashoffset", lineLength)
					.transition()
					.duration(1000)
					.delay(1300*j)
					.ease(d3.easeLinear)
					.attr("stroke-dashoffset", 0)
		            .attr("stroke-linejoin", "round");
	
					
			dots.selectAll(".dot")
				.data(data)
				.enter()
				.append("circle") 
				.transition()
				.duration(500)
				.delay(1300*j)
				.ease(d3.easeLinear)
				.attr("class", "dot") 
				.attr("cx", function(d, i, arr){return (y(d.Other))*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("cy", function(d, i, arr){return (y(d.Other))*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("r", "3px")
				.attr("fill", function(){return color[j];})
				.attr("stroke", "LightBlue")
				.attr("stroke-width","1");

			j+=1;

			var line = d3.lineRadial()
					.defined(function(d){return d.Households>=0;})
					.angle(function(d,i,arr){return (i * (2*Math.PI / arr.length));})
					.radius(function(d) { return y(d.Households); });
			
			var linePlot = g.append("path")
							.datum(data)
							.attr("fill", "none")
							.attr("id", "line"+(j+1))
							.attr("stroke", function(){return color[j];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			var lineLength = linePlot.node().getTotalLength();
				
				linePlot
					.attr("stroke-dasharray", lineLength + " " + lineLength)
					.attr("stroke-dashoffset", lineLength)
					.transition()
					.duration(1000)
					.delay(1300*j)
					.ease(d3.easeLinear)
					.attr("stroke-dashoffset", 0)
		            .attr("stroke-linejoin", "round");
	
					
			dots.selectAll(".dot")
				.data(data)
				.enter()
				.append("circle")
				.transition()
				.duration(500)
				.delay(1300*j)
				.ease(d3.easeLinear)
				.attr("class", "dot") 
				.attr("cx", function(d, i, arr){return (y(d.Households))*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("cy", function(d, i, arr){return (y(d.Households))*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("r", "3px")
				.attr("fill", function(){return color[j];})
				.attr("stroke", "LightBlue")
				.attr("stroke-width","1");	
			

			j+=1;
			
			var line = d3.lineRadial()
					.defined(function(d){return d.Imports>=0;})
					.angle(function(d,i,arr){return (i * (2*Math.PI / arr.length));})
					.radius(function(d) {return y(d.Imports); });
			
			var linePlot = g.append("path")
							.datum(data)
							.attr("fill", "none")
							.attr("id", "line"+(j+1))
							.attr("stroke", function(){return color[j];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			var lineLength = linePlot.node().getTotalLength();
				
				linePlot
					.attr("stroke-dasharray", lineLength + " " + lineLength)
					.attr("stroke-dashoffset", lineLength)
					.transition()
					.duration(1000)
					.delay(1300*j)
					.ease(d3.easeLinear)
					.attr("stroke-dashoffset", 0)
		            .attr("stroke-linejoin", "round");
	
					
			dots.selectAll(".dot")
				.data(data)
				.enter()
				.append("circle") 
				.transition()
				.duration(500)
				.delay(1300*j)
				.ease(d3.easeLinear)
				.attr("class", "dot") 
				.attr("cx", function(d, i, arr){return (y(d.Imports))*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("cy", function(d, i, arr){return (y(d.Imports))*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("r", "3px")
				.attr("fill", function(){return color[j];})
				.attr("stroke", "LightBlue")
				.attr("stroke-width","1");	
							
				
	var sub=["Asphalt","Bricks","Concrete","Rubble", "Plasterboard & cement sheets","Steel","Aluminium","Non-ferrous","Food organics","Garden organics","Timber","Other organics","Non-Contaminated Biosolids","Cardboard","Liquid paperboard","Newsprint & magazines","Office paper","Polyethylene terephthalate","High density polyethylene","Polyvinyl chloride","Low density polyethylene","Polypropylene","Polystyrene","Other plastics","Glass","Textiles","Leather & rubber","Tyres","Other hazardous waste","Ash from coal-fired power stations","Other unclassified materials"];

		drawSpokes.selectAll("line")
			.data(dataset)
			.enter()
			.append("line")
		.attr("x1", 0)
		.attr("y1",0)
		.attr("x2", function(d, i, arr){return (outerRadius+10)*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})
		.attr("y2", function(d, i, arr){return (outerRadius+10)*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
		.style("stroke", "LightGrey")
		.attr("opacity","0.9")
		.style("stroke-width", "1.5px");
	

	drawSpokes.selectAll("text")
	.data(sub)
	.enter()
	.append("text")
	.text(function(d){return d;})
	.attr("x", function(d, i, arr){return (outerRadius+15)*Math.cos(i * (2*Math.PI / arr.length)-(Math.PI/2));})
		.attr("y", function(d, i, arr){return (outerRadius+20)*Math.sin(i * (2*Math.PI / arr.length)-(Math.PI/2));})
				.attr("fill" , "DarkBlue")
				.attr("text-size","0.5px")
				.attr("text-anchor", function(d, i){if(i<sub.length/2){return "start"; } else{return "end";}});
		
		// for the outter arcs to label the waste categories around the circumference of the piechart
 	  svg.append("g")
	  .attr("class", "arcs");
      
		  
		var startingAngles=[];
		var endAngles=[];
	

		for (index = 0; index < data.length; ++index) {
			if(data[index].Type!==""){dataset.push(data[index].Type);
			startingAngles.push(index * (2*Math.PI / data.length));
			endAngles.push(index * (2*Math.PI / data.length));
			}
		}
	  
		endAngles.shift();
		endAngles.push(2*Math.PI);	

		var arcs=[];
		for(i=0;i<endAngles.length;++i){
			var arc = d3.arc()
            .innerRadius(0)
            .outerRadius(innerRadius)
            .startAngle(startingAngles[i])
            .endAngle(endAngles[i]);
		 
		svg.select(".arcs")
			.append("path")
            .attr("d", arc)
            .attr("fill","rgba(204, 255, 255, 0.8)")
			.attr("opacity", "0.5")
			.attr("stroke","#80dfff")
			.attr("stroke-width","1.5")
			.attr("transform", "translate(" + (width / 2 +50) + "," + (height / 2 +50) + ")");
        
		var arc = d3.arc()
            .innerRadius(innerRadius-20)
            .outerRadius(innerRadius)
            .startAngle(startingAngles[i])
            .endAngle(endAngles[i]);
				
	
			svg.select(".arcs")
			.append("path")
            .attr("d", arc)
            .attr("fill","White")
			.attr("opacity", "0.7")
			.attr("id", function() { return "Arc_"+i; }) //Unique id for each slic
			.attr("transform", "translate(" + (width / 2 +50) + "," + (height / 2 +50)+ ")");
		}


	var dataset=[];
	  for (index = 0; index < data.length; ++index) {
	  if(data[index].Type!==""){dataset.push(data[index].Type);}}
	 
	svg.selectAll(".labels")
		.data(dataset)
		.enter().append("text")
		.attr("class", "label")
		.attr("x",5) //function(d){
		.attr("dy", 18)//function(d){
		.append("textPath")
		.attr("xlink:href",function(d,i){return "#Arc_"+i;})
		.text(function(d){
			return d;});
	
	// setting up the tooltip
		var focus = svg.append("g")
            .attr("class", "focus")
			.attr("transform", "translate(" + (width/2+60) + "," + (height/2+60) + ")");

			focus.append("rect")
            .attr("id", "tooltip")
            .attr("width", 125)
            .attr("height", 50)
            .attr("x", 10)
            .attr("y", 25)
            .attr("rx", 4)
            .attr("ry", 4)
			.attr("fill", "Azure")
			.attr("text-anchor","middle")
			.attr("opacity", "0");

			focus.append("text")
			.attr("id", "tooltiplabel")
            .attr("x", 18)
            .attr("y", 18)
			.attr("transform", "translate(15,20)")
			.attr("opacity", 0);
			
			dots.selectAll("circle")
				.on("mouseover", function(d){
					d3.select(this).attr("r", "5px")
					.attr("stroke-width", 2); 
					var n=d3.select(this).attr("cx");
					var m =d3.select(this).attr("cy");
					d3.select("#tooltip").attr("opacity", 1)
					.attr("x", n)
					.attr("y", m)
					var o;
					var temp=[d.Agriculture, d.Mining, d.Manufacturing, d.Electric, d.Construction, d.Public, d.Other, d.Households, d.Imports];

					for(i=0;i<color.length;++i){
						var clr=d3.select(this).attr("fill");
						if(color[i]==clr){o= i;}
						}
					d3.select("#tooltiplabel").attr("opacity", 1)
					.attr("x", n)
					.attr("y", m)
					.text(temp[o]+"  tonnes");})
				.on("mouseout", function(){
					d3.select(this).attr("r", "3px")
					.attr("stroke-width", 1);
					d3.select("#tooltip").attr("opacity", 0);
					d3.select("#tooltiplabel").attr("opacity", 0);//.text("");
					});	
		var sequence=1300;

		  
		var columns=["Agriculture","Mining","Manufacturing","Electricty, Gas and Water","Construction","Public Administration & Safety","All other Industries","Households","Imports"];
 
 		svg2.selectAll("text")
			.data(columns)
			.enter()
			.append("text")
			.attr("id", function(d, i){return "legendText"+i;})
			.attr("x", 80)
			.attr("y", function(d,i){return 10+(i*40);})
      		.attr("dy", "1em")
      		.attr("opacity", 0.6)
      		.text(function(d){return d;}); 
			
		svg2.selectAll('rect')
			.data(columns)
			.enter()
			.append('rect')
			.attr('x', 25)
			.attr('y', function(d,i){return 10+(i*40);})
			.attr('width', 20)
			.attr('height', 20)
			.attr('stroke', 'black')
			.attr('fill', function(d,i){return color[i];})
			.on("mouseover",function(d){
				d3.select(this)
				.transition()
				.duration(50)
				.attr("opacity","0.4")
				.attr("stroke","DarkTurquoise");

				for(i=1;i<columns.length+1;++i){
					var test1=d3.select("#line"+i).attr("stroke");
					var test2=d3.select(this).attr("fill");
				if(test1==test2){d3.select("#line"+i).attr("stroke-width","5px");}
					var test3=d3.select("#legendText"+(i-1)).attr("y");
					var test4=d3.select(this).attr("y");
				if(test3==test4){//alert("here");}
					d3.select("#legendText"+(i-1)).attr("font-weight", "bold");}}

			})
			.on("mouseout", function(){
				d3.select(this)
				.transition()
				.attr("opacity",1)
				.attr("stroke","black");
				for(i=1;i<columns.length+1;++i){
					var test1=d3.select("#line"+i).attr("stroke");
					var test2=d3.select(this).attr("fill");
			
				if(test1==test2){d3.select("#line"+i).attr("stroke-width","2px");}
					var test3=d3.select("#legendText"+(i-1)).attr("y");
					var test4=d3.select(this).attr("y");
				if(test3==test4){//alert("here");}
					d3.select("#legendText"+(i-1)).attr("font-weight", "400");}
				}
			});
								
   
		// the 'Transform' button to change the radial chart into a linear multiline chart
	var showLine=true;	//flag
	d3.select("#roll")
			.on("click", function(){
			
			if(showLine==true){

				x=d3.scaleBand()
					.range([0, width])
					.domain(d3.range(sub.length));
   
					y.range([height/2,0])
					.domain(d3.extent(data, function(d) { return d.Manufacturing; }));			
			//to remove the radial lines
			for(m=1;m<10;m++){
				var myobj = document.getElementById("line"+m);
				myobj.remove();
			}
				var line = d3.line()
					.defined(function(d){return 160000>=d.Agriculture>=0;})
					.x(function(d,i){return x(i); })
					.y(function(d) {return y(d.Agriculture);});	
			
				var clip = svg.append("defs").append("svg:clipPath")
					.attr("id", "clip")
					.append("svg:rect")
					.attr("width", width )
					.attr("height", height/2 )
					.attr("x", 0)
					.attr("y", 0);

    // Add brushing
    var brush = d3.brushX()                   // Add the brush feature using the d3.brush function
        .extent( [ [0,0], [width,height/2] ] )  // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
        .on("end", updateChart)               // Each time the brush selection changes, trigger the 'updateChart' function

    // The lines in the linear scaling that will represent the industries
				var newLines=svg.append("g")
				.attr("transform", "translate(100,-20)")
				.attr("clip-path", "url(#clip)");
				
				newLines.append("path")
							.datum(data)
							.transition()
							.duration(1000)
							.delay(0)
							.ease(d3.easeLinear)
							.attr("id","line1")
							.attr("fill", "none")
							.attr("stroke", function(){return color[0];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
							
				line = d3.line()
					.defined(function(d){return 150000>=d.Manufacturing>=0;})
					.x(function(d,i){return x(i); })
					.y(function(d) {return y(d.Manufacturing);});	
				newLines.append("path")
							.datum(data)
							.transition()
							.duration(1000)
							.delay(1300*2)
							.ease(d3.easeLinear)
							.attr("id","line2")
							.attr("fill", "none")
							.attr("stroke", function(){return color[2];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
				line = d3.line()
					.defined(function(d){return d.Mining>=0;})
					.x(function(d,i){return x(i); })
					.y(function(d) {return y(d.Mining);});	
				newLines.append("path")
							.datum(data)
							.transition()
							.duration(1000)
							.delay(1300)
							.ease(d3.easeLinear)
							.attr("id","line3")
							.attr("fill", "none")
							.attr("stroke", function(){return color[1];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
				line = d3.line()
					.defined(function(d){return 150000>=d.Electric>=0;})
					.x(function(d,i){return x(i); })
					.y(function(d) {return y(d.Electric);});	
				newLines.append("path")
							.datum(data)
							.transition()
							.duration(1000)
							.delay(1300*3)
							.ease(d3.easeLinear)
							.attr("id","line4")
							.attr("fill", "none")
							.attr("stroke", function(){return color[3];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			line = d3.line()
					.defined(function(d){return 150000>=d.Construction>=0;})
					.x(function(d,i){return x(i); })
					.y(function(d) {return y(d.Construction);});	
				newLines.append("path")
							.datum(data)
							.transition()
							.duration(1000)
							.delay(1300*4)
							.ease(d3.easeLinear)
							.attr("id","line5")
							.attr("fill", "none")
							.attr("stroke", function(){return color[4];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
							
				line = d3.line()
					.defined(function(d){return 150000>=d.Public>=0;})
					.x(function(d,i){return x(i); })
					.y(function(d) {return y(d.Public);});	
				newLines.append("path")
							.datum(data)
							.transition()
							.duration(1000)
							.delay(1300*5)
							.ease(d3.easeLinear)
							.attr("id","line6")
							.attr("fill", "none")
							.attr("stroke", function(){return color[5];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
				line = d3.line()
					.defined(function(d){return 150000>=d.Other>=0;})
					.x(function(d,i){return x(i); })
					.y(function(d) {return y(d.Other);});	
				newLines.append("path")
							.datum(data)
							.transition()
							.duration(1000)
							.delay(1300*6)
							.ease(d3.easeLinear)
							.attr("id","line7")
							.attr("fill", "none")
							.attr("stroke", function(){return color[6];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
							
				line = d3.line()
					.defined(function(d){return 150000>=d.Households>=0;})
					.x(function(d,i){return x(i); })
					.y(function(d) {return y(d.Households);});	
				newLines.append("path")
							.datum(data)
							.transition()
							.duration(1000)
							.delay(1300*7)
							.ease(d3.easeLinear)
							.attr("id","line8")
							.attr("fill", "none")
							.attr("stroke", function(){return color[7];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
							
				line = d3.line()
					.defined(function(d){return 150000>=d.Imports>=0;})
					.x(function(d,i){return x(i); })
					.y(function(d) {return y(d.Imports);});	
				newLines.append("path")
							.datum(data)
							.transition()
							.duration(1000)
							.delay(1300*8)
							.ease(d3.easeLinear)
							.attr("id","line9")		
							.attr("fill", "none")
							.attr("stroke", function(){return color[8];})
							.attr("stroke-width","1.5px")
							.attr("d", line);
			//the circles to denote the data points on the lines
		var newDots=svg.append("g")
		.attr("transform","translate(100,-20)");			
			newDots.selectAll(".newDots")
				.data(data)
				.enter()
				.append("circle")
				.transition()
				.duration(1000)
				.delay(1300*0)
				.attr("class","newDots")
				.attr("cx", function(d, i){
					return x(i);})
				.attr("cy", function(d){
					return y(d.Agriculture);} )
				.attr("r", 3)
				.attr("stroke", 2)
				.attr("fill", function(){return color[0];});
					
			newDots.selectAll(".newDots")
				.data(data)
				.enter()
				.append("circle")
				.transition()
				.duration(1000)
				.delay(1300*1)
				.attr("class","newDots")
				.attr("cx", function(d, i){
				return x(i);})
				.attr("cy", function(d){
					return y(d.Mining);} )
				.attr("r", 3)
				.attr("stroke", 2)
				.attr("fill", function(){return color[1];});
					
			newDots.selectAll(".newDots")
				.data(data)
				.enter()		
				.append("circle")
				.transition()
							.duration(1000)
							.delay(1300*2)
				.attr("class","newDots")
				.attr("cx", function(d, i){
					return x(i);})
				.attr("cy", function(d){
					return y(d.Manufacturing);} )
				.attr("r", 3)
				.attr("stroke", 2)
				.attr("fill", function(){return color[2];});
					
			newDots.selectAll(".newDots")
				.data(data)
				.enter()
				.append("circle")
				.transition()
							.duration(1000)
							.delay(1300*3)
				.attr("class","newDots")
				.attr("cx", function(d, i){
				return x(i);})
				.attr("cy", function(d){
					return y(d.Electric);} )
				.attr("r", 3)
				.attr("stroke", 2)
				.attr("fill", function(){return color[3];});
					
					
			newDots.selectAll(".newDots")
				.data(data)
				.enter()			
				.append("circle")
				.transition()
							.duration(1000)
							.delay(1300*4)
				.attr("class","newDots")
				.attr("cx", function(d, i){
				return x(i);})
				.attr("cy", function(d){
					return y(d.Construction);} )
				.attr("r", 3)
				.attr("stroke", 2)
				.attr("fill", function(){return color[4];});
					
					
			newDots.selectAll(".newDots")
				.data(data)
				.enter()			
				.append("circle")
				.transition()
							.duration(1000)
							.delay(1300*5)
				.attr("class","newDots")
				.attr("cx", function(d, i){
				return x(i);})
				.attr("cy", function(d){
					return y(d.Public);} )
				.attr("r", 3)
				.attr("stroke", 2)
				.attr("fill", function(){return color[5];});
					
			newDots.selectAll(".newDots")
				.data(data)
				.enter()
				.append("circle")
				.transition()
				.duration(1000)
				.delay(1300*6)
				.attr("class","newDots")
				.attr("cx", function(d, i){
				return x(i);})
				.attr("cy", function(d){
					return y(d.Other);} )
				.attr("r", 3)
				.attr("stroke", 2)
				.attr("fill", function(){return color[6];});
					
			newDots.selectAll(".newDots")
				.data(data)
				.enter()
				.append("circle")
				.transition()
							.duration(1000)
							.delay(1300*7)
				.attr("class","newDots")
				.attr("cx", function(d, i){
				return x(i);})
				.attr("cy", function(d){
					return y(d.Households);} )
				.attr("r", 3)
				.attr("stroke", 2)
				.attr("fill", function(){return color[7];});

			newDots.selectAll(".newDots")
				.data(data)
				.enter()
				.append("circle")
				.transition()
				.duration(1000)
				.delay(1300*8)
				.attr("class","newDots")
				.attr("cx", function(d, i){
				return x(i);})
				.attr("cy", function(d){
					return y(d.Imports);} )
				.attr("r", 3)
				.attr("stroke", 2)
				.attr("fill", function(){return color[8];});
				
			
		x.domain(sub);	
		var xAxisLinear = d3.axisBottom()
				.scale(x);
			
		//setting the x axis lables in such a way that they are all visible		
		var xAxis=svg.append("g")
				.attr("id", "axis")
				.attr("transform" , "translate("+80+", " + (height/2) +")")
				.call(xAxisLinear)
				.selectAll("text")  
				.style("text-anchor", "end")
				.attr("dx", "-.8em")
				.attr("dy", ".15em")
				.attr("transform", "rotate(-65)");		
				
		var yAxisLinear = d3.axisLeft()
				.scale(y);
				
				
			svg.append("g")
				.attr("class", "yaxis")
				.attr("transform" , "translate(" +80 + ", 0)")
				.call(yAxisLinear);


			// removing all the radial chart elements but making them transparent
		svg.selectAll(".arcs")
		.attr("opacity",0);
		svg.selectAll(".label")
		.attr("opacity",0);
		svg.selectAll(".yaxisRadial")
		.attr("opacity",0);
		svg.selectAll(".xaxisRadial")
		.attr("opacity",0);
		svg.selectAll(".radials")
		.attr("opacity",0);
		svg.selectAll(".focus")
		.attr("opacity",0);
		
		dots.selectAll("circle")
	.attr("opacity",0);
	

    // Add the brushing
    newLines
      .append("g")
        .attr("class", "brush")
        .call(brush);
		//var idleTimeout;
		//function idled() { idleTimeout = null; }
		function updateChart() {

      // to store the selected boundaries
      extent = d3.event.selection;

      // If no selection, back to initial coordinate. Otherwise, update X axis domain
      if(!extent){
       // if (!idleTimeout){ return idleTimeout = setTimeout(idled, 350); }// This allows to wait a little bit
        x.domain(d3.range(sub.length));
      }else{
		  // if a brishing selection has been made
        var myobj = document.getElementById("axis");
				myobj.remove();
		//d3.select(".axis").attr("opacity",0);
		var sub2=[];
		var sub3=[];
		for(i=Math.floor(extent[0]/38); i<Math.floor(extent[1]/38);i++){
			sub2.push(sub[i]);
			sub3.push(i);
		}
		for(k=0;k<sub.length;k++){
			if(k<(sub3[0])){
				separate1.shift();
			}
			if(k>sub3[sub3.length-1]){
				separate1.pop();
				}
		}
		d3.selectAll(".newDots").attr("opacity",0);		
		x.domain(d3.range(sub2.length+1));	
	
		d3.select("#line1")
			.datum(separate1)
			.transition()
			.duration(500)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i);})
			.y(function(d,i) { return y(separate1[i]); }));
		d3.select("#line2")
			.datum(separate2)
			.transition()
			.duration(500)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i);})
			.y(function(d,i) { return y(separate2[i]); }));
		d3.select("#line3")
			.datum(separate3)
			.transition()
			.duration(500)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i);})
			.y(function(d,i) { return y(separate3[i]); }));
		d3.select("#line4")
			.datum(separate4)
			.transition()
			.duration(500)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i);})
			.y(function(d,i) { return y(separate4[i]); }));
		d3.select("#line5")
			.datum(separate5)
			.transition()
			.duration(500)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i);})
			.y(function(d,i) { return y(separate5[i]); }));
		d3.select("#line6")
			.datum(separate6)
			.transition()
			.duration(500)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i);})
			.y(function(d,i) { return y(separate6[i]); }));
		d3.select("#line7")
			.datum(separate7)
			.transition()
			.duration(500)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i);})
			.y(function(d,i) { return y(separate7[i]); }));
		d3.select("#line8")
			.datum(separate8)
			.transition()
			.duration(500)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i);})
			.y(function(d,i) { return y(separate8[i]); }));
		d3.select("#line9")
			.datum(separate9)
			.transition()
			.duration(500)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i);})
			.y(function(d,i) { return y(separate9[i]); }));
		
		  
		x.domain(sub2);	
		var xAxisLinear = d3.axisBottom()
				.scale(x);
			
				
		var xAxis=svg.append("g")
			.transition()
			.duration(1000)
			.attr("id", "axis")
			.attr("transform" , "translate("+80+", " + (height/2) +")")
			.call(xAxisLinear)
			.selectAll("text")  
			.style("text-anchor", "end")
			.attr("dx", "-.8em")
			.attr("dy", ".15em")
			.attr("transform", "rotate(-65)");	
		var yAxisLinear = d3.axisLeft()
				.scale(y);
				
				
		svg.append("g")
			.attr("class", "yaxis")
			.attr("transform" , "translate(" +80 + ", 0)")
			.call(yAxisLinear);
        newLines.select(".brush").call(brush.move, null);// This remove the grey brush area as soon as the selection has been done

	  }
	  
      
    }

    // If user double click, reinitialize the chart	
    svg.on("dblclick",function(){
     
	  var myobj = document.getElementById("axis");
				myobj.remove();
      x.domain(sub);	
		var xAxisLinear = d3.axisBottom()
				.scale(x);
			
			var xAxis=svg.append("g")
			.transition()
			.duration(1000)
				.attr("id", "axis")
				.attr("transform" , "translate("+80+", " + (height/2) +")")
				.call(xAxisLinear)
				.selectAll("text")  
				.style("text-anchor", "end")
				.attr("dx", "-.8em")
				.attr("dy", ".15em")
				.attr("transform", "rotate(-65)");		
			x.domain(d3.range(sub.length));
				 
				 var yAxisLinear = d3.axisLeft()
				.scale(y);

			svg.append("g")
				.attr("class", "yaxis")
				.attr("transform" , "translate(" +80 + ", 0)")
				.call(yAxisLinear);
	d3.selectAll(".newDots").attr("opacity",1);		
		d3.select("#line1")
			.datum(data)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i) })
			.y(function(d) { return y(d.Agriculture) }))
		d3.select("#line2")
			.datum(data)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i) })
			.y(function(d) { return y(d.Mining) }))
		d3.select("#line3")
			.datum(data)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i) })
			.y(function(d) { return y(d.Manufacturing) }))
		d3.select("#line4")
			.datum(data)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i) })
			.y(function(d) { return y(d.Electric) }))
		d3.select("#line5")
			.datum(data)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i) })
			.y(function(d) { return y(d.Construction) }))
		d3.select("#line6")
			.datum(data)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i) })
			.y(function(d) { return y(d.Public) }))
		d3.select("#line7")
			.datum(data)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i) })
			.y(function(d) { return y(d.Other) }))
		d3.select("#line8")
			.datum(data)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i) })
			.y(function(d) { return y(d.Households) }))
		d3.select("#line9")
			.datum(data)
			.attr("d", d3.line()
			.x(function(d,i) { return x(i) })
			.y(function(d) { return y(d.Imports) }))

			//or document.getElementById("roll").click(); 
		});
		
		// generating a new tooltip hover feature for the linear chart which is on the topmost layer
			var focus = svg.append("g")
            .attr("class", "focusNew")
			.attr("transform", "translate(120,20)");

			focus.append("rect")
            .attr("id", "tooltipnew")
            .attr("width", 125)
            .attr("height", 50)
            .attr("x", 10)
            .attr("y", 25)
            .attr("rx", 4)
            .attr("ry", 4)
			.attr("fill", "Azure")
			.attr("text-anchor","middle")
			.attr("opacity", "0");

			focus.append("text")
			.attr("id", "tooltiplabelnew")
            .attr("x", 18)
            .attr("y", 18)
			.attr("transform", "translate(15,20)")
			.attr("opacity", 0);
			
			newDots.selectAll("circle")
				.on("mouseover", function(d){
					d3.select(this).attr("r", "5px")
					.attr("stroke-width", 2); 
					var n=d3.select(this).attr("cx");
					var m =d3.select(this).attr("cy");
					d3.select("#tooltipnew").attr("opacity", 1)
					.attr("x", n)
					.attr("y", m)
					var o;
					var temp=[d.Agriculture, d.Mining, d.Manufacturing, d.Electric, d.Construction, d.Public, d.Other, d.Households, d.Imports];

					for(i=0;i<color.length;++i){
						var clr=d3.select(this).attr("fill");
						if(color[i]==clr){o= i;}
						}
					d3.select("#tooltiplabelnew").attr("opacity", 1)
					.attr("x", n)
					.attr("y", m)
					.text(temp[o]+"  tonnes");})
				.on("mouseout", function(){
					d3.select(this).attr("r", "3px")
					.attr("stroke-width", 1);
					d3.select("#tooltipnew").attr("opacity", 0);
					d3.select("#tooltiplabelnew").attr("opacity", 0);//.text("");
					});	
				
				
				showLine=false;}
				
		else{
			// to go back to the radial chart 
			svg.selectAll(".axis")
			.attr("opacity",0);

			var myobj = document.getElementById("chart");
				myobj.remove();
				var myobj2 = document.getElementById("legend");
				myobj2.remove();
			init(file);
		}
	
		});
      
		
    });
}

