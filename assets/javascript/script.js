// using loop hiding the elements
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// using function hiding the elements

let asset6=document.querySelector("#threadAA");
let form=document.querySelector("#hideit");

function on(){
  form.style="display:flex; flex-direction:column; ";

}

function off(){
  form.style="display:none;"
}


// navbar functional code


let nav=document.querySelector('#nav');
let navbtn=document.querySelector("#navbtn");

navbtn.addEventListener("click",()=>{
  if( nav.style.left=="0%"){
    nav.style.left="-17%";
  }
  else{
    nav.style.left="0%";
  }
})

asset6.addEventListener("click",()=>{
  if(form.style.display == 'none'){
    on();
  }
  else{
      off();
  }
});




