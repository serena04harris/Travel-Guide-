document.getElementById("travel-form").addEventListener("submit", function(event) {
   event.preventDefault(); // Prevent form from refreshing the page
 
   // Get form values
   const destination = document.getElementById("destination").value;
   const activities = document.getElementById("activities").value.toLowerCase();
   const budget = parseInt(document.getElementById("budget").value);
   const season = document.getElementById("season").value;
 
   // Sample pre-defined trips with URLs
   const trips = [
     { 
       name: "Costa Rica", 
       type: "beach", 
       activities: "surfing", 
       budget: 1000, 
       season: "summer",
       url: "https://che-fern.github.io/Costa-Rica/"
     },
     { 
       name: "Italian Getaway", 
       type: "city", 
       activities: "history", 
       budget: 1500, 
       season: "fall",
       url: "https://serena04harris.github.io/Italy-/"
     },
     { 
       name: "New York City Getaway", 
       type: "city", 
       activities: "shopping", 
       budget: 2000, 
       season: "spring",
       url: "https://che-fern.github.io/NYC/"
     },
     { 
      name: "Ireland", 
      type: "city", 
      activities: "game of thrones", 
      budget: 2000, 
      season: "fall",
      url: "https://che-fern.github.io/Ireland/"
    },
    { 
      name: "Ski the Alps", 
      type: "mountain", 
      activities: "skiing", 
      budget: 1500, 
      season: "winter",
      url: "https://che-fern.github.io/Ski-Alps/"
    },
    { 
      name: "Hawaii", 
      type: "beach", 
      activities: "beach", 
      budget: 2000, 
      season: "summer",
      url: "https://che-fern.github.io/Hawaii/"
    },
    { 
      name: "Canada", 
      type: "mountain", 
      activities: "outside", 
      budget: 1000, 
      season: "fall",
      url: "https://che-fern.github.io/Canada/"
    },
    { 
      name: "Utah & Arizona", 
      type: "mountain", 
      activities: "hiking rocks", 
      budget: 1000, 
      season: "fall",
      url: "https://serena04harris.github.io/outwest/"
    },
    { 
      name: "Africa", 
      type: "mountain", 
      activities: "safari", 
      budget: 1000, 
      season: "spring",
      url: "https://serena04harris.github.io/safari/"
    },
   ];
 
   // Match logic
   const matchedTrip = trips.find(trip =>
     trip.type === destination &&
     trip.activities.includes(activities) &&
     trip.budget <= budget &&
     trip.season === season
   );
 
   // Display result
   const resultDiv = document.getElementById("result");
   resultDiv.innerHTML = ""; // Clear previous result
 
   if (matchedTrip) {
     // Create a clickable link
     const link = document.createElement("a");
     link.href = matchedTrip.url;
     link.target = "_blank"; // Opens in a new tab
     link.textContent = `We recommend: ${matchedTrip.name}`;
     link.style.textDecoration = "none"; // Optional: Customize link style
     link.style.color = "blue";
 
     resultDiv.appendChild(link);
   } else {
     resultDiv.textContent = "Sorry, no trips match your preferences.";
   }
 });
 
