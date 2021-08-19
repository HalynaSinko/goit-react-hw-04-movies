import { useState, useEffect } from "react";

import PageHeading from "../components/PageHeading";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {}, []);
  return <PageHeading text="Trending today" />;
}
