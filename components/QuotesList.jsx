import React from "react";
import QuotesCard from "./QuotesCard";

const QuotesList = ({ quotes }) => {
  return (
    <div className="grid grid-cols-1">
      {quotes.map((quoteItem) => (
        <QuotesCard key={quoteItem.id} quotes={quoteItem} />
      ))}
    </div>
  );
};

export default QuotesList;
