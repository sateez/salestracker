import React from 'react';
const CarSalesInfo = ({car}) => {
    console.log('CarSalesInfo of car:--->', car);
    return (
        <div className='col-sm-4 col-sm-offset-1 car-sales-info'>
            <div className='col-sm-12'>
                <div className='col-sm-6 field-desc field-heading'>No of units Sold</div>
                <div className='col-sm-6 field-desc'>39</div>
                <div className='col-sm-6 field-desc field-heading'>Total Income</div>
                <div className='col-sm-6 field-desc'>$466343</div>
                <div className='col-sm-6 field-desc field-heading'>Highest Sale Month</div>
                <div className='col-sm-6 field-desc'>Novenber</div>
                <div className='col-sm-6 field-desc field-heading'>Lowest Sale Month</div>
                <div className='col-sm-6 field-desc'>August</div>
                <div className='col-sm-6 field-desc field-heading'>% of Total Sales</div>
                <div className='col-sm-6 field-desc'>10%</div>
                <div className='col-sm-6 field-desc field-heading'>% of Total Revenue</div>
                <div className='col-sm-6 field-desc'>8%</div>
            </div>
        </div>
    )
}
export default CarSalesInfo;