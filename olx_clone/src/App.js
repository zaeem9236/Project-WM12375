import React from 'react';
import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { Cards } from './components/Cards/Card.js';
import { featured_products, products } from './components/Products/Products.js';
import './App.css';

import Card_pic from './Card.JPG';

function App() {
  return (
    <React.Fragment>
      <div className='main_div'>
        <Header></Header>
        {console.log(featured_products[0].picture)};
        {/* {console.log(products)}; */}
        {/* <img src={Card_pic} alt=''></img> */}

        <div className='featured_items_display'>
          <div className='featured_items_title'><p>Featured Items</p></div>
          <div className='featured_products'>
            {featured_products.map(function (featured_products_Obj, index) {
              return (
                <Cards picture={featured_products[index].picture}
                  price={`Rs  ${featured_products[index].price}`}
                  description={featured_products[index].description}
                />
              );
            })}
          </div>
        </div>

        <div className='fresh_recommendations'>
          <div className='fresh_title'><p>Featured Items</p></div>
          <div className='fresh_products'>
            {products.map(function (products_Obj, index) {
              return (
                <Cards picture={products[index].picture}
                  price={`Rs  ${products[index].price}`}
                  description={products[index].description}
                />
              );
            })}
            
          </div>
        </div>
        
        <h1>pakhair raghalay</h1>
        <h1>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
        <h1>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
        <h1>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
        <h1>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>

        <Footer></Footer>

      </div>
    </React.Fragment>
  );
}

export default App;
