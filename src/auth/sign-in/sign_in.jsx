import React from 'react'
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
function SignInPage() {
  return (
    <div className='flex justify-center items-center h-screen'>
      
      <SignIn />
    </div>
  )
}

export default SignInPage
