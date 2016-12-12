import React from 'react';
import CarInfo from './CarInfo';
import CarSalesInfo from './CarSalesInfo';
import SingleModelAnalytics from './SingleModelAnalytics';
class Overview extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.getCarInfo = this.getCarInfo.bind(this);
    }
    getCarInfo()  {
        let car = this.props.car,
            months = ['June','July','August','September','October','November'],
            unitsSold = 0,
            totalIncome = 0,
            HighestSaleMonth = 0,
            LeastSaleMonth = 0,
            percentTotalSales = 0,
            percentTotalRevenue = 0;
        if (!car || !car.sales) {
            return {
                unitsSold: 0,
                totalIncome: 0,
                HighestSaleMonth: "-",
                LeastSaleMonth:"-",
                percentTotalSales: 0,
                percentTotalRevenue:0
            }
        }
        console.log('Overview getCarInfo:--->', car)
        let carSold = 0;
        debugger;
        _.forOwn(car.sales.myLast6MonthSales, function (sales,index) {
                unitsSold = unitsSold + sales;
                carSold = carSold + sales;
            if (carSold > HighestSaleMonth) HighestSaleMonth = index;
            if (LeastSaleMonth === 0)
                LeastSaleMonth = index;
            else if(carSold < LeastSaleMonth)
                LeastSaleMonth = index;
            })
            _.forOwn(car.sales.myLast6MonthRevenue, function (revenue) {
                totalIncome = totalIncome + revenue;
            })
            
            return {
                unitsSold: unitsSold,
                totalIncome: totalIncome,
                HighestSaleMonth: months[HighestSaleMonth],
                LeastSaleMonth: months[LeastSaleMonth],
                percentTotalSales: (unitsSold/this.props.totalCarsInfo.totalCarsSold)*100,
                percentTotalRevenue:(percentTotalRevenue/this.props.totalCarsInfo.totalRevenue)*100
            }
    }
    render() {
        let {car, cars, totalCarsInfo} = this.props;
        console.log('Overview:--->', cars, 'Car:--->',car);
        return (
            <div className='col-sm-12 my-audi overview'>
                <CarInfo car={car} />
                <CarSalesInfo car={car}
                              cars={cars}
                              carInfo={this.getCarInfo(car)}
                              totalCarsSold={totalCarsInfo.totalCarsSold}
                              totalRevenue={totalCarsInfo.totalRevenue} />
                <SingleModelAnalytics car={car} />
            </div>
        )
    }
}
export default Overview;