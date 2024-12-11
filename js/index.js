const getDestinationValue = () => {
    // get destination values from form
    const cityCheckbox = document.getElementById('destination-city');
    const beachCheckbox = document.getElementById('destination-beach');
    const desertCheckbox = document.getElementById('destination-desert');
    const mountainCheckbox = document.getElementById('destination-mountain');
    
    // create an array to hold the selected destinations
    const destinationList = [];

    // Add destinations based on the checkbox selection

    if (cityCheckbox.checked) {
        destinationList.push('New York City'); 
        destinationList.push('Italy');
        destinationList.push('Ireland');
    }

    if (beachCheckbox.checked) {
        destinationList.push('Costa Rica');
        destinationList.push('Hawaii');
    }

    if (desertCheckbox.checked) {
        destinationList.push('African Safari');
        destinationList.push('Arizona and Utah');
    }

    if (mountainCheckbox.checked) {
        destinationList.push('Alps');
        destinationList.push('Canada');
    } 

    return destinationList; 
}; 

const  getBudgetValue = () => {
    const budget5001000 = document.getElementById('budget-500-1000');
    const budget10005000 = document.getElementById('budget-1000-5000');
    const budget500010000 = document.getElementById('budget-5000-10000');
    const otherBudget = document.getElementById('budget-other');
    const budgetList = []; // Declare array here

    if (budget5001000.checked) budgetList.push(budget5001000.value);
    if (budget10005000.checked) budgetList.push(budget10005000.value);
    if (budget500010000.checked) budgetList.push(budget500010000.value);
    if (otherBudget.checked) budgetList.push(otherBudget.value);

    return budgetList; 
};

const getClimateValue = () => {
    const SunnyCheckbox = document.getElementById('climate-sunny');
    const breezyCheckbox = document.getElementById('climate-breezy');
    const coldCheckbox = document.getElementById('climate-cold');
    const climateList = [];

    if (SunnyCheckbox.checked) climateList.push(SunnyCheckbox.value);
    if (breezyCheckbox.checked) climateList.push(breezyCheckbox.value);
    if (coldCheckbox.checked) climateList.push (coldCheckbox.value);

    return climateList; 
};

const getActivityValue = () => {
    const relaxingCheckbox = document.getElementById('activity-relaxing');
    const adventurousCheckbox = document.getElementById('activity-adventurous');
    const mixCheckbox = document.getElementById('activity-mix');
    const activityList = [];

    if (relaxingCheckbox.checked) activityList.push(relaxingCheckbox.value);
    if (adventurousCheckbox.checked) activityList.push(adventurousCheckbox.value);
    if (mixCheckbox.checked) activityList.push(mixCheckbox.value);

    return activityList;
};

const getTransportationValue = () => {
    const walkCheckbox = document.getElementById('transportation-walk');
    const bikeCheckbox = document.getElementById('transportation-bike');
    const busCheckbox = document.getElementById('transportation-bus');
    const carCheckbox = document.getElementById('transportation-car');
    const tourCheckbox = document.getElementById('transportation-tour');
    const transportList = [];

    if (walkCheckbox.checked) transportList.push(walkCheckbox.value);
    if (bikeCheckbox.checked) transportList.push(bikeCheckbox.value);
    if (busCheckbox.checked) transportList.push(busCheckbox.value);
    if (carCheckbox.checked) transportList.push(carCheckbox.value);
    if (tourCheckbox.checked) transportList.push(tourCheckbox.value);

    return transportList;
};

