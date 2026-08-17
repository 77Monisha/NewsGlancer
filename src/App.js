import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  // NewsAPI's free plan only serves top-headlines for a handful of countries;
  // 'in' now returns totalResults: 0, so default to 'us'.
  const country = process.env.REACT_APP_NEWS_COUNTRY || "us";

  const newsFor = (category) => (
    <News
      apiKey={apiKey}
      key={category}
      pageSize={pageSize}
      country={country}
      category={category}
    />
  );

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={newsFor("general")} />
          {categories.map((category) => (
            <Route
              key={category}
              path={`/${category}`}
              element={newsFor(category)}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
