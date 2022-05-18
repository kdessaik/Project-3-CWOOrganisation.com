//Grap class

const NavBar=document.querySelector('.navbar-toggler-icon')
const closeBar=document.querySelector('.close')
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  function NavBar1() {
    document.getElementById('section3').style.display="none";
    document.getElementById('first-logo1').style.top='25%'
    
  }
    
  
  function NavBar2(){
     document.getElementById('section3').style.display="flex";
     document.getElementById('first-logo1').style.top='500px'
  }
  NavBar.addEventListener("click",NavBar2)
  closeBar.addEventListener('click',NavBar1)

  let photo1="pages/Generator/images/IMG_20211013_123103_808.jpg"
  let photo2="pages/Generator/images/IMG_20211013_123110_092.jpg"
  let photo3="pages/Generator/images/IMG_20211013_123149_905.jpg"
  let photo4="pages/Generator/images/IMG_20211013_123201_367.jpg"
  let photo5="pages/Generator/images/IMG_20211013_124648_797.jpg"
  let photo6="pages/Generator/images/IMG_20211013_124514_217.jpg"
  let photo7="pages/Generator/images/IMG_20211013_124648_797.jpg"
  let photo8="pages/Generator/images/IMG_20211013_124709_069.jpg"
  let photo9="pages/Generator/images/IMG_20211013_124447_0.jpg"
  let photo10="pages/Generator/images/IMG_20211013_124655_951.jpg"
  let photo11="pages/Generator/images/IMG_20211013_123103_808.jpg"
  let photo12="pages/Generator/images/NewPhoto/Copy of IMG_0353.jpg"
  let photo13="pages/Generator/images/NewPhoto/Copy of IMG_0361.jpg"
  let photo14="pages/Generator/images/NewPhoto/Copy of IMG_0431.jpg"
  
  

  var Fruits=[photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9,photo10,photo11,photo12,photo13,photo14]
var e=0
console.log(Fruits);

var autoG=document.getElementById('autoGenerate')
  
var image1=document.createElement('img')
image1.setAttribute('id','first-photo')



  

    function display(){ 
        if(e<=Fruits.length-1){
        
       
           image1.src=Fruits[e++]
           console.log(Fruits[e++])
        
        autoG.appendChild(image1)


       }
       else{
          image1.src=Fruits[0]
          return e=0
           }
          } display() 
          setInterval(display,5000)


