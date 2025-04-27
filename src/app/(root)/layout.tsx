import React from 'react'
import SideBar from '../../../components/shared/sidebar'
import MobileNav from '../../../components/shared/mobileNav'

function layout({children}: { children: React.ReactNode} ) {
  return (
    <div className='root'>
      <SideBar />
      <MobileNav />

      <div className='root-container'>
        <div className='wrapper'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default layout
