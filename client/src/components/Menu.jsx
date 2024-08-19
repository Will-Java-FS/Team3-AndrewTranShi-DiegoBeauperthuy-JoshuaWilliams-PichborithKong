import { useEffect, useState } from 'react'
import axios from 'axios';


export default function Menu() {
    const [menuItems, setMenuItems] = useState([]);



    function getItemsFromAPI() {
        axios.get('http://localhost:8080/api/menus')
        .then(response => {
            console.log(response.data);
            setMenuItems(response.data);
        })
        .catch(e => {
            console.error('Error fetching data:', error);
        })
    }


    useEffect(() => {
        getItemsFromAPI();
    }, [])


    const groupItemsByType = (items) => {
        return items.reduce((acc, item) => {
            if (!acc[item.type]) {
                acc[item.type] = [];
            }
            acc[item.type].push(item);
            return acc;
        }, {});
    };

    const groupedItems = groupItemsByType(menuItems)

    return (
        <>
            <h1>Menu</h1><br></br>
            <div>
                {Object.keys(groupedItems).map((type, index) => (
                    <div key={index} className="mb-8 ">
                        <h2 className="text-center mb-4 text-2xl">{type}</h2>
                        <div className="flex flex-wrap justify-center">
                            {groupedItems[type].map((item, idx) => (
                                <div className="bg-white text-black rounded-lg p-4 shadow-md m-4 w-64" key={idx}>
                                    <h2 className="text-xl"><b>{item.name}</b></h2>
                                    <ul>
                                        <li>{item.price}</li>
                                        <li>{item.description}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
