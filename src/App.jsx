import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import DetailPejabat from "./pages/DetailPejabat";

function App() {
  return (
    <Routes>
      {/* Semua route di dalam sini akan pakai Navbar & Footer */}
      <Route path="/" element={<MainLayout />}>
        {/* Halaman Beranda */}
        <Route index element={<Home />} />

        {/* Halaman Struktur Organisasi */}
        <Route path="struktur-organisasi" element={<StrukturOrganisasi />} />
        {/* Halaman Detail Pejabat */}
        <Route path="struktur-organisasi/:id" element={<DetailPejabat />} />
      </Route>
    </Routes>
  );
}

export default App;
