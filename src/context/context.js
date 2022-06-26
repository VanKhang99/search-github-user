import React, { useState, useEffect, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [userDisplay, setUserDisplay] = useState(mockUser);
  const [userRepos, setUserRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  //Request loading
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  //error
  const [error, setError] = useState({ show: false, message: "" });

  //Helper Error
  const helperError = (show = false, message = "") => {
    setError({ show, message });
  };

  //search user
  const searchGithubUser = async (user) => {
    helperError();
    setLoading(true);
    try {
      const response = await axios(`${rootUrl}/users/${user}`);

      if (!response.status === 200) {
        throw new Error();
      }
      setUserDisplay(response.data);

      const { repos_url, followers_url } = response.data;
      const [repos, followers] = await Promise.allSettled([
        axios(`${repos_url}?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]);

      if (repos.status === "fulfilled") {
        setUserRepos(repos.value.data);
      }

      if (followers.status === "fulfilled") {
        setFollowers(followers.value.data);
      }

      checkRequests();
      setLoading(false);
    } catch (error) {
      helperError(true, "There Is No User With That Username");
      setLoading(false);
      console.error(`There Is No User With That Username (${error.code})`);
    }
  };

  //Check rate
  const checkRequests = async () => {
    const { data } = await axios(`${rootUrl}/rate_limit`).catch((err) =>
      console.log(err)
    );

    let { remaining } = data.rate;
    setRequests(remaining);
    if (remaining === 0) {
      helperError(true, "Sorry, you have exceeded your hourly rate limit!");
    }
  };

  useEffect(() => {
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        userDisplay,
        userRepos,
        followers,
        requests,
        loading,
        error,
        searchGithubUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GithubContext);
};

export { GithubContext, GithubProvider, useGlobalContext };
