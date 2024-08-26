const btntarea = document.getElementById("btntarea");
const inptarea = document.getElementById("inptarea");
const tbody = document.querySelector("tbody");
const ttareas = document.getElementById("ttareas");
const trealizadas = document.getElementById("trealizadas");

const tareas = [];

btntarea.addEventListener("click", () => {
    const nuevatarea = inptarea.value.trim();
    if (nuevatarea !== "") {
        const tarea = {
            id: Date.now(),
            descripcion: nuevatarea,
            realizada: false
        };
        tareas.push(tarea);
        inptarea.value = "";
        actualizarLista();
    }
});

function actualizarLista() {
    let html = "";
    let tareasRealizadas = 0;

    tareas.forEach(tarea => {
        html += `
            <tr>
                <td>${tarea.id}</td>
                <td class="${tarea.realizada ? 'cursiva' : ''}">${tarea.descripcion}</td>
                <td>
                    <input type="checkbox" ${tarea.realizada ? "checked" : ""} onchange="trealizada(${tarea.id})">
                </td>
                <td>
                    <h6 style="cursor: pointer;" onclick="eliminarTarea(${tarea.id})">&#10060;</h6>
                </td>
            </tr>`;
        
        if (tarea.realizada) {
            tareasRealizadas++;
        }
    });

    tbody.innerHTML = html;
    ttareas.textContent = tareas.length;
    trealizadas.textContent = tareasRealizadas;
}

function trealizada(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.realizada = !tarea.realizada;
        actualizarLista();
    }
}

function eliminarTarea(id) {
    const index = tareas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
        tareas.splice(index, 1);
        actualizarLista();
    }
}















































/* const ingresarinput = document.getElementById("ingresarinput");
const btningresar = document.getElementById("btningresar");
const litareas = document.getElementById("litareas");
const totaltareas = document.getElementById("cuenta-tareas");

const tareas = [];

btningresar.addEventListener("click", () => {
  const nuevatarea = ingresarinput.value;

  tareas.push({
    id: Date.now(),
    descripcion: nuevatarea,
  });

  ingresarinput.value = "";

  renderizarTareas();
});

function borrar(id) {
  const index = tareas.findIndex((eliminar) => eliminar.id == id);
  if (index !== -1) {
    tareas.splice(index, 1);
  }
  renderizarTareas();
}

function renderizarTareas() {
  let html = "";

  for (let tarea of tareas) {
    html += `<li>${tarea.id} - ${tarea.descripcion} <button onclick="borrar(${tarea.id})"> eliminar </button> </li>`;
  }

  litareas.innerHTML = html;
  totaltareas.innerHTML = tareas.length;
} */