interface NameProp{
    name:string;
}
export const Name:React.FC<NameProp> =({name}) =>{
    return(
        <>
            {<span>{name}</span>}
        </>
    );
}