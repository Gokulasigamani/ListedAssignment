import DownSegment from "../Components/DownSegment";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import SmallDashboard from "../Components/SmallDashBoard";
function Dashboard()
{
    return(
        <> 
            <div className="max-sm:hidden">
            <main className="w-[100vw] h-[100vh] bg-neutral-200 flex">
                    
                    <SideBar/>
                    <div className="w-[100%] h-[100vh] " >
                           <NavBar/>
                        
                            <DownSegment/>

                    </div>

            </main>  
            </div>
           
            <div className="sm:hidden " >
                
                    <SmallDashboard/>
            </div>

        </>
    )
}
export default Dashboard;