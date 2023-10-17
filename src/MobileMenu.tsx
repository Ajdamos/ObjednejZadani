import { AiOutlineMenuFold } from "react-icons/ai";

export const MobileMenu = (props: {setPage: (page: String) => void, page: String, setDropMenuOpen: (dropMenuOpen: boolean) => void, dropMenuOpen: boolean}) => {
    const {setPage, page, setDropMenuOpen, dropMenuOpen} = props;

    const HandleColorCurrentPage = (text: string) => {
        if (page === text) return "text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 m-[10px] cursor-pointer select-none"
        else return "m-[10px] cursor-pointer select-none" 
    }
    const HandlePageChange = (destination: string) => {
        switch(destination){
            case "account":
                setPage("account")
                break
            case "star":
                setPage("star")
                break
            case "time":
                setPage("time")
                break
            case "calendar":
                setPage("calendar")
                    break
        
        }
    }
    return (
        <>
        <div className="transition duration-150 absolute left-0 top-0 border-r-2 border-black bg-slate-600 h-[100vh] w-[300px] z-[2]">
            <button className="absolute right-0 top-[12.5px]" onClick={() => setDropMenuOpen(!dropMenuOpen)}><AiOutlineMenuFold size="50px"/></button>
            <ul className="flex flex-col font-bold text-3xl items-center h-4 mt-[10vh] ">
                <li onClick={() => HandlePageChange("account")} className={HandleColorCurrentPage("account")}>Account</li>
                <li onClick={() => HandlePageChange("star")} className={HandleColorCurrentPage("star")}>Star</li>
                <li onClick={() => HandlePageChange("time")} className={HandleColorCurrentPage("time")}>Time</li>
                <li onClick={() => HandlePageChange("calendar")} className={HandleColorCurrentPage("calendar")}>Calendar</li>
            </ul>
        </div>
        <div className="absolute left-0 top-0 bg-transparent z-[1] w-full h-full" onClick={() => setDropMenuOpen(false)}></div>
        </>
    )
}