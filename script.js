
function createInputFields() {
    var inputFieldCount = document.getElementById("input-number-count").value;
    var inputFieldsHTML = '';


    for (var i = 0; i < inputFieldCount; i++) {
        inputFieldsHTML += '<input class="input-field" type="text" placeholder="Value for field ' + (i + 1) + '"><br>';
    }
    document.getElementById('inputFields').innerHTML = inputFieldsHTML;
}




function displayInputValues() {
    const inputFields = document.getElementsByClassName('input-field');
    const dataCellsContainer = document.getElementById('data-cells');

    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value) {

            const dataCell = document.createElement('div');
            dataCell.className = 'data-cell';
            dataCell.innerText = inputFields[i].value;
            dataCellsContainer.appendChild(dataCell);
        }
    }
}
