const EXAM_CONFIG = {
  levelCount: 10,
  participantSheet: 'Peserta',
  resultSheet: 'Hasil_Ujian',
  summarySheet: 'Ringkasan_Nilai',
  nisColumn: 1,
  nameColumn: 2,
  rayonColumn: 3,
  passingScore: 75
};

const EXAM_QUESTIONS = [
  {
    id: 'widget',
    question: 'Apa yang dimaksud dengan widget di Flutter?',
    options: [
      { id: 'a', text: 'Bagian penyusun antarmuka aplikasi' },
      { id: 'b', text: 'Bahasa untuk mengatur database' },
      { id: 'c', text: 'Jenis file gambar' },
      { id: 'd', text: 'Nama emulator Android' }
    ],
    answer: 'a'
  },
  {
    id: 'scaffold',
    question: 'Widget manakah yang menyediakan struktur dasar halaman seperti AppBar dan body?',
    options: [
      { id: 'a', text: 'Text' },
      { id: 'b', text: 'Scaffold' },
      { id: 'c', text: 'Icon' },
      { id: 'd', text: 'Padding' }
    ],
    answer: 'b'
  },
  {
    id: 'materialapp',
    question: 'Apa peran umum MaterialApp pada aplikasi Flutter?',
    options: [
      { id: 'a', text: 'Menjadi titik masuk konfigurasi aplikasi Material' },
      { id: 'b', text: 'Menyimpan semua file gambar' },
      { id: 'c', text: 'Mengganti fungsi main()' },
      { id: 'd', text: 'Membuat spreadsheet' }
    ],
    answer: 'a'
  },
  {
    id: 'column',
    question: 'Properti Column untuk menampung beberapa widget anak adalah ...',
    options: [
      { id: 'a', text: 'child' },
      { id: 'b', text: 'children' },
      { id: 'c', text: 'items' },
      { id: 'd', text: 'body' }
    ],
    answer: 'b'
  },
  {
    id: 'container',
    question: 'Properti Container yang umumnya digunakan untuk satu widget anak adalah ...',
    options: [
      { id: 'a', text: 'children' },
      { id: 'b', text: 'items' },
      { id: 'c', text: 'child' },
      { id: 'd', text: 'widgets' }
    ],
    answer: 'c'
  },
  {
    id: 'stateless',
    question: 'Kapan StatelessWidget cocok digunakan?',
    options: [
      { id: 'a', text: 'Saat tampilan tidak mengelola state lokal yang berubah' },
      { id: 'b', text: 'Hanya saat membuat database' },
      { id: 'c', text: 'Saat selalu membutuhkan setState()' },
      { id: 'd', text: 'Untuk menggantikan MaterialApp' }
    ],
    answer: 'a'
  },
  {
    id: 'stateful',
    question: 'Metode yang digunakan untuk memberi tahu Flutter bahwa state lokal berubah adalah ...',
    options: [
      { id: 'a', text: 'buildAgain()' },
      { id: 'b', text: 'setState()' },
      { id: 'c', text: 'hotReload()' },
      { id: 'd', text: 'refreshWidget()' }
    ],
    answer: 'b'
  },
  {
    id: 'hotreload',
    question: 'Apa manfaat hot reload saat pengembangan Flutter?',
    options: [
      { id: 'a', text: 'Melihat perubahan kode dengan cepat tanpa memulai ulang aplikasi dari awal' },
      { id: 'b', text: 'Menerbitkan aplikasi ke Play Store' },
      { id: 'c', text: 'Membuat akun Google' },
      { id: 'd', text: 'Menghapus semua state dan file proyek' }
    ],
    answer: 'a'
  },
  {
    id: 'create',
    question: 'Perintah untuk membuat proyek Flutter baru adalah ...',
    options: [
      { id: 'a', text: 'flutter start aplikasi_pertama' },
      { id: 'b', text: 'flutter create aplikasi_pertama' },
      { id: 'c', text: 'flutter install aplikasi_pertama' },
      { id: 'd', text: 'flutter widget aplikasi_pertama' }
    ],
    answer: 'b'
  },
  {
    id: 'build',
    question: 'Perintah untuk membuat APK rilis adalah ...',
    options: [
      { id: 'a', text: 'flutter build apk --release' },
      { id: 'b', text: 'flutter run apk --release' },
      { id: 'c', text: 'flutter create apk' },
      { id: 'd', text: 'flutter doctor --release' }
    ],
    answer: 'a'
  }
];

