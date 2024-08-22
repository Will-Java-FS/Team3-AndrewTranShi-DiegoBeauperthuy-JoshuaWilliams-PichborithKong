import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Order() {
    const [menuItems, setMenuItems] = useState([]);
    const [orders, setOrders] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0.0);
    const navigate = useNavigate();


    const getOrdersFromApi = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/orders/user/${localStorage.getItem("userId")}`);
            setOrders(response.data);
            calculateTotalPrice(response.data);
        } catch (error) {
            console.error('Error getting current user order: ', error);
        }
    };

    const getItemsFromAPI = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/menus");
            setMenuItems(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };


    const calculateTotalPrice = (orders) => {
        const total = orders.reduce((sum, order) => sum + parseFloat(order[3]), 0);
        setTotalPrice(total.toFixed(2));
    } 

    function thankYouPage() {
        navigate("/thanks")
    }

    useEffect(() => {
        const fetchData = async () => {
            await getOrdersFromApi();
            await getItemsFromAPI();
        };

        fetchData();
    }, []);


    return (<>
            <h1 className="text-5xl text-center m-8">My Order</h1>
            <div className='flex flex-wrap items-center justify-center'>
            {orders.length === 0 ? (
            <p>No Orders found yet</p>
            ) : (
                orders.map((order, i) => {
                    const menuItem = menuItems.find(item => item.menuId === order[0]);
                    return (
                        <div key={i} className='bg-white text-black rounded-lg shadow-md m-2 w-64'>
                            <div className='w-full h-32'>
                                <img
                                    src={menuItem ? menuItem.imageUrl : 'default-image-url'}
                                    alt={order[1]}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className='p-2'>
                                <h2 className='text-xl'><b>Item: {order[1]}</b></h2>
                                <ul className='text-left'>
                                    <li>{order[4]}</li>
                                    <li>$ {order[3]}</li>
                                    <li>Time Ordered: {order[6].split('T')[1].split('.')[0].slice(0, 5)}</li>
                                </ul>
                            </div>
                        </div>
                    );
                })
            )}

            </div><br></br>
            <div className='bg-green-700 text-white p-2 rounded flex flex-col items-center'>
            <h2>Total Price</h2>
            <p>$ {totalPrice}</p>
            </div>
            <div className="flex items-center justify-center m-4 mb-8">
            <button type='button' className='bg-green-700 text-white p-4 rounded'
            onClick={thankYouPage}
            >Checkout</button>
            </div>
        </>)
}