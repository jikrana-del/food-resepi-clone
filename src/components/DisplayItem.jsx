import React, { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GoPlus } from "react-icons/go";
import { AddDeleteAction } from '../Store/AddDeleteSlice';
import { MdCheckCircle, MdDeleteForever } from 'react-icons/md';
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

function DisplayItem() {

    useEffect(() => {
        AOS.init({
            duration: 1000,  // animation duration
            once: false      // repeat animation on every scroll
        });
    }, []);

    useEffect(() => {
        AOS.refresh();     // required for React route changes
    }, []);

    const dispatch = useDispatch()
    const data = useSelector(store => store.data.data)
    const plusButton = useSelector(store => store.adddelete.PlusButton || []);
    const price = useSelector(store => store.adddelete.displayPrice || []);
    const [showAddMessage, setShowAddMessage] = useState(false);
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);
    const BagData = useSelector(store => store.adddelete.bag || []);

    const HendelClick = (index) => {
        dispatch(AddDeleteAction.TogglePlusButton(index));
    }
    const HendelAdd = (index) => {
        const item = data[index]
        dispatch(AddDeleteAction.BagData(item));
        setShowAddMessage(true)
        setTimeout(() => setShowAddMessage(false), 2000);
    }
    const HendelDelete = (index) => {
        const item = data[index]
        dispatch(AddDeleteAction.DeleteData(item.idMeal))
        setShowDeleteMessage(true)
        setTimeout(() => setShowDeleteMessage(false), 2000);
    }
    return (
        <>
            <section className='card-section'>
                {Array.isArray(data) && data.map((item, idx) => (
                    <div key={idx} className='card' data-aos="fade-up">
                        <img src={item.strMealThumb} alt={item.strMeal} width='100%' height='200px' />
                        <div>
                            <span> name :<strong> {item.strMeal} </strong></span>
                        </div>
                        <div className='rate'>
                            <span>
                                Price :  <strong className='price'> ₹{price[idx]}</strong>
                            </span>
                            <span>
                                {'★'.repeat(4)}{'☆'.repeat(1)}
                            </span>
                        </div>
                        <div className={`incre-decre ${plusButton.includes(idx) ? 'show1' : 'display'}`}>
                            {BagData.some(p => p.idMeal === item.idMeal) ? (
                                <div className='mynas coman-add-delete' onClick={() => HendelDelete(idx)}>
                                    <span>DELETE</span>
                                    <AiFillDelete />
                                </div>
                            ) : (
                                <div className='plus coman-add-delete' onClick={() => HendelAdd(idx)}>
                                    <span>ADD</span>
                                    <IoIosAddCircleOutline />
                                </div>
                            )}
                        </div>
                        <div className={`icon1 ${plusButton.includes(idx) ? 'show' : ''}`} onClick={() => HendelClick(idx)}>
                            <GoPlus />
                        </div>
                    </div>
                ))}
            </section>
            <div className='pops'>
                <div className={`sec ${!showAddMessage ? 'mes' : ''}`}>
                    Product has been added to your bag. <MdCheckCircle />
                </div>

                <div className={`del ${!showDeleteMessage ? 'mes' : ''}`}>
                    Item deleted successfully! <MdDeleteForever />
                </div>
            </div>
        </>
    )

}

export default DisplayItem;