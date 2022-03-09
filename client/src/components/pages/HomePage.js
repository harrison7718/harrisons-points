import React, { useContext, useEffect } from 'react'

import UsersPoints from '../objects/UsersPoints'
import CreateTemplate from '../objects/CreateTemplate'
import TemplateBox from '../objects/TemplateBox'

import AuthContext from '../../context/auth/authContext'
import AppContext from '../../context/app/appContext'

const HomePage = () => {
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);

  const { user } = authContext;
  const { templates, pushTemplate } = appContext;

  useEffect(() => {
    try{
      console.log(user)
      user.templateIds.forEach(templateId => {
        pushTemplate(templateId);
      })
      console.log(templates)
    } catch (err) {
      console.log(err)
    }
  }, [user]);

  return (
    <div>
      <div className='home-container-1'>
        <UsersPoints />
        {
          templates.map((template, index) => (
            <TemplateBox 
              key={template._id}
              template={template} 
            />
          ))
        } 
        <CreateTemplate />
      </div>
    </div>
  )
}

export default HomePage