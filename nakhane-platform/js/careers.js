// Add this to your existing script.js file
document.addEventListener("DOMContentLoaded", function () {
    // Form submission handling
    const jobForm = document.querySelector(".job-application-form");
    if (jobForm) {
        jobForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            alert(
                "Thank you for your application! We will review your information and get back to you soon."
            );
            jobForm.reset();

            // In a real implementation, you would use fetch() or similar to submit the form
            // Example:
            /*
            const formData = new FormData(jobForm);
            
            fetch('/submit-application', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                alert('Application submitted successfully!');
                jobForm.reset();
            })
            .catch(error => {
                alert('There was an error submitting your application. Please try again.');
            });
            */
        });
    }
});
