
// Select the element references we need
const container = document.querySelector('.container');
const children = document.querySelectorAll('.container-child');

// Storage for data-value values
const selectedSquares = [];

// Register a click-eventHandler on the container
container.addEventListener('click', evt => {
    // // Remove the .selected class from all children
    // children.forEach(child => {
    //     child.classList.remove('selected');
    // });

    // // Add the .selected class to the event target
    // evt.target.classList.add('selected');

    // store target reference in a constant
    const clickedElement = evt.target;

    // store target data-value value in a constant
    const value = clickedElement.dataset.value;

    // toggle the .selected class on the target's classList
    clickedElement.classList.toggle('selected');

    // if target is marked as selected
    if (clickedElement.classList.contains('selected')) {
        // if target's data-value value is not yet stored
        if (selectedSquares.findIndex(item => item === value) === -1) {
            // add the target's data-value value to the storage
            selectedSquares.push(value);
        }

    } else { // not selected anymore
        // find the index of the target's data-value value inside the storage
        const valuesIdx = selectedSquares.findIndex(item => item === value);

        // delete the value from the storage by it's index
        selectedSquares.splice(valuesIdx, 1);
    }


    console.log(selectedSquares);
});


// Create a favoritePets storage where user-selected Pets are stored in
const petsStorage = new Set();

// Whenever the user clicks on one of the pet-cards it should be visibly marked as selected as well as store it's pet-value to the storage
const petSelection = document.querySelector('.pet-selection');
petSelection.addEventListener('click', evt => {
    // reference the clicked target
    const { target } = evt;

    // extract the data-pet value
    const pet = target.dataset.pet;

    // early return if target is not a card
    if (!target.classList.contains('pet-card')) {
        return;
    }

    // toggle the selection-marker class
    target.classList.toggle('pet-selected');

    // if card is marked selected
    if (target.classList.contains('pet-selected')) {
        // add data-pet value to the storage
        petsStorage.add(pet);

    } else { // not selected
        // remove the data-pet value from the storage
        petsStorage.delete(pet);
    }
});

// When the user clicks the confirmation button for the selection the pet-selection-result list should show the values stored throughout the selection process
// reference to the confirmation button
const confirmBtn = document.querySelector('#pet-selction-confirm-btn');
// reference to the unordered list for the selection result
const selectionResult = document.querySelector('#pet-selection-result');

// add click-handler to confirmation button
confirmBtn.addEventListener('click', evt => {
    // list of new LI-nodes (elements)
    const newResult = [];

    // loop through all the pets in the storage
    petsStorage.forEach(pet => {
        // create new LI-node for the result list
        const resultItem = document.createElement('LI');

        // insert pet value
        resultItem.textContent = pet.toUpperCase();

        // add to new list of nodes
        newResult.push(resultItem);
    });

    // replace old LI-children with new ones
    selectionResult.replaceChildren(...newResult);
});