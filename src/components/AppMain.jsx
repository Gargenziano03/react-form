import { useState } from "react";
export default function AppMain() {
    const Articolo = [
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
    return (
        <main>
            <div className="container">
                <form>
                    <label htmlFor="articolo" className="form-label"></label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Titolo articolo dell'blog"
                            aria-label="Titolo articolo dell'blog" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>
                </form>
            </div>
        </main>
    )
}