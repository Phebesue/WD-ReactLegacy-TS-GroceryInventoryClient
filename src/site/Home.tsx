import React, { FC } from "react";
import "../App.css";

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
  return (
    <div className="intro">
      <h5 className="Intro" style={{ marginTop: "5rem" }}>
        This is a JavaScript React app written in Typescript using the Model
        View Controller pattern. The premise is... You have limited mobility and
        you primarily cook all your food. You buy groceries and store them in
        your home, but due to your limited mobility you aren't able to zip up
        and down the stairs to see what's available in the freezer in the
        basement. This is an app that will allow you to track the groceries you
        have, where you store them, and where you purchased them so you can keep
        track without having actually go see what is where.
        <hr />
        The app is divided into an admin and a user side. The user can edit
        their own account, look at vendors and locations, and they can add, get,
        and edit groceries. Only admins can add, edit, and delete, vendors and
        locations. To use the app go to whats-for-dinner-client.herokuapp.com.
        Register a user. Once you've entered a few of your regular stores, you
        should move on to entering the locations in which you store your
        groceries. Following location, you can begin entering the actual
        groceries.
      </h5>
    </div>
  );
};

export default Home;
