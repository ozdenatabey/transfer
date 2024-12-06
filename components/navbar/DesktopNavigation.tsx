import React from "react";

import NavLinks from "./NavLinks";

const DesktopNavigation = () => {
  return (
    <div className="hidden items-center space-x-3 md:flex">
      <NavLinks isMobileNav={false} />
    </div>
  );
};

export default DesktopNavigation;
