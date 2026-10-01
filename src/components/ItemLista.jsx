function ItemLista({ texto, onBorrar }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow">
      <span className="text-gray-800">{texto}</span>
      <button
        onClick={onBorrar}
        className="rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white hover:bg-red-600"
      >
        Borrar
      </button>
    </li>
  );
}

export default ItemLista;