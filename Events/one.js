/*  const changeOnMouseOver = (() =>{
  const btn = document.getElementById("mouseover");
  btn.style.backgroundColor="black";
}) ;

const changeOnMouseOut = (() =>{
  const btn = document.getElementById("mouseout");
  btn.style.backgroundColor="black";
}) ;

const changeOnClick = (() =>{
  const btn = document.getElementById("mouseclick");
  btn.style.backgroundColor="black";
}) ;

const changeOnDblClick = () =>{
  const btn = document.getElementById("mousedblclick");
  console.log(btn.style.display);
  btn.style.backgroundColor="black";
};

const changeOnFocus = () =>{
  const inputf = document.getElementById("onfocus");
  inputf.style.backgroundColor = "black";
}; 


const changeOnBlur = () =>{
  const inputf = document.getElementById("onblur");
  console.log(inputf);
  inputValue = inputf.value;
  inputf.value = inputValue.toUpperCase();
} */

function changeOnMouseOut(){
  document.getElementById("mouseout") .setAttribute("style","background-color:orange");
}
function changeOnClick (){
  document.getElementById("mouseclick") .setAttribute("style","background-color:azure");
}
function changeOnDblClick (){
  document.getElementById("mousedblclick") .setAttribute("style","background-color:turquoise");
}
function changeOnFocus (){
  document.getElementById("onfocus") .setAttribute("style","background-color:maroon");
}
function changeOnMouseOver (){
  document.getElementById("mouseover") .setAttribute("style","background-color:pink");
}

function changeOnBlur(){
  document.getElementById("onblur").value=document.getElementById("onblur").value.toUpperCase();
} 