import { useState, useEffect } from "react";
import axios from "axios";
import { set } from "react-native-reanimated";

const { RAPID_API_KEY } = '@env'

const rapidapiKey = RAPID_API_KEY;

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isloading, setisLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': rapidapiKey,
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