import '../App.css';
import Navbar from './Navbar'
import HeroBanner from './HeroBanner';
import ProductCard from './ProductCard';
import ProductCategory from './ProductCategory';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <div className="popular-pick">
        <h2>Popular Picks</h2>
        <div className="row">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
        <div className="row">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
        <button class="btn btn-primary view-all-product-button" type="button">VIEW ALL PRODUCTS</button>
      </div>
      <ProductCategory></ProductCategory>
      <ProductCategory></ProductCategory>
      <Footer></Footer>


    </div>
  );
}

export default App;
