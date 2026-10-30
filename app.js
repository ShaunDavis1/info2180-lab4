//Find the button
const button = document.getElementById("search-btn");

button.addEventListener("click", function( ) {

    //Request for the superheroes information
    fetch("superheroes.php")

    .then(function(response) {
        return response.text
    })

    .then(function(data){
        alert(data)
    });
});

// Select the input field
const input = document.getElementById("hero-name");

button.addEventListener("click", function( ) {

    // Retrieve the superhero name
    const searchTerm = input.value.trim(); 
    
    const url = "superheroes.php?query=" + encodeURIComponent(searchTerm);
    fetch(url)
        .then(function(response) {
            return response.text();
    })

    .then(function(data) {
        result.innerHTML =data;
    });

});
// Select the results container
const result = document.getElementById("result");