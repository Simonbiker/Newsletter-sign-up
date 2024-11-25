document.addEventListener("DOMContentLoaded", () => {
    // Get the saved email from localStorage
    const submittedEmail = localStorage.getItem("submittedEmail");
  
    if (submittedEmail) {
      const emailAdressElement = document.querySelector(".email-adress");

      if (emailAdressElement) {
        emailAdressElement.textContent = submittedEmail;
      } else {
        console.error("Email address span not found.");
      }
    } else {
      console.error("No email found in localStorage.");
    }
  });
  