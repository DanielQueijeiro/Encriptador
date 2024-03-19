function desencriptar() {
    let mensajeDesencriptado = document.getElementById("textInput").value;
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase()
    mensajeDesencriptado = mensajeDesencriptado.replace(/[^\w\s]|[\d]/g, '');
    mensajeDesencriptado = mensajeDesencriptado.replace(/\s{2,}/g, ' ');
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("ai","a");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("enter","e");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("imes","i");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("ober","o");
    mensajeDesencriptado = mensajeDesencriptado.replaceAll("ufat","u");

    document.getElementById("textOutput").value = mensajeDesencriptado;
  }

  function encriptar() {
    let mensajeDesencriptado = document.getElementById("textInput").value;
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase()
    mensajeDesencriptado = mensajeDesencriptado.replace(/[^\w\s]|[\d]/g, '');
    mensajeDesencriptado = mensajeDesencriptado.replace(/\s{2,}/g, ' ');
    let mensajeEncriptado = mensajeDesencriptado.split("");

    for(let index in mensajeEncriptado){
      if(mensajeEncriptado[index] === "a"){
        mensajeEncriptado[index] = "ai";
      }
      
      if(mensajeEncriptado[index] === "e"){
        mensajeEncriptado[index] = "enter";
      }

      if(mensajeEncriptado[index] === "i"){
        mensajeEncriptado[index] = "imes";
      }

      if(mensajeEncriptado[index] === "o"){
        mensajeEncriptado[index] = "ober";
      }

      if(mensajeEncriptado[index] === "u"){
        mensajeEncriptado[index] = "ufat";
      }
    }

    mensajeEncriptado = mensajeEncriptado.toString();
    mensajeEncriptado = mensajeEncriptado.replaceAll(",","");

    document.getElementById("textOutput").value = mensajeEncriptado;
  }


function borrarTexto(id){
  document.getElementById(id).value = "";
}

function copiarTexto(){
  let text = document.getElementById("textOutput").value
  navigator.clipboard.writeText(text)
}