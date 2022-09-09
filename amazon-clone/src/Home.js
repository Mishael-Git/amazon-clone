import React from 'react';
import "./Home.css";
import HomeLayout from './HomeLayout';
import Product from './Product';
function Home() {
  return (
    <>
    <HomeLayout>
    <div className='home'>
        <div className='home_container'>
            <img
            className='home_image' 
            src='/images/ahome.jpg' alt=''/>

              <div className="home_row">
                <Product
                id="04565545" 
                 title='The Lean Startup: How Constant Innovation Creates
                  Radically Successful Business Paperback'
                 price={28.99}
                image="/images/lean.webp" 
                rating={3}
                /> 
                <Product
                id="1234456"
                 title='Kenwood kMix stand Mixer for Baking, Stylish Kitchen Mixer with
                  K-beater,Dough Hook and Whisk,5 Litre Stainless Bowl'
                 price={500.9}
                image="/images/mixer.webp" 
                rating={4} 
                />
            
            
            </div>

            <div className="home_row">
               <Product 
               id="048488478" 
               title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming monitor'
               price={100.9}
              image="/images/samsung.webp" 
              rating={4}
              />
               <Product id="04563222" 
                 title='Amazon Echo (3rd generation)| 
                 Smart speaker with Alexa, Charcoal Fabric'
                 price={98.99}
                image="/images/Echo.webp" 
                rating={4}
                 />
               <Product id="064774674" 
                 title='New Apple ipad pro (12.9-inch,Wi-Fi, 128GB)
                 -Silver (4th Generation)'
                 price={600}
                image="/images/ipad.webp" 
                rating={5}
                />
            </div>

            <div className="home_row">
              <Product 
              id="976746745" 
              title='2022 New HP 15 Laptop, 15.6" HD LED Display, Intel Dual-Core Processor, Intel UHD Graphics, 16GB DDR4 RAM, 1TB SSD,
               Ethernet Port, USB Type-C, Long Battery Life, Windows 11'
              price={499}
             image="/images/laptop.webp" 
             rating={4}
              />
            </div>
        </div>
    </div>
    </HomeLayout>
    </>
    
  )
}

export default Home