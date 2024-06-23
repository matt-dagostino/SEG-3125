import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactComponent as Upload } from "../img/upload.svg";
import { ReactComponent as RemoveButton } from "../img/removebutton.svg";
import { useRef } from "react";

function AddRecipe() {
  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };

  const initialIngredients = ["", "", ""];
  const [ingredients, setIngredients] = useState(initialIngredients);

  const handleInputChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleAddInput = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleRemoveInput = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const initialSteps = ["", ""];
  const [steps, setSteps] = useState(initialSteps);

  const handleInputChange2 = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const handleAddInput2 = () => {
    setSteps([...steps, ""]);
  };

  const handleRemoveInput2 = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-8 gap-4 pb-12">
        <h1 className="text-5xl font-extrabold uppercase">Add a recipe</h1>
        <div className="pt-8">
          <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
          />

          <Upload className="cursor-pointer h-1/2" onClick={onButtonClick} />
        </div>
        <form className="w-1/2">
          <div class="grid gap-6 mb-6">
            <div>
              <label class="block mb-2 text-lg font-medium text-gray-900">
                Recipe Title <span className="font-bold text-red-600">*</span>
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your recipe title"
                required
              />
            </div>
            <div>
              <label class="block mb-2 text-lg font-medium text-gray-900">
                Short Description{" "}
                <span className="font-bold text-red-600">*</span>
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Describe your recipe in a way that makes mouths water."
                required
              />
            </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div class="grid gap-6 mb-6 md:grid-row-3">
              <div className="flex justify-between">
                <label class="block mb-2 text-lg font-medium text-gray-900">
                  Servings <span className="font-bold text-red-600">*</span>
                </label>
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-12 w-1/2"
                  placeholder="e.g., 4"
                  required
                />
              </div>
              <div className="flex justify-between">
                <label class="block mb-2 text-lg font-medium text-gray-900">
                  Prep Time <span className="font-bold text-red-600">*</span>
                </label>
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-12 w-1/2"
                  placeholder="mins"
                  required
                />
              </div>
              <div className="flex justify-between">
                <label class="block mb-2 text-lg font-medium text-gray-900">
                  Cook Time <span className="font-bold text-red-600">*</span>
                </label>
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-12 w-1/2"
                  placeholder="mins"
                  required
                />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-lg font-medium text-gray-900">
                Ingredients <span className="font-bold text-red-600">*</span>
              </label>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Item"
                    value={ingredient}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveInput(index)}
                    className="ml-2 text-red-600"
                  >
                    <RemoveButton />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddInput}
                className="text-black font-bold rounded-lg px-4 py-2 mt-2"
              >
                + Add Ingredient
              </button>
            </div>
          </div>
          <div className="bg-gray-300 w-full h-0.5 rounded-lg my-12"></div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900">
              Instructions <span className="font-bold text-red-600">*</span>
            </label>
            <p className="mb-8">Break down your recipe into clear, step-by-step instructions.</p>
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start mb-2">
                <p className="mb-2">Step {index +1}</p>
                <div className="flex w-full mb-4">
                <textarea
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-24"
                  placeholder="Item"
                  value={step}
                  onChange={(e) => handleInputChange2(index, e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveInput2(index)}
                  className="ml-2 text-red-600"
                >
                  <RemoveButton />
                </button>
                    </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddInput2}
              className="text-black font-bold rounded-lg px-4 py-2 mt-2"
            >
              + Add Step
            </button>
          </div>
          <div className="flex justify-end gap-4 mt-8">
          <button
            type="submit"
            class="font-semibold border-2 border-blue-600  text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-md w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-md w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit Recipe
          </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddRecipe;
