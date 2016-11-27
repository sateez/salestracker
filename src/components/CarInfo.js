import React from 'react';
const CarInfo = ({car}) => {
    console.log('CarInfo of car:--->', car)
    return (
        <div className='col-sm-7 car-info'>
            <div className='col-sm-12'>
                <div className='col-sm-4 model-image'>
                    <img className='img-responsive img-thumbnail' src={car.url} alt={car.title} />
                </div>
                <div className='col-sm-8'>                    
                    <h3>{car.title}</h3>
                    <span>{car.desc}</span>
                </div>
            </div>
            <div className='col-sm-6'>

            </div>
        </div>
    )
}
export default CarInfo;