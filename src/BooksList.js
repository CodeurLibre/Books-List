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
  {
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81QOUISS7VL._AC_UL600_SR600,400_.jpg",
    title: "The Courage to Be Free",
    author: "Ron DeSantis",
    id: "3",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71aG+xDKSYL._AC_UL600_SR600,400_.jpg",
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    id: "4",
  },
];

const BooksList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, number } = props;
  const displayTitle = () => {
    alert(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title} </h3>
      <h4>{author} </h4>
      <button className="display-title" onClick={displayTitle}>
        Display Title
      </button>
      <span className="number">{`#${number + 1}`} </span>
    </article>
  );
};

export default BooksList;
