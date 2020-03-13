import React, {useState} from 'react';
import Modal from '../Modal';

function ToDoListSimpleFunction() {
    const [ toDoList, setToDoList ] = useState(['kupi cvijece', 'rijesi zadacu', 'napisi roman']);
    const [ modalOpened, setModalOpened ] = useState(false);
    const [ inputFieldValue, setInputFieldValue ] = useState('');
    const [ selectedItem, setSelectedItem ] = useState();

    const deleteItemByIndex = idx => {
        toDoList.splice(idx, 1);
        setToDoList([...toDoList]);
    };

    const activateItem = item => {
        setSelectedItem(item);
        setModalOpened(true);
    };

    const saveItemToList = e => {
        if (e.key === 'Enter') {
            setToDoList([...toDoList, inputFieldValue]);
            setInputFieldValue('');
        }
    };

    const moveItem = (oldIdx, newIdx) => {
        const item = toDoList[oldIdx];
        toDoList.splice(oldIdx, 1);
        toDoList.splice(newIdx, 0, item);
        setToDoList([...toDoList]);
    };

    return (<div>
        <button onClick={() => setToDoList([...toDoList.sort()])}>Sort ascending</button>
        <button onClick={() => setToDoList([...toDoList.sort().reverse()])}>Sort descending</button>
        <ul>
            { toDoList.map((item, idx) => {
                return (<li
                    key={idx}>
                    {item}
                    <button onClick={() => deleteItemByIndex(idx)}>-</button>
                    <button onClick={() => moveItem(idx, idx - 1)} disabled={idx === 0}>UP</button>
                    <button onClick={() => moveItem(idx, idx + 1)} disabled={idx === toDoList.length - 1}>DOWN</button>
                    <button onClick={() => activateItem(item)}>modal</button>
                </li>)
            }) }
        </ul>
        <form onSubmit={e => e.preventDefault()}>
            <input
                type="text"
                value={inputFieldValue}
                onChange={e => setInputFieldValue(e.target.value)}
                onKeyDown={e => saveItemToList(e)}
            />
        </form>
        <Modal
            isModalOpen={modalOpened}
            onCloseModal={() => setModalOpened(false)}
            textToDisplay={selectedItem}
        />
    </div>)
}

export default ToDoListSimpleFunction;
