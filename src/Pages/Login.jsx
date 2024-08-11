import SignLeft from "../Components/SignLeft";
import SignRight from "../Components/SignRight";

function Login()
{
    return(
        <>  
            <main className="w-[100vw] h-[100vh]  flex bg-neutral-200 ">

                <div className="w-[95%] flex gap-10  h-[97%] m-auto ">
                   <SignLeft/>  
                  < SignRight/>
                </div>
                 
                 

            </main>
        </>
    )
}
export default Login;