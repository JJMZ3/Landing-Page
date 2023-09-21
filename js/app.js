function guardar(){
    const doc=document;
    const nombre=doc.getElementById("nombre").value.trim();
    const correo=doc.getElementById("correo").value.trim();
    const telefono=doc.getElementById("telefono").value.trim();
    const vacios =[nombre,correo,telefono].includes("");

    if(!vacios){
        localStorage.setItem("nombre" , nombre);
        localStorage.setItem("correo" , correo);
        localStorage.setItem("telefono" , telefono);
        mensaje.innerHTML="Registrado con exito";
        mensaje.style.color="green";
} else{
  mensaje.innerHTML="Debe rellenar todos los campos";
}

}
