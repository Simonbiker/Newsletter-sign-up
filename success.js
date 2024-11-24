document.addEventListener("DOMContentLoaded", () => {
    // Get the saved email from localStorage
    const submittedEmail = localStorage.getItem("submittedEmail");

    // Check if an email was submitted
    if (submittedEmail) {
        // Create a success message
        const successMessage = document.createElement("p");
        successMessage.textContent = `Thank you for subscribing! A confirmation email has been sent to ${submittedEmail}.`;
        successMessage.style.fontSize = "1.2rem";
        successMessage.style.color = "green";

        // Add the success message to the body or a specific container
        const successContainer = document.getElementById("success-container"); // Ensure there's a container in success.html
        if (successContainer) {
        successContainer.appendChild(successMessage);
        } else {
        document.body.appendChild(successMessage);
        }
    }
});
  