const EXAM_QUESTIONS_BY_LEVEL = {
  1: EXAM_QUESTIONS,
  2: [
    {
      id: 'tab_length',
      question: 'Pada HomePage, mengapa nilai length pada DefaultTabController adalah 3?',
      options: [
        { id: 'a', text: 'Karena TabBar memiliki tiga tab yang harus dikendalikan' },
        { id: 'b', text: 'Karena aplikasi memiliki tiga halaman DetailChat' },
        { id: 'c', text: 'Karena Scaffold hanya menerima tiga widget' },
        { id: 'd', text: 'Karena AppBar memiliki tiga judul' }
      ],
      answer: 'a'
    },
    {
      id: 'tab_views',
      question: 'Apa yang ditampilkan ketika pengguna memilih tab kedua pada HomePage?',
      options: [
        { id: 'a', text: 'Widget ListView kosong pada urutan kedua TabBarView' },
        { id: 'b', text: 'Halaman DetailChat secara otomatis' },
        { id: 'c', text: 'Dialog untuk menulis pesan' },
        { id: 'd', text: 'Widget TabBar kedua di dalam body' }
      ],
      answer: 'a'
    },
    {
      id: 'chat_card',
      question: 'Apa fungsi InkWell yang membungkus ListTile pada kartu percakapan?',
      options: [
        { id: 'a', text: 'Memberi area interaksi yang menjalankan aksi saat diketuk' },
        { id: 'b', text: 'Menyimpan pesan ke database' },
        { id: 'c', text: 'Mengatur jumlah tab pada AppBar' },
        { id: 'd', text: 'Mengubah ListTile menjadi halaman baru' }
      ],
      answer: 'a'
    },
    {
      id: 'detail_import',
      question: 'Mengapa main.dart mengimpor detail_chat.dart?',
      options: [
        { id: 'a', text: 'Agar kelas DetailChat dapat digunakan sebagai tujuan navigasi' },
        { id: 'b', text: 'Agar Flutter membuat file detail_chat.dart secara otomatis' },
        { id: 'c', text: 'Agar semua widget berpindah ke dalam AppBar' },
        { id: 'd', text: 'Agar TextField dapat membaca NIS' }
      ],
      answer: 'a'
    },
    {
      id: 'chat_actions',
      question: 'Di mana tombol video call, telepon, dan menu lain ditempatkan pada DetailChat?',
      options: [
        { id: 'a', text: 'Pada properti actions milik AppBar' },
        { id: 'b', text: 'Sebagai children dari TextField' },
        { id: 'c', text: 'Di dalam TabBarView HomePage' },
        { id: 'd', text: 'Pada properti leading milik Scaffold' }
      ],
      answer: 'a'
    }
  ],
  3: [
    {
      id: 'tab_alignment',
      question: 'Apa yang perlu dijaga agar tab dapat berpindah ke konten yang sesuai?',
      options: [
        { id: 'a', text: 'Jumlah tab dan jumlah halaman TabBarView harus sama serta urutannya sesuai' },
        { id: 'b', text: 'Semua tab harus memakai ikon yang sama' },
        { id: 'c', text: 'Setiap halaman TabBarView harus berupa Scaffold' },
        { id: 'd', text: 'Warna AppBar harus sama dengan warna semua halaman' }
      ],
      answer: 'a'
    },
    {
      id: 'detail_route',
      question: 'Urutan apa yang terjadi saat kartu My Friend diketuk?',
      options: [
        { id: 'a', text: 'InkWell menjalankan onTap lalu Navigator.push membuka DetailChat' },
        { id: 'b', text: 'ListTile mengubah teks menjadi halaman DetailChat tanpa navigasi' },
        { id: 'c', text: 'TabBar berpindah ke tab ketiga lalu menutup aplikasi' },
        { id: 'd', text: 'TextField mengirim pesan lalu membuka AppBar baru' }
      ],
      answer: 'a'
    },
    {
      id: 'detail_layout',
      question: 'Apa peran Column pada body halaman DetailChat?',
      options: [
        { id: 'a', text: 'Menyusun area daftar pesan dan area penulisan pesan secara vertikal' },
        { id: 'b', text: 'Menyusun tab chat, status, dan telepon secara horizontal' },
        { id: 'c', text: 'Mengganti fungsi Navigator.push' },
        { id: 'd', text: 'Menyimpan isi pesan saat aplikasi ditutup' }
      ],
      answer: 'a'
    },
    {
      id: 'expanded_list',
      question: 'Mengapa ListView pesan ditempatkan di dalam Expanded?',
      options: [
        { id: 'a', text: 'Agar daftar memakai ruang tersisa di Column sementara area input tetap terlihat' },
        { id: 'b', text: 'Agar semua pesan otomatis dikirim' },
        { id: 'c', text: 'Agar AppBar ikut menjadi bagian dari daftar' },
        { id: 'd', text: 'Agar Column hanya menampilkan satu pesan' }
      ],
      answer: 'a'
    },
    {
      id: 'back_navigation',
      question: 'Apa dampak Navigator.pop(context) pada tombol kembali DetailChat?',
      options: [
        { id: 'a', text: 'Menutup halaman DetailChat dan kembali ke halaman sebelumnya' },
        { id: 'b', text: 'Membuka halaman DetailChat yang baru' },
        { id: 'c', text: 'Berpindah ke tab telepon pada HomePage' },
        { id: 'd', text: 'Menghapus semua pesan dari ListView' }
      ],
      answer: 'a'
    }
  ],
  4: [
    {
      id: 'message_alignment',
      question: 'Bagaimana kode membedakan posisi gelembung pesan "Hi!" dan "Hi juga!"?',
      options: [
        { id: 'a', text: 'Masing-masing dibungkus Align dengan alignment kanan dan kiri' },
        { id: 'b', text: 'Keduanya memakai TabBar dengan tab berbeda' },
        { id: 'c', text: 'Warna AppBar menentukan posisi teks' },
        { id: 'd', text: 'Navigator memindahkan pesan ke sisi layar yang berbeda' }
      ],
      answer: 'a'
    },
    {
      id: 'bubble_decoration',
      question: 'Widget dan properti mana yang memberi latar hijau serta sudut membulat pada pesan?',
      options: [
        { id: 'a', text: 'Container dengan BoxDecoration dan BorderRadius.circular' },
        { id: 'b', text: 'Expanded dengan TabController' },
        { id: 'c', text: 'TextField dengan InputDecoration' },
        { id: 'd', text: 'Navigator dengan MaterialPageRoute' }
      ],
      answer: 'a'
    },
    {
      id: 'message_input_row',
      question: 'Mengapa TextField dan IconButton kirim disusun di dalam Row?',
      options: [
        { id: 'a', text: 'Agar kolom pesan dan tombol kirim berada berdampingan' },
        { id: 'b', text: 'Agar pesan otomatis tersusun dari bawah ke atas' },
        { id: 'c', text: 'Agar tombol kirim menjadi bagian dari AppBar' },
        { id: 'd', text: 'Agar TextField berubah menjadi daftar tab' }
      ],
      answer: 'a'
    },
    {
      id: 'text_field_expand',
      question: 'Apa tujuan Expanded yang membungkus TextField pada baris input?',
      options: [
        { id: 'a', text: 'Memberi TextField ruang horizontal tersisa di samping tombol kirim' },
        { id: 'b', text: 'Membuat TextField memenuhi tinggi seluruh halaman' },
        { id: 'c', text: 'Mengirim teks setiap kali pengguna mengetik' },
        { id: 'd', text: 'Membuat tombol kirim berpindah ke kiri' }
      ],
      answer: 'a'
    },
    {
      id: 'appbar_leading',
      question: 'Apa perbedaan fungsi leading dan actions pada AppBar DetailChat?',
      options: [
        { id: 'a', text: 'leading menampilkan tombol kembali, sedangkan actions menampilkan tombol aksi di sisi lainnya' },
        { id: 'b', text: 'leading menampilkan daftar pesan, sedangkan actions mengirim pesan' },
        { id: 'c', text: 'leading mengatur tab, sedangkan actions membuat route' },
        { id: 'd', text: 'Keduanya hanya mengatur warna latar AppBar' }
      ],
      answer: 'a'
    }
  ],
  5: [
    {
      id: 'stateful_home',
      question: 'HomePage menggunakan StatefulWidget, tetapi tidak memiliki variabel state yang berubah. Apa kesimpulan yang paling tepat?',
      options: [
        { id: 'a', text: 'Saat ini StatefulWidget belum diperlukan dan dapat dipertimbangkan menjadi StatelessWidget' },
        { id: 'b', text: 'HomePage wajib StatefulWidget karena memiliki AppBar' },
        { id: 'c', text: 'StatefulWidget otomatis menyimpan semua pesan' },
        { id: 'd', text: 'Mengubahnya menjadi StatelessWidget akan menghapus Navigator' }
      ],
      answer: 'a'
    },
    {
      id: 'stateful_detail',
      question: 'DetailChat juga menggunakan StatefulWidget, tetapi tidak memanggil setState. Apa penilaian yang paling masuk akal untuk kode saat ini?',
      options: [
        { id: 'a', text: 'Belum terlihat kebutuhan state yang berubah; StatelessWidget mungkin cukup untuk tampilan saat ini' },
        { id: 'b', text: 'StatefulWidget diperlukan agar debugPrint bekerja' },
        { id: 'c', text: 'Setiap halaman yang memakai Scaffold wajib StatefulWidget' },
        { id: 'd', text: 'StatelessWidget tidak dapat memiliki tombol' }
      ],
      answer: 'a'
    },
    {
      id: 'text_input_behavior',
      question: 'Pengguna mengetik di TextField lalu menekan tombol kirim. Apa yang benar-benar dilakukan kode saat ini?',
      options: [
        { id: 'a', text: 'Callback hanya menampilkan teks "Mengirim pesan!" melalui debugPrint' },
        { id: 'b', text: 'Teks otomatis ditambahkan ke ListView pesan' },
        { id: 'c', text: 'Pesan disimpan ke database lokal' },
        { id: 'd', text: 'TextField otomatis dikosongkan setelah mengirim' }
      ],
      answer: 'a'
    },
    {
      id: 'tab_content',
      question: 'Tab status dan telepon berisi ListView tanpa children. Apa yang akan dilihat pengguna di tab tersebut?',
      options: [
        { id: 'a', text: 'Area daftar yang belum memiliki item untuk ditampilkan' },
        { id: 'b', text: 'Daftar chat dari tab pertama secara otomatis' },
        { id: 'c', text: 'Halaman DetailChat secara otomatis' },
        { id: 'd', text: 'Error karena ListView harus selalu memiliki children' }
      ],
      answer: 'a'
    },
    {
      id: 'displayed_messages',
      question: 'Dari mana dua gelembung pesan pada DetailChat berasal?',
      options: [
        { id: 'a', text: 'Dari widget Text yang ditulis langsung sebagai children ListView' },
        { id: 'b', text: 'Dari hasil pembacaan TextField' },
        { id: 'c', text: 'Dari data TabBarController' },
        { id: 'd', text: 'Dari hasil Navigator.pop' }
      ],
      answer: 'a'
    }
  ],
  6: [
    {
      id: 'state_on_tap',
      question: 'Jika daftar pesan ingin bertambah setelah tombol kirim ditekan, perubahan apa yang paling sesuai?',
      options: [
        { id: 'a', text: 'Simpan pesan dalam state dan panggil setState agar daftar dibangun ulang' },
        { id: 'b', text: 'Ganti warna AppBar di dalam debugPrint' },
        { id: 'c', text: 'Panggil Navigator.pop setiap kali tombol ditekan' },
        { id: 'd', text: 'Tambahkan tab baru ke DefaultTabController tanpa mengubah TabBar' }
      ],
      answer: 'a'
    },
    {
      id: 'controller_role',
      question: 'Jika teks yang diketik harus dibaca oleh callback tombol kirim, apa yang belum ada pada implementasi TextField saat ini?',
      options: [
        { id: 'a', text: 'Mekanisme untuk mengambil nilai input, misalnya TextEditingController atau onChanged' },
        { id: 'b', text: 'MaterialPageRoute untuk setiap karakter' },
        { id: 'c', text: 'TabBarController pada DetailChat' },
        { id: 'd', text: 'BoxDecoration pada TextField' }
      ],
      answer: 'a'
    },
    {
      id: 'route_context',
      question: 'Mengapa context diberikan saat memanggil Navigator.push dan Navigator.pop?',
      options: [
        { id: 'a', text: 'Navigator menggunakan context untuk menemukan navigator yang mengelola halaman tersebut' },
        { id: 'b', text: 'Context adalah teks pesan yang akan dikirim' },
        { id: 'c', text: 'Context menyimpan warna setiap widget' },
        { id: 'd', text: 'Context menentukan jumlah pilihan pada TabBar' }
      ],
      answer: 'a'
    },
    {
      id: 'alignment_scope',
      question: 'Jika Container pesan tidak dibungkus Align, properti mana yang tidak lagi menentukan posisi gelembung kiri atau kanan pada kode ini?',
      options: [
        { id: 'a', text: 'Alignment.centerLeft atau Alignment.centerRight' },
        { id: 'b', text: 'BorderRadius.circular' },
        { id: 'c', text: 'Colors.green[100]' },
        { id: 'd', text: 'EdgeInsets.all' }
      ],
      answer: 'a'
    },
    {
      id: 'tab_length_mismatch',
      question: 'Jika satu tab ditambahkan ke TabBar tetapi length DefaultTabController tetap 3, masalah apa yang harus diperiksa?',
      options: [
        { id: 'a', text: 'Jumlah tab tidak sesuai dengan jumlah yang dikelola controller' },
        { id: 'b', text: 'Warna pesan harus diganti menjadi biru' },
        { id: 'c', text: 'Navigator.pop harus dipindahkan ke main.dart' },
        { id: 'd', text: 'TextField harus dihapus dari DetailChat' }
      ],
      answer: 'a'
    }
  ],
  7: [
    {
      id: 'tab_view_count',
      question: 'Pengembang menambah tab keempat, tetapi tidak menambah halaman di TabBarView. Apa yang perlu diperbaiki?',
      options: [
        { id: 'a', text: 'Tambahkan halaman keempat dan sesuaikan length controller agar jumlahnya konsisten' },
        { id: 'b', text: 'Hapus MaterialApp agar tab dapat dibuat otomatis' },
        { id: 'c', text: 'Pindahkan semua actions AppBar ke ListView' },
        { id: 'd', text: 'Ganti semua StatefulWidget menjadi StatefulWidget baru' }
      ],
      answer: 'a'
    },
    {
      id: 'listview_overflow',
      question: 'Jika Expanded dihapus dari ListView pada Column DetailChat, risiko layout apa yang mungkin muncul?',
      options: [
        { id: 'a', text: 'ListView dapat meminta ruang tak terbatas pada arah scroll dan memicu konflik layout' },
        { id: 'b', text: 'Navigator.pop akan berubah menjadi Navigator.push' },
        { id: 'c', text: 'TabBar otomatis berpindah ke halaman chat' },
        { id: 'd', text: 'TextField tidak dapat menerima teks' }
      ],
      answer: 'a'
    },
    {
      id: 'send_callback',
      question: 'Seorang murid menyatakan tombol kirim sudah mengirim pesan karena callback-nya memanggil debugPrint. Evaluasi mana yang tepat?',
      options: [
        { id: 'a', text: 'Belum; debugPrint hanya mencatat teks dan tidak mengubah daftar atau mengirim ke layanan' },
        { id: 'b', text: 'Benar; debugPrint otomatis menyimpan pesan ke ListView' },
        { id: 'c', text: 'Benar; IconButton mengirim data ke jaringan secara bawaan' },
        { id: 'd', text: 'Belum; tombol harus diganti menjadi Tab' }
      ],
      answer: 'a'
    },
    {
      id: 'row_expanded',
      question: 'Jika Expanded pada TextField di dalam Row dihapus, apa yang perlu diperhatikan?',
      options: [
        { id: 'a', text: 'TextField bisa tidak mendapat batas lebar yang sesuai di Row' },
        { id: 'b', text: 'DetailChat otomatis kembali ke HomePage' },
        { id: 'c', text: 'ListView akan berpindah ke AppBar' },
        { id: 'd', text: 'Warna Container akan menjadi transparan' }
      ],
      answer: 'a'
    },
    {
      id: 'navigation_stack',
      question: 'Setelah Navigator.push membuka DetailChat, aksi mana yang mengembalikan pengguna ke HomePage?',
      options: [
        { id: 'a', text: 'Memanggil Navigator.pop dari halaman DetailChat' },
        { id: 'b', text: 'Menekan IconButton kirim' },
        { id: 'c', text: 'Memilih tab kedua pada DetailChat' },
        { id: 'd', text: 'Membuat MaterialPageRoute kedua tanpa pop' }
      ],
      answer: 'a'
    }
  ],
  8: [
    {
      id: 'tab_controller_scope',
      question: 'Mengapa DefaultTabController diletakkan membungkus Scaffold HomePage?',
      options: [
        { id: 'a', text: 'Agar TabBar dan TabBarView di dalam subtree dapat memakai controller yang sama' },
        { id: 'b', text: 'Agar DetailChat otomatis menjadi anak TabBarView' },
        { id: 'c', text: 'Agar semua tombol memperoleh TextEditingController' },
        { id: 'd', text: 'Agar Scaffold tidak perlu memiliki body' }
      ],
      answer: 'a'
    },
    {
      id: 'separation_files',
      question: 'Apa manfaat memisahkan kelas DetailChat ke file detail_chat.dart?',
      options: [
        { id: 'a', text: 'Struktur kode lebih terpisah dan halaman chat dapat diimpor saat dibutuhkan' },
        { id: 'b', text: 'Flutter otomatis membuat database percakapan' },
        { id: 'c', text: 'Navigator tidak lagi memerlukan context' },
        { id: 'd', text: 'Semua widget menjadi StatelessWidget' }
      ],
      answer: 'a'
    },
    {
      id: 'input_state_design',
      question: 'Untuk membuat fitur kirim pesan bekerja di halaman yang sekarang, kombinasi tanggung jawab apa yang perlu ditambahkan?',
      options: [
        { id: 'a', text: 'Ambil input, tambahkan pesan ke data yang ditampilkan, lalu perbarui UI' },
        { id: 'b', text: 'Ubah warna AppBar dan tambah satu tab kosong' },
        { id: 'c', text: 'Panggil Navigator.pop sebelum membaca input' },
        { id: 'd', text: 'Ganti ListView dengan IconButton tanpa data' }
      ],
      answer: 'a'
    },
    {
      id: 'home_state_design',
      question: 'Jika HomePage akan menampilkan jumlah pesan belum dibaca yang berubah, pendekatan apa yang selaras dengan desain Flutter pada kode ini?',
      options: [
        { id: 'a', text: 'Kelola nilai yang berubah sebagai state lalu bangun ulang bagian UI terkait' },
        { id: 'b', text: 'Tulis nilai baru ke dalam nama file detail_chat.dart' },
        { id: 'c', text: 'Ubah jumlah TabBarView agar menjadi jumlah pesan' },
        { id: 'd', text: 'Gunakan BorderRadius untuk menyimpan jumlah' }
      ],
      answer: 'a'
    },
    {
      id: 'message_list_data',
      question: 'Apa keterbatasan utama ListView pesan yang ditulis dengan dua Text tetap?',
      options: [
        { id: 'a', text: 'Isinya statis dan belum dibangun dari kumpulan pesan yang dapat berubah' },
        { id: 'b', text: 'ListView tidak dapat menampilkan Text' },
        { id: 'c', text: 'Align hanya bekerja di dalam AppBar' },
        { id: 'd', text: 'Container tidak dapat memiliki BoxDecoration' }
      ],
      answer: 'a'
    }
  ],
  9: [
    {
      id: 'stateless_refactor',
      question: 'Jika DetailChat tetap hanya menampilkan dua pesan tetap dan tidak mengelola data berubah, refaktor mana yang paling sederhana?',
      options: [
        { id: 'a', text: 'Pertimbangkan StatelessWidget karena belum ada state lokal yang berubah' },
        { id: 'b', text: 'Tambahkan tiga DefaultTabController bersarang' },
        { id: 'c', text: 'Pindahkan semua pesan ke properti actions AppBar' },
        { id: 'd', text: 'Hapus Scaffold dan gunakan Navigator sebagai widget tampilan' }
      ],
      answer: 'a'
    },
    {
      id: 'debugprint_limit',
      question: 'Jika log "Video call!" muncul, kesimpulan apa yang dapat dibuat dari kode?',
      options: [
        { id: 'a', text: 'Callback tombol berjalan dan mencatat teks, tetapi panggilan video nyata belum dibuat' },
        { id: 'b', text: 'Video call berhasil tersambung ke kontak' },
        { id: 'c', text: 'Aplikasi sudah meminta izin kamera' },
        { id: 'd', text: 'Pesan video tersimpan di ListView' }
      ],
      answer: 'a'
    },
    {
      id: 'tab_empty_state',
      question: 'Apa perubahan yang paling tepat agar tab status yang kosong memberi informasi kepada pengguna?',
      options: [
        { id: 'a', text: 'Tambahkan widget konten atau empty state sebagai isi tab tersebut' },
        { id: 'b', text: 'Tambah Navigator.pop ke setiap item ListView kosong' },
        { id: 'c', text: 'Hapus TabBarView tetapi pertahankan tiga tab' },
        { id: 'd', text: 'Pindahkan TextField ke dalam DefaultTabController' }
      ],
      answer: 'a'
    },
    {
      id: 'send_input_flow',
      question: 'Apa yang masih dibutuhkan agar tombol kirim dapat menambahkan teks yang diketik ke daftar pesan?',
      options: [
        { id: 'a', text: 'Baca nilai TextField, kelola koleksi pesan, lalu perbarui UI saat koleksi berubah' },
        { id: 'b', text: 'Ubah Icon.send menjadi Icon.call' },
        { id: 'c', text: 'Tambahkan TabBar ke dalam ListView pesan' },
        { id: 'd', text: 'Panggil debugPrint tanpa membaca nilai input' }
      ],
      answer: 'a'
    },
    {
      id: 'route_builder',
      question: 'Apa peran MaterialPageRoute pada callback kartu percakapan?',
      options: [
        { id: 'a', text: 'Menyediakan route yang membangun widget DetailChat untuk Navigator.push' },
        { id: 'b', text: 'Menentukan urutan pesan pada ListView' },
        { id: 'c', text: 'Mengatur warna TabBar saat route ditutup' },
        { id: 'd', text: 'Membaca isi TextField sebelum berpindah halaman' }
      ],
      answer: 'a'
    }
  ],
  10: [
    {
      id: 'chat_feature_design',
      question: 'Manakah urutan rancangan yang paling lengkap untuk membuat tombol kirim menampilkan pesan baru di halaman chat?',
      options: [
        { id: 'a', text: 'Ambil teks input, validasi bila perlu, tambahkan ke data pesan, lalu bangun ulang daftar' },
        { id: 'b', text: 'Ubah warna AppBar, panggil Navigator.pop, lalu cetak teks tetap' },
        { id: 'c', text: 'Tambah tab baru, hapus TextField, lalu ubah BorderRadius' },
        { id: 'd', text: 'Panggil MaterialPageRoute setiap kali satu karakter diketik' }
      ],
      answer: 'a'
    },
    {
      id: 'screen_structure',
      question: 'Jika halaman chat perlu mempertahankan area input di bawah sementara daftar pesan dapat discroll, susunan mana yang paling sesuai dengan kode?',
      options: [
        { id: 'a', text: 'Column berisi Expanded(ListView) di atas dan area input di bawah' },
        { id: 'b', text: 'Row berisi AppBar dan Navigator.pop tanpa body' },
        { id: 'c', text: 'ListView membungkus Scaffold dan TabBar' },
        { id: 'd', text: 'TabBarView berisi TextField sebagai satu-satunya halaman' }
      ],
      answer: 'a'
    },
    {
      id: 'tab_feature_extension',
      question: 'Saat menambahkan tab baru untuk fitur lain, perubahan mana yang menjaga struktur tab tetap konsisten?',
      options: [
        { id: 'a', text: 'Tambah Tab, tambah halaman TabBarView pada posisi yang sesuai, dan perbarui length controller' },
        { id: 'b', text: 'Tambah IconButton ke actions DetailChat saja' },
        { id: 'c', text: 'Ubah jumlah gelembung pesan tanpa menyentuh controller' },
        { id: 'd', text: 'Hapus TabBarView dan biarkan controller mengisi konten otomatis' }
      ],
      answer: 'a'
    },
    {
      id: 'feature_completion',
      question: 'Manakah pernyataan yang paling akurat tentang tingkat fungsi aplikasi pada kode lampiran?',
      options: [
        { id: 'a', text: 'Navigasi dan tampilan dasar sudah ada, tetapi pengiriman pesan dan panggilan nyata belum diimplementasikan' },
        { id: 'b', text: 'Semua fitur chat sudah terhubung ke server karena memakai StatefulWidget' },
        { id: 'c', text: 'Tab kosong berarti aplikasi otomatis mengambil data status dari internet' },
        { id: 'd', text: 'Tombol panggilan bekerja karena menggunakan Icon.call' }
      ],
      answer: 'a'
    },
    {
      id: 'architecture_reasoning',
      question: 'Mengapa memisahkan tanggung jawab tampilan, input, data pesan, dan navigasi membantu pengembangan lanjutan?',
      options: [
        { id: 'a', text: 'Perubahan tiap bagian lebih mudah dipahami dan diuji tanpa mencampur semua perilaku di satu callback' },
        { id: 'b', text: 'Pemisahan membuat aplikasi tidak lagi membutuhkan widget' },
        { id: 'c', text: 'Pemisahan otomatis membuat panggilan video berfungsi' },
        { id: 'd', text: 'Semua data akan tersimpan permanen tanpa penyimpanan' }
      ],
      answer: 'a'
    }
  ]
};

