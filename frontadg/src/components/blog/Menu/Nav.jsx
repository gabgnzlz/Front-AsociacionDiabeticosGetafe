/* eslint-disable react/jsx-pascal-case */
import {menuitems} from "../menuitems"
import Menu_Items from "./Menu_Items";
const Nav = () => {
    return( 
        <nav>
            <ul className="menus"> 
                {
            menuitems.map((menu, index)=>{
                const depthLevel = 0;
                return <Menu_Items items={menu} key={index} depthLevel={depthLevel} />
            })
        } </ul> 
        </nav>
    )
}

export default Nav;