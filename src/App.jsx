import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ProfilPejabat from "./pages/ProfilPejabat";
import DetailPejabat from "./pages/DetailPejabat";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import VisiMisi from "./pages/VisiMisi";
import TugasFungsi from "./pages/TugasFungsi";
import ProfilBpjph from "./pages/ProfilBpjph";
import ScrollToTop from "./components/ScrollToTop";
import HubungiKami from "./pages/HubungiKami";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="struktur-organisasi" element={<StrukturOrganisasi />} />

          <Route path="profil-pejabat" element={<ProfilPejabat />} />
          <Route path="profil-pejabat/:id" element={<DetailPejabat />} />

          <Route path="visi-misi" element={<VisiMisi />} />
          <Route path="tugas-fungsi" element={<TugasFungsi />} />
          <Route path="profil-bpjph" element={<ProfilBpjph />} />
          <Route path="hubungi-kami" element={<HubungiKami />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
