import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import axios from "axios";
import Loader from "../Components/Loader.jsx";
import RepoCard from "../Components/RepoCard.jsx";

const MyProfile = () => {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const apiCall = setTimeout(() => {
      axios.get("https://api.github.com/users/brandie8").then((res) => setData(res.data));
      axios.get("https://api.github.com/users/brandie8/repos").then((res) => setRepos(res.data));
    }, 1500);
    return () => clearTimeout(apiCall);
  }, []);

  return (
    <>
      <div className="items-center flex flex-col mb-5 px-5 h-auto">
        <h1 className="text-4xl font-bold my-5 text-center">My GitHub Profile</h1>

        {data.length !== 0 ? (
          <>
            {/* Profile Card */}
            <div className="card lg:card-side card-bordered border-white flex md:px-5 py-5 w-full md:w-5/12">
              <div className="avatar flex items-center justify-center">
                <div className="mb-8 rounded-full w-40 h-40">
                  <img alt="avatar" src={data.avatar_url} />
                </div>
              </div>
              <div className="card-body flex flex-col items-center p-0 sm:p-5">
                <h1 className="card-title text-3xl">{data.name}</h1>
                <div className="badges my-1 flex w-full justify-evenly flex-wrap">
                  <div className="badge badge-primary cursor-pointer mb-2">
                    <a href="https://github.com/brandie8?tab=repositories">
                      <b>Repos: {data.public_repos}</b>
                    </a>
                  </div>
                  <div className="badge badge-secondary cursor-pointer mb-2">
                    <a href="https://github.com/brandie8?tab=followers">
                      <b>Followers: {data.followers}</b>
                    </a>
                  </div>
                  <div className="badge badge-accent cursor-pointer mb-2">
                    <a href="https://github.com/brandie8?tab=following">
                      <b>Following: {data.following}</b>
                    </a>
                  </div>
                </div>
                <div className="location mt-3 flex items-center">
                  <GoLocation />
                  <p className="ml-2 text-xl">{data.location}</p>
                </div>
                <div className="card-actions mt-3">
                  <a href={`${data.html_url}`} className="btn btn-outline ">
                    <BsGithub className="mr-2 text-lg" />
                    View Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Repositories */}
            <div className="w-12/12 h-2/5 mt-10">
              <h1 className="text-3xl text-center font-bold ">Repositories</h1>
              <p className="text-center font-bold text-2xl">({repos.length})</p>
              <div className="border-l-2 mt-10">
                {repos.map((repo, i) => (
                  <RepoCard
                    key={repo.id}
                    liveDemo={repo.homepage}
                    name={repo.name}
                    description={repo.description}
                    topics={repo.topics}
                    htmlUrl={repo.html_url}
                    language={repo.language}
                  />
                ))}
              </div>
              {data.public_repos > 30 && (
                <a href={`${data.html_url}`} className="btn btn-outline w-full mt-4">
                  View all repos
                </a>
              )}
            </div>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default MyProfile;
