import { useEffect, useState } from "react";
import axios from "axios";

const useAxiosFetch = (dataurl) =>{

    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isloading, setIsLoading] = useState(false) ;

    useEffect(() => {
        const isMounted = true;
        const source  = axios.CancelToken.source();

        const fetchdata = async (url) => {
            try{
                setIsLoading(true)
                const response = await axios.get(url,{
                    cancelToken : source.token
                });
                if( response && isMounted){
                    setData(response.data);
                    setFetchError(null)
                }
            }catch(err){
                if(isMounted) setFetchError(err.message)
                setData([])
            }finally{
                isMounted &&  setTimeout(()=>{setIsLoading(false)},2000)
            }
        }
      
        fetchdata(dataurl) ;

        const cleanup = () =>{
            console.log("cleanup function is running");
            isMounted=false;
            source.cancel() ;
        }
    
      return (cleanup) 
    }, [dataurl])

    return {data, fetchError, isloading}
    
}

export default useAxiosFetch;