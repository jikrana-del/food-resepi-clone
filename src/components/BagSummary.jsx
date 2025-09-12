import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react';
function BagSummary() {
    const [showPopup, setShowPopup] = useState(false);
    const HendelPlaceOrder = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false),2000);
    }
    const BagData = useSelector(store => store.adddelete.bag || []);
    const price = useSelector(store => store.adddelete.displayPrice || []);
    let TotalMRP = 0;
    let TotalItem = BagData.length;
    let TotalDiscount = 0;
    BagData.map((item, idx) => {
        TotalMRP += price[idx];
    })
    const ConvenienceFee = TotalMRP > 500 ? 0 : 99;

    return (
        <div className='summary'>
            <div className='begSummary'>
                <div className='priceHeader'>
                    PRICE DETAILS
                    <strong>
                        ({TotalItem})
                    </strong>

                </div>
                <div className='price-item'>
                    <span>Total MRP</span>
                    <strong>₹{TotalMRP}</strong>
                </div>
                <div className='price-item'>
                    <span>Convenience Fee</span>
                    <strong>{ConvenienceFee == 0 ? 'FREE' : `₹${ConvenienceFee}`}</strong>

                </div>
                <button className='pay-btn' onClick={HendelPlaceOrder}>PLACE ORDER</button>
            </div>
           
                <div className={`popup-message ${showPopup ? 'show':''}`}>
                🎉 Your order has been placed successfully!
            </div>
            
        </div>
    )
}

export default BagSummary;