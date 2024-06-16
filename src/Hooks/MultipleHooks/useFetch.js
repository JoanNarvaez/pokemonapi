import { useEffect, useState } from "react"

const UseFetch =(url)=>{

const [state,setState]=useState(

    {
        data:null,
        isLoading: true,
        hasError:false,
        errorMessage: null,
    }
)
useEffect(()=>{
    getFetch();
},[url]);

const getFetch= async ()=>{
    const resp =await fetch(url);
    // const data=resp.json();

    // console.log({data})

if(!resp.ok){
    setState({
        data:null,
        isLoading: false,
        hasError:true,
        errorMessage: null,
});
return;

}
    const data = await resp.json();
    setState({
        data:data,
        isLoading: false,
        hasError:false,
        errorMessage: null,

    })
}



return{
    data:state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
}
}
export default UseFetch;