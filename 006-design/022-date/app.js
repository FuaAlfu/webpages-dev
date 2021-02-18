/*
example (how to show current date)
let dateCount = document.getElementById('date').innerHTML = Date().toString();
let today = new Date();
let year = today.getFullYear();
let mes = today.getMonth()+1;
let dia = today.getDate();
let fecha =dia+"-"+mes+"-"+year;
console.log(fecha);
*/
function date(){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    //document.getElementById('d').innerHTML = Date().toString(); //showing all date including the time
    document.getElementById('d').innerHTML = currentYear.toString();
}

date();