var split = vals.replace(/(\r\n|\n|\r)/gm, ",").split(",");

var O2 = JSON.parse(JSON.stringify(split));
var CO2 = JSON.parse(JSON.stringify(split));
var bit0 = [];
var bit1 = [];

for (var index = 0; index < split[0].length; ++index) {
  var count0 = 0;
  var count1 = 0;
  bit0 = [];
	bit1 = [];
  for (var i = 0; i < O2.length; ++i) {
    if (O2[i][index] === "0") {
      ++count0;
      bit0.push(O2[i]);
    } else {
      ++count1;
      bit1.push(O2[i]);
    }
  }

  console.log('bit0: ' + bit0);
  console.log('bit1: ' + bit1);
  
  if (count0 === 1 && count1 === 0 || count0 === 0 && count1 === 1)
    O2 = JSON.parse(JSON.stringify(O2));
  else if (count0 <= count1) 
    O2 = JSON.parse(JSON.stringify(bit1));
  else if (count0 > count1)
    O2 = JSON.parse(JSON.stringify(bit0));
  
  count0 = 0;
  count1 = 0;
  bit0 = [];
	bit1 = [];
  for (var i = 0; i < CO2.length; ++i) {
    if (CO2[i][index] === "0") {
      ++count0;
      bit0.push(CO2[i]);
    } else {
      ++count1;
      bit1.push(CO2[i]);
    }
  }

  console.log('bit0: ' + bit0);
  console.log('bit1: ' + bit1);

  if (count0 === 1 && count1 === 0 || count0 === 0 && count1 === 1)
    CO2 = JSON.parse(JSON.stringify(CO2));
  else if (count0 <= count1)
    CO2 = JSON.parse(JSON.stringify(bit0)); 
  else if (count1 < count0)
    CO2 = JSON.parse(JSON.stringify(bit1));
    
  console.log(O2);
  console.log(CO2);
}

function bin2dec(num) {
  return num.split('').reverse().reduce(function(x, y, i) {
    return (y === '1') ? x + Math.pow(2, i) : x;
  }, 0);
}

console.log(parseInt(O2[0]));
console.log(parseInt(CO2[0]));
console.log(bin2dec(O2[0]) * bin2dec(CO2[0]));
