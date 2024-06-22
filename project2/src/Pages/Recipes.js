import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";
const recipesData = [
    {
      title: "Chicken Shawarma",
      description:
        "The best homemade shawarma recipe using the most amazing (and easy!) spice mixture. Great for salads, wraps + bowls!",
      stars: 5,
      serving: "Serves 6 - Medium difficulty - 90 mins",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNB3gP-EPrqx9NZGn4EX-80CJ2XsOq37JCA&s",
      cuisine: "Middle Eastern",
      servingSize: "6",
      cookingTime: "90 mins",
      difficulty: "Medium",
    },
    {
      title: "Ground beef tacos",
      description:
        "Delicious ground beef tacos seasoned to perfection, served with fresh salsa and guacamole. Perfect for Taco Tuesdays!",
      stars: 4,
      serving: "Serves 4 - Easy difficulty - 45 mins",
      image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
      cuisine: "Mexican",
      servingSize: "4",
      cookingTime: "45 mins",
      difficulty: "Easy",
    },
    {
      title: "One-pan sausage pasta",
      description:
        "An easy one-pan sausage pasta dish with creamy sauce and lots of flavor. Ready in under 30 minutes!",
      stars: 4,
      serving: "Serves 3 - Medium difficulty - 25 mins",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapgBNLIcva4dm6L5Eq7Ht46tG3yv8ww77VA&s",
      cuisine: "Italian",
      servingSize: "3",
      cookingTime: "25 mins",
      difficulty: "Medium",
    },
    {
      title: "Vegetarian Pad Thai",
      description:
        "A classic vegetarian pad thai made with rice noodles, tofu, peanuts, and a tangy tamarind sauce. Bursting with flavors!",
      stars: 3,
      serving: "Serves 4 - Medium difficulty - 40 mins",
      image:
        "https://img.taste.com.au/z9EIVHJg/taste/2021/02/10-minute-vegetarian-pad-thai-168946-2.jpg",
      cuisine: "Thai",
      servingSize: "4",
      cookingTime: "40 mins",
      difficulty: "Medium",
    },
    {
      title: "Spinach and Feta Stuffed Chicken Breast",
      description:
        "Tender chicken breasts stuffed with spinach, feta cheese, and herbs, baked to perfection. Elegant and delicious!",
      stars: 4,
      serving: "Serves 2 - Medium difficulty - 35 mins",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaauISylTvXdGTbDDq6t-qbeSI6kVoeC9YUw&s",
      cuisine: "Mediterranean",
      servingSize: "2",
      cookingTime: "35 mins",
      difficulty: "Medium",
    },
    {
      title: "Mushroom Risotto",
      description:
        "Creamy and comforting mushroom risotto made with Arborio rice, mushrooms, Parmesan cheese, and a touch of white wine.",
      stars: 5,
      serving: "Serves 4 - Hard difficulty - 45 mins",
      image:
        "https://www.allrecipes.com/thmb/Pow6PE9UyushNDB4wutXNnmriX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/85389-gourmet-mushroom-risotto-86-7a2d218f53e94ccfaecc69b6fd93cab8.jpg",
      cuisine: "Italian",
      servingSize: "4",
      cookingTime: "45 mins",
      difficulty: "Hard",
    },
    {
      title: "Grilled Salmon with Lemon Butter Sauce",
      description:
        "Juicy grilled salmon fillets topped with a tangy lemon butter sauce. Perfect for a healthy and flavorful dinner.",
      stars: 2,
      serving: "Serves 2 - Medium difficulty - 20 mins",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
      cuisine: "Seafood",
      servingSize: "2",
      cookingTime: "20 mins",
      difficulty: "Medium",
    },
    {
      title: "Caprese Salad",
      description:
        "Fresh and vibrant Caprese salad with ripe tomatoes, fresh mozzarella, basil leaves, and a drizzle of balsamic glaze.",
      stars: 5,
      serving: "Serves 2 - Easy difficulty - 10 mins",
      image:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
      cuisine: "Italian",
      servingSize: "2",
      cookingTime: "10 mins",
      difficulty: "Easy",
    },
    {
      title: "Pesto Chicken Pasta",
      description:
        "Delicious pasta tossed in creamy pesto sauce with tender chicken breast and sun-dried tomatoes. A comforting and flavorful dish!",
      stars: 4,
      serving: "Serves 4 - Medium difficulty - 30 mins",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2019/10/Creamy-Pesto-Chicken-Pasta-close-plate.jpg",
      cuisine: "Italian",
      servingSize: "4",
      cookingTime: "30 mins",
      difficulty: "Medium",
    },
  ];

