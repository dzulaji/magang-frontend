import { Link } from "react-router-dom";
import logoBpjph from "../assets/logo_halal.png";

const Navbar = () => {
  // DATA MENU: Kita definisikan semua menu di sini agar kodingan rapi
  const navigationData = [
    {
      title: "Tentang Kami",
      items: [
        { name: "Profil BPJPH", path: "/profil" },
        { name: "Visi dan Misi", path: "/visi-misi" },
        { name: "Tugas dan Fungsi", path: "/tugas-fungsi" },
        { name: "Struktur Organisasi", path: "/struktur-organisasi" }, // Ini yang sudah aktif
        { name: "Profil Pejabat", path: "/profil-pejabat" },
      ],
    },
    {
      title: "Layanan",
      items: [
        { name: "Sertifikasi Halal", path: "/layanan/sertifikasi" },
        {
          name: "Registrasi Sertifikat Halal Luar Negeri",
          path: "/layanan/reg-luar-negeri",
        },
        { name: "Registrasi Auditor Halal", path: "/layanan/auditor" },
        { name: "Pengajuan Lembaga Pendamping PPH", path: "/layanan/lpph" },
        { name: "Registrasi Pendamping PPH", path: "/layanan/reg-pph" },
        { name: "Pengajuan Lembaga Pelatihan JPH", path: "/layanan/pelatihan" },
        { name: "Pengajuan Akreditasi LPH", path: "/layanan/akreditasi" },
        { name: "Pengajuan Lembaga Halal Luar Negeri", path: "/layanan/lhln" },
        { name: "Pendaftaran Fasilitator UMK", path: "/layanan/fasilitator" },
        {
          name: "Permohonan Rekomendasi LSP",
          path: "/layanan/rekomendasi-lsp",
        },
      ],
    },
    {
      title: "Informasi Publik",
      items: [
        { name: "Data Sertifikasi Halal", path: "/info/data-sertifikasi" },
        { name: "Data SDM BPJPH", path: "/info/sdm" },
        { name: "Formulir Layanan", path: "/info/formulir" },
        { name: "Akuntabilitas", path: "/info/akuntabilitas" },
        { name: "Literasi", path: "/info/literasi" },
        { name: "Daftar LHLN Dalam Proses", path: "/info/lhln-proses" },
        { name: "Daftar Jasa Logistik Halal", path: "/info/logistik" },
        { name: "Rekapitulasi SEHATI", path: "/info/sehati" },
        { name: "Kalkulator Biaya SH", path: "/info/kalkulator" },
        { name: "CSIRT", path: "/info/csirt" },
        { name: "Rekapitulasi Aduan", path: "/info/aduan" },
        { name: "Infografis Tarif", path: "/info/tarif" },
      ],
    },
    {
      title: "Berita",
      items: [
        { name: "Berita Terkini", path: "/berita/terkini" },
        { name: "Pengumuman", path: "/berita/pengumuman" },
        { name: "Siaran Pers", path: "/berita/siaran-pers" },
      ],
    },
    {
      title: "Regulasi",
      items: [
        { name: "Undang-Undang RI", path: "/regulasi/uu" },
        { name: "Peraturan Pemerintah", path: "/regulasi/pp" },
        { name: "Peraturan Menteri Agama", path: "/regulasi/pma" },
        { name: "Keputusan Menteri Agama", path: "/regulasi/kma" },
        { name: "Peraturan Badan", path: "/regulasi/perbadan" },
        { name: "Keputusan Kepala Badan", path: "/regulasi/kepkaban" },
        { name: "Peraturan Menteri Keuangan", path: "/regulasi/pmk" },
      ],
    },
    {
      title: "Galeri",
      items: [
        { name: "Foto", path: "/galeri/foto" },
        { name: "Video", path: "/galeri/video" },
        { name: "Infografis", path: "/galeri/infografis" },
      ],
    },
  ];

  return (
    // Container Utama dengan Warna Ungu BPJPH (#670075)
    <nav className="bg-[#670075] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* --- BAGIAN KIRI: LOGO --- */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Placeholder Logo (Ganti src ini nanti dengan file logo asli) */}
            <div className="w-12 h-14 flex items-center justify-center overflow-hidden">
              <img
                src={logoBpjph}
                alt="Logo BPJPH"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs leading-tight tracking-wide">
                BADAN PENYELENGGARA
              </span>
              <span className="text-xs font-bold text-gray-200">
                JAMINAN PRODUK HALAL
              </span>
            </div>
          </Link>

          {/* --- BAGIAN KANAN: MENU ITEM (Desktop) --- */}
          <div className="hidden lg:flex space-x-1 items-center">
            {/* Link Beranda (Single Link) */}
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
            >
              Beranda
            </Link>

            {/* Loop Menu Data untuk membuat Dropdown otomatis */}
            {navigationData.map((menu, index) => (
              <div key={index} className="relative group">
                {/* Tombol Judul Menu */}
                <button className="flex items-center px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-md focus:outline-none transition-colors">
                  {menu.title}
                  {/* Icon Panah Kecil */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 opacity-70 group-hover:rotate-180 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Isi Dropdown */}
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                  <div className="py-2">
                    {menu.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-[#670075] border-l-4 border-transparent hover:border-[#670075] transition-all"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Mobile Menu (Hamburger) - Kosong dulu biar ga ribet */}
          <div className="lg:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
