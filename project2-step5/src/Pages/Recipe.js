import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Share } from "../img/share.svg";
import { ReactComponent as Time } from "../img/time.svg";
import { ReactComponent as Serve } from "../img/serve.svg";
import { ReactComponent as Difficulty } from "../img/difficulty.svg";
import { useLocation } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { IoMdHeart, IoIosHeartEmpty } from "react-icons/io";

function Recipe() {
  const scrollToRef = useRef(null);
  useEffect(() => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [liked, setLiked] = useState(true);
  const toggleLike = () => {
    setLiked(!liked);
  };

  const [add, setAdd] = useState(true);
  const toogleAdd = () => {
    setAdd(!add);
  };

  const images = {
    "Chicken Shawarma":
      "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
    "Ground beef tacos":
      "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
    "Vegetarian Pad Thai":
      "https://img.taste.com.au/z9EIVHJg/taste/2021/02/10-minute-vegetarian-pad-thai-168946-2.jpg",
    "One-pan sausage pasta":
      "https://www.mrsjoneskitchen.com/wp-content/uploads/2022/08/one-pot-creamy-sausage-pasta.jpg",
    "Spinach and Feta Stuffed Chicken Breast":
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2023_48/2041166/chef-dan-churchill-chicken-mc-2x1-231128.jpg",
    "Mushroom Risotto":
      "https://www.allrecipes.com/thmb/Pow6PE9UyushNDB4wutXNnmriX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/85389-gourmet-mushroom-risotto-86-7a2d218f53e94ccfaecc69b6fd93cab8.jpg",
    "Grilled Salmon with Lemon Butter Sauce":
      "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
    "Caprese Salad":
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
    "Pesto Chicken Pasta":
      "https://www.budgetbytes.com/wp-content/uploads/2019/10/Creamy-Pesto-Chicken-Pasta-close-plate.jpg",
    "Spaghetti Carbonara":
      "https://images.services.kitchenstories.io/6glN_4JhpVS9aUiBS7JnGsuDULA=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2568-photo-final-_0.jpg",
    "Tom Yum Soup":
      "https://www.thespruceeats.com/thmb/PrhhN3g0-fkHH3ULhqcOdo8X_Mk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-tom-yum-soup-3217762-hero-01-4872510cb5f24d9480e7a2f4b8f23c57.jpg",
    "Tacos al Pastor":
      "https://www.seriouseats.com/thmb/4kbwN13BlZnZ3EywrtG2AzCKuYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg",
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
      title: "Ground beef tacos",
      shortDescription: "Delicious ground beef tacos seasoned to perfection.",
      servingAmount: "Serves 4",
      difficulty: "Easy",
      timeCooking: "45 minutes",
      ingredients: [
        "1 lb (450g) ground beef",
        "1 packet taco seasoning mix",
        "1/2 cup water",
        "8 small tortillas",
        "1 cup shredded lettuce",
        "1 cup diced tomatoes",
        "1/2 cup shredded cheddar cheese",
        "1/4 cup chopped fresh cilantro",
        "Sour cream and salsa for serving",
      ],
      longDescription:
        "Ground beef tacos are a classic Mexican dish made with seasoned ground beef served in tortillas with fresh toppings. Perfect for a quick and delicious meal!",
      instructions: {
        "Cook the Beef": [
          "In a skillet over medium-high heat, cook ground beef until browned. Drain excess fat.",
          "Add taco seasoning mix and water. Stir and simmer for 5 minutes, until thickened.",
        ],
        "Prepare the Tacos": [
          "Warm tortillas in a dry skillet or microwave.",
          "Fill tortillas with beef mixture, lettuce, tomatoes, cheese, cilantro, sour cream, and salsa.",
        ],
        Serve: ["Serve immediately and enjoy!"],
      },
    },
    {
      title: "One-pan sausage pasta",
      shortDescription: "An easy one-pan sausage pasta dish with creamy sauce.",
      servingAmount: "Serves 3",
      difficulty: "Medium",
      timeCooking: "25 minutes",
      ingredients: [
        "8 oz (225g) pasta (penne or similar)",
        "4 Italian sausages, casings removed",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "1 can (14 oz / 400g) diced tomatoes",
        "1 cup (240ml) chicken broth",
        "1/2 cup (120ml) heavy cream",
        "1 teaspoon dried basil",
        "Salt and pepper to taste",
        "Grated Parmesan cheese for serving",
      ],
      longDescription:
        "One-pan sausage pasta is a quick and flavorful Italian-inspired dish made with pasta, Italian sausages, tomatoes, and a creamy sauce all cooked in one pan.",
      instructions: {
        "Cook the Sausage": [
          "In a large skillet, cook sausage over medium-high heat, breaking it up into pieces, until browned.",
          "Add onion and garlic, cook until softened.",
        ],
        "Add Pasta and Sauce": [
          "Stir in diced tomatoes (with juices), chicken broth, cream, dried basil, salt, and pepper.",
          "Add pasta and bring to a simmer. Cook uncovered, stirring occasionally, until pasta is tender and sauce has thickened.",
        ],
        Serve: ["Sprinkle with grated Parmesan cheese and serve hot."],
      },
    },
    {
      title: "Vegetarian Pad Thai",
      shortDescription:
        "A classic vegetarian pad thai made with rice noodles and tofu.",
      servingAmount: "Serves 4",
      difficulty: "Medium",
      timeCooking: "40 minutes",
      ingredients: [
        "8 oz (225g) rice noodles",
        "1 block (14 oz / 400g) firm tofu, cubed",
        "2 eggs, beaten",
        "1 cup bean sprouts",
        "1/2 cup chopped peanuts",
        "2 green onions, chopped",
        "2 cloves garlic, minced",
        "1/4 cup soy sauce",
        "3 tablespoons tamarind paste",
        "2 tablespoons brown sugar",
        "1 tablespoon fish sauce (optional)",
        "1 tablespoon vegetable oil",
        "Lime wedges and cilantro for serving",
      ],
      longDescription:
        "Vegetarian pad thai is a popular Thai stir-fried noodle dish made with rice noodles, tofu, peanuts, and a tangy tamarind sauce. It's a flavorful and satisfying vegetarian meal!",
      instructions: {
        "Prepare Noodles": [
          "Soak rice noodles in hot water until softened. Drain and set aside.",
        ],
        "Cook Tofu and Eggs": [
          "In a large skillet or wok, heat oil over medium-high heat. Add tofu and cook until golden brown. Push tofu to one side and add beaten eggs, scrambling until cooked.",
        ],
        "Stir-Fry": [
          "Add garlic, green onions, bean sprouts, and peanuts. Stir-fry for 1-2 minutes.",
          "Add drained noodles, soy sauce, tamarind paste, brown sugar, and fish sauce (if using). Toss everything together until well combined and heated through.",
        ],
        Serve: ["Serve hot with lime wedges and cilantro."],
      },
    },
    {
      title: "Spinach and Feta Stuffed Chicken Breast",
      shortDescription:
        "Tender chicken breasts stuffed with spinach and feta cheese.",
      servingAmount: "Serves 2",
      difficulty: "Medium",
      timeCooking: "35 minutes",
      ingredients: [
        "2 boneless, skinless chicken breasts",
        "2 cups fresh spinach leaves",
        "1/2 cup crumbled feta cheese",
        "2 cloves garlic, minced",
        "1 tablespoon olive oil",
        "1/2 teaspoon dried oregano",
        "Salt and pepper to taste",
        "Toothpicks or kitchen twine",
      ],
      longDescription:
        "Spinach and feta stuffed chicken breast is an elegant dish where chicken breasts are filled with a savory mixture of spinach, garlic, and feta cheese, then baked to perfection.",
      instructions: {
        "Prepare Chicken": [
          "Preheat oven to 375°F (190°C).",
          "Slice each chicken breast horizontally to create a pocket without cutting all the way through.",
        ],
        "Make Filling": [
          "In a skillet, heat olive oil over medium heat. Add garlic and cook until fragrant.",
          "Add spinach and cook until wilted. Remove from heat and stir in crumbled feta, oregano, salt, and pepper.",
        ],
        "Stuff and Bake": [
          "Stuff each chicken breast with spinach and feta mixture. Secure with toothpicks or tie with kitchen twine if needed.",
          "Place stuffed chicken breasts on a baking sheet. Bake for 25-30 minutes, or until chicken is cooked through.",
        ],
        Serve: ["Remove toothpicks or twine before serving."],
      },
    },
    {
      title: "Mushroom Risotto",
      shortDescription:
        "Creamy and comforting risotto made with Arborio rice and mushrooms.",
      servingAmount: "Serves 4",
      difficulty: "Hard",
      timeCooking: "45 minutes",
      ingredients: [
        "1 cup Arborio rice",
        "4 cups chicken or vegetable broth",
        "1 cup sliced mushrooms (such as cremini or button)",
        "1/2 cup dry white wine",
        "1/2 cup grated Parmesan cheese",
        "1/4 cup chopped fresh parsley",
        "2 tablespoons butter",
        "1 tablespoon olive oil",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
      ],
      longDescription:
        "Mushroom risotto is a classic Italian dish where creamy Arborio rice is cooked slowly with mushrooms, broth, wine, and Parmesan cheese until it reaches a rich and velvety texture.",
      instructions: {
        "Prepare Broth": [
          "In a saucepan, heat broth until simmering. Keep warm over low heat.",
        ],
        "Sauté Mushrooms": [
          "In a large skillet, heat olive oil and butter over medium heat. Add onions and garlic, cook until softened.",
          "Add sliced mushrooms and cook until browned and tender. Remove half of the mushrooms and set aside.",
        ],
        "Cook Risotto": [
          "Add Arborio rice to the skillet with remaining mushrooms. Stir until rice is coated with oil and slightly translucent.",
          "Pour in white wine and cook until absorbed. Begin adding warm broth, one ladleful at a time, stirring frequently until absorbed before adding more.",
          "Continue adding broth and stirring until rice is creamy and tender, about 20-25 minutes.",
        ],
        Finish: [
          "Stir in reserved mushrooms, Parmesan cheese, and chopped parsley. Season with salt and pepper.",
          "Remove from heat and let rest for a few minutes before serving.",
        ],
        Serve: [
          "Serve hot, garnished with additional Parmesan cheese and parsley if desired.",
        ],
      },
    },
    {
      title: "Grilled Salmon with Lemon Butter Sauce",
      shortDescription:
        "Juicy grilled salmon fillets topped with a tangy lemon butter sauce.",
      servingAmount: "Serves 2",
      difficulty: "Medium",
      timeCooking: "20 minutes",
      ingredients: [
        "2 salmon fillets",
        "Salt and pepper to taste",
        "1 tablespoon olive oil",
        "2 tablespoons butter",
        "2 tablespoons lemon juice",
        "1 tablespoon chopped fresh dill (or 1 teaspoon dried dill)",
        "1 clove garlic, minced",
        "Lemon slices for garnish",
      ],
      longDescription:
        "Grilled salmon with lemon butter sauce is a healthy and flavorful dish where salmon fillets are seasoned, grilled, and served with a buttery lemon sauce infused with garlic and dill.",
      instructions: {
        "Prepare Salmon": [
          "Preheat grill or grill pan over medium-high heat. Season salmon fillets with salt, pepper, and olive oil.",
        ],
        "Grill Salmon": [
          "Grill salmon fillets for about 4-5 minutes per side, or until fish flakes easily with a fork.",
        ],
        "Make Lemon Butter Sauce": [
          "In a small saucepan, melt butter over medium heat. Stir in lemon juice, dill, and minced garlic. Cook for 1-2 minutes until heated through.",
        ],
        Serve: [
          "Transfer grilled salmon to plates. Spoon lemon butter sauce over salmon fillets. Garnish with lemon slices and serve hot.",
        ],
      },
    },
    {
      title: "Caprese Salad",
      shortDescription:
        "Fresh and vibrant salad with tomatoes, mozzarella, basil, and balsamic glaze.",
      servingAmount: "Serves 2",
      difficulty: "Easy",
      timeCooking: "10 minutes",
      ingredients: [
        "2 large tomatoes, sliced",
        "8 oz (225g) fresh mozzarella cheese, sliced",
        "1/2 cup fresh basil leaves",
        "2 tablespoons balsamic glaze",
        "2 tablespoons extra virgin olive oil",
        "Salt and pepper to taste",
      ],
      longDescription:
        "Caprese salad is a simple and elegant Italian salad made with ripe tomatoes, fresh mozzarella cheese, basil leaves, and a drizzle of balsamic glaze.",
      instructions: {
        "Assemble Salad": [
          "On a serving platter, layer tomato slices, mozzarella slices, and fresh basil leaves.",
        ],
        Season: [
          "Drizzle extra virgin olive oil and balsamic glaze over the salad.",
          "Season with salt and pepper to taste.",
        ],
        Serve: ["Serve immediately and enjoy!"],
      },
    },
    {
      title: "Pesto Chicken Pasta",
      shortDescription:
        "Delicious pasta tossed in creamy pesto sauce with tender chicken breast and sun-dried tomatoes.",
      servingAmount: "Serves 4",
      difficulty: "Medium",
      timeCooking: "30 minutes",
      ingredients: [
        "8 oz (225g) pasta (such as penne or spaghetti)",
        "2 boneless, skinless chicken breasts, cut into bite-sized pieces",
        "1/2 cup basil pesto sauce",
        "1/2 cup heavy cream",
        "1/4 cup sun-dried tomatoes, chopped",
        "1/4 cup grated Parmesan cheese",
        "Salt and pepper to taste",
      ],
      longDescription:
        "Pesto chicken pasta is a comforting Italian dish where pasta is coated in a creamy basil pesto sauce with tender chicken pieces and sun-dried tomatoes, finished with Parmesan cheese.",
      instructions: {
        "Cook Pasta": [
          "Cook pasta according to package instructions. Drain and set aside.",
        ],
        "Cook Chicken": [
          "In a large skillet, cook chicken pieces until browned and cooked through.",
        ],
        "Make Pesto Cream Sauce": [
          "Stir in basil pesto sauce, heavy cream, and sun-dried tomatoes. Cook until heated through and sauce begins to thicken.",
        ],
        "Combine and Serve": [
          "Add cooked pasta to the skillet with the sauce. Toss everything together until pasta is well coated.",
          "Season with salt and pepper to taste. Sprinkle with grated Parmesan cheese.",
        ],
        Serve: ["Serve hot and enjoy!"],
      },
    },
    {
      title: "Spaghetti Carbonara",
      shortDescription:
        "Classic Italian spaghetti carbonara with crispy pancetta and creamy egg sauce.",
      servingAmount: "Serves 4",
      difficulty: "Medium",
      timeCooking: "30 minutes",
      ingredients: [
        "8 oz (225g) spaghetti",
        "4 oz (115g) pancetta or bacon, diced",
        "3 large eggs",
        "1 cup grated Parmesan cheese",
        "2 cloves garlic, minced",
        "Salt and black pepper to taste",
        "Chopped fresh parsley for garnish",
      ],
      longDescription:
        "Spaghetti carbonara is a traditional Italian pasta dish where spaghetti is tossed in a creamy sauce made with eggs, Parmesan cheese, and crispy pancetta or bacon.",
      instructions: {
        "Cook Pasta": [
          "Cook spaghetti in salted boiling water until al dente. Reserve 1/2 cup of pasta water. Drain pasta and set aside.",
        ],
        "Cook Pancetta": [
          "In a large skillet, cook pancetta over medium heat until crispy. Remove pancetta with a slotted spoon and drain on paper towels.",
        ],
        "Make Carbonara Sauce": [
          "In a bowl, whisk together eggs, grated Parmesan cheese, minced garlic, salt, and black pepper.",
        ],
        "Combine and Serve": [
          "Add cooked spaghetti to the skillet with the pancetta drippings. Remove skillet from heat.",
          "Quickly pour egg mixture over hot pasta, tossing quickly to coat. The heat from the pasta will cook the eggs and create a creamy sauce.",
          "If needed, add reserved pasta water a little at a time to loosen the sauce.",
          "Serve immediately, garnished with crispy pancetta and chopped parsley.",
        ],
        Serve: ["Serve hot and enjoy!"],
      },
    },
    {
      title: "Tom Yum Soup",
      shortDescription:
        "Authentic Thai soup with shrimp, lemongrass, and chili.",
      servingAmount: "Serves 4",
      difficulty: "Medium",
      timeCooking: "25 minutes",
      ingredients: [
        "4 cups chicken or vegetable broth",
        "1 lb (450g) shrimp, peeled and deveined",
        "2 stalks lemongrass, cut into 2-inch pieces and bruised",
        "4 kaffir lime leaves, torn",
        "4 slices galangal or ginger",
        "2-3 red Thai chilies, sliced",
        "1 tomato, cut into wedges",
        "1 onion, cut into wedges",
        "1 cup mushrooms, sliced",
        "2 tablespoons fish sauce",
        "2 tablespoons lime juice",
        "1 tablespoon sugar",
        "Cilantro leaves for garnish",
      ],
      longDescription:
        "Tom yum soup is a spicy and sour Thai soup flavored with lemongrass, lime leaves, galangal, and chili. It's traditionally made with shrimp and is bursting with bold flavors.",
      instructions: {
        "Prepare Broth": [
          "In a large pot, bring chicken or vegetable broth to a boil.",
        ],
        "Simmer Soup": [
          "Add lemongrass, kaffir lime leaves, galangal or ginger, and red Thai chilies. Simmer for 5-10 minutes to infuse flavors.",
          "Add tomatoes, onions, mushrooms, and shrimp. Cook until shrimp are pink and cooked through.",
        ],
        Season: [
          "Stir in fish sauce, lime juice, and sugar. Adjust seasoning to taste.",
        ],
        Serve: ["Garnish with cilantro leaves and serve hot."],
      },
    },
    {
      title: "Tacos al Pastor",
      shortDescription:
        "Traditional Mexican tacos with marinated pork and pineapple.",
      servingAmount: "Serves 6",
      difficulty: "Medium",
      timeCooking: "60 minutes",
      ingredients: [
        "2 lbs (900g) pork shoulder, thinly sliced",
        "1 cup pineapple juice",
        "1/4 cup orange juice",
        "3 cloves garlic, minced",
        "1 tablespoon chili powder",
        "1 teaspoon ground cumin",
        "1 teaspoon dried oregano",
        "1/2 teaspoon paprika",
        "1/4 teaspoon ground cloves",
        "Salt and pepper to taste",
        "1/2 pineapple, peeled and sliced into rings",
        "Corn tortillas",
        "Chopped cilantro and diced onions for serving",
      ],
      longDescription:
        "Tacos al pastor are a classic Mexican street food where thinly sliced pork shoulder is marinated with pineapple, spices, and citrus, then grilled to perfection and served with pineapple slices in corn tortillas.",
      instructions: {
        "Marinate Pork": [
          "In a bowl, combine pineapple juice, orange juice, minced garlic, chili powder, cumin, oregano, paprika, ground cloves, salt, and pepper.",
          "Add sliced pork shoulder to the marinade. Cover and refrigerate for at least 2 hours, or overnight for best results.",
        ],
        "Grill Pork and Pineapple": [
          "Preheat grill or grill pan over medium-high heat. Grill marinated pork slices and pineapple rings until pork is cooked through and pineapple is caramelized.",
        ],
        Serve: [
          "Serve grilled pork in corn tortillas, topped with grilled pineapple slices, chopped cilantro, and diced onions.",
        ],
      },
    },
  ];

  const location = useLocation();
  const recipeName = decodeURIComponent(location.pathname.split("/")[2]); // Decode URL-encoded recipe name

  console.log(recipeName);
  // Find the recipe from the list based on the recipeName
  const recipe = list.find((r) => r.title === recipeName);

  if (!recipe) {
    // Handle case where recipe is not found
    return (
      <div className="h-screen" ref={scrollToRef}>
        <Navbar />
        <div className="flex flex-col justify-center items-center pt-8 gap-4 pb-12 text-heading-color">
          <h1 className="text-6xl font-extrabold uppercase">
            Recipe not found
          </h1>
          <p className="text-lg">
            The recipe you are looking for does not exist.
          </p>
          <p className="font-semibold pt-12">
            Hmmm... how did you even end up here?! 🤔 Some recipes are still in
            the works by the chef... check back shortly.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div ref={scrollToRef}>
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
          alt={recipe.title}
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
            <div className="flex gap-4 items-center mt-12">
              <div onClick={toggleLike} className="cursor-pointer">
                {liked ? (
                  <IoIosHeartEmpty
                    className="text-3xl text-red-700 "
                    data-tooltip-id="my-tooltip-2"
                  />
                ) : (
                  <IoMdHeart
                    className="text-3xl text-red-700"
                    data-tooltip-id="my-tooltip-3"
                  />
                )}
              </div>
              <p>Like recipe</p>
              <ReactTooltip
                id="my-tooltip-2"
                place="top"
                content="Add recipe to favorites!"
              />
              <ReactTooltip
                id="my-tooltip-3"
                place="top"
                content="Remove recipe from favorites!"
              />
            </div>
          </div>
          <div className="col-span-2 bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-row justify-between items-center">
              <h3 className="uppercase text-blue-500 font-semibold mb-2 ">
                Ingredients
              </h3>
              <div
                onClick={toogleAdd}
                className="text-4xl text-blue-500 cursor-pointer"
              >
                {add ? (
                  <CiSquarePlus data-tooltip-id="my-tooltip-1" />
                ) : (
                  <IoIosCheckmarkCircle data-tooltip-id="my-tooltip-4" />
                )}
              </div>
              <ReactTooltip
                id="my-tooltip-1"
                place="top"
                content="Add ingredients to list!"
              />
              <ReactTooltip
                id="my-tooltip-4"
                place="top"
                content="Remove ingredients from list!"
              />
            </div>
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
