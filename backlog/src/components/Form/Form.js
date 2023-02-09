import { useState } from "react";
import { useDispatch } from "react-redux";

/*data*/
import { games } from "../../data/games";

/*helpers*/
import { filterGamesByTitle, filterGamesByPlatform } from "../../helpers/filteredGames"

/*css*/
import "./Form.css";

/*functie Form*/
const Form = () => {
    const [inputs, setInputs] = useState([
        {
            id: "title",
            value: "",
            label: "Title",
            filter: filterGamesByTitle,
        },
        {
            id: "platforms",
            value: "",
            label: "Platform",
            filter: filterGamesByPlatform,
        }
    ]);

    let dispatch = useDispatch()

    const onInputChanged = (event) => {
        let copy = [...inputs];
        copy.map(input => {
            if (input.id === event.target.id) {
                input.value = event.target.value;
            }
            return input;
        })
        setInputs(copy);
    }

    const inputsToBeRendered = inputs.map(objectFromStateArray => {
        return (
            <div className="Form__wrapper">
                <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                <input className="form__input" onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value}></input>
            </div>
        )
    })

    const submit = (event) => {
        event.preventDefault();
        let result = [...games];
        inputs.forEach(input => {
            result = input.filter(input.value, games);
        });
        dispatch({
            type: "FILTEREDGAMES",
            payload: result
        })
    }

    return (
        <form onSubmit={submit} className="form">
            <div className="form__InputsWrapper">
                {inputsToBeRendered} 
            </div>
            <button onClick={submit} className="form__search">Zoeken</button>
        </form>
    )
}

export default Form;