// Home.js


import data from './Data.json';
import Footer from './Footer';
import '../App.css';
import bg from '../components/background.jpg';


const Home = ({addToCart})=> {
  // const [cart, setCart] = useState([]);

  // const handleAddToCart = (book) => 
  // {
  //   const isBookInCart = cart.find((cartBook) => cartBook.title === book.title);

  //   if (!isBookInCart) {
  //     setCart([...cart, book]);
  //     alert(`Added ${book.title} to the cart`);
  //   } else {
  //     alert(`${book.title} is already in the cart`);
  //   }
  // };



  return (
    <div className="home-container">
      <div className="name">
        <div className="background-image">
          <img src={bg} alt="Background" />
        </div>
        <div className="welcome-text">
          <h1>Welcome to BOOKLOL</h1>
          <p>This is a book website</p>
        </div>
      </div>

      <div className="book-list">
        {data.map((record, index) => (
          <div className="book-card" key={index}>
            <h1 className="book-title">{record.title}</h1>
            <img className="book-image" src={record.url} alt={record.title} />
            <h2 className="book-price">₹{record.price}</h2>
            <button onClick={() => addToCart(record)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="about-us-section">
        <h2>About Us</h2>
        <p className="about-us-paragraph">
          We are a book sharing platform that allows you to share and rent books with ease.
          Join our community to discover a wide range of books and enjoy the joy of reading
          together.
        </p>
        <div className="about-us-images">
          <img src='public\image\lib-1.jpg' alt='Image1'></img>
        </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default Home;
