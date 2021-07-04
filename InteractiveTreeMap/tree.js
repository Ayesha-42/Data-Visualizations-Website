
var treeData = {
  "name": "WasteTypeBreakdown",
 "children": [
  {
   "name": "Construction",
   "children": [
    {
     "name": "DemolitionWaste",
     "children": [
      {"name": "Asphalt", "value": 3938},
      {"name": "Bricks", "value": 3812},
      {"name": "Concrete", "value": 6714},
      {"name": "Gypsom", "value": 743}
     ]
    },
    {
     "name": "Metals",
     "children": [
      {"name": "Ferrous", "value": 3534},
      {"name": "Aluminium", "value": 5731},
      {"name": "Steel", "value": 7840},
      {"name": "Copper", "value": 5914},
      {"name": "Tin", "value": 3416}
     ]
    },
    {
     "name": "Other",
     "children": [
      {"name": "Glass", "value": 7074},
      {"name": "Plasterboard", "value": 7076},
      {"name": "Soil", "value": 7078},
      {"name": "Tiles", "value": 7080}
     ]
    }
   ]
  },
  {
   "name": "Hazardous",
   "children": [
    {"name": "Acids", "value": 17010},
    {"name": "Alkalis", "value": 5842},
	{"name": "Asbestos", "value": 5844},
    {"name": "ClinicalPharmaceutical", "value": 5846},
    {
     "name": "Chemicals",
     "children": [
      {"name": "InorganicChemicals", "value": 1983},
      {"name": "OrganicChemicals", "value": 2047},
      {"name": "OrganicSolvents", "value": 1375},
      {"name": "ReactiveChemicals", "value": 8746},
      {"name": "CorrosiveChemicals", "value": 2202}
     ]
    },
    {"name": "ContanimatedSoils", "value": 1041},
    {"name": "FoodDerivedHazardous", "value": 5176},
    {"name": "Hazardous", "value": 449},
    {"name": "Oils", "value": 5593},
    {"name": "OtherHazardousOrganic", "value": 5534},
    {"name": "Miscellaneous", "value": 9201},
    {"name": "OtherMiscelleneous", "value": 19975},
    {"name": "Pesticides", "value": 1116},
    {"name": "Tyers", "value": 6006}
   ]
  },
  {
   "name": "BuildingMaterials",
   "children": [
    {
     "name": "MasonryMetals",
     "children": [
      {"name": "Asphalt", "value": 721},
      {"name": "Bricks", "value": 4294},
      {"name": "Concrete", "value": 9800},
      {"name": "PlasterBoard", "value": 1314},
      {"name": "CementSheeting", "value": 2220}
     ]
    },
    {"name": "Aluminium", "value": 1759},
    {"name": "Metals", "value": 2165},
    {"name": "NonFerrousMetals", "value": 586},
    {"name": "Steel", "value": 3331},
    {"name": "Tin", "value": 772},
    {"name": "Other", "value": 3322}
   ]
  },
  {
   "name": "MineralProcessing",
   "children": [
    {"name": "CSG-Brines", "value": 8833},
    {"name": "RedMud", "value": 1732},
    {"name": "Mining", "value": 3623},
    {"name": "BioSolids", "value": 10066}
   ]
  },
  {
   "name": "Organics",
   "children": [
    {"name": "FoodOrganics", "value": 1082},
    {"name": "GardenOrganics", "value": 1336},
    {"name": "Timber", "value": 319},
    {"name": "OtherOrganics", "value": 10498},
    {"name": "OtherUnclassifedMaterials", "value": 2822},
    {"name": "ResidualsFromWasteProcessing", "value": 9983},
    {"name": "Other", "value": 2213}
   ]
  },
  {
   "name": "PaperCardboard",
   "children": [
    {"name": "Cardboard", "value": 1616},
    {"name": "LiquidPaperBoard", "value": 1027},
    {"name": "NewsPrintMagazines", "value": 3891},
    {"name": "OfficePaper", "value": 891},
    {"name": "Other", "value": 2893},
    {
     "name": "PaperResidualChemicalWaste",
     "children": [
      {"name": "Epichlorohydrin", "value": 593},
      {"name": "Melamine", "value": 330},
      {"name": "Urea", "value": 287},
      {"name": "Formaldehyde", "value": 277},
      {"name": "Polyimines", "value": 292},
      {"name": "AlkalineSulfite", "value": 595},
      {"name": "Acids", "value": 594},
      {"name": "Sulfate", "value": 460},
      {"name": "Cellulose", "value": 603},
	  {"name": "HemiCellulose", "value": 610},
	  {"name": "Lignin", "value": 620}
     ]
    }
   ]
  },
  {
   "name": "Plastics",
   "children": [
    {"name": "HighDensityPolyethylene", "value": 593},
      {"name": "LowDensityPolyethylene", "value": 330},
      {"name": "OtherPlastics", "value": 287},
      {"name": "Plastics", "value": 277},
      {"name": "PolyethyleneTerephThalate", "value": 292},
      {"name": "Polypropylene", "value": 595},
      {"name": "Polystyrene", "value": 594},
      {"name": "PolyvinylChloride", "value": 460},
      {"name": "Other", "value": 603}
   ]
  },
  {
   "name": "TextilesLeatherRubber",
   "children": [
    {"name": "LeatherRubber(exclTyres)", "value": 8258},
    {"name": "Textiles", "value": 10001},
    {"name": "Other", "value": 8217}
   ]
  },
  {
     "name": "AgricultureFisheries",
     "children": [
      {"name": "Bagasse", "value": 9354},
      {"name": "CottonGinTrash", "value": 1233},
      {"name": "Manure", "value": 1236}
     ]
    },
  {
   "name": "Mining",
   "children": [
    {
     "name": "PreciousMetals",
     "children": [
      {"name": "GoldOre", "value": 1302},
      {"name": "CopperOre", "value": 24593},
      {"name": "SilverOre", "value": 652},
      {"name": "LeadOre", "value": 636},
      {"name": "ZincOre", "value": 6703}
     ]
    },
    {
     "name": "RawMaterials",
     "children": [
      {"name": "IronOreMining", "value": 2138},
      {"name": "Oil+GasExtraction", "value": 3824},
      {"name": "CoalMining", "value": 1353},
      {"name": "NickelOre", "value": 4665},
      {"name": "MineralSandMining", "value": 2649},
      {"name": "Bauxite", "value": 2832},
      {"name": "OtherConstructionMaterialMining", "value": 4896},
      {"name": "OtherNon-MetallicMineral", "value": 763}
     ]
    }
   ]
  }
 ]
}


