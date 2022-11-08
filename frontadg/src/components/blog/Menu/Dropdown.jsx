import Menu_Items from "./Menu_Items"

const Dropdown = ({submenus,dropdown,depthLevel}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    
    return( 
        <ul className = {`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}> 
            {
            submenus.map((submenu, index) => ( 
                // eslint-disable-next-line react/jsx-pascal-case
                <Menu_Items items = {submenu} key={index} depthLevel={depthLevel}/>
            ))
        } 
        </ul>
    );
};

export default Dropdown;