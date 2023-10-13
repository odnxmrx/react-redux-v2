import Button from "../Button/Button";

const Nav = () => {
    return(
        <nav>
            
            <Button
                path='/home'
                text='Home'
            />
            <Button 
                path='/form'
                text='Form'
            />
        </nav>
    )
}

export default Nav;