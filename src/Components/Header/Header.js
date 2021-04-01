import './Header.scss';
// we'll have to bring in something from react-router-dom so the logout button pushes users to login page

function Header() {
    const handleLogout = () => {
        // what do?
    }

    return (
        <header className='site-header'>
            <h2 className='site-title'>Silly Jokes by Sillier People</h2>
            {/* we'll update so only logged in users see the logged in button */}
            <div className='logged-out'> 
                <button onClick={handleLogout}>Logout</button>
            </div>
        </header>
    )
}

export default Header;