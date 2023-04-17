import Image from "next/image"; import { Inter } from "next/font/google";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "@/components/Todo";
import { useEffect, useState } from "react";
import { query, collection, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'


export default function Home() {
  const [todosList, setTodosList] = useState([]);

  // create ToDo
  // Read Todo from firebase
  // Update Todo from firebase
  // delete Todo

  useEffect(() => {
    const q = query(collection(db, 'todos'))
    const unSubscribe = onSnapshot(q, (queryData) => {
      let dataList: any = []
      queryData.forEach((doc) => {
        dataList.push({ ...doc.data() })
      })
      console.log()
      setTodosList(dataList)
    })

    return () => unSubscribe()
  }, [])

  const handleButton = (e: any) => {
    e.preventDefault();
  };

  const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ED] to-[#1CB5E0] `,
    container: `mx-auto md:w-2/3 bg-slate-100 rounded-md p-4 shadow-xl`,
    tittle: `text-center font-bold text-3xl mb-5`,
    form: ` flex justify-between`,
    input: ` p-2 pl-3 rounded-sm w-full text-xl`,
    button: `ml-2 border p-4 bg-purple-500 flex justify-center items-center hover:bg-purple-600  text-slate-100 `,
    count: `text-center mt-2`
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.tittle}>To Do List App</h3>
        <form className={style.form}>
          <input type="text" className={style.input} placeholder="add todo" />
          <button className={style.button} onClick={handleButton}>
            {" "}
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todosList.length > 0 &&
            todosList.map((td: any, index) => <Todo todoTittle={td.text} key={index} />)}
        </ul>
        <p className={style.count}>You have {todosList.length} todos</p>
      </div>
    </div>
  );
}
