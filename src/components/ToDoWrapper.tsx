import { redirect } from "next/navigation"
import {prisma} from "../database"
import ToDo from "./ToDo"
import ToDoForm from "./ToDoForm"

function getTodos(){
    return prisma.todo.findMany()
}

async function toggleComplete(id: string, complete: boolean){
    "use server"

    await prisma.todo.update({where: {id}, data: {complete: !complete}})

    redirect("/")
}

async function deleteTodo(id: string){
    "use server"

    await prisma.todo.delete({where: {id}})

    redirect("/")
}

export default async function ToDoWrapper(){
    const todos = await getTodos()
    return(
        <>
            <ToDoForm />
            {todos.map(todo => (
                <ToDo
                    key = {todo.id}
                    {...todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo} 
                />
            ))}
        </>
    )
}