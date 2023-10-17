import { useWidth } from '../Hooks/useWidth'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'


interface IDateArrowsProps{
    chosenDate: Date;
    setChosenDate: (chosenDate:Date) => void;
}

export const DateArrows = (props: IDateArrowsProps) => {
    const width = useWidth();
    const {chosenDate, setChosenDate} = props;

    const dateButtonDics = () => {
        return  (
        <>
        {width > 600 ? <div onClick={() => HandleDateChangeOnClick(-1)} className='flex justify-center items-center bg-slate-600 cursor-pointer rounded-xl h-full border-2 border-slate-600 w-full select-none m-2 hover:border-amber-600'><h2 className='text-center w-[100px]'>{HandleDateDisplay(-1)}</h2></div>: null}
        <div onClick={() => HandleDateChangeOnClick(0)} className='flex justify-center items-center bg-gradient-to-br from-amber-600 to-orange-400  cursor-pointer rounded-xl h-full border-2 border-amber-600 select-none w-full m-2'><h2 className='text-center w-[100px]'>{HandleDateDisplay(0)}</h2></div>
        {width > 430 ? <div onClick={() => HandleDateChangeOnClick(1)} className='flex justify-center items-center bg-slate-600  cursor-pointer rounded-xl h-full border-2 border-slate-600 w-full m-2 select-none hover:border-amber-600'><h2 className='text-center w-[100px]'>{HandleDateDisplay(1)}</h2></div>: null}
        {width > 1050 ? <div onClick={() => HandleDateChangeOnClick(2)} className='flex justify-center items-center bg-slate-600  cursor-pointer rounded-xl h-full border-2 border-slate-600 w-full m-2 select-none hover:border-amber-600'><h2 className='text-center w-[100px]'>{HandleDateDisplay(2)}</h2></div>: null}
        </>
        )
        
    } 

    const HandleDateChangeBackward = () => {
        let temp = new Date(chosenDate.getTime())
        temp.setDate(chosenDate.getDate() -1)
        setChosenDate(temp)
    }

    const HandleDateChangeForward = () => {
        let temp = new Date(chosenDate.getTime())
        temp.setDate(chosenDate.getDate() + 1)
        setChosenDate(temp)
    }

    const HandleDateChangeOnClick = (difference: number) => {
        let temp = new Date(chosenDate.getTime())
        temp.setDate(chosenDate.getDate() + difference)
        setChosenDate(temp)
    }

    const HandleDateDisplay = (difference: number) => {
        let today = new Date()
        let temp = new Date(chosenDate.getTime())
        let dayShort = "" //urcuje vcera dnes zitra

        if(chosenDate.getDate() === today.getDate() - difference && chosenDate.getMonth() === today.getMonth()) dayShort = "dnes" 
        switch(chosenDate.getDate() + "." + chosenDate.getMonth()){
            case (today.getDate() - difference) + "." + today.getMonth():
                dayShort = "dnes"
                break
            case (today.getDate() - difference - 1) + "." + today.getMonth():
                dayShort = "vcera"
                break
            case (today.getDate() - difference + 1) + "." + today.getMonth():
                dayShort = "zitra"
                break
        }
        temp.setDate(chosenDate.getDate() + difference)
        return` ${temp.getDate()}.${(temp.getMonth() + 1)} ${dayShort}`
    }

    return (
        <div className='flex items-center p-2 justify-between h-[70px]'>
            <div className='flex justify-center h-full items-center w-[100px]' onClick={HandleDateChangeBackward}><AiOutlineArrowLeft size="50"/></div>
            {dateButtonDics()}
            <div className='flex justify-center h-full items-center w-[100px]' onClick={HandleDateChangeForward}><AiOutlineArrowRight size="50"/></div>
        </div>
    )

}