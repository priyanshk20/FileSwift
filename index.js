const dropZone = document.querySelector('.drop-zone');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.querySelector('.browsebtn');
const host = "https://innshare.herokuapp.com";
const uploadURL = `${host}/api/files`;

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
    uploadFile();
})


browseBtn.addEventListener('click',()=>{
    fileInput.click();
})

fileInput.addEventListener('change',()=> {
    uploadFile();
})

const uploadFile = () => {
file = fileInput.files[0];
const formData = new FormData();
formData.append("myfile", file);
const req = new XMLHttpRequest();
req.onreadystatechange = () => {
if(req.readyState === XMLHttpRequest.DONE){
    console.log(req.responseText);
}
}
req.open("POST",uploadURL);
req.send(formData);
}