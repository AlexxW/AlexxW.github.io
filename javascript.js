//2f62dc6577fbb0e3e401e077404707a6

var APIKEY = "2f62dc6577fbb0e3e401e077404707a6";
var BASEURL = "https://api.themoviedb.org/3";


//***********POPULAR**************//
//***********MOVIES**************//
fetch(BASEURL+"/movie/popular?api_key="+APIKEY+"&language=en-US&page="+"1")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        for(i=0;i<=19;i++){
            var listElement = document.createElement("li");
            var textElement = document.createElement("a");
            var textContent = document.createTextNode(data.results[i].original_title);
            textElement.appendChild(textContent);
            listElement.setAttribute("class", "card");
            listElement.setAttribute("data-target", "card")
            var imgElement = document.createElement("IMG");
            var imgPath = "https://image.tmdb.org/t/p/w780"+data.results[i].poster_path;
            imgElement.setAttribute("src",imgPath)
            listElement.appendChild(imgElement)
            listElement.appendChild(textElement);
            document.getElementById("ulMV").appendChild(listElement);
        }
    })

var countMovie = 0;
var updateNumber = 14;
var x = 2;
console.log(countMovie);
function countRightMovie(){
    countMovie++;
    console.log(countMovie);
    if(countMovie == updateNumber){
        console.log('update');
        fetch(BASEURL+"/movie/popular?api_key="+APIKEY+"&language=en-US&page="+x)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                for(i=0;i<=19;i++){
                    var listElement = document.createElement("li");
                    var textElement = document.createElement("a");
                    var textContent = document.createTextNode(data.results[i].original_title);
                    textElement.appendChild(textContent);
                    listElement.setAttribute("class", "card");
                    listElement.setAttribute("data-target", "card")
                    var imgElement = document.createElement("IMG");
                    var imgPath = "https://image.tmdb.org/t/p/w780"+data.results[i].poster_path;
                    imgElement.setAttribute("src",imgPath)
                    listElement.appendChild(imgElement)
                    listElement.appendChild(textElement);
                    document.getElementById("ulMV").appendChild(listElement);
                }
            })
        updateNumber += 14;
        x++;
    }
    return countMovie;
}
function countLeftMovie(){
    if(countMovie != 0){
        countMovie--;
        console.log(countMovie);
        return countMovie;
    }
}


//***********POPULAR**************//
//***********TV SHOWS**************//

fetch(BASEURL+"/tv/popular?api_key="+APIKEY+"&language=en-US&page="+"1")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        for(i=0;i<=19;i++){
            var listElement = document.createElement("li");
            var textElement = document.createElement("a");
            var textContent = document.createTextNode(data.results[i].original_name);
            textElement.appendChild(textContent);
            listElement.setAttribute("class", "card");
            listElement.setAttribute("data-target", "card")
            var imgElement = document.createElement("IMG");
            var imgPath = "https://image.tmdb.org/t/p/w780"+data.results[i].poster_path;
            imgElement.setAttribute("src",imgPath)
            listElement.appendChild(imgElement)
            listElement.appendChild(textElement);
            document.getElementById("ulTV").appendChild(listElement);
        }
    })

var countTV = 0;
var updateNumber = 14;
var y = 2;
console.log(countTV);
function countRightTV(){
    countTV++;
    console.log(countTV);
    if(countTV == updateNumber){
        console.log('update');
        fetch(BASEURL+"/tv/popular?api_key="+APIKEY+"&language=en-US&page="+y)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                for(i=0;i<=19;i++){
                    var listElement = document.createElement("li");
                    var textElement = document.createElement("a");
                    var textContent = document.createTextNode(data.results[i].original_name);
                    textElement.appendChild(textContent);
                    listElement.setAttribute("class", "card");
                    listElement.setAttribute("data-target", "card")
                    var imgElement = document.createElement("IMG");
                    var imgPath = "https://image.tmdb.org/t/p/w780"+data.results[i].poster_path;
                    imgElement.setAttribute("src",imgPath)
                    listElement.appendChild(imgElement)
                    listElement.appendChild(textElement);
                    document.getElementById("ulTV").appendChild(listElement);
                }
            })
        updateNumber += 14;
        y++;
    }
    return countTV;
}
function countLeftTV(){
    if(countTV != 0){
        countTV--;
        console.log(countTV);
        return countTV;
    }
}