
    function onMouse(){
        document.getElementById("mail").style.background = 'white';
    };
    function outMouse(){
        document.getElementById("mail").style.background  = 'rgb(201, 201, 201)';
    };
    function onMousec(){
        document.getElementById("contraseña").style.background = 'white';
    };
    function outMousec(){
        document.getElementById("contraseña").style.background  = 'rgb(201, 201, 201)';
    };

    // voy a ir checkeando error por error si pasa va a preguntar
    // el siguiente, con el objetivo de enviar un solo mensaje.

    function validar(){
        var mensaje="";
        if(document.getElementById("mail").value==''){
            mensaje += "<p class='alerta'> El campo Email no puede estar vacio </p>";
            document.getElementById("error_mail").innerHTML = mensaje;
        return false;
        }
        let correo =document.getElementById("mail").value;
        const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let tieneLosCaracteresNecesarios = expReg.test(correo);
        if(tieneLosCaracteresNecesarios == false){
            mensaje += "<p class='alerta'> El campo Email no tiene los caracteres necesarios </p>";
            document.getElementById("error_mail").innerHTML = mensaje;
        return false;
        }
        if(document.getElementById("password").value==''){
            mensaje += "<p class='alerta'> El campo Constraseña no puede estar vacio </p>";
            document.getElementById("error_contra").innerHTML = mensaje;
            console.log("entro")
            return false;
        }else{
            return false;
        }

    }

    function validarRecuperacion(){
        var mensaje="";
        if(document.getElementById("recuparar_mail").value==''){
            mensaje += "<p class='alerta'> El campo Email no puede estar vacio </p>";
            document.getElementById("error_mail_r").innerHTML = mensaje;
            return false;
        }
        let correo =document.getElementById("recuparar_mail").value;
        const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let tieneLosCaracteresNecesarios = expReg.test(correo);
        if(tieneLosCaracteresNecesarios == false){
            mensaje += "<p class='alerta'> El campo Email no tiene los caracteres necesarios </p>";
            document.getElementById("error_mail_r").innerHTML = mensaje;
        return false;
        }
        
        if(document.getElementById("recuparar_usuario").value==''){
            mensaje += "<p class='alerta'> El campo Email no puede estar vacio </p>";
            document.getElementById("error_usuario_r").innerHTML = mensaje;
            return false;
        }

        else{
            return false;
        }


    }

