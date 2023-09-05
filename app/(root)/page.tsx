import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <h1 className='text-heading3-bold text-light-1 '>HomePage</h1>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
