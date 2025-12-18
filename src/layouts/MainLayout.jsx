import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar selalu ada di atas */}
      <Navbar />

      {/* Area Konten Berubah-ubah (Yield Content) */}
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>

      {/* Footer selalu ada di bawah */}
      <Footer />
    </div>
  );
};

export default MainLayout;
