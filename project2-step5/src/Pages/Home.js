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
import { useTranslation } from "react-i18next";


function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      <Navbar location="home" />
      {/* Hero Section */}
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center rounded-3xl m-12 "
        style={{ backgroundImage: `url(${heroPage})` }}
      >
        <div className="flex flex-col justify-center items-center text-center text-hero-text gap-4">
          <h1 className="text-4xl lg:text-6xl xl:text-8xl text-white uppercase font-extrabold">
            {t('home.greeting')} <br></br>{t('home.greeting2')}
          </h1>
          <p className="text-white text-xl w-1/3">
            {t('home.description')}
          </p>
          <a
            href="/recipes"
            className="bg-button-blue px-6 py-3 rounded-xl text-sm font-semibold text-white uppercase mt-8"
          >
            {t('home.explore')}
          </a>
        </div>
      </div>

      {/* Trending recipes */}
      <div className="flex flex-col gap-4 mx-12">
        <h1 className="text-5xl text-heading-color uppercase font-extrabold">
          {t('home.trending')}
        </h1>
        <div className="flex justify-around gap-8">
          <TrendingCard
            item={"shawarma"}
            title={t('home.shawarma')}
            description={
              t('home.shawarmaDescription')
            }
            stars={5}
            serving={t('home.shawarmaServing')}
          />
          <TrendingCard
            item={"taco"}
            title={t('home.taco')}
            description={
              t('home.tacoDescription')
            }
            stars={2}
            serving={t('home.tacoServing')}
          />
          <TrendingCard
            item={"pasta"}
            title={t('home.pasta')}
            description={
              t('home.pastaDescription')
            }
            stars={4}
            serving={t('home.pastaServing')}
          />
        </div>
      </div>

      {/* Popular categories */}
      <div className="flex flex-col gap-4 mx-12 mt-12">
        <h1 className="text-5xl text-heading-color uppercase font-extrabold mb-8">
          {t('home.popular')}
        </h1>
        <div className="flex justify-between ">
          <div className="flex flex-col gap-2 w-1/6 text-center justify-center items-center">
            <Breakfast
              onClick={() => navigate("/recipes")}
              className="cursor-pointer h-48 md:h-64 lg:72 xl:h-96"
            />
            <p className="text-xl font-bold hidden md:block">{t('home.breakfast')}</p>
          </div>
          <div className="flex flex-col gap-2 w-1/6 text-center justify-center items-center">
            <Pizza
              onClick={() => navigate("/recipes")}
              className="cursor-pointer h-48 md:h-64 lg:72 xl:h-96"
            />
            <p className="text-xl font-bold hidden md:block">{t('home.pizza')}</p>
          </div>
          <div className="flex flex-col gap-2 w-1/6 text-center justify-center items-center">
            <Vegan
              onClick={() => navigate("/recipes")}
              className="cursor-pointer h-48 md:h-64 lg:72 xl:h-96"
            />
            <p className="text-xl font-bold hidden md:block">{t('home.vegan')}</p>
          </div>
          <div className="flex flex-col gap-2 w-1/6 text-center justify-center items-center">
            <Desserts
              onClick={() => navigate("/recipes")}
              className="cursor-pointer h-48 md:h-64 lg:72 xl:h-96"
            />
            <p className="text-xl font-bold hidden md:block">{t('home.dessert')}</p>
          </div>
          <div className="flex flex-col gap-2 w-1/6 text-center justify-center items-center">
            <Smoothies
              onClick={() => navigate("/recipes")}
              className="cursor-pointer h-48 md:h-64 lg:72 xl:h-96"
            />
            <p className="text-xl font-bold hidden md:block">{t('home.smoothies')}</p>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat h-full flex flex-col items-center justify-center rounded-3xl m-12 text-hero-text text-center gap-4 mt-24"
        style={{ backgroundImage: `url(${newsletter})` }}
      >
        <h3 className="uppercase font-semibold mt-28">
          {t('home.comeout')}
        </h3>
        <h1 className="uppercase text-7xl font-bold w-4/5">
          {t('home.subscribe')}
        </h1>
        <p className="w-2/5">
          {t('home.description2')}
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
              {t('home.confirm')}
            </button>
          </div>
        </form>
      </div>
      {/* Latest recipes */}
      <div className="flex flex-col gap-4 mx-12 mt-12 mb-24">
        <h1 className="text-5xl text-heading-color uppercase font-extrabold mb-8">
          {t('home.latest')}
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 text-center justify-center">
            <Gnocchi
              onClick={() => navigate("/recipes")}
              className="cursor-pointer rounded-3xl items-center justify-center"
            />
            <p className="text-xl font-bold">{t('home.chorizo')}</p>
          </div>
          <div className="flex flex-col gap-2 text-center justify-center">
            <Tuna
              onClick={() => navigate("/recipes")}
              className="cursor-pointer rounded-3xl items-center justify-center"
            />
            <p className="text-xl font-bold">{t('home.tuna')}</p>
          </div>
          <div className="flex flex-col gap-2 text-center justify-center">
            <Tater
              onClick={() => navigate("/recipes")}
              className="cursor-pointer rounded-3xl items-center justify-center"
            />
            <p className="text-xl font-bold">{t('home.tater')}</p>
          </div>
          <div className="flex flex-col gap-2 text-center justify-center">
            <Broccoli
              onClick={() => navigate("/recipes")}
              className="cursor-pointer rounded-3xl items-center justify-center"
            />
            <p className="text-xl font-bold">{t('home.broccoli')}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
