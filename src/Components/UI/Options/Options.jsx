import React, {useEffect, useRef, useState} from 'react';
import cl from './Options.module.css';
const Options = ({isOpen, setIsOpen, options}) => {
    const dropdownRef = useRef(null);
    const [isLeft, setIsLeft] = useState(false);

    useEffect(() => {
        const element = dropdownRef.current;
        const originalDisplayStyle = element.style.display;
        element.style.display = 'block';
        element.style.visibility = 'hidden';
        const rect = element.getBoundingClientRect();
        element.style.display = originalDisplayStyle;
        element.style.visibility = 'visible';
        //if(rect.x+20+rect.width>=window.innerWidth) classes.push(cl.left);
        setIsLeft(rect.x+40+rect.width>=window.innerWidth);
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick,true);

        return () => {
            document.removeEventListener('click', handleOutsideClick,true);
        };
    }, []);
    const classes = [cl.container];
    if(isOpen) classes.push(cl.active);
    if(isLeft) classes.push(cl.left);
    function handler(func){
        setIsOpen(false);
        if(classes.includes(cl.active))
        classes.splice(classes.indexOf(cl.active),1);
        console.log(classes)
        func();
    }



    return (
        <div ref={dropdownRef} className={classes.join(' ')}>
            {options.map(el =>
            <p key={el.name} onClick={() => handler(el.func)}>{el.name}</p>
            )}
        </div>
    );
};

export default Options;