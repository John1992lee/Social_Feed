

const NavBar = (props) => {
    return ( 
        <nav class="navbar navbar-light bg-light justify-content-between">
            <h3 style={{margin: '1em'}}>Social<span style={{color: 'grey'}}>Feed</span></h3>
            <form class="form-inline">
                <div>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </form>
        </nav>
     );
}
 
export default NavBar;