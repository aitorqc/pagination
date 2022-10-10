import { useState, useEffect } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=20";

export default function useFetch() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url);
        const dataRes = await response.json();
        setData(paginate(dataRes));
        setLoading(false);
    }

    useEffect(() => {
        getProducts()
    }, []);

    return { loading, data }
}
