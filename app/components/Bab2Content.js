export default function Bab2Content() {
    return (
      <div id="bab2" className="mt-20 p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
        {/* Judul Bab 2 */}
        <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center border-b-4 border-blue-600 pb-2">
          BAB 2: Kajian Pustaka
        </h2>
  
        {/* Pengertian Skripsi */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">2.1 Pengertian Skripsi</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Skripsi adalah karya ilmiah yang disusun oleh mahasiswa sebagai syarat kelulusan jenjang S1. 
            Skripsi bertujuan untuk menguji kemampuan mahasiswa dalam melakukan penelitian secara sistematis, 
            serta menyajikan hasil analisis dalam bentuk tulisan akademik.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            Menurut beberapa ahli, skripsi merupakan bentuk laporan penelitian yang harus memiliki 
            dasar teori yang kuat, serta dapat dipertanggungjawabkan secara ilmiah.
          </p>
        </section>
  
        {/* Landasan Teori */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">2.2 Landasan Teori</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Landasan teori merupakan konsep dan teori yang mendukung penelitian ini. Beberapa teori yang 
            digunakan dalam penelitian ini meliputi:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition"><strong>Teori Sistem Informasi:</strong> Menjelaskan bagaimana data dapat diorganisir dan disajikan secara efisien.</li>
            <li className="hover:text-blue-700 transition"><strong>Teori UX/UI Design:</strong> Menganalisis bagaimana desain antarmuka dapat meningkatkan pengalaman pengguna.</li>
            <li className="hover:text-blue-700 transition"><strong>Teori Sticky Navigation:</strong> Membahas pentingnya navigasi tetap dalam aplikasi web untuk meningkatkan keterbacaan.</li>
          </ul>
        </section>
  
        {/* Penelitian Terdahulu */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">2.3 Penelitian Terdahulu</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Beberapa penelitian terdahulu yang menjadi referensi dalam pengembangan aplikasi ini adalah:
          </p>
          <ul className="list-decimal ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition">
              <strong>Studi Aplikasi Manajemen Skripsi Online</strong> – Penelitian ini membahas bagaimana 
              sistem manajemen skripsi online dapat meningkatkan efektivitas pencarian dokumen.
            </li>
            <li className="hover:text-blue-700 transition">
              <strong>Penerapan UX/UI dalam Sistem Akademik</strong> – Menjelaskan pentingnya tampilan 
              yang ramah pengguna dalam aplikasi akademik.
            </li>
            <li className="hover:text-blue-700 transition">
              <strong>Efektivitas Sticky Heading pada Web Akademik</strong> – Menguji bagaimana fitur 
              sticky heading dapat membantu pengguna dalam membaca dokumen panjang.
            </li>
          </ul>
        </section>
  
        {/* Kerangka Pemikiran */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">2.4 Kerangka Pemikiran</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Kerangka pemikiran dalam penelitian ini digambarkan dalam diagram berikut:
          </p>
          <div className="flex justify-center mt-6">
            <img src="/images/kerangka-pemikiran.png" alt="Kerangka Pemikiran" className="rounded-lg shadow-md w-3/4"/>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed mt-4">
            Diagram tersebut menunjukkan alur penelitian dari perumusan masalah hingga pengujian aplikasi.
          </p>
        </section>
  
        {/* Hipotesis Penelitian */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">2.5 Hipotesis Penelitian</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Berdasarkan kajian pustaka yang telah dijelaskan, hipotesis dalam penelitian ini adalah:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
            <li className="hover:text-blue-700 transition">
              Aplikasi Skripsi Online dengan fitur Sticky Heading akan meningkatkan keterbacaan dan 
              kenyamanan pengguna dalam mengakses dokumen skripsi.
            </li>
            <li className="hover:text-blue-700 transition">
              Implementasi UX/UI yang baik akan meningkatkan kepuasan pengguna dalam mengakses skripsi.
            </li>
            <li className="hover:text-blue-700 transition">
              Penggunaan sistem pencarian yang efisien akan mempercepat akses ke dokumen akademik yang dibutuhkan.
            </li>
          </ul>
        </section>
      </div>
    );
  }
  