import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteListing}) {
  const listingCards = listings.map(listing => (
    <ListingCard 
      key={listing.id}
      id={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
      onDeleteListing={onDeleteListing}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
