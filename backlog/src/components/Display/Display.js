import { useSelector } from "react-redux";
import "./Display.css";

const Display = () => {

    const filteredGames = useSelector(state => { return state });

    const titlesToBeRendered = filteredGames.map(game => {
        return (
            <section className="display">
                <h2 className="">{game.title}</h2>
            </section>
        )
    })
    return (
        <>
            {titlesToBeRendered}
        </>
    )
}

export default Display;