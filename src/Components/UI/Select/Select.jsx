import React, {useState} from 'react';
import cl from './Select.module.css';
const Select = ({options, selectedOption, setSelectedOption}) => {

    const [isOpen,setIsOpen] = useState(false);

    const classes = [cl.select];
    if(isOpen) classes.push(cl.active);
    return (
        <div className={classes.join(' ')} onClick={()=>setIsOpen(!isOpen)}>
            <div className={cl.title}>
                <p>{selectedOption.name}</p>
                <svg className={cl.icon} xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="currentColor">
                    <path
                        d="M6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L7 2.41421L1.70711 7.70711C1.31658 8.09763 0.683418 8.09763 0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893Z"/>
                </svg>
            </div>
            <div className={cl.dropdown}>
                <ul>
                {options.filter(el=>el.name!==selectedOption.name).map(el =>
                <li onClick={()=>setSelectedOption(el)} key={el.name}>{el.name}</li>
                )}
                </ul>
            </div>
        </div>
    );
};

export default Select;