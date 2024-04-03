"use client"
import { useState } from "react"
import styles from "./todo.module.css"


export type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleComplete: (id: string, complete: boolean) => void
    deleteTodo: (id: string) => void
}

export default function ToDo({id, title, complete, toggleComplete, deleteTodo}: TodoItemProps){
    return(
        <div className={styles.todo}>
            <p
                onClick={() => toggleComplete(id, complete)} 
                className={complete ? styles.textCompleted : styles.text}
            >{title}</p>
            <button 
                className={styles.buttonClose}
                onClick={() => deleteTodo(id)}
            >Remove</button>
        </div>
    )
}