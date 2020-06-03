//2f62dc6577fbb0e3e401e077404707a6


const APIKEY = "2f62dc6577fbb0e3e401e077404707a6";
const BASEURL = "https://api.themoviedb.org/3";

//***********POPULAR**************//
//***********MOVIES**************//
fetch(BASEURL+"/trending/movie/week?api_key="+APIKEY)
    .then(response => response.json())
    .then(data =>{
        
        for(i=0;i<=19;i++){
            var id = data.results[i].id;
            var listElement = document.createElement("li");
            var textElement = document.createElement("p");
            var linkElement = document.createElement("a");
            var textContent = document.createTextNode(data.results[i].original_title);
            textElement.appendChild(textContent);
            var myURL = "/web/windowMV/window.html?id="+id
            linkElement.setAttribute('href', myURL)
            listElement.setAttribute("class", "card");
            listElement.setAttribute("data-target", "card")
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

function countRightMovie(){
    countMovie++;
    
    if(countMovie == updateNumberMV){
        
        fetch(BASEURL+"/trending/movie/week?api_key="+APIKEY+"&language=en-US&page="+x)
            .then(response => response.json())
            .then(data =>{
                
                for(i=0;i<=19;i++){
                    var id = data.results[i].id;
                    var listElement = document.createElement("li");
                    var textElement = document.createElement("p");
                    var linkElement = document.createElement("a");
                    var textContent = document.createTextNode(data.results[i].original_title);
                    textElement.appendChild(textContent);
                    var myURL = "/web/windowMV/window.html?id="+id
                    linkElement.setAttribute('href', myURL)
                    listElement.setAttribute("class", "card");
                    listElement.setAttribute("data-target", "card")
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
        
        return countMovie;
    }
}


//***********POPULAR**************//
//***********TV SHOWS**************//

fetch(BASEURL+"/trending/tv/week?api_key="+APIKEY)
    .then(response => response.json())
    .then(data =>{
        
        for(i=0;i<=19;i++){
            var id = data.results[i].id;
            var listElement = document.createElement("li");
            var textElement = document.createElement("p");
            var linkElement = document.createElement("a");
            var textContent = document.createTextNode(data.results[i].original_name);
            textElement.appendChild(textContent);
            var myURL = "/web/windowTV/window.html?id="+id
            linkElement.setAttribute('href', myURL)
            listElement.setAttribute("class", "card2");
            listElement.setAttribute("data-target", "card2")
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

function countRightTV(){
    countTV++;
    
    if(countTV == updateNumberTV){
        
        fetch(BASEURL+"/trending/tv/week?api_key="+APIKEY+"&language=en-US&page="+y)
            .then(response => response.json())
            .then(data =>{
                
                for(i=0;i<=19;i++){
                    var id = data.results[i].id;
                    var listElement = document.createElement("li");
                    var textElement = document.createElement("p");
                    var linkElement = document.createElement("a");
                    var textContent = document.createTextNode(data.results[i].original_name);
                    textElement.appendChild(textContent);
                    var myURL = "/web/windowTV/window.html?id="+id
                    linkElement.setAttribute('href', myURL)
                    listElement.setAttribute("class", "card2");
                    listElement.setAttribute("data-target", "card2")
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
        
        return countTV;
    }
}
