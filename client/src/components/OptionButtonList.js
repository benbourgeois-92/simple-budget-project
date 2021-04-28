import React from 'react';


export const OptionButtonList = (props) => {

    const {options, primaryOption, range} = props;


    return (
        <>
        {options.map((option, i) => 
            <li key={i}>
                 <label className="radioButton" htmlFor={option}>
                     {option}
                     {
                     option === primaryOption ? 
                     (<input type="radio" id={option} name={range} value={option} defaultChecked />) :
                     (<input type="radio" id={option} name={range} value={option} />)
                     }

                 </label>                                       
            </li>
         )}
         </>
    )
}

export default OptionButtonList;