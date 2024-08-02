// function showLoginForm() {
//    document.getElementById('login-form').style.display = 'block';
//    document.getElementById('register-form').style.display = 'none';
//    document.getElementById('welcome').style.display = 'none';
// }

// function showRegisterForm() {
//    document.getElementById('login-form').style.display = 'none';
//    document.getElementById('register-form').style.display = 'block';
//    document.getElementById('welcome').style.display = 'none';
// }

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//    const mobileMenu = document.getElementById('mobile-menu');
//    const navMenu = document.querySelector('nav ul');

//    mobileMenu.addEventListener('click', () => {
//        navMenu.classList.toggle('open');
//    });

//    // Example: smooth scrolling for navigation
//    document.querySelectorAll('nav ul li a').forEach(anchor => {
//        anchor.addEventListener('click', function (e) {
//            e.preventDefault();

//            const target = document.querySelector(this.getAttribute('href'));
//            target.scrollIntoView({
//                behavior: 'smooth'
//            });
//            navMenu.classList.remove('open');  // Close menu on link click
//        });
//    });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Example: smooth scrolling for navigation
  document.querySelectorAll("nav ul li").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//    // Example: smooth scrolling for navigation
//    document.querySelectorAll('.scroll .sc ').forEach(anchor => {
//        anchor.addEventListener('click', function (e) {
//            e.preventDefault();

//            const target = document.querySelector(this.getAttribute('href'));
//            target.scrollIntoView({
//                behavior: 'smooth'
//            });
//        });
//    });
// });

// --------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const scrollUpButton = document.querySelector(".scrollUp");
  const scrollDownButton = document.querySelector(".scrollDown");

  // Show/hide scroll buttons based on scroll position
  function handleScroll() {
    const statisticsSection = document.querySelector(".statistics");

    const statisticsSectionBottom =
      statisticsSection.offsetTop + statisticsSection.offsetHeight;

    if (window.scrollY > statisticsSectionBottom) {
      scrollUpButton.style.display = "block";
    } else {
      scrollUpButton.style.display = "none";
    }

    if (window.scrollY < statisticsSectionBottom) {
      scrollDownButton.style.display = "block";
    } else {
      scrollDownButton.style.display = "none";
    }
  }

  // Scroll to the top section
  scrollUpButton.addEventListener("click", function () {
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  });

  // Scroll to the bottom section
  scrollDownButton.addEventListener("click", function () {
    document.querySelector("#Contact").scrollIntoView({ behavior: "smooth" });
  });

  // Check scroll position on load and scroll
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

document.addEventListener("DOMContentLoaded", () => {
  // Example: smooth scrolling for navigation
  document.querySelectorAll("ul li").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".toggle").style.left = "0";
});

// Add an event listener for close button
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".toggle").style.left = "-120%";
});

// document.querySelector(".Christina").addEventListener("click", () => {
//   document.querySelector("main").style.display = "none";
//   document.querySelector(".foot").style.display = "none";
//   document.querySelector(".header").style.display = "none";
//   document.querySelector(".scroll").style.display = "none";
//   document.querySelector(".story1").style.display = "block";
// });

// document.querySelector(".back").addEventListener("click", () => {
//   document.querySelector("main").style.display = "block";
//   document.querySelector(".foot").style.display = "block";
//   document.querySelector(".header").style.display = "block";
//   document.querySelector(".scroll").style.display = "block";
//   document.querySelector(".story1").style.display = "none";
//   document.querySelector(".story2").style.display = "none";
//   document.querySelector(".story3").style.display = "none";
//   document.querySelector(".story4").style.display = "none";

// setTimeout(() => {
//   const target = document.querySelector(this.getAttribute('href'));
//          target.scrollIntoView({
//              behavior: 'smooth'
//          });
// }, 2000);
// });

let scrollPosition = 0;

// function viewStory() {
//   // Save the current scroll position
//   scrollPosition = window.scrollY;

//   // Hide homepage and show story page
//   document.querySelector("main").style.display = "none";
//   document.querySelector(".foot").style.display = "none";
//   document.querySelector(".header").style.display = "none";
//   document.querySelector(".scroll").style.display = "none";
//   document.querySelector(".story1").style.display = "block";
// }

