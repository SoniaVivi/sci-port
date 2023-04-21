import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="scanlines"></div>
      {children}
    </>
  );
};

export default Layout;
