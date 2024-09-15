import ModalAgregar from "../../../components/ModalAgregar";
import ModalEliminar from "../../../components/ModalEliminar";
import ModalTraducir from "../../../components/ModalTraducir";
import ModalError from "../../../components/ModalError";

import { useState } from "react";

const Buttons = () => {
    const [showModalAgregar, setShowModalAgregar] = useState(false);
    const [showModalEliminar, setShowModalEliminar] = useState(false);
    const [showModalTraducir, setShowModalTraducir] = useState(false);
    const [showModalError, setShowModalError] = useState(false);

    const [entries, setEntries] = useState([]);

    const addEntry = (entry) => {
        setEntries([...entries, entry]);
    };

    const removeEntry = (wordToRemove) => {
        const updatedEntries = entries.filter(entry =>
            !(entry.spanish === wordToRemove || entry.portuguese === wordToRemove || entry.english === wordToRemove)
        );
        if (updatedEntries.length === entries.length) {
            setShowModalError(true);
        } else {
            setEntries(updatedEntries);
            console.log(`Entrada(s) con la palabra "${wordToRemove}" eliminada(s).`);
        }
        console.log(updatedEntries);
    };

    return (
        <div className="container">
            <ModalAgregar
                visible={showModalAgregar}
                onClose={() => setShowModalAgregar(false)}
                onAdd={addEntry}
            />
            <ModalEliminar
                visible={showModalEliminar}
                onClose={() => setShowModalEliminar(false)}
                onRemove={removeEntry}
                values={entries}
            />
            <ModalTraducir
                visible={showModalTraducir}
                onClose={() => setShowModalTraducir(false)}
                entries={entries}
            />
            <ModalError
                visible={showModalError}
                message="Palabra no encontrada"
                onClose={() => setShowModalError(false)}
            />
            <div>
                <div className="content-center">
                    <button className="space" onClick={() => setShowModalAgregar(true)}>
                        Agregar Palabra
                    </button>
                    <button className="space" onClick={() => setShowModalEliminar(true)}>
                        Eliminar Palabra
                    </button>
                </div>
                <div className="content-center" onClick={() => setShowModalTraducir(true)}>
                    <button>
                        Traducir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Buttons;