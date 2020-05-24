import React, { Component } from 'react';
import './city.css';
import { Link } from 'react-router-dom';


class City extends Component {
     render(){
         console.log(this.props.city);
         const { cityName, image, price, id } = this.props.city;
         return(
             <div className="city col s4">
                 <Link to={`/city/${id}`}>
                     <div className="image">
                         <img src={image} />
                     </div>
                     <div className="city-name">{cityName}</div>
                     <div className="price">Rs{price * 72}/night average</div>
                 </Link>
             </div>
         )
     }
}


export default City;