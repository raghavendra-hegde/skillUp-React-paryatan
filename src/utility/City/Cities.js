import React from 'react';
import City from './City';
import SlickSlider from '../Slider/Slider'

function Cities(props) {
    const listOfRecommendedCity =  props.cities.map((city,i) => {
        return(
            <div key={i} className='col s3'>
                <City city={city} key={i} />
            </div>
        )
    })

    return(
        <div className='cities-wrapper'>
            <h1 className='main-header-text'>{props.header}</h1>
            <SlickSlider elements={listOfRecommendedCity} />

        </div>
    );
}

export default Cities;