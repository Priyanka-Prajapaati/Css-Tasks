import React from 'react';

const Label = ({children}) => {
  return(
      <div>
          <label className=" m-10 font-serif text-base font-medium tracking-wider" htmlFor='name'>
              {children}
          </label>
      </div>
  )
};

export default Label;
