document.querySelector("#get_data").addEventListener('click', getData);
function getData(e) {
    fetch('https://api.chucknos.io/jokes/search?query=drama')
    .then(res =>  res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err.message));

    e.preventDefault();
}