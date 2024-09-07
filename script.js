// Wait for the DOM to fully load
window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get the input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('ph').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Create the resume content with editable span elements
        var resumeContent = "\n            <h2>Generated Resume</h2>\n            <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\" contenteditable=\"true\"> ".concat(name, " </span></p>\n            <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\" contenteditable=\"true\"> ").concat(email, " </span></p>\n            <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\" contenteditable=\"true\"> ").concat(phone, " </span></p>\n            \n            <h3>Education</h3>\n            <p id=\"edit-education\" class=\"editable\" contenteditable=\"true\">").concat(education, "</p>\n            \n            <h3>Experience</h3>\n            <p id=\"edit-experience\" class=\"editable\" contenteditable=\"true\">").concat(experience, "</p>\n           \n            <h3>Skills</h3>\n            <p id=\"edit-skills\" class=\"editable\" contenteditable=\"true\">").concat(skills, "</p>\n        ");
        // Add the resume content to the page
        var resumeContainer = document.createElement('div');
        resumeContainer.innerHTML = resumeContent;
        resumeContainer.style.border = "2px solid #3498bd";
        resumeContainer.style.padding = "20px";
        resumeContainer.style.marginTop = "20px";
        resumeContainer.style.backgroundColor = "aliceblue";
        resumeContainer.style.borderRadius = "8px";
        // Remove existing resume content if any
        var existingResume = document.querySelector('.generated-resume');
        if (existingResume) {
            existingResume.remove();
        }
        // Append the new resume content
        resumeContainer.classList.add('generated-resume');
        form.insertAdjacentElement('afterend', resumeContainer);
    });
});
// This function is used to make elements editable (if needed for future use)
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        // Optional: handle any additional functionality when an element is edited
        element.addEventListener('input', function () {
            console.log("".concat(element.id, " has been edited."));
        });
    });
}
