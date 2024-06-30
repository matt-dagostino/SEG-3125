import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroPage from "../img/heropage.jpg";
import newsletter from "../img/newsletter.png";
import TrendingCard from "../components/TrendingCard";
import { ReactComponent as Breakfast } from "../img/breakfast.svg";
import { ReactComponent as Pizza } from "../img/pizza.svg";
import { ReactComponent as Vegan } from "../img/vegan.svg";
import { ReactComponent as Desserts } from "../img/desserts.svg";
import { ReactComponent as Smoothies } from "../img/smoothies.svg";
import { ReactComponent as Gnocchi } from "../img/gnocchi.svg";
import { ReactComponent as Tuna } from "../img/tuna.svg";
import { ReactComponent as Tater } from "../img/tatertots.svg";
import { ReactComponent as Broccoli } from "../img/broccoli.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="overflow-hidden">
      <Navbar location="home" />
      {/* Hero Section */}
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center rounded-3xl m-12 "
        style={{ backgroundImage: `url(${heroPage})` }}
      >
        <div className="flex flex-col justify-center items-center text-center text-hero-text gap-4">
          <h1 className="text-8xl text-white uppercase font-extrabold">
            Craft delicious <br></br>memories
          </h1>
          <p className="text-white text-xl w-1/3">
            From mouthwatering recipes to expert cooking tips, embark on a
            journey to create unforgettable dishes that bring joy to every
            mealtime.
          </p>
          <a
            href="/recipes"
            className="bg-button-blue px-6 py-3 rounded-xl text-sm font-semibold text-white uppercase mt-8"
          >
            Explore recipes
          </a>
        </div>
      </div>

      {/* Trending recipes */}
      <div className="flex flex-col gap-4 mx-12">
        <h1 className="text-5xl text-heading-color uppercase font-extrabold">
          trending recipes
        </h1>
        <div className="flex justify-around">
          <TrendingCard
            item={"shawarma"}
            title={"Chicken Shawarma"}
            description={
              "The best homemade shawarma recipe using the most amazing (and easy!) spice mixture. Great for salads, wraps + bowls!"
            }
            stars={5}
            serving={"serves 6 - medium difficulty - 90 mins"}
          />
          <TrendingCard
            item={"taco"}
            title={"Ground beef tacos"}
            description={
              "Crispy and healthy toasted taco shells loaded with freshly made tomato salsa and well spiced ground beef, topped with creamy guacamole and savory cheese."
            }
            stars={2}
            serving={"serves 3 - Easy difficulty - 45 mins"}
          />
          <TrendingCard
            item={"pasta"}
            title={"One-pan sausage pasta"}
            description={
              "Rigatoni and sausage is a classic combo but any short pasta will work for this magic one-pot, ready in half an hour dish that will amaze your guests!"
            }
            stars={4}
            serving={"serves 5 - easy difficulty - 30 mins"}
          />
        </div>
      </div>

      {/* Popular categories */}
      <div className="flex flex-col gap-4 mx-12 mt-12">
        <h1 className="text-5xl text-heading-color uppercase font-extrabold mb-8">
          Popular categories
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 w-1/6 text-center justify-center">
            <Breakfast
              onClick={() => navigate("/recipes")}
              className="cursor-pointer"
            />
            <p className="text-xl font-bold">Breakfast</p>
          </div>
          <div className="flex flex-col gap-2 w-1/6 text-center justify-center">
            <Pizza
              onClick={() => navigate("/recipes")}
              className="cursor-pointer"
            />
            <p className="text-xl font-bold">Pizza</p>
          </div>
          <div className="flex flex-col gap-2 w-1/6 text-center justify-center">
            <Vegan
              onClick={() => navigate("/recipes")}
              className="cursor-pointer"
            />
            <p className="text-xl font-bold">Vegan</p>
          </div>
          <div className="flex flex-col gap-2 w-1/6 text-center justify-center">
            <Desserts
              onClick={() => navigate("/recipes")}
              className="cursor-pointer"
            />
            <p className="text-xl font-bold">Desserts</p>
          </div>
          <div className="flex flex-col gap-2 w-1/6 text-center justify-center">
            <Smoothies
              onClick={() => navigate("/recipes")}
              className="cursor-pointer"
            />
            <p className="text-xl font-bold">Smoothies</p>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat h-full flex flex-col items-center justify-center rounded-3xl m-12 text-hero-text text-center gap-4 mt-24"
        style={{ backgroundImage: `url(${newsletter})` }}
      >
        <h3 className="uppercase font-semibold mt-28">
          want to know when new recipes come out?
        </h3>
        <h1 className="uppercase text-7xl font-bold w-4/5">
          Subscribe to our newsletter
        </h1>
        <p className="w-2/5">
          Join our newsletter for exclusive content, seasonal inspirations, and
          special offers that will elevate your kitchen adventures!
        </p>
        <form className="w-1/4 mb-24 mt-8" onSubmit={() => console.log("lol")}>
          <div class="relative">
            <input
              type="search"
              id="search"
              class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-white focus:ring-blue-500 focus:border-blue-500 "
              placeholder="john.doe@gmail.com"
              required
            />
            <button
              type="submit"
              class="text-white uppercase absolute end-2.5 bottom-2.5 bg-footer-color hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-xs px-4 py-2"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
      {/* Latest recipes */}
      <div className="flex flex-col gap-4 mx-12 mt-12 mb-24">
        <h1 className="text-5xl text-heading-color uppercase font-extrabold mb-8">
          Latest recipes
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 text-center justify-center">
            <Gnocchi
              onClick={() => navigate("/recipes")}
              className="cursor-pointer rounded-3xl items-center justify-center"
            />
            <p className="text-xl font-bold">Chorizo Mozzarella Gnocchi</p>
          </div>
          <div className="flex flex-col gap-2 text-center justify-center">
            <Tuna
              onClick={() => navigate("/recipes")}
              className="cursor-pointer rounded-3xl items-center justify-center"
            />
            <p className="text-xl font-bold">Tuna grilled cheese</p>
          </div>
          <div className="flex flex-col gap-2 text-center justify-center">
            <Tater
              onClick={() => navigate("/recipes")}
              className="cursor-pointer rounded-3xl items-center justify-center"
            />
            <p className="text-xl font-bold">Tater tots casserole</p>
          </div>
          <div className="flex flex-col gap-2 text-center justify-center">
            <Broccoli
              onClick={() => navigate("/recipes")}
              className="cursor-pointer rounded-3xl items-center justify-center"
            />
            <p className="text-xl font-bold">Broccoli ranch fiesta</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
