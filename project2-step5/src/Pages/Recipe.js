import React from "react";
import Navbar from "../components/Navbar";
import SpecialFooter from "../components/SpecialFooter";
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
import { useTranslation } from "react-i18next";

function Recipe() {
  const scrollToRef = useRef(null);
  const { t } = useTranslation();
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
    chickenShawarma:
      "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
    Groundbeeftacos:
      "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
    VegetarianPadThai:
      "https://img.taste.com.au/z9EIVHJg/taste/2021/02/10-minute-vegetarian-pad-thai-168946-2.jpg",
    Onepansausagepasta:
      "https://www.mrsjoneskitchen.com/wp-content/uploads/2022/08/one-pot-creamy-sausage-pasta.jpg",
    SpinachandFetaStuffedChickenBreast:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2023_48/2041166/chef-dan-churchill-chicken-mc-2x1-231128.jpg",
    MushroomRisotto:
      "https://www.allrecipes.com/thmb/Pow6PE9UyushNDB4wutXNnmriX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/85389-gourmet-mushroom-risotto-86-7a2d218f53e94ccfaecc69b6fd93cab8.jpg",
    GrilledSalmonwithLemonButterSauce:
      "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
    CapreseSalad:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
    PestoChickenPasta:
      "https://www.budgetbytes.com/wp-content/uploads/2019/10/Creamy-Pesto-Chicken-Pasta-close-plate.jpg",
    SpaghettiCarbonara:
      "https://images.services.kitchenstories.io/6glN_4JhpVS9aUiBS7JnGsuDULA=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2568-photo-final-_0.jpg",
    TomYumSoup:
      "https://www.thespruceeats.com/thmb/PrhhN3g0-fkHH3ULhqcOdo8X_Mk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-tom-yum-soup-3217762-hero-01-4872510cb5f24d9480e7a2f4b8f23c57.jpg",
    TacosalPastor:
      "https://www.seriouseats.com/thmb/4kbwN13BlZnZ3EywrtG2AzCKuYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg",
  };

  const list = [
    {
      name: "chickenShawarma",
      title: t("chickenShawarma.title"),
      shortDescription:
        "A delicious Middle Eastern dish with marinated chicken.",
      servingAmount: "Serves 6",
      difficulty: "Medium",
      timeCooking: "30 minutes",
      ingredients: t("chickenShawarma.ingredients", { returnObjects: true }),
      longDescription:
        "Chicken shawarma is a popular Middle Eastern street food typically made with thinly sliced marinated chicken, garlic, and spices. It's usually served in a pita wrap or with rice and salad.",
      instructions: t("chickenShawarma.instructions", { returnObjects: true }),
    },
    {
      name: "Groundbeeftacos",
      title: t("Groundbeeftacos.title"),
      shortDescription: "Delicious ground beef tacos seasoned to perfection.",
      servingAmount: "Serves 4",
      difficulty: "Easy",
      timeCooking: "45 minutes",
      ingredients: t("Groundbeeftacos.ingredients", { returnObjects: true }),
      longDescription:
        "Ground beef tacos are a classic Mexican dish made with seasoned ground beef served in tortillas with fresh toppings. Perfect for a quick and delicious meal!",
      instructions: t("Groundbeeftacos.instructions", { returnObjects: true }),
    },
    {
      name: "Onepansausagepasta",
      title: t("Onepansausagepasta.title"),
      shortDescription: "An easy one-pan sausage pasta dish with creamy sauce.",
      servingAmount: "Serves 3",
      difficulty: "Medium",
      timeCooking: "25 minutes",
      ingredients: t("Onepansausagepasta.ingredients", { returnObjects: true }),
      longDescription:
        "One-pan sausage pasta is a quick and flavorful Italian-inspired dish made with pasta, Italian sausages, tomatoes, and a creamy sauce all cooked in one pan.",
      instructions: t("Onepansausagepasta.instructions", {
        returnObjects: true,
      }),
    },
    {
      name: "VegetarianPadThai",
      title: t("VegetarianPadThai.title"),
      shortDescription:
        "A classic vegetarian pad thai made with rice noodles and tofu.",
      servingAmount: "Serves 4",
      difficulty: "Medium",
      timeCooking: "40 minutes",
      ingredients: t("VegetarianPadThai.ingredients", { returnObjects: true }),
      longDescription:
        "Vegetarian pad thai is a popular Thai stir-fried noodle dish made with rice noodles, tofu, peanuts, and a tangy tamarind sauce. It's a flavorful and satisfying vegetarian meal!",
      instructions: t("VegetarianPadThai.instructions", {
        returnObjects: true,
      }),
    },
    {
      name: "SpinachandFetaStuffedChickenBreast",
      title: t("SpinachandFetaStuffedChickenBreast.title"),
      shortDescription:
        "Tender chicken breasts stuffed with spinach and feta cheese.",
      servingAmount: "Serves 2",
      difficulty: "Medium",
      timeCooking: "35 minutes",
      ingredients: t("SpinachandFetaStuffedChickenBreast.ingredients", {
        returnObjects: true,
      }),
      longDescription:
        "Spinach and feta stuffed chicken breast is an elegant dish where chicken breasts are filled with a savory mixture of spinach, garlic, and feta cheese, then baked to perfection.",
      instructions: t("SpinachandFetaStuffedChickenBreast.instructions", {
        returnObjects: true,
      }),
    },
    {
      name: "MushroomRisotto",
      title: t("MushroomRisotto.title"),
      shortDescription:
        "Creamy and comforting risotto made with Arborio rice and mushrooms.",
      servingAmount: "Serves 4",
      difficulty: "Hard",
      timeCooking: "45 minutes",
      ingredients: t("MushroomRisotto.ingredients", { returnObjects: true }),
      longDescription:
        "Mushroom risotto is a classic Italian dish where creamy Arborio rice is cooked slowly with mushrooms, broth, wine, and Parmesan cheese until it reaches a rich and velvety texture.",
      instructions: t("MushroomRisotto.instructions", { returnObjects: true }),
    },
    {
      name: "GrilledSalmonwithLemonButterSauce",
      title: t("GrilledSalmonwithLemonButterSauce.title"),
      shortDescription:
        "Juicy grilled salmon fillets topped with a tangy lemon butter sauce.",
      servingAmount: "Serves 2",
      difficulty: "Medium",
      timeCooking: "20 minutes",
      ingredients: t("GrilledSalmonwithLemonButterSauce.ingredients", {
        returnObjects: true,
      }),
      longDescription:
        "Grilled salmon with lemon butter sauce is a healthy and flavorful dish where salmon fillets are seasoned, grilled, and served with a buttery lemon sauce infused with garlic and dill.",
      instructions: t("GrilledSalmonwithLemonButterSauce.instructions", {
        returnObjects: true,
      }),
    },
    {
      name: "CapreseSalad",
      title: t("CapreseSalad.title"),
      shortDescription:
        "Fresh and vibrant salad with tomatoes, mozzarella, basil, and balsamic glaze.",
      servingAmount: "Serves 2",
      difficulty: "Easy",
      timeCooking: "10 minutes",
      ingredients: t("CapreseSalad.ingredients", { returnObjects: true }),
      longDescription:
        "Caprese salad is a simple and elegant Italian salad made with ripe tomatoes, fresh mozzarella cheese, basil leaves, and a drizzle of balsamic glaze.",
      instructions: t("CapreseSalad.instructions", { returnObjects: true }),
    },
    {
      name: "PestoChickenPasta",
      title: t("PestoChickenPasta.title"),
      shortDescription:
        "Delicious pasta tossed in creamy pesto sauce with tender chicken breast and sun-dried tomatoes.",
      servingAmount: "Serves 4",
      difficulty: "Medium",
      timeCooking: "30 minutes",
      ingredients: t("PestoChickenPasta.ingredients", { returnObjects: true }),
      longDescription:
        "Pesto chicken pasta is a comforting Italian dish where pasta is coated in a creamy basil pesto sauce with tender chicken pieces and sun-dried tomatoes, finished with Parmesan cheese.",
      instructions: t("PestoChickenPasta.instructions", {
        returnObjects: true,
      }),
    },
    {
      name: "SpaghettiCarbonara",
      title: t("SpaghettiCarbonara.title"),
      shortDescription:
        "Classic Italian spaghetti carbonara with crispy pancetta and creamy egg sauce.",
      servingAmount: "Serves 4",
      difficulty: "Medium",
      timeCooking: "30 minutes",
      ingredients: t("SpaghettiCarbonara.ingredients", { returnObjects: true }),
      longDescription:
        "Spaghetti carbonara is a traditional Italian pasta dish where spaghetti is tossed in a creamy sauce made with eggs, Parmesan cheese, and crispy pancetta or bacon.",
      instructions: t("SpaghettiCarbonara.instructions", {
        returnObjects: true,
      }),
    },
    {
      name: "TomYumSoup",
      title: t("TomYumSoup.title"),
      shortDescription:
        "Authentic Thai soup with shrimp, lemongrass, and chili.",
      servingAmount: "Serves 4",
      difficulty: "Medium",
      timeCooking: "25 minutes",
      ingredients: t("TomYumSoup.ingredients", { returnObjects: true }),
      longDescription:
        "Tom yum soup is a spicy and sour Thai soup flavored with lemongrass, lime leaves, galangal, and chili. It's traditionally made with shrimp and is bursting with bold flavors.",
      instructions: t("TomYumSoup.instructions", { returnObjects: true }),
    },
    {
      name: "TacosalPastor",
      title: t("TacosalPastor.title"),
      shortDescription:
        "Traditional Mexican tacos with marinated pork and pineapple.",
      servingAmount: "Serves 6",
      difficulty: "Medium",
      timeCooking: "60 minutes",
      ingredients: t("TacosalPastor.ingredients", { returnObjects: true }),
      longDescription:
        "Tacos al pastor are a classic Mexican street food where thinly sliced pork shoulder is marinated with pineapple, spices, and citrus, then grilled to perfection and served with pineapple slices in corn tortillas.",
      instructions: t("TacosalPastor.instructions", { returnObjects: true }),
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
            {t("error.title")}
          </h1>
          <p className="text-lg">{t("error.message")}</p>
          <p className="font-semibold pt-12">{t("error.message2")}</p>
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
        <p className="text-lg">{t(recipe.name + ".description")}</p>
        <div className="flex-row flex items-center font-bold uppercase gap-2 ">
          <Serve />
          <p>{t(recipe.name + ".servingAmount")}</p>
          •
          <Difficulty />
          <p>{t(recipe.name + ".difficulty")}</p>
          •
          <Time />
          <p>{t(recipe.name + ".timeCooking")}</p>
        </div>
        <img
          src={images[recipe.name]}
          alt={recipe.title}
          className="w-2/3 object-cover rounded-3xl mx-24 shadow-md"
        />
        <div className="grid gap-36 mb-6 md:grid-cols-5 w-2/3">
          <div className="col-span-3 flex flex-col">
            <p>{t(recipe.name + ".longDescription")}</p>
            <h1 className="text-3xl py-4 uppercase font-bold">
              {t("instructions")}
            </h1>
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
              <p>{t("likeRecipe")}</p>
              <ReactTooltip
                id="my-tooltip-2"
                place="top"
                content={t("favoriteRecipe")}
              />
              <ReactTooltip
                id="my-tooltip-3"
                place="top"
                content={t("removeRecipe")}
              />
            </div>
          </div>
          <div className="col-span-2 bg-white p-8 rounded-lg shadow-md">
            <div className="flex flex-row justify-between items-center">
              <h3 className="uppercase text-blue-500 font-semibold mb-2 ">
                {t("ingredients")}
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
                content={t("removeIngredients")}
              />
              <ReactTooltip
                id="my-tooltip-4"
                place="top"
                content={t("addIngredients")}
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
      <SpecialFooter />
    </div>
  );
}

export default Recipe;
