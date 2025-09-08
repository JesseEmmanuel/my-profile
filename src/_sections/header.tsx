import * as BsIcons from 'react-icons/bs'

export default function Header() {
  return (
    <div className='hidden md:flex md:justify-between md:justify-items-center md:items-center w-full max-w-[1240px] self-center'>
      <div className="flex gap-1 items-center justify-center">
        <h1 className='flex w-full text-3xl text-white font-bold'> <p className='text-[#00df9a]'>&#60;</p> J<p className='text-[#00df9a]'>/&gt;</p></h1>
        <p className='text-[#00df9a]' >Code.Learn.Grow</p>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <ul className='flex'>
          <li className='invisible md:visible p-4 mt-3 text-2xl text-[#0A66C2]'> <a href="https://www.linkedin.com/in/jesse-emmanuel-450a95194/" target={"_blank"} rel="noreferrer"><BsIcons.BsLinkedin /></a> </li>
          <li className='invisible md:visible p-4 mt-3 text-2xl text-white'> <a href="https://github.com/JesseEmmanuel" target={"_blank"} rel="noreferrer"><BsIcons.BsGithub /></a></li>
        </ul>
      </div>
    </div>
  )
}
