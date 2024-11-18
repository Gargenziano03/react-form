import { useState } from "react";
const articoliBlog = [
    "Novità iOS 17",
    "Ottimizzare il PC",
    "Futuro dell'IA",
    "App per Smart Working",
    "Tendenze Tech 2024",
    "Sicurezza Online",
    "Gadget dell'Anno",
    "Smart Home Facile",
    "Proteggi i Dati",
    "Impatto del 5G"
];
export default function AppMain() {

    const [articoli, setArticoli] = useState(articoliBlog)
    const [newArticoli, setNewArticoli] = useState('')
    function addArticolo(e) {
        e.preventDefault()
        setArticoli([
            newArticoli,
            ...articoli
        ])

        setNewArticoli('')
    }
    return (
        <main>
            <div className="container">
                <form onSubmit={addArticolo}>
                    <label htmlFor="articolo" className="form-label"></label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                            placeholder="Titolo articolo dell'blog"
                            aria-label="Titolo articolo dell'blog"
                            aria-describedby="button-addon2" value={newArticoli}
                            onChange={e => setNewArticoli(e.target.value)}
                        />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
                    </div>
                </form>

                <ul className="list-articoli">
                    {articoli.map((articolo, index) => <li key={index} className="list-articoli-item">{articolo}</li>)}
                </ul>
            </div>
        </main>
    )
}