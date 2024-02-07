function SearchBar () {

    return(
        <div>
            <p>Search Bar</p>
            <label>
                <input onChange={(e) => setSearch(e.target.value)} type="text" ></input>
            </label>
            
        </div>
    )
}

export default SearchBar;