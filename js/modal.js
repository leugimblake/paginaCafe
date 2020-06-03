//obtiene todos los elementos de mi galeria en cc

let imagenes = document.querySelectorAll('.galery__img');

let modal = document.querySelector('#modal');

let img = document.querySelector('#modal__img');
let boton = document.querySelector('#modal__boton');


for(let  i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener('click',function(e){
       modal.classList.toggle('modal--open');   
        //obtener la ruta de la imagen a la que se le da click y almacenarla en src (valerse de un parametro e)
        
    let src = e.target.src;
        img.setAttribute("src", src);
        
    });
}
boton.addEventListener('click', function(){
    
    modal.classList.toggle('modal--open');   
});

