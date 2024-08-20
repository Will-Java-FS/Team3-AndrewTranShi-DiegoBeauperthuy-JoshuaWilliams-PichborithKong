import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);


    function getItemsFromAPI() {
        axios.get('http://localhost:8080/api/menus')
        .then(response => {
            console.log('Getting menu items: ', response.data);
            setMenuItems(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(() => {
        getItemsFromAPI();
    }, []);

    const groupItemsByType = (items) => {
        return items.reduce((acc, item) => {
            if (!acc[item.type]) {
                acc[item.type] = [];
            }
            acc[item.type].push(item);
            return acc;
        }, {});
    };

    const handleItemClick = (item) => {
        setSelectedItems(prevSelectedItems => {
            if (prevSelectedItems.includes(item)) {
                return prevSelectedItems.filter(i => i !== item);
            } else {
                return [...prevSelectedItems, item];
            }
        });
    };

    const orderCurrentItemsSelected = () => {
        selectedItems.forEach(async (item) => {
            try {
                const response = await axios.post('http://localhost:8080/api/orders', {
                    "user_id": 8,  // TODO Replace with user Id
                    "menu_id": item.menuId
                });
                console.log('Creating order response: ', response.data);
            } catch (e) {
                console.error("Error in post request", e);
            }
        })
        
    }

    const groupedItems = groupItemsByType(menuItems);

    return (
        <>
            <h1>Menu</h1><br />
            <div>
                {Object.keys(groupedItems).map((type, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-center mb-4 text-3xl">{type}</h2>
                        <div className="flex flex-wrap justify-center">
                            {groupedItems[type].map((item, idx) => (
                                <div
                                className={`bg-white text-black rounded-lg p-4 shadow-md m-1 w-64 cursor-pointer ${selectedItems.includes(item) ? 'bg-blue-200' : ''}`}
                                key={idx}
                                onClick={() => handleItemClick(item)}
                                >
                                <div className="w-full h-32">
                                    <img src={`https://upload.wikimedia.org/wikipedia/commons/d/d8/Pizza_slice_icon.png`} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl"><b>{item.name}</b></h2>
                                    <ul className='text-left text-sm'>
                                        <li>{item.description}</li>
                                        <li>$ {item.price}</li>
                                    </ul>
                                </div>
                            </div>                            
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button type='button' className="bg-green-700 text-white p-2 rounded" onClick={() => orderCurrentItemsSelected()}>Order Selected Items</button>
        </>
    );
}
