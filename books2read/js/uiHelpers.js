import { getReadingList, addToReadingList, toggleRead } from "./booksStore.js";


// Function to render the whole reading list
export const renderReadingList = (books, container) => {
    // HACK replace all children with nothing
    // ->  resets the container
    container.replaceChildren();

    // loop through all books
    books.forEach(book => {
        // create listItem
        const listItem = document.createElement('li');

        // add a class to indicate it's read already if read
        if (book.isRead) listItem.classList.add('is-read');

        // create toggle
        const readingToggle = document.createElement('button');
        readingToggle.textContent = book.isRead ? 'Re-read' : 'Done reading';
        
        // toggle reading status in data on click and re-render reading list
        readingToggle.addEventListener('click', evt => {
            toggleRead(book.id);
            renderReadingList(getReadingList(), container);
        });


        // create title
        const bookTitle = document.createElement('span');
        bookTitle.textContent = book.title;

        listItem.appendChild(readingToggle);
        listItem.appendChild(bookTitle);

        container.appendChild(listItem);
    });

};

// Function to create a single book tile for the books list
const createBooksTile = (book, readingListContainer) => {
    // create div for tile
    const tile = document.createElement('div');
    tile.classList.add('book-tile');

    /* ---- CHILDREN ------ */
    // create title element
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;

    // create description elements
    const bookDescTitle = document.createElement('h4');
    bookDescTitle.textContent = 'Desciption';
    const bookDesc = document.createElement('p');
    bookDesc.textContent = book.description;

    // create add to reading list button
    const readListBtn = document.createElement('button');
    readListBtn.textContent = 'To reading list';
    // append clickListener for adding to reading list
    readListBtn.addEventListener('click', evt => {
        addToReadingList(book.id);
        renderReadingList(getReadingList(), readingListContainer);
    });
    /* ----------------- */


    // Assemble tile
    tile.appendChild(bookTitle);
    tile.appendChild(bookDescTitle);
    tile.appendChild(bookDesc);
    tile.appendChild(readListBtn);

    return tile;
};

// Function to render out the complete books list
export const renderBooksList = (books, booksContainer, readingListContainer) => {
    // HACK replace all children with nothing
    // ->  resets the container
    booksContainer.replaceChildren();

    // Create all the tiles
    books.forEach(book => {
        const tile = createBooksTile(book, readingListContainer);
        booksContainer.appendChild(tile);
    });
};