var margin = { top: 5, right: 90, bottom: 10, left: 130 };
var width = 900 - margin.left - margin.right;
var height = 600 - margin.top - margin.bottom;


/*
var margin = { top: 5, left: 30 };
var w = 900;
var h = 60;
*/


var svg = d3
  .select(".container")
  .append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


/*
var svg = d3
  .select(".container")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
*/


var i = 0;
var duration = 650; // milliseconds transition from one phase to another
var root;

//------------------ Opens Node-link Tree Chart expanded -----------------

var treemap = d3.tree().size([height, width]);
root = d3.hierarchy(treeData, function (d) {
  return d.children;
});

root.x0 = height / 2;
root.y0 = 0;
console.log("root ", root);

update(root);

function update(source) {
  var treeData = treemap(root);

//------------------------------ nodes -----------------------------------

  var nodes = treeData.descendants();
    nodes.forEach(function (d) {
      d.y = d.depth * 190;
    });
  
    var node = svg.selectAll("g.node").data(nodes, function (d) {
      return d.id || (d.id = ++i);
    });

  var nodeEnter = node
  .enter()
  .append("g")
  .attr("class", "node")
  .attr("transform", function (d) {
    return "translate(" + source.y0 + ", " + source.x0 + ")";
  })
  .on("click", click);
  
  nodeEnter
    .append("circle")
    .attr("class", "node")
    .attr("r", 1)
    .style("fill", function (d) {
      return d._children ? "red" : "black"; // #fff / green / #C8F526
    });

/*------------------ Above: Code Explanation --------------------------------------
Equivalent to: 
                    if d._children {
                      return red
                    } else {
                      return black
                    }
-----------------------------------------------------------------------------------*/

  nodeEnter
    .append("text")
    .attr("dy", ".35em")
    .attr("x", function (d) {
      return d.children || d._children ? -18 : 18;  // Creates gap between nodes & text
            //if node has child, text is on left, if no child then text on right
    })
    .attr("text-anchor", function (d) {
      return d.children || d._children ? "end" : "start"; // Ensures text begins after circle nodes
    })
	
    .attr('font-size', d => 4.2 - d.depth + 'em')         // I HAVE ADDED THIS AS EXPERIMENT
	
    .text(function (d) {
      return d.data.name; //Returns name of each node
    });

  var nodeUpdate = nodeEnter.merge(node);

  nodeUpdate
    .transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + d.y + ", " + d.x + ")"; // Ensures links & nodes are connected correctly
    });

  nodeUpdate
    .select("circle.node")
    .attr("r", 4)           // Actual size of the nodes
    .style("fill", function (d) {
      return d._children ? "green" : "#C8F526";
    })
    .attr("cursor", "pointer");


  nodeExit = node
    .exit()
    .transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + source.y + "," + source.x + ")"; // Ensures collapse and expand is horizontal
    })
    .remove();

  nodeExit.select("circle").attr("r", 0);           // Ensures when collapsing, node disappears
  nodeExit.select("text").style("fill-opacity", 0); // Ensures when collapsing, text disappears


