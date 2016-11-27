import React from 'react';

const PersonalInfoSection = ({cars})=>{
    return (
        <div id="personal-info" className='col-sm-12 personal-info-section'>
            <div className='col-sm-4 profile-image'>
            <img className="img-responsive" src='http://downloadicons.net/sites/default/files/user-icon-2722.png' /></div>
            <div className='col-sm-7 col-offset-xs-1 profile-image'>
                <div className='col-sm-6 field-desc field-heading'>Name </div>
                <div className='col-sm-6 field-desc '>Sudarshan</div>
                <div className='col-sm-6 field-desc field-heading'>Age</div>
                <div className='col-sm-6 field-desc '>45</div>
                <div className='col-sm-6 field-desc field-heading'>Place</div>
                <div className='col-sm-6 field-desc '>India</div>
                <div className='col-sm-6 field-desc field-heading'>From Date</div>
                <div className='col-sm-6 field-desc '>06-24-2009</div>
                <div className='col-sm-6 field-desc field-heading'>To Date</div>
                <div className='col-sm-6 field-desc '>06-24-2019</div>

            </div>
        </div>
    )
}
export default PersonalInfoSection;