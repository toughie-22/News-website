// src/components/NewsList.jsx
import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

// Receive searchQuery as a prop
function NewsList({ apiKey, country, category, searchQuery }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 9; // Number of articles per page

  // Function to fetch articles from Gnews API
  const fetchNews = async (pageNumber = 1) => {
    if (pageNumber === 1) setLoading(true);

    let url = `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en&max=${pageSize}&country=${country}`;

    if (searchQuery) {
      url = `https://gnews.io/api/v4/search?q=${searchQuery}&token=${apiKey}&lang=en&max=${pageSize}`;
    }

    // Gnews API uses offset for pagination
    const offset = (pageNumber - 1) * pageSize;
    url += `&offset=${offset}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data.articles) {
        throw new Error(data.message || "Failed to fetch news");
      }

      setArticles((prevArticles) =>
        pageNumber === 1 ? data.articles : [...prevArticles, ...data.articles]
      );
      setTotalResults(data.totalArticles || data.totalResults || 0);
      setPage(pageNumber);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setArticles([]); // Clear articles when filters change
    fetchNews(1);
  }, [country, category, searchQuery]);

  const fetchMoreData = () => {
    fetchNews(page + 1);
  };

  if (loading) return <Spinner />;

  if (articles.length === 0 && !loading) {
    const message = searchQuery
      ? `No results found for "${searchQuery}". Please try a different search term.`
      : `No news articles found.`;

    return (
      <div
        className="container"
        style={{
          textAlign: "center",
          padding: "50px",
          fontSize: "1.2rem",
          color: "#888",
        }}
      >
        {message}
      </div>
    );
  }

  return (
    <div className="container">
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <Spinner />
          </div>
        }
        endMessage={
          <div style={{ textAlign: "center", padding: "20px" }}>
            You have reached the end of the news.
          </div>
        }
      >
        <div className="row">
          {articles.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={item.url + index}>
              <NewsItem
                title={item.title}
                description={item.description}
                imageUrl={item.image || null}
                newsUrl={item.url}
                date={item.publishedAt}
                sourceName={item.source.name}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default NewsList;
