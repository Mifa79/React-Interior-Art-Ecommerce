import '../App.css';
import Navbar from './Navbar'
import HeroBanner from './HeroBanner';
import ProductCard from './ProductCard';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <div className="popular-pick">
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
      </div>


    </div>
  );
}

export default App;
