import React from "react"; import { BsTrash } from "react-icons/bs";

interface props {
    todoTittle: string
}
const Task = ({ todoTittle }: props) => {
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
        <li className={style.li}>
            <div className={style.row}>

                <input type="checkbox" className={style.check} />
                <p className={style.text}>{todoTittle}</p>

            </div>
            <button className={style.button}>
                <BsTrash size={17} />
            </button>
        </li>
    );
};

export default Task;
