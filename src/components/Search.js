import React from 'react';

const Search = props => {
    return ( 
        <div className="search">
            <form>
                <input value={props.value} onChange={props.change} placeholder="Search city..." type="text"/>
            </form>
        </div>
     );
}
 
export default Search;