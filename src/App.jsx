import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [reading, setReading] = useState(0);

  const handleBookMark = (blog) => {
    console.log(blog);
    const newCart = [...bookmarked, blog];
    setBookmarked(newCart);
  };

  const handleMarkAsRead = (time, id) => {
    setReading(reading + time);
    handleRemoveFromBookmark(id);
  };

  const handleRemoveFromBookmark = (id) => {
    const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookMark);
  };
  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleBookMark={handleBookMark}
          ></Blogs>
        </div>
        <div className="right-container w-[30%] ">
          <h1>Reading time : {reading}</h1>
          <h1>bookmarked count : {bookmarked.length}</h1>

          <div>
            {bookmarked.map((book) => (
              <h1 className="bg-red-500 p-2 shadow m-2 text-white">
                {book.title}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
