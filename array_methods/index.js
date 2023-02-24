const people = ['Peter', 'Anna', 'Mary', 'John', 'Alex'];

// 1. Loop through the array with an array-method and print every name to the console


/* 
    2. Create a new array from the people-array, where every name is concatenated with a number indicating the element's index.
    e.g.: ['Peter', 'Anna', 'Mary', 'John', 'Alex'] -> ['1. Peter', '2. Anna', '3. Mary', '4. John', '5. Alex']
*/

const trashBin = ['Banana scale', 'Vegetable leftovers', 123, 'Some paper', true, 'Plastic Packaging'];
/* 
    3. Create a new filtered array from the trashBin-array, where all elements that aren't of type 'String' are filtered out.
*/

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

/* 
    6. Since you've found a way to sort the clothes by their size, let's write a more universal sorting function for the clothes
    which you can tell what field to sort by and in which order.
    The usage could look like this: sortClothes('name', 'desc'); // Which means, please sort by the name-property in descending order
*/


/*
    7. Write a function addClothing(clothingObject) that takes a new clothing object as its argument and inserts it into the existing clothing-array in the sorted order (sorted ascending by size).
    The function's return value should be the sorted clothing-array including the new clothing object.
*/


/* 
    8. Sometimes you want a brief overview of complex data-structes. That can be achieved by 'reducing' the complex structure into something more simple.
    Write a function 'reduceToNames(clothes)' that takes an array of clothing-objects and returns a new array consisting of the names only.
    e.g.:
    reduceToNames(clothes);
    -> ['Warm winter jacket', 'Sturdy rain coat', 'Cozy wool pullover', 'Light breezy shirt', 'Classy suit pants', 'Clowny fan cap']
*/