export default function Bab1Content() {
    return (
      <div id="bab1" className="mt-20 p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
        {/* Judul Bab 1 */}
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center border-b-4 border-blue-600 pb-2">
          BAB 1: Pendahuluan
        </h2>
  
        {/* Latar Belakang */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">1.1 Latar Belakang</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Dalam dunia akademik, skripsi merupakan salah satu syarat kelulusan bagi mahasiswa 
            tingkat akhir. Skripsi tidak hanya menjadi bentuk evaluasi terhadap pemahaman 
            mahasiswa terhadap bidang studi mereka, tetapi juga sebagai kontribusi akademik 
            dalam pengembangan ilmu pengetahuan.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            Namun, banyak mahasiswa menghadapi tantangan dalam menyusun skripsi, terutama dalam 
            mengakses referensi yang relevan dan mengelola struktur skripsi secara sistematis. 
            Oleh karena itu, diperlukan sebuah sistem berbasis web yang dapat membantu mahasiswa 
            dalam mengelola dan membaca skripsi secara efisien.
          </p>
        </section>
  
        {/* Rumusan Masalah */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">1.2 Rumusan Masalah</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Berdasarkan latar belakang yang telah dijelaskan, maka rumusan masalah dalam penelitian ini adalah:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition">Bagaimana merancang aplikasi berbasis web untuk membaca skripsi secara efisien?</li>
            <li className="hover:text-blue-700 transition">Bagaimana menerapkan fitur Sticky Heading agar pembaca tidak kehilangan posisi saat membaca?</li>
            <li className="hover:text-blue-700 transition">Bagaimana meningkatkan pengalaman pengguna dalam mengakses skripsi secara online?</li>
          </ul>
        </section>
  
        {/* Tujuan Penelitian */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">1.3 Tujuan Penelitian</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Adapun tujuan dari penelitian ini adalah:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition">Membangun aplikasi web untuk membaca skripsi secara online dengan fitur Sticky Heading.</li>
            <li className="hover:text-blue-700 transition">Membantu mahasiswa dalam membaca dan memahami skripsi secara sistematis.</li>
            <li className="hover:text-blue-700 transition">Meningkatkan efisiensi akses terhadap skripsi bagi mahasiswa dan akademisi.</li>
          </ul>
        </section>
  
        {/* Manfaat Penelitian */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">1.4 Manfaat Penelitian</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Penelitian ini diharapkan dapat memberikan manfaat sebagai berikut:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition"><strong>Bagi Mahasiswa:</strong> Memudahkan akses dan pemahaman skripsi secara digital.</li>
            <li className="hover:text-blue-700 transition"><strong>Bagi Akademisi:</strong> Menyediakan platform yang mempermudah studi literatur.</li>
            <li className="hover:text-blue-700 transition"><strong>Bagi Peneliti:</strong> Menjadi dasar dalam pengembangan sistem serupa untuk publikasi akademik.</li>
          </ul>
        </section>
  
        {/* Sistematika Penulisan */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">1.5 Sistematika Penulisan</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Sistematika penulisan dalam penelitian ini terdiri dari lima bab, yaitu:
          </p>
          <ul className="list-decimal ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition"><strong>Bab 1:</strong> Pendahuluan, yang menjelaskan latar belakang, rumusan masalah, tujuan, manfaat, dan sistematika penulisan.</li>
            <li className="hover:text-blue-700 transition"><strong>Bab 2:</strong> Kajian Pustaka, yang berisi teori-teori pendukung serta penelitian sebelumnya yang relevan.</li>
            <li className="hover:text-blue-700 transition"><strong>Bab 3:</strong> Metodologi, yang menjelaskan metode penelitian yang digunakan dalam pembangunan aplikasi.</li>
            <li className="hover:text-blue-700 transition"><strong>Bab 4:</strong> Hasil dan Pembahasan, yang berisi analisis hasil implementasi aplikasi.</li>
            <li className="hover:text-blue-700 transition"><strong>Bab 5:</strong> Kesimpulan dan Saran, yang menyajikan ringkasan hasil penelitian serta saran untuk pengembangan lebih lanjut.</li>
          </ul>
        </section>
      </div>
    );
  }
  