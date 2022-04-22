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

