
//promise  ::old fashion
/*
fetch('https://www.breakingbadapi.com/api/')
.then((res) =>{
    console.log(res);
    return res.json();
})
.then((data) =>{
    console.log(data);
})
*/

const api = 'https://www.breakingbadapi.com/api/characters'
const getData = async () =>{
try{
    const res = await fetch(api)
    const data = await res.json()
    //console.log(data); //look into data
  
    //check console
    //const printAll = data.map(m => m.name)
    //console.log(printAll);
  
    printData(data)
}catch(err){
console.log('====================================');
console.log('error: ', err.message);
console.log('====================================');
}
}

function printData(data){
  //document.querySelector('#content').innerHTML = '<h1>' + data[0].name + '<h1>' //if you like
 const header = document.querySelector('#header')
 const content = document.querySelector('#content')

 header.innerHTML += `
 <select class="form-control" onchange="getCharacter(this.value)">
 <option>pick actor name</option>
 ${data.map(character => `<option>${character.name}</option>`)}
 </select>
 `
}

const getCharacter = async (e) =>{
    if(name !== 'pick actor name'){
//console.log(e);
const res = await fetch(`${api}?name=${e}`)
const data = await res.json()
//console.log(data[0].nickname); //for check

content.innerHTML =`
<h1>${data[0].name} (${data[0].nikckname})</h1>
<h4>${data[0].portrayed}</h4>
<img src="${data[0].img}">
`
    }else{
        console.log('^^');
    }
}

getData()