document.querySelector("#get_data").addEventListener('click', getData);
function getData(e) {
    // console.log(`This is test data`);

    fetch('https://api.chucknos.io/jokes/search?query=drama')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err.message);
    })

    e.preventDefault();
}