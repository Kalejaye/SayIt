const QuotesCard = ({ quotes = {} }) => {
  const { author = "Unknown author", quote = "" } = quotes;

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold">{author}</h2>
      <p className="text-gray-700">{quote}</p>
    </div>
  );
};

export default QuotesCard;
