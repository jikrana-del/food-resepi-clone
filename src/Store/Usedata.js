import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { dataAction } from './DataSlice';
import { AddDeleteAction } from './AddDeleteSlice';



function generatePrice(id) {
    let sum = 0;
    for (let i = 0; i < id.length; i++) {
        sum += id.charCodeAt(i);
    }
    return 100 + (sum % 200); // Always between 100-299
}
function Usedata() {
   
    const query = useSelector(store => store.data.SearchName);
 
    const dispatch = useDispatch()
    const [loding, setLoding] = useState(false);
    const prevQuery = useRef(null)
    useEffect(() => {
        if(prevQuery.current === query) return;
        const GetData = async () => {
                setLoding(true);
            const Data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const jsonData = await Data.json();
            const meals = jsonData.meals || [];
            const prices = meals.map(meal => generatePrice(meal.idMeal));
            dispatch(dataAction.addData(meals));
            dispatch(AddDeleteAction.PriceValue(prices))            
            setLoding(false)
            prevQuery.current = query;
        }
        GetData()
       
    }, [query,dispatch])
    return { loding };
}
export default Usedata

