import { IoMdClose } from 'react-icons/io';
import Logo from '../assets/Logo.png';

function SmallSidebar({ isOpen, toggleSidebar, onUploadClick }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[250px] bg-white rounded-r-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex items-center justify-between px-4 py-4 bg-white">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-[30px]" />
          <h1 className="text-black text-xl font-medium">BASE</h1>
        </div>
        <IoMdClose onClick={toggleSidebar} className="text-neutral-400 cursor-pointer" size={24} />
      </div>
      <div className="flex flex-col text-[25px] gap-5 items-start ml-3 mt-10 px-2">
        {[
          { icon: 'bi-grid-fill', text: 'Dashboard' },
          { icon: 'bi-cloud-arrow-up-fill', text: 'Upload' },
          { icon: 'bi-receipt-cutoff', text: 'Invoice' },
          { icon: 'bi-calendar4-week', text: 'Schedule' },
          { icon: 'bi-calendar-month', text: 'Calendar' },
          { icon: 'bi-bell-fill', text: 'Notifications' },
          { icon: 'bi-gear-fill', text: 'Settings' }
        ].map((item, index) => (
          <div
            key={index}
            className={`flex gap-4 items-center cursor-pointer pr-5  pl-2 rounded-lg transition-all duration-200 ${
              item.text === 'Upload' ? 'bg-indigo-600 text-white' : 'text-neutral-400'
            }`}
            onClick={item.text === 'Upload' ? onUploadClick : undefined}
          >
            <i
              className={`bi ${item.icon} ${
                item.text === 'Upload' ? 'text-white' : 'text-neutral-400'
              }`}
            ></i>
            <h2
              className={`font-medium text-[12px] ${
                item.text === 'Upload' ? 'text-white' : 'text-black'
              }`}
            >
              {item.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallSidebar;
