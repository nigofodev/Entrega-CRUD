const bookServices = require('../services/books.service');
const getBooks = (size) =>
  new Promise((resolve, reject) => {
    try {
      resolve(bookServices.readBooks(size));
    } catch (error) {
      reject(error);
    }
  });

const getBook = (id) =>
  new Promise((resolve, reject) => {
    try {
      resolve(bookServices.readBook(id));
    } catch (error) {
      reject(error);
    }
  });
const postBook = (body) =>
  new Promise((resolve, reject) => {
    try {
      const { id, year, title, price, author } = body;
      if (!(id && year && title && price && author)) {
        reject({ code: 400, message: 'Bad request, check for user fields' });
      } else {
        const book = {
          id,
          year,
          title,
          price,
          author
        };
        resolve(bookServices.createBook(book));
      }
    } catch (error) {
      reject(error);
    }
  });
const putBook = (bookID, body) =>
  new Promise((resolve, reject) => {
    try {
      const { id, year, title, price, author } = body;
      if (!(id && year && title && price && author)){
        reject({ code: 400, message: 'Bad request, check for user fields' });
      } else {
        const book = {
          id,
          year,
          title,
          price,
          author
        };
        resolve(bookServices.updateBook(bookID, book));
      }
    } catch (error) {
      reject(error);
    }
  });
  const deleteBook = (id) => new Promise((resolve, reject) => {
    try {
      resolve( bookServices.deleteBook(id) );
    } catch (error) {
      reject(error);
    }
  });
module.exports = {
  getBooks,
  getBook,
  postBook,
  putBook,
  deleteBook
};