const handleSubmit = (event) => {
    event.preventDefault(); // prevent page from reloading

     // Collect form data
     const destinationValue = getDestinationValue(); // Array of selected destinations
     const budgetValue = getBudgetValue(); // Array of budget ranges
     const climateValue = getClimateValue();
     const activityValue = getActivityValue();
     const transportationValue = getTransportationValue();
 
     // Sample predefined trips
     const trips = [
         { name: "New York City", type: "city", budgetrange: "500-1000", climate: "breezy and mild", activities: ["mix of both"], transportation: "walk" },
         { name: "Italy", type: "city", budgetrange: "1000-5000", climate: "sunny and warm", activities: ["adventurous"], transportation: "tour" },
         { name: "Ireland", type: "city", budgetrange: "5000-10000", climate: "cold and chilly", activities: ["relaxing"], transportation: "bike" },
         { name: "Costa Rica", type: "beach", budgetrange: "1000-5000", climate: "sunny and warm", activities: ["mix of both"], transportation: "walk" },
         { name: "Hawaii", type: "beach", budgetrange: "500-1000", climate: "sunny and warm", activities: ["relaxing"], transportation: "bike" },
         { name: "African Safari", type: "desert", budgetrange: "5000-10000", climate: "sunny and warm", activities: ["adventurous"], transportation: "tour" },
         { name: "Arizona and Utah", type: "desert", budgetrange: "1000-5000", climate: "sunny and warm", activities: ["mix of both"], transportation: "rent a car" },
         { name: "Alps", type: "mountain", budgetrange: "1000-5000", climate: "cold and chilly", activities: ["adventurous"], transportation: "bus" },
         { name: "Canada", type: "mountain", budgetrange: "500-1000", climate: "cold and chilly", activities: ["adventurous"], transportation: "rent a car" },
     ];
 
     // Find a matching trip based on the selected criteria
        const matchedTrip = trips.find(trip => 
            destinationValue.includes(trip.name) && // Check if the trip name is in the selected destinations
            activityValue.some(activity => trip.activities && trip.activities.includes(activity)) && // Match activity
            budgetValue.some(budget => {
                const [min, max] = budget.split('-').map(Number);
                return trip.budgetrange >= min && trip.budgetrange <= max; // Match budget range
            })
     );
 
     // Get the result div for displaying the recommendation
     const resultDiv = document.getElementById('destination-text');
     
     // If a matching trip is found, show the recommendation
     if (matchedTrip) {
         resultDiv.textContent = `We recommend: ${matchedTrip.name}`;
     } else {
         resultDiv.textContent = "Sorry, no trips match your preferences.";
     }
 
     // Show the result section
     const resultSection = document.getElementById('destination-result');
     resultSection.style.display = 'block';
 };

    // get form values 
    const emailValue = document.getElementById('email').value;
    const startDateValue = document.getElementById('start-date').value;
    const endDateValue = document.getElementById('end-date').value;
    const destinationValue = getDestinationValue(); // Calls getDestinationValue function
    const budgetValue = getBudgetValue();           // Calls getBudgetValue function
    const climateValue = getClimateValue();         // Calls getClimateValue function
    const activityValue = getActivityValue();       // Calls getActivityValue function
    const transportationValue = getTransportationValue(); // Calls getTransportationValue function

    // Add form values to destination object
    const destination = {
        email: emailValue, 
        startDate: startDateValue,
        endDate: endDateValue,
        destination: destinationValue,
        budget: budgetValue,
        climate: climateValue,
        activity: acitivtyValue,
        transportation: transportationValue,
    }; 

    // Now, handle displaying the desination information
    displayDestinationResult(destination);


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
            imagePaths.push('images/beach.jpg')
        } else if (dest === 'Desert') {
            destinationMessage += 'enter text here, you are looking for a desert adventure! ' ;
            imagePaths.push('images/desert.jpg')
        } else if (dest === 'Mountain') {
            destinationMessage += 'enter text here, you are looking for a mountain adventure! ' ;
            imagePaths.push('images/mountain.jpg')
        } 
    }); 

    // Handle budget
    if (destination.budget.length > 0) {
        destinationMessage += `Your budget range is: ${destination.budget.join(', ')}. `;
    }

    // Handle climate
    if (destination.climate.length > 0) {
        destinationMessage += `You prefer a climate of: ${destination.climate.join(', ')}. `;
    }

    // Handle activity level
    if (destination.activity.length > 0) {
        destinationMessage += `You prefer activities like: ${destination.activity.join(', ')}. `;
    }

    // Handle transportation
    if (destination.transportation.length > 0) {
        destinationMessage += `You prefer transportation like: ${destination.transportation.join(', ')}. `;
    }

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
document.getElementById('form').addEventListener('submit', handleSubmit);
