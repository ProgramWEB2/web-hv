document.addEventListener("DOMContentLoaded", () => {
    const tasksList = document.getElementById("tasksList");
    const objectivesList = document.getElementById("objectivesList");
    const experienceList = document.getElementById("experienceList");
    const contactInfo = document.getElementById("contactInfo");
    let selectedTask = null;

    // Manejadores de eventos para habilidades
    document.getElementById("addTask").addEventListener("click", () => {
        const textoTarea = prompt("Ingrese el nombre de la habilidad:");
        if (textoTarea) {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea;
            tasksList.appendChild(nuevaTarea);
            selectedTaskHandler(nuevaTarea);
        }
    });

    document.getElementById("deleteTask").addEventListener("click", () => {
        if (selectedTask) {
            tasksList.removeChild(selectedTask);
            selectedTask = null;
        } else {
            alert("Seleccione una habilidad para eliminar");
        }
    });

    document.getElementById("editTask").addEventListener("click", () => {
        if (selectedTask) {
            const nuevoTexto = prompt("Modificar habilidad:", selectedTask.textContent);
            if (nuevoTexto) {
                selectedTask.textContent = nuevoTexto;
            }
        } else {
            alert("No se ha seleccionado una habilidad para modificar");
        }
    });

    // Manejadores de eventos para objetivos
    document.getElementById("addObjective").addEventListener("click", () => {
        const textoObjetivo = prompt("Ingrese un nuevo objetivo:");
        if (textoObjetivo) {
            const nuevoObjetivo = document.createElement("li");
            nuevoObjetivo.textContent = textoObjetivo;
            objectivesList.appendChild(nuevoObjetivo);
            selectedTaskHandler(nuevoObjetivo);
        }
    });

    document.getElementById("deleteObjective").addEventListener("click", () => {
        if (selectedTask) {
            objectivesList.removeChild(selectedTask);
            selectedTask = null;
        } else {
            alert("Seleccione un objetivo para eliminar");
        }
    });

    document.getElementById("editObjectives").addEventListener("click", () => {
        showEditForm('objectivesList');
    });

    // Manejadores de eventos para experiencia laboral
    document.getElementById("addExperience").addEventListener("click", () => {
        const textoExperiencia = prompt("Ingrese una nueva experiencia laboral:");
        if (textoExperiencia) {
            const nuevaExperiencia = document.createElement("li");
            nuevaExperiencia.textContent = textoExperiencia;
            experienceList.appendChild(nuevaExperiencia);
            selectedTaskHandler(nuevaExperiencia);
        }
    });

    document.getElementById("deleteExperience").addEventListener("click", () => {
        if (selectedTask) {
            experienceList.removeChild(selectedTask);
            selectedTask = null;
        } else {
            alert("Seleccione una experiencia laboral para eliminar");
        }
    });

    document.getElementById("editExperience").addEventListener("click", () => {
        showEditForm('experienceList');
    });

    // Manejadores de eventos para datos de contacto
    document.getElementById("addContact").addEventListener("click", () => {
        const textoContacto = prompt("Ingrese un nuevo dato de contacto:");
        if (textoContacto) {
            const nuevoContacto = document.createElement("p");
            nuevoContacto.textContent = textoContacto;
            contactInfo.appendChild(nuevoContacto);
            selectedTaskHandler(nuevoContacto);
        }
    });

    document.getElementById("deleteContact").addEventListener("click", () => {
        if (selectedTask) {
            contactInfo.removeChild(selectedTask);
            selectedTask = null;
        } else {
            alert("Seleccione un dato de contacto para eliminar");
        }
    });

    document.getElementById("editContactInfo").addEventListener("click", () => {
        showEditForm('contactInfo');
    });

    function selectedTaskHandler(task) {
        task.addEventListener("click", () => {
            if (selectedTask) {
                selectedTask.classList.remove("selected");
            }
            selectedTask = task;
            selectedTask.classList.add("selected");
        });
    }

    function showEditForm(id) {
        const textElement = document.getElementById(id);
        const textContent = Array.from(textElement.children).map(child => child.textContent).join('\n');
        document.getElementById("editTextArea").value = textContent;
        document.getElementById("editForm").style.display = 'block';
        document.getElementById("saveChanges").onclick = () => saveChanges(id);
        document.getElementById("cancelEdit").onclick = () => cancelEdit();
    }

    function saveChanges(id) {
        const textArea = document.getElementById("editTextArea");
        const textElement = document.getElementById(id);
        const lines = textArea.value.split('\n');
        textElement.innerHTML = lines.map(line => `<p>${line}</p>`).join('');
        cancelEdit();
    }

    function cancelEdit() {
        document.getElementById("editForm").style.display = 'none';
    }
});
