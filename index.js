const dropZone = document.querySelector('.drop-zone');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.querySelector('.browsebtn');

dropZone.addEventListener('dragover',(e)=> {

    e.preventDefault();

    if(!dropZone.classList.contains("dragged")){
        dropZone.classList.add("dragged");
    }
})

dropZone.addEventListener('dragleave',(e)=>{
    dropZone.classList.remove("dragged");
})


dropZone.addEventListener('drop',(e)=> {
    e.preventDefault();
    dropZone.classList.remove("dragged");
    const files = e.dataTransfer.files;
    if(files.length){
        fileInput.files = files;
    }
})


browseBtn.addEventListener('click',()=>{
    fileInput.click();
})