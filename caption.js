const modal = document.querySelector('.modal')
const previews  = document.querySelectorAll('.gallery img');
// const original  = document.querySelector(".full-img");
const imagetext = document.querySelector(".caption");
// const textani = document.querySelector('')

previews.forEach(preview => {
    preview.addEventListener('click', ()=> {
        modal.classList.add("open");
        // original.classList.add("open");
        imagetext.classList.add("open");

        // const imageurl = preview.getAttribute("data-original");
        // original.src = `./image/${imageurl}`;

        const alttext = preview.alt;
        imagetext.textContent = alttext;
    })
})

modal.addEventListener('click', (e)=> {
    if(e.target.classList.contains('modal'))
    {
        modal.classList.remove("open");
        // original.classList.remove("open");
        imagetext.classList.remove("open");
    }
})