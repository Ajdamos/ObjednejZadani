import { Term } from "./Term"
import { ITerm } from "../Pages/Calendar"
import { HiOutlineEmojiSad } from 'react-icons/hi'
interface IProps {
    chosenDate: Date,
    terms: ITerm[],
    setTerms: (terms:ITerm[]) => void;
}

export const Terms = (props: IProps) => {
    const {terms} = props

    if(terms.length < 1) {
        return (
            <div className="flex flex-wrap justify-center items-center h-[400px]">
            <h1 className="text-3xl font-bold">Nejsou vypsany smeny pro toto datum</h1>
            <HiOutlineEmojiSad size="50"/>
            </div>
        )
    }

    return (
        <div className='grid overflow-scroll max-h-[80vh] justify-items-center gap-4 p-2 s:grid-cols-2 m:grid-cols-3 l:grid-cols-4 '>

        {terms.map((item, index) => (
            <Term  Capacity={item.Capacity} OriginalCapacity={item.OriginalCapacity} Time={item.Time} key={index} />
        ))}
       
        </div>
    )
}