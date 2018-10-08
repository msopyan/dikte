import uuidv4 from 'uuid/v4';

export function handleOnChange() {
    let input   = document.getElementById('test-upload');
    let button  = document.getElementById('test-upload-label'); 
    // console.log(`file name : ${input.files.item(0).name}`);
    // console.log(`file size: ${input.files.item(0).size}`);
    // console.log(`file type: ${input.files.item(0).type}`);
    // button.innerText = input.files.item(0).name;
}

export function createMillisTime() {
    let millis = new Date();
    return millis.getTime();
}

export function commandCreator(protocol, cmd, data = {}) {
    let command = {
        "bk" : {
            "protocol"  : protocol,
            "cmd"       : cmd,
            "data"      : data,
            "stan"      : uuidv4(),
            "time"      : createMillisTime(),
            "type"      : 0,
            "version"   : "1.0",
            "entity"    : "bahasakita"
        }
    }

    return command;
}
