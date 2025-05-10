function revealCard() {
    const card = document.getElementById("cardInner");
    card.classList.toggle("flip");
  }
  
  function togglePartyMode() {
    document.body.classList.toggle("party");
  }
  
  
  function nextSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll("div[id^='section']");
    sections.forEach(section => section.style.display = "none");
  
    // Show the next section
    const nextSection = document.getElementById(`section${sectionId}`);
    nextSection.style.display = "block";
  }
  
  function copyLink() {
    navigator.clipboard.writeText("https://yourdomain.com").then(() => {
      alert("Link copied to clipboard!");
    });
  }
  
  function shareFacebook() {
    const url = encodeURIComponent("https://yourdomain.com");
    const msg = encodeURIComponent("🎉 Happy 21st Birthday! Check out this cool card I made!");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${msg}`, '_blank');
  }
  
  function shareInstagram() {
    const msg = encodeURIComponent("🎉 Happy 21st Birthday! Check out this awesome card I created!");
    const imageUrl = encodeURIComponent("https://yourdomain.com/card_image.png"); // Replace with actual image URL if you want to share an image
    window.open(`https://www.instagram.com/?url=${msg}&image=${imageUrl}`, '_blank');
  }
  
  function shareTikTok() {
    const msg = encodeURIComponent("🎉 Happy 21st Birthday! Check out this awesome card I made!");
    window.open(`https://www.tiktok.com/share?url=${msg}`, '_blank');
  }
  
  function viewFullSize(photoSrc) {
    window.open(photoSrc, "_blank");
  }
  