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