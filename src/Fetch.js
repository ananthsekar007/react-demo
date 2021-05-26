import { StepConnector } from "@material-ui/core";
import React, {useState} from "react";
import axios from "axios";
export default function Fetch() {

    const [data, setData] = useState({});

    const iterateData = () => {
        for (let [key, value] of Object.entries(data)) {
            console.log(`${key}: ${value}`);
        }
    }

    const dogBreed =async() => {
        axios.get("https://dog.ceo/api/breeds/list/all")
        .then((response) => {
            setData(response.data.message);
        })
        .then(() => {
            iterateData();
        })

    }

    return(
        <div>
            {
                Object.keys(data).map((key, index) => {
                    return(
                        <div>
                        <p>key: {key}</p>
                        <p>value: {data[key]}</p>
                        </div>
                    )
                })
            }
            <button onClick={dogBreed}> Click me </button>
        </div>
    )
}
