import { Link } from "react-router-dom";
import logoBpjph from "../assets/logo_halal.png"; // Pastikan path ini benar

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Data Tautan Cepat (Platform)
  const quickLinks = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/struktur-organisasi" }, // Contoh link
    { name: "Layanan", path: "/layanan/sertifikasi" }, // Contoh link
    { name: "Informasi Publik", path: "/info/data-sertifikasi" }, // Contoh link
    { name: "Berita & Regulasi", path: "/berita/terkini" }, // Contoh link
    { name: "Galeri", path: "/galeri/foto" }, // Contoh link
  ];

  return (
    // Gunakan warna ungu tua BPJPH atau varian yang lebih gelap untuk kesan elegan
    <footer className="bg-[#670075] text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6 lg:px-12">
        {/* --- BAGIAN ATAS: 4 KOLOM --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* KOLOM 1: Logo, Identitas & Sosmed */}
          <div className="space-y-6 lg:pl-12">
            <div className="flex items-center space-x-3">
              <div className="p-1.5 w-14 h-18 flex items-center justify-center overflow-hidden">
                <img
                  src={logoBpjph}
                  alt="Logo BPJPH"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="font-bold text-lg leading-tight tracking-wide">
                  BADAN PENYELENGGARA
                </h2>
                <p className="font-bold text-lg leading-tight tracking-wide">
                  JAMINAN PRODUK HALAL
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed pr-4">
              Badan Penyelenggara Jaminan Produk Halal. Menjamin kehalalan
              produk untuk masyarakat Indonesia.
            </p>
            {/* Ikon Sosial Media (SVG Manual) */}
            <div className="flex space-x-4 pt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/bpjphkemenagri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#670075] transition-colors duration-300 group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/halal.indonesia/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#670075] transition-colors duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.148 3.228-1.667 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.229-.148-4.771-1.691-4.919-4.919-.059-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.228 1.691-4.771 4.919-4.919 1.265-.058 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@halal.indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#670075] transition-colors duration-300 group"
                aria-label="Youtube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="https://twitter.com/bpjphkemenag"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#670075] transition-colors duration-300 group"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 fill-current group-hover:fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@halal.indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2.5 rounded-full hover:bg-[#670075] transition-colors duration-300 group"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5 fill-current group-hover:fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* KOLOM 2: Alamat */}
          <div className="lg:pl-12">
            <h3 className="lg:pl-5text-lg font-bold mb-6 pb-2 border-b-2 border-white/30 inline-block">
              Alamat
            </h3>
            <address className="not-italic text-sm text-gray-300 space-y-3 leading-relaxed">
              <p className="font-medium text-white">Kantor Pusat BPJPH</p>
              <p>
                Jl. Raya Pd. Gede No.13, RW.1, Pinang Ranti, Kec Makasar, Kota
                Jakarta Timur, Daerah Khusus Ibukota Jakarta 13560
              </p>
            </address>
          </div>

          {/* KOLOM 3: Hubungi Kami */}
          <div className="lg:pl-12">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-white/30 inline-block">
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-white/70 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <span className="block font-medium text-white">
                    Call Center (WhatsApp)
                  </span>
                  <a
                    href="https://wa.me/628111421142"
                    className="hover:text-white transition-colors"
                  >
                    08111421142
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-white/70 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <span className="block font-medium text-white">Email</span>
                  <a
                    href="mailto:layanan@halal.go.id"
                    className="hover:text-white transition-colors"
                  >
                    layanan@halal.go.id
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: Tautan Cepat (Platform) */}
          <div className="lg:pl-12">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b-2 border-white/30 inline-block">
              Tautan Cepat
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity text-[#b96cc9]">
                      ›
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- GARIS PEMISAH --- */}
        <hr className="border-white/20 my-8" />

        {/* --- BAGIAN BAWAH: COPYRIGHT --- */}
        <div className="flex flex-col items-center justify-center text-sm text-center">
          <p>
            &copy; {currentYear} Badan Penyelenggara Jaminan Produk Halal
            (BPJPH). Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
