import React, { useState } from 'react'
import { Context } from './dataContext'

const initialData = 0;
function DataProvider({children}) {
      const [data, setData] = useState(initialData);

      const increaseDataHandler = ()=>{
            setData((prevData)=>prevData+1)
      }

      const decreaseDataHandler = ()=>{
            setData((prevData)=>prevData-1)
      }


      return (
            <Context.Provider 
                  value={{data, increaseDataHandler, decreaseDataHandler}}
            >
                  {children}
            </Context.Provider>
      )
}

export default DataProvider