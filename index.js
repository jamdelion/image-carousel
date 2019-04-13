window.onload = function() {
  var i = 0;
  var images = [];
  var timeLapse = 1000;
  var slide = document.querySelector(".imageHolder");


  // Buttons
  var playButton = document.querySelector('.pause');
  var prevButton = document.querySelector("#prev");
  var nextButton = document.querySelector("#next");

  // Image list
  images[0] = "img1.jpg";
  images[1] = "img2.jpg";
  images[2] = "img3.jpg";
  images[3] = "img4.jpg";
  images[4] = "img5.jpg";
  // set initial slide to img1
  slide.src = images[0];

  // on click play
  playButton.onclick = function() {
    // playbutton class contains "play" true or false
    var playing = !playButton.classList.toggle("play");
    // if no "play" in classlist, playslides (start function)
    if (playing) {
      playSlides();
    }
  }

  // Automatic play (change images)
  function playSlides() {
    if (!playButton.classList.contains("play")) {
      nextSlide();
      setTimeout(playSlides, timeLapse);
    }
  }
  // deactivate next/prev buttons?

  function nextSlide() {
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    slide.src = images[i];
  }

  nextButton.onclick = function() {
    if (playButton.classList.contains("play")) {
      nextSlide();
      // grey out the play button??
    }
  }

  function prevSlide() {
    if (i !== 0) {
      i--;
    } else {
      i = images.length - 1;
    }
    slide.src = images[i];
  }

  prevButton.onclick = function() {
    if (playButton.classList.contains("play")) {
      prevSlide();
      // grey out the play button??
    }
  }

  document.onkeydown = function(event) {
      switch (event.keyCode) {
         case 37:
              prevSlide();
            break;
         case 39:
              nextSlide();
            break;
      }
  };

}
