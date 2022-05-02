// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
// document.getElementById("display").innerHTML = navbar();

import { searchNews, appends } from "./news.js";

async function onSearch(e) {
    if (e.key == "Enter") {
        let container = document.getElementById("results")
        let query = document.getElementById("search_input").value
        let data = await searchNews(query);
        console.log(data)
        appends(data, container)
    }
}

// async function nameSearch() {
//     console.log(this.id)
//     let container = document.getElementById("results")
//     // let query = document.getElementById("search_input").value
//     let data = await searchNews(this.id);
//     console.log(data)
//     appends(data, container)
// }

// let children = document.getElementById("sidebar").children
// for (let el of children) {
//     el.addEventListener("click", nameSearch)
// }
document.getElementById("search_input").addEventListener("keydown", onSearch)




// async function searchNews() {
//     try {
//         let query = document.getElementById("search_input").value
//         const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
//         let data = await res.json()
//         console.log(data)
//     } catch (err) {
//         console.log
//     }
// }