// function backToHome() {
//   // Hide story page and show homepage
//   document.querySelector("main").style.display = "block";
//   document.querySelector(".foot").style.display = "block";
//   document.querySelector(".header").style.display = "block";
//   document.querySelector(".scroll").style.display = "block";
//   document.querySelector(".story1").style.display = "none";
//   document.querySelector(".story2").style.display = "none";
//   document.querySelector(".story3").style.display = "none";
//   document.querySelector(".story4").style.display = "none";

//   // Restore the scroll position
//   window.scrollTo(0, scrollPosition);
// }

function viewStory1() {
  // Save the current scroll position
  scrollPosition = window.scrollY;

  // Hide homepage and show story page
  document.querySelector("main").classList.add("hidden");
  document.querySelector("#foot").classList.add("hidden");
  document.querySelector("#header").classList.add("hidden");
  document.querySelector("#scroll").classList.add("hidden");
  document.querySelector(".story1").classList.remove("hidden");
  document.querySelector(".story2").classList.add("hidden");
  document.querySelector(".story3").classList.add("hidden");
  document.querySelector(".story4").classList.add("hidden");
  document.querySelector(".donation").classList.add("hidden");
  document.querySelector(".learn").classList.add("hidden");
  document.querySelector(".abouttoggle").classList.add("hidden");
  document.querySelector(".fooddon").classList.add("hidden");


}

function viewStory2() {
  // Save the current scroll position
  scrollPosition = window.scrollY;

  // Hide homepage and show story page
  document.querySelector("main").classList.add("hidden");
  document.querySelector("#foot").classList.add("hidden");
  document.querySelector("#header").classList.add("hidden");
  document.querySelector("#scroll").classList.add("hidden");
  document.querySelector(".story1").classList.add("hidden");
  document.querySelector(".story2").classList.remove("hidden");
  document.querySelector(".story3").classList.add("hidden");
  document.querySelector(".story4").classList.add("hidden");
  document.querySelector(".donation").classList.add("hidden");
  document.querySelector(".learn").classList.add("hidden");
  document.querySelector(".abouttoggle").classList.add("hidden");
  document.querySelector(".fooddon").classList.add("hidden");



}

function viewStory3() {
  // Save the current scroll position
  scrollPosition = window.scrollY;

  // Hide homepage and show story page
  document.querySelector("main").classList.add("hidden");
  document.querySelector("#foot").classList.add("hidden");
  document.querySelector("#header").classList.add("hidden");
  document.querySelector("#scroll").classList.add("hidden");
  document.querySelector(".story1").classList.add("hidden");
  document.querySelector(".story2").classList.add("hidden");
  document.querySelector(".story3").classList.remove("hidden");
  document.querySelector(".story4").classList.add("hidden");
  document.querySelector(".donation").classList.add("hidden");
  document.querySelector(".learn").classList.add("hidden");
  document.querySelector(".abouttoggle").classList.add("hidden");
  document.querySelector(".fooddon").classList.add("hidden");


}

function viewStory4() {
  // Save the current scroll position
  scrollPosition = window.scrollY;

  // Hide homepage and show story page
  document.querySelector("main").classList.add("hidden");
  document.querySelector("#foot").classList.add("hidden");
  document.querySelector("#header").classList.add("hidden");
  document.querySelector("#scroll").classList.add("hidden");
  document.querySelector(".story1").classList.add("hidden");
  document.querySelector(".story2").classList.add("hidden");
  document.querySelector(".story3").classList.add("hidden");
  document.querySelector(".story4").classList.remove("hidden");
  document.querySelector(".donation").classList.add("hidden");
  document.querySelector(".learn").classList.add("hidden");
  document.querySelector(".abouttoggle").classList.add("hidden");
  document.querySelector(".fooddon").classList.add("hidden");



}


