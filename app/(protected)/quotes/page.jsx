"use client";
import QuotesList from "@/components/QuotesList";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  
  useEffect(() => {
    const fetchquote = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setQuotes(data.quotes);
      } catch (error) {
        console.log("error fetching quotes", error);
      } finally {
        setIsloading(false);
      }
    };
    fetchquote();
  }, []);
  if (isLoading) {
    return <div>Loading.......</div>;
  }
  return (
    <div>
    

      <QuotesList quotes={quotes} />
    </div>
  );
};

export default Dashboard;
