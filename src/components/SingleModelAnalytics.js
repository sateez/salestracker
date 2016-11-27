import React from 'react';
import BarChartCust from './BarChartCust';
import PieChartCust from './PieChartCust';
class SingleModelAnalytics extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.getLast6MonthDetail = this.getLast6MonthDetail.bind(this);
        this.getQuadData = this.getQuadData.bind(this);
    }
    getQuadData() {
        let cars = this.props.cars;
        if (cars && cars.length > 0) {
            let quadData = [];
            for (let i = 0; i < 4; i++) {
                let revenueTotal = 0;
                for (let j = 0; j < cars.length; j++) {
                    revenueTotal = revenueTotal +
                        cars[j].sales.last12MonthRevenue[(i * 3)] +
                        cars[j].sales.last12MonthRevenue[(i * 3) + 1] +
                        cars[j].sales.last12MonthRevenue[(i * 3) + 2];
                }
                quadData.push(revenueTotal);
            }
            console.log('quadData:--->', quadData);
            return quadData;
        } else {
            return [0,0,0,0];
        }
    }
    getLast6MonthDetail(type, months) {
        let cars = this.props.cars;
        let sales = [];
        if (cars && cars.length > 0) {
            let saleTotal = 0;
            for (let i = 0; i < months; i++) {
                for (let j = 0; j < cars.length; j++) {
                    saleTotal = saleTotal + cars[j].sales[type][i];
                }
                sales.push(saleTotal);
                saleTotal = 0;
            }
            console.log('getLast6MonthDetail:--->', sales);
            return sales;
        } else {
            return [];
        }
    }
    render() {
        let myLast6MonthRevenue = this.props.car.sales ? this.props.car.sales.myLast6MonthRevenue : [0, 0, 0, 0, 0, 0];
        let firmwideSales = this.props.car.sales ? this.props.car.sales.last6MonthSales : [0, 0, 0, 0, 0, 0];
        let modelSales = this.props.car.sales ? this.props.car.sales.myLast6MonthSales : [0, 0, 0, 0, 0, 0];
        return (
            <div className='col-sm-12'>
                <div className='col-sm-12'>
                    <BarChartCust firmwideSales={firmwideSales} modelSales={modelSales}/>
                </div>
                <div className='col-sm-12'>
                    <PieChartCust myLast6MonthRevenue={myLast6MonthRevenue}/>
                </div>
            </div>
        )
    }
}
export default SingleModelAnalytics;