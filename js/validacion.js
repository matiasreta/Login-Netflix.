
    function onMouse(){
        document.getElementById("mail").style.background = 'white';
    };
    function outMouse(){
        document.getElementById("mail").style.background  = 'rgb(201, 201, 201)';
    };

    function validar(){
        var error = false;
        var mensaje="";
        if(document.getElementById("mail").value==''){
        error = true;
        mensaje += "<p> el campo no puede estar vacio </p>";

        }
        if (error){
            document.getElementById("mensaje").innerHTML = mensaje;
        return false;
        }
        else{
            return true;
        }
    }