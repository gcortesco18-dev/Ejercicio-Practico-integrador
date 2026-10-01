import { useState } from "react";
import ItemLista from "./components/ItemLista";

function App() {
  const [texto, setTexto] = useState("");   // lo que se escribe en el input
  const [items, setItems] = useState([]);   // la lista (la pizarra)

  const agregar = (e) => {
    e.preventDefault();                      // evita que la página se recargue
    const limpio = texto.trim();
    if (limpio === "") return;               // no agrega vacíos
    setItems([...items, { id: Date.now(), texto: limpio }]);
    setTexto("");                            // limpia el input
  };

  const borrar = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-indigo-600 py-6 text-center shadow">
        <h1 className="text-3xl font-bold text-white">Mi Lista</h1>
      </header>

      <main className="mx-auto max-w-md px-4 py-8">
        {/* FORMULARIO */}
        <form onSubmit={agregar} className="mb-6 flex gap-2">
          <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe algo..."
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
          >
            Agregar
          </button>
        </form>

        {/* LISTA */}
        <ul className="space-y-3">
          {items.map((item) => (
            <ItemLista
              key={item.id}
              texto={item.texto}
              onBorrar={() => borrar(item.id)}
            />
          ))}
        </ul>

        {items.length === 0 && (
          <p className="text-center text-gray-500">Aún no hay elementos.</p>
        )}
      </main>
    </div>
  );
}

export default App;