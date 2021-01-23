window.onload = () => {
    console.log("Hola excusa");

    // completar listas de partes de la excusa
    let who = ["Mi padre", "Mi madre", "Mi gato", "Mi tortuga", "Mi abuela"];
    let action = ["se estrelló", "se robó", "me quitó", "se llevó", "no quiso jugar"];
    let what = ["mi tarea", "mi gata", "la plata que me gané trabajando", "mi uniforme"];
    let when = ["en la noche", "antes desayunar", "de madrugada", "en la tarde", "cuando le dio la gana"];

    // escoger un número al azar para cada lista 
    let whoRandomNumber = Math.floor(Math.random() * who.length);
    let actionRandomNumber = Math.floor(Math.random() * action.length);
    let whatRandomNumber = Math.floor(Math.random() * what.length);
    let whenRandomNumber = Math.floor(Math.random() * when.length);

    // declarar la variable que contendrá la excusa
    let excuse = "insertar excusa acá."

    // asignar a la variable los textos concatenados 
    // con base en los numeros al azar escogidos
    excuse = who[whoRandomNumber] + " " + action[actionRandomNumber] + " ";
    excuse = excuse + what[whatRandomNumber] + " " + when[whenRandomNumber];

    // cambiar el contenido del párrafo
    document.querySelector("#excuse").innerHTML = excuse;
} 