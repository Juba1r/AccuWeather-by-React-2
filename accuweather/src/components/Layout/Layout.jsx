import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar2/Navbar2";
import Footer from "../Footer/footer";

function Layout(props) {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="content-container">{props.children}</div>
      <Footer />
    </>
  );
}

export default Layout;
