// Wait for the DOM to fully load
window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('resume') as HTMLFormElement;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the input values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('ph') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Create the resume content with editable span elements
        const resumeContent = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> <span id="edit-name" class="editable" contenteditable="true"> ${name} </span></p>
            <p><strong>Email:</strong> <span id="edit-email" class="editable" contenteditable="true"> ${email} </span></p>
            <p><strong>Phone:</strong> <span id="edit-phone" class="editable" contenteditable="true"> ${phone} </span></p>
            
            <h3>Education</h3>
            <p id="edit-education" class="editable" contenteditable="true">${education}</p>
            
            <h3>Experience</h3>
            <p id="edit-experience" class="editable" contenteditable="true">${experience}</p>
           
            <h3>Skills</h3>
            <p id="edit-skills" class="editable" contenteditable="true">${skills}</p>
        `;

        // Add the resume content to the page
        const resumeContainer = document.createElement('div');
        resumeContainer.innerHTML = resumeContent;
        resumeContainer.style.border = "2px solid #3498bd";
        resumeContainer.style.padding = "20px";
        resumeContainer.style.marginTop = "20px";
        resumeContainer.style.backgroundColor = "aliceblue";
        resumeContainer.style.borderRadius = "8px";

        // Remove existing resume content if any
        const existingResume = document.querySelector('.generated-resume');
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
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        // Optional: handle any additional functionality when an element is edited
        element.addEventListener('input', () => {
            console.log(`${element.id} has been edited.`);
        });
    });
}
