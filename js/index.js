const getDestinationValue = () => {
    // get destination values from form
    const cityCheckbox = document.getElementById('destination-city');
    const beachCheckbox = document.getElementById('beach-city');
    const desertCheckbox = document.getElementById('desert-city');
    const mountainCheckbox = document.getElementById('mountain-city');

    // add destination to array
    const destinationList = [];
    if (cityCheckbox.checked) destinationList.push(cityCheckbox.value);
    if (beachCheckbox.checked) destinationList.push(beachCheckbox.value);
    if (desertCheckbox.checked) destinationList.push(desertCheckbox.value);
    if (mountainCheckbox.checked) destinationList.push(mountainCheckbox.value);

    return destinationList; 
}; 

const handleSubmit = (event) => {
    // prevent page from reloading
    event.preventDefault();

    // get form values 
    const emailValue = document.getElementById('email').value;
    const startDateValue = document.getElementById('start-date').value;
    const endDateValue = document.getElementById('end-date').value;
    const destinationValue = getDestinationValue(); 
    const categoryValue = document.getElementById('category').value;

    // Add form values to destination object
    const destination = {
        email: emailValue, 
        startDate: startDateValue,
        endDate: endDateValue,
        destination: destinationValue,
        category: categoryValue,
    }; 

    // Now, handle displaying the desination information
    displayDestinationResult(destination);
}

const displayDestinationResult = (destination) => {
    // Get the result container
    const resultSection = document.getElementById('destination-result'); 
    const destinationText = document.getElementById('destination-text');
    const destinationImages = document.getElementById('destination-images');

    // Show the result section
    resultSection.style.display = 'block';

    // Based on the seclected destinations, generate a message and images
    let destinationMessage = '';
    let imagePaths = [];

    // Check the destination array and create a message and images accordingly
    destination.destination.forEach(dest => {
        if (dest === 'City') {
            destinationMessage += 'enter text here, you are looking for a city adventure! ' ;
            imagePaths.push('images/city.jpg')
        } else if (dest === 'Beach') {
            destinationMessage += 'enter text here, you are looking for a beach adventure! ' ;
            imagePaths.push('images/city.jpg')
        } else if (dest === 'Desert') {
            destinationMessage += 'enter text here, you are looking for a desert adventure! ' ;
            imagePaths.push('images/city.jpg')
        } else if (dest === 'Mountain') {
            destinationMessage += 'enter text here, you are looking for a mountain adventure! ' ;
            imagePaths.push('images/city.jpg')
        } 
    }); 

    // Update the destination text with the message 
    destinationText.innerHTML = destinationMessage;

    // Clear any privious images 
    destinationImages.innerHTML = '';

    // Add images to the destination section
    imagePaths.forEach(imagePath => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Destination Image';
        img.classList.add('destination-image'); 
        destinationImages.appendChild(img);
    }); 
}; 

// Add event listener to the form
document.getElementById('destination-form').addEventListener('submit', handleSubmit);
