addEventListener('DOMContentLoaded', () => {

const btnsFilter = document.querySelectorAll('a.check-filter');
const photos = document.querySelectorAll('.content-photos');
const image = document.querySelectorAll('.content-photos img');

btnsFilter.forEach((filter, i  ) => {
    btnsFilter[i].addEventListener("click", function (event){
        // Averiguo que opcion del filtro he seleccionado. Y luego elimino la clase active de todas para luego poner sola la seleccionada
        for (let x=0; x<btnsFilter.length; x++) {
            btnsFilter[x].classList.remove('active')
        }
        btnsFilter[i].classList.add('active')
        
        // Recorro todos los bloques de fotos y pregunto por la fotos que son del mismo color que el filtro seleccionado
        for (let c=0; c<photos.length; c++) {
            if(btnsFilter[i].id === photos[c].dataset.colorFilter){
                photos[c].style = "display:inline";
                image[c].className = "";
                photos[c].classList.remove('margin-end')
                photos[c].classList.remove('margin-0-auto')
                
                photos[c].classList.add('grid-filter')
                photos[c].classList.remove('content-photos')
                
                photos[c].classList.add('grid-column1')
                image[c].classList.add('photo-type-1')
            }else{
                photos[c].style = "display:none";
                
            }
            
        }
    })		
})

})