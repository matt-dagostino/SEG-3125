import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LikedCard from "../components/LikedCard";
import { t } from "i18next";

function List() {
  const ingredients = [
    (t('lists.ingredient1')),
    (t('lists.ingredient2')),
    (t('lists.ingredient3')),
    (t('lists.ingredient4')),
    (t('lists.ingredient5')),
    (t('lists.ingredient6')),
    (t('lists.ingredient7')),
    (t('lists.ingredient8')),
    (t('lists.ingredient9')),
    (t('lists.ingredient10')),
    (t('lists.ingredient11')),
  ];

  return (
    <div>
      <Navbar location="list" />
      <main className="flex flex-col justify-center items-center pt-8 gap-4 pb-12">
        <h1 className="text-5xl font-extrabold uppercase text-heading-color">
          {t('lists.title')}
        </h1>
        <div className="flex gap-12">
          <LikedCard
            item={"shawarma"}
            title={t('home.shawarma')}
            description={
              t('home.shawarmaDescription')
            }
            stars={5}
            serving={t('home.shawarmaServing')}
          />
          <LikedCard
            item={"taco"}
            title={t('home.taco')}
            description={
              t('home.tacoDescription')
            }
            stars={2}
            serving={t('home.tacoServing')}
          />
        </div>
        <h2 className="text-5xl font-extrabold uppercase text-heading-color pt-12">
          {t('lists.grocery')}
        </h2>
        <section className="col-span-2 bg-white p-8 rounded-lg shadow-md">
          <h3 className="uppercase text-blue-500 font-semibold mb-2">
            {t('lists.week')}
          </h3>
          <ul className="list-disc ml-6">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default List;
