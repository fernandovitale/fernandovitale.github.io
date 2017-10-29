// Our labels along the x-axis
var years = [2011, 2012, 2013, 2014,  2015];
// For drawing the lines
var canada = [30146, 25150, 36600, 39300, 43000];
var eua = [1388000,  1066559, 1006842, 1315000, 1400000];
var mexico = [15000, 10850, 14000, 14000, 14000];
var argentina = [37100,  41330, 45719, 46045, 46870];
var chile = [10600,  7943,  8000,  12000, 12196];
var paraguay = [200000,  201527,  459760,  349842,  332042];
var ireland = [18000,  18000, 18000, 15156, 18000];
var france = [80010, 44622, 60000, 70000, 70000];
var italy = [85000,  67000, 68030, 69000, 72000];
var portugal = [136220,  140426,  162190,  166775,  116271];
var uk = [180000,  118000,  119000,  120000,  120000];
var japan = [230522, 210032,  186051,  179649,  170229];
var australia = [45300,  21723, 92000, 27000, 37310];
var newzeland = [7714, 3400,  4050,  5600,  5000];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
  { 
        data: canada,
        label: "Canada",
        borderColor: "green",
        fill: false
  },
	
	{ 
  		data: mexico,
  		label: "Mexico",
  		borderColor: "green",
  		fill: false
	},
	{ 
  		data: argentina,
  		label: "Argentina",
  		borderColor: "purple",
  		fill: false
	},
	{ 
 		data: chile,
  		label: "Chile",
  		borderColor: "purple",
  		fill: false
	},
  
  { 
    data: ireland,
      label: "Ireland",
      borderColor: "orange",
      fill: false
  },
  { 
    data: france,
      label: "France",
      borderColor: "orange",
      fill: false
  },
  { 
    data: italy,
      label: "Italy",
      borderColor: "orange",
      fill: false
  },
  { 
    data: portugal,
      label: "Portugal",
      borderColor: "orange",
      fill: false
  },
  { 
    data: uk,
      label: "UK",
      borderColor: "orange",
      fill: false
  },
  { 
    data: japan,
      label: "Japan",
      borderColor: "#3e95cd",
      fill: false
  },
  { 
    data: australia,
      label: "Australia",
      borderColor: "#3e95cd",
      fill: false
  },
  { 
    data: newzeland,
      label: "New Zeland",
      borderColor: "#3e95cd",
      fill: false
  }
	
    ]
  }
});