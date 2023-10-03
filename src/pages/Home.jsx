import { doc, updateDoc } from "firebase/firestore";
import {db} from '../fairbase/config'
import product from '../Data/data/products'
import CartItmes from "../component/CartItmes";
import { useState } from "react";


const Home = () => {


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(product);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const handleSearch = (e) => {
           setSearchTerm(e.target.value);
           const filteredArray = product.filter((item) =>
            item.productName.toLowerCase().includes(e.target.value.toLowerCase())
          );

    setSearchResults(filteredArray);
  };
 
  const addToCart=()=>{
    const washingtonRef = doc(db, "users", "2eee");
 updateDoc(washingtonRef, {
    "useName": 13,
   
});
  }
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSearchResults(event.target.value === 'All'
    ? product
    : product.filter(item => item.category === event.target.value))
  };
  return (
    <div className="">
      <div className="flex justify-between">
        <label>
          sort bay
          <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value='All'>All</option>
          <option value='sofa'>sofa</option>
          <option value='chair'>chair</option>
          <option value='mobile'>mobile</option>
          <option value='watch'>watch</option>
          <option value='wireless'>wireless</option>
        </select>
        </label>
       <input placeholder="Search product" className="inpt w-1/2" type="text" value={searchTerm}
        onChange={handleSearch}/>
      </div>
     <div className="mt-10 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-2">
       {searchResults.map(product=><CartItmes key={product.id} product={product}/>)} 
     </div>
    </div>
  )
}

export default Home