import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar'

export default function Layout() {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  )
}
