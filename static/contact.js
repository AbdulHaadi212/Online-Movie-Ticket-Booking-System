document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
});
    // // Get form values
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const message = document.getElementById('message').value;

    // Validate the form or process the data here
//     if (name && email && message) {
//         console.log('Form Submitted');
//         console.log('Name:', name);
//         console.log('Email:', email);
//         console.log('Message:', message);

//         // Here you can send the form data using fetch or any other method
//         // For now, just alert the user that the form is being submitted
//         alert('Form has been submitted successfully!');

//         // Reset the form
//         document.getElementById('contact-form').reset();
//     } else {
//         alert('Please fill in all the fields.');
//     }
// });