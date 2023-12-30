export default class Storage{
    static getListsNames(){

        return JSON.parse(localStorage.getItem('lists'));
    }
}