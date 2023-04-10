import { NavLink } from "react-router-dom"
import styles from "./main.module.css"
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {Loader} from "../../components/Loader/Loader";
import { HiVideoCamera} from "react-icons/hi";
import {AiFillHome} from "react-icons/ai";

const Main = () => {
    return(
        <div className={styles.main}>
            <nav className={styles.nav}>
                <NavLink to={"/"}
                className={({ isActive }) =>
                isActive ? `${styles.activeLink}` : `${styles.link}`
              }>
                  Home <AiFillHome/>
                </NavLink>
                <NavLink to={"/movies"}
                className={({ isActive }) =>
                  isActive ? `${styles.activeLink}` : `${styles.link}`
                }>
                  Movies <HiVideoCamera/>
                </NavLink>
            </nav>
            <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>   
        </div>
    )
}

export default Main;
