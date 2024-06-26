import React from 'react';

import { client } from '../lib/client';
import { Product, HeroBanner, LastProject } from '../components';

const Home = ({ products, bannerData }) => (
  <div>

    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />

    <div className="products-heading">
      <h2>Last project </h2>
      <p>speaker There are many variations passages</p>
      <LastProject/>
    </div>

    <div className="products-heading">
      <h2>Our products </h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;