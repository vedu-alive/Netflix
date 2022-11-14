import React from "react";
import SignupCard from "./SignupCard";

const SignupRemaining = () => {
  return (
    <div>
      <SignupCard
        title={"Enjoy on your TV."}
        content={
          "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        }
        img={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        }
        vdo={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
        }
        type={"TV"}
      />
      <SignupCard
        title={"Download your shows to watch offline."}
        content={
          "Save your favourites easily and always have something to watch."
        }
        img={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        }
        vdo={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
        }
        type={"download"}
      />
      <SignupCard
        title={"Watch everywhere."}
        content={
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        }
        img={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        }
        vdo={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
        }
        type={"Watch"}
      />
      <SignupCard
        title={"Create profiles for children."}
        content={
          "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        }
        img={
          "https://occ-0-4409-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
        }
        vdo={""}
        type={"profile"}
      />
    </div>
  );
};

export default SignupRemaining;
