import { prisma } from "@/database"
import styles from "./todo.module.css"
import { redirect } from "next/navigation"

async function createTodo(data: FormData){
    "use server"

    const title = data.get("title")?.valueOf()
    if(typeof title !== "string" || title.length === 0){
        throw new Error("Ivalid Title") 
    }

    await prisma.todo.create({data: {title, complete: false}})

    redirect("/")
}

export default function ToDoForm(){
    return(
        <form className={styles.todoForm} action={createTodo}>
            <input 
                type = "text"
                name = "title" 
                className={styles.todoInput}
                placeholder="What is the task today?" 
            />
            <button type = "submit" className={styles.todoButton}>Add Task</button>
        </form>
    )
}