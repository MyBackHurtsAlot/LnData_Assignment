import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, page) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [url, page]);

    // console.log(data);
    return { data, error };
};

export default useFetch;
