const countElement = document.getElementById('count');

visitorCounter();

function visitorCounter (){
    fetch("https://api.countapi.xyz/update/f-a/jo-jo/?amount=1")
    .then(res => res.json())
    .then(res => {
        countElement.innerHTML = res.value;
    });
}