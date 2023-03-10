// TODO: Import API_ENDPOINT
import {API_ENDPOINT} from "./index.js";
// TODO: Create the addNewBook function that takes in newTitle, newStart, and newEnd as arguments. Inside the function, create a POST request for the new book. Store the response as a JSON in a variable called newBook and return it at the end of the function.
export const addNewBook = async (newTitle, newStart, newEnd) => {
    const response = await fetch(`${API_ENDPOINT}/books`, {
        method: "POST",
        body: JSON.stringify({
            title: newTitle,
            start: newStart,
            end: newEnd
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json(); // returns the new book
};
// TODO: Create the getBooks function that retrieves all of the books that have been saved to the back-end API
export async function getBooks () {
    const response = await fetch(`${API_ENDPOINT}/books`);
    return await response.json(); // returns all books from api
}
// TODO: Create the updateBook function that takes the arguments id, newTitle, newStart, newEnd. Inside of the function, create a PUT request for the specified book to be updated. Return the status of the response at the end of the function.
export async function updateBook (id, newTitle, newStart, newEnd) {
    const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            newTitle,
            newStart,
            newEnd
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response.status;
}

// TODO: Create the deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.

export async function deleteBook (id) {
    const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
        method: "DELETE",
    });

    return response.status;
}