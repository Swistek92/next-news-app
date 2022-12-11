import React from "react";

import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../responce.json";

const page = async () => {
  //fetch the news data

  console.log(fetchNews);
  const news: NewsResponce =
    response || (await fetchNews(categories.join(",")));
  console.log(news);

  return (
    <div>
      {" "}
      <NewsList news={news} />
    </div>
  );
};

export default page;
