import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("AZ")

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(setListings)
  }, [])

  function handleAddNewListing(newItem){
    setListings([...listings, newItem])
  }

  function handleDelete(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  const sortedItems = listings.sort((listing1, listing2)=>{
    if(sortBy==="AZ"){
      return listing1.location.localeCompare(listing2.location);
    } else{
      return listing1.location - listing2.location
    }
  })

  const displayedListings = sortedItems.filter(listing => 
    listing.description.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="app">
      <Header
      search={search}
      setSearch={setSearch} 
      sortBy={sortBy}
      setSortBy={setSortBy}
      />
      <NewListingForm onAddNewItem={handleAddNewListing} />
      <ListingsContainer 
       listings={displayedListings}
       onDeleteListing={handleDelete}
        />
    </div>
  );
}

export default App;
