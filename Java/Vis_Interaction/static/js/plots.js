var xArray = women.map(row => row.Age);
var yArray = women.map(row => row.Salary);
var xArray2 = men.map(row => row.Age);
var yArray2 = men.map(row => row.Salary);
var xArray3 = women.map(row => row.Formal_Education);
var yArray3 = women.map(row => row.Salary);
var xArray4 = men.map(row => row.Formal_Education);
var yArray4 = men.map(row => row.Salary);
var xArray5 = women.map(row => row.Years_Coding);
var yArray5 = women.map(row => row.Salary);
var xArray6 = men.map(row => row.Years_Coding);
var yArray6 = men.map(row => row.Salary);

var trace1 = {
  x: xArray,
  y: yArray,
  xaxis: 'x',
  yaxis: 'y',
  mode: 'markers',
  type: 'scatter'
};

var trace2 = {
  x: xArray2,
  y: yArray2,
  xaxis: 'x2',
  yaxis: 'y2',
  mode: 'markers',
  type: 'scatter'
};

var trace3 = {
  x: xArray3,
  y: yArray3,
  xaxis: 'x3',
  yaxis: 'y3',
  mode: 'markers',
  type: 'scatter'
};

var trace4 = {
  x: xArray4,
  y: yArray4,
  xaxis: 'x4',
  yaxis: 'y4',
  mode: 'markers',
  type: 'scatter'
};

var trace5 = {
  x: xArray5,
  y: yArray5,
  xaxis: 'x5',
  yaxis: 'y5',
  mode: 'markers',
  type: 'scatter'
};

var trace6 = {
  x: xArray6,
  y: yArray6,
  xaxis: 'x6',
  yaxis: 'y6',
  mode: 'markers',
  type: 'scatter'
};


// var data = [trace1, trace2, trace3, trace4, trace5, trace6];


// Plotly.newPlot('myDiv', data, layout);

// var xArray = data.map(row => row.Age);
// var yArray = data.map(row => row.Salary);

// Calculate Sums
var xSum=0, ySum=0 , xxSum=0, xySum=0;
var count = xArray.length;
for (var i = 0, len = count; i < count; i++) {
  xSum += xArray[i];
  ySum += yArray[i];
  xxSum += xArray[i] * xArray[i];
  xySum += xArray[i] * yArray[i];
}

var xSum2=0, ySum2=0 , xxSum2=0, xySum2=0;
var count2 = xArray2.length;
for (var i = 0, len = count2; i < count2; i++) {
  xSum2 += xArray2[i];
  ySum2 += yArray2[i];
  xxSum2 += xArray2[i] * xArray2[i];
  xySum2 += xArray2[i] * yArray2[i];
}

var xSum3=0, ySum3=0 , xxSum3=0, xySum3=0;
var count3 = xArray3.length;
for (var i = 0, len = count3; i < count3; i++) {
  xSum3 += xArray3[i];
  ySum3 += yArray3[i];
  xxSum3 += xArray3[i] * xArray3[i];
  xySum3 += xArray3[i] * yArray3[i];
}

var xSum4=0, ySum4=0 , xxSum4=0, xySum4=0;
var count4 = xArray4.length;
for (var i = 0, len = count4; i < count4; i++) {
  xSum4 += xArray4[i];
  ySum4 += yArray4[i];
  xxSum4 += xArray4[i] * xArray4[i];
  xySum4 += xArray4[i] * yArray4[i];
}

var xSum5=0, ySum5=0 , xxSum5=0, xySum5=0;
var count5 = xArray5.length;
for (var i = 0, len = count5; i < count5; i++) {
  xSum5 += xArray5[i];
  ySum5 += yArray5[i];
  xxSum5 += xArray5[i] * xArray5[i];
  xySum5 += xArray5[i] * yArray5[i];
}

var xSum6=0, ySum6=0 , xxSum6=0, xySum6=0;
var count6 = xArray6.length;
for (var i = 0, len = count6; i < count6; i++) {
  xSum6 += xArray6[i];
  ySum6 += yArray6[i];
  xxSum6 += xArray6[i] * xArray6[i];
  xySum6 += xArray6[i] * yArray6[i];
}


// Calculate slope and intercept
var slope = (count * xySum - xSum * ySum) / (count * xxSum - xSum * xSum);
var intercept = (ySum / count) - (slope * xSum) / count;

