import React, { useState } from 'react'
import styles from "./Form.module.css"

let count = 0;

function Form() {
    const [message, setMessage] = useState('')
    const [list, setList] = useState([])


    function handleChange (e){
        setMessage(e.target.value)
    }

    function handleAdd(){
        count++
        setList([
            ...list,
            {
                titulo: message,
                id: count,
                done: false,
            }
        ])
        setMessage('')
    }

    function handleDelete(id){
        setList(list.filter(tarea => tarea.id !== id))
    }

    function handleDone(id){
        setList(list.map(task => {
            if (task.id === id){
                return {
                    ...task,
                    done: !task.done
                }
            } else {
                return task
            }
        }))
    }

  return (
    <div>
        <input value={message} onChange={handleChange}/>
        <button onClick={handleAdd}>agregar</button>
        {
            list.map(tarea => (
            <div>
                <h1 className={tarea.done ? `${styles.done}` : `${styles.todo}`} onClick={() => handleDone(tarea.id)}>{tarea.titulo}</h1>
                <button onClick={() => handleDelete(tarea.id)}>borrar</button>
            </div>
            ))
        }
    </div>
  )
}

export default Form