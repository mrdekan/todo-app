import React, {useEffect, useState} from 'react';
import cl from './Settings.module.css';
import RadioSelect from "../UI/RadioSelect/RadioSelect.jsx";
import Theme from "../../Utils/Theme.js";
const Settings = ({selectedTheme,setSelectedTheme}) => {
    const themes = Theme.themes;
    //const [selectedTheme,setSelectedTheme] = useState(Theme.getSelectedTheme());

    return (
        <div className={cl.container}>
            <label>Theme</label>
            <RadioSelect options={themes} setSelectedOption={setSelectedTheme} selectedOption={selectedTheme}></RadioSelect>
        </div>
    );
};

export default Settings;