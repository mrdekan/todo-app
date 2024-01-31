export default class Theme{
    static themes = [
        {
            name: 'Light',
            value: 0
        },
        {
            name: 'Dark',
            value: 1
        }
    ];
    static getSelectedTheme(){
        if(!localStorage.getItem('theme')){
            this.setLight();
            return this.themes[0];
        }
        else if(localStorage.getItem('theme') === 'light')
            return this.themes[0];
        return this.themes[1];
    }
    static setLight(){
        document.documentElement.style.setProperty('--main-bg-color', '#ffffff');
        document.documentElement.style.setProperty('--main-text-color', '#161a1d');
        localStorage.setItem('theme','light');
    }
    static setDark(){
        document.documentElement.style.setProperty('--main-bg-color', '#161a1d');
        document.documentElement.style.setProperty('--main-text-color', '#ffffff');
        localStorage.setItem('theme','dark');
    }
}