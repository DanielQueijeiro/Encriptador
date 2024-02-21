function desencriptar() {
    let mensajeEncriptado = document.getElementById("mensajeencriptado").value;
    let mensajeDesencriptado = mensajeEncriptado;
    for(let index in mensajeEncriptado){
      mensajeDesencriptado = mensajeDesencriptado.replaceAll("ai","a");
      mensajeDesencriptado = mensajeDesencriptado.replaceAll("enter","e");
      mensajeDesencriptado = mensajeDesencriptado.replaceAll("imes","i");
      mensajeDesencriptado = mensajeDesencriptado.replaceAll("ober","o");
      mensajeDesencriptado = mensajeDesencriptado.replaceAll("ufat","u");
    }

    document.getElementById("mensajedesencriptado").value = mensajeDesencriptado;
  }

  function encriptar() {
    let mensajeDesencriptado = document.getElementById("mensajedesencriptado").value;
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase()
    mensajeDesencriptado = mensajeDesencriptado.replace(/[^a-zA-Z]/g, '');
    let mensajeEncriptado = mensajeDesencriptado.split("");

    for(let index in mensajeEncriptado){
      if(mensajeEncriptado[index] == "a"){
        mensajeEncriptado[index] = "ai";
      }
      
      if(mensajeEncriptado[index] == "e"){
        mensajeEncriptado[index] = "enter";
      }

      if(mensajeEncriptado[index] == "i"){
        mensajeEncriptado[index] = "imes";
      }

      if(mensajeEncriptado[index] == "o"){
        mensajeEncriptado[index] = "ober";
      }

      if(mensajeEncriptado[index] == "u"){
        mensajeEncriptado[index] = "ufat";
      }
    }

    mensajeEncriptado = mensajeEncriptado.toString();
    mensajeEncriptado = mensajeEncriptado.replaceAll(",","");

    document.getElementById("mensajeencriptado").value = mensajeEncriptado;
  }
