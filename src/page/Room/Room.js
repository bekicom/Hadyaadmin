import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css.css";

export default function Room() {
  const [rooms, setRooms] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwMmFlOSIsImZ1bGxuYW1lIjoiQmVrem9kIiwicGhvbmUiOjk5ODkzOTA3NTM1MCwicGFzc3dvcmQiOiI4YzY5NzZlNWI1NDEwNDE1YmRlOTA4YmQ0ZGVlMTVkZmIxNjdhOWM4NzNmYzRiYjhhODFmNmYyYWI0NDhhOTE4IiwiYmFsYW5jZSI6MCwiYWN0aXZlIjowLCJyb2xlIjoiYWRtaW4iLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0wMVQxNTo0MTozMC4wMDBaIiwidXBkYXRlZF9hdCI6bnVsbCwiaWF0IjoxNzA3MTYyMjgzLCJleHAiOjE3MDk3NTQyODN9.C23tcebnuYTWKjBl6Rylj_rWZPS3_I4eScnJHl-BzZc";

  // getallrooms

  useEffect(() => {
    axios
      .get("https://api.hadyacrm.uz/api/room", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setRooms(res.data.innerData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //  delete room
  const deleteRoom = (id) => {
    axios
      .delete(`https://api.hadyacrm.uz/api/room/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="roomcardpage">
      <button>
        Xona yaratish
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            d="M12 4v16M4 12h16"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="roomcards">
        {rooms?.map((room) => (
          <div className="roomcard" key={room._id}>
            <h1>{room.name}-xona</h1>
            <p>{room.places} kishilik</p>
            <button onClick={() => deleteRoom(room._id)}>
              xonani o'chirish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
