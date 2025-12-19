import React from "react";

const VisiMisi = () => {
  // Data kita simpan di variabel biar kodingan HTML-nya bersih
  const visi = "Menjadi Penyelenggara Jaminan Produk Halal Terkemuka di Dunia";

  const misiList = [
    "Mewujudkan Sistem Layanan Registrasi dan Sertifikasi Halal yang Berkualitas",
    "Mewujudkan Sistem Pembinaan dan Pengawasan yang Efektif",
    "Mewujudkan Jaringan Kerjasama Kelembagaan dan Standardisasi Jaminan Produk Halal",
    "Mewujudkan Manajemen Organisasi yang Berkualitas Dalam Mendukung Reformasi Birokrasi",
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl font-sans min-h-screen">
      {/* --- 1. HEADER KAPSUL (Konsisten) --- */}
      <div className="flex justify-center mb-16">
        <div className="border-2 border-purple-800 bg-white rounded-[60px] py-8 px-10 md:px-24 text-center shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4a0054] to-purple-500 mb-2 tracking-tight uppercase">
            VISI DAN MISI
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Badan Penyelenggara Jaminan Produk Halal
          </p>
        </div>
      </div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="max-w-4xl mx-auto space-y-16">
        {/* --- 2. BAGIAN VISI --- */}
        <div className="flex flex-col items-center text-center">
          {/* Label VISI (Style tombol ungu seperti di Figma) */}
          <div className="bg-[#4a0054] text-white text-3xl md:text-4xl font-bold py-3 px-20 rounded-2xl shadow-lg mb-8 tracking-widest uppercase transform hover:scale-105 transition-transform duration-300">
            VISI
          </div>

          {/* Teks Visi */}
          <p className="text-2xl md:text-3xl font-serif text-gray-800 leading-relaxed font-medium">
            "{visi}"
          </p>
        </div>

        {/* --- 3. BAGIAN MISI --- */}
        <div className="flex flex-col items-center">
          {/* Label MISI */}
          <div className="bg-[#4a0054] text-white text-3xl md:text-4xl font-bold py-3 px-20 rounded-2xl shadow-lg mb-10 tracking-widest uppercase transform hover:scale-105 transition-transform duration-300">
            MISI
          </div>

          {/* List Misi */}
          <div className="w-full px-4 md:px-10">
            <ol className="list-decimal list-outside space-y-6 text-lg md:text-xl text-gray-700 font-medium">
              {misiList.map((item, index) => (
                <li
                  key={index}
                  className="pl-4 leading-relaxed hover:text-purple-900 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
