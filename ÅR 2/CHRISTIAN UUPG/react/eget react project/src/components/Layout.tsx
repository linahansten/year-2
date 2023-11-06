import React from 'react'
import Sidebar from './Sidebar'
type layout = {children: React.ReactNode}

export default function Layout({children}:layout) {
  return (
    <div className='layout'>
        {children}
        <Sidebar/>
    </div>
  )
}
