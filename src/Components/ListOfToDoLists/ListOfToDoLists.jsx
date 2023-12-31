import React, {useState} from 'react';
import cl from  './ListOfToDoLists.module.css';
import ListName from "../ListName/ListName";
import GradientButton from "../UI/GradientButton/GradientButton";
import Modal from "../UI/Modal/Modal";
import CreateToDoList from "../CreateToDoList/CreateToDoList";
import Storage from "../../Utils/Storage";
const ListOfToDoLists = ({lists, selectedList, setSelectedList,setLists}) => {
    const [modal, setModal] = useState(false);
    const create = (newToDoList) => {
        setModal(false)
        lists.push({id: newToDoList.id, name: newToDoList.name});
        setLists(lists);
        Storage.setToDoList(newToDoList);
    }
    return (
            <div className={cl.sideBar}>
                {lists.map(el => (
                    <ListName key={el.id} setSelectedList={setSelectedList} selectedList={selectedList} el={el} setLists={setLists} lists={lists}/>
                ))}
                <GradientButton onClick={()=>setModal(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg></GradientButton>
                <Modal visible={modal} setVisible={setModal}>
                    <CreateToDoList callback={create}/>
                </Modal>
            </div>
    );
};

export default ListOfToDoLists;