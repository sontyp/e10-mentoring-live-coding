const people = ['Peter', 'Anna', 'Mary', 'John', 'Alex'];
// 1. Loop through the array with an array-method and print every name to the terminal
people.forEach(person => console.log(person));


/* 
    2. Create a new array from the people-array, where every name is concatenated with a number indicating the element's index.
    e.g.: ['Peter', 'Anna', 'Mary', 'John', 'Alex'] -> ['1. Peter', '2. Anna', '3. Mary', '4. John', '5. Alex']
*/
const indexedPeople = people.map((person, idx) => `${idx+1}. ${person}`);
console.log(indexedPeople);


const trashBin = ['Banana scale', 'Vegetable leftovers', 123, 'Some paper', true, 'Plastic Packaging'];
/* 
    3. Create a new filtered array from the trashBin-array, where all elements that aren't of type 'string' are filtered out.
*/
const filteredTrashBin = trashBin.filter(elem => (typeof elem) === 'string');
console.log(filteredTrashBin);


const unfilteredTrash = [
    {
        kind: 'bio',
        value: 'Banana scale'
    },
    {
        kind: 'bio',
        value: 'Vegetable leftovers'
    },
    {
        kind: 'paper',
        value: 'Some paper'
    },
    {
        kind: 'plastic',
        value: 'Plastic Packaging'
    },
];
/* 
    4. Waste filtering is a serious topic, so let's find a way to sort out the unfilteredTrash-array into three different trash bins.
    The array holds objects with the properties 'kind' and 'value'.
    The 'kind'-property indicates what kind of waste the object is,
    the 'value'-property holds a description of that piece of waste.
    Write a function that filters this unfilteredTrash-Array into three different ones depending on their 'kind'-property
    The return value of that function should be an object holding three arrays, each for a certain kind.
    e.g.:
    sortWaste(unfilteredTrash) returns:
    {
        bio: [
            {
                kind: 'bio',
                value: 'Banana scale'
            },
            {
                kind: 'bio',
                value: 'Vegetable leftovers'
            }
        ],
        paper: [
            {
                kind: 'paper',
                value: 'Some paper'
            }
        ],
        plastic: [
            {
                kind: 'plastic',
                value: 'Plastic Packaging'
            }
        ]
    }
*/
// more simple, but still effective solution by use of .forEach
// function sortWaste(trashBin) {
//     const result = {
//         bio: [],
//         paper: [],
//         plastic: []
//     };

//     trashBin.forEach(elem => {
//         switch(elem.kind) {
//             case 'bio':
//                 result.bio.push(elem);
//                 break;

//             case 'paper':
//                 result.paper.push(elem);
//                 break;

//             case 'plastic':
//                 result.plastic.push(elem);
//                 break;

//             default:
//                 console.log('Doesnt fit any bin');
//                 break;
//         }
//     });

//     return result;
// }
// console.log(sortWaste(unfilteredTrash));

// a little bit more sophisticated by use of .reduce
function sortWaste(trashArray) {
    return trashArray.reduce((sortedWaste, item) => {
      switch(item.kind) {
        case 'bio':
            sortedWaste.bio.push(item);
            return sortedWaste;
        case 'paper':
            sortedWaste.paper.push(item);
            return sortedWaste;
        case 'plastic':
            sortedWaste.plastic.push(item);
            return sortedWaste;
      }

      return sortedWaste;
    }, { bio: [], paper: [], plastic: [] });
}
console.log(sortWaste(unfilteredTrash));

const clothes = [
    {
        name: 'Warm winter jacket',
        size: 1,
        color: 'forest green'
    },
    {
        name: 'Sturdy rain coat',
        size: 3,
        color: 'navy blue'
    },
    {
        name: 'Cozy wool pullover',
        size: 1,
        color: 'tomatoe red'
    },
    {
        name: 'Light breezy shirt',
        size: 2,
        color: 'white'
    },
    {
        name: 'Classy suit pants',
        size: 4,
        color: 'gray'
    },
    {
        name: 'Clowny fan cap',
        size: 2,
        color: 'yellow-red striped'
    },
];
/* 
    5. We have an array 'clothes' with a bunch of clothing objects.
    A clothing object consists of a name-property, a numeric size-property and a color-string-property.
    Find a way to sort the clothes-array in ascending order by their numeric size.
*/
// In order to keep the original array unsorted, we create a new shallow copy of it to run .sort on it
// Create a local copy of the clothes-array since the .sort method sorts in place
const clothesCopy = [...clothes];
clothesCopy.sort((a, b) => {
    if (a.size < b.size) return -1;
    if (a.size > b.size) return 1;
    return 0; // values are equal
});
console.log(clothesCopy);

/* 
    6. Since you've found a way to sort the clothes by their size, let's write a more universal sorting function for the clothes
    which you can tell what field to sort by and in which order.
    The usage could look like this: sortClothes(clothes, 'name', 'desc'); // Which means, please sort 'clothes' by the name-property in descending order
*/
function sortClothes(clothes, prop, dir) {
    // Run the .sort method on a local shallow copy of the passed array
    return [...clothes].sort((a, b) => {
        // The sorting direction doesn't matter when the values are equal
        if (a[prop] === b[prop]) return 0;

        if (a[prop] < b[prop]) return (dir === 'asc') ? -1 : 1;
        if (a[prop] > b[prop]) return (dir === 'asc') ? 1 : -1;
    });
}
console.log(sortClothes(clothes, 'color', 'desc'));

/*
    7. Write a function addClothing(clothingObject) that takes a new clothing object as its argument and inserts it into the existing clothing-array in the sorted order (sorted ascending by size).
    The function's return value should be the sorted clothing-array including the new clothing object.
*/
// Adding the cloths-array as an argument to keep the function as pure a possible
function addClothing(clothes, clothingObj) {
    // create a local shallow copy, because .sort sorts in-place
    let clothesCopy = [...clothes];

    // add the new clothing object to the local copy
    clothesCopy.push(clothingObj);

    // sort the extended local copy
    return clothesCopy.sort((a, b) => {
        // early return if values are equal
        if (a.size === b.size) return 0;

        // ternary operator for the other two options since only these two options are possible if the condition for the early return didn't suffice
        return (a.size < b.size) ? -1 : 1;
    });
}
console.log(addClothing(clothes, {name: 'Comfortable sweat pants', size: 3, color: 'simple gray'}));

/* 
    8. Sometimes you want a brief overview of complex data-structes. That can be achieved by 'reducing' the complex structure into something more simple.
    Write a function 'reduceToNames(clothes)' that takes an array of clothing-objects and returns a new array consisting of the names only.
    e.g.:
    reduceToNames(clothes);
    -> ['Warm winter jacket', 'Sturdy rain coat', 'Cozy wool pullover', 'Light breezy shirt', 'Classy suit pants', 'Clowny fan cap']
*/
function reduceToNames(clothes) {
    // Using the .reduce method that returns a new reduced structure, based on the array it is called upon
    return clothes.reduce((acc, elem) => {
        // push the current item to the accumalator and return it
        acc.push(elem.name);
        return acc;
    }, []); // pass an empty array as the inital value for the accumulator
}
console.log(reduceToNames(clothes));