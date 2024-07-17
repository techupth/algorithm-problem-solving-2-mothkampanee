let books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

function findBookIndex(books, searchBook) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  // Binary Search
  let left = 0;
  let right = books.length - 1;
  let index = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (books[mid].title === searchBook) {
      return (index = mid);
    } else if (books[mid].title < searchBook) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // Linear Search
  // let index = -1;
  // for (let key = 0; key <= books.length; key++) {
  //   if (books[key].title === searchBook) {
  //     return (index = key);
  //   }
  // }

  return index;
}

const result = findBookIndex(books, "Harry Potter");
console.log(result);
