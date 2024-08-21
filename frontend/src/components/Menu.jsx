import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

export default function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const navigate = useNavigate();


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

    const orderCurrentItemsSelected = async () => {
        if (selectedItems.length == 0) {
            alert('No items selected');
        }
        else {

            const requests = selectedItems.map(item => 
                axios.post('http://localhost:8080/api/orders', {
                    "user_id": 8,  // TODO Replace with user Id
                    "menu_id": item.menuId
                })
            );
    
            try {
                const responses = await Promise.all(requests);
                responses.forEach(response => console.log('Creating order response: ', response.data));
                navigate('/myorder');
            } catch (e) {
                console.error("Error in post request", e);
            }
        }
    }

    useEffect(() => {
        getItemsFromAPI();
    }, []);

    useEffect(() => {
        console.log('Selected items:', selectedItems);
    }, [selectedItems]);

    const groupedItems = groupItemsByType(menuItems);

    return (
        <>
            <h1>Menu</h1><br />
            <div>
                {Object.keys(groupedItems).map((type, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-center mb-4 text-3xl">{type}</h2>
                        <div className="flex flex-wrap justify-center">
                            {groupedItems[type].map((item, i) => (
                                <div
                                className='bg-white text-black rounded-lg shadow-md m-1 w-48 cursor-pointer'
                                style={{ background: selectedItems.includes(item) ? 'lightgreen' : 'white'}}
                                key={i}
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