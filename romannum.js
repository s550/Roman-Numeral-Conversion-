function convertToRoman(num) {
 var arr = [];
 var output = [];
 var numStr = num.toString();

for (var i = 0, len = numStr.length; i < len; i += 1) {
    output.push(+numStr.charAt(i));
}
  
  
  
  
  
  var bak  = numStr.split("");
  
  
  if(output.length === 4){
    thousandCent();
  }
  
  if(output.length === 3){
    hundredCent();
  }
  
  if(output.length === 2){
    tenCent();
  }
  
  if(output.length === 1){
    handfulOfCent();
  }
  
  
  
  function thousandCent (){
    
    var cut = output;
    var bisect = "";
    arr.push("M".repeat(output[0]));
    cut.splice(0,1);
    bisect = cut.splice(0,1);
    arr.push(hund[bisect[0]]);
    bisect = cut.splice(0,1);
    arr.push(tens[bisect[0]]);
    bisect = cut.splice(0,1);
    arr.push(ones[bisect[0]]);
  
  
}
  
  function hundredCent () {
    
    var cut = output;
    var bisect = "";
 
    bisect = cut.splice(0,1);
    arr.push(hund[bisect[0]]);
    bisect = cut.splice(0,1);
    arr.push(tens[bisect[0]]);
    bisect = cut.splice(0,1);
    arr.push(ones[bisect[0]]);
  
  
}
  
  function tenCent () {
    
    var cut = output;
    var bisect = "";
    
    bisect = cut.splice(0,1);
    arr.push(tens[bisect[0]]);
    bisect = cut.splice(0,1);
    arr.push(ones[bisect[0]]);
  
  
}
  
    function handfulOfCent () {
    
    var cut = output;
    var bisect = "";
   
    arr.push(ones[cut[0]]);
  
  
}
 
  
  function clearFix(val){
  return Boolean(val);
  
} 
  var fix = arr.filter(clearFix);
  var whole = fix.join("");
  
  
  return whole;
}

convertToRoman(1000);
