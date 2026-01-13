const root = document.getElementById('cards')
const template = document.getElementById('template')

function duplicate(imgSrc, name, desc, link, techs, delay) {
    const clone = template.cloneNode(true);
    clone.style.display = "flex";
    clone.querySelector('.template-img').src = imgSrc
    clone.querySelector('.projeto-descricao h3').innerText = name
    clone.querySelector('.projeto-descricao p').innerText = desc
    clone.querySelector('.projeto-descricao a').href = link
    clone.style.setProperty('--delay', delay + "s");

    function enableTech(TechName) {
        clone.querySelector(`.${TechName}`).style.display = 'inline-block'
    }
    for (const tech of techs) {
        enableTech(tech)
    }
    clone.classList.remove("no-anim");
    clone.classList.add("anim");

    root.appendChild(clone);
}

function getList() {

    fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            let i = 1
            for (let project of data) {
                duplicate(project['imgUrl'],
                    project['name'],
                    project['desc'],
                    project['link'],
                    project['techs'],
                    0.2 * i++
                )
            }
        })
}


getList()