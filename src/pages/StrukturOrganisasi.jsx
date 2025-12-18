import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

const StrukturOrganisasi = () => {
  // 1. STATE
  // Kita inisialisasi langsung dengan array kosong dulu
  const [pejabat, setPejabat] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- DATA DUMMY (PENGGANTI API) ---
  const dummyData = [
    {
      id: 1,
      documentId: "pimpinan-1",
      nama: "Dr. H. Ahmad Haikal Hasan",
      jabatan: "Kepala BPJPH",
      foto: null, // Foto null akan memicu placeholder
    },
    {
      id: 2,
      documentId: "pimpinan-2",
      nama: "Dr. H. Arfi Hatim, M.Ag",
      jabatan: "Wakil Kepala BPJPH",
      foto: null,
    },
    {
      id: 3,
      documentId: "sekretaris-1",
      nama: "Dr. H. Muhammad Aqil Irham, M.Si",
      jabatan: "Sekretaris Utama BPJPH",
      foto: null,
    },
    {
      id: 4,
      documentId: "pengawas-1",
      nama: "H. Khairul Huda Basyir",
      jabatan: "Kepala Pusat Pembinaan dan Pengawasan",
      foto: null,
    },
    {
      id: 5,
      documentId: "kerjasama-1",
      nama: "Hj. Siti Aminah, S.Ag",
      jabatan: "Kepala Pusat Kerjasama dan Standardisasi",
      foto: null,
    },
    {
      id: 6,
      documentId: "deputi-1",
      nama: "Prof. Dr. Ir. Chuzaemi",
      jabatan: "Deputi Bidang Jaminan Produk Halal",
      foto: null,
    },
    {
      id: 7,
      documentId: "direktur-1",
      nama: "Dr. Subandriyah",
      jabatan: "Direktur Pelayanan Sertifikasi",
      foto: null,
    },
  ];

  // 2. EFFECT (Simulasi Loading sebentar lalu isi Data Dummy)
  useEffect(() => {
    // Simulasi delay biar berasa kayak loading data beneran
    setTimeout(() => {
      setPejabat(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  // --- LOGIKA FILTERING (Sama seperti sebelumnya) ---
  const pimpinanUtama = pejabat.filter((item) => {
    const jabatan = item.jabatan?.toLowerCase() || "";
    return jabatan.includes("kepala bpjph") || jabatan.includes("wakil kepala");
  });

  const sekretariat = pejabat.filter((item) => {
    const jabatan = item.jabatan?.toLowerCase() || "";
    return jabatan.includes("sekretaris") || jabatan.includes("pengawas") || jabatan.includes("pusat");
  });

  const deputi = pejabat.filter((item) => {
    const jabatan = item.jabatan?.toLowerCase() || "";
    return jabatan.includes("deputi") || jabatan.includes("direktur");
  });

  // Komponen Kartu (Sesuai Desain Ungu/Putih)
  const PejabatCard = ({ item }) => {
    const { nama, jabatan, foto, documentId, id } = item;
    const linkId = documentId || id;

    // URL Foto Dummy (Pakai placeholder service biar kelihatan ada gambar)
    // Jika nanti API nyala, ganti logic ini dengan `foto?.url`
    const imgUrl = "https://ui-avatars.com/api/?background=f3e8ff&color=6b21a8&size=300&name=" + nama;

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow group">
        {/* Foto Frame */}
        <div className="aspect-square bg-gray-100 rounded-md mb-4 overflow-hidden relative">
          <img
            src={imgUrl}
            alt={nama}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div className="mb-4">
          <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight mb-1 line-clamp-2 h-10">
            {nama}
          </h3>
          <p className="text-purple-800 text-xs md:text-sm font-bold uppercase tracking-wide">
            {jabatan}
          </p>
        </div>

        {/* Button */}
        <Link
          to={`/struktur-organisasi/${linkId}`}
          className="inline-flex items-center gap-2 bg-purple-800 hover:bg-purple-900 text-white text-[10px] md:text-xs font-medium py-2 px-4 rounded-full transition-colors w-full justify-center sm:w-auto"
        >
          <Eye size={14} />
          Selengkapnya
        </Link>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-800"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl font-sans min-h-screen">

      {/* 1. HEADER KAPSUL */}
      <div className="border-2 border-purple-800/30 rounded-[50px] py-10 px-6 text-center mb-14 max-w-4xl mx-auto shadow-sm bg-white">
        <h1 className="text-3xl md:text-4xl font-extrabold text-purple-900 mb-2 uppercase tracking-tight">
          PROFIL PEJABAT
        </h1>
        <p className="text-gray-500 font-medium">
          Pejabat Struktural Badan Penyelenggara Jaminan Produk Halal
        </p>
      </div>

      {/* 2. SECTION: PIMPINAN UTAMA */}
      <div className="mb-14">
        <h2 className="text-xl font-bold uppercase text-gray-800 mb-3 tracking-wide pl-1">
          PIMPINAN UTAMA
        </h2>
        {/* Garis Divider Ungu */}
        <div className="h-[2px] bg-purple-300 w-full mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pimpinanUtama.map((item, idx) => (
            <PejabatCard key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* 3. SECTION: SEKRETARIAT */}
      <div className="mb-14">
        <h2 className="text-xl font-bold uppercase text-gray-800 mb-3 tracking-wide pl-1">
          SEKRETARIAT & PENGAWAS
        </h2>
        <div className="h-[2px] bg-purple-300 w-full mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sekretariat.map((item, idx) => (
            <PejabatCard key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* 4. SECTION: DEPUTI */}
      <div className="mb-14">
        <h2 className="text-xl font-bold uppercase text-gray-800 mb-3 tracking-wide pl-1">
          DEPUTI BIDANG
        </h2>
        <div className="h-[2px] bg-purple-300 w-full mb-8"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {deputi.map((item, idx) => (
            <PejabatCard key={idx} item={item} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default StrukturOrganisasi;