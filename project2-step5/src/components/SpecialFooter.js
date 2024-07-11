import React from "react";
import { ReactComponent as Icon } from "../img/logo2.svg";
import { ReactComponent as SocialMedia } from "../img/social media.svg";
import { useTranslation } from "react-i18next";

function SpecialFooter() {
  const { t } = useTranslation();
  return (
    <div className="bg-footer-color text-white w-full flex p-12 pl-32">
      <div className="flex flex-col gap-4 w-2/5">
        <Icon />
        <p className="text-xs">{t('footer.description')}</p>
      </div>
      <div className="w-1/5 flex flex-col gap-2">
        <p className="font-bold">{t('footer.about')}</p>
        <a href="/" className="text-xs">
          {t('footer.dish')}
        </a>
        <a href="/" className="text-xs">
          {t('footer.privacy')}
        </a>
        <a href="/" className="text-xs">
          {t('footer.terms')}
        </a>
      </div>
      <div className="w-1/5 flex flex-col gap-2">
        <p className="font-bold">{t('footer.services')}</p>
        <a href="/recipes" className="text-xs">
        {t('footer.recipes')}
        </a>
        <a href="/assistant" className="text-xs">
        {t('footer.cooking')}
        </a>
        <a href="/addrecipe" className="text-xs">
        {t('footer.add')}
        </a>
      </div>
      <div className="w-1/5 flex flex-col gap-2">
        <p className="font-bold">{t('footer.contact')}</p>
        <a href="/" className="flex gap-2">
          <SocialMedia className="w-2/5" />
        </a>
        <p className="text-xs">{t('footer.rights')}</p>
      </div>
    </div>
  );
}

export default SpecialFooter;