// Calculate slope and intercept
var slope2 = (count2 * xySum2 - xSum2 * ySum2) / (count2 * xxSum2 - xSum2 * xSum2);
var intercept2 = (ySum2 / count2) - (slope2 * xSum2) / count2;

// Calculate slope and intercept
var slope3 = (count3 * xySum3 - xSum3 * ySum3) / (count3 * xxSum3 - xSum3 * xSum3);
var intercept3 = (ySum3 / count3) - (slope3 * xSum3) / count3;

// Calculate slope and intercept
var slope4 = (count4 * xySum4 - xSum4 * ySum4) / (count4 * xxSum4 - xSum4 * xSum4);
var intercept4 = (ySum4 / count4) - (slope4 * xSum4) / count4;

// Calculate slope and intercept
var slope5 = (count5 * xySum5 - xSum5 * ySum5) / (count5 * xxSum5 - xSum5 * xSum5);
var intercept5 = (ySum5 / count5) - (slope5 * xSum5) / count5;

// Calculate slope and intercept
var slope6 = (count6 * xySum6 - xSum6 * ySum6) / (count6 * xxSum6 - xSum6 * xSum6);
var intercept6 = (ySum6 / count6) - (slope6 * xSum6) / count6;


// Generate values
var xValues = [];
var yValues = [];
for (var x = 20; x <= 60; x += 1) {
  xValues.push(x);
  yValues.push(x * slope + intercept);
}

// Generate values
var xValues2 = [];
var yValues2 = [];
for (var x = 20; x <= 60; x += 1) {
  xValues2.push(x);
  yValues2.push(x * slope2 + intercept2);
}

// Generate values
var xValues3 = [];
var yValues3 = [];
for (var x = 4; x <= 6; x += 1) {
  xValues3.push(x);
  yValues3.push(x * slope3 + intercept3);
}

// Generate values
var xValues4 = [];
var yValues4 = [];
for (var x = 4; x <= 6; x += 1) {
  xValues4.push(x);
  yValues4.push(x * slope4 + intercept4);
}

// Generate values
var xValues5 = [];
var yValues5 = [];
for (var x = 2; x <= 15; x += 1) {
  xValues5.push(x);
  yValues5.push(x * slope5 + intercept5);
}

// Generate values
var xValues6 = [];
var yValues6 = [];
for (var x = 2; x <= 15; x += 1) {
  xValues6.push(x);
  yValues6.push(x * slope6 + intercept6);
}

// // Define Data
// var data = [
//   {x:xArray, y:yArray, mode:"markers"},
//   {x:xValues, y:yValues, mode:"line"}
// ];

var data = [trace1 = {x:xArray, y:yArray, xaxis: 'x', yaxis: 'y', mode:"markers", title: "Women: Age Vs. Salary"},
            {x:xValues, y:yValues, xaxis: 'x', yaxis: 'y', mode:"line", title: "Women: Age Vs. Salary"}, 

            trace2 = {x:xArray2, y:yArray2, xaxis: 'x2', yaxis: 'y2', mode:"markers"},
            {x:xValues2, y:yValues2, xaxis: 'x2', yaxis: 'y2', mode:"line"},

            trace3 = {x:xArray3, y:yArray3, xaxis: 'x3',yaxis: 'y3', mode:"markers"},
            {x:xValues3, y:yValues3, xaxis: 'x3',yaxis: 'y3', mode:"line"},

            trace4 = {x:xArray4, y:yArray4, xaxis: 'x4', yaxis: 'y4', mode:"markers"},
            {x:xValues4, y:yValues4, xaxis: 'x4',yaxis: 'y4', mode:"line"},

            trace5 = {x:xArray5, y:yArray5, xaxis: 'x5', yaxis: 'y5', mode:"markers"},
            {x:xValues5, y:yValues5, xaxis: 'x5',yaxis: 'y5', mode:"line"}, 
            
            trace6 = {x:xArray6, y:yArray6, xaxis: 'x6', yaxis: 'y6', mode:"markers"},
            {x:xValues6, y:yValues6, xaxis: 'x6', yaxis: 'y6', mode:"line"}];
  
  // // Define Layout
  // var layout = {
  //   xaxis: {title: "Age"},
  //   yaxis: {title: "Salary"},
  //   title: "Age vs. Salary"
  // };

  var layout = {
    grid: {rows: 3, columns: 3, pattern: 'independent'},
  
  };  
  
  // Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
  