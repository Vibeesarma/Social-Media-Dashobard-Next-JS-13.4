import React from 'react'

const DarkModeButton = () => {
  return (
      <fieldset className='header__toggle toggle' aria-label='theme toggle' role='radiogroup'>
        <div className='toggle__wrapper'>
            <input className='toggle__input' type="radio" name='theme' id='dark' />
            <input className='toggle__input system_input' type="radio" name='theme' id='system'/>
            <input className='toggle__input light_input' type="radio" name='theme' id='light'  />
            <span aria-hidden="true" className='toggle__background'></span>
            <span aria-hidden="true" className='toggle__button'></span>
        </div>
        <label htmlFor='dark'>Dark</label>
        <label htmlFor="system">System</label>
        <label htmlFor="light" >Light</label>
    </fieldset>
  )
}

export default DarkModeButton
