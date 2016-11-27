import React from 'react';

const SalesInfoSection = ({cars}) => {
    console.log('SalesInfoSection:--->', cars);
    return (
        <div className='col-sm-12 sales-info-section'>
        <div className='col-sm-6 field-desc field-heading'>No. Cars Bought</div> 
        <div className='col-sm-6 field-desc'>999</div> 
        <div className='col-sm-6 field-desc field-heading'>No. Cars Sold</div> 
        <div className='col-sm-6 field-desc'>346</div> 
        <div className='col-sm-6 field-desc field-heading'>Total Generated Income</div> 
        <div className='col-sm-6 field-desc'>$ 3424523</div> 
        <div className='col-sm-6 field-desc field-heading'>Highest Sold Model</div> 
        <div className='col-sm-6 field-desc'>Audi R8</div> 
        <div className='col-sm-6 field-desc field-heading'>Least Sold Model</div> 
        <div className='col-sm-6 field-desc'>Audi A1</div> 
        </div> 
    )
}
export default SalesInfoSection;