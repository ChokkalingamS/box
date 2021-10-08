let border=document.querySelector('.b')

function color()
{
let q=setInterval(() => {
  
// first color
border.setAttribute("style","background-color:orange");



// Second color
let y=setInterval(() => 
{
  border.setAttribute("style","background-color:pink");
  // console.log("1");
}, 2000);

// time out
let i=setTimeout(() => {
  clearInterval(y); 
  
},2000);



// third color
let z=setInterval(() => 
{
 border.setAttribute("style","background-color:yellow"); 
}, 4000);


// timeout
let z1=setTimeout(() => {
  clearInterval(z); 
}, 4000);


},5000);
}
  

 color();


