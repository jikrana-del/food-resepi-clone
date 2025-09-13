import { useSelector } from 'react-redux';
import Loding from './Loding';
import { NavLink } from 'react-router-dom';
function FOOD() {
  const data = useSelector(store => store.data.data || [])
  if (!data) {
    return <Loding />
  }
  console.log(data);
 
  return (
    <div style={{ margin: "90px 0" }} className=''>

      <center>
        <h1 style={{ fontWeight: "800" }}>Our Foods</h1>
      </center>
      <section className='card-section   animate__bounceInLeft animate__animated '>

        {Array.isArray(data) && data.map((item, idx) => (
          <div key={idx}>
          <div className=' card' >
             
              <img src={item.strMealThumb} alt={item.strMeal} width='100%' height='200px' style={{ borderRadius: "10px" }} />
           
              <center style={{margin:"10px"}}> name :<strong> {item.strMeal} </strong></center>

              <button className='pay-btn'><a href={item.strSource} style={{ color: "black" }}>Click me </a></button>
          </div>

          </div>
        )
        )
        }
      </section>
      <center>
        <NavLink to='/' className='pay-btn' style={{ color: "black" }}>Go to Home</NavLink>
      </center>
    </div>
  )
}


export default FOOD;