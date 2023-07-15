import { useState, useEffect } from "react";
import axios from "axios";
import { set } from "react-native-reanimated";

const { RAPID_API_KEY } = '@env'

const rapidapiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isloading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': 'bdf6acb187msh5e1efe087f34c34p19dc3fjsnae368f9898d3',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
    
    const fetchData = async () => {
        setisLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data);
            setisLoading(false);
        } catch (error) {
            setError(error);
            alert("There was an error fetching data.");
        }
        finally {
            setisLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setisLoading(true);
        fetchData();
    }

    return { data, isloading, error, refetch };
}

export default useFetch;