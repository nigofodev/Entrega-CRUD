const { faker } = require('@faker-js/faker');

let books = [];
for (let index = 0; index < 20; index++) {
  books.push({
    id: String(index),
    year: faker.date.past(),
    title: faker.lorem.sentence(),
    price: faker.finance.amount(),
    author: faker.name.fullName()
  });
}

const DELAY_TIME = 500;

const readBooks = (size) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (books.length === 0) reject({ code: 404, message: 'No Books' });
      else {
        if (size) {
          const sizedBooks = books.slice(1, size);
          resolve(sizedBooks);
        } else {
          resolve(books);
        }
      }
    }, DELAY_TIME);
  });
const readBook = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = books.find((item) => item.id === id);
      if (!book) reject({ code: 404, message: 'Book is not found' });
      else resolve(book);
    }, DELAY_TIME);
  });
const createBook = (book) =>
  new Promise((resolve) => {
    setTimeout(() => {
      books.push(book);
      resolve({ code: 201, message: 'Book created' });
    }, DELAY_TIME);
  });
const updateBook = (id, book) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const bookIndex = books.findIndex((item) => item.id === id);
      if (!books[bookIndex])
        reject({ code: 404, message: 'Book is not found' });
      else {
        books[bookIndex] = book;
        resolve({ code: 200, message: 'Book was updated successfully' });
      }
    }, DELAY_TIME);
  });
const deleteBook = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = books.find((item) => item.id === id);
      if (!book) reject({ code: 404, message: 'Book not found' });
      else {
        books = books.filter((item) => item.id !== id);
        resolve({ code: 200, message: 'Book was deleted successfully' });
      }
    }, DELAY_TIME);
  });

module.exports = {
  readBooks,
  readBook,
  createBook,
  updateBook,
  deleteBook,
};
