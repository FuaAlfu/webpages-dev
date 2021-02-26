const date = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    document.getElementById('d').innerHTML = currentYear.toString();
}

date();