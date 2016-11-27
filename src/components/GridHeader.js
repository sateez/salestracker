import React from 'react';

 const GridHeader  = (props) => {
    return (
        <div className='grid-row row' >
                <div className='grid-header-row-column column-image col-sm-4'>product</div>
                <div className='grid-header-row-column column-code col-sm-1'>product id </div>
                <div className='col-sm-2'>
                    <div className="col-sm-12 grid-header-row-column">Estimated Sales</div>
                <div className='grid-header-row-column column-est-daily col-sm-6'>daily</div>
                <div className='grid-header-row-column column-est-monthly col-sm-6'>montly</div>
                </div>
                <div className='col-sm-2'>
                    <div className="col-sm-12 grid-header-row-column">Estimated revenue</div>
                <div className='grid-header-row-column column-est-rev-unit col-sm-6'>per unit</div>
                <div className='grid-header-row-column column-est-rev-monthly col-sm-6'>monthly</div>
                </div>
                
                
                <div className='grid-header-row-column column-goto col-sm-1'>&nbsp;</div>
                <div className='grid-header-row-column column-show-hide col-sm-1'>&nbsp;</div>
                <div className='grid-header-row-column column-remove col-sm-1'>&nbsp;</div>
            </div>
    )
}
export default GridHeader;