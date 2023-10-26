import { useState, useEffect } from "react";

const useQuotes = () => {
  const [quote, setQuote] = useState([]);
  const [quoteError, setQuoteError] = useState("");
  const [quoteIsLoading, setQuoteLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setQuoteLoading(true);

    fetch("https://www.affirmations.dev/")
      .then((res) => {
        console.log(res);
        setQuote(res.affirmation);
        setQuoteLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setQuoteError(err.message);
        setQuoteLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { quote, quoteError, quoteIsLoading };
};

export default useQuotes;
