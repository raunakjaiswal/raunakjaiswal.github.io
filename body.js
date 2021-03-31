
let bigImgView = (imgSrc) => {

    // Making elements
    let divP = document.createElement('DIV');
    let spanC = document.createElement('SPAN');
    let imgC = document.createElement("IMG");



    // Setting attributes
    divP.setAttribute('class', 'bib-modal');
    spanC.setAttribute('class', 'bib-close');
    imgC.setAttribute('class', 'bib-modal-content');
    imgC.setAttribute('src', imgSrc);

    // Adding texts
    spanC.innerHTML = '&times;';

    // Handling events
    spanC.onclick = function(){
        this.parentElement.remove();
        
    }

    // Appending childs
    divP.appendChild(spanC);
    divP.appendChild(imgC);

    // Appending to body
    document.body.appendChild(divP);
    divP.style.display = 'block';
    console.log("Big image");

}
