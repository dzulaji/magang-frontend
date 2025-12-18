import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const StrukturOrganisasi = () => {
  // 1. STATE
  const [pejabat, setPejabat] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. EFFECT
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/pejabats?populate=*"
        );
        const json = await response.json();

        // Simpan data ke State
        // Pastikan kita menyimpan array data
        setPejabat(json.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Gagal ambil data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 3. TAMPILAN LOADING
  if (loading) {
    return <div className="text-center py-20">Sedang memuat data...</div>;
  }

  // 4. TAMPILAN UTAMA
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Struktur Organisasi
        </h1>
        <p className="text-gray-600 mt-2">
          Mengenal Pimpinan dan Pejabat BPJPH
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pejabat.map((item) => {
          // --- PERBAIKAN DISINI (HAPUS .attributes) ---

          // Ambil data langsung dari item (Strapi v5 style)
          const { nama, jabatan, foto, documentId, id } = item;

          // Gunakan documentId jika ada (standard v5), kalau tidak pakai id biasa
          const linkId = documentId || id;

          // Handle URL Foto (Support Strapi v5 & v4)
          // v5 biasanya foto.url, v4 foto.data.attributes.url
          const urlDariApi = foto?.url || foto?.data?.attributes?.url;

          const imgUrl = urlDariApi
            ? `http://localhost:1337${urlDariApi}`
            : "https://via.placeholder.com/400x400?text=No+Image";

          return (
            <Link
              to={`/struktur-organisasi/${linkId}`}
              key={linkId}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Bagian Gambar */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={imgUrl}
                    alt={nama || "Foto Pejabat"}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Bagian Teks */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                    {nama}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">
                    {jabatan}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default StrukturOrganisasi;
