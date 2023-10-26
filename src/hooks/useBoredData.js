import { useState, useEffect } from "react";
import boredApiClient from "../services/bored-api-client";

const useBoredData = (params, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);

      boredApiClient
        .get("", {
          signal: controller.signal,
          params: params,
        })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name === "CanceledError") return;
          setError(err.message);
          setLoading(false);
        });
      return () => controller.abort(); //kill the call in the cleanup
    },
    deps ? [...deps] : [] //only call when deps changes or when moounts
  );

  return { data, error, isLoading };
};

export default useBoredData;
