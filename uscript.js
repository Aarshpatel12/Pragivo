// Modal open/close
function openModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  // Close modal on clicking outside
  window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // Location auto-suggestions
  const sampleLocations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  function suggestLocation() {
    const input = document.querySelector('.location-input').value;
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';  // Clear previous suggestions
  
    sampleLocations.forEach(location => {
      if (location.toLowerCase().includes(input.toLowerCase())) {
        const suggestion = document.createElement('p');
        suggestion.innerText = location;
        suggestion.onclick = () => {
          document.querySelector('.location-input').value = location;
          suggestionsDiv.innerHTML = ''; // Clear suggestions after selection
        };
        suggestionsDiv.appendChild(suggestion);
      }
    });
  }
  
  // Filter services
  function filterService(serviceType) {
    alert(`Filtering services for: ${serviceType}`);
    // Add dynamic filtering logic if services are dynamically loaded
  }
  