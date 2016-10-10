window.addEventListener("load", responderMensaje);
var mensajes=document.getElementById("mensajes");

function responderMensaje(){
	mensajes.addEventListener("keyup",enviar);
}

function enviar(e){
	var chat=document.getElementById("chat");
	if (this.value.trim().length != 0) {
		if(e.keyCode==13){

			var contenedor=document.createElement("div");
			var caja=document.createElement("div");
			var mensajeCaja=document.createElement("p");

			chat.appendChild(contenedor);
			contenedor.appendChild(caja);
			caja.appendChild(mensajeCaja);
			mensajeCaja.innerHTML=this.value;
			this.value="";

			contenedor.classList.add("w-message","w-message-out");
			caja.classList.add("w-message-text");

	       var fecha = new Date();
	       var hora = fecha.getHours();
	       var minuto = fecha.getMinutes();
	           if(minuto < 10) {
	               minuto = "0" + minuto;
	           }
	       var horaImprime = hora + " : " + minuto;
	       var hora = document.createElement("div");
	       hora.classList.add("time");
	       hora.innerText = horaImprime;
	       caja.insertBefore(hora, caja.childNodes[1]);
		}		 
	}
}
