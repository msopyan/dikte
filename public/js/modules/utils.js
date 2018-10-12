function handleOnChange() {
    let input   = document.getElementById('test-upload');
    let button  = document.getElementById('test-upload-label'); 
    // console.log(`file name : ${input.files.item(0).name}`);
    // console.log(`file size: ${input.files.item(0).size}`);
    // console.log(`file type: ${input.files.item(0).type}`);
    button.innerText = input.files.item(0).name;
}