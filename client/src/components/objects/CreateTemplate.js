import React, { useState, useContext } from 'react';
import AppContext from '../../context/app/appContext';

const CreateTemplate = () => {
  const appContext = useContext(AppContext);

  const { createTemplate } = appContext;

  const initialState = {
    title: '',
    description: '',
    order: 0,
    unit: 'N/A',
    points: 0
  }

  const [template, setTemplate] = useState(initialState)

  const { title, description, order, unit, points } = template;

  const onChange = e => setTemplate({ ...template, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || points === 0) {
      // setAlert('Please enter all fields', 'danger');
      console.log('Please enter all fields');
    } else {
      console.log('creating template')
      createTemplate(template);
      setTemplate(initialState)
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Create a Template
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type='text'
            name='title'
            value={title}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            id='description'
            type='description'
            name='description'
            value={description}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='order'>Order</label>
          <input
            id='order'
            type='order'
            name='order'
            value={order}
            onChange={onChange}
            required
          />
        </div>
        {(order === 1) ?
          <div className='form-group'>
            <label htmlFor='unit'>Unit</label>
            <input
              id='unit'
              type='unit'
              name='unit'
              value={unit}
              onChange={onChange}
              required
            />
          </div>
          :
          <div></div>
        }
        <div className='form-group'>
          <label htmlFor='points'>Point Value</label>
          <input
            id='points'
            type='points'
            name='points'
            value={points}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  )
}

export default CreateTemplate;