const cat = document.getElementById('cat');
const dog = document.getElementById('dog');
const cat_btn = document.getElementById('cat-btn');
const dog_btn = document.getElementById('dog-btn');

cat_btn.addEventListener('click',getKitty);
dog_btn.addEventListener('click',getDoggy);

function getKitty(){
fetch('https://aws.random.cat/meow')
.then(res => res.json())
.then(data => {
    cat.innerHTML =`
    <img src="${data.file}"/>
    `
})
}

function getDoggy(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        if(data.url.includes(".mp4")){
            getDoggy()
        }else{
        dog.innerHTML =`
        <img src="${data.url}"/>
        `
        }
    })
}

