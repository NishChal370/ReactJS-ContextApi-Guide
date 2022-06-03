import React, { useContext } from 'react'
import { Context } from '../context/dataContext';

function AppChild() {
      const  { data } = useContext(Context);

      return (
            <section>
                  <p>Context state value: {data}</p>
            </section>
      )
}

export default AppChild