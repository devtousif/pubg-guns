import React, { useEffect, useState } from 'react';
import Weapon from '../Weapon/Weapon';
import Cost from '../Cart/Cost';
import './Weapons.css'

const Weapons = () => {
    const [weapons, setWeapons] = useState([]);
    const [cost, setCost] = useState([])
    useEffect(() => {
        fetch('./weapons.JSON')
            .then(res => res.json())
            .then(data => setWeapons(data))
    }, [])

    const [Count, setCount] = useState(0)
    function getData(data) {
        const setNew = [...cost, data]
        const newCount = Count + 1;
        setCount(newCount)
        setCost(setNew)
    }
    return (
        <div className='weapons-container'>
            <div className="weapons-section">
                {
                    weapons.map(weapon => <Weapon getData={getData} weapon={weapon}></Weapon>)
                }
            </div>
            <div className='cart-section'>
                <h1>Weapon Added: {Count}</h1>
                <Cost cost={cost}></Cost>
            </div>
        </div>
    );
};

export default Weapons;