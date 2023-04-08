import { Routes, Route} from "react-router-dom"
import { lazy, Suspense } from "react";

const HomePage =  lazy(() => import("../pages/HomePage/HomePage"));

const URoutes = () =>{
    return(
        <Suspense fallback={<p>...Loading</p>}>
           <Routes>
                <Route path="/"  element={<HomePage />}/>
            </Routes> 
        </Suspense>
        
    )
}

export default URoutes;