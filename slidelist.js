var slideIndex = 1;
        showSlides(slideIndex);
        
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          if (n > slides.length) { slideIndex = 1 }
          if (n < 1) { slideIndex = slides.length }
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[slideIndex - 1].style.display = "block";
        }
        
        document.addEventListener('keydown', function(event) {
          if (event.keyCode === 37) { // Left arrow key
            plusSlides(-1);
          }
          else if (event.keyCode === 39) { // Right arrow key
            plusSlides(1);
          }
        });
