export default function Bab3Content() {
    return (
      <div id="bab3" className="mt-20 p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
        {/* Judul Bab */}
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center border-b-4 border-blue-600 pb-2">
          BAB 3: Metodologi Penelitian
        </h2>
  
        {/* Pengantar */}
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Bab ini menjelaskan metode penelitian yang digunakan dalam penyusunan skripsi ini. 
          Pemilihan metode yang tepat memastikan penelitian berjalan sistematis serta menghasilkan 
          data yang valid dan dapat diandalkan.
        </p>
  
        {/* 3.1 Pendekatan Penelitian */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">3.1 Pendekatan Penelitian</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Pendekatan penelitian yang digunakan dalam skripsi ini adalah pendekatan kuantitatif,
            di mana data dikumpulkan melalui survei dan dianalisis secara statistik. 
            Metode ini dipilih untuk mendapatkan hasil yang objektif dan dapat diuji kembali.
          </p>
        </section>
  
        {/* 3.2 Metode Pengumpulan Data */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">3.2 Metode Pengumpulan Data</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Data dalam penelitian ini dikumpulkan menggunakan beberapa teknik, antara lain:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition">📝 Wawancara dengan responden terkait.</li>
            <li className="hover:text-blue-700 transition">📊 Kuesioner untuk mendapatkan data kuantitatif.</li>
            <li className="hover:text-blue-700 transition">👀 Observasi langsung di lokasi penelitian.</li>
          </ul>
        </section>
  
        {/* 3.3 Teknik Analisis Data */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">3.3 Teknik Analisis Data</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Data yang telah dikumpulkan dianalisis menggunakan metode statistik, termasuk analisis 
            deskriptif dan inferensial. Software seperti SPSS digunakan untuk membantu dalam proses 
            analisis dan interpretasi hasil penelitian.
          </p>
        </section>
      </div>
    );
  }
  