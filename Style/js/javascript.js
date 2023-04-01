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

  let photo1="Style/images/photos/NewPhotos/Computer/DSC_0697.JPG"
  let photo2="Style/images/photos/NewPhotos/Digital/20230331_102856.jpg"
  let photo3="Style/images/photos/NewPhotos/Tailoring/DSC_0445.JPG"
  let photo4="Style/images/photos/NewPhotos/Digital/20230331_102802.jpg"
  let photo5="Style/images/photos/NewPhotos/Digital/20230331_102856.jpg"
  let photo6="Style/images/photos/NewPhotos/Digital/20230331_102906.jpg"
  let photo7="Style/images/photos/NewPhotos/Digital/20230331_102834.jpg"
  let photo8="Style/images/photos/NewPhotos/Computer/fotor_2023-3-28_11_15_42.jpg"
  let photo9="Style/images/photos/NewPhotos/Computer/fotor_2023-3-28_11_21_47.jpg"
  let photo10="Style/images/photos/NewPhotos/Computer/DSC_0705.JPG"
  let photo11="Style/images/photos/NewPhotos/Computer/fotor_2023-3-28_11_17_57.jpg"
  let photo12="Style/images/photos/NewPhotos/Tailoring/DSC_0451.JPG"
  let photo13="Style/images/photos/NewPhotos/Tailoring/DSC_0456.JPG"
  let photo14="Style/images/photos/NewPhotos/Tailoring/DSC_0473.JPG"
  
  

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


