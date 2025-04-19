import { useEffect, useState } from "react"

const localCache = {};

export const useFetch = (url) => {

    const [state, setState] = useState({
        
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
      getFecth()
    }, [url])  //CADA VEZ QUE CAMBIE EL URL VUELVE A EJECUTAR LA FUNCION GETFECH

    const setLoadingState = ()=>{
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }
    

    const getFecth = async()=>{

        if(localCache[url]){
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }
        setLoadingState();
        const resp = await fetch(url);

        await new Promise( resolve => setTimeout(resolve, 1000))
        if(!resp.ok){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    messge: resp.statusText
                }
            })
            return;
        }
        const data = await resp.json(); //SIEMPRE CONVERTIR LA RESPUESTA O PASARLA POR JSON
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })  

        localCache[url] = data;
    }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error
  }
}
