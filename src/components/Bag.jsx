// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { MdDelete, MdDeleteForever } from "react-icons/md";
// import { AddDeleteAction } from '../Store/AddDeleteSlice';
// import DataNotFound from './DataNotFound';
// import BagSummary from './BagSummary';

// function Bag() {
//   const dispatch = useDispatch();
//   const BagData = useSelector(store => store.adddelete.bag || []);
//       const price = useSelector(store => store.adddelete.displayPrice || []);

//   const [showDeleteMessage, setShowDeleteMessage] = useState(false);
//   const HendelDelete = (index) => {
//     const item = BagData[index]
//     dispatch(AddDeleteAction.DeleteData(item.idMeal))
//     setShowDeleteMessage(true)
//     setTimeout(() => setShowDeleteMessage(false), 2000);
//   }
//   return (
//    <>

//       {BagData.length === 0 ? (
//         <DataNotFound />
//       ) : (
//           <div className='bag'>
//         <div>
//         <table style={{ width: "50%", margin: "120px" }}>
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Title</th>
//               <th>Price</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {BagData.map((item, idx) => (
//               <tr key={idx} className='bag-item'>
//                 <td><img src={item.strMealThumb} alt="" width='50px' /></td>
//                 <td>{item.strMeal}</td>
//                 <td className='price'>₹ {price[idx]}</td>
//                 <td className='delete'><MdDelete onClick={() => HendelDelete(idx)} /></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//           </div>
//       )}
//       {/* ye table ke bahar hona chahiye */}
//       <div className={`del ${!showDeleteMessage ? 'mes' : ''}`}>
//         Item deleted successfully! <MdDeleteForever />
//       </div>
//       <div>
//         <BagSummary/>
//       </div>
//     </div>
//      </>
//   );
// }
// export default Bag;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { AddDeleteAction } from '../Store/AddDeleteSlice';
import DataNotFound from './DataNotFound';
import BagSummary from './BagSummary';

function Bag() {
  const dispatch = useDispatch();
  const BagData = useSelector(store => store.adddelete.bag || []);
  const allData = useSelector(store => store.data.data || []);
  const price = useSelector(store => store.adddelete.displayPrice || []);

  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  const handleDelete = (index) => {
    const item = BagData[index];
    dispatch(AddDeleteAction.DeleteData(item.idMeal));
    setShowDeleteMessage(true);
    setTimeout(() => setShowDeleteMessage(false), 2000);
  };

  const getPrice = (item) => {
    const idx = allData.findIndex(i => i.idMeal === item.idMeal);
    return price[idx] || 0;
  };

  return (
    <>
      {BagData.length === 0 ? (
        <DataNotFound />
      ) : (
        <div className='bag'>
          <div>
            <table style={{ width: "50%", margin: "120px" }}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {BagData.map((item, idx) => (
                  <tr key={idx} className='bag-item'>
                    <td><img src={item.strMealThumb} alt="" width='50px' /></td>
                    <td>{item.strMeal}</td>
                    <td className='price'>₹ {getPrice(item)}</td>
                    <td className='delete'><MdDelete onClick={() => handleDelete(idx)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={`del ${!showDeleteMessage ? 'mes' : ''}`}>
              Item deleted successfully! <MdDeleteForever />
            </div>
          </div>

          <div>
            <BagSummary />
          </div>

        </div>
      )}


    </>
  );
}

export default Bag;
