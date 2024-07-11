import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";
import { useTranslation } from "react-i18next";



function Recipes() {
  const { t } = useTranslation();
  const recipesData = [
    {
      title: t("chickenShawarma.title"),
      description: t("chickenShawarma.description"),
      stars: 5,
      serving: t("chickenShawarma.serving"),
      image: "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
      cuisine: t("chickenShawarma.cuisine"),
      servingSize: "6",
      cookingTime: t("chickenShawarma.cookingTime"),
      difficulty: t("chickenShawarma.difficulty"),
    },
    {
      title: t("Groundbeeftacos.title"),
      description: t("Groundbeeftacos.description"),
      stars: 4,
      serving: t("Groundbeeftacos.serving"),
      image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
      cuisine: t("Groundbeeftacos.cuisine"),
      servingSize: "4",
      cookingTime: t("Groundbeeftacos.cookingTime"),
      difficulty: t("Groundbeeftacos.difficulty"),
    },
    {
      title: t("Onepansausagepasta.title"),
      description: t("Onepansausagepasta.description"),
      stars: 4,
      serving: t("Onepansausagepasta.serving"),
      image: "https://www.mrsjoneskitchen.com/wp-content/uploads/2022/08/one-pot-creamy-sausage-pasta.jpg",
      cuisine: t("Onepansausagepasta.cuisine"),
      servingSize: "3",
      cookingTime: t("Onepansausagepasta.cookingTime"),
      difficulty: t("Onepansausagepasta.difficulty"),
    },
    {
      title: t("VegetarianPadThai.title"),
      description: t("VegetarianPadThai.description"),
      stars: 3,
      serving: t("VegetarianPadThai.serving"),
      image: "https://img.taste.com.au/z9EIVHJg/taste/2021/02/10-minute-vegetarian-pad-thai-168946-2.jpg",
      cuisine: t("VegetarianPadThai.cuisine"),
      servingSize: "4",
      cookingTime: t("VegetarianPadThai.cookingTime"),
      difficulty: t("VegetarianPadThai.difficulty"),
    },
    {
      title: t("SpinachandFetaStuffedChickenBreast.title"),
      description: t("SpinachandFetaStuffedChickenBreast.description"),
      stars: 4,
      serving: t("SpinachandFetaStuffedChickenBreast.serving"),
      image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2023_48/2041166/chef-dan-churchill-chicken-mc-2x1-231128.jpg",
      cuisine: t("SpinachandFetaStuffedChickenBreast.cuisine"),
      servingSize: "2",
      cookingTime: t("SpinachandFetaStuffedChickenBreast.cookingTime"),
      difficulty: t("SpinachandFetaStuffedChickenBreast.difficulty"),
    },
    {
      title: t("MushroomRisotto.title"),
      description: t("MushroomRisotto.description"),
      stars: 5,
      serving: t("MushroomRisotto.serving"),
      image: "https://www.allrecipes.com/thmb/Pow6PE9UyushNDB4wutXNnmriX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/85389-gourmet-mushroom-risotto-86-7a2d218f53e94ccfaecc69b6fd93cab8.jpg",
      cuisine: t("MushroomRisotto.cuisine"),
      servingSize: "4",
      cookingTime: t("MushroomRisotto.cookingTime"),
      difficulty: t("MushroomRisotto.difficulty"),
    },
    {
      title: t("GrilledSalmonwithLemonButterSauce.title"),
      description: t("GrilledSalmonwithLemonButterSauce.description"),
      stars: 2,
      serving: t("GrilledSalmonwithLemonButterSauce.serving"),
      image: "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
      cuisine: t("GrilledSalmonwithLemonButterSauce.cuisine"),
      servingSize: "2",
      cookingTime: t("GrilledSalmonwithLemonButterSauce.cookingTime"),
      difficulty: t("GrilledSalmonwithLemonButterSauce.difficulty"),
    },
    {
      title: t("CapreseSalad.title"),
      description: t("CapreseSalad.description"),
      stars: 5,
      serving: t("CapreseSalad.serving"),
      image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
      cuisine: t("CapreseSalad.cuisine"),
      servingSize: "2",
      cookingTime: t("CapreseSalad.cookingTime"),
      difficulty: t("CapreseSalad.difficulty"),
    },
    {
      title: t("PestoChickenPasta.title"),
      description: t("PestoChickenPasta.description"),
      stars: 4,
      serving: t("PestoChickenPasta.serving"),
      image: "https://www.budgetbytes.com/wp-content/uploads/2019/10/Creamy-Pesto-Chicken-Pasta-close-plate.jpg",
      cuisine: t("PestoChickenPasta.cuisine"),
      servingSize: "4",
      cookingTime: t("PestoChickenPasta.cookingTime"),
      difficulty: t("PestoChickenPasta.difficulty"),
    },
    {
      title: t("SpaghettiCarbonara.title"),
      description: t("SpaghettiCarbonara.description"),
      stars: 4,
      serving: t("SpaghettiCarbonara.serving"),
      image: "https://images.services.kitchenstories.io/6glN_4JhpVS9aUiBS7JnGsuDULA=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2568-photo-final-_0.jpg",
      cuisine: t("SpaghettiCarbonara.cuisine"),
      servingSize: "4",
      cookingTime: t("SpaghettiCarbonara.cookingTime"),
      difficulty: t("SpaghettiCarbonara.difficulty"),
    },
    {
      title: t("TomYumSoup.title"),
      description: t("TomYumSoup.description"),
      stars: 4,
      serving: t("TomYumSoup.serving"),
      image: "https://www.thespruceeats.com/thmb/PrhhN3g0-fkHH3ULhqcOdo8X_Mk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-tom-yum-soup-3217762-hero-01-4872510cb5f24d9480e7a2f4b8f23c57.jpg",
      cuisine: t("TomYumSoup.cuisine"),
      servingSize: "4",
      cookingTime: t("TomYumSoup.cookingTime"),
      difficulty: t("TomYumSoup.difficulty"),
    },
    {
      title: t("TacosalPastor.title"),
      description: t("TacosalPastor.description"),
      stars: 5,
      serving: t("TacosalPastor.serving"),
      image: "https://www.seriouseats.com/thmb/4kbwN13BlZnZ3EywrtG2AzCKuYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg",
      cuisine: t("TacosalPastor.cuisine"),
      servingSize: "6",
      cookingTime: t("TacosalPastor.cookingTime"),
      difficulty: t("TacosalPastor.difficulty"),
    },
  ];
  const scrollToRef = useRef(null);
  useEffect(() => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle cuisine type change
  const handleCuisineTypeChange = (event) => {
    const cuisine = event.target.value;

    if (event.target.checked) {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    } else {
      const updatedCuisines = selectedCuisines.filter((c) => c !== cuisine);
      setSelectedCuisines(updatedCuisines);
    }
  };

  const clearFilters = () => {
    setSelectedCuisines([]);
    setSelectedDifficulties([]);
    setSelectedRatings([]);
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  // Function to handle difficulty change
  const handleDifficultyChange = (event) => {
    const difficulty = event.target.value;

    if (event.target.checked) {
      setSelectedDifficulties([...selectedDifficulties, difficulty]);
    } else {
      const updatedDifficulties = selectedDifficulties.filter(
        (d) => d !== difficulty
      );
      setSelectedDifficulties(updatedDifficulties);
    }
  };

  // Function to handle rating change
  const handleRatingChange = (event) => {
    const rating = parseInt(event.target.value, 10);

    if (event.target.checked) {
      setSelectedRatings([...selectedRatings, rating]);
    } else {
      const updatedRatings = selectedRatings.filter((r) => r !== rating);
      setSelectedRatings(updatedRatings);
    }
  };

  // Function to filter recipes based on all filters
  useEffect(() => {
    let filteredData = recipesData;

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const lowercasedQuery = searchQuery.toLowerCase();
      filteredData = filteredData.filter((recipe) =>
        recipe.title.toLowerCase().includes(lowercasedQuery)
      );
    }

    // Filter by selected cuisines
    if (selectedCuisines.length > 0) {
      filteredData = filteredData.filter((recipe) =>
        selectedCuisines.some((cuisine) =>
          recipe.cuisine.toLowerCase().includes(cuisine.toLowerCase())
        )
      );
    }

    // Filter by selected difficulties
    if (selectedDifficulties.length > 0) {
      filteredData = filteredData.filter((recipe) =>
        selectedDifficulties.includes(recipe.difficulty)
      );
    }

    // Filter by selected ratings
    if (selectedRatings.length > 0) {
      filteredData = filteredData.filter((recipe) =>
        selectedRatings.includes(recipe.stars)
      );
    }

    setFilteredRecipes(filteredData);
  }, [searchQuery, selectedCuisines, selectedDifficulties, selectedRatings]);

  return (
    <div ref={scrollToRef}>
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-8 gap-4 pb-12">
        <h1 className="text-5xl font-extrabold uppercase text-heading-color w-2/3 text-center">
          {t("recipes.title")}
        </h1>

        <form class="w-1/3 mx-auto shadow-sm">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder={t("recipes.placeholder")}
              value={searchQuery}
              onChange={handleSearchInputChange}
              required
            />
          </div>
        </form>
        <div className="flex w-full px-12 justify-center gap-4 pt-12">
          <div className=" bg-white rounded-xl p-4 border-2 shadow-lg w-2/12 h-1/2">
            <h2 className="text-blue-600 uppercase text-2xl font-semibold mb-4">
              {t("filter")}
            </h2>
            <div>
              <p className="font-semibold text-xl">{t("recipes.cuisineTypes")}</p>
              <div class="flex items-center justify-between  text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.italian")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleCuisineTypeChange(e)}
                  type="checkbox"
                  value={t("recipes.italian")} 
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.middleEastern")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleCuisineTypeChange(e)}
                  type="checkbox"
                  value={t("recipes.middleEastern")} 
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.mexican")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleCuisineTypeChange(e)}
                  type="checkbox"
                  value={t("recipes.mexican")} 
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.thai")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleCuisineTypeChange(e)}
                  type="checkbox"
                  value={t("recipes.thai")}
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="bg-gray-200 w-full h-0.5 rounded-lg  my-2"></div>
            <div>
              <p className="font-semibold text-xl">{t("recipes.difficulty")}</p>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.easy")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleDifficultyChange(e)}
                  type="checkbox"
                  value={t("recipes.easy")} // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.medium")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleDifficultyChange(e)}
                  type="checkbox"
                  value={t("recipes.medium")} // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.hard")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleDifficultyChange(e)}
                  type="checkbox"
                  value={t("recipes.hard")} // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="bg-gray-200 w-full h-0.5 rounded-lg  my-2"></div>
            <div>
              <p className="font-semibold text-xl">{t("recipes.rating")}</p>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.onestar")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleRatingChange(e)}
                  type="checkbox"
                  value="1" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.twostar")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleRatingChange(e)}
                  type="checkbox"
                  value="2" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.threestar")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleRatingChange(e)}
                  type="checkbox"
                  value="3" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.fourstar")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleRatingChange(e)}
                  type="checkbox"
                  value="4" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  {t("recipes.fivestar")}
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleRatingChange(e)}
                  type="checkbox"
                  value="5" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => clearFilters()}
                  className="bg-blue-500 p-2 rounded-xl text-white font-semibold mt-4 justify-center hover:bg-blue-700 shadow-lg"
                >
                  {t("recipes.clear")}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6 w-10/12 items-center">
            {filteredRecipes.length > 0 ? (
              <div className="grid grid-cols-3 gap-6">
                {filteredRecipes.map((recipe, index) => (
                  <SearchCard
                    key={index}
                    item={recipe.title}
                    title={recipe.title}
                    description={recipe.description}
                    stars={recipe.stars}
                    serving={recipe.serving}
                    image={recipe.image}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">
                No recipes found. Try searching something else, or using
                different filters!
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
