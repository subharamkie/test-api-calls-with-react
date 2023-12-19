import { useEffect,useState } from "react";

interface People {
    name:string;
    height:string;
	mass:string;
	hair_color:string;
	skin_color: string;
    eye_color:string;
	birth_year:string,
	gender:string;
	homeworld:string;
	films: string[];
	species:[];
	vehicles:string[];
	starships:string[];
    created:string;
    edited:string;
    url:string;
			
}
export const NameContainer:React.FC = () =>{
    const [responseData,setResponseData] = useState<People[]>([]);
    const labelStr = "First Character Name";
    useEffect(()=> {
        async function getPeople (){
            const response = await fetch('https://swapi.dev/api/people');
            const result = await response.json();
            setResponseData(result.results);
        }
        getPeople()
    },[])
    if (!responseData.length) return <h3>Loading...</h3>;

    return(
        <div>
            <span >{labelStr}:</span>
            {<span>{responseData[0].name}</span>}
        </div>
    );
}