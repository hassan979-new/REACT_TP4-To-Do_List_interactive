import TodoItem from "./TodoItem";

function TodoList({taches, changerEtat, supprimerTache, modifierTache, editId, setEditId}){
    return (
        <ul>
            {taches.map((tache)=>(
                <TodoItem
                key={tache.id}
                tache={tache}
                chargerEtat={changerEtat}
                supprimerTache={supprimerTache}
                modifierTache={modifierTache}
                editId={editId}
                setEditId={setEditId}
                />
            ))}
        </ul>
    );
}

export default TodoList;