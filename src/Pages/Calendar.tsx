import { useState, useEffect } from 'react'
import data from '../data.json'
import { DateArrows } from "../Components/DateArrows";
import { Terms } from "../Components/Terms";

export interface ITerm {
    Time: string
    Capacity: number
    OriginalCapacity: number
}

export const Calendar = () => {
    const [chosenDate, setChosenDate] = useState<Date>(new Date());
    const [terms, setTerms] = useState<ITerm[]>(data.Terms[0].Data)
    useEffect(() => {
        let tempArr = data.Terms.find(item => item.Date === chosenDate.getDate() + "." + (chosenDate.getMonth() + 1))
        if(tempArr === undefined) setTerms([])
        else setTerms(tempArr.Data)
        
    },[chosenDate])

    return (    
        <>
        <DateArrows chosenDate={chosenDate} setChosenDate={setChosenDate}/>
        <Terms chosenDate={chosenDate} terms={terms} setTerms={setTerms}/>
        </>
    )
}