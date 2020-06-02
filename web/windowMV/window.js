
const APIKEY = "2f62dc6577fbb0e3e401e077404707a6";
const BASEURL = "https://api.themoviedb.org/3";
var id = localStorage.getItem("id")
fetch(BASEURL+"/movie/"+id+"?api_key="+APIKEY+"&language=en-US")
    .then(response => response.json())
    .then(data =>{

        //backdrop
        console.log(data.backdrop_path)
        var background_image = document.getElementById('background-image')
        background_image.style.backgroundImage = "url('https://image.tmdb.org/t/p/original"+data.backdrop_path+"')"
        
        //title
        var title = document.createTextNode(data.original_title);
        var p_title = document.getElementById("title")
        p_title.appendChild(title)

        //runtime
        var hour = data.runtime / 60;
        hour = Math.floor(hour)
        minutes = data.runtime % 60;
        var runtime = document.createTextNode(hour + "h " + minutes + "min")
        var p_runtime = document.getElementById("runtime")
        p_runtime.appendChild(runtime)

        //release date
        var releaseDate = document.createTextNode(data.release_date)
        var p_releaseDate = document.getElementById("releaseDate")
        p_releaseDate.appendChild(releaseDate)
})
fetch(BASEURL+"/movie/"+id+"/videos?api_key="+APIKEY+"&language=en-US")
    .then(response => response.json())
    .then(data =>{

        //video key
        var video_iframe = document.createElement("iframe")
        video_iframe.setAttribute("width","764")
        video_iframe.setAttribute("height","430")
        video_iframe.setAttribute("src","https://www.youtube.com/embed/"+data.results[0].key)
        video_iframe.setAttribute("frameborder","0")
        video_iframe.setAttribute("id","video_iframe")
        var right_div = document.getElementById("iframe-div")
        right_div.appendChild(video_iframe)
})
fetch(BASEURL+"/movie/"+id+"/credits?api_key="+APIKEY)
    .then(response => response.json())
    .then(data =>{
        //cast
        for(i=0;i<=4;i++){
            console.log(data.cast[i].name)
            var castName = document.createTextNode(data.cast[i].name)
            var castPath = document.createElement("img")
            castPath.setAttribute("src","https://image.tmdb.org/t/p/w154"+data.cast[i].profile_path)
            var column_div = document.createElement('div')
            column_div.setAttribute("class","column")
            column_div.appendChild(castPath);
            column_div.appendChild(castName);
            var row_div = document.getElementById("row1")
            row_div.appendChild(column_div)
        }
        for(i=5;i<=9;i++){
            console.log(data.cast[i].name)
            var castName = document.createTextNode(data.cast[i].name)
            var castPath = document.createElement("img")
            castPath.setAttribute("src","https://image.tmdb.org/t/p/w154"+data.cast[i].profile_path)
            var column_div = document.createElement('div')
            column_div.setAttribute("class","column")
            column_div.appendChild(castPath);
            column_div.appendChild(castName);
            var row_div = document.getElementById("row2")
            row_div.appendChild(column_div)
        }

})
fetch(BASEURL+"/genre/movie/list?api_key="+APIKEY+"&language=en-US")
    .then(response=>response.json())
    .then(data => {
        if(data.genres[0] != null)
            console.log(data.genres[0].name)
            var genre1 = document.createTextNode(data.genres[0].name)
            var para = document.createElement('p')
            para.appendChild(genre1)
            var genres_div = document.getElementById("genres_div")
            para.setAttribute("id","genre0")
            genres_div.appendChild(para)
        if(data.genres[1] != null)
            console.log(data.genres[1].name)
            var genre1 = document.createTextNode(data.genres[1].name)
            var para = document.createElement('p')
            para.appendChild(genre1)
            var genres_div = document.getElementById("genres_div")
            para.setAttribute("id","genre1")
            genres_div.appendChild(para)
        if(data.genres[2] != null)
            console.log(data.genres[2].name)
            var genre1 = document.createTextNode(data.genres[2].name)
            var para = document.createElement('p')
            para.appendChild(genre1)
            var genres_div = document.getElementById("genres_div")
            para.setAttribute("id","genre2")
            genres_div.appendChild(para)
        if(data.genres[3] != null)
            console.log(data.genres[3].name)
            var genre1 = document.createTextNode(data.genres[3].name)
            var para = document.createElement('p')
            para.appendChild(genre1)
            var genres_div = document.getElementById("genres_div")
            para.setAttribute("id","genre3")
            genres_div.appendChild(para)
})