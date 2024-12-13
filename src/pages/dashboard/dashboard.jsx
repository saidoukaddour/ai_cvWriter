import React from 'react'
import AddResume from './components/AddResume'
function Dashboard() {
  return (
    <div className='p-10 md:p-20 lg:p-32'>
        <h2 className='text-2xl font-bold'>My resume</h2>
        <p>Start building your resume now</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10'>
            <AddResume />
        </div>
    </div>
  )
}

export default Dashboard
