import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const res =
          await axiosInstance.get(url);

        setData(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;