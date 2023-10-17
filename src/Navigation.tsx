import { useState} from 'react'
import { useWidth } from './Hooks/useWidth'
import {AiOutlineStar, AiOutlineUser, AiOutlineClockCircle, AiOutlineCalendar, AiOutlineMenuUnfold} from 'react-icons/ai'
import { MobileMenu } from './MobileMenu'
 
export const Navigation = (props: {setPage: (page: String) => void, page: String}) => {
    const [dropMenuOpen, setDropMenuOpen] = useState<boolean>(false)
    const {page, setPage} = props
    const width = useWidth()

    const HandleMenuState = () => {
        setDropMenuOpen( old => !old);
    }
    const HandleColorCurrentPage = (text: string) => {
        if (page === text) return "bg-gradient-to-r from-purple-500 to-pink-600 flex w-[22%] justify-center items-center m-1 h-[55px] rounded-xl cursor-pointer select-none"
        else return "flex w-[22%] justify-center items-center m-1 bg-slate-600 h-[55px] rounded-xl cursor-pointer select-none"
    }

    if(width < 601) return (
        <>
        <div className="flex justify-center items-center h-[75px]">
            <button className='absolute left-0' onClick={HandleMenuState}><AiOutlineMenuUnfold size="50px"/></button>
            <h1 className="w-[100px] text-3xl font-bold text-center">Menu</h1>
        </div>
        {
            dropMenuOpen ? <MobileMenu setPage={setPage} page={page} setDropMenuOpen={setDropMenuOpen} dropMenuOpen={dropMenuOpen}/> : null
        }
        </>

    )
    return (
        <ul className="flex justify-between items-center h-[75px] ">
            <li className={HandleColorCurrentPage("account")} onClick={() => setPage("account")}><AiOutlineUser size="42.5px"/></li>
            <li className={HandleColorCurrentPage("star")} onClick={() => setPage("star")}><AiOutlineStar size="42.5px"/></li>
            <li className={HandleColorCurrentPage("time")} onClick={() => setPage("time")}><AiOutlineClockCircle size="42.5px"/></li>
            <li className={HandleColorCurrentPage("calendar")} onClick={() => setPage("calendar")}><AiOutlineCalendar size="42.5px"/></li>
        </ul>
    )
}