import { useContext } from 'react';
import { Store } from 'store';
import { addSticker, toggleTheme, toggleLanguage } from 'store/actions';

import './Header.scss';

const Header = () => {
  const {
    theme: { isLightTheme, light, dark },
    localization: { language, en, ua },
    dispatch
  } = useContext(Store);

  const headerStyle = isLightTheme ? light : dark;
  document.body.style.backgroundColor = headerStyle.background;

  const lang = language === 'en' ? en : ua;

  const themeIconClass = isLightTheme
    ? 'header__menu__btn icon-moon'
    : 'header__menu__btn icon-sun';

  function onToggleLanguage() {
    dispatch(toggleLanguage(language === 'en' ? 'ua' : 'en'));
  }

  function handleToggleTheme() {
    dispatch(toggleTheme(isLightTheme));
  }

  function AddSticker() {
    dispatch(addSticker());
  }

  return (
    <>
      <header style={headerStyle}>
        <div className="wrapper header">
          <div className="header__logo">StickIt</div>
          <div className="header__menu">
            <button
              className="header__menu__btn icon-plus"
              onClick={AddSticker}
              title={lang.addNewStickerAlt}
            />
            <button className="header__menu__btn" onClick={onToggleLanguage}>
              {language}
            </button>
            <button
              className={themeIconClass}
              onClick={handleToggleTheme}
              title={isLightTheme ? lang.darkThemeTitle : lang.lightThemeTitle}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export { Header };
