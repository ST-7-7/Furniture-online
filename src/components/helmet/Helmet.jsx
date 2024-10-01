import React from 'react';


function Helmet(props) {
  document.title = 'Furnitures - ' + props.title;
  return (
    <div className='helmet'>
      {props.children}
    </div>
  )
}

export default Helmet;