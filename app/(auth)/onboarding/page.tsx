import { UserButton } from '@clerk/nextjs'

const page = async() => {
  return (
    <main>
        <h1 className='head-text'>Onboarding</h1>
        <UserButton  afterSignOutUrl="/"/>
    </main>
  )
}

export default page