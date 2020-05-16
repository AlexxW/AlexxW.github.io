alert("If you refresh the page you will start from the first movie.");
let baseURL = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImageURL = null;
let getConfig = function () {
    let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
    fetch(url)
    .then((result)=>{
        return result.json();
    })
    .then((data)=>{
        baseImageURL = data.images.secure_base_url;
        configData = data.images;
        console.log('config:', data);
        console.log('config fetched');
        popular1()



    })
    .catch(function(err){
        alert(err);
    });
}

let runSearch = function (keyword) {
    let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{
        //process the returned data...
        let poster = JSON.stringify(data.results[0].poster_path).slice(1, -1);
        let titlu = JSON.stringify(data.results[0].title).slice(1, -1);
        document.getElementById('output').innerHTML ='<img src="https://image.tmdb.org/t/p/w185/'+ poster + '">' + titlu;
        //work with results array...

    })
}


document.addEventListener('DOMContentLoaded', getConfig);
var titlu;
var poza;
var numeactor;
var pozaactor;
var caracteractor;
var u;
var x="";
var w;

// tp = titilu + poster
let popular1 = function () {

    let url =  'https://api.themoviedb.org/3/movie/popular?api_key=2f62dc6577fbb0e3e401e077404707a6&language=en-US&page=1';
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{

          //***********************************************************************
          //***********************************************************************
          titlu = JSON.stringify(data.results[0].title).slice(1, -1);
          poza = '<img src="https://image.tmdb.org/t/p/w780/'+ JSON.stringify(data.results[0].poster_path).slice(1, -1) + '">';

          document.getElementById('poster').innerHTML = poza;
          //document.getElementById('test').innerHTML = JSON.stringify(data, null, 4);
          document.getElementById('titlu').innerHTML = titlu;

          let urll = 'https://api.themoviedb.org/3/movie/'+JSON.stringify(data.results[0].id)+'/videos?api_key='+APIKEY+'&language=en-US';
          fetch(urll)
          .then(result=>result.json())
          .then((data)=>{
            var tkey = data.results[0].key;
            document.getElementById('trailer').innerHTML = '<iframe width="970" height="534" src="https://www.youtube.com/embed/'+tkey+'"></iframe>';
          })

          let url2 = 'https://api.themoviedb.org/3/movie/' + JSON.stringify(data.results[0].id) +'?api_key='+ APIKEY  + '&language=en-US';
          fetch(url2)
            .then(result=>result.json())
            .then((data)=>{
              for(u in data.genres){
                x+= data.genres[u].name + " ";
              }

              if(data.runtime>=60){
                w = Math.floor(data.runtime/60) + "h " + Math.floor(data.runtime%60) + "min";
              }
              else {
                w= data.runtime + "min";
              }
              document.getElementById('container2').innerHTML=x;
              document.getElementById('runtime').innerHTML= w;

              document.getElementById('overview').innerHTML = '<p>Overview</p>'+data.overview;

            })


          let url1 = 'https://api.themoviedb.org/3/movie/' + JSON.stringify(data.results[0].id) + '/credits?api_key=' + APIKEY;
          fetch(url1)
            .then(result=>result.json())
            .then((data)=>{


              numeactor = JSON.stringify(data.cast[0].name).slice(1,-1) + '<br>';
              pozaactor ='<img src="https://image.tmdb.org/t/p/w45/'+ JSON.stringify(data.cast[0].profile_path).slice(1,-1) + '">' + '<br>';
              caracteractor = JSON.stringify(data.cast[0].character).slice(1,-1) + '<br>';


              //document.getElementById('container2').innerHTML =

            })

      })

}
var i = 1;
var j = 1;
let popular = function () {
    if(i == 20)
      {
        j++;
        i=1;}
    let url = ''.concat('https://api.themoviedb.org/3/movie/popular?api_key=2f62dc6577fbb0e3e401e077404707a6&language=en-US&page=',j);
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{




      titlu = JSON.stringify(data.results[i].title).slice(1, -1);
      poza = '<img src="https://image.tmdb.org/t/p/w780/'+ JSON.stringify(data.results[i].poster_path).slice(1, -1) + '">';

      document.getElementById('poster').innerHTML = poza;

      document.getElementById('titlu').innerHTML = titlu;

      document.getElementById('test').innerHTML= JSON.stringify(data, null, 4);

      let urll = 'https://api.themoviedb.org/3/movie/'+data.results[i].id+'/videos?api_key='+APIKEY+'&language=en-US';
      fetch(urll)
      .then(result=>result.json())
      .then((data)=>{

        if(data.results == ""){
          document.getElementById('trailer').innerHTML = "This database doesn't have a trailer for this movie.";
        }
        else {
          var tkey = JSON.stringify(data.results[0].key).slice(1,-1);
          document.getElementById('trailer').innerHTML = '<object width="970" height="534"data="https://www.youtube.com/embed/'+tkey+'"></object>';
        }
      })

      let url2 = 'https://api.themoviedb.org/3/movie/' + JSON.stringify(data.results[i].id) +'?api_key='+ APIKEY  + '&language=en-US';
      fetch(url2)
        .then(result=>result.json())
        .then((data)=>{
          for(u in data.genres){
            x+= data.genres[u].name + " ";
          }

          if(data.runtime>=60){
            w = Math.floor(data.runtime/60) + "h " + Math.floor(data.runtime%60) + "min";
          }
          else {
            w= data.runtime + "min";
          }

          document.getElementById('container2').innerHTML=x;

          x=" ";
          if(data.runtime == null){
            document.getElementById('runtime').innerHTML = "?";
          }
          else {
          document.getElementById('runtime').innerHTML= w;
          }

          document.getElementById('overview').innerHTML = '<p>Overview</p>'+data.overview;

        })

      let url1 = 'https://api.themoviedb.org/3/movie/' + JSON.stringify(data.results[i].id) + '/credits?api_key=' + APIKEY;
      fetch(url1)
        .then(result=>result.json())
        .then((data)=>{


          numeactor = JSON.stringify(data.cast[i].name).slice(1,-1) + '<br>';
          pozaactor ='<img src="https://image.tmdb.org/t/p/w45/'+ JSON.stringify(data.cast[i].profile_path).slice(1,-1) + '">' + '<br>';
          caracteractor = JSON.stringify(data.cast[i].character).slice(1,-1) + '<br>';


          //document.getElementById('output2').innerHTML = numeactor + pozaactor + caracteractor;

        })
      })
      i++;

}
/*******************************
SAMPLE SEARCH RESULTS DATA
{   "vote_count": 2762,
    "id": 578,
    "video": false,
    "vote_average": 7.5,
    "title": "Jaws",
    "popularity": 16.273358,
    "poster_path": "/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg",
    "original_language": "en",
    "original_title": "Jaws",
    "genre_ids": [ 27, 53, 12 ],
    "backdrop_path": "/slkPgAt1IQgxZXNrazEcOzhAK8f.jpg",
    "adult": false,
    "overview": "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.",
    "release_date": "1975-06-18"
}
*******************************/
