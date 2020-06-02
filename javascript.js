//2f62dc6577fbb0e3e401e077404707a6

const APIKEY = "2f62dc6577fbb0e3e401e077404707a6";
const BASEURL = "https://api.themoviedb.org/3";


//***********POPULAR**************//
//***********MOVIES**************//
fetch(BASEURL+"/movie/popular?api_key="+APIKEY+"&language=en-US&page="+"1")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        for(i=0;i<=19;i++){
            var id = data.results[i].id;
            var listElement = document.createElement("li");
            var textElement = document.createElement("p");
            var linkElement = document.createElement("a");
            var textContent = document.createTextNode(data.results[i].original_title);
            textElement.appendChild(textContent);
            linkElement.setAttribute('href','/web/windowMV/window.html')
            listElement.setAttribute("class", "card");
            listElement.setAttribute("data-target", "card")
            listElement.setAttribute("onClick","createWindow("+id+")");
            var imgElement = document.createElement("IMG");
            var imgPath = "https://image.tmdb.org/t/p/w780"+data.results[i].poster_path;
            imgElement.setAttribute("src",imgPath)
            linkElement.appendChild(imgElement);
            listElement.appendChild(linkElement);
            listElement.appendChild(textElement);
            document.getElementById("ulMV").appendChild(listElement);
        }
    })

var countMovie = 0;
var updateNumberMV = 14;
var x = 2;
console.log(countMovie);
function countRightMovie(){
    countMovie++;
    console.log(countMovie);
    if(countMovie == updateNumberMV){
        console.log('update');
        fetch(BASEURL+"/movie/popular?api_key="+APIKEY+"&language=en-US&page="+x)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                for(i=0;i<=19;i++){
                    var id = data.results[i].id;
                    var listElement = document.createElement("li");
                    var textElement = document.createElement("p");
                    var linkElement = document.createElement("a");
                    var textContent = document.createTextNode(data.results[i].original_title);
                    textElement.appendChild(textContent);
                    linkElement.setAttribute('href','/web/windowMV/window.html')
                    listElement.setAttribute("class", "card");
                    listElement.setAttribute("data-target", "card")
                    listElement.setAttribute("onClick","createWindow("+id+")");
                    var imgElement = document.createElement("IMG");
                    var imgPath = "https://image.tmdb.org/t/p/w780"+data.results[i].poster_path;
                    imgElement.setAttribute("src",imgPath)
                    linkElement.appendChild(imgElement);
                    listElement.appendChild(linkElement);
                    listElement.appendChild(textElement);
                    document.getElementById("ulMV").appendChild(listElement);
                }
            })
        updateNumberMV += 14;
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
            var id = data.results[i].id;
            var listElement = document.createElement("li");
            var textElement = document.createElement("p");
            var linkElement = document.createElement("a");
            var textContent = document.createTextNode(data.results[i].original_name);
            textElement.appendChild(textContent);
            linkElement.setAttribute('href','/web/windowTV/window.html')
            listElement.setAttribute("class", "card2");
            listElement.setAttribute("data-target", "card2")
            listElement.setAttribute("onClick","createWindow("+id+")");
            var imgElement = document.createElement("IMG");
            var imgPath = "https://image.tmdb.org/t/p/w780"+data.results[i].poster_path;
            imgElement.setAttribute("src",imgPath)
            linkElement.appendChild(imgElement);
            listElement.appendChild(linkElement);
            listElement.appendChild(textElement);
            document.getElementById("ulTV").appendChild(listElement);
        }
    })

var countTV = 0;
var updateNumberTV = 14;
var y = 2;
console.log(countTV);
function countRightTV(){
    countTV++;
    console.log(countTV);
    if(countTV == updateNumberTV){
        console.log('update');
        fetch(BASEURL+"/tv/popular?api_key="+APIKEY+"&language=en-US&page="+y)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                for(i=0;i<=19;i++){
                    var id = data.results[i].id;
                    var listElement = document.createElement("li");
                    var textElement = document.createElement("p");
                    var linkElement = document.createElement("a");
                    var textContent = document.createTextNode(data.results[i].original_name);
                    textElement.appendChild(textContent);
                    linkElement.setAttribute('href','/web/windowTV/window.html')
                    listElement.setAttribute("class", "card2");
                    listElement.setAttribute("data-target", "card2")
                    listElement.setAttribute("onClick","createWindow("+id+")");
                    var imgElement = document.createElement("IMG");
                    var imgPath = "https://image.tmdb.org/t/p/w780"+data.results[i].poster_path;
                    imgElement.setAttribute("src",imgPath)
                    linkElement.appendChild(imgElement);
                    listElement.appendChild(linkElement);
                    listElement.appendChild(textElement);
                    document.getElementById("ulTV").appendChild(listElement);
                }
            })
        updateNumberTV += 14;
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
function createWindow(id) {
    localStorage.setItem("id",id)
}
