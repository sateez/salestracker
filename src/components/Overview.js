import React from 'react';
import CarInfo from './CarInfo';
import CarSalesInfo from './CarSalesInfo';
import SingleModelAnalytics from './SingleModelAnalytics';
const Overview = ({car}) => {
    console.log('overview of car:--->',car)
    return (
        <div className='col-sm-12 my-audi overview'>
            <CarInfo car={car} />
            <CarSalesInfo car={car} />
            <SingleModelAnalytics car={car}/>
        </div>
    )
}
export default Overview;