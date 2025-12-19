import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import Swal from "sweetalert2"; // Import alert ganteng

const HubungiKami = () => {
  // 1. STATE UNTUK MENAMPUNG INPUT USER
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  const [loading, setLoading] = useState(false);

  // 2. FUNGSI SAAT USER NGETIK
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 3. FUNGSI SAAT TOMBOL KIRIM DITEKAN
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setLoading(true);

    // Validasi sederhana
    if (!formData.nama || !formData.email || !formData.pesan) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Nama, Email, dan Pesan wajib diisi ya!",
        confirmButtonColor: "#4a0054",
      });
      setLoading(false);
      return;
    }

    try {
      // TEMBAK KE STRAPI
      const response = await fetch("http://localhost:1337/api/pengaduans", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: formData, // Strapi butuh format { data: { ... } }
        }),
      });

      if (response.ok) {
        // SUKSES
        Swal.fire({
          icon: "success",
          title: "Terkirim!",
          text: "Laporan Anda telah kami terima. Terima kasih.",
          confirmButtonColor: "#4a0054",
        });
        // Reset Form
        setFormData({ nama: "", email: "", subjek: "", pesan: "" });
      } else {
        throw new Error("Gagal mengirim");
      }
    } catch (error) {
      // ERROR
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan sistem. Silakan coba lagi nanti.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl font-sans min-h-screen">
      {/* HEADER */}
      <div className="flex justify-center mb-12">
        <div className="border-2 border-purple-800 bg-white rounded-[60px] py-8 px-10 md:px-24 text-center shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4a0054] to-purple-500 mb-2 tracking-tight uppercase">
            LAYANAN PENGADUAN
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Saluran Resmi Pengaduan Layanan BPJPH
          </p>
        </div>
      </div>

      {/* KARTU KONTAK */}
      <div className="mb-16">
        <h3 className="text-center text-xl font-bold text-gray-800 mb-8">
          Hubungi Kami Melalui Saluran Berikut:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Call Center */}
          <a
            href="tel:176"
            className="group bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 cursor-pointer hover:border-purple-500"
          >
            <div className="bg-purple-100 p-4 rounded-full text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Phone size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                Call Center
              </p>
              <p className="text-2xl font-bold text-gray-900">176</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/628111421142"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 cursor-pointer hover:border-green-500"
          >
            <div className="bg-green-100 p-4 rounded-full text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <MessageCircle size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                WhatsApp Center
              </p>
              <p className="text-lg font-bold text-gray-900">0811-1421-142</p>
              <span className="text-xs text-green-600 font-medium">
                (Chat Only)
              </span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:layanan@halal.go.id"
            className="group bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 cursor-pointer hover:border-red-500"
          >
            <div className="bg-red-100 p-4 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Mail size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                Email Pengaduan
              </p>
              <p className="text-lg font-bold text-gray-900">
                layanan@halal.go.id
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* FORM & MAPS CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
        {/* KOLOM KIRI: FORM PENGADUAN (SUDAH HIDUP) */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-2">
            <Send size={24} className="text-purple-600" />
            Formulir Pengaduan Cepat
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="contoh@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Subjek
              </label>
              <select
                name="subjek"
                value={formData.subjek}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white"
              >
                <option value="">Pilih perihal pengaduan...</option>
                <option value="Verifikasi Self Declare">
                  Verifikasi Self Declare
                </option>
                <option value="Verifikasi Reguler">Verifikasi Reguler</option>
                <option value="Kendala Sistem">Kendala Sistem (SiHalal)</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Pesan
              </label>
              <textarea
                rows="4"
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                placeholder="Tuliskan detail kendala Anda..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 text-white font-bold rounded-xl shadow-md transition-all duration-300 
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#4a0054] to-purple-600 hover:shadow-lg hover:-translate-y-1"
                }`}
            >
              {loading ? "Mengirim..." : "Kirim Pengaduan"}
            </button>
          </form>
        </div>

        {/* KOLOM KANAN: MAPS */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-purple-900 mb-2 flex items-center justify-center lg:justify-start gap-2">
              <MapPin size={24} className="text-purple-600" />
              Lokasi Kantor Pusat
            </h3>
            <p className="text-gray-600">
              Jl. Raya Pd. Gede No.13, RW.1, Pinang Ranti, Kec Makasar, Kota
              Jakarta Timur, Daerah Khusus Ibukota Jakarta 13560
            </p>
          </div>

          <div className="w-full h-[400px] lg:h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.3497651915845!2d106.88628594184314!3d-6.290839945726269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f298e7dcf927%3A0x771c58a469b9969d!2sBadan%20Penyelenggara%20Jaminan%20Produk%20Halal!5e0!3m2!1sid!2sid!4v1766071436310!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi BPJPH"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HubungiKami;
