function validación(){

    let textoMinimo=document.getElementById("txt_minData")
    if (textoMinimo.length<3){
    
        alert("Debe ingresar un texto mayor a 3 lineas");
        textoMinimo.focus();
        return false;
    }


    let nombre = document.getElementById("txt_nombreApellido");
    let expNombre = /^[A-Za-zÑñÁÉÍÓÚáéíóú]+(\s[A-Za-zÑñÁÉÍÓÚáéíóú]+)*$/;
    if(!expNombre.test(nombre.value)){
    

        alert("Verifique su nombre porfavor, el maximo de letras es 25");
        nombre.focus();
        return false;
    }


   

    let rut=document.getElementById("txt_rut")
    let rutformat = /^\d{8}-\d{1}$/;
    if(!rut.value.match(rutformat)){
        alert("Revise su rut si esta bien introducido o no");
        rut.focus();
        return false;
    }





    let telefono=document.getElementById("txt_numero")
    let telefonoFormat= /^\d{9}$/;
    if (!telefono.value.match(telefonoFormat)){
    
        alert("Movil no valido")
        telefono.focus();
        return false;
    }



    let compañiacel=document.getElementById("txt_compañia")
    if (compañiacel.length==0){
    
        alert("Debe seleccionar una opción de compañia de cel")
        compañiacel.focus();
        return false;
    }
    
   
    alert("Enviado!")


}


