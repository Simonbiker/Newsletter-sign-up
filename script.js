// Define the list of text lines
const lines = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!"
  ];
  
  // Define the container where the list will be added
  const container = document.getElementById('icon-list-container'); // Make sure this container exists in your HTML
  
  // Loop through each line of text
  lines.forEach(line => {
    // Create a new container for each item
    const listItem = document.createElement('div');
    listItem.style.display = 'flex'; // Make sure the icon and text are aligned
    listItem.style.alignItems = 'flex-start';
    listItem.style.marginBottom = '16px'; // Add some spacing between items
  
    // Create the icon element
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    icon.setAttribute("width", "21");
    icon.setAttribute("height", "21");
    icon.setAttribute("viewBox", "0 0 21 21");
    icon.innerHTML = `
      <g fill="none">
        <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/>
        <path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/>
      </g>
    `;
  
    // Create the text element
    const text = document.createElement('span');
    text.textContent = line; // Add the line of text
    text.style.marginLeft = '15px'; // Add spacing between the icon and the text
  
    // Append the icon and text to the list item
    listItem.appendChild(icon);
    listItem.appendChild(text);
  
    // Append the list item to the container
    container.appendChild(listItem);
});


document.addEventListener("DOMContentLoaded", () => {
    // Select the form elements after the DOM has loaded
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
  
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Add submit event listener
    emailForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
  
      emailError.textContent = '';
      emailInput.style.border = '';
      const email = emailInput.value.trim(); // Get the email value and trim whitespace
  
      // Validation: Check if the email field is empty
      if (email === "" || !emailRegex.test(email)) {
        emailError.textContent = 'Valid email required';
        emailError.style.color = 'red';
        emailError.style.fontSize = '0.9rem';
        emailError.style.marginTop = '5px';
        emailInput.style.border = '2px solid red';
        return;
      }

      // If all validations pass, redirect to the success page
      localStorage.setItem("submittedEmail", email); // Save email in localStorage for use on the success page
      window.location.href = "success.html"; // Redirect to success page
    });
  });
  
  