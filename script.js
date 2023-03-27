const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const encabezado = document.querySelector(".encabezado");

addBtn.addEventListener("click", e => {
    e.preventDefault();
    const text = input.value;
    const prioridadBtn = document.createElement("button")
    prioridadBtn.className = "prioridadBtn";
    prioridadBtn.textContent = "Seleccionar prioridad";
    const estadoBtn = document.createElement("button");
    estadoBtn.className = "estadoBtn";
    estadoBtn.textContent = "Seleccionar estado";
    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;
        li.appendChild(p);
        li.appendChild(prioridadBtn);
        li.appendChild(estadoBtn);
        ul.appendChild(li);
        li.appendChild(addDeleteBtn());
        input.value = "";
        empty.style.display = "none";
        encabezado.style.display = "flex";
    }
});

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = "btn-delete";
    deleteBtn.addEventListener("click", e => {
        const item = e.target.parentElement
        ul.removeChild(item);
        const items = document.querySelectorAll("li");
        if (items.length === 0) {
            empty.style.display = "block"
        }
    });
    return deleteBtn;
}

function crearListaPrioridad() {
    const div = document.createElement("div")
    const ul = document.createElement("ul")
    const liCritico = document.createElement("li")
    const btnCritico = document.createElement("button")
    const liAlto = document.createElement("li")
    const btnAlto = document.createElement("button")
    const liMedio = document.createElement("li")
    const btnMedio = document.createElement("button")
    const liBajo = document.createElement("li")
    const btnBajo = document.createElement("button")
    const liDefault = document.createElement("li")
    const btnDefault = document.createElement("button")
    liCritico.appendChild(btnCritico)
    liAlto.appendChild(btnAlto)
    liMedio.appendChild(btnMedio)
    liBajo.appendChild(btnBajo)
    liDefault.appendChild(btnDefault)
    btnCritico.textContent = "Critico"
    btnCritico.className = "btnCritico"
    btnAlto.textContent = "Alto"
    btnAlto.className = "btnAlto"
    btnMedio.textContent = "Medio"
    btnMedio.className = "btnMedio"
    btnBajo.textContent = "Bajo"
    btnBajo.className = "btnBajo"
    btnDefault.textContent = "Ninguna"
    btnDefault.className = "btnDefault"
    div.className = "listaPrioridad"
    ul.appendChild(liCritico)
    ul.appendChild(liAlto)
    ul.appendChild(liMedio)
    ul.appendChild(liBajo)
    ul.appendChild(liDefault)
    div.appendChild(ul)
    return div;
}

function crearListaEstado() {
    const div = document.createElement("div")
    const ul = document.createElement("ul")
    const liStuck = document.createElement("li")
    const btnStuck = document.createElement("button")
    const liWorking = document.createElement("li")
    const btnWorking = document.createElement("button")
    const liDone = document.createElement("li")
    const btnDone = document.createElement("button")
    const liDefault = document.createElement("li")
    const btnDefault = document.createElement("button")
    liStuck.appendChild(btnStuck)
    liWorking.appendChild(btnWorking)
    liDone.appendChild(btnDone)
    liDefault.appendChild(btnDefault)
    btnStuck.textContent = "Frenado"
    btnStuck.className = "btnStuck"
    btnWorking.textContent = "En proceso"
    btnWorking.className = "btnWorking"
    btnDone.textContent = "Terminado"
    btnDone.className = "btnDone"
    btnDefault.textContent = "Ninguna"
    btnDefault.className = "btnDefault"
    div.className = "listaEstado"
    ul.appendChild(liStuck)
    ul.appendChild(liWorking)
    ul.appendChild(liDone)
    ul.appendChild(liDefault)
    div.appendChild(ul)
    return div
}


document.addEventListener("click", e => {
    e.preventDefault()
    if (e.target.className === "prioridadBtn") {
        // console.log(e.target)
        e.target.appendChild(crearListaPrioridad())
        const prioridadBtn = e.target
        const btnCritico = document.querySelector(".btnCritico")
        const btnAlto = document.querySelector(".btnAlto")
        const btnMedio = document.querySelector(".btnMedio")
        const btnBajo = document.querySelector(".btnBajo")
        const btnDefault = document.querySelector(".btnDefault")
        btnCritico.addEventListener("click", e => {
            prioridadBtn.textContent = "Critico"
            prioridadBtn.style.color = "white"
            prioridadBtn.style.backgroundColor = "rgb(206, 96, 0)"
        })
        btnAlto.addEventListener("click", e => {
            prioridadBtn.textContent = "Alto"
            prioridadBtn.style.color = "white"
            prioridadBtn.style.backgroundColor = "red"
        })
        btnMedio.addEventListener("click", e => {
            prioridadBtn.textContent = "Medio"
            prioridadBtn.style.color = "white"
            prioridadBtn.style.backgroundColor = "blue"
        })
        btnBajo.addEventListener("click", e => {
            prioridadBtn.textContent = "Bajo"
            prioridadBtn.style.color = "black"
            prioridadBtn.style.backgroundColor = "lightskyblue"
        })
        btnDefault.addEventListener("click", e => {
            prioridadBtn.textContent = "Seleccionar prioridad"
            prioridadBtn.style.color = "black"
            prioridadBtn.style.backgroundColor = "buttonface"
        })

    } else if (e.target.className === "estadoBtn") {
        // console.log(e.target)
        e.target.appendChild(crearListaEstado())
        const estadoBtn = e.target
        const btnStuck = document.querySelector(".btnStuck")
        const btnWorking = document.querySelector(".btnWorking")
        const btnDone = document.querySelector(".btnDone")
        const btnDefault = document.querySelector(".btnDefault")
        btnStuck.addEventListener("click", e => {
            estadoBtn.textContent = "Frenado"
            estadoBtn.style.color = "white"
            estadoBtn.style.backgroundColor = "red"
        })
        btnWorking.addEventListener("click", e => {
            estadoBtn.textContent = "En proceso"
            estadoBtn.style.color = "black"
            estadoBtn.style.backgroundColor = "orange"
        })
        btnDone.addEventListener("click", e => {
            estadoBtn.textContent = "Terminado"
            estadoBtn.style.color = "black"
            estadoBtn.style.backgroundColor = "rgb(161, 247, 161)"
        })
        btnDefault.addEventListener("click", e => {
            estadoBtn.textContent = "Seleccionar estado"
            estadoBtn.style.color = "black"
            estadoBtn.style.backgroundColor = "buttonface"
        })
    }
});