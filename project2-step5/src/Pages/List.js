import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LikedCard from "../components/LikedCard";

function List() {
  const ingredients = [
    "1 lb (450g) boneless, skinless chicken thighs or breasts, thinly sliced",
    "2 cloves garlic, minced",
    "1 teaspoon ground cumin",
    "1 teaspoon ground paprika",
    "1 teaspoon ground turmeric",
    "1/2 teaspoon ground coriander",
    "1/2 teaspoon ground cinnamon",
    "1/4 teaspoon cayenne pepper (adjust to taste)",
    "Salt and pepper to taste",
    "2 tablespoons lemon juice",
    "3 tablespoons olive oil",
  ];

  return (
    <div>
      <Navbar location="list" />
      <main className="flex flex-col justify-center items-center pt-8 gap-4 pb-12">
        <h1 className="text-5xl font-extrabold uppercase text-heading-color">
          Liked Recipes
        </h1>
        <div className="flex gap-12">
          <LikedCard
            item={"shawarma"}
            title={"Chicken Shawarma"}
            description={
              "The best homemade shawarma recipe using the most amazing (and easy!) spice mixture. Great for salads, wraps + bowls!"
            }
            stars={5}
            serving={"serves 6 - medium difficulty - 90 mins"}
          />
          <LikedCard
            item={"taco"}
            title={"Ground beef tacos"}
            description={
              "Crispy and healthy toasted taco shells loaded with freshly made tomato salsa and well spiced ground beef, topped with creamy guacamole and savory cheese."
            }
            stars={2}
            serving={"serves 3 - Easy difficulty - 45 mins"}
          />
        </div>
        <h2 className="text-5xl font-extrabold uppercase text-heading-color pt-12">
          Grocery List
        </h2>
        <section className="col-span-2 bg-white p-8 rounded-lg shadow-md">
          <h3 className="uppercase text-blue-500 font-semibold mb-2">
            This week's grocery list
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
