let abc = "abcdefghijklmnopqrstuvwxyz";
let keylogger = document.getElementById("keylogger");
document.addEventListener("keydown", addKey);

function addKey(event) {
    let toucheAppuyee = String.fromCharCode(event.keyCode).toLowerCase();
    if (abc.includes(toucheAppuyee)) {
        keylogger.value += toucheAppuyee; 
            }
        }