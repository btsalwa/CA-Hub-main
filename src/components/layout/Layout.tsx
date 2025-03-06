import React from "react";
import Header from "../Header";
import Footer from "../shared/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow pt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
