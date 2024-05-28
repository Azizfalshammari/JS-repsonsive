// iphone
// note10
// ipadpro
// mcosx
// form1

let iphone = document.getElementById('iphone');
let note = document.getElementById('note10');
let ipad = document.getElementById('ipadpro');
let mac = document.getElementById('mcosx');
let linker = document.getElementById('form1')

let linktogo =linker.value

console.dir(linktogo)
iphone.addEventListener('click', ()=>{
    
linktogo =linker.value
    window.open(linktogo, height=375,width= 812);
    console.dir(linktogo)


})

note.addEventListener('click', ()=>{
     linktogo =linker.value
    window.open(linktogo, height=412,width= 869);

})

ipad.addEventListener('click', ()=>{
    
 linktogo =linker.value
    window.open(linktogo, height=1024,width= 1366);


})

mac.addEventListener('click', ()=>{
    
linktogo =linker.value
    window.open(linktogo, height=1920,width= 1080);


})