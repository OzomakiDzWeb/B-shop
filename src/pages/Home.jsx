import product from '../Data/data/products'
import CartItmes from "../component/CartItmes";
import { useState } from "react";
import Slider from "../component/Slider";
import { useSelector } from "react-redux";

const Home = () => {
  // const select = useSelector(state=>state.auth.isLoggedIn)
  // const userName = useSelector(state=>state.auth.useName)
  // const cartuser = useSelector(state=>state.cart.cartItmes)

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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSearchResults(event.target.value === 'All'
    ? product
    : product.filter(item => item.category === event.target.value))
  };


  return (
    <div className="">
      <Slider/>
      <div className="flex justify-between">
        <label>
          sort by
          <select className="rounded ml-3 text-[#000] dark:text-[#fff] dark:bg-gray-darck" 
                value={selectedCategory} 
                onChange={handleCategoryChange}>
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
     <div className="mt-10 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center gap-3 gap-x-10 ">
       {searchResults.map(product=>
          <div className=''
          key={product.id}
          >
            <CartItmes  product={product}/>
          </div>)} 
     </div>
    </div>
  )
}

export default Home