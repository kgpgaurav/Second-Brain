import { useState } from 'react'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/plusicon'
import { Shareicon } from '../icons/Shareicon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { SideBar } from '../components/Sidebar'

export function Dashboard ()  {
  const [modalOpen, setModal] = useState(false);
  return (<div>
  <SideBar/>
  <div className='p-4 ml-72 min-h-screen bg-gray-100' >
    
    <CreateContentModal open={modalOpen} onClose={()=>{
      setModal(false);
    }}/>
    <div className='flex p-4 justify-end gap-4'>
      <Button variant="primary" text="Add Content" startIcon={<PlusIcon/> } onClick={()=>{setModal(true)}} />
      <Button variant="secondary" text="Share Brain" startIcon={<Shareicon/>}/>
    </div>

    <div className='flex gap-4'>
    <Card type="Twitter" link="https://twitter.com/XDevelopers/status/1861111894100320572" title='First tweet' description="its my first time"/>
    <Card type="Youtube" link="https://www.youtube.com/watch?v=xc3Kf5vOJf0" title='First video' description="its my first time"/>
    </div>
    </div>
    </div>
  )
}
export default Dashboard;