import React from "react"; import { BsTrash } from "react-icons/bs";
const Task = () => {
    const style = {
        container: `
        bg-slate-300 hover:bg-[#bebfc28f]
        w-4/5 h-12
        grid grid-cols-[0.5fr_4fr_1fr]
        mt-2 mx-auto px-10
        rounded-md~
        `,
        description: `my-auto mr-auto font-bold`,
        check: `mr-auto w-4`,
        button: `flex justify-end items-center`,
    };
    return (
        <div className={style.container}>
            <input type="checkbox" className={style.check} />
            <p className={style.description}>Name Task</p>
            <button className={style.button}>
                <BsTrash size={17} />
            </button>
        </div>
    );
};

export default Task;
