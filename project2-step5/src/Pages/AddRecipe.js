import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReactComponent as Upload } from "../img/upload.svg";
import { ReactComponent as RemoveButton } from "../img/removebutton.svg";
import { useTranslation } from "react-i18next";

function AddRecipe() {
  const router = useNavigate();
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
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

  if (submitted) {
    return (
      <div>
        <Navbar />
        <div className="flex flex-col justify-center h-screen items-center pt-8 gap-4 pb-12">
          <div className="text-center flex flex-col gap-4 p-12 bg-white rounded-xl">
            <h1 className="text-5xl font-extrabold uppercase">
              {t("addRecipe.submit")}
            </h1>
            <p className="text-xl">
              {t("addRecipe.description")}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-8 gap-4 pb-12">
        <h1 className="text-5xl font-extrabold uppercase">{t('addRecipe.title')}</h1>
        <div className="pt-8">
          <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
            aria-label="Upload recipe image"
          />
          <Upload
            className="cursor-pointer h-1/2"
            onClick={onButtonClick}
            role="button"
            aria-label="Upload recipe image"
          />
        </div>
        <form
          className="w-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-6 mb-6">
            <div>
              <label
                htmlFor="recipe-title"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                {t('addRecipe.name')} <span className="font-bold text-red-600">*</span>
              </label>
              <input
                id="recipe-title"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={t('addRecipe.nameDescription')}
                required
              />
            </div>
            <div>
              <label
                htmlFor="short-description"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                {t('addRecipe.shortDescription')}{" "}
                <span className="font-bold text-red-600">*</span>
              </label>
              <input
                id="short-description"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder={t('addRecipe.shortDescriptionDescription')}
                required
              />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-3">
            <div className="grid gap-6 mb-6 md:grid-row-3">
              <div className="flex justify-between">
                <label
                  htmlFor="servings"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  {t("addRecipe.servings")} <span className="font-bold text-red-600">*</span>
                </label>
                <input
                  id="servings"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-12 w-1/2"
                  placeholder={t("addRecipe.example")}
                  required
                />
              </div>
              <div className="flex justify-between">
                <label
                  htmlFor="prep-time"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  {t("addRecipe.prep")} <span className="font-bold text-red-600">*</span>
                </label>
                <input
                  id="prep-time"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-12 w-1/2"
                  placeholder={t("addRecipe.mins")}
                  required
                />
              </div>
              <div className="flex justify-between">
                <label
                  htmlFor="cook-time"
                  className="block mb-2 text-lg font-medium text-gray-900"
                >
                  {t("addRecipe.cook")} <span className="font-bold text-red-600">*</span>
                </label>
                <input
                  id="cook-time"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 h-12 w-1/2"
                  placeholder={t("addRecipe.mins")}
                  required
                />
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="ingredients"
                className="block mb-2 text-lg font-medium text-gray-900"
              >
                {t("addRecipe.ingredients")} <span className="font-bold text-red-600">*</span>
              </label>
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    id={`ingredient-${index}`}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={t("addRecipe.item")}
                    value={ingredient}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    required
                    aria-labelledby={`ingredient-label-${index}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveInput(index)}
                    className="ml-2 text-red-600"
                    aria-label={`Remove ingredient ${index + 1}`}
                  >
                    <RemoveButton />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddInput}
                className="text-black font-bold rounded-lg px-4 py-2 mt-2"
                aria-label="Add ingredient"
              >
                {t("addRecipe.addIngredient")}
              </button>
            </div>
          </div>
          <div className="bg-gray-300 w-full h-0.5 rounded-lg my-12"></div>
          <div>
            <label
              htmlFor="instructions"
              className="block mb-2 text-lg font-medium text-gray-900"
            >
              {t("addRecipe.instructions")} <span className="font-bold text-red-600">*</span>
            </label>
            <p className="mb-8">
              {t("addRecipe.instructionsDescription")}
            </p>
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start mb-2">
                <p className="mb-2" id={`step-label-${index}`}>
                {t("addRecipe.step")} {index + 1}
                </p>
                <div className="flex w-full mb-4">
                  <textarea
                    id={`step-${index}`}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-24"
                    placeholder={t("addRecipe.item")}
                    value={step}
                    onChange={(e) => handleInputChange2(index, e.target.value)}
                    required
                    aria-labelledby={`step-label-${index}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveInput2(index)}
                    className="ml-2 text-red-600"
                    aria-label={`Remove step ${index + 1}`}
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
              aria-label="Add step"
            >
              {t("addRecipe.addStep")}
            </button>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={() => router("/")}
              className="font-semibold border-2 border-blue-600 text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-md w-full sm:w-auto px-5 py-2.5 text-center"
              aria-label="Cancel and return to homepage"
            >
              {t("addRecipe.cancel")}
            </button>
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-md w-full sm:w-auto px-5 py-2.5 text-center"
              aria-label="Submit recipe"
            >
              {t("addRecipe.submitButton")}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddRecipe;
