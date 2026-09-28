import { Outlet } from "react-router-dom";
import { useState } from "react";

const MainLayout = () => {
  const [showFullScreen, setShowFullScreen] = useState(true);

  const handleFullScreen = () => {
    if (showFullScreen) {
      // document.body.requestFullscreen();
      setShowFullScreen(false);
    }
  };

  return (
    <div onClick={handleFullScreen}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
