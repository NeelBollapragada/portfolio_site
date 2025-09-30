import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { slug } = useParams();

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-slate-100 pb-20">
        <div className="mx-auto w-5xl mt-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl text-center font-bold mb-4">
              {slug
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </h1>
            <div className="h-[1px] bg-black mb-6" />
            <h3 className="text-2xl font-bold pl-4 mb-4">Overview</h3>
            <p className="text-lg px-4 text-justify mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* <div className="h-[1px] bg-black mb-4" /> */}
            <h3 className="text-2xl font-bold pl-4 mb-4">Tech Stack</h3>
            <ul className="list-disc list-inside text-lg px-6 mb-6">
              <li>
                <span className="font-semibold">React Native + Expo:</span> used
                for UI frontend and app routing.
              </li>
              <li>
                <span className="font-semibold">SQLite:</span> used for offline
                local storage of fridge, shopping list, AI chats, and food
                database
              </li>
              <li>
                <span className="font-semibold">Appwrite:</span> used for
                authentication and backend syncing - used to keep household and
                fridge data
              </li>
              <li>
                <span className="font-semibold">ExpressJS:</span> used for
                backend functions, deployed on Render
              </li>
              <li>
                <span className="font-semibold">Open Food Facts API:</span> for
                food search and initial food database
              </li>
              <li>
                <span className="font-semibold">Mistral (via OpenRouter):</span>{" "}
                for AI recipe chats
              </li>
              <li>
                <span className="font-semibold">NativeWind, Native-Paper:</span>{" "}
                used for styling
              </li>
              <li>
                <span className="font-semibold">Mistral (via OpenRouter):</span>{" "}
                for AI recipe chats
              </li>
              <li>
                <span className="font-semibold">NativeWind, Native-Paper:</span>{" "}
                used for styling
              </li>
              <li>
                Fridge CRUD actions work locally offline first then on cloud if
                online using @react-native-community/netinfo
              </li>
            </ul>
            <h3 className="text-2xl font-bold pl-4 mb-4">Usage</h3>
            <ol className="list-decimal list-inside text-lg px-6 mb-6 marker:font-semibold">
              <li>Launch the app</li>
              <li>
                <span className="italic">(Optional)</span> Register with a
                unique username if you want cloud sync and household features
              </li>
              <li>Search items to add to your fridge</li>
              <li>Tap on a item to edit quantity, unit or expiry</li>
              <li>
                Use the shopping list tab to make a shopping list and for easy
                check of items already in fridge
              </li>
              <li>Use the AI-assistant for recipes, and cooking ideas</li>
              <li>
                Create or join a household to share your fridge with others
              </li>
              <li>Switch between personal and household fridge views</li>
              <li>
                Works offline, internet is needed for AI chats, cloud sync and
                household features
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
