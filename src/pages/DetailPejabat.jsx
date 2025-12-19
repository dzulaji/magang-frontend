import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { ArrowLeft, User, Briefcase } from "lucide-react";

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
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-800"></div>
      </div>
    );

  if (!data)
    return (
      <div className="text-center py-20 text-gray-500">
        Data pejabat tidak ditemukan.
      </div>
    );

  const { nama, jabatan, foto, deskripsi } = data;

  const urlDariApi = foto?.url || foto?.data?.attributes?.url;
  const imgUrl = urlDariApi
    ? `http://localhost:1337${urlDariApi}`
    : "https://ui-avatars.com/api/?background=f3e8ff&color=6b21a8&size=500&name=" +
      nama;

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl font-sans min-h-screen">
      {/* 1. TOMBOL KEMBALI */}
      <Link
        to="/profil-pejabat"
        className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 font-medium mb-8 transition-all hover:-translate-x-1"
      >
        <div className="bg-purple-100 p-2 rounded-full">
          <ArrowLeft size={20} />
        </div>
        Kembali ke Daftar Pejabat
      </Link>

      {/* 2. KARTU UTAMA */}
      <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
        {/* KOLOM KIRI: FOTO */}
        <div className="w-full lg:w-2/5 bg-gray-100 relative group">
          <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors duration-500 z-10"></div>
          <img
            src={imgUrl}
            alt={nama}
            className="w-full h-full object-cover object-top min-h-[400px] lg:min-h-[600px]"
          />
        </div>

        {/* KOLOM KANAN: INFO DETAIL */}
        <div className="w-full lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          {/* Badge Jabatan */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <Briefcase size={16} />
              {jabatan}
            </span>
          </div>

          {/* NAMA PEJABAT (FIXED: Tambah pb-2 biar tidak kepotong) */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-normal text-transparent bg-clip-text bg-gradient-to-r from-[#4a0054] to-purple-500 pb-2">
            {nama}
          </h1>

          {/* Divider */}
          <div className="h-1 w-24 bg-purple-200 rounded-full mb-8"></div>

          {/* SECTION: TENTANG */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-800 mb-4">
              <User size={20} className="text-purple-700" />
              Tentang Pejabat
            </h3>

            <div className="text-gray-600 leading-relaxed text-lg text-justify space-y-4">
              {deskripsi ? (
                <BlocksRenderer
                  content={deskripsi}
                  blocks={{
                    paragraph: ({ children }) => (
                      <p className="mb-4 text-gray-700 leading-8">{children}</p>
                    ),
                    heading: ({ children, level }) => {
                      if (level === 1)
                        return (
                          <h1 className="text-3xl font-bold text-purple-900 mt-6 mb-3">
                            {children}
                          </h1>
                        );
                      if (level === 2)
                        return (
                          <h2 className="text-2xl font-bold text-purple-800 mt-5 mb-2">
                            {children}
                          </h2>
                        );
                      if (level === 3)
                        return (
                          <h3 className="text-xl font-bold text-purple-700 mt-4 mb-2">
                            {children}
                          </h3>
                        );
                      return (
                        <h4 className="font-bold mt-3 mb-1">{children}</h4>
                      );
                    },
                    list: ({ children, format }) =>
                      format === "ordered" ? (
                        <ol className="list-decimal pl-5 mb-4 space-y-2">
                          {children}
                        </ol>
                      ) : (
                        <ul className="list-disc pl-5 mb-4 space-y-2">
                          {children}
                        </ul>
                      ),
                  }}
                />
              ) : (
                <p className="italic text-gray-400">
                  Belum ada deskripsi profil untuk pejabat ini.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPejabat;
