import React, { useEffect, useState } from 'react';
import './scroll.css';

export default function ScrollIndicator() {
    const [products, setProducts] = useState([]);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://dummyjson.com/products?limit=100");
                const data = await response.json();
                if (data && data.products && data.products.length) {
                    setProducts(data.products);
                }
            } catch (error) {
                console.log("Error Occurred: " + error);
            }
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id='ScrollIndicatorContainer'>
                <h2>Scroll Indicator</h2>
                <div className='scrollBar'>
                    <div className='scrollIndicator' style={{ width: `${scrollPercentage}%` }}></div>
                </div>
            </div>
            <div>
                {products.map((product, index) => (
                    <p key={index}>{product.title}</p>
                ))}
            </div>
        </>
    );
}
