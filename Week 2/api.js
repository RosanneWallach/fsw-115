funtion Setup() {
    
    loadJSON("https://swapi.dev/api/people/1/", gotData);

}

function gotData(data) {
    println(data);

}



function draw() {

}