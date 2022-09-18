import { ChangeEvent } from "react";

type propsType = {
    value:string;
   
    handleClick: () => void;
    handleInput: (e:ChangeEvent<HTMLInputElement>) => void;

}

export default function SearchBar({
    handleClick,
    value,
    handleInput,
 }: propsType) {

    return (
        <section aria-label='search-section'>
            <input type="search"
                   placeholder='Escribe el nombre de la radio'
                   value={value}
                   onChange={handleInput}/>
            <button onClick={handleClick}>Buscar</button>
        </section>
    )
}
