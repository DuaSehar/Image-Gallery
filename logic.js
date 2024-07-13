// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const fullImgContainer = document.getElementById("fullImgContainer");
    const fullImg = document.getElementById("fullImg");
  
    gallery.addEventListener("click", function(event) {
      if (event.target.tagName === "IMG") {
        fullImg.src = event.target.src;
        fullImgContainer.classList.add("show");
      }
    });
  
    fullImgContainer.addEventListener("click", function() {
      fullImgContainer.classList.remove("show");
    });
  });
  
  