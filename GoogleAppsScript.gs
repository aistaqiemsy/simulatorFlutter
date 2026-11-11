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
    },
    {
      id: 'home_tab_icons',
      question: 'Ikon apa yang dipakai untuk tab kedua pada TabBar HomePage?',
      options: [
        { id: 'a', text: 'Icons.circle_outlined' },
        { id: 'b', text: 'Icons.chat' },
        { id: 'c', text: 'Icons.call' },
        { id: 'd', text: 'Icons.send' }
      ],
      answer: 'a'
    },
    {
      id: 'appbar_bottom',
      question: 'TabBar pada HomePage dipasang melalui properti AppBar yang mana?',
      options: [
        { id: 'a', text: 'bottom' },
        { id: 'b', text: 'leading' },
        { id: 'c', text: 'actions' },
        { id: 'd', text: 'title' }
      ],
      answer: 'a'
    },
    {
      id: 'home_scaffold',
      question: 'Widget mana yang menjadi kerangka halaman HomePage dan menampung AppBar serta body?',
      options: [
        { id: 'a', text: 'Scaffold' },
        { id: 'b', text: 'ListTile' },
        { id: 'c', text: 'CircleAvatar' },
        { id: 'd', text: 'MaterialPageRoute' }
      ],
      answer: 'a'
    },
    {
      id: 'padding_card',
      question: 'Pada kartu My Friend, Padding digunakan untuk apa?',
      options: [
        { id: 'a', text: 'Memberi jarak di sekitar Card' },
        { id: 'b', text: 'Membuka halaman DetailChat' },
        { id: 'c', text: 'Mengendalikan perpindahan tab' },
        { id: 'd', text: 'Menampilkan ikon profil' }
      ],
      answer: 'a'
    },
    {
      id: 'listtile_subtitle',
      question: 'Pada ListTile percakapan, teks "Hi!" ditampilkan melalui properti apa?',
      options: [
        { id: 'a', text: 'subtitle' },
        { id: 'b', text: 'leading' },
        { id: 'c', text: 'trailing' },
        { id: 'd', text: 'bottom' }
      ],
      answer: 'a'
    },
    {
      id: 'listtile_leading',
      question: 'Apa yang ditampilkan oleh properti leading pada ListTile My Friend?',
      options: [
        { id: 'a', text: 'Ikon person di sisi awal baris' },
        { id: 'b', text: 'Teks "Hi!" di bawah nama' },
        { id: 'c', text: 'Angka "50" di sisi akhir baris' },
        { id: 'd', text: 'Tab untuk membuka DetailChat' }
      ],
      answer: 'a'
    },
    {
      id: 'route_builder_detail',
      question: 'Widget apa yang dikembalikan oleh builder pada MaterialPageRoute ketika kartu chat diketuk?',
      options: [
        { id: 'a', text: 'DetailChat' },
        { id: 'b', text: 'TabBar' },
        { id: 'c', text: 'TextField' },
        { id: 'd', text: 'DefaultTabController' }
      ],
      answer: 'a'
    },
    {
      id: 'debug_banner',
      question: 'Apa dampak debugShowCheckedModeBanner: false pada MaterialApp?',
      options: [
        { id: 'a', text: 'Menyembunyikan penanda debug pada tampilan aplikasi' },
        { id: 'b', text: 'Menonaktifkan semua tombol debugPrint' },
        { id: 'c', text: 'Menghapus AppBar dari HomePage' },
        { id: 'd', text: 'Mengubah aplikasi menjadi mode produksi secara otomatis' }
      ],
      answer: 'a'
    },
    {
      id: 'chat_card_elevation',
      question: 'Properti elevation pada Card My Friend berkaitan dengan apa?',
      options: [
        { id: 'a', text: 'Kesan ketinggian atau bayangan Card' },
        { id: 'b', text: 'Jumlah pesan pada ListView' },
        { id: 'c', text: 'Jarak antar tab' },
        { id: 'd', text: 'Ukuran teks subtitle' }
      ],
      answer: 'a'
    },
    {
      id: 'home_body_tabs',
      question: 'Widget apa yang menghubungkan pilihan tab dengan halaman konten pada body HomePage?',
      options: [
        { id: 'a', text: 'TabBarView' },
        { id: 'b', text: 'MaterialPageRoute' },
        { id: 'c', text: 'ListTile' },
        { id: 'd', text: 'CircleAvatar' }
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
    },
    {
      id: 'tab_count_consistency',
      question: 'Jika satu Tab ditambahkan, perubahan apa yang perlu dipertimbangkan pada struktur tab?',
      options: [
        { id: 'a', text: 'Sesuaikan jumlah pada controller dan sediakan halaman pasangannya di TabBarView' },
        { id: 'b', text: 'Ubah elevation Card menjadi jumlah tab baru' },
        { id: 'c', text: 'Hapus seluruh children dari TabBarView' },
        { id: 'd', text: 'Pindahkan TabBar ke dalam TextField' }
      ],
      answer: 'a'
    },
    {
      id: 'route_push_result',
      question: 'Apa yang dilakukan Navigator.push dalam callback InkWell pada HomePage?',
      options: [
        { id: 'a', text: 'Menambahkan halaman DetailChat di atas halaman saat ini' },
        { id: 'b', text: 'Mengganti isi subtitle ListTile' },
        { id: 'c', text: 'Menghapus halaman HomePage dari aplikasi' },
        { id: 'd', text: 'Memilih tab status pada TabBar' }
      ],
      answer: 'a'
    },
    {
      id: 'route_pop_result',
      question: 'Setelah DetailChat dibuka dengan Navigator.push, apa yang terjadi saat tombol kembali menjalankan Navigator.pop?',
      options: [
        { id: 'a', text: 'Halaman DetailChat ditutup dan halaman sebelumnya terlihat kembali' },
        { id: 'b', text: 'Halaman DetailChat ditumpuk sekali lagi' },
        { id: 'c', text: 'Aplikasi berpindah otomatis ke tab kedua' },
        { id: 'd', text: 'Isi ListView pesan dihapus' }
      ],
      answer: 'a'
    },
    {
      id: 'home_chat_card_flow',
      question: 'Urutan alur saat pengguna membuka percakapan My Friend yang paling tepat adalah ...',
      options: [
        { id: 'a', text: 'Ketuk InkWell, jalankan onTap, lalu Navigator membuka route DetailChat' },
        { id: 'b', text: 'Ketuk subtitle, ubah TabController, lalu hapus Scaffold' },
        { id: 'c', text: 'Tekan TabBarView, jalankan TextField, lalu panggil debugPrint' },
        { id: 'd', text: 'Ketuk Card, panggil Navigator.pop, lalu buka ListView kosong' }
      ],
      answer: 'a'
    },
    {
      id: 'chat_appbar_parts',
      question: 'Bagian mana pada AppBar DetailChat yang menampilkan avatar dan nama TemanQ?',
      options: [
        { id: 'a', text: 'title berupa Row yang berisi CircleAvatar dan Text' },
        { id: 'b', text: 'leading berupa TabBarView' },
        { id: 'c', text: 'actions berupa ListView pesan' },
        { id: 'd', text: 'bottom berupa TextField' }
      ],
      answer: 'a'
    },
    {
      id: 'chat_message_children',
      question: 'Mengapa dua pesan contoh muncul di ListView DetailChat?',
      options: [
        { id: 'a', text: 'Karena widget pesan ditulis sebagai children ListView' },
        { id: 'b', text: 'Karena ListView membaca subtitle ListTile secara otomatis' },
        { id: 'c', text: 'Karena TextField mengirim pesan saat halaman dibuka' },
        { id: 'd', text: 'Karena Navigator membuat pesan bawaan' }
      ],
      answer: 'a'
    },
    {
      id: 'column_order',
      question: 'Berdasarkan urutan children Column pada DetailChat, bagian mana yang muncul setelah area daftar pesan?',
      options: [
        { id: 'a', text: 'Area input pesan yang dibungkus Padding' },
        { id: 'b', text: 'TabBar HomePage' },
        { id: 'c', text: 'Card My Friend' },
        { id: 'd', text: 'AppBar HomePage' }
      ],
      answer: 'a'
    },
    {
      id: 'expanded_remaining_space',
      question: 'Bagaimana Expanded membantu membagi tinggi pada Column halaman chat?',
      options: [
        { id: 'a', text: 'ListView mengambil ruang yang tersedia, menyisakan ruang untuk baris input' },
        { id: 'b', text: 'ListView mengambil seluruh layar termasuk AppBar' },
        { id: 'c', text: 'Row input berpindah ke atas AppBar' },
        { id: 'd', text: 'Semua pesan berubah menjadi tab' }
      ],
      answer: 'a'
    },
    {
      id: 'tab_body_order',
      question: 'Bagaimana TabBarView menentukan konten yang tampil untuk sebuah tab?',
      options: [
        { id: 'a', text: 'Konten pada posisi yang sama dalam daftar children dipasangkan dengan tab tersebut' },
        { id: 'b', text: 'Konten dipilih berdasarkan warna AppBar' },
        { id: 'c', text: 'Selalu menampilkan children terakhir' },
        { id: 'd', text: 'Membuka route baru untuk setiap tab secara otomatis' }
      ],
      answer: 'a'
    },
    {
      id: 'push_vs_pop',
      question: 'Apa perbedaan tujuan Navigator.push dan Navigator.pop pada kedua file?',
      options: [
        { id: 'a', text: 'push membuka route baru, sedangkan pop menutup route teratas' },
        { id: 'b', text: 'push mengirim pesan, sedangkan pop menghapus tab' },
        { id: 'c', text: 'push mengubah warna, sedangkan pop mengubah ukuran teks' },
        { id: 'd', text: 'Keduanya selalu membuka halaman baru' }
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
    },
    {
      id: 'send_button_behavior',
      question: 'Setelah pengguna mengetik pesan lalu menekan IconButton kirim, apa efek yang benar-benar dijalankan kode?',
      options: [
        { id: 'a', text: 'Callback menjalankan debugPrint dengan teks "Mengirim pesan!"' },
        { id: 'b', text: 'Teks input otomatis ditambahkan ke ListView' },
        { id: 'c', text: 'Pesan dikirim ke kontak melalui jaringan' },
        { id: 'd', text: 'TextField otomatis dibersihkan dan disimpan' }
      ],
      answer: 'a'
    },
    {
      id: 'video_action_behavior',
      question: 'Apa yang dilakukan callback tombol video pada AppBar DetailChat?',
      options: [
        { id: 'a', text: 'Mencetak "Video call!" ke log melalui debugPrint' },
        { id: 'b', text: 'Memulai panggilan video sungguhan' },
        { id: 'c', text: 'Membuka kamera dan meminta izin' },
        { id: 'd', text: 'Menambahkan pesan video ke ListView' }
      ],
      answer: 'a'
    },
    {
      id: 'phone_action_behavior',
      question: 'Apa kesimpulan yang tepat tentang tombol telepon pada AppBar?',
      options: [
        { id: 'a', text: 'Saat ini tombol hanya mencatat "Telepon!" dan belum melakukan panggilan' },
        { id: 'b', text: 'Ikon call otomatis menghubungi TemanQ' },
        { id: 'c', text: 'Tombol mengirim teks dari TextField' },
        { id: 'd', text: 'Tombol mengganti tab menjadi tab telepon' }
      ],
      answer: 'a'
    },
    {
      id: 'empty_tabs_content',
      question: 'Bagaimana isi tab status dan telepon pada kode HomePage saat ini?',
      options: [
        { id: 'a', text: 'Keduanya berupa ListView yang belum memiliki isi' },
        { id: 'b', text: 'Keduanya menampilkan DetailChat secara otomatis' },
        { id: 'c', text: 'Keduanya berisi Card My Friend' },
        { id: 'd', text: 'Keduanya memuat riwayat panggilan dari server' }
      ],
      answer: 'a'
    },
    {
      id: 'avatar_widget',
      question: 'Widget apa yang membentuk avatar bulat dengan ikon person pada AppBar DetailChat?',
      options: [
        { id: 'a', text: 'CircleAvatar' },
        { id: 'b', text: 'TabBarView' },
        { id: 'c', text: 'MaterialPageRoute' },
        { id: 'd', text: 'Expanded' }
      ],
      answer: 'a'
    },
    {
      id: 'input_hint',
      question: 'Apa fungsi hintText "Tulis pesan..." pada InputDecoration?',
      options: [
        { id: 'a', text: 'Memberi petunjuk teks ketika kolom input masih kosong' },
        { id: 'b', text: 'Mengirim teks tersebut sebagai pesan otomatis' },
        { id: 'c', text: 'Mengubah ikon tombol menjadi send' },
        { id: 'd', text: 'Menyimpan isi TextField ke ListView' }
      ],
      answer: 'a'
    },
    {
      id: 'bubble_colors',
      question: 'Apa yang membedakan latar dua gelembung pesan pada contoh?',
      options: [
        { id: 'a', text: 'Container memakai Colors.green[100] dan Colors.green[300]' },
        { id: 'b', text: 'TabBar mengubah warna berdasarkan tab aktif' },
        { id: 'c', text: 'TextField memilih warna berdasarkan panjang pesan' },
        { id: 'd', text: 'Navigator memberi warna berbeda untuk setiap route' }
      ],
      answer: 'a'
    },
    {
      id: 'alignment_and_color',
      question: 'Apa yang menentukan sisi tampilan dan warna pada pesan "Hi juga!"?',
      options: [
        { id: 'a', text: 'Align menentukan posisi kiri, sedangkan BoxDecoration pada Container memberi warna' },
        { id: 'b', text: 'TextField menentukan posisi, sedangkan AppBar memberi warna pesan' },
        { id: 'c', text: 'Navigator menentukan posisi, sedangkan TabBar memberi warna pesan' },
        { id: 'd', text: 'Expanded menentukan keduanya secara otomatis' }
      ],
      answer: 'a'
    },
    {
      id: 'padding_message_list',
      question: 'Apa pengaruh padding EdgeInsets.all(20) pada ListView pesan?',
      options: [
        { id: 'a', text: 'Memberi jarak di sekeliling konten daftar pesan' },
        { id: 'b', text: 'Membatasi daftar hanya boleh memiliki 20 pesan' },
        { id: 'c', text: 'Menggeser AppBar sejauh 20 tab' },
        { id: 'd', text: 'Mengatur ukuran ikon kirim menjadi 20 piksel pasti' }
      ],
      answer: 'a'
    },
    {
      id: 'static_message_data',
      question: 'Apa keterbatasan dua pesan yang ditulis langsung sebagai widget pada ListView?',
      options: [
        { id: 'a', text: 'Pesan contoh bersifat tetap dan belum berasal dari data yang dapat diperbarui' },
        { id: 'b', text: 'ListView tidak dapat discroll' },
        { id: 'c', text: 'Align tidak bisa digunakan di dalam ListView' },
        { id: 'd', text: 'Container tidak bisa menampilkan Text' }
      ],
      answer: 'a'
    }
  ],
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
    const available = getExamQuestions_(id).length > 0;
    return {
      id,
      available,
      questionCount: getExamQuestions_(id).length,
      attempts: scores.length,
      highestScore: scores.length ? Math.max(...scores) : null,
      passed: available && scores.some(score => score >= EXAM_CONFIG.passingScore)
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
