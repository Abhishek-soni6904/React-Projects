import React, { useEffect, useState } from "react";
import "./slider.css";

export default function Slider({
  url = "https://picsum.photos/v2/list",
  limit = 10,
  page = 1,
}) {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [limit, page, url]);

  return (
    <div id="sliderWrapper">
      {loading && <p>Loading images...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <div className="imageWrapper">
        {!loading &&
          !error &&
          images.length > 0 &&
          images.map((image, imageIndex) => (
            <img
              key={image.id}
              alt={`sliderImg${image.id}`}
              src={image.download_url}
              className={imageIndex === index ? "activeImage" : "inactiveImage"}
            />
          ))}
      </div>
      {!loading && !error && images.length > 0 && (
        <div className="navButtons">
          <button onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}>
            ❮
          </button>
          <button onClick={() => setIndex((prev) => (prev + 1) % images.length)}>
            ❯
          </button>
        </div>
      )}
      {!loading && !error && images.length > 0 && (
        <div className="smallButtons">
          {images.map((image, i) => (
            <button
              key={image.id}
              className={index === i ? "active" : "inactive"}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}