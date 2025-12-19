import React from "react";

const ProfilBpjph = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl font-sans min-h-screen">
      {/* --- 1. HEADER KAPSUL (Konsisten) --- */}
      <div className="flex justify-center mb-16">
        <div className="border-2 border-purple-800 bg-white rounded-[60px] py-8 px-10 md:px-24 text-center shadow-sm max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4a0054] to-purple-500 mb-2 tracking-tight uppercase">
            PROFIL BPJPH
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Badan Penyelenggara Jaminan Produk Halal
          </p>
        </div>
      </div>

      {/* --- KONTEN UTAMA --- */}
      <div className="max-w-4xl mx-auto space-y-12 text-gray-800">
        {/* SECTION 1: DEFINISI & DASAR HUKUM */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-purple-900 mb-4 border-l-4 border-purple-600 pl-4">
            Tentang Kami
          </h2>
          <p className="text-lg leading-relaxed text-justify mb-4">
            <span className="font-bold text-purple-800">
              Badan Penyelenggara Jaminan Produk Halal (BPJPH)
            </span>{" "}
            adalah Lembaga Pemerintah non Kementerian (LPNK) yang bertanggung
            jawab langsung kepada Presiden Republik Indonesia.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Berdiri berdasarkan{" "}
            <span className="font-semibold">
              Peraturan Presiden Nomor 153 Tahun 2024
            </span>
            , BPJPH menjadi otoritas utama dalam menyelenggarakan jaminan produk
            halal di Indonesia sesuai dengan amanat Undang-Undang Nomor 33 Tahun
            2014 tentang Jaminan Produk Halal.
          </p>
        </div>

        {/* SECTION 2: STRUKTUR ORGANISASI */}
        <div>
          <h2 className="text-2xl font-bold text-purple-900 mb-6 border-l-4 border-purple-600 pl-4">
            Struktur Organisasi
          </h2>
          <div className="bg-purple-50 rounded-2xl p-6 md:p-8">
            <p className="mb-6 text-lg">
              Sesuai dengan Peraturan BPJPH Nomor 1 Tahun 2024, struktur
              organisasi BPJPH terdiri atas:
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "Kepala BPJPH",
                  desc: "Memimpin dan mengawasi keseluruhan pelaksanaan tugas BPJPH.",
                },
                {
                  title: "Wakil Kepala BPJPH",
                  desc: "Membantu Kepala dalam melaksanakan tugas dan fungsi BPJPH.",
                },
                {
                  title: "Sekretariat Utama",
                  desc: "Bertanggung jawab atas koordinasi administratif dan layanan pendukung operasional BPJPH.",
                },
                {
                  title: "Deputi Bidang Kemitraan dan Standardisasi Halal",
                  desc: "Mengelola kemitraan strategis dan pengembangan standar halal.",
                },
                {
                  title: "Deputi Bidang Registrasi dan Sertifikasi Halal",
                  desc: "Menangani proses registrasi dan sertifikasi produk halal.",
                },
                {
                  title:
                    "Deputi Bidang Pembinaan dan Pengawasan Jaminan Produk Halal",
                  desc: "Melakukan pembinaan dan pengawasan terhadap pelaksanaan jaminan produk halal.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 bg-white p-4 rounded-xl shadow-sm"
                >
                  <span className="font-bold text-purple-800 md:w-1/3 flex-shrink-0">
                    {item.title}
                  </span>
                  <span className="text-gray-700 md:w-2/3 border-t md:border-t-0 md:border-l border-gray-100 pt-2 md:pt-0 md:pl-4">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECTION 3: KEWENANGAN (Grid Layout) */}
        <div>
          <h2 className="text-2xl font-bold text-purple-900 mb-6 border-l-4 border-purple-600 pl-4">
            Kewenangan BPJPH
          </h2>
          <p className="mb-6 text-lg text-justify">
            Berdasarkan UU 33 Tahun 2014, dalam penyelenggaraan Jaminan Produk
            Halal (JPH), BPJPH memiliki wewenang untuk:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Merumuskan dan menetapkan kebijakan JPH.",
              "Menetapkan norma, standar, prosedur, dan kriteria JPH.",
              "Menerbitkan dan mencabut Sertifikat Halal dan Label Halal pada Produk.",
              "Melakukan registrasi Sertifikat Halal pada Produk luar negeri.",
              "Melakukan sosialisasi, edukasi, dan publikasi Produk Halal.",
              "Melakukan akreditasi terhadap Lembaga Pemeriksa Halal (LPH).",
              "Melakukan registrasi Auditor Halal.",
              "Melakukan pengawasan terhadap JPH.",
              "Melakukan pembinaan Auditor Halal.",
              "Melakukan kerja sama dengan lembaga dalam dan luar negeri di bidang penyelenggaraan JPH.",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-gray-700 mt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: KOLABORASI & TUJUAN */}
        <div className="bg-gradient-to-br from-[#4a0054] to-purple-800 text-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">
            Kolaborasi & Ekosistem Halal
          </h3>
          <p className="text-lg leading-relaxed text-justify mb-6 text-purple-50">
            Dalam menyelenggarakan JPH, BPJPH bekerja sama dengan
            kementerian/lembaga terkait, Lembaga Pemeriksa Halal (LPH), Lembaga
            Pendamping Proses Produk Halal (LP3H), Majelis Ulama Indonesia
            (MUI), dan Komite Fatwa Produk Halal. BPJPH juga aktif melaksanakan
            kerja sama internasional.
          </p>
          <p className="text-lg leading-relaxed text-justify mb-8 text-purple-50">
            Di dalam negeri, kolaborasi diperkuat dengan melibatkan pemerintah
            daerah, BUMN, BUMD, perguruan tinggi, asosiasi usaha, komunitas,
            ormas, dan pusat kajian halal untuk memperkuat penyelenggaraan JPH.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-center">
            <p className="text-xl font-semibold italic">
              "Berbagai upaya dan terobosan strategis dilakukan BPJPH untuk
              melakukan percepatan sertifikasi halal produk, demi mewujudkan
              cita-cita Indonesia menjadi{" "}
              <span className="text-yellow-400 font-bold not-italic">
                pusat produsen produk halal nomor 1 di dunia
              </span>
              ."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilBpjph;
