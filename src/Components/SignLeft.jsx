import SignImg from '../assets/Sign.png';
import Logo from '../assets/Logo.png';
import ThemeToggle from './ThemeToggle';

function SignLeft() {
  return (
    <div className="max-sm:hidden w-[43%] h-[100%] bg-indigo-700 rounded-xl flex items-center justify-center relative">
      <div className="w-[85%] h-[90%] m-auto bg-indigo-500 rounded-2xl relative">
        <div className="pl-10 pt-20">
          <header>
            <div className="w-[140px] h-[50px] flex items-center justify-center gap-1 rounded-3xl logo">
              <img src={Logo} className='w-[35px] -ml-2' alt="Logo" />
              <h1 className='font-bold text-xl'>BASE</h1>
            </div>
          </header>

          <h1 className="text-4xl w-[380px] pt-10 text-white leading-snug">
            Generate detailed reports with just one click
          </h1>
        </div>
        
        <div className="sm:w-full sm:h-[90px] absolute bottom-0 flex items-center">
          <div className="flex pl-10">
            <ThemeToggle />
            <div>
              <img src={SignImg} className='absolute -right-5 -bottom-2 w-[300px]' alt="Sign Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignLeft;
