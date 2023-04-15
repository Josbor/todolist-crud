import Image from 'next/image'
import { Inter } from 'next/font/google'
import { AiOutlinePlus } from 'react-icons/ai'
import Task from '@/components/Task'




export default function Home() {
  const handleButton = (e: any) => {
    e.preventDefault()
  }

  const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ED] to-[#1CB5E0] `,
    container: `mx-auto w-2/3 bg-gray-200 rounded-md p-4`,
    tittle: `text-center font-bold text-3xl mb-5`,
    form: ` !box-border w-4/5 mx-auto grid grid-cols-[90%_10%] gap-2 `,
    input: ` p-2 pl-3 rounded-sm w-full`,
    button: `w-[90%] bg-purple-500 flex justify-center items-center hover:bg-purple-600`,
  }

  return (
    <div className={style.bg}>

      <div className={style.container}>
        <h3 className={style.tittle}>
          To Do List App
        </h3>
        <form className={style.form}>
          <input type="text" className={style.input} placeholder='add todo' />
          <button className={style.button} onClick={handleButton} > <AiOutlinePlus size={20} color='white' /></button>
        </form>
        <Task />
      </div>
    </div>
  )
}
