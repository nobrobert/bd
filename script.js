const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");


botones.forEach(boton=> {
    boton.addEventListener("click", ()=> {
        console.log(boton.textContent)
         //console.long(boton.textContent);
        const botonOn  = boton.textContent;

        if(boton.id ==="borrar"){
            if (pantalla.textContent.length===1){
                pantalla.textContent ="0"
            }else{
                pantalla.textContent=pantalla.textContent.slice(0,-1);
            }
           
            return;
        }

        if (boton.id === "limpiar"){
            pantalla.textContent="0";
            return;
        }
        if(boton.id ==="igual"){
            try{
                pantalla.textContent=eval(pantalla.textContent);

            }catch{
                pantalla.textContent="¡ERROR!";
            }
           
            return;
        }
        
        if (pantalla.textContent === "0"){
            pantalla.textContent=botonOn;
        }
        else{
            pantalla.textContent+=botonOn;
        }
        
       })
    
});
