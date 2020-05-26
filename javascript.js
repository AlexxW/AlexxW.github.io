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
            linkElement.setAttribute('href','/web/window/window.html')
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
                    var listElement = document.createElement("li");
                    var textElement = document.createElement("p");
                    var linkElement = document.createElement("a");
                    var textContent = document.createTextNode(data.results[i].original_title);
                    textElement.appendChild(textContent);
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
            var textElement = document.createElement("p");
            var linkElement = document.createElement("a");
            var textContent = document.createTextNode(data.results[i].original_name);
            textElement.appendChild(textContent);
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
    fetch(BASEURL+"/movie/"+id+"?api_key="+APIKEY+"&language=en-US")
        .then(response => response.json())
        .then(data =>{
            localStorage.setItem('backdrop',data.backdrop_path)
            localStorage.setItem('title',data.original_title)
            localStorage.setItem('runtime',data.runtime)
            localStorage.setItem('releaseDate',data.release_date)
    })
    fetch(BASEURL+"/movie/"+id+"/videos?api_key="+APIKEY+"&language=en-US")
        .then(response => response.json())
        .then(data =>{
            localStorage.setItem('video',data.results[0].key)
    })
    fetch(BASEURL+"/movie/"+id+"/credits?api_key="+APIKEY)
        .then(response => response.json())
        .then(data =>{
            localStorage.setItem('castName0',data.cast[0].name)
            localStorage.setItem('castName1',data.cast[1].name)
            localStorage.setItem('castName2',data.cast[2].name)
            localStorage.setItem('castName3',data.cast[3].name)
            localStorage.setItem('castName4',data.cast[4].name)
            localStorage.setItem('castName5',data.cast[5].name)
            localStorage.setItem('castName6',data.cast[6].name)
            localStorage.setItem('castName7',data.cast[7].name)
            localStorage.setItem('castName8',data.cast[8].name)
            localStorage.setItem('castName9',data.cast[9].name)

            localStorage.setItem('castPath0',data.cast[0].profile_path)
            localStorage.setItem('castPath1',data.cast[1].profile_path)
            localStorage.setItem('castPath2',data.cast[2].profile_path)
            localStorage.setItem('castPath3',data.cast[3].profile_path)
            localStorage.setItem('castPath4',data.cast[4].profile_path)
            localStorage.setItem('castPath5',data.cast[5].profile_path)
            localStorage.setItem('castPath6',data.cast[6].profile_path)
            localStorage.setItem('castPath7',data.cast[7].profile_path)
            localStorage.setItem('castPath8',data.cast[8].profile_path)
            localStorage.setItem('castPath9',data.cast[9].profile_path)

    })
    fetch(BASEURL+"/genre/movie/list?api_key="+APIKEY+"&language=en-US")
        .then(response=>response.json())
        .then(data => {
            if(data.genres[0] != null)
                localStorage.setItem('genre0',data.genres[0].name)
            if(data.genres[1] != null)
                localStorage.setItem('genre1',data.genres[1].name)
            if(data.genres[2] != null)
                localStorage.setItem('genre2',data.genres[2].name)
            if(data.genres[3] != null)
                localStorage.setItem('genre3',data.genres[3].name)
    })
}
