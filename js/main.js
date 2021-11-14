// function salomBerish(name) {
// alert("Assalomu alaykum "+name)
// }
//
// function summ(a,b) {
// var c=a+b;
// return c;
// }

// document.querySelector("#text_info").addEventListener("click",function () {
//     var text=document.querySelector("#input_text").value.trim();
//     text+="\n Matnning uzunligi "+text.length;
//     document.querySelector(".output-text").innerText=text;
// })
// document.querySelector("#input_text").addEventListener("keyup",function () {
//     var text=document.querySelector("#input_text").value.trim();
//     text+="\n Matnning uzunligi "+text.length;
//     document.querySelector(".output-text").innerText=text;
// })

document.querySelector("#open_modal").addEventListener("click",function () {
    document.querySelector(".modal").classList.toggle("close");
})


document.querySelector("#cancel").addEventListener("click",function () {
    document.querySelector(".modal").classList.toggle("close");
})


renderMovies(movies);

function filterGenres(genre) {
        var sortData=movies.filter(function (item) {
            return item.genres.includes(genre)
        })
        renderMovies(sortData)

}


function renderMovies(data) {
    var moviesDiv=document.querySelector(".movies");
    moviesDiv.innerHTML="";
    data.map(function (item) {
        var movieDiv=document.createElement("div");
        movieDiv.classList.add("movie");

        var img=document.createElement("img");
        img.src=item.posterurl;
        img.alt=item.title+" img";

        var info=document.createElement("div");
        info.classList.add("info");

        var h3=document.createElement("h3");

        var a=document.createElement("a");
        a.href="#";
        a.innerText=item.title;

        var genres=document.createElement("p");
        genres.innerText="Genres: "+item.genres

        var releaseP=document.createElement("p");
        releaseP.innerText="Release Date: "+item.releaseDate;
        var imdP=document.createElement("p");
        imdP.innerText="Imdb Rating: "+item.imdbRating;

        h3.appendChild(a);
        info.appendChild(h3);
        info.appendChild(genres);
        info.appendChild(releaseP);
        info.appendChild(imdP);
        movieDiv.appendChild(img);
        movieDiv.appendChild(info);

        moviesDiv.appendChild(movieDiv);
    })

}






