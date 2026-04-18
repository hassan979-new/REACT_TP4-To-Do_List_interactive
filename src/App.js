import { useState } from "react";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css'

function App(){
  const [taches, setTaches] = useState(() => {
    const saved = localStorage.getItem("taches");
    return saved ? JSON.parse(saved) : [];
  });

  const [editId, setEditId] = useState(null);

  const [filtre, setFiltre] = useState("all");

  useEffect(() => {
  localStorage.setItem("taches", JSON.stringify(taches));
  }, [taches]);

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte,
      terminee: false
    };
    setTaches([...taches, nouvelleTache])
  };

  const changerEtat = (id) =>{
    setTaches(
      taches.map((t)=>
        t.id === id ? {...t, terminee: !t.terminee} : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  const modifierTache = (id, nouveauTexte) => {
  setTaches(
    taches.map((t) =>
      t.id === id ? { ...t, texte: nouveauTexte } : t
    )
  );
  setEditId(null);
};

const tachesFiltrees = taches.filter((t) => {
  if (filtre === "done") return t.terminee;
  if (filtre === "active") return !t.terminee;
  return true;
});

  return (
    <div className="app-container">
      <h1>To-Do List Interactive</h1>
      <TodoForm ajouterTache={ajouterTache} />
      <TodoList
        taches={tachesFiltrees}
        changerEtat={changerEtat}
        supprimerTache={supprimerTache}
        modifierTache={modifierTache}
        editId={editId}
        setEditId={setEditId}
      />

      <div className="filter-buttons">
      <button className={filtre === "all" ? "primary" : "secondary"} onClick={() => setFiltre("all")}>
        All
      </button>

      <button className={filtre === "active" ? "primary" : "secondary"} onClick={() => setFiltre("active")}>
        Active
      </button>

      <button className={filtre === "done" ? "primary" : "secondary"} onClick={() => setFiltre("done")}>
        Done
      </button>
      </div>
    </div>
    
  );
}

export default App;