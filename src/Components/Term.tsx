import { ITerm } from "../Pages/Calendar"

export const Term = (props: ITerm) => {

    const {Capacity, OriginalCapacity, Time} = props
    return(
        <div className={'flex flex-col items-center justify-center cursor-pointer select-none rounded-xl border-2 border-[#e1e1e1] p-4 w-[100%] h-[75px]' + (Capacity !== OriginalCapacity ? " hover:bg-green-500 hover:border-green-500" : " hover:bg-red-500 hover:border-red-500")}>
            <h1 className="text-xl font-bold">{Time}</h1>
            <h1 className="text-xl">{`Capacity: ${Capacity} / ${OriginalCapacity}`}</h1> 
        </div>

    )
}

//h-[85px] min-w-[10%] max-w-[180px]