var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
window.onload= function () {
 setInterval(function(){ 
     plusSlides(1);
 }, 3000);
 }

 fetch('data.json')
 .then(function (response) {
     return response.json();
 })
 .then(function (data) {
     appendData(data);
 })
 .catch(function (err) {
     console.log('error: ' + err);
 });
 function appendData(data) {
  var mainContainer = document.getElementById("search");
  for (var i = 0; i < data.length; i++) {
    if(mainContainer === data[i].Aadhar){
      var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].Name;
      mainContainer.appendChild(div);
    }
  
      
  }
}
  
  