function doGet(event) {
  const callback = event && event.parameter && event.parameter.callback;
  if (!callback || !/^flutterLabCallback_[A-Za-z0-9_]+$/.test(callback)) {
    return ContentService.createTextOutput('Invalid JSONP callback');
  }

  let response;
  try {
    response = handleExamRequest_(event.parameter || {});
  } catch (error) {
    response = { success: false, message: error.message || 'Terjadi kesalahan pada server ujian.' };
  }

  return ContentService
    .createTextOutput(`${callback}(${JSON.stringify(response)});`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function handleExamRequest_(parameters) {
  const action = parameters.action;
  const nis = String(parameters.nis || '').trim();
  if (!nis) return { success: false, message: 'NIS wajib diisi.' };
  const participant = getParticipant_(nis);
  if (!participant) {
    return { success: false, message: 'NIS tidak terdaftar. Silakan hubungi pengajar.' };
  }

  if (action === 'start') {
    return {
      success: true,
      participant,
      levels: getParticipantLevelProgress_(nis)
    };
  }

  if (action === 'questions') {
    const level = Number(parameters.level);
    const levelQuestions = getExamQuestions_(level);
    if (!levelQuestions.length) {
      return { success: false, message: 'Soal untuk level ini belum tersedia.' };
    }

    return {
      success: true,
      questions: shuffleExamItems_(levelQuestions.map(({ id, question, options }) => ({
        id,
        question,
        options: shuffleExamItems_(options.map(option => ({ ...option })))
      })))
    };
  }

  if (action === 'submit') {
    return saveExamResult_(nis, parameters);
  }

  return { success: false, message: 'Aksi ujian tidak dikenal.' };
}

function getExamQuestions_(level) {
  return Number.isInteger(level) ? EXAM_QUESTIONS_BY_LEVEL[level] || [] : [];
}

function shuffleExamItems_(items) {
  const shuffled = items.slice();
  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function getParticipantLevelProgress_(nis) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(EXAM_CONFIG.resultSheet);
  const scoresByLevel = new Map();
  if (sheet && sheet.getLastRow() >= 2) {
    sheet.getRange(2, 3, sheet.getLastRow() - 1, 6).getDisplayValues().forEach(
      ([attemptNis, rawScore, , , , rawLevel]) => {
        if (String(attemptNis).trim() !== nis) return;
        const level = rawLevel ? Number(rawLevel) : 1;
        const score = Number(rawScore);
        if (!Number.isInteger(level) || level < 1 || level > EXAM_CONFIG.levelCount || !Number.isFinite(score)) return;
        if (!scoresByLevel.has(level)) scoresByLevel.set(level, []);
        scoresByLevel.get(level).push(score);
      }
    );
  }

  return Array.from({ length: EXAM_CONFIG.levelCount }, (_, index) => {
    const id = index + 1;
    const scores = scoresByLevel.get(id) || [];
    return {
      id,
      available: getExamQuestions_(id).length > 0,
      attempts: scores.length,
      highestScore: scores.length ? Math.max(...scores) : null,
      passed: scores.some(score => score >= EXAM_CONFIG.passingScore)
    };
  });
}

function getParticipant_(nis) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet && spreadsheet.getSheetByName(EXAM_CONFIG.participantSheet);
  if (!sheet) {
    throw new Error(`Tab "${EXAM_CONFIG.participantSheet}" tidak ditemukan di spreadsheet.`);
  }

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  const lastColumn = Math.max(EXAM_CONFIG.nisColumn, EXAM_CONFIG.nameColumn, EXAM_CONFIG.rayonColumn);
  const participants = sheet
    .getRange(2, 1, lastRow - 1, lastColumn)
    .getDisplayValues();
  const participant = participants.find(row => String(row[EXAM_CONFIG.nisColumn - 1]).trim() === nis);
  if (!participant) return null;

  return {
    nis,
    name: String(participant[EXAM_CONFIG.nameColumn - 1] || '').trim(),
    rayon: String(participant[EXAM_CONFIG.rayonColumn - 1] || '').trim()
  };
}

function saveExamResult_(nis, parameters) {
  const level = Number(parameters.level);
  const questions = getExamQuestions_(level);
  if (!questions.length) {
    return { success: false, message: 'Soal untuk level ini belum tersedia.' };
  }

  let answers;
  try {
    answers = JSON.parse(parameters.answers || '{}');
  } catch (error) {
    return { success: false, message: 'Data jawaban tidak valid. Silakan ulangi ujian.' };
  }
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
    return { success: false, message: 'Format jawaban tidak valid.' };
  }

  const total = questions.length;
  const levelCorrect = questions.reduce(
    (count, question) => count + (answers[question.id] === question.answer ? 1 : 0),
    0
  );
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(EXAM_CONFIG.resultSheet);
    if (!sheet) sheet = spreadsheet.insertSheet(EXAM_CONFIG.resultSheet);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['No. Ujian', 'Waktu', 'NIS', 'Nilai (%)', 'Benar', 'Jumlah Soal', 'Jawaban', 'Level']);
    } else if (!sheet.getRange(1, 8).getDisplayValue()) {
      sheet.getRange(1, 8).setValue('Level');
    }

    const attemptNumber = sheet.getLastRow();
    const previousAttempts = attemptNumber > 1
      ? sheet.getRange(2, 3, attemptNumber - 1, 6).getDisplayValues()
        .some(([previousNis, , , , , previousLevel]) =>
          String(previousNis).trim() === nis && Number(previousLevel || 1) === level
        )
      : false;
    const rawScore = Math.round((levelCorrect / total) * 100);
    const score = previousAttempts
      ? Math.min(rawScore, EXAM_CONFIG.passingScore)
      : rawScore;
    const row = attemptNumber + 1;
    sheet.getRange(row, 1, 1, 3).setNumberFormat('@');
    sheet.getRange(row, 4, 1, 3).setNumberFormat('0');
    sheet.getRange(row, 7, 1, 1).setNumberFormat('@');
    sheet.getRange(row, 8, 1, 1).setNumberFormat('0');
    sheet.getRange(row, 1, 1, 8).setValues([[
      String(attemptNumber),
      new Date().toISOString(),
      nis,
      score,
      levelCorrect,
      total,
      JSON.stringify(answers),
      level
    ]]);
    updateScoreSummary_(spreadsheet);

    return {
      success: true,
      attemptNumber,
      level,
      score,
      correct: levelCorrect,
      total,
      passed: score >= EXAM_CONFIG.passingScore,
      levels: getParticipantLevelProgress_(nis)
    };
  } finally {
    lock.releaseLock();
  }
}

