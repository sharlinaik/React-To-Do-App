import React from 'react'

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        <button 
          onClick={e=>{
            props.updateList(props.index, prompt('Enter New Task:'))
          }}>Edit</button>
        </span>
    </li>
  )
}

export default Todolist;