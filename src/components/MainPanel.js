import React from 'react';
import { Link, IndexLink } from 'react-router';
import TextInput  from './common/TextInput';
const MainPanel = ({redirect,filterText,filterTextChanged,clearFilter,errors}) => {
    return (
        <div className='grid-row row filter-panel' >
            <div className='col-xs-6'>
            <TextInput
                    name="Search Models"
                    label=''
                    placeholder="Search Models"
                    value={filterText}
                    onChange={filterTextChanged}
                    className="search-model"
                    error={errors.title} />    
            <button className='btn  clear-icon' onClick={clearFilter}><i className="fa fa-times" aria-hidden="true"></i></button>
            </div>
            <div className='col-xs-6 '>
                <button onClick={redirect} className=' add-model btn btn-primary pull-right'><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}
export default MainPanel;