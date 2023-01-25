// import axios from "axios";
import { useContext, useEffect, useState, } from "react";
import { Context, } from "../Context/StateContext";
import { getMajorScaleFirebase, } from "../Server/firebase";
const useData = () => {
    const [data, setData,] = useState([],);
    const { getMusicData, } = useContext(Context,);

    const getData = async () => {
        try {
            // const res = await axios("http://localhost:3000/" + collection);
            const res = await getMajorScaleFirebase();
      
            setData(res,);
            getMusicData(res,);
        } catch (error) {
            console.log(error,);
        }
    };
    useEffect(() => {
        console.log("%c Fetching data! ", "background: #222; color: #C97064",);
        getData();
    }, [],);

    return { data, };
};

export default useData;
