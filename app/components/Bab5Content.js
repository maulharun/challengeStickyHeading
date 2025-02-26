export default function Bab5Content() {
    return (
      <div id="bab5" className="mt-20 p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
        {/* Judul Bab */}
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center border-b-4 border-blue-600 pb-2">
          BAB 5: Kesimpulan dan Saran
        </h2>
  
        {/* Pengantar */}
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Bab ini menyajikan kesimpulan dari hasil penelitian yang telah dilakukan serta beberapa saran
          untuk penelitian selanjutnya. Kesimpulan diambil berdasarkan hasil analisis data dan temuan penelitian.
        </p>
  
        {/* 5.1 Kesimpulan */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">5.1 Kesimpulan</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Berdasarkan hasil penelitian, dapat disimpulkan bahwa metode yang diterapkan berhasil mencapai tujuan yang diharapkan.
            Analisis data menunjukkan bahwa pendekatan yang digunakan memberikan hasil yang valid dan dapat dijadikan
            acuan dalam penelitian selanjutnya.
          </p>
        </section>
  
        {/* 5.2 Saran */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">5.2 Saran</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Berdasarkan hasil penelitian, berikut beberapa saran yang dapat diberikan untuk penelitian mendatang:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition">🔍 Mengembangkan cakupan penelitian agar lebih luas dan mendalam.</li>
            <li className="hover:text-blue-700 transition">📊 Menggunakan metode analisis tambahan untuk meningkatkan validitas hasil.</li>
            <li className="hover:text-blue-700 transition">🖥️ Memanfaatkan teknologi terbaru untuk efisiensi pengolahan data.</li>
          </ul>
        </section>
      </div>
    );
  }
  