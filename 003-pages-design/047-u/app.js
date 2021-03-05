const date = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    //document.getElementById('d').innerHTML = currentYear.toString(); || use the code down below
    let datePrinter = document.querySelector(".d-");
    datePrinter.innerHTML = currentYear.toString();
    
}

date();