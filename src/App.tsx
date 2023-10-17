import { useState } from 'react'
import { Account } from './Pages/Account'
import './App.css'
import { Navigation } from './Navigation'
import { Star } from './Pages/Star'
import { Time } from './Pages/Time'
import { Calendar } from './Pages/Calendar'

function App() {
  const [page, setPage] = useState<String>("calendar");
  const pageHandler = () => {
    switch(page){
      case "calendar":
        return <Calendar />
      case "star":
        return <Star />
      case "time":
        return <Time />
      }
      return <Account />
  }
  return (
    <>
    <div className='s:min-w-[100px] s:w-[95%] m:min-w-[700px] m:w-[60%] l:min-w-[750px] l:w-[45%]'>
    <Navigation setPage={setPage} page={page}/>

    {pageHandler()}

    </div>
    </>
  )
}

export default App
