//Grab elements
const allPhotos=document.getElementById('allPhotos')
var imgs=document.createElement("img")
var imgs1=document.createElement("img")
var imgs2=document.createElement("img")
var imgs3=document.createElement("img")
var imgs4=document.createElement("img")
var imgs5=document.createElement("img")
var imgs6=document.createElement("img")
var imgs7=document.createElement("img")
var imgs8=document.createElement("img")
var imgs9=document.createElement("img")
var imgs10=document.createElement("img")

function ourPhotos(){
     
    imgs.src="./Generator/images/IMG_20211013_123103_808.jpg"
    imgs1.src="./Generator/images/IMG_20211013_123110_092.jpg"
    imgs2.src="./Generator/images/IMG_20211013_123149_905.jpg"
    imgs3.src="./Generator/images/IMG_20211013_123201_367.jpg"
    imgs4.src="./Generator/images/IMG_20211013_124648_797.jpg"
    imgs5.src="./Generator/images/IMG_20211013_124514_217.jpg"
    imgs6.src="./Generator/images/IMG_20211013_124648_797.jpg"
    imgs7.src="./Generator/images/IMG_20211013_124709_069.jpg"
    imgs8.src="./Generator/images/IMG_20211013_124447_0.jpg"
    imgs9.src="./Generator/images/IMG_20211013_124655_951.jpg"
    imgs10.src="./Generator/images/IMG_20211013_123103_808.jpg"

    allPhotos.appendChild(imgs)
    allPhotos.appendChild(imgs1)
    allPhotos.appendChild(imgs2)
    allPhotos.appendChild(imgs3)
    allPhotos.appendChild(imgs4)
    allPhotos.appendChild(imgs5)
    allPhotos.appendChild(imgs6)
    allPhotos.appendChild(imgs7)
    allPhotos.appendChild(imgs8)
    allPhotos.appendChild(imgs9)
    allPhotos.appendChild(imgs10)
    
}
ourPhotos()