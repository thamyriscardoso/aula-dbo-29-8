const bt = document.querySelector('button');
const p = document.querySelector('p');
const bt2 = document.querySelectorAll('button')[1];
const input = document.querySelector('input');

bt2.addEventListener('click',function(){
    Notification.requestPermission();
    new Notification(input.value);
});

bt.addEventListener('click',function(){
    navigator.geolocation.getCurrentPosition(callback);
});

function callback(pos){
    console.dir(pos);
    p.textContent = `${pos.coords.latitude}, ${pos.coords.longitude} acurácia ${pos.coords.accuracy}`;
}

//speech

const bt3 = document.querySelectorAll('button')[2];
const input2 = document.querySelectorAll('input')[1];

bt3.addEventListener('click',function(){
    const texto = input2.value;
    const fala = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(fala);
})
