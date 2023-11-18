// Import statements
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import axios from "axios";
import Loader from "../Components/Loader.jsx";

const HomePage = () => {
  // State and functions
  const [input, setInput] = useState("");
  const [userSearch, setUserSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search user function
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      axios.get(`https://api.github.com/search/users?q=${input}`).then((res) => {
        setUserSearch(res.data.items);
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <>
      {/* Title */}
      <h1 className="text-4xl text-center">Search GitHub Profile</h1>

      {/* Search Bar */}
      <form className="form-control my-5">
        <div className="flex justify-center space-x-3">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setUserSearch([]);
            }}
            type="search"
            placeholder="Write name"
            className="w-4/6 input input-primary input-bordered lg:w-2/6"
          />
          <button onClick={onSubmitHandler} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      {/* USER LIST CONTAINER */}
      <div className="flex flex-wrap mx-auto justify-center">
        {/* USER LIST */}
        {loading ? (
          <Loader />
        ) : (
          userSearch.map((user) => (
            <div key={user.id} className="mx-auto mb-5">
              {/* USER CARD */}
              <div className="card card-bordered border-white flex pt-5 bg-gray-500 w-80">
                {/* CARD AVATAR */}
                <div className="avatar flex items-center justify-center">
                  <div className="rounded-full w-28 h-28 overflow-hidden">
                    <img alt="avatar" src={user.avatar_url} />
                  </div>
                </div>
                {/* CARD BODY */}
                <div className="card-body flex items-center">
                  <h1 className="card-title text-2xl">{user.login}</h1>
                  <div className="flex items-center">
                    <p className="text-xl">{user.location}</p>
                  </div>
                  <div className="flex items-center">
                    <a href={`${user.blog}`}>{user.blog}</a>
                  </div>
                  <div>
                    <Link to={`/${user.login}`} className="btn btn-outline">
                      <BsGithub className="mr-2 text-lg" />
                      View User
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default HomePage;
