import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button'
import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from '@/components/custom/Header'


function App() {

const { isSignedIn, isLoading , user} = useUser()

// Show a loading state while checking user status
if (isLoading) {
  return <div>Loading...</div>;
}

// Redirect to sign-in page if the user is not signed in
if (!isSignedIn) {
  return <Navigate to="/auth/sign-in" />;
}
  return (
    <>
     
      <Header />
      <Outlet />
      
      
    </>
  )
}

export default App
