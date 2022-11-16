document.querySelector("#get_data").addEventListener('click', getData);
function getData(e) {
    // console.log(`This is test data`);

    fetch('https://api.chucknorris.io/jokes/search?query=drama')

    e.preventDefault();
}