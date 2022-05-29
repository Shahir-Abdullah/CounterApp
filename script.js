const btn = document.getElementById("btnIncrement");
const textArea = document.getElementById("txtCnt");
textArea.innerHTML = '0';
let cnt = 0;
btn.addEventListener("click", () => {
    //console.log("hello");
    cnt++;
    textArea.innerHTML =  cnt;
});