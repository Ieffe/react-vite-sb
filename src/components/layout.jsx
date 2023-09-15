import { Children } from "react";
import Navigation from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation></Navigation>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
