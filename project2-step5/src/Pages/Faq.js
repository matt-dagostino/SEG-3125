import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function Faq() {
    const { t } = useTranslation();
  return (
    <div>
      <Navbar location="faq" />
      <section className="text-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 items-center">
        <h1 className="text-5xl font-extrabold uppercase text-heading-color mb-12">
          Frequently Asked Questions
        </h1>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300 w-full">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
              {t('faq.question1')}
              </summary>
              <div className="px-4 pb-4">
                <p>
                {t('faq.answer1')}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {t('faq.question2')}
              </summary>
              <div className="px-4 pb-4">
                <p>
                {t('faq.answer2')}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {t('faq.question3')}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                {t('faq.answer3')}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {t('faq.question4')}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                {t('faq.answer4')}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {t('faq.question5')}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                {t('faq.answer5')}
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {t('faq.question6')}
              </summary>
              <div className="px-4 pb-4 space-y-2">
                <p>
                {t('faq.answer6')}
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
}

export default Faq;
