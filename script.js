document.addEventListener("DOMContentLoaded", function () {
  
  // A reusable function to process form submissions via background AJAX fetch
  function setupFormAJAX(formSelector, successElementId) {
    const form = document.querySelector(formSelector);
    const successBox = document.getElementById(successElementId);
    
    if (!form || !successBox) return;

    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Stop the default page redirect behavior

      const submitButton = form.querySelector("button[type='submit']");
      const originalButtonText = submitButton.textContent;

      // Update button visual state to indicate progress
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Pack form input metrics dynamically
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          form.reset(); // Wipe all form input values 
          successBox.style.display = "block"; // Render success alert notice 
          
          // Smoothly clear the notification box after 6 seconds
          setTimeout(() => {
            successBox.style.display = "none";
          }, 6000);
        } else {
          alert("Oops! There was a problem submitting your form data. Please check inputs.");
        }
      } catch (error) {
        alert("Network failure error. Unable to connect to Formspree servers.");
      } finally {
        // Restore button back to normal state
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }
    });
  }

  // Activate the background logic on both distinct forms
  setupFormAJAX(".reservation-form", "res-success-msg");
  setupFormAJAX(".contact-form", "contact-success-msg");
});