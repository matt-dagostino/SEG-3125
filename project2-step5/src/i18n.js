import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources: {
      en: {
        translation: {
            faq: {
                question1: "How do I add a new recipe to the site?",
                answer1: "To add a new recipe, simply click on the 'Add Recipe' link in the navigation bar. You will be prompted to enter the details of your recipe, including the title, description, ingredients, and instructions. Once you have filled out all the required fields, click the 'Submit' button to add your recipe to the site.",
                question2: "How do I search for a specific recipe?",
                answer2: "To search for a specific recipe, you can use the search bar located at the top of the page. Simply enter the name of the recipe you are looking for and press the 'Enter' key. The search results will display all recipes that match your search query.",
                question3: "How do I save a recipe to my favorites?",
                answer3: "To save a recipe to your favorites, click on the heart icon located next to the recipe title. The recipe will be added to your favorites list, which you can access by clicking on the 'Favorites' link in the navigation bar.",
                question4: "How do I remove a recipe from my favorites?",
                answer4: "To remove a recipe from your favorites, click on the heart icon located next to the recipe title. The recipe will be removed from your favorites list.",
                question5: "How do I add ingredients to my shopping list?",
                answer5: "To add ingredients to your shopping list, click on the 'Add to List' button located next to the ingredient list of the recipe. The ingredients will be added to your shopping list, which you can access by clicking on the 'Shopping List' link in the navigation bar.",
                question6: "How do I remove ingredients from my shopping list?",
                answer6: "To remove ingredients from your shopping list, click on the 'Remove from List' button located next to the ingredient in the shopping list. The ingredient will be removed from your shopping list.",
            },
          error: {
            title: "Recipe not found",
            message: "The recipe you are looking for does not exist.",
            message2:
              "Hmmm... how did you even end up here?! 🤔 Some recipes are still in the works by the chef... check back shortly.",
          },
          instructions: "Instructions",
          likeRecipe: "Like Recipe",
          ingredients: "Ingredients",
          addIngredients: "Add ingredients to list!",
          removeIngredients: "Remove ingredients from list!",
          favoriteRecipe: "Add recipe to favorites!",
          removeRecipe: "Remove recipe from favorites!",
          CapreseSalad: {
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
            difficulty: "Easy Difficulty",
            shortDescription:
              "Fresh and vibrant salad with tomatoes, mozzarella, basil, and balsamic glaze.",
            servingAmount: "Serves 2",
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
          PestoChickenPasta: {
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
            difficulty: "Medium Difficulty",
            shortDescription:
              "Delicious pasta tossed in creamy pesto sauce with tender chicken breast and sun-dried tomatoes.",
            servingAmount: "Serves 4",
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
          SpaghettiCarbonara: {
            title: "Spaghetti Carbonara",
            description:
              "Classic Italian spaghetti carbonara with crispy pancetta, creamy egg sauce, and Parmesan cheese. A comforting dish loved worldwide!",
            stars: 4,
            serving: "Serves 4 - Medium difficulty - 30 mins",
            image:
              "https://images.services.kitchenstories.io/6glN_4JhpVS9aUiBS7JnGsuDULA=/3840x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2568-photo-final-_0.jpg",
            cuisine: "Italian",
            servingSize: "4",
            cookingTime: "30 mins",
            difficulty: "Medium Difficulty",
            shortDescription:
              "Classic Italian spaghetti carbonara with crispy pancetta and creamy egg sauce.",
            servingAmount: "Serves 4",
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
          TomYumSoup: {
            title: "Tom Yum Soup",
            description:
              "Authentic Thai Tom Yum soup with shrimp, mushrooms, lemongrass, and chili. A spicy and sour soup that's refreshing and full of flavors!",
            stars: 4,
            serving: "Serves 4 - Medium difficulty - 25 mins",
            image:
              "https://www.thespruceeats.com/thmb/PrhhN3g0-fkHH3ULhqcOdo8X_Mk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetarian-tom-yum-soup-3217762-hero-01-4872510cb5f24d9480e7a2f4b8f23c57.jpg",
            cuisine: "Thai",
            servingSize: "4",
            cookingTime: "25 mins",
            difficulty: "Medium Difficulty",
            shortDescription:
              "Authentic Thai soup with shrimp, lemongrass, and chili.",
            servingAmount: "Serves 4",
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
          TacosalPastor: {
            title: "Tacos al Pastor",
            description:
              "Traditional Mexican tacos al pastor with marinated pork, pineapple, onions, and cilantro. Bursting with flavors and perfect for any fiesta!",
            stars: 5,
            serving: "Serves 6 - Medium difficulty - 60 mins",
            image:
              "https://www.seriouseats.com/thmb/4kbwN13BlZnZ3EywrtG2AzCKuYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210712-tacos-al-pastor-melissa-hom-seriouseats-37-f72cdd02c9574bceb1eef1c8a23b76ed.jpg",
            cuisine: "Mexican",
            servingSize: "6",
            cookingTime: "60 mins",
            difficulty: "Medium Difficulty",
            shortDescription:
              "Traditional Mexican tacos with marinated pork and pineapple.",
            servingAmount: "Serves 6",
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
          SpinachandFetaStuffedChickenBreast: {
            title: "Spinach and Feta Stuffed Chicken Breast",
            description:
              "Tender chicken breasts stuffed with spinach, feta cheese, and herbs, baked to perfection. Elegant and delicious!",
            stars: 4,
            serving: "Serves 2 - Medium difficulty - 35 mins",
            image:
              "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2023_48/2041166/chef-dan-churchill-chicken-mc-2x1-231128.jpg",
            cuisine: "Middle Eastern",
            servingSize: "2",
            cookingTime: "35 mins",
            difficulty: "Medium Difficulty",
            shortDescription:
              "Tender chicken breasts stuffed with spinach and feta cheese.",
            servingAmount: "Serves 2",
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
          MushroomRisotto: {
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
            difficulty: "Hard Difficulty",
            shortDescription:
              "Creamy and comforting risotto made with Arborio rice and mushrooms.",
            servingAmount: "Serves 4",
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
          GrilledSalmonwithLemonButterSauce: {
            title: "Grilled Salmon with Lemon Butter Sauce",
            description:
              "Juicy grilled salmon fillets topped with a tangy lemon butter sauce. Perfect for a healthy and flavorful dinner.",
            stars: 2,
            serving: "Serves 2 - Medium difficulty - 20 mins",
            image:
              "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
            cuisine: "Thai",
            servingSize: "2",
            cookingTime: "20 mins",
            difficulty: "Medium Difficulty",
            shortDescription:
              "Juicy grilled salmon fillets topped with a tangy lemon butter sauce.",
            servingAmount: "Serves 2",
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
          Onepansausagepasta: {
            title: "One-pan sausage pasta",
            description:
              "An easy one-pan sausage pasta dish with creamy sauce and lots of flavor. Ready in under 30 minutes!",
            stars: 4,
            serving: "Serves 3 - Medium difficulty - 25 mins",
            image:
              "https://www.mrsjoneskitchen.com/wp-content/uploads/2022/08/one-pot-creamy-sausage-pasta.jpg",
            cuisine: "Italian",
            servingSize: "3",
            cookingTime: "25 mins",
            difficulty: "Medium Difficulty",
            shortDescription:
              "An easy one-pan sausage pasta dish with creamy sauce.",
            servingAmount: "Serves 3",
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
          VegetarianPadThai: {
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
            difficulty: "Medium Difficulty",
            shortDescription:
              "A classic vegetarian pad thai made with rice noodles and tofu.",
            servingAmount: "Serves 4",
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
          Groundbeeftacos: {
            description:
              "Delicious ground beef tacos seasoned to perfection, served with fresh salsa and guacamole. Perfect for Taco Tuesdays!",
            stars: 4,
            serving: "Serves 4 - Easy difficulty - 45 mins",
            image:
              "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
            cuisine: "Mexican",
            servingSize: "4",
            cookingTime: "45 mins",
            title: "Ground beef tacos",
            shortDescription:
              "Delicious ground beef tacos seasoned to perfection.",
            servingAmount: "Serves 4",
            difficulty: "Easy Difficulty",
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
          chickenShawarma: {
            title: "Chicken Shawarma",
            description:
              "The best homemade shawarma recipe using the most amazing (and easy!) spice mixture. Great for salads, wraps + bowls!",
            stars: 5,
            serving: "Serves 6 - Medium difficulty - 90 mins",
            image:
              "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
            cuisine: "Middle Eastern",
            servingSize: "6",
            cookingTime: "90 mins",
            shortDescription:
              "A delicious Middle Eastern dish with marinated chicken.",
            servingAmount: "Serves 6",
            difficulty: "Medium Difficulty",
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
          recipes: {
            title: "Search for your favorite recipes",
            placeholder: "Chicken Shawarma, Tacos, Pasta...",
            cuisineTypes: "Cuisine Types",
            difficulty: "Complexity",
            rating: "Rating",
            italian: "Italian",
            mexican: "Mexican",
            middleEastern: "Middle Eastern",
            thai: "Thai",
            easy: "Easy Difficulty",
            medium: "Medium Difficulty",
            hard: "Hard Difficulty",
            onestar: "One Star",
            twostar: "Two Stars",
            threestar: "Three Stars",
            fourstar: "Four Stars",
            fivestar: "Five Stars",
            clear: "Clear Filters",
          },
          addRecipe: {
            submit: "Recipe Submitted!",
            description:
              "Thank you for submitting your recipe. It will be reviewed by our team shortly.",
            title: "Add a Recipe",
            name: "Recipe Title",
            nameDescription: "Enter your recipe title",
            shortDescription: "Short Description",
            shortDescriptionDescription:
              "Describe your recipe in a way that makes mouths water",
            ingredients: "Ingredients",
            servings: "Servings",
            prep: "Prep Time",
            cook: "Cook Time",
            mins: "mins",
            example: "e.g. 4",
            item: "Item",
            addIngredient: "+ Add Ingredient",
            instructions: "Instructions",
            instructionsDescription:
              "Break down your recipe into clear, easy-to-follow steps",
            step: "Step",
            addStep: "+ Add Step",
            cancel: "Cancel",
            submitButton: "Submit Recipe",
          },
          zoom: {
            title: "Live Interactive Cooking Sessions with Us",
            description:
              "Join us live every Mondays, Wednesdays and Fridays at 6pm EST to cook together!",
            since:
              "Since we aren't live currently, feel free to watch our previous sessions above!",
          },
          lists: {
            ingredient1:
              "1 lb (450g) boneless, skinless chicken thighs or breasts, thinly sliced",
            ingredient2: "2 cloves garlic, minced",
            ingredient3: "1 teaspoon ground cumin",
            ingredient4: "1 teaspoon ground paprika",
            ingredient5: "1 teaspoon ground turmeric",
            ingredient6: "1/2 teaspoon ground coriander",
            ingredient7: "1/2 teaspoon ground cinnamon",
            ingredient8: "1/4 teaspoon cayenne pepper (adjust to taste)",
            ingredient9: "Salt and pepper to taste",
            ingredient10: "2 tablespoons lemon juice",
            ingredient11: "3 tablespoons olive oil",
            title: "Liked Recipes",
            grocery: "Grocery List",
            week: "This week's grocery list",
            viewRecipe: "View Recipe",
          },
          assistant: {
            message:
              "Hello! I'm Dish Discovery Assistant. How can I help you today?",
            help: "Need help cooking?",
            ask: "Ask our Dish Discovery Assistant Below!",
            username: "Dish Discovery Assistant",
            status: "Active now",
            type: "Type a message...",
            typing: "Dish Discovery Assistant is typing...",
          },
          navbar: {
            home: "HOME",
            explore: "EXPLORE RECIPES",
            cooking: "COOKING HELP",
            list: "MY LISTS",
            zoom: "LIVE SESSIONS",
            recipe: "+ ADD RECIPE",
            faq: "FAQ",
          },
          footer: {
            description: "Craft delicious memories",
            about: "About us",
            dish: "About Dish Discovery",
            privacy: "Privacy Policy",
            terms: "Terms of service",
            services: "Services",
            recipes: "Recipes",
            cooking: "Cooking help",
            add: "Add Recipe",
            contact: "Contact Us",
            rights: "2024 Dish Discovery - All rights reserved",
          },
          home: {
            greeting: "Craft delicious",
            greeting2: "memories",
            description:
              "From mouthwatering recipes to expert cooking tips, embark on a journey to create unforgettable dishes that bring joy to every mealtime.",
            explore: "Explore recipes",
            trending: "trending recipes",
            shawarma: "Chicken Shawarma",
            taco: "Ground beef tacos",
            pasta: "One-pan sausage pasta",
            shawarmaDescription:
              "The best homemade shawarma recipe using the most amazing (and easy!) spice mixture. Great for salads, wraps + bowls!",
            shawarmaServing: "serves 6 - medium difficulty - 90 mins",
            tacoDescription:
              "Crispy and healthy toasted taco shells loaded with freshly made tomato salsa and well spiced ground beef, topped with creamy guacamole and savory cheese.",
            tacoServing: "serves 3 - Easy difficulty - 45 mins",
            pastaDescription:
              "Rigatoni and sausage is a classic combo but any short pasta will work for this magic one-pot, ready in half an hour dish that will amaze your guests!",
            pastaServing: "serves 5 - easy difficulty - 30 mins",
            popular: "Popular categories",
            breakfast: "Breakfast",
            pizza: "Pizza",
            vegan: "Vegan",
            dessert: "Desserts",
            smoothies: "Smoothies",
            comeout: "want to know when new recipes come out?",
            subscribe: "Subscribe to our newsletter",
            description2:
              "Join our newsletter for exclusive content, seasonal inspirations, and special offers that will elevate your kitchen adventures!",
            confirm: "Confirm",
            latest: "Latest recipes",
            chorizo: "Chorizo Mozzarella Gnocchi",
            tuna: "Tuna Grilled Cheese",
            tater: "Tater Tots Casserole",
            broccoli: "Broccoli Ranch Fiesta",
          },
          filter: "Filter By",
        },
      },
      ko: {
        translation: {
            faq: {
                question1: "Dish Discovery는 무엇인가요?",
                answer1: "Dish Discovery는 레시피를 찾고 요리하는 데 도움이 되는 플랫폼입니다. 다양한 레시피를 찾아보고 즐겨찾기에 추가하거나 장보기 목록을 만들 수 있습니다.",
                question2: "어떻게 레시피를 추가하나요?",
                answer2: "레시피 추가 버튼을 클릭하고 제목, 재료, 조리법 등을 입력하여 레시피를 추가할 수 있습니다.",
                question3: "Dish Discovery에서 무엇을 할 수 있나요?",
                answer3: "Dish Discovery에서는 다양한 레시피를 검색하고 즐겨찾기에 추가하거나 장보기 목록을 만들 수 있습니다. 또한 요리 도우미를 통해 요리하는 데 도움을 받을 수 있습니다.",
                question4: "요리 도우미는 무엇인가요?",
                answer4: "요리 도우미는 실 시간으로 요리하는 데 도움을 주는 인공지능 채팅 기능입니다. 요리 중 궁금한 점이나 도움이 필요할 때 사용할 수 있습니다.",
                question5: "Dish Discovery에서 무엇을 요리할 수 있나요?",
                answer5: "Dish Discovery에서는 다양한 요리를 할 수 있습니다. 이탈리아, 멕시코, 태국, 중동 등 다양한 국가의 요리를 만들어 볼 수 있습니다.",
                question6: "Dish Discovery에서 어떤 종류의 레시피를 찾을 수 있나요?",
                answer6: "Dish Discovery에서는 아침식사, 피자, 비건, 디저트, 스무디 등 다양한 종류의 레시피를 찾을 수 있습니다.",
            },
            error:{
                title: "오류",
                message: "죄송합니다. 요청을 처리하는 중에 오류가 발생했습니다.",
                button: "홈으로 돌아가기",
            },
          instructions: "지침",
          likeRecipe: "레시피 좋아요",
          ingredients: "재료",
          addIngredients: "목록에 재료 추가!",
          removeIngredients: "목록에서 재료 제거!",
          favoriteRecipe: "레시피를 즐겨찾기에 추가!",
          removeRecipe: "레시피를 즐겨찾기에서 제거!",
          CapreseSalad: {
            title: "카프레제 샐러드",
            description:
              "신선한 토마토, 모짜렐라 치즈, 바질, 올리브 오일 및 식초로 만든 이탈리아 전통 카프레제 샐러드.",
            stars: 5,
            serving: "4인분 - 쉬움 - 10분",
            image:
              "https://www.simplyrecipes.com/thmb/1R8c7ZJY2rJ7v5K4ZJUj4l8dJqE=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__08__caprese-salad-horiz-a-1600-9b4a8b8f4b5e4b0e8a1f3c8b1b8c0f2b.jpg",
            cuisine: "이탈리아",
            servingSize: "4",
            cookingTime: "10분",
            difficulty: "쉬움",
            shortDescription:
              "신선한 토마토, 모짜렐라 치즈, 바질, 올리브 오일 및 식초로 만든 카프레제 샐러드.",
            servingAmount: "4인분",
            timeCooking: "10분",
            ingredients: [
              "신선한 토마토 4개",
              "신선한 모짜렐라 치즈 1팩",
              "신선한 바질 잎 1/2컵",
              "올리브 오일 1/4컵",
              "식초 2큰술",
              "소금과 후추 약간",
            ],
            longDescription:
              "카프레제 샐러드는 신선한 토마토, 모짜렐라 치즈, 바질 잎, 올리브 오일 및 식초로 만든 이탈리아 전통 샐러드입니다.",
            instructions: {
              "토마토 준비": ["토마토를 얇게 슬라이스합니다."],
              "모짜렐라 치즈 준비": ["모짜렐라 치즈를 얇게 슬라이스합니다."],
              "샐러드 만들기": [
                "토마토와 모짜렐라 치즈를 원형으로 번갈아가며 담아요.",
                "바질 잎을 고루 흩뿌립니다.",
                "올리브 오일과 식초를 뿌린 후 소금과 후추로 간을 해요.",
              ],
            },
          },
          PestoChickenPasta: {
            title: "페스토 치킨 파스타",
            description:
              "바질 페스토, 닭고기, 파마산 치즈, 마늘 및 올리브 오일로 만든 풍부하고 맛있는 페스토 치킨 파스타.",
            stars: 4,
            serving: "4인분 - 중간 난이도 - 30분",
            image:
              "https://www.simplyrecipes.com/thmb/7xv5H8qjJ8Z2V1b8K3zV2z3jG9c=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__08__pesto-pasta-horiz-a-1600-9d8b1f9a7f0a4a2f8d1b6b4b3b7b4f2.jpg",
            cuisine: "이탈리아",
            servingSize: "4",
            cookingTime: "30분",
            difficulty: "중간 난이도",
            shortDescription:
              "바질 페스토, 닭고기, 파마산 치즈, 마늘 및 올리브 오일로 만든 풍부하고 맛있는 페스토 치킨 파스타.",
            servingAmount: "4인분",
            timeCooking: "30분",
            ingredients: [
              "파스타 8온스 (225g)",
              "닭 가슴살 2개",
              "바질 페스토 1/2컵",
              "파마산 치즈 1/4컵",
              "다진 마늘 2쪽",
              "올리브 오일 2큰술",
              "소금과 후추 약간",
            ],
            longDescription:
              "페스토 치킨 파스타는 바질 페스토, 닭고기, 파마산 치즈, 마늘 및 올리브 오일로 만든 풍부하고 맛있는 파스타 요리입니다.",
            instructions: {
              "파스타 삶기": [
                "대형 냄비에 소금을 넣은 물을 끓입니다.",
                "파스타를 물에 넣고 8-10분 동안 삶아요. 식힌 후 물기를 제거합니다.",
              ],
              "닭고기 조리": [
                "닭 가슴살을 얇게 썰어요.",
                "스킬렛에 올리브 오일을 가열하고 닭 가슴살을 넣어 5-7분 동안 익힙니다.",
              ],
              "파스타 만들기": [
                "파스타를 닭고기와 섞고 바질 페스토, 파마산 치즈, 마늘, 소금, 후추를 넣어요.",
                "모든 재료가 섞이면 더운 데 내어 바로 서빙합니다.",
              ],
            },
          },
          SpaghettiCarbonara: {
            title: "스파게티 카르보나라",
            description:
              "스파게티, 베이컨, 계란, 파마산 치즈, 후추로 만든 이탈리아 전통 카르보나라 소스.",
            stars: 3,
            serving: "4인분 - 쉬움 - 20분",
            image:
              "https://www.simplyrecipes.com/thmb/4n0p1r2qk0JNz7I7F1p5Z2o6JZI=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__08__spaghetti-carbonara-horiz-a-1600-9a5c0c7e4e6a4b6a8e5a4a4a8a4f2.jpg",
            cuisine: "이탈리아",
            servingSize: "4",
            cookingTime: "20분",
            difficulty: "쉬움",
            shortDescription:
              "스파게티, 베이컨, 계란, 파마산 치즈, 후추로 만든 카르보나라 소스.",
            servingAmount: "4인분",
            timeCooking: "20분",
            ingredients: [
              "스파게티 8온스 (225g)",
              "베이컨 4줄",
              "계란 2개",
              "파마산 치즈 1/2컵",
              "후추 약간",
            ],
            longDescription:
              "스파게티 카르보나라는 스파게티, 베이컨, 계란, 파마산 치즈, 후추로 만든 이탈리아 전통 카르보나라 소스입니다.",
            instructions: {
              "스파게티 삶기": [
                "대형 냄비에 소금을 넣은 물을 끓입니다.",
                "스파게티를 물에 넣고 8-10분 동안 삶아요. 식힌 후 물기를 제거합니다.",
              ],
              "베이컨 조리": [
                "베이컨을 크리스피하게 익히고 종이 타월로 기름기를 제거합니다.",
                "베이컨을 잘게 다져요.",
              ],
              "소스 만들기": [
                "계란을 깨서 계란 노른자와 파마산 치즈를 섞어요.",
                "스파게티에 계란 소스와 베이컨을 넣고 섞어요.",
              ],
            },
          },
          TomYumSoup: {
            title: "톰얌 수프",
            description:
              "새우, 버섯, 토마토, 레몬 그라스, 라임 잎, 고추로 만든 매운 태국 전통 수프.",
            stars: 4,
            serving: "4인분 - 중간 난이도 - 30분",
            image:
              "https://www.simplyrecipes.com/thmb/6t4lq5t2h2J6j7K7F6l2z5i3j6I=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__08__tom-yum-soup-horiz-a-1600-9f8e1e2e4e5f4a4b8a4a4a8a4f2.jpg",
            cuisine: "태국",
            servingSize: "4",
            cookingTime: "30분",
            difficulty: "중간 난이도",
            shortDescription:
              "새우, 버섯, 토마토, 레몬 그라스, 라임 잎, 고추로 만든 매운 태국 전통 수프.",
            servingAmount: "4인분",
            timeCooking: "30분",
            ingredients: [
              "새우 1파운드 (450g)",
              "버섯 8온스 (225g)",
              "토마토 2개",
              "레몬 그라스 2대",
              "라임 잎 4장",
              "고추 2개",
              "고추장 2큰술",
              "소금과 후추 약간",
            ],
            longDescription:
              "톰얌 수프는 새우, 버섯, 토마토, 레몬 그라스, 라임 잎, 고추로 만든 매운 태국 전통 수프입니다.",
            instructions: {
              "재료 준비": [
                "새우를 껍질을 벗기고 손질해요.",
                "버섯을 슬라이스하고 토마토를 썰어요.",
                "레몬 그라스를 다져요.",
                "라임 잎을 다져요.",
                "고추를 다져요.",
              ],
              "수프 만들기": [
                "대형 냄비에 물을 끓입니다.",
                "새우, 버섯, 토마토, 레몬 그라스, 라임 잎, 고추를 넣고 끓입니다.",
                "고추장, 소금, 후추로 간을 해요.",
              ],
            },
          },
          TacosalPastor: {
            title: "타코스 알 파스토르",
            description:
              "매운 돼지고기, 파인애플, 양파, 코리앤더로 만든 멕시코 전통 타코.",
            stars: 5,
            serving: "4인분 - 어려움 - 45분",
            image:
              "https://www.simplyrecipes.com/thmb/6t4lq5t2h2J6j7K7F6l2z5i3j6I=/2000x1333/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__08__tom-yum-soup-horiz-a-1600-9f8e1e2e4e5f4a4b8a4a4a8a4f2.jpg",
            cuisine: "멕시코",
            servingSize: "4",
            cookingTime: "45분",
            difficulty: "어려움",
            shortDescription:
              "매운 돼지고기, 파인애플, 양파, 코리앤더로 만든 멕시코 전통 타코.",
            servingAmount: "4인분",
            timeCooking: "45분",
            ingredients: [
              "돼지고기 양념 1파운드 (450g)",
              "파인애플 1컵",
              "양파 1개",
              "코리앤더 1/2컵",
              "라임 주스 2큰술",
              "소금과 후추 약간",
              "타코 피타 8개",
            ],
            longDescription:
              "타코스 알 파스토르는 매운 돼지고기, 파인애피, 양파, 코리앤더로 만든 멕시코 전통 타코입니다.",
            instructions: {
              "돼지고기 준비": [
                "돼지고기를 얇게 썰어요.",
                "돼지고기에 소금, 후추, 라임 주스를 넣고 30분 동안 양념에 재워요.",
              ],
              "타코 만들기": [
                "돼지고기를 구워요.",
                "타코 피타에 돼지고기, 파인애플, 양파, 코리앤더를 넣어요.",
              ],
            },
          },
          SpinachandFetaStuffedChickenBreast: {
            title: "시금치와 페타 치즈가 들어간 닭가슴살",
            description:
              "시금치, 페타 치즈 및 허브로 가득한 부드러운 닭가슴살 요리. 우아하고 맛있습니다!",
            stars: 4,
            serving: "2인분 - 중간 난이도 - 35분",
            image:
              "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2023_48/2041166/chef-dan-churchill-chicken-mc-2x1-231128.jpg",
            cuisine: "중동",
            servingSize: "2",
            cookingTime: "35분",
            difficulty: "중간 난이도",
            shortDescription: "시금치와 페타 치즈가 들어간 부드러운 닭가슴살.",
            servingAmount: "2인분",
            timeCooking: "35분",
            ingredients: [
              "뼈 없는 피부 없는 닭가슴살 2개",
              "신선한 시금치 잎 2컵",
              "부서진 페타 치즈 1/2컵",
              "다진 마늘 2쪽",
              "올리브 오일 1큰술",
              "마른 오레가노 1/2작은술",
              "소금과 후추 약간",
              "이빨뽑이나 부엌 끈",
            ],
            longDescription:
              "시금치와 페타 치즈가 들어간 닭가슴살은 시금치, 마늘 및 페타 치즈로 가득한 맛있는 요리로, 이후 완벽하게 구워집니다.",
            instructions: {
              "닭 준비": [
                "오븐을 375°F (190°C)로 예열합니다.",
                "각 닭가슴살을 수평으로 자르고 주머니를 만듭니다.",
              ],
              "소스 만들기": [
                "스킬렛에 올리브 오일을 가열하고 중불에서 마늘을 넣고 향이 날 때까지 조리합니다.",
                "시금치를 넣고 시금치가 시들 때까지 조리합니다. 불에서 내려서 부서진 페타, 오레가노, 소금 및 후추를 넣습니다.",
              ],
              "닭가슴살 채우고 구워요": [
                "시금치와 페타 혼합물로 각 닭가슴살을 채웁니다. 필요하면 이빨뽑이나 부엌 끈으로 고정합니다.",
                "구운 닭가슴살을 베이킹 시트에 올려놓습니다. 25-30분 동안 구워요, 또는 닭이 완전히 익을 때까지.",
              ],
              제공: ["제공하기 전에 이빨뽑이나 끈을 제거합니다."],
            },
          },
          MushroomRisotto: {
            title: "버섯 리조또",
            description:
              "아르보리오 쌀, 버섯, 파르미지아 치즈 및 약간의 화이트 와인으로 만든 크리미하고 위안이 되는 버섯 리조또.",
            stars: 5,
            serving: "4인분 - 어려움 - 45분",
            image:
              "https://www.allrecipes.com/thmb/Pow6PE9UyushNDB4wutXNnmriX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/85389-gourmet-mushroom-risotto-86-7a2d218f53e94ccfaecc69b6fd93cab8.jpg",
            cuisine: "이탈리아",
            servingSize: "4",
            cookingTime: "45분",
            difficulty: "어려움",
            shortDescription:
              "아르보리오 쌀과 버섯으로 만든 크리미하고 위안이 되는 리조또.",
            servingAmount: "4인분",
            timeCooking: "45분",
            ingredients: [
              "1컵 아르보리오 쌀",
              "4컵 닭고기 또는 채소 육수",
              "1컵 슬라이스 버섯 (크레미니 또는 버튼과 같은)",
              "1/2컵 건백색 와인",
              "1/2컵 갈은 파르미지아 치즈",
              "1/4컵 다진 신선한 파슬리",
              "2큰술 버터",
              "1큰술 올리브 오일",
              "다진 양파 1개",
              "다진 마늘 2쪽",
              "소금과 후추 약간",
            ],
            longDescription:
              "버섯 리조또는 아르보리오 쌀, 버섯, 육수, 와인 및 파르미지아 치즈로 천천히 요리하여 풍부하고 벨벳 같은 질감을 얻을 때까지 조리하는 이탈리아 전통 요리입니다.",
            instructions: {
              "육수 준비": [
                "냄비에 육수를 끓이기 전까지 가열합니다. 낮은 열로 유지하여 따뜻하게 합니다.",
              ],
              "버섯 볶기": [
                "큰 프라이팬에 올리브 오일과 버터를 중불에서 가열합니다. 양파와 마늘을 넣고 부드러워질 때까지 조리합니다.",
                "슬라이스한 버섯을 넣고 갈색이 돌 때까지 조리합니다. 버섯의 절반을 제거하고 따로 둡니다.",
              ],
              "리조또 요리": [
                "남은 버섯과 함께 프라이팬에 아르보리오 쌀을 넣습니다. 쌀이 기름에 묻고 약간 투명해질 때까지 저어줍니다.",
                "흰 와인을 붓고 흡수될 때까지 요리합니다. 자주 저어가면서 한 번에 한 술씩 따뜻한 육수를 넣고 흡수되기 전까지 자주 저어줍니다.",
                "쌀이 부드럽고 크리미하고 향긋해질 때까지 계속해서 육수를 넣고 저어줍니다. 약 20-25분 정도 소요됩니다.",
              ],
              마치다: [
                "남은 버섯, 파르미지아 치즈, 다진 파슬리를 넣고 소금과 후추로 조미합니다.",
                "열을 끄고 제공하기 전에 몇 분 동안 쉬게 합니다.",
              ],
              제공하다: [
                "필요한 경우 추가로 파르미지아 치즈와 파슬리를 곁들여 뜨거운 상태로 제공합니다.",
              ],
            },
          },
          GrilledSalmonwithLemonButterSauce: {
            title: "레몬 버터 소스와 구운 연어",
            description:
              "신맛 나는 레몬 버터 소스로 마무리된 촉촉한 구운 연어 필렛. 건강하고 맛있는 저녁 식사에 완벽합니다.",
            stars: 2,
            serving: "2인분 - 중간 난이도 - 20분",
            image:
              "https://hips.hearstapps.com/hmg-prod/images/how-to-grill-salmon-recipe1-1655870645.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
            cuisine: "태국",
            servingSize: "2",
            cookingTime: "20분",
            difficulty: "중간 난이도",
            shortDescription:
              "신맛 나는 레몬 버터 소스로 마무리된 촉촉한 구운 연어 필렛.",
            servingAmount: "2인분",
            timeCooking: "20분",
            ingredients: [
              "연어 필렛 2개",
              "소금과 후추 약간",
              "올리브 오일 1큰술",
              "버터 2큰술",
              "레몬 주스 2큰술",
              "다진 신선한 딜 1큰술 (또는 1작은술 건조된 딜)",
              "다진 마늘 1쪽",
              "레몬 조각 (장식용)",
            ],
            longDescription:
              "레몬 버터 소스와 구운 연어는 연어 필렛을 조미하고 구운 후 마늘과 딜이 첨가된 버터 레몬 소스로 제공하는 건강하고 맛있는 요리입니다.",
            instructions: {
              "연어 준비": [
                "그릴이나 그릴 팬을 중불로 예열합니다. 연어 필렛에 소금, 후추, 올리브 오일을 발라줍니다.",
              ],
              "연어 구워요": [
                "연어 필렛을 각 면에 대략 4-5분씩 구워요. 포크로 쉽게 찢어지면 완성입니다.",
              ],
              "레몬 버터 소스 만들기": [
                "작은 냄비에서 버터를 중불로 녹입니다. 레몬 주스, 딜, 다진 마늘을 넣고 1-2분 동안 가열합니다.",
              ],
              제공하다: [
                "구운 연어를 접시에 옮깁니다. 레몬 버터 소스를 연어 필렛 위에 숟가락으로 뿌려줍니다. 레몬 조각으로 장식하고 뜨거운 상태로 제공합니다.",
              ],
            },
          },
          Onepansausagepasta: {
            title: "원팬 소시지 파스타",
            description:
              "촉촉한 소스와 풍부한 맛이 가득한 쉬운 원팬 소시지 파스타 요리. 30분 이내에 완성!",
            stars: 4,
            serving: "3인분 - 중간 난이도 - 25분",
            image:
              "https://www.mrsjoneskitchen.com/wp-content/uploads/2022/08/one-pot-creamy-sausage-pasta.jpg",
            cuisine: "이탈리아",
            servingSize: "3",
            cookingTime: "25분",
            difficulty: "중간 난이도",
            shortDescription:
              "촉촉한 소스와 풍부한 맛이 가득한 쉬운 원팬 소시지 파스타.",
            servingAmount: "3인분",
            timeCooking: "25분",
            ingredients: [
              "8 온스 (225g) 파스타 (펜네 또는 유사한)",
              "이탈리아 소시지 4개, 피부 제거",
              "양파 1개, 속다리기",
              "다진 마늘 2쪽",
              "통조림 토마토 1캔 (14 온스 / 400g)",
              "닭고기 육수 1컵 (240ml)",
              "생크림 1/2컵 (120ml)",
              "건바질 1작은술",
              "소금과 후추 약간",
              "파르미지아 치즈 가루 (서빙용)",
            ],
            longDescription:
              "원팬 소시지 파스타는 파스타, 이탈리아 소시지, 토마토 및 크림 소스로 만든 빠르고 맛 있는 이탈리아식 요리입니다.",
            instructions: {
              "소시지 조리": [
                "대형 프라이팬에서 중불에서 소시지를 익히면서 깨끗하게 부수어 갑니다.",
                "양파와 마늘을 넣고 부드러워질 때까지 조리합니다.",
              ],
              "파스타와 소스 추가": [
                "토마토 (즙이 있는 상태로), 닭고기 육수, 크림, 건바질, 소금, 후추를 넣습니다.",
                "파스타를 넣고 끓어오르게 합니다. 뚜껑을 덮지 않고 가끔 저어가면서 파스타가 부드러워지고 소스가 농성할 때까지 요리합니다.",
              ],
              제공: ["파르미지아 치즈를 뿌리고 뜨거운 상태로 제공합니다."],
            },
          },
          VegetarianPadThai: {
            title: "채식주의 팟 타이",
            description:
              "쌀국수, 두부, 땅콩 및 신맛 나는 타마린 소스로 만든 클래식 채식주의 팟 타이. 풍부한 맛이 가득!",
            stars: 3,
            serving: "4인분 - 중간 난이도 - 40분",
            image:
              "https://img.taste.com.au/z9EIVHJg/taste/2021/02/10-minute-vegetarian-pad-thai-168946-2.jpg",
            cuisine: "태국",
            servingSize: "4",
            cookingTime: "40분",
            difficulty: "중간 난이도",
            shortDescription: "쌀국수와 두부로 만든 클래식 채식주의 팟 타이.",
            servingAmount: "4인분",
            timeCooking: "40분",
            ingredients: [
              "8 온스 (225g) 쌀국수",
              "1 블록 (14 온스 / 400g) 단단한 두부, 귀퉁이로 자른 것",
              "달걀 2개, 휘젓은 것",
              "콩나물 1컵",
              "다진 땅콩 1/2컵",
              "다진 파 2대",
              "다진 마늘 2쪽",
              "간장 1/4컵",
              "타마린 페이스트 3큰술",
              "갈색 설탕 2큰술",
              "날개뼈 소스 1큰술 (선택 사항)",
              "식용유 1큰술",
              "라임 케이지와 코리앤더 (서빙용)",
            ],
            longDescription:
              "채식주의 팟 타이는 쌀국수, 두부, 땅콩 및 신맛 나는 타마린 소스로 만든 인기 있는 태국식 볶음 요리입니다. 맛있고 만족스러운 채식주의 식사입니다!",
            instructions: {
              "쌀국수 준비": [
                "뜨거운 물에 쌀국수를 불립니다. 부드러워질 때까지 물기를 빼고 대기합니다.",
              ],
              "두부와 달걀 조리": [
                "대형 프라이팬이나 중탕에 기름을 데웁니다. 두부를 넣고 황금갈색이 될 때까지 조리합니다. 두부를 한쪽에 옮기고 휘젓은 계란을 넣어 익힙니다.",
              ],
              볶음: [
                "다진 마늘, 파, 콩나물, 땅콩을 넣습니다. 1-2분간 볶습니다.",
                "물기를 뺀 쌀국수, 간장, 타마린 페이스트, 갈색 설탕, 날개뼈 소스 (선택 사항)를 넣습니다. 모든 것을 섞어 잘 섞고 가열합니다.",
              ],
              제공: ["라임 케이지와 코리앤더와 함께 뜨거운 상태로 제공합니다."],
            },
          },
          Groundbeeftacos: {
            description:
              "완벽하게 조리된 신선한 살사와 아보카도를 곁들인 완벽하게 향신료가 발린 소고기를 담은 바삭하고 건강한 토스트 타코 쉘, 부드러운 아보카도와 맛있는 치즈로 마무리.",
            stars: 4,
            serving: "4인분 - 쉬움 - 45분",
            image:
              "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
            cuisine: "멕시코",
            servingSize: "4",
            cookingTime: "45분",
            title: "소고기 타코",
            shortDescription: "완벽하게 향신료가 발린 소고기 타코.",
            servingAmount: "4인분",
            difficulty: "쉬움",
            timeCooking: "45분",
            ingredients: [
              "1 파운드 (450g) 소고기",
              "타코 시즈닝 믹스 1팩",
              "물 1/2컵",
              "작은 토르티야 8개",
              "다진 양상추 1컵",
              "다진 토마토 1컵",
              "다진 체다 치즈 1/2컵",
              "다진 신선한 코리앤더 1/4컵",
              "서큼과 살사",
            ],
            longDescription:
              "소고기 타코는 향신료가 발린 소고기를 토르티야에 담아 신선한 토핑으로 제공하는 멕시코 전통 요리입니다. 빠르고 맛있는 식사에 딱입니다!",
            instructions: {
              "소고기 조리": [
                "중간 높은 열로 달군 프라이팬에 소고기를 익을 때까지 조리하십시오. 과다한 기름을 제거하십시오.",
                "타코 시즈닝 믹스와 물을 추가하십시오. 젓고 5분간 끓입니다.",
              ],
              "타코 준비": [
                "건조한 프라이팬이나 전자레인지에서 토르티야를 데웁니다.",
                "토르티야에 소고기 혼합물, 양상추, 토마토, 치즈, 코리앤더, 살사, 서큼을 넣으십시오.",
              ],
              제공: ["즉시 제공하고 즐기십시오!"],
            },
          },
          chickenShawarma: {
            title: "치킨 샤와르마",
            description:
              "샐러드, 랩 + 그릇에 적합한 놀라운 (그리고 쉬운!) 향신료 혼합을 사용한 최고의 홈메이드 샤와르마 레시피! ",
            stars: 5,
            serving: "6인분 - 중간 난이도 - 90분",
            image:
              "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=1xw:0.843328335832084xh;center,top",
            cuisine: "중동",
            servingSize: "6",
            cookingTime: "90분",
            shortDescription: "마리네이트된 닭으로 맛있는 중동 요리.",
            servingAmount: "6인분",
            difficulty: "보통",
            timeCooking: "30분",
            ingredients: [
              "1 파운드 (450g) 뼈없는 피부 없는 닭 다리살 또는 가슴살, 얇게 썬 것",
              "다진 마늘 2쪽",
              "커민 가루 1작은술",
              "파프리카 가루 1작은술",
              "우스터 소스 1작은술",
              "후추 1작은술",
              "소금 1작은술",
              "레몬즙 2큰술",
              "올리브유 3큰술",
            ],
            longDescription:
              "치킨 샤와르마는 전통적으로 얇게 썬 마리네이트된 닭, 마늘 및 향신료로 만든 중동의 인기 길거리 음식입니다. 보통 피타 빵으로 제공되거나 쌀과 샐러드와 함께 제공됩니다.",
            instructions: {
              "예열 및 준비": ["오븐을 400°F (200°C)로 예열하십시오."],
              마리네이트: [
                "그릇에 마늘, 커민, 파프리카, 우스터 소스, 후추, 소금, 후추, 레몬즙 및 올리브유를 섞으십시오.",
                "마리네이트에 닭 다리살을 넣으십시오. 덮고 최소 30분, 최상의 결과를 위해 하룻밤 동안 냉장실에 보관하십시오.",
              ],
              "닭 조리": [
                "중간 높은 열로 그릴이나 프라이팬을 예열하십시오.",
                "닭 다리살을 3-4분씩 한 면당 조리하십시오. 완전히 익을 때까지.",
              ],
              제공: [
                "따뜻하게 제공하고 탈리니 소스, 샐러드 및 피클로 싸서 먹으십시오.",
              ],
            },
          },
          recipes: {
            title: "좋아하는 레시피 검색",
            placeholder: "치킨 샤와르마, 타코, 파스타...",
            cuisineTypes: "요리 종류",
            difficulty: "난이도",
            rating: "평점",
            italian: "이탈리아",
            mexican: "멕시코",
            middleEastern: "중동",
            thai: "태국",
            easy: "쉬움",
            medium: "보통",
            hard: "어려움",
            onestar: "한 별",
            twostar: "두 별",
            threestar: "세 별",
            fourstar: "네 별",
            fivestar: "다섯 별",
            clear: "필터 지우기",
          },
          addRecipe: {
            submit: "레시피가 제출되었습니다!",
            description:
              "레시피를 제출해 주셔서 감사합니다. 곧 당사 팀에서 검토할 것입니다.",
            title: "레시피 추가",
            name: "레시피 제목",
            nameDescription: "레시피 제목을 입력하십시오",
            shortDescription: "간단한 설명",
            shortDescriptionDescription:
              "입맛을 돋우는 방식으로 레시피를 설명하십시오",
            ingredients: "재료",
            servings: "인분",
            prep: "준비 시간",
            cook: "조리 시간",
            mins: "분",
            example: "예: 4",
            item: "항목",
            addIngredient: "+ 재료 추가",
            instructions: "지침",
            instructionsDescription:
              "레시피를 명확하고 쉽게 따라갈 수 있는 단계로 나누어 설명하십시오",
            step: "단계",
            addStep: "+ 단계 추가",
            cancel: "취소",
            submitButton: "레시피 제출",
          },
          zoom: {
            title: "우리와 함께하는 라이브 대화식 요리 세션",
            description:
              "매주 월요일, 수요일 및 금요일 오후 6시 EST에 함께 요리하십시오!",
            since:
              "현재 라이브 방송 중이 아니므로, 이전 세션을 자유롭게 시청하십시오!",
          },
          lists: {
            ingredient1:
              "1 파운드 (450g) 뼈없는 피부 없는 닭 다리살 또는 가슴살, 얇게 썬 것",
            ingredient2: "다진 마늘 2쪽",
            ingredient3: "커민 가루 1작은술",
            ingredient4: "파프리카 가루 1작은술",
            ingredient5: "우스터 소스 1작은술",
            ingredient6: "후추 1작은술",
            ingredient7: "소금 1작은술",
            ingredient8: "레몬즙 2큰술",
            ingredient9: "올리브유 3큰술",
            ingredient10: "소금과 후추 약간",
            ingredient11: "올리브유 3큰술",
            title: "좋아하는 레시피",
            grocery: "장보기 목록",
            week: "이번 주 장보기 목록",
            viewRecipe: "레시피 보기",
          },
          assistant: {
            message:
              "안녕하세요! 저는 요리 검색 도우미입니다. 오늘은 무엇을 도와드릴까요?",
            help: "요리하는 데 도움이 필요하세요?",
            ask: "아래의 요리 검색 도우미에게 물어보세요!",
            username: "요리 검색 도우미",
            status: "지금 활동 중",
            type: "메시지 입력...",
            typing: "요리 검색 도우미가 입력 중입니다...",
          },
          navbar: {
            home: "홈",
            explore: "레시피 탐색",
            cooking: "요리 도움말",
            list: "내 목록",
            zoom: "라이브 세션",
            recipe: "+ 레시피 추가",
            faq: "자주하는 질문",
          },
          footer: {
            description: "맛있는 공예",
            about: "회사 소개",
            dish: "요리 발견에 대해",
            privacy: "개인정보 보호정책",
            terms: "서비스 약관",
            services: "서비스",
            recipes: "레시피",
            cooking: "요리 도움말",
            add: "레시피 추가",
            contact: "문의하기",
            rights: "2024년 요리 발견 - 모든 권리 보유",
          },
          home: {
            greeting: "맛있는 공예",
            greeting2: "추억",
            description:
              "군침이 도는 레시피부터 전문가의 요리 팁까지, 모두에게 기쁨을 선사하는 잊을 수 없는 요리를 만들기 위한 여정 식사 시간.",
            explore: "레시피 탐색",
            trending: "인기 레시피",
            shawarma: "치킨 샤와르마",
            taco: "소고기 타코",
            pasta: "원팬 소시지 파스타",
            shawarmaDescription:
              "샐러드, 랩 + 그릇에 적합한 놀라운 (그리고 쉬운!) 향신료 혼합을 사용한 최고의 홈메이드 샤와르마 레시피! ",
            shawarmaServing: "6인분 - 중간 난이도 - 90분",
            tacoDescription:
              "신선하게 만든 토마토 살사와 잘 향신료가 발린 소고기를 담은 바삭하고 건강한 토스트 타코 쉘, 부드러운 아보카도와 맛있는 치즈로 마무리.",
            tacoServing: "3인분 - 쉬운 난이도 - 45분",
            pastaDescription:
              "리가토니와 소시지는 클래식한 조합이지만 이 마법의 한 냄비 요리는 모든 손님들을 놀라게 할 준비가 된 30분 안에 완성되는 요리!",
            pastaServing: "5인분 - 쉬운 난이도 - 30분",
            popular: "인기 카테고리",
            breakfast: "아침식사",
            pizza: "피자",
            vegan: "비건",
            dessert: "디저트",
            smoothies: "스무디",
            comeout: "새로운 레시피가 나올 때 알고 싶으신가요?",
            subscribe: "뉴스레터 구독",
            description2:
              "독점 콘텐츠, 계절별 영감 및 주방 모험을 높일 특별한 제안을 위한 뉴스레터에 가입하세요!",
            confirm: "확인",
            latest: "최신 레시피",
            chorizo: "초리조 모짜렐라 노키",
            tuna: "참치 그릴 치즈",
            tater: "테이터 토츠 캐서롤",
            broccoli: "브로콜리 랜치 피에스타",
          },
          filter: "필터링 기준",
        },
      },
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t("Welcome to React")}</h2>;
}

// append app to dom
const root = createRoot(document.getElementById("root"));
root.render(<App />);