function updateScoreSummary_(spreadsheet) {
  let summary = spreadsheet.getSheetByName(EXAM_CONFIG.summarySheet);
  if (!summary) summary = spreadsheet.insertSheet(EXAM_CONFIG.summarySheet);

  const resultSheet = spreadsheet.getSheetByName(EXAM_CONFIG.resultSheet);
  const lastResultRow = resultSheet ? resultSheet.getLastRow() : 1;
  const attempts = lastResultRow < 2
    ? []
    : resultSheet.getRange(2, 3, lastResultRow - 1, 2).getValues()
      .map(([nis, rawScore]) => ({
        nis: String(nis).trim(),
        score: typeof rawScore === 'number' ? rawScore : Number(String(rawScore).trim())
      }))
      .filter(attempt => attempt.nis && Number.isFinite(attempt.score));
  const scores = attempts.map(attempt => attempt.score);
  const highest = scores.length ? Math.max(...scores) : 0;
  const lowest = scores.length ? Math.min(...scores) : 0;
  const average = scores.length
    ? Math.round((scores.reduce((sum, score) => sum + score, 0) / scores.length) * 100) / 100
    : 0;
  const participantSheet = spreadsheet.getSheetByName(EXAM_CONFIG.participantSheet);
  const participantsByNis = new Map();
  if (participantSheet && participantSheet.getLastRow() >= 2) {
    const lastColumn = Math.max(EXAM_CONFIG.nisColumn, EXAM_CONFIG.nameColumn, EXAM_CONFIG.rayonColumn);
    const participants = participantSheet
      .getRange(2, 1, participantSheet.getLastRow() - 1, lastColumn)
      .getDisplayValues();
    participants.forEach(row => {
      const nis = String(row[EXAM_CONFIG.nisColumn - 1] || '').trim();
      if (!nis || participantsByNis.has(nis)) return;
      participantsByNis.set(nis, {
        nis,
        name: String(row[EXAM_CONFIG.nameColumn - 1] || '').trim(),
        rayon: String(row[EXAM_CONFIG.rayonColumn - 1] || '').trim(),
        scores: []
      });
    });
  }
  attempts.forEach(attempt => {
    if (!participantsByNis.has(attempt.nis)) {
      participantsByNis.set(attempt.nis, {
        nis: attempt.nis,
        name: '',
        rayon: '',
        scores: []
      });
    }
    participantsByNis.get(attempt.nis).scores.push(attempt.score);
  });
  const participantRows = [...participantsByNis.values()]
    .sort((left, right) => left.name.localeCompare(right.name) || left.nis.localeCompare(right.nis))
    .map(participant => {
      const participantScores = participant.scores;
      const participantAverage = participantScores.length
        ? Math.round((participantScores.reduce((sum, score) => sum + score, 0) / participantScores.length) * 100) / 100
        : '';
      return [
        participant.nis,
        participant.name,
        participant.rayon,
        participantScores.length ? Math.max(...participantScores) : '',
        participantScores.length ? Math.min(...participantScores) : '',
        participantAverage,
        participantScores.length,
        participantScores.length ? Math.max(...participantScores) : ''
      ];
    });

  summary.getRange('A1:B5').setValues([
    ['Ringkasan Nilai Asesmen', ''],
    ['Nilai tertinggi', highest],
    ['Nilai terendah', lowest],
    ['Rata-rata nilai', average],
    ['Jumlah percobaan', scores.length]
  ]);
  summary.getRange('A6').setValue('Nilai Akhir adalah nilai tertinggi setiap peserta; semua percobaan ulang tetap dihitung.');
  summary.getRange('A8:H9').setValues([
    ['Ringkasan Per Peserta', '', '', '', '', '', '', ''],
    ['NIS', 'Nama', 'Rayon', 'Nilai tertinggi', 'Nilai terendah', 'Rata-rata nilai', 'Jumlah percobaan', 'Nilai Akhir']
  ]);
  const oldLastRow = summary.getLastRow();
  if (oldLastRow >= 10) summary.getRange(10, 1, oldLastRow - 9, 8).clearContent();
  if (participantRows.length) {
    summary.getRange(10, 1, participantRows.length, 8).setValues(participantRows);
  }
  summary.getRange('A1:B1').setFontWeight('bold');
  summary.getRange('A1:B1').setBackground('#312e81').setFontColor('#ffffff');
  summary.getRange('A8:H8').setFontWeight('bold');
  summary.getRange('A8:H8').setBackground('#312e81').setFontColor('#ffffff');
  summary.getRange('A9:H9').setFontWeight('bold');
  summary.getRange('A9:H9').setBackground('#e0e7ff').setFontColor('#312e81');
  summary.getRange('A2:A5').setFontWeight('bold');
  summary.getRange('B2:B4').setNumberFormat('0.00');
  summary.getRange('B5').setNumberFormat('0');
  if (participantRows.length) {
    summary.getRange(10, 1, participantRows.length, 1).setNumberFormat('@');
    summary.getRange(10, 4, participantRows.length, 3).setNumberFormat('0.00');
    summary.getRange(10, 7, participantRows.length, 1).setNumberFormat('0');
    summary.getRange(10, 8, participantRows.length, 1).setNumberFormat('0.00');
  }
  summary.getRange('A6:B6').setFontStyle('italic').setFontColor('#475569');
  [100, 180, 140, 130, 130, 140, 145, 110].forEach((width, index) => summary.setColumnWidth(index + 1, width));
}

function refreshScoreSummary() {
  updateScoreSummary_(SpreadsheetApp.getActiveSpreadsheet());
}
