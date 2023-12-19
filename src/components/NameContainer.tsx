import { useEffect,useState } from "react";
import { Name } from "./Name";
import { PeopleData } from "../mock_api/data/people";

interface PeopleName extends PeopleData {
    name:string;
}
    
export const NameContainer:React.FC = () =>{
    const [responseData,setResponseData] = useState<PeopleName[]>([]);
    const labelStr = "First Character Name";
    useEffect(()=> {
        async function getPeople (){
            const response = await fetch('https://swapi.dev/api/people/');
            const result = await response.json();
            setResponseData(result.results);
        }
        getPeople()
    },[])
    if (!responseData.length) return <h3>Loading...</h3>;

    return(
        <div>
            <span >{labelStr}:</span>
            <Name name={responseData[0].name}/>
        </div>
    );
}