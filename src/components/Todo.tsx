import { todoModel } from "@/pages";
import React from "react";
import { BsTrash } from "react-icons/bs";

interface props {
    todo: todoModel;
    toggleComplete: any;
    deleteDocument: any
}



const Task = ({ todo, toggleComplete, deleteDocument }: props) => {
    const style = {
        li: `
        flex justify-between
        bg-slate-200 
        p-4 my-2 zapitalize 
        rounded-md
        `,
        liComplete: `flex justify-between
        bg-slate-400 
        p-4 my-2 zapitalize 
        rounded-md
        `,
        row: `flex`,
        text: `ml-2 cursor-pointer`,
        textComplete: `ml-2 cursor-pointer line-through`,
        check: ` w-4 mx-auto`,
        button: `flex justify-end items-center`,
    };
    return (
        <li className={todo.complete ? style.liComplete : style.li}>
            <div className={style.row}>
                <input
                    type="checkbox"
                    checked={todo.complete ? true : false}
                    className={style.check}
                    onChange={() => toggleComplete(todo)}
                />
                <p className={todo.complete ? style.textComplete : style.text} onClick={() => toggleComplete(todo)}>
                    {todo.text}
                </p>
            </div>
            <button className={style.button} onClick={() => deleteDocument(todo)}>
                <BsTrash size={17} />
            </button>
        </li>
    );
};

export default Task;
