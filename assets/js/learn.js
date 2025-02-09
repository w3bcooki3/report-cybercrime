
document.getElementById("showParagraphs").addEventListener("click", function () {
    // Hide all content first
    document.querySelectorAll(".content").forEach((el) => el.classList.remove("show"));
  
    // Show only paragraphs
    document.querySelectorAll(".content.paragraph").forEach((el) => el.classList.add("show"));
  });
  
  document.getElementById("showVideos").addEventListener("click", function () {
    // Hide all content first
    document.querySelectorAll(".content").forEach((el) => el.classList.remove("show"));
  
    // Show only videos
    document.querySelectorAll(".content.video").forEach((el) => el.classList.add("show"));
  });

  document.getElementById("showRansome").addEventListener("click", function () {
    // Hide all content first
    document.querySelectorAll(".content").forEach((el) => el.classList.remove("show"));
  
    // Show only paragraphs
    document.querySelectorAll(".content.ransome").forEach((el) => el.classList.add("show"));
  });

  document.getElementById("showPhishing").addEventListener("click", function () {
    // Hide all content first
    document.querySelectorAll(".content").forEach((el) => el.classList.remove("show"));
  
    // Show only paragraphs
    document.querySelectorAll(".content.phishing").forEach((el) => el.classList.add("show"));
  });

  document.getElementById("showOther").addEventListener("click", function () {
    // Hide all content first
    document.querySelectorAll(".content").forEach((el) => el.classList.remove("show"));
  
    // Show only paragraphs
    document.querySelectorAll(".content.other").forEach((el) => el.classList.add("show"));
  });
  



  document.addEventListener("DOMContentLoaded", function () {
    const readNowButtons = document.querySelectorAll(".theme-btn2");

    readNowButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent immediate navigation

            const redirectUrl = this.getAttribute("href");
            const websiteName = new URL(redirectUrl).hostname; // Extract hostname for display

            startTimerAndRedirect(redirectUrl, websiteName);
        });
    });
});



function startTimerAndRedirect(redirectUrl, websiteName) {
  const popupOverlay = document.getElementById("popupOverlay");
  const popupContainer = document.getElementById("popupContainer");
  const redirectWebsite = document.getElementById("redirectWebsite");
  const popupSeconds = document.getElementById("popupSeconds");
  const redirectLink = document.getElementById("redirectLink");

  let countdown = 10;
  let timer;

  // Update popup content
  redirectWebsite.textContent = websiteName;
  redirectLink.href = redirectUrl;

  // Show the popup
  popupOverlay.style.display = "block";
  popupContainer.style.display = "block";

  // Countdown timer
  timer = setInterval(() => {
      popupSeconds.textContent = countdown;
      if (countdown === 0) {
          clearInterval(timer);
          window.open(redirectUrl, "_blank"); // Redirect to the link
          closePopup(); // Hide the popup
      }
      countdown--;
  }, 1000);

  // Function to close the popup and cancel redirection
  function closePopup() {
      clearInterval(timer); // Stop the countdown
      popupOverlay.style.display = "none";
      popupContainer.style.display = "none";
  }

  // Close popup when clicking outside of it
  popupOverlay.addEventListener("click", (event) => {
      if (event.target === popupOverlay) {
          closePopup(); // Close popup and cancel redirection
      }
  });
}