function viewDonation() {
  // Save the current scroll position
  scrollPosition = window.scrollY;

  // Hide homepage and show story page
  document.querySelector("main").classList.add("hidden");
  document.querySelector("#foot").classList.add("hidden");
  document.querySelector("#header").classList.add("hidden");
  document.querySelector("#scroll").classList.add("hidden");
  document.querySelector(".story1").classList.add("hidden");
  document.querySelector(".story2").classList.add("hidden");
  document.querySelector(".story3").classList.add("hidden");
  document.querySelector(".story4").classList.add("hidden");
  document.querySelector(".donation").classList.remove("hidden");
  document.querySelector(".learn").classList.add("hidden");
  document.querySelector(".abouttoggle").classList.add("hidden");
  document.querySelector(".fooddon").classList.add("hidden");



}

document.getElementById('donationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      amount: document.getElementById('amount').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value,
      message: document.getElementById('message').value
  };
  console.log(formData);
  alert('Thank you for your donation!');
});


function viewLearn() {
  // Save the current scroll position
  scrollPosition = window.scrollY;

  // Hide homepage and show story page
  document.querySelector("main").classList.add("hidden");
  document.querySelector("#foot").classList.add("hidden");
  document.querySelector("#header").classList.add("hidden");
  document.querySelector("#scroll").classList.add("hidden");
  document.querySelector(".story1").classList.add("hidden");
  document.querySelector(".story2").classList.add("hidden");
  document.querySelector(".story3").classList.add("hidden");
  document.querySelector(".story4").classList.add("hidden");
  document.querySelector(".donation").classList.add("hidden");
  document.querySelector(".learn").classList.remove("hidden");
  document.querySelector(".abouttoggle").classList.add("hidden");
  document.querySelector(".fooddon").classList.add("hidden");


}

function viewAbout() {
  // Save the current scroll position
  scrollPosition = window.scrollY;

  // Hide homepage and show story page
  document.querySelector("main").classList.add("hidden");
  document.querySelector("#foot").classList.add("hidden");
  document.querySelector("#header").classList.add("hidden");
  document.querySelector("#scroll").classList.add("hidden");
  document.querySelector(".story1").classList.add("hidden");
  document.querySelector(".story2").classList.add("hidden");
  document.querySelector(".story3").classList.add("hidden");
  document.querySelector(".story4").classList.add("hidden");
  document.querySelector(".donation").classList.add("hidden");
  document.querySelector(".learn").classList.add("hidden");
  document.querySelector(".abouttoggle").classList.remove("hidden");
  document.querySelector(".fooddon").classList.add("hidden");

  
}
function viewFood() {
  // Save the current scroll position
  scrollPosition = window.scrollY;

  // Hide homepage and show story page
  document.querySelector("main").classList.add("hidden");
  document.querySelector("#foot").classList.add("hidden");
  document.querySelector("#header").classList.add("hidden");
  document.querySelector("#scroll").classList.add("hidden");
  document.querySelector(".story1").classList.add("hidden");
  document.querySelector(".story2").classList.add("hidden");
  document.querySelector(".story3").classList.add("hidden");
  document.querySelector(".story4").classList.add("hidden");
  document.querySelector(".donation").classList.add("hidden");
  document.querySelector(".learn").classList.add("hidden");
  document.querySelector(".abouttoggle").classList.add("hidden");
  document.querySelector(".fooddon").classList.remove("hidden");
  
}
// -----------------------------------------------------

function backToHome() {
  // Hide story page and show homepage
  document.querySelector("main").classList.remove("hidden");
  document.querySelector("#foot").classList.remove("hidden");
  document.querySelector("#header").classList.remove("hidden");
  document.querySelector("#scroll").classList.remove("hidden");
  document.querySelector(".story1").classList.add("hidden");
  document.querySelector(".story2").classList.add("hidden");
  document.querySelector(".story3").classList.add("hidden");
  document.querySelector(".story4").classList.add("hidden");
  document.querySelector(".donation").classList.add("hidden");
  document.querySelector(".learn").classList.add("hidden");
  document.querySelector(".abouttoggle").classList.add("hidden");
  document.querySelector(".fooddon").classList.add("hidden");



  // Restore the scroll position
  window.scrollTo(0, scrollPosition);
}
