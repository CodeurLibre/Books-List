import React from "react";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id: "1",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71cLFOjw8dL._AC_UL600_SR600,400_.jpg",
    title: "Walk the Blue Line",
    author: "James Patterson",
    id: "2",
  },
];

const BooksList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title} </h2>
      <h4>{author} </h4>
    </article>
  );
};

export default BooksList;
