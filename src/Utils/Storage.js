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
    static addToDo(listId, todo){
        const list = this.getToDoList(listId);
        list.items.push(todo);
        this.setToDoList(list);
    }
    static setToDoState(listId, index, state){
        const list = this.getToDoList(listId);
        list.items[index].state = state;
        this.setToDoList(list);
    }
    static setToDoText(listId, index, text){
        const list = this.getToDoList(listId);
        list.items[index].value = text;
        this.setToDoList(list);
    }
    static deleteToDo(listId, index){
        const list = this.getToDoList(listId);
        list.items.splice(index,1);
        this.setToDoList(list);
    }
}