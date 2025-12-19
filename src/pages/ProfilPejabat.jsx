import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";

// --- 1. KOMPONEN KARTU PEJABAT (Tidak ada perubahan) ---
const PejabatCard = ({ item }) => {
  const nama = item.nama || item.attributes?.nama;
  const jabatan = item.jabatan || item.attributes?.jabatan;
  const foto = item.foto || item.attributes?.foto;
  const linkId = item.documentId || item.id;

  const urlDariApi = foto?.url || foto?.data?.attributes?.url;
  const imgUrl = urlDariApi
    ? `http://localhost:1337${urlDariApi}`
    : "https://ui-avatars.com/api/?background=f3e8ff&color=6b21a8&size=300&name=" +
      nama;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full relative">
      <div className="aspect-[3/4] md:aspect-square bg-gray-100 rounded-md mb-4 overflow-hidden relative w-full">
        <img
          src={imgUrl}
          alt={nama}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="text-center flex-grow">
        <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight mb-2 line-clamp-2">
          {nama}
        </h3>
        <p className="text-purple-700 text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
          {jabatan}
        </p>
      </div>
      <div className="mt-auto">
        <Link
          to={`/profil-pejabat/${linkId}`}
          className="inline-flex items-center justify-center gap-2 bg-purple-50 border border-purple-100 hover:bg-purple-800 hover:text-white hover:border-purple-800 text-purple-800 text-xs font-semibold py-2 px-4 rounded-md transition-all w-full"
        >
          <Eye size={14} />
          Lihat Profil
        </Link>
      </div>
    </div>
  );
};

// --- 2. KOMPONEN LAYOUT: RATA TENGAH (Tidak ada perubahan) ---
const CenteredSection = ({ title, data }) => {
  if (data.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold uppercase text-gray-800 tracking-wide relative inline-block pb-3">
          {title}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-purple-700 rounded-full"></span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, idx) => (
          <div key={idx} className="w-full sm:w-[45%] lg:w-[25%]">
            <PejabatCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 3. KOMPONEN LAYOUT: SLIDER (Tidak ada perubahan) ---
const SliderSection = ({ title, data }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (data.length === 0) return null;

  return (
    <div className="mb-16 px-4 md:px-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold uppercase text-gray-800 tracking-wide relative inline-block pb-3">
          {title}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-purple-700 rounded-full"></span>
        </h2>
      </div>

      <div className="relative group">
        {data.length > 4 && (
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-purple-800 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide px-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className="w-[85%] sm:w-[45%] lg:w-[25%] flex-none snap-start"
            >
              <PejabatCard item={item} />
            </div>
          ))}
        </div>

        {data.length > 4 && (
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-purple-800 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>

      {data.length > 1 && (
        <div className="flex md:hidden justify-center gap-4 mt-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 bg-gray-100 rounded-full text-purple-800"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 bg-gray-100 rounded-full text-purple-800"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

// --- 4. KOMPONEN UTAMA ---
const ProfilPejabat = () => {
  const [pejabat, setPejabat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/pejabats?populate=*"
        );
        const json = await response.json();
        setPejabat(json.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Gagal ambil data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getKategori = (item) => {
    const kat = item.kategori || item.attributes?.kategori;
    return kat ? kat.toLowerCase() : "";
  };

  const listPimpinan = pejabat.filter(
    (p) => getKategori(p) === "pimpinan_utama"
  );
  const listSekretariat = pejabat.filter(
    (p) => getKategori(p) === "sekretariat"
  );
  const listDeputi = pejabat.filter((p) => getKategori(p) === "deputi");
  const listDirektur = pejabat.filter((p) => getKategori(p) === "direktur");
  const listUnitTeknis = pejabat.filter(
    (p) => getKategori(p) === "unit_teknis"
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-800"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl font-sans min-h-screen">
      {/* --- HEADER PAGE DENGAN SHAPE KAPSUL (YANG DIUBAH) --- */}
      {/* */}
      <div className="flex justify-center mb-16">
        <div className="border-2 border-purple-800 bg-white rounded-[60px] py-10 px-8 md:px-20 text-center shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4a0054] to-purple-500 mb-2 tracking-tight uppercase">
            PROFIL PEJABAT
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Pejabat Struktural Badan Penyeleggara Jaminan Produk Halal
          </p>
        </div>
      </div>

      {/* --- RENDER SECTIONS (Tidak ada perubahan) --- */}
      <CenteredSection title="Pimpinan Utama" data={listPimpinan} />
      <SliderSection title="Sekretariat & Pengawas" data={listSekretariat} />
      <CenteredSection title="Deputi Bidang" data={listDeputi} />
      <SliderSection title="Direktur" data={listDirektur} />
      <SliderSection title="Unit Teknis / Pusat" data={listUnitTeknis} />

      {pejabat.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
          <p className="text-gray-500 text-lg">
            Belum ada data pejabat yang diinput ke sistem.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfilPejabat;
