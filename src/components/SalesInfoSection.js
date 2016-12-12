import React from 'react';

const SalesInfoSection = ({cars,totalCarsInfo}) => {
    console.log('SalesInfoSection:--->', cars,totalCarsInfo);
    return (
        <div className='col-sm-12 sales-info-section'>
        <div className='col-sm-6 field-desc field-heading'>No. Cars Sold</div> 
        <div className='col-sm-6 field-desc'>{totalCarsInfo.totalCarsSold || ''}</div> 
        <div className='col-sm-6 field-desc field-heading'>Total Generated Income</div> 
        <div className='col-sm-6 field-desc'>$ {totalCarsInfo.totalRevenue || ''}</div> 
        <div className='col-sm-6 field-desc field-heading'>Highest Sold Model</div> 
        <div className='col-sm-6 field-desc'>{totalCarsInfo.highestModel || ''}</div> 
        <div className='col-sm-6 field-desc field-heading'>Least Sold Model</div> 
        <div className='col-sm-6 field-desc'>{totalCarsInfo.leastModel || ''}</div> 
        <div className='col-sm-6 field-desc field-heading'>Highest Month Sales</div> 
        <div className='col-sm-6 field-desc'>{totalCarsInfo.highestSalesMonth || ''}</div> 
        </div> 
    )
}
export default SalesInfoSection;