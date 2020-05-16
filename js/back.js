var i = 1;
var j = 1;
let popularback = function () {
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
      i--;

}