/*----------------------------------------- links ----------------------------------------------------
1st line: "path = `M ${s.y} ${s.x}" Ensures links join nodes in direct lines
2nd line: "${(s.y + d.y) / 2} ${s.x}" Ensures links flare out evenly - ${s.x} removes 'y' direction
                            s = source.y : d = destination.y
              We simply draw a line between the Source node and Destination node                            
-------------------------------------------------------------------------------------------------------*/

  function diagonal(s, d) {
    path = `M ${s.y} ${s.x}       
      C ${(s.y + d.y) / 2} ${s.x}
        ${(s.y + d.y) / 2} ${d.x}
        ${d.y} ${d.x}`;
    return path;
  }

  var links = treeData.descendants().slice(1);  // Ensures all 1st nodes link to WasteBreakDown
  var link = svg.selectAll("path.link").data(links, function (d) {
    return d.id;  // When collapsing/expanding links don't break apart
  });

  var linkEnter = link
    .enter()
    .insert("path", "g")
    .attr("class", "link")
    .attr("d", function (d) {
      var j = { x: source.x0, y: source.y };  // Originally 'o' instead of 'j'
      return diagonal(j, j);
    });

  var linkUpdate = linkEnter.merge(link);
  linkUpdate
    .transition()
    .duration(duration)
    .attr("d", function (d) {
      return diagonal(d, d.parent);
    });

  var linkExit = link
    .exit()
    .transition()
    .duration(duration)
    .attr("d", function (d) {
      var o = { x: source.x0, y: source.y0 };
      return diagonal(o, o);
    })
    .remove();

  /*-------- RETAINS OUR OLD POSITION & COLLAPSES OUR GRAPH */ 
  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });

  /*---------------- CLICK FUNCTION: When we Click Node it Expands/Contracts -------------
  Checks if each node has a child node of its own.
  ----------------------------------------------------------------------------------------*/
  function click(event, d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }
}
