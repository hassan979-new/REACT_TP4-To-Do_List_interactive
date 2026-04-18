import { useState } from "react";

function TodoItem({tache, chargerEtat, supprimerTache, modifierTache, editId, setEditId}){

  const [newText, setNewText] = useState(tache.texte);
  const isEditing = editId === tache.id;


    return(
        <li>
            <input
            type="checkbox"
            checked={tache.terminee}
            onChange={()=>chargerEtat(tache.id)}
            />

            {isEditing ? (
                <>
                <input
                value={newText}
                onChange={(e)=> setNewText(e.target.value)}
                />
                <button className="primary" onClick={()=>modifierTache(tache.id, newText)}>
                    saved
                </button>
                </>
            ):(
                <>
                {tache.texte}
                <button onClick={() => setEditId(tache.id)}>Edit</button>
                </>
            )}

            <span className={tache.terminee ? "completed" : ""}>
                {tache.texte}
            </span>

            <button className="danger" onClick={()=> supprimerTache(tache.id)}>X</button>

        </li>


    );
}

export default TodoItem;