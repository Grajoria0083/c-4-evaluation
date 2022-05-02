// Ude Import export (MANDATORY)

async function searchNews(query) {
    try {
        // let query = document.getElementById("search_input").value
        const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`)
        let data = await res.json()
        // console.log(data)
        return data.articles
    } catch (err) {
        console.log
    }
}

let appends = (pic, container) => {
    pic.forEach(({ url, description, title }) => {
        // let container = document.getElementById("body")
        let box = document.createElement("div")
        let img = document.createElement("img")
        img.src = url

        let Description = document.createElement("h3")
        Description.innerText = description

        let Title = document.createElement("h3")
        Title.innerText = title

        box.append(img, Description, Title)
        container.append(box)
    })

}

export { searchNews, appends }
