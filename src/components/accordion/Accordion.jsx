import React, { useState } from "react";
import data from "./data";
import "./accordion.css";

const AccordionItem = React.memo(
  ({ id, title, content, selected, handleSection }) => {
    return (
      <div onClick={() => handleSection(id)} className="item">
        <h3 className="title">{title}</h3>
        {selected.includes(id) && <p className="content">{content}</p>}
      </div>
    );
  }
);

export default function Accordion() {
  const [selected, setSelected] = useState([]);
  const [mode, setMode] = useState(false);

  const handleSection = (id) => {
    setSelected((prevSelected) =>
      mode
        ? prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id)
          : [...prevSelected, id]
        : prevSelected.includes(id)
        ? []
        : [id]
    );
  };

  return (
    <section className="wrapper" id="accordionWrapper">
      <div id="accordion">
        <button onClick={() => setMode(!mode)}>
          {mode ? "Multi" : "Single"} Select
        </button>
        {data.map((accordion) => (
          <AccordionItem
            key={accordion.id}
            id={accordion.id}
            title={accordion.title}
            content={accordion.content}
            selected={selected}
            handleSection={handleSection}
          />
        ))}
      </div>
    </section>
  );
}
