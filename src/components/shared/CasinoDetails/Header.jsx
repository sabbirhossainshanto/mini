const Header = () => {
  return (
    <div className="header">
      <div className="header__img">
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium home-icon css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="HomeIcon"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </div>
      <div className="header__name">Teenpatti Yuvi</div>
    </div>
  );
};

export default Header;
