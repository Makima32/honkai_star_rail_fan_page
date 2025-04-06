import React, { useEffect, useState } from "react";
import "./rssReader.css";

function RssReader() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch("/Rss/newcharacters.xml");
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");

        const itemsArray = Array.from(xml.querySelectorAll("item")).map((item) => ({
          title: item.querySelector("title")?.textContent,
          description: item.querySelector("description")?.textContent,
          link: item.querySelector("link")?.textContent,
          image: item.querySelector("enclosure")?.getAttribute("url"),
        }));

        setItems(itemsArray);
      } catch (error) {
        console.error("❌ Error al leer el RSS:", error);
      }
    };

    fetchRSS();
  }, []);

  return (
    <div className="rss-characters-container">
      <h2 className="rss-characters-title">📡 Nuevos Personajes (RSS)</h2>
      <div className="rss-characters-list">
        {items.map((item, index) => {
          const descriptionParts = item.description?.split("|").map(part => part.trim()) || [];
          const infoLine = descriptionParts.slice(0, 2).join(" | ");
          const loreLine = descriptionParts.slice(2).join(" ");

          return (
            <a key={index} href={item.link} className="rss-character-card" target="_blank" rel="noreferrer" id={`item-rss-${index}`}>
              <img src={item.image} alt={item.title} className="rss-character-image" />
              <div className="rss-character-info">
                <h3>{item.title}</h3>
                <p className="rss-character-detail">{infoLine}</p>
                <p className="rss-character-lore">{loreLine}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default RssReader;
