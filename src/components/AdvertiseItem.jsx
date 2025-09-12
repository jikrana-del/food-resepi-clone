import React from 'react'
import salad from '../assets/salad.avif'
import roll from '../assets/rolls.jpg'
import sandwich from '../assets/sandwich.avif'
import rice from '../assets/rice.jpg'
import cake from '../assets/cake1.avif'
import pasta from '../assets/pasta.avif'
import noodles from '../assets/noodles.avif'
import chicken from '../assets/chicken.jpg'
import beef from '../assets/beef1.webp'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dataAction } from '../Store/DataSlice'

function AdvertiseItem() {
    const dispatch = useDispatch()
    const [selectedItem, setSelectedItem] = useState('chicken');
    const HendelImg = (query) => {
        if(query !== selectedItem){
        dispatch(dataAction.SearchName(query));
        setSelectedItem(query)
        }
    }
    return (
        <>
            {/* menu section */}
            <section id="menu" className='menu-section  animate__bounceInUp animate__animated '>
                <div>
                    <h1>Explore Our menu</h1>
                </div>
                <div>
                    <p className='menu-descrebsion'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satify your  <br />cravings and elevate your dining experience.one delicious meal at a time.</p>
                </div>
                <div className='menu'>
                    <div className={`menu-item ${selectedItem === 'cake' ? 'selected' : ''}`}>
                        <span> <img onClick={() => HendelImg("cake")} src={cake} alt="" /></span>
                        <span>Cake</span>
                    </div>
                    <div className={`menu-item ${selectedItem === 'salad' ? 'selected' : ''}`}>
                        <span><img onClick={() => HendelImg("salad")} src={salad} alt="" /></span>
                        <span>Salad</span>
                    </div>
                    <div className={`menu-item ${selectedItem === 'roll' ? 'selected' : ''}`}>
                        <span> <img onClick={() => HendelImg("roll")} src={roll} alt="" /></span>
                        <span>Rolls</span>
                    </div>
                    <div className={`menu-item ${selectedItem === 'sandwich' ? 'selected' : ''}`} >
                        <span> <img onClick={() => HendelImg("sandwich")} src={sandwich} alt="" /></span>
                        <span>Sandwich</span>
                    </div>
                    <div className={`menu-item ${selectedItem === 'chicken' ? 'selected' : ''}`}>
                        <span><img onClick={() => HendelImg("chicken")} src={chicken} alt="" /></span>
                        <span>Chicken</span>
                    </div>
                    <div className={`menu-item ${selectedItem === 'rice' ? 'selected' : ''}`}>
                        <span><img onClick={() => HendelImg("rice")} src={rice} alt="" /></span>
                        <span>  Rice </span>
                    </div>
                    <div className={`menu-item ${selectedItem === 'pasta' ? 'selected' : ''}`}>
                        <span><img onClick={() => HendelImg("pasta")} src={pasta} alt="" /></span>
                        <span>Pasta</span>
                    </div>
                    <div className={`menu-item ${selectedItem === 'noodles' ? 'selected' : ''}`}>
                        <span><img onClick={() => HendelImg("noodles")} src={noodles} alt="" /></span>
                        <span>Noodles</span>
                    </div>
                  
                    <div className={`menu-item ${selectedItem === 'beef' ? 'selected' : ''}`}>
                        <span><img onClick={() => HendelImg("beef")} src={beef} alt="" /></span>
                        <span>Beef</span>
                    </div>
                </div>
                <div>
                    <hr />
                </div>
            </section>
        </>
    )
}

export default AdvertiseItem;