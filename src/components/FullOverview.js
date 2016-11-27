import React from 'react';
import PersonalInfoSection from './PersonalInfoSection';
import SalesInfoSection from './SalesInfoSection';
import FullAnalytics from './FullAnalytics';

const FullOverview = ({cars}) => {
    return (
        <div className='col-sm-12 my-audi full-overview'>
            <div className='col-sm-6'>
                <PersonalInfoSection />
            </div>
            <div className='col-sm-6'>
                <SalesInfoSection cars={cars} />
            </div>
            <div className='col-sm-12'>
                <FullAnalytics cars={cars} />
            </div>
        </div>
    )
}
export default FullOverview;