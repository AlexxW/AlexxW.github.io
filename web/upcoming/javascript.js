//2f62dc6577fbb0e3e401e077404707a6


const APIKEY = "2f62dc6577fbb0e3e401e077404707a6";
const BASEURL = "https://api.themoviedb.org/3";

//***********POPULAR**************//
//***********MOVIES**************//
fetch(BASEURL+"/movie/upcoming?api_key="+APIKEY+"&language=en-US&page="+"1")
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
        
        fetch(BASEURL+"/movie/upcoming?api_key="+APIKEY+"&language=en-US&page="+x)
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