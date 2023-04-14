import Image from 'next/image'
import { Inter } from 'next/font/google'




export default function Home() {
  const style={
    bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ED] to-[#1CB5E0] `,
    container:`mx-auto w-2/3 bg-gray-200 rounded-md`,
    tittle:``,
    form:``,
    input:`p-2`,
    button:``,
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.tittle}>
          To Do List App
        </h3>
        <form  className={style.form}>
          <input type="text" className={style.input} placeholder='add todo' />
          <button className={style.button} > +</button>
        </form>
      </div>
    </div>
  )
}
