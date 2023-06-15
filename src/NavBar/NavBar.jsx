import React, { useState } from 'react';





const NavBar = () => {

    const [search, setSearch] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            search: search
        };

    }

    return ( 
        <nav class="navbar navbar-light bg-light justify-content-between">
            <h3 style={{margin: '1em'}}>Social<span style={{color: 'grey'}}>Feed</span></h3>
            <form class="form-inline">
                <div className="butn" onSubmit={handleSubmit}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
                    value={search} onChange={(event) => setSearch(event.target.value)}/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </form>
        </nav>
     );
}
 
export default NavBar;