var prevScrollPos=window.pageYOffset;

window.onscroll = function (prevScrollPos) {
    var currentScrollPos = window.pageYOffset;
    if(prevScrollPos>currentScrollPos) {
        document.getElementById("HidePic")

    }
}
const handleFormSubmit = event => {

    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();

    // TODO: Call our function to get the form data.
    const data = {};

    // Demo only: print the form data onscreen as a formatted JSON object.
    const dataContainer = document.getElementsByClassName('results__display')[0];

    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    dataContainer.textContent = JSON.stringify(data, null, "  ");

    // ...this is where we’d actually do something with the form data...
};
const form=document.getElementsByClassName('seed-form')[0];
form.addEventListener('submit',handleFormSubmit)