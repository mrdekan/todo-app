import React, {useState} from 'react';
import cl from './Settings.module.css';
import RadioSelect from "../UI/RadioSelect/RadioSelect.jsx";
const Settings = () => {
    const themes = [
        {
            name: 'Light',
            value: 0
        },
        {
            name: 'Dark',
            value: 1
        }
    ];
    const [selectedTheme,setSelectedTheme] = useState(themes[0]);
    const selectTheme = (theme) => {
        setSelectedTheme(theme);
        console.log(theme);
    }
    return (
        <div>
            <RadioSelect options={themes} setSelectedOption={selectTheme} selectedOption={selectedTheme}></RadioSelect>
        </div>
    );
};

export default Settings;