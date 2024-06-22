import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactComponent as Share } from "../img/share.svg";
import { ReactComponent as Time } from "../img/time.svg";
import { ReactComponent as Serve } from "../img/serve.svg";
import { ReactComponent as Difficulty } from "../img/difficulty.svg";
import shawarma from "../img/shawarma.jpg";
import taco from "../img/taco.jpg";
import pasta from "../img/pasta.jpg";
import { useLocation } from "react-router-dom";

function Recipe() {
    const images = {
        "Chicken Shawarma": shawarma,
        "Ground beef tacos": taco,
        "One-pan sausage pasta": pasta,
      };

    const list = [
        {
          title: "Chicken Shawarma",
          shortDescription:
            "A delicious Middle Eastern dish with marinated chicken.",
          servingAmount: "Serves 4",
          difficulty: "Medium",
          timeCooking: "30 minutes",
          ingredients: [
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
          ],
          longDescription:
            "Chicken shawarma is a popular Middle Eastern street food typically made with thinly sliced marinated chicken, garlic, and spices. It's usually served in a pita wrap or with rice and salad.",
          instructions: {
            "Preheat and Prepare": ["Preheat oven to 400°F (200°C)."],
            Marinate: [
              "In a bowl, mix garlic, cumin, paprika, turmeric, coriander, cinnamon, cayenne pepper, salt, pepper, lemon juice, and olive oil.",
              "Add chicken slices to the marinade. Cover and refrigerate for at least 30 minutes, or overnight for best results.",
            ],
            "Cook the Chicken": [
              "Heat a grill or skillet over medium-high heat.",
              "Cook chicken slices for 3-4 minutes per side, or until fully cooked through.",
            ],
            Serve: [
              "Serve hot, wrapped in pita bread with tahini sauce, salad, and pickles.",
            ],
          },
        },
        {
          title: "Beef stroganoff",
          shortDescription:
            "A classic Russian dish featuring tender beef and creamy sauce.",
          servingAmount: "Serves 6",
          difficulty: "Medium",
          timeCooking: "1 hour",
          ingredients: [
            "1 lb (450g) beef sirloin or tenderloin, thinly sliced",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1 cup mushrooms, sliced",
            "2 tablespoons butter",
            "1 tablespoon olive oil",
            "1 cup beef broth",
            "1/2 cup sour cream",
            "1 tablespoon Dijon mustard",
            "1 tablespoon Worcestershire sauce",
            "Salt and pepper to taste",
            "Fresh parsley, chopped, for garnish",
          ],
          longDescription:
            "Beef Stroganoff is a hearty and comforting dish that originated in Russia. Tender beef strips are cooked with onions, mushrooms, and a creamy sauce made from sour cream, beef broth, and seasonings. It's typically served over egg noodles or rice, garnished with fresh parsley.",
          instructions: {
            "Saute Onions and Garlic": [
              "In a large skillet, heat olive oil and butter over medium heat.",
              "Add chopped onions and minced garlic. Saute until onions are soft and translucent.",
            ],
            "Cook Beef": [
              "Add sliced beef to the skillet. Cook until browned on all sides, about 5-7 minutes.",
              "Season with salt and pepper to taste.",
            ],
            "Add Mushrooms": [
              "Add sliced mushrooms to the skillet. Cook until mushrooms are tender and browned, about 5 minutes.",
            ],
            "Make Sauce": [
              "Deglaze the skillet with beef broth, scraping up any browned bits from the bottom of the pan.",
              "Stir in sour cream, Dijon mustard, and Worcestershire sauce. Simmer gently until the sauce thickens slightly, about 5-7 minutes.",
            ],
            "Serve": [
              "Serve Beef Stroganoff hot over cooked egg noodles or rice.",
              "Garnish with chopped fresh parsley.",
            ],
          },
        },
        {
          title: "Ground beef tacos",
          shortDescription:
            "Classic Mexican tacos made with seasoned ground beef and toppings.",
          servingAmount: "Serves 4",
          difficulty: "Easy",
          timeCooking: "30 minutes",
          ingredients: [
            "1 lb (450g) ground beef",
            "1 small onion, finely chopped",
            "2 cloves garlic, minced",
            "1 tablespoon chili powder",
            "1 teaspoon ground cumin",
            "1/2 teaspoon smoked paprika",
            "Salt and pepper to taste",
            "8 taco shells or tortillas",
            "Taco toppings (shredded lettuce, diced tomatoes, shredded cheese, salsa, sour cream, etc.)",
          ],
          longDescription:
            "Ground Beef Tacos are a beloved Mexican dish featuring seasoned ground beef cooked with onions, garlic, and spices. The beef mixture is served in crispy taco shells or soft tortillas, topped with a variety of fresh toppings like lettuce, tomatoes, cheese, salsa, and sour cream.",
          instructions: {
            "Cook Ground Beef": [
              "In a large skillet, cook ground beef over medium-high heat until browned and cooked through, breaking it up with a spoon as it cooks.",
              "Add chopped onions and minced garlic. Cook until onions are soft and translucent.",
            ],
            "Season": [
              "Stir in chili powder, ground cumin, smoked paprika, salt, and pepper. Cook for another 2-3 minutes to allow flavors to meld.",
            ],
            "Assemble Tacos": [
              "Warm taco shells or tortillas according to package instructions.",
              "Fill each taco shell or tortilla with the ground beef mixture.",
              "Top with your favorite taco toppings such as shredded lettuce, diced tomatoes, shredded cheese, salsa, and sour cream.",
            ],
            "Serve": ["Serve hot and enjoy your delicious Ground Beef Tacos!"],
          },
        },
        {
          title: "One-pan sausage pasta",
          shortDescription:
            "A hearty pasta dish cooked with sausage, tomatoes, and herbs.",
          servingAmount: "Serves 6",
          difficulty: "Easy",
          timeCooking: "30 minutes",
          ingredients: [
            "1 lb (450g) Italian sausage, casings removed",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1 can (14 oz) diced tomatoes",
            "1 can (8 oz) tomato sauce",
            "2 cups chicken broth",
            "1 teaspoon dried oregano",
            "1/2 teaspoon dried basil",
            "Salt and pepper to taste",
            "12 oz (340g) penne pasta",
            "1/2 cup grated Parmesan cheese",
            "Fresh parsley, chopped, for garnish",
          ],
          longDescription:
            "One-Pan Sausage Pasta is a flavorful and easy-to-make pasta dish where everything cooks together in one pan. It features Italian sausage, onions, garlic, tomatoes, and pasta simmered in a savory sauce made from chicken broth and seasonings. Finished with grated Parmesan cheese and fresh parsley, it's a comforting meal perfect for any night of the week.",
          instructions: {
            "Cook Sausage and Onions": [
              "In a large skillet or pot, cook Italian sausage over medium-high heat until browned and cooked through, breaking it up with a spoon as it cooks.",
              "Add chopped onions and minced garlic. Cook until onions are soft and translucent.",
            ],
            "Add Tomatoes and Sauce": [
              "Stir in diced tomatoes, tomato sauce, chicken broth, dried oregano, dried basil, salt, and pepper.",
              "Bring to a simmer and cook for 10 minutes to allow flavors to meld.",
            ],
            "Cook Pasta": [
              "Add penne pasta to the skillet. Stir to combine with the sauce.",
              "Simmer for 12-15 minutes, stirring occasionally, until pasta is cooked al dente and sauce has thickened.",
            ],
            "Finish": [
              "Stir in grated Parmesan cheese until melted and well combined.",
              "Garnish with chopped fresh parsley.",
            ],
            "Serve": ["Serve hot and enjoy your One-Pan Sausage Pasta!"],
          },
        },
        // Add more recipes here
      ];

  const location = useLocation();
  const recipeName = decodeURIComponent(location.pathname.split("/")[2]); // Decode URL-encoded recipe name

  console.log(recipeName);
  // Find the recipe from the list based on the recipeName
  const recipe = list.find((r) => r.title === recipeName);

  if (!recipe) {
    // Handle case where recipe is not found
    return (
      <div className="">
        <Navbar />
        <div className="flex flex-col justify-center items-center pt-8 gap-4 pb-12 text-heading-color">
            <h1 className="text-6xl font-extrabold uppercase">Recipe not found</h1>
            <p className="text-lg">The recipe you are looking for does not exist.</p>
            <p className="font-semibold pt-12">Since backend is not needed for this project not all recipes have been mapped and inputted. However the 3 recipes recipes on the home page work :)</p>
        </div>
        <Footer />

      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-8 gap-4 pb-12 text-heading-color">
        <h1 className="text-6xl font-extrabold uppercase">{recipe.title}</h1>
        <p className="text-lg">{recipe.shortDescription}</p>
        <div className="flex-row flex items-center font-bold uppercase gap-2 ">
          <Serve />
          <p>{recipe.servingAmount}</p>
          •
          <Difficulty />
          <p>{recipe.difficulty} difficulty</p>
          •
          <Time />
          <p>{recipe.timeCooking}</p>
        </div>
        <img
          src={images[recipeName]}
          alt="shawarma"
          className="w-2/3 object-cover rounded-3xl mx-24 shadow-md"
        />
        <div className="grid gap-36 mb-6 md:grid-cols-5 w-2/3">
          <div className="col-span-3 flex flex-col">
            <p>{recipe.longDescription}</p>
            <h1 className="text-3xl py-4 uppercase font-bold">Instructions</h1>
            {Object.keys(recipe.instructions).map((section, idx) => (
              <div key={idx}>
                <h2 className="text-xl uppercase py-4 font-semibold text-blue-500">
                  {section}
                </h2>
                <ul className="list-disc ml-6">
                  {recipe.instructions[section].map((step, stepIdx) => (
                    <li key={stepIdx}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="col-span-2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="uppercase text-blue-500 font-semibold mb-2 ">
              Ingredients
            </h3>
            <ul className="list-disc ml-6">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="cursor-pointer">
            <Share />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipe;
