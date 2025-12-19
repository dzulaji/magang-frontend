import { Link } from "react-router-dom";

// --- IMPORT GAMBAR BAGAN DARI ASSETS ---
// Pastikan nama filenya sesuai dengan yang kamu simpan di folder assets
// Kalau formatnya JPG, ganti jadi .jpg
import imgStruktur from "../assets/struktur-organisasi.jpg";

const StrukturOrganisasi = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl font-sans min-h-screen">
      {/* --- HEADER KAPSUL (Sama seperti Profil Pejabat biar konsisten) --- */}
      <div className="flex justify-center mb-12">
        <div className="border-2 border-purple-800 bg-white rounded-[60px] py-10 px-8 md:px-20 text-center shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4a0054] to-purple-500 mb-2 tracking-tight uppercase">
            STRUKTUR ORGANISASI
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Bagan Struktur Organisasi BPJPH
          </p>
        </div>
      </div>

      {/* --- AREA GAMBAR --- */}
      <div className="bg-white p-4 md:p-8 rounded-3xl shadow-lg border border-gray-100">
        {/* Container gambar dengan overflow agar bisa di-scroll jika di HP gambarnya kebesaran */}
        <div className="overflow-x-auto flex justify-center">
          <img
            src={imgStruktur}
            alt="Bagan Struktur Organisasi BPJPH"
            className="max-w-full h-auto md:max-w-[90%] lg:max-w-[85%] object-contain"
          />
        </div>

        {/* Tombol Download (Opsional, biar user bisa simpan gambarnya) */}
        <div className="mt-8 text-center">
          <a
            href={imgStruktur}
            download="Struktur-Organisasi-BPJPH.png"
            className="inline-flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Unduh Gambar Resolusi Penuh
          </a>
        </div>
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
