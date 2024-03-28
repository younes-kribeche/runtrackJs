$("#button").click(function(){
    fetch("expression.txt")
    .then(response => response.text())
    .then(data => {
        console.log(data);
        $("#parent").html("<p>" + data + "</p>");
    })
    .catch(error => console.error("Mince, il y a une erreur: " + error));
});
