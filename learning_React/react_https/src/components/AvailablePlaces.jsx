import { useState, useEffect } from "react";

import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // We want this to run once to fetch all the places data
  // that's why we use an empty dependencies array
  useEffect(() => {
    fetch("https://localhost:3000/places")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        console.log("check");
        setAvailablePlaces(resData.places);
      });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
