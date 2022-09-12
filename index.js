const dropZone = document.querySelector('.drop-zone');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.querySelector('.browsebtn');
const progressBar = document.querySelector('.bg-progress');
const progressLine = document.querySelector('.progress-line');
const progressContainer  = document.querySelector('.progress-container');
const progressPercent = document.querySelector('.percentage-container');
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
progressContainer.style.display = "block";
file = fileInput.files[0];
const formData = new FormData();
formData.append("myfile", file);
const req = new XMLHttpRequest();
req.onreadystatechange = () => {
if(req.readyState === XMLHttpRequest.DONE){
    console.log(req.responseText);
    showLink(JSON.parse(req.responseText));
}
}

req.upload.onprogress = updateProgress;
req.open("POST",uploadURL);
req.send(formData);
}

const updateProgress = (e) => {
const percentage = Math.round((e.loaded/e.total)*100);
progressBar.style.width = `${percentage}%`
progressPercent.innerText = `${percentage}%`
progressLine.style.transform = `scaleX(${percentage/100})`
}

const showLink = ({file}) => {
console.log(file)
}