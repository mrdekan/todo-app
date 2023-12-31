export default class Storage{
    static getListsNames(){
        const string = localStorage.getItem('lists');
        if(!string) return [];
        return JSON.parse(string);
    }
    static setListsNames(lists){
        localStorage.setItem('lists',JSON.stringify(lists));
    }
    static getToDoList(listId){
        const list = localStorage.getItem(listId);
        if(!list) return {
            name: 'Not found',
            deleteAfterMarking: false,
            items: []
        };
        return JSON.parse(list);
    }
    static setToDoList(list){
        localStorage.setItem(list.id,JSON.stringify(list));
    }
    static deleteToDoList(listId){
        localStorage.removeItem(listId);
    }
}