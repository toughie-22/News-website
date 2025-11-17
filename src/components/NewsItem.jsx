import React from "react";
// Use a placeholder image if urlToImage is null
import placeholder from "../assets/hero-bg.jpg";

function NewsItem({ title, description, imageUrl, newsUrl, date }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="news-item">
      <img src={imageUrl || placeholder} alt={title} className="item-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">
          {description
            ? description.substring(0, 70) + "..."
            : "No description available..."}
        </p>
        <p className="card-date">{formattedDate}</p>
        <a
          href={newsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more-card-btn"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
