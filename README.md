# Data Visualizations Website
 
This project aims to examine the current framework of waste management in Australia. Narrowing the focus in this radar, this document provides an insight on how waste is accumulated in staggering amounts from multiple sources and quantitively tracks its journey and outlets of consumptions and re-circulation. It extrapolates on these points supported by statistical data on its impact on the overall health of the environment and the goals of sustainability.



Bootstrap has been used in the website design as part of an iterative final version of the website's interface.

There is a stacked bar chart design, where each composite bar glyph represents a financial year (x-axis), and each subsection of each bar contains a length-coded value representing each waste generator by sector. Color Hue is used to represent each subsection waste generator, with a legend underneath the chart matching each color hue with a particular waste generator to guide the user. The idea is to use two keys, primary-key (x-axis) and secondary-key (y-axis) where a user can look up pertinent data via either of the keys, either by tonnes per $million or by date. 

There is a node-link chart, which fans out horizontally, and can give a user more information about each specific type of waste, for example: Garden waste can be further broken down to give the user more information on the specific types of garden waste, such as, compost, fertilizer and fruit & veg. which can be further broken down into organic and non-organic waste. 
Drawing from the project objectives the node link chart is deemed to be the ideal in handling the data type of waste types and their corresponding subtypes. Other benefits which this chart type can provide as a data visualization include- it is intuitive as its easy to interact with, relations and connections are transparent in communicating, its flexible to develop and scale and it presents the textual data in a spatial layout reducing the reading strain on it.

 There is a Radial Line chart where the sectors toward the interior (stemming from the center of the circle) will represent the parent waste category.	 The spokes/radii will represent the qualitative sub-types of the waste. The arcs will be labelling the waste categories they fall under.  The larger width arc beyond this would be a line chart where the data points coinciding with the extended spokes of the waste types data attribute. Each industry will be in a different hue line.

 #### Visual Encodings - 
 1.	Axis layouts- 
        *	For the stacked bar chart a linear axis for a two-dimensional quadrant layout
        *	For the node-link chart a spatial axis for a node/link layout
        *	For the radial chart a spatial axis for a radial layout
2.	Magnitude channels – 
        *	For the stacked bar chart – position on common scale, length, 
        *	For the node-link chart – position on unaligned scale
        *	For the radial chart position on common scale (along radii) for numerical attribute, luminosity to add layering to the multiple nested chart elements.
3.	Identity channels- 
        *	For the stacked bar chart – colour hue 
        *	For the node-link chart – motion
        *	For the radial chart colour hue, spatial region(sectors of the nested pie chart)
These channels are in the top priority of visual perception with maximum effectiveness.
4.	Marks- 
        *	For the stacked bar chart- 2D- rectangles for making up the bars
        *	For the node-link chart 0D- data points for the nodes
        *	For the radial chart 1D lines on a 2D circle area.
5.	Interactive features-
        *	In the stacked bar chart – mouse-hover over the sub-section bar stacks
        *	In the node-link chart- clickable nodes for expansion
        *	In the radial chart- mouse-over tooltip, mouse-over legend line highlight, button filter, chart transformation and brushing tool.
These show variety of visual encoding in the three charts types and features.

#### Iterative Design Changes

For the stacked bar chart
1.	The tooltip location was altered to provide better relation of the actual data point to the visual object representation of it. It also decluttered the textual density of certain areas of the chart
2.	More waste categories were integrated the same way as the initial set once that proved to be functioning smoothly.
For the node-link chart
1.	The collapsible feature was polished to get a better control over and allow the user to extend and condense the node on click requests. 
2.	The overlapping data values were given more clarity by introducing padding and other segmentation features.
For the radial chart
1.	Since many data attributes had to be shown in the chart, placing them on the periphery, although initially seemed like an elegant new idea that could be included, was dissolved into the traditional list format of a legend.
2.	The hover-over feature was originally designed to be to hover over the mouse over the particular line desired and that would highlight above the rest. However, this was causing many lines to come in the hover reception radius and the highlight tended shifting between lines. It was considered to be more convenient if the user could read the name in the legend and hover in the corresponding box colour to view the line in its entirety extending across the graph. It was a more simple and clear approach to it. Hence, the hover-over was changed to be over the legend boxes and that used to centrally highlight that industry’s line. With the usability testing results analysed, this hover-over feature was made to become more prominent by making the industry label bold as well as the other lines in the background to sharpen the pop-out effect as a response to the details on demand utility.
For Website
3.	The first website version was made based off the high-fidelity clickable prototype developed on the Adobe XD app as part of the pre-requisite of the usability evaluation. From the feedback received from the participants as part of the testing and the creative decisions made by our team, it was concluded that the website had to synch with the formal and factual nature of what the website stood for and integrate uniformity and the traditional aesthetic look of the website.
The link to this initial version of the website is mentioned in the usability evaluation document as it was used for it and describes the reasoning behind iterating this primitive version and guidance for the improvement measures.
4.	For the second version a switch was made to use Bootstrap for more flexibility over front-end web development over HTML. This allowed us to easily translate our improvement ideas and website design into a coded product. The idea of negative space (white-spaces) was incorporated into the placement of graphics, information and links. Consistency was evident in the link miniature images and tiles. 
5.	For the final iteration of the design the slideshow element was featured as an introduction and strong first impression of the audience on the website. The scaling issue was ultimately resolved. It can now be auto-scaled when minimizing the window as well as opening on the mobile browser. It has good design features of highlighting the webpage currently on in the global navigation bar on the right-top corner. It also has other relevant link spaces such as mention of the sources of information, purpose and interactive information about the website and so on. It also shows the use of a dropdown with makes access to the important website links easier and acts as a global navigation column.
Further design improvements and fixes are mentioned in detail in the usability evaluation document.

