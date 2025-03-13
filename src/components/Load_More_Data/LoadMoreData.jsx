import React, { useEffect, useState } from 'react';
import "./loadMoreData.css"

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function getProducts() {
            try {
                setLoading(true);
                const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
                const data = await response.json();
                if (data && data.products && data.products.length) {
                    setProducts((prevProducts) => [...prevProducts, ...data.products]);
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, [count]);

    return (
        <div id="LoadMoreData">
            {loading && "Loading Products....."}
            {products.length > 0 && products.map((item,index) => (
                <div key={index} className="item"><img src={item.thumbnail} alt={item.id} /><p>{item.title}</p></div>
            ))}
            {!loading && products.length > 0 && (
                <button   disabled={products.length >= 100} onClick={() => setCount(prevCount => prevCount + 1)}>{products.length >= 100?"You have fetched 100 Products":"Load More"}</button>
            )}
        </div>
    );
}