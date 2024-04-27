import React, { useState } from 'react';

function ShoppingList() {
  const [items, setItems] = useState([{ id: 1, name: 'Apel', quantity: 1 }, { id: 2, name: 'Roti', quantity: 1 }, { id: 3, name: 'Susu', quantity: 1 }]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      const newItemObject = { id: items.length + 1, name: newItem, quantity: 1 };
      setItems([...items, newItemObject]);
      setNewItem('');
    }
  };

  const increaseQuantity = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(newItems);
  };

  const decreaseQuantity = (id) => {
    const newItems = items.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  return (
       <div className="bg-gray-400 min-h-screen flex items-center justify-center p-4"> 
       <div className="bg-black text-white p-4 w-full max-w-1px rounded">
        <h1 className="text-2xl font-bold mb-4">Daftar Belanja</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            className="border border-gray-300 p-2 mr-2 rounded flex-grow text-black" 
            placeholder="Tambah item baru"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addItem}
          >
            Tambah
          </button>
        </div>
        <ul className="list-none">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-2">
              <span className="flex-1">{item.name}</span>
              <button onClick={() => decreaseQuantity(item.id)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded">-</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">+</button>
              <button onClick={() => deleteItem(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
            </li>
          ))}
        </ul>
        <div className="text-right font-bold mt-4">Jumlah Total Barang: {totalItems}</div>
      </div>
    </div>
  );
}

export default ShoppingList;