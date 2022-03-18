window.addEventListener('load',function(){
    $.getJSON('langs.json',(dataa) => {
        const json = JSON.parse(JSON.stringify(dataa))
        const data_list = json["data"]
        data_list.forEach(function(element){
            console.log(element)
            const langName = element.lang
            const understandValue = element.know
            const historyValue = element.history
            const techValue = element.tech
            const description = element.description
            addLanguageElement(langName,understandValue,historyValue,techValue,description)
        })
    })
})
function addLanguageElement(name,value,history,techValue,description){
    const langItem = document.createElement("div")
    langItem.className = "lang-item"

    const langHeader = document.createElement("div")
    langHeader.className = "lang-item-header"
    const title = document.createElement("h2")
    title.innerText = name
    const bar = document.createElement("div")
    bar.className = "lang-bar"
    const understandBar = document.createElement("div")
    understandBar.className = "lang-bar-fill understand"
    understandBar.style.width = value + "%"
    const historyBar = document.createElement("div")
    historyBar.className = "lang-bar-fill history"
    historyBar.style.width = history + "%"
    const techBar = document.createElement("div")
    techBar.className = "lang-bar-fill tech"
    techBar.style.width = techValue + "%"
    bar.appendChild(understandBar)
    bar.appendChild(historyBar)
    bar.appendChild(techBar)
    langHeader.appendChild(title)
    langHeader.appendChild(bar)

    langItem.appendChild(langHeader)

    const desc = document.createElement("div")
    desc.className = "description"
    desc.innerHTML = description

    langItem.appendChild(desc)

    document.getElementById("lang-items").appendChild(langItem)

    
}