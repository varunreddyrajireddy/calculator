let buttons = document.getElementsByTagName('button');
let result = document.getElementById('result');

for(let i = 0; i<buttons.length;i++){
  buttons[i].onclick = function(){
    let input = this.innerText;
    updateDisplay(input)
  }
}

function updateDisplay(input){
  let currentDisplay = result.innerText;
  if(currentDisplay == "0"){
    if(input!="C" && input!="DEL" && input!="="){
      result.innerText="";
      result.innerText += input;
    }
  }
  else{
    if(input=="DEL"){
      result.innerText = currentDisplay.slice(0, -1);
      if(result.innerText ==""){
        result.innerText = "0";
      }
    }
    if(input=="C"){
      result.innerText = "0";
    }
    if(input!= "C" && input!= "DEL" && input!= "="){
      result.innerText += input;
    }
    if(input=="="){
      let display = result.innerText;
      let evalNum = math.evaluate(display);
      let num = Number(evalNum);
      result.innerText = num;
      console.log(typeof num);
    }
  }
}