function Recipes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCuisineTypeChange = (event) => {
    if (event.target.checked) {
      const filteredData = filteredRecipes.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredRecipes(filteredData);
    } else {
      setFilteredRecipes(recipesData);
    }
  };

  const handleDifficultyChange = (event) => {
    if (event.target.checked) {
      const filteredData = filteredRecipes.filter((recipe) =>
        recipe.difficulty.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredRecipes(filteredData);
    } else {
      setFilteredRecipes(recipesData);
    }
  };


  const handleRatingChange = (event) => {
    if (event.target.checked) {
      const filteredData = filteredRecipes.filter((recipe) =>
        recipe.stars === (event.target.value.toLowerCase())
      );
      setFilteredRecipes(filteredData);
    } else {
      setFilteredRecipes(recipesData);
    }
  };


  // Function to filter recipes based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredRecipes(recipesData);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filteredData = recipesData.filter((recipe) =>
        recipe.title.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredRecipes(filteredData);
    }
  }, [searchQuery]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-8 gap-4 pb-12">
        <h1 className="text-5xl font-extrabold uppercase text-heading-color w-2/3 text-center">
          Search for your favorite recipes
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
              placeholder="Chicken Shawarma"
              value={searchQuery}
              onChange={handleSearchInputChange}
              required
            />
          </div>
        </form>
        <div className="flex w-full px-12 justify-center gap-4 pt-12">
          <div className=" bg-white rounded-xl w-1/3 p-4 border-2 shadow-lg">
            <h2 className="text-blue-600 uppercase text-2xl font-semibold mb-4">
              Filter by
            </h2>
            <div>
              <p className="font-semibold text-xl">Cuisine Types</p>
              <div class="flex items-center justify-between  text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  Italian
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleCuisineTypeChange(e)}
                  type="checkbox"
                  value="Italian" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  Middle Eastern
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleCuisineTypeChange(e)}
                  type="checkbox"
                  value="Middle Eastern" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  Mexican
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleCuisineTypeChange(e)}
                  type="checkbox"
                  value="Mexican" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  Thai
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleCuisineTypeChange(e)}
                  type="checkbox"
                  value="Thai" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="bg-gray-200 w-full h-0.5 rounded-lg  my-2"></div>
            <div>
              <p className="font-semibold text-xl">Difficulty</p>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  Easy
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleDifficultyChange(e)}
                  type="checkbox"
                  value="Easy" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  Medium
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleDifficultyChange(e)}
                  type="checkbox"
                  value="Medium" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  Hard
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleDifficultyChange(e)}
                  type="checkbox"
                  value="Hard" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="bg-gray-200 w-full h-0.5 rounded-lg  my-2"></div>
            <div>
              <p className="font-semibold text-xl">Rating</p>
              <div class="flex items-center justify-between text-lg">
                <label
                  for="default-checkbox"
                  class="ms-2 font-medium text-black"
                >
                  One Star
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
                  Two Star
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
                  Three Star
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
                  Four Star
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
                  Five Star
                </label>
                <input
                  id="default-checkbox"
                  onChange={(e) => handleRatingChange(e)}
                  type="checkbox"
                  value="5" // Set the value you want to print here
                  className="w-4 h-4 text-black bg-black border-gray-300 rounded"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {filteredRecipes.map((recipe, index) => (
              <SearchCard
                className=""
                key={index}
                item={recipe.title} // Assuming 'item' is the title of the recipe for the link
                title={recipe.title}
                description={recipe.description}
                stars={recipe.stars}
                serving={recipe.serving}
                image={recipe.image}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recipes;
