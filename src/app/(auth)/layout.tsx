import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='auth'>
      {children}
    </main>
  )
}

export default layout
