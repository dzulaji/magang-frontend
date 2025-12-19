import React from "react";

const TugasFungsi = () => {
  // --- DATA KONTEN ---
  const tugasContent =
    "BPJPH mempunyai tugas menyelenggarakan tugas pemerintahan di bidang penyelenggaraan jaminan produk halal sesuai dengan ketentuan peraturan perundangundangan.";

  const fungsiList = [
    "Perumusan dan penetapan kebijakan teknis di bidang penyelenggaraan jaminan produk halal.",
    "Pelaksanaan kebijakan teknis di bidang penyelenggaraan jaminan produk halal.",
    "Koordinasi, pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organisasi di lingkungan BPJPH.",
    "Pengelolaan barang milik/kekayaan negara yang menjadi tanggung jawab BPJPH.",
    "Pengawasan atas pelaksanaan tugas di lingkungan BPJPH.",
    "Pelaksanaan dukungan yang bersifat substantif kepada seluruh unsur organisasi di lingkungan BPJPH.",
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl font-sans min-h-screen">
      {/* --- 1. HEADER KAPSUL --- */}
      <div className="flex justify-center mb-16">
        <div className="border-2 border-purple-800 bg-white rounded-[60px] py-8 px-10 md:px-24 text-center shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4a0054] to-purple-500 mb-2 tracking-tight uppercase">
            TUGAS DAN FUNGSI
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Badan Penyelenggara Jaminan Produk Halal
          </p>
        </div>
      </div>

      {/* --- 2. BAGIAN TUGAS --- */}
      <div className="mb-16 max-w-5xl mx-auto">
        {/* Judul TUGAS */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          Tugas
        </h2>

        {/* Kotak Ungu Besar (Sesuai Desain) */}
        <div className="bg-[#590069] text-white p-8 md:p-14 rounded-[30px] shadow-xl text-center">
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            {tugasContent}
          </p>
        </div>
      </div>

      {/* --- 3. BAGIAN FUNGSI --- */}
      <div className="max-w-5xl mx-auto">
        {/* Judul FUNGSI */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Fungsi
        </h2>

        {/* List Fungsi dengan Kotak Nomor Hijau */}
        <div className="space-y-6">
          {fungsiList.map((item, index) => (
            <div key={index} className="flex items-start gap-4 md:gap-6 group">
              {/* Kotak Nomor Hijau Tosca */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#2DB592] text-white font-bold text-xl md:text-2xl flex items-center justify-center rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>

              {/* Teks Fungsi */}
              <p className="text-gray-800 text-lg md:text-xl leading-relaxed pt-1 md:pt-2 font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TugasFungsi;
