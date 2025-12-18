import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// 1. IMPORT RENDERER STRAPI
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const DetailPejabat = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:1337/api/pejabats/${id}?populate=*`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <div className="text-center py-20">Loading profile...</div>;
  if (!data)
    return <div className="text-center py-20">Data tidak ditemukan</div>;

  const { nama, jabatan, foto, deskripsi } = data;

  const urlDariApi = foto?.url || foto?.data?.attributes?.url;
  const imgUrl = urlDariApi
    ? `http://localhost:1337${urlDariApi}`
    : "https://via.placeholder.com/400";

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        to="/struktur-organisasi"
        className="text-green-700 hover:underline mb-6 inline-block font-medium"
      >
        &larr; Kembali ke Struktur Organisasi
      </Link>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto border border-gray-100">
        {/* Kolom Foto */}
        <div className="w-full md:w-1/3 bg-gray-50">
          <img
            src={imgUrl}
            alt={nama}
            className="w-full h-full object-cover object-center min-h-[300px]"
          />
        </div>

        {/* Kolom Info */}
        <div className="w-full md:w-2/3 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {nama}
          </h1>

          <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-6 tracking-wide">
            {jabatan}
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
            Tentang Pejabat
          </h3>

          {/* 2. AREA DESKRIPSI (RICH TEXT) */}
          <div className="text-gray-600 leading-relaxed space-y-4 text-justify rich-text-container">
            {/* Cek apakah deskripsi ada isinya */}
            {deskripsi ? (
              <BlocksRenderer content={deskripsi} />
            ) : (
              <p>Belum ada deskripsi.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPejabat;
