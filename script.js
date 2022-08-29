console.log("Working");

let search = document.querySelector("#search");
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("checking");
    fetch(`https://api.tvmaze.com/search/shows?q==${search.value}`)
        .then(response => response.json())
        .then(data => {
            search.value = " ";
            for (let i = 0; i < data.length; i++) {
                let res = `<div class="content" >
                <img src= " ${data[i].show.image}" class="img" >
                <h1>Name :    &nbsp;
                ${data[i].show.name}</h1>
                <h3>Language: ${data[i].show.language}</h3>
                <h3>Start-date: ${data[i].show.premiered}</h3>
                <a href="${data[i].show.url}" target="_blank"><button class="deatails"> More Info</button></a>
`
                container.innerHTML += res;


                console.log(data);
            }
        })
        .catch(err => alert("Wrong Data Name!"));
})