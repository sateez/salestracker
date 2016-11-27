import React, { PropTypes } from 'react';
import TextInput from './common/TextInput';
import {Link} from 'react-router';

const NewCarForm = ({car, errors, onSave, onChange, saving}) => {
    return (
        <div className='new-car-form '>
            <h3 className='col-sm-8 col-sm-offset-2'>Add New Car</h3>
            <form className='col-sm-8 col-sm-offset-2'>
                <TextInput
                    name="title"
                    label="Car Model"
                    value={car.title}
                    onChange={onChange}
                    error={errors.title} />
                <TextInput
                    name="desc"
                    label="Car Description"
                    value={car.desc}
                    onChange={onChange}
                    error={errors.title} />
                <TextInput
                    name="url"
                    label="Image URL"
                    value={car.url}
                    onChange={onChange}
                    error={errors.title} />
                <Link className='btn btn-danger' to='/sales-tracker'>Cancel</Link> &nbsp;
                <input
                    type="submit"
                    disabled={saving}
                    value={saving ? 'Saving...' : 'Save'}
                    className="btn btn-primary"
                    onClick={onSave} />
            </form>
        </div>
    )
}
export default NewCarForm;