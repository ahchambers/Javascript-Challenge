// From data.js
var tableData = data;

//Select table body 
var tbody = d3.select("tbody");

// Clear existing data
function buildTable(data) {
    tbody.html("");
  
// Loop through each object and append row and cell
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    }
    );
  });
}


// Select button
var button = d3.select("#filter-btn");

// Select date input 
var inputField = d3.select("#example-date-input");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element
  var inputElement = d3.select("#example-date-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //Apply filter
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  buildTable(filteredData);
  }

  // Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
