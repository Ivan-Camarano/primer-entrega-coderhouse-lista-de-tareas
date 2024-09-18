let tareas = ""
const maxTareas = 5 
let cantidadTareas = 0 

let opcion
do {
    opcion = prompt(
        "Elige una opción:\n1 Agregar Tarea\n2 Ver Tareas\n3 Borrar Todas las Tareas\n4 Salir"
    )

    if (opcion === "1") {
        if (cantidadTareas >= maxTareas) {
            alert("No puedes agregar más de 5 tareas.")
        } else {
            let nuevaTarea = prompt("Ingresa la nueva tarea:")
            if (nuevaTarea) {
                tareas += (tareas ? "\n" : "") + nuevaTarea
                cantidadTareas++
                alert(`Tarea "${nuevaTarea}" agregada correctamente.`)
            } else {
                alert("La tarea no puede estar vacía.")
            }
        }
    } else if (opcion === "2") {
        if (!tareas) {
            alert("No hay tareas.")
        } else {
            alert("Tus tareas:\n" + tareas)
        }
    } else if (opcion === "3") {
        if (!tareas) {
            alert("No hay tareas para borrar.")
        } else {
            tareas = ""
            cantidadTareas = 0
            alert("Todas las tareas han sido borradas.")
        }
    } else if (opcion !== "4") {
        alert("Opción no válida. Intenta nuevamente.")
    }
} while (opcion !== "4")

alert("Saliendo del simulador")