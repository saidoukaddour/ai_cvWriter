import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { UserButton } from '@clerk/clerk-react'
function Header() {
    const { isSignedIn, isLoading , user} = useUser()
  return (
    <div className='flex justify-between items-center p-4 shadow-md'>
        <img src="/logo.svg" alt="logo" />
        {isSignedIn ? (
            <div className='flex items-center gap-2'>
                <Link to="/dashboard">
                    <Button>dashboard</Button>
                </Link>
                <UserButton />
            </div>
        ) : (
            <div className='flex items-center gap-2'>
                <Link to="/auth/sign-in">
                    <Button>get started</Button>
                </Link>
                
            </div>
        )}
        
      
    </div>
  )
}

export default Header
