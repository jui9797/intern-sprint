import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, containerClass = "min-h-screen", ...props }) => {
  return (
    <div className=" flex flex-col bg-gray-50" {...props}>
      <Navbar />
      <main className={containerClass}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
