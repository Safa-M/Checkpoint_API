import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const UserList = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(Data);
  return (
    <>
      {Data.map((card) => {
        return (
          <div key={card.id}>
            <Card
              name={card.name}
              companycatchPhrase={card.company.catchPhrase}
              companyname={card.company.name}
              addressstreet={card.address.street}
              addresssuite={card.address.suite}
              addresscity={card.address.city}
              phone={card.phone}
              email={card.email}
              website={card.website}
            />
          </div>
        );
      })}
    </>
  );
};

export default UserList;
