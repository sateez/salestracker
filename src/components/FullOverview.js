import React from 'react';
import PersonalInfoSection from './PersonalInfoSection';
import SalesInfoSection from './SalesInfoSection';
import FullAnalytics from './FullAnalytics';

const FullOverview = ({cars, totalCarsInfo}) => {
    console.log('fullOverview totalCarsInfo:--->', totalCarsInfo);
    return (
        <div className='col-sm-12 my-audi full-overview'>
            <div className='col-sm-6'>
                <PersonalInfoSection />
            </div>
            <div className='col-sm-6'>
                <SalesInfoSection cars={cars} totalCarsInfo={totalCarsInfo} />
            </div>
            <div className='col-sm-12'>
                <FullAnalytics cars={cars} />
            </div>
        </div>
    )
}
export default FullOverview;