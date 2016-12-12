import React from 'react';
const CarSalesInfo = ({car,cars,totalCarsSold,totalRevenue,carInfo}) => {
    console.log('CarSalesInfo of car:--->', car,cars,totalCarsSold,totalRevenue,carInfo);
    return (
        <div className='col-sm-4 col-sm-offset-1 car-sales-info'>
            <div className='col-sm-12'>
                <div className='col-sm-6 field-desc field-heading'>No of units Sold</div>
                <div className='col-sm-6 field-desc'> { carInfo.unitsSold }</div>
                <div className='col-sm-6 field-desc field-heading'>Total Income</div>
                <div className='col-sm-6 field-desc'>${carInfo.totalIncome}</div>
                <div className='col-sm-6 field-desc field-heading'>Highest Sale Month</div>
                <div className='col-sm-6 field-desc'>{carInfo.HighestSaleMonth}</div>
                <div className='col-sm-6 field-desc field-heading'>Lowest Sale Month</div>
                <div className='col-sm-6 field-desc'>{carInfo.LeastSaleMonth}</div>
                <div className='col-sm-6 field-desc field-heading'>% of Total Sales</div>
                <div className='col-sm-6 field-desc'>{carInfo.percentTotalSales}%</div>
                <div className='col-sm-6 field-desc field-heading'>% of Total Revenue</div>
                <div className='col-sm-6 field-desc'>1.22%</div>
            </div>
        </div>
    )
}
export default CarSalesInfo;