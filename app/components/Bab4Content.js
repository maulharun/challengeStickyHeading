export default function Bab4Content() {
    return (
      <div id="bab4" className="mt-20 p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
        {/* Judul Bab */}
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center border-b-4 border-blue-600 pb-2">
          BAB 4: Hasil dan Pembahasan
        </h2>
  
        {/* Pengantar */}
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Bab ini membahas hasil penelitian yang telah dilakukan serta analisis data 
          yang diperoleh. Pembahasan dilakukan berdasarkan metode yang telah dijelaskan 
          pada bab sebelumnya.
        </p>
  
        {/* 4.1 Hasil Penelitian */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">4.1 Hasil Penelitian</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Hasil penelitian diperoleh berdasarkan pengolahan data yang dikumpulkan 
            melalui wawancara, kuesioner, dan observasi. Berikut adalah beberapa temuan utama:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition">📌 Data menunjukkan bahwa mayoritas responden setuju dengan implementasi sistem.</li>
            <li className="hover:text-blue-700 transition">📈 Analisis statistik menunjukkan peningkatan efisiensi setelah implementasi.</li>
            <li className="hover:text-blue-700 transition">💡 Beberapa aspek masih memerlukan perbaikan berdasarkan feedback responden.</li>
          </ul>
        </section>
  
        {/* 4.2 Analisis Data */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">4.2 Analisis Data</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Analisis data dilakukan menggunakan metode statistik deskriptif dan inferensial. 
            Software seperti SPSS dan Excel digunakan untuk mengolah data yang telah dikumpulkan.
          </p>
        </section>
  
        {/* 4.3 Pembahasan */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">4.3 Pembahasan</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Hasil penelitian dibandingkan dengan penelitian terdahulu dan teori yang telah dibahas dalam 
            bab sebelumnya. Beberapa aspek utama yang dibahas dalam penelitian ini meliputi:
          </p>
          <ul className="list-decimal ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition">Perbandingan hasil penelitian dengan teori yang ada.</li>
            <li className="hover:text-blue-700 transition">Implikasi hasil penelitian terhadap bidang yang diteliti.</li>
            <li className="hover:text-blue-700 transition">Keterbatasan penelitian dan saran untuk penelitian mendatang.</li>
          </ul>
        </section>
      </div>
    );
  }
  