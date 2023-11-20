import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import axios from "axios";
import Loader from "../Components/Loader.jsx";

const Profile = () => {
  let { username } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const apiCall = setTimeout(() => {
      axios.get(`https://api.github.com/users/${username}`).then((res) => setData(res.data));
    }, 1500);
    return () => clearTimeout(apiCall);
  }, []);

  return (
    <>
      {/* Container */}
      <div className="items-center flex flex-col mb-5 px-5 pt-4 h-auto border border-gray-500 rounded-md">
        {/* Page title */}
        <h1 className="text-4xl font-bold my-5 text-center">{username} GitHub Profile</h1>
        {/* Loader animation data control */}
        {data.length !== 0 ? (
          <>
            {/* Profile Card */}
            <div className="card lg:card-side card-bordered border-white flex flex-col sm:flex-row md:px-5 py-5 w-full md:w-2/3"> {/* Adjusted width to 2/3 */}
              {/* Card Avatar */}
              <div className="avatar flex items-center justify-center mb-5 sm:mb-0">
                <div className="rounded-full w-40 h-40 overflow-hidden">
                  <img alt="avatar" src={data.avatar_url} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body flex flex-col items-center sm:items-start p-0 sm:p-5 w-full">
                <h1 className="card-title text-3xl mb-3">{data.name ? data.name : username}</h1>
                <div className="badges flex w-full justify-evenly flex-wrap mb-3">
                  <div className="badge badge-primary cursor-pointer">
                    <a href={`https://github.com/${username}?tab=repositories`}>
                      <b>Repos: {data.public_repos}</b>
                    </a>
                  </div>
                  <div className="badge badge-secondary cursor-pointer">
                    <a href={`https://github.com/${username}?tab=followers`}>
                      <b>Followers: {data.followers}</b>
                    </a>
                  </div>
                  <div className="badge badge-accent cursor-pointer">
                    <a href={`https://github.com/${username}?tab=following`}>
                      <b>Following: {data.following}</b>
                    </a>
                  </div>
                </div>
                <div className="badge badge-accent cursor-pointer">
                  {data.location && <GoLocation className="mr-2 text-xl" />}
                  <p>{data.location}</p>
                </div>
                <div className="badge badge-accent cursor-pointer">
                  <span>
                    Joined GitHub on {new Date(data.created_at).toDateString()}
                  </span>
                </div>
                <div className="card-actions mt-3">
                  <a href={`${data.html_url}`} className="btn btn-outline">
                    <BsGithub className="mr-2 text-2xl bold" />
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Profile;
