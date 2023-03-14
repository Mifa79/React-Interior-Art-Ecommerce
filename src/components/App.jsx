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
        <h1>POPULAR PICKS</h1>
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
