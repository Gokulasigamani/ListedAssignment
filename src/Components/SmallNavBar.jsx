import { FaBars, FaBell } from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import profile from '../assets/Profile.jpg';

function SmallNavBar({ toggleSidebar }) {
  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-white flex justify-between items-center px-4 shadow-md z-40">
      <div className="flex items-center gap-4">
        <FaBars onClick={toggleSidebar} className="text-neutral-400 cursor-pointer" size={22} />
        <img src={Logo} alt="Logo" className="w-[30px]" />
        <h1 className="text-black text-xl font-medium">BASE</h1>
      </div>
      <div className="flex items-center gap-4">
        <FaBell className="text-neutral-400 cursor-pointer" size={22} />
        <img src={profile} alt="Profile" className="w-[30px] h-[30px] rounded-full" />
      </div>
    </nav>
  );
}

export default SmallNavBar;
