const EXAM_CONFIG = {
  levelCount: 10,
  participantSheet: 'Peserta',
  resultSheet: 'Hasil_Ujian',
  summarySheet: 'Ringkasan_Nilai',
  accessSheet: 'Log_Akses',
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
      id: 'l2_layout_direction',
      question: 'Sebuah kartu perlu menampilkan ikon dan teks penjelas berdampingan. Jika ruang teks harus dapat bertambah tanpa memindahkan ikon ke bawah, komposisi widget mana yang paling sesuai?',
      options: [
        { id: 'a', text: 'Row dengan ikon dan area teks fleksibel' },
        { id: 'b', text: 'Column berisi ikon lalu Text tanpa pembatas lebar' },
        { id: 'c', text: 'Stack yang menumpuk ikon dan Text pada titik yang sama' },
        { id: 'd', text: 'ListView yang memaksa seluruh anak memiliki tinggi tetap' }
      ],
      answer: 'a'
    },
    {
      id: 'l2_remaining_width',
      question: 'Dalam Row terdapat tombol berukuran tetap dan kolom teks panjang. Pada layar sempit, teks menyebabkan overflow. Perbaikan yang paling tepat adalah ...',
      options: [
        { id: 'a', text: 'membungkus Row lain di dalam Row' },
        { id: 'b', text: 'membungkus area teks dengan Expanded agar memakai sisa lebar' },
        { id: 'c', text: 'menghapus batas ukuran tombol' },
        { id: 'd', text: 'mengganti Text dengan Icon' }
      ],
      answer: 'b'
    },
    {
      id: 'l2_scrollable_content',
      question: 'Daftar berisi ratusan data dan hanya sebagian terlihat di layar. Widget yang paling efisien untuk membangun item sesuai kebutuhan gulir adalah ...',
      options: [
        { id: 'a', text: 'Column dengan semua item dibuat sekaligus' },
        { id: 'b', text: 'Stack dengan satu Positioned untuk setiap item' },
        { id: 'c', text: 'ListView.builder' },
        { id: 'd', text: 'Wrap agar semua item dipaksa berada pada satu layar' }
      ],
      answer: 'c'
    },
    {
      id: 'l2_one_child_many',
      question: 'Sebuah bagian halaman perlu memuat beberapa widget berurutan dari atas ke bawah. Widget mana yang paling langsung menyatakan susunan tersebut?',
      options: [
        { id: 'a', text: 'Container dengan banyak properti child' },
        { id: 'b', text: 'Center dengan beberapa child' },
        { id: 'c', text: 'Padding dengan daftar children' },
        { id: 'd', text: 'Column dengan children' }
      ],
      answer: 'd'
    },
    {
      id: 'l2_overlay_badge',
      question: 'Desain meminta label kecil berada menumpuk di sudut sebuah gambar. Pendekatan komposisi yang paling tepat adalah ...',
      options: [
        { id: 'a', text: 'Stack dengan gambar dan label yang diposisikan' },
        { id: 'b', text: 'Row dengan MainAxisAlignment.center' },
        { id: 'c', text: 'ListView dengan padding nol' },
        { id: 'd', text: 'Expanded yang membungkus label' }
      ],
      answer: 'a'
    },
    {
      id: 'l2_spacing_choice',
      question: 'Jarak di dalam tepi sebuah panel harus bertambah, tetapi jarak panel terhadap widget tetangganya tetap. Perubahan mana yang paling sesuai?',
      options: [
        { id: 'a', text: 'menambah margin panel' },
        { id: 'b', text: 'menambah Padding di dalam panel' },
        { id: 'c', text: 'mengganti panel dengan Expanded' },
        { id: 'd', text: 'mengubah panel menjadi ListView' }
      ],
      answer: 'b'
    },
    {
      id: 'l2_center_vs_align',
      question: 'Satu widget harus ditempatkan tepat di tengah area yang tersedia. Pilihan paling sederhana bila tidak diperlukan pengaturan posisi lain adalah ...',
      options: [
        { id: 'a', text: 'Positioned tanpa Stack' },
        { id: 'b', text: 'Expanded' },
        { id: 'c', text: 'Center' },
        { id: 'd', text: 'Padding dengan EdgeInsets.zero' }
      ],
      answer: 'c'
    },
    {
      id: 'l2_state_decision',
      question: 'Tampilan hanya bergantung pada data yang diterima dan tidak mengubah state lokalnya sendiri. Jenis widget kustom yang lebih sesuai adalah ...',
      options: [
        { id: 'a', text: 'StatefulWidget agar semua tampilan selalu dapat berubah' },
        { id: 'b', text: 'InheritedWidget untuk mengganti setiap Text' },
        { id: 'c', text: 'LayoutBuilder tanpa alasan tata letak' },
        { id: 'd', text: 'StatelessWidget' }
      ],
      answer: 'd'
    },
    {
      id: 'l2_interaction_state',
      question: 'Tombol penghitung harus memperbarui angka yang tampak setelah ditekan. Apa yang perlu dilakukan komponen yang memiliki state tersebut?',
      options: [
        { id: 'a', text: 'memperbarui state melalui setState agar Flutter membangun ulang bagian terkait' },
        { id: 'b', text: 'membangun ulang seluruh aplikasi dengan runApp setiap ketukan' },
        { id: 'c', text: 'mengubah angka hanya pada label tombol' },
        { id: 'd', text: 'menggunakan Padding untuk menyimpan angka' }
      ],
      answer: 'a'
    },
    {
      id: 'l2_repeated_rows',
      question: 'Setiap baris data memiliki judul, keterangan, dan ikon di sisi awal. Widget yang menyediakan pola baris tersebut secara langsung adalah ...',
      options: [
        { id: 'a', text: 'Wrap' },
        { id: 'b', text: 'ListTile' },
        { id: 'c', text: 'Stack' },
        { id: 'd', text: 'AspectRatio' }
      ],
      answer: 'b'
    },
    {
      id: 'l2_flexible_width',
      question: 'Sebuah Row berisi dua panel. Panel pertama sebaiknya dua kali lebih lebar daripada panel kedua pada ruang yang tersedia. Pendekatan yang sesuai adalah ...',
      options: [
        { id: 'a', text: 'memberi keduanya ukuran tetap yang sama' },
        { id: 'b', text: 'menempatkan keduanya dalam Stack' },
        { id: 'c', text: 'membungkus panel dengan Expanded dan mengatur flex berbeda' },
        { id: 'd', text: 'menggunakan Center pada setiap panel' }
      ],
      answer: 'c'
    },
    {
      id: 'l2_conditional_widget',
      question: 'Sebuah ikon status harus muncul hanya ketika kondisi tertentu benar. Pola widget yang paling sesuai adalah ...',
      options: [
        { id: 'a', text: 'selalu membuat Icon lalu menutupinya dengan Container transparan' },
        { id: 'b', text: 'menambahkan ikon ke AppBar tanpa memeriksa kondisi' },
        { id: 'c', text: 'menggunakan ListView agar ikon tersembunyi otomatis' },
        { id: 'd', text: 'menghasilkan Icon atau SizedBox.shrink berdasarkan kondisi' }
      ],
      answer: 'd'
    },
    {
      id: 'l2_text_overflow',
      question: 'Judul panjang dalam kartu harus dibatasi maksimal dua baris dan sisanya diberi elipsis. Pengaturan yang paling tepat adalah ...',
      options: [
        { id: 'a', text: 'mengatur maxLines: 2 dan overflow: TextOverflow.ellipsis pada Text' },
        { id: 'b', text: 'mengganti Text dengan Row' },
        { id: 'c', text: 'membungkus Text dengan Stack tanpa batas' },
        { id: 'd', text: 'mengatur padding agar teks terpotong' }
      ],
      answer: 'a'
    },
    {
      id: 'l2_scroll_inside_column',
      question: 'Daftar perlu mengisi ruang tersisa di dalam Column, sementara panel kontrol di bawahnya tetap terlihat. Komposisi yang tepat adalah ...',
      options: [
        { id: 'a', text: 'membuat Column menjadi anak ListView tanpa batas' },
        { id: 'b', text: 'membungkus ListView dengan Expanded lalu menempatkan kontrol setelahnya' },
        { id: 'c', text: 'memberi ListView tinggi tak terbatas' },
        { id: 'd', text: 'mengganti Column dengan Stack' }
      ],
      answer: 'b'
    },
    {
      id: 'l2_component_reuse',
      question: 'Kartu informasi yang sama digunakan di banyak halaman, tetapi tiap kartu menerima judul dan ikon berbeda. Cara desain yang paling mudah dirawat adalah ...',
      options: [
        { id: 'a', text: 'menyalin seluruh susunan widget ke setiap halaman' },
        { id: 'b', text: 'mengubah semua kartu menjadi satu gambar' },
        { id: 'c', text: 'membuat widget kustom dengan parameter judul dan ikon' },
        { id: 'd', text: 'menaruh seluruh halaman dalam satu build yang panjang' }
      ],
      answer: 'c'
    }
  ],
  3: [
    {
      id: 'l3_unbounded_height',
      question: 'ListView di dalam Column memunculkan error tinggi tidak terbatas. Daftar harus menggulir dan tombol bawah harus tetap tampak. Perbaikan paling tepat adalah ...',
      options: [
        { id: 'a', text: 'membatasi ruang ListView dengan Expanded atau Flexible' },
        { id: 'b', text: 'menghapus seluruh children Column' },
        { id: 'c', text: 'membungkus Column dengan Container setinggi tak terbatas' },
        { id: 'd', text: 'mengganti ListView dengan Stack' }
      ],
      answer: 'a'
    },
    {
      id: 'l3_grid_adaptation',
      question: 'Galeri harus menampilkan kartu dalam beberapa kolom, dan jumlah kolom berubah mengikuti lebar layar. Widget yang paling sesuai adalah ...',
      options: [
        { id: 'a', text: 'Column dengan satu anak tetap' },
        { id: 'b', text: 'GridView dengan delegate yang menentukan jumlah atau lebar kolom' },
        { id: 'c', text: 'ListTile dengan leading berbeda' },
        { id: 'd', text: 'SingleChildScrollView tanpa susunan grid' }
      ],
      answer: 'b'
    },
    {
      id: 'l3_rebuild_scope',
      question: 'Dalam daftar panjang, hanya satu baris yang berubah status. Agar perubahan tidak membuat seluruh halaman mengelola state baris tersebut, pilihan rancangan yang baik adalah ...',
      options: [
        { id: 'a', text: 'menaruh semua data dalam satu Text' },
        { id: 'b', text: 'menjalankan setState pada root aplikasi untuk tiap perubahan' },
        { id: 'c', text: 'membuat baris yang berubah sebagai widget StatefulWidget tersendiri atau memakai state terkelola' },
        { id: 'd', text: 'membangun ulang seluruh daftar secara manual' }
      ],
      answer: 'c'
    },
    {
      id: 'l3_list_identity',
      question: 'Item daftar dapat diurutkan ulang, dan setiap item memiliki identitas stabil. Mengapa Key yang sesuai penting pada widget item?',
      options: [
        { id: 'a', text: 'agar item otomatis disimpan ke database' },
        { id: 'b', text: 'agar ListView berhenti menggulir' },
        { id: 'c', text: 'agar semua item memiliki ukuran sama' },
        { id: 'd', text: 'agar Flutter dapat mencocokkan state dengan item yang sama setelah urutan berubah' }
      ],
      answer: 'd'
    },
    {
      id: 'l3_form_validation',
      question: 'Form pendaftaran tidak boleh dikirim jika alamat surel kosong atau tidak valid. Rancangan widget Flutter yang paling sesuai adalah ...',
      options: [
        { id: 'a', text: 'menggunakan Form, GlobalKey<FormState>, validator pada field, lalu memanggil validate saat kirim' },
        { id: 'b', text: 'memeriksa warna Container setelah tombol ditekan' },
        { id: 'c', text: 'menggunakan Stack untuk menutupi tombol kirim' },
        { id: 'd', text: 'mengganti TextFormField dengan Text biasa' }
      ],
      answer: 'a'
    },
    {
      id: 'l3_layout_builder',
      question: 'Satu komponen harus memakai tata letak satu kolom pada ruang sempit dan dua kolom pada ruang lebar, berdasarkan batas lokalnya. Pilihan tepat adalah ...',
      options: [
        { id: 'a', text: 'MediaQuery selalu dengan ambang perangkat global tanpa melihat ruang komponen' },
        { id: 'b', text: 'LayoutBuilder untuk memilih komposisi dari constraints yang diterima' },
        { id: 'c', text: 'FittedBox untuk semua anak tanpa perubahan susunan' },
        { id: 'd', text: 'Expanded agar otomatis mengubah satu kolom menjadi dua' }
      ],
      answer: 'b'
    },
    {
      id: 'l3_lazy_nested_scroll',
      question: 'Halaman memuat header yang ikut menggulir bersama daftar panjang, dan item harus dibuat secara malas. Kombinasi yang paling tepat adalah ...',
      options: [
        { id: 'a', text: 'Column berisi semua item sekaligus' },
        { id: 'b', text: 'Stack dengan satu posisi untuk tiap item' },
        { id: 'c', text: 'CustomScrollView dengan SliverAppBar dan SliverList' },
        { id: 'd', text: 'SingleChildScrollView berisi daftar semua kartu' }
      ],
      answer: 'c'
    },
    {
      id: 'l3_animation_choice',
      question: 'Ukuran ikon berubah ketika pengguna menekan tombol, dan perubahan perlu berlangsung halus tanpa mengelola controller animasi manual. Widget yang paling sesuai adalah ...',
      options: [
        { id: 'a', text: 'ScaffoldMessenger' },
        { id: 'b', text: 'ListTile' },
        { id: 'c', text: 'DefaultTabController' },
        { id: 'd', text: 'AnimatedContainer atau widget implicit animation lain' }
      ],
      answer: 'd'
    },
    {
      id: 'l3_repaint_isolation',
      question: 'Satu area visual kompleks sering berubah, sedangkan area dekoratif di sekitarnya jarang berubah. Mekanisme yang dapat membantu mengisolasi proses gambar ulang setelah pengukuran membuktikan manfaatnya adalah ...',
      options: [
        { id: 'a', text: 'RepaintBoundary pada subtree yang tepat' },
        { id: 'b', text: 'menambahkan lebih banyak setState pada parent' },
        { id: 'c', text: 'mengganti semua widget dengan IntrinsicHeight' },
        { id: 'd', text: 'membungkus halaman dalam ListView tambahan' }
      ],
      answer: 'a'
    },
    {
      id: 'l3_keep_alive_tabs',
      question: 'Pengguna berpindah tab lalu kembali; posisi gulir dan state halaman sebaiknya tetap terjaga. Pendekatan yang tepat pada halaman tab adalah ...',
      options: [
        { id: 'a', text: 'membuat ulang semua child setiap kali tab berubah' },
        { id: 'b', text: 'menggunakan mekanisme keep-alive seperti AutomaticKeepAliveClientMixin bila sesuai' },
        { id: 'c', text: 'menyimpan posisi gulir di teks judul' },
        { id: 'd', text: 'memindahkan halaman ke dalam AppBar' }
      ],
      answer: 'b'
    },
    {
      id: 'l3_constraints_debug',
      question: 'Sebuah gambar melampaui lebar layar karena meminta ukuran lebih besar daripada ruang parent. Prinsip pertama untuk memperbaikinya adalah ...',
      options: [
        { id: 'a', text: 'mengabaikan constraints dari parent' },
        { id: 'b', text: 'menambah margin negatif pada setiap anak' },
        { id: 'c', text: 'menelusuri constraints parent lalu membatasi atau menyesuaikan gambar sesuai kebutuhan' },
        { id: 'd', text: 'membungkus gambar dengan widget yang meminta ukuran tak terbatas' }
      ],
      answer: 'c'
    },
    {
      id: 'l3_semantics_action',
      question: 'Ikon yang dapat diketuk tidak memiliki label bagi pembaca layar. Perbaikan paling tepat adalah ...',
      options: [
        { id: 'a', text: 'menambah bayangan agar ikon terlihat' },
        { id: 'b', text: 'mengubah ikon menjadi gambar latar' },
        { id: 'c', text: 'menambah SizedBox di sekelilingnya' },
        { id: 'd', text: 'memberi Semantics label dan aksi yang jelas atau menggunakan widget kontrol berlabel' }
      ],
      answer: 'd'
    },
    {
      id: 'l3_provider_state',
      question: 'Data yang sama perlu dibaca beberapa subtree berjauhan dan perubahan harus memperbarui semua konsumen tanpa meneruskan parameter melewati banyak lapisan. Pilihan tepat adalah ...',
      options: [
        { id: 'a', text: 'menggunakan solusi state bersama seperti Provider/InheritedWidget sesuai skala aplikasi' },
        { id: 'b', text: 'menggandakan state pada setiap widget' },
        { id: 'c', text: 'memakai Padding untuk meneruskan data' },
        { id: 'd', text: 'menyimpan data dalam tooltip' }
      ],
      answer: 'a'
    },
    {
      id: 'l3_const_widgets',
      question: 'Widget dekoratif dengan konfigurasi tetap dibuat berulang kali. Apa manfaat yang mungkin diperoleh dengan menjadikannya const ketika memungkinkan?',
      options: [
        { id: 'a', text: 'widget otomatis menjadi interaktif' },
        { id: 'b', text: 'mengurangi pembuatan ulang objek konfigurasi tetap dan membantu Flutter mengenali subtree yang tidak berubah' },
        { id: 'c', text: 'semua descendant otomatis tersimpan di disk' },
        { id: 'd', text: 'mengubah StatefulWidget menjadi route' }
      ],
      answer: 'b'
    },
    {
      id: 'l3_scroll_controller',
      question: 'Saat tombol ditekan, daftar harus menggulir ke posisi tertentu dan status gulir perlu dipantau. Mekanisme yang paling sesuai adalah ...',
      options: [
        { id: 'a', text: 'GlobalKey pada setiap Text' },
        { id: 'b', text: 'Timer untuk menggeser layar secara manual' },
        { id: 'c', text: 'ScrollController yang terhubung ke widget scroll dan dilepas saat tidak digunakan lagi' },
        { id: 'd', text: 'Navigator untuk berpindah ke item' }
      ],
      answer: 'c'
    }
  ],
  4: [
    {
      id: 'l4_widget_architecture',
      question: 'Satu layar kompleks memiliki header, filter, daftar, dan status kosong. Bagaimana memecah widget agar perubahan filter tidak membuat komponen tak terkait sulit dirawat?',
      options: [
        { id: 'a', text: 'menaruh seluruh UI dan logika dalam satu metode build' },
        { id: 'b', text: 'menggandakan halaman untuk setiap kondisi' },
        { id: 'c', text: 'menggunakan Stack sebagai pengganti semua struktur' },
        { id: 'd', text: 'membuat widget kecil dengan tanggung jawab jelas dan mengalirkan data/aksi melalui parameter atau state yang tepat' }
      ],
      answer: 'd'
    },
    {
      id: 'l4_responsive_breakpoints',
      question: 'Dashboard dipakai pada ponsel dan tablet. Pada tablet konten menjadi dua panel, sedangkan ponsel satu panel. Strategi paling andal adalah ...',
      options: [
        { id: 'a', text: 'memilih komposisi berdasarkan ruang tersedia melalui constraints/LayoutBuilder dan breakpoint desain' },
        { id: 'b', text: 'menentukan tata letak dari model perangkat tertentu' },
        { id: 'c', text: 'menskalakan seluruh halaman dengan Transform.scale' },
        { id: 'd', text: 'memaksa lebar ponsel pada semua perangkat' }
      ],
      answer: 'a'
    },
    {
      id: 'l4_state_boundary',
      question: 'Sebuah nilai dipakai hanya oleh satu kontrol, sedangkan data akun dipakai lintas halaman. Pilihan pengelolaan state yang paling seimbang adalah ...',
      options: [
        { id: 'a', text: 'menaruh kedua nilai di variabel global mutable' },
        { id: 'b', text: 'menjaga state lokal dekat kontrol dan memakai state bersama untuk data lintas fitur' },
        { id: 'c', text: 'mengangkat semua state sampai root tanpa pengecualian' },
        { id: 'd', text: 'menyimpan semua perubahan dalam properti warna widget' }
      ],
      answer: 'b'
    },
    {
      id: 'l4_list_performance',
      question: 'Daftar sangat panjang berisi kartu dengan gambar dan beberapa teks. Strategi implementasi yang paling mempertimbangkan performa adalah ...',
      options: [
        { id: 'a', text: 'membangun semua kartu dalam Column agar tidak ada builder' },
        { id: 'b', text: 'membuat ulang daftar penuh setiap frame' },
        { id: 'c', text: 'memakai builder/sliver, gambar berukuran sesuai, dan menghindari pekerjaan mahal di build' },
        { id: 'd', text: 'membungkus setiap kartu dengan beberapa scroll view bersarang' }
      ],
      answer: 'c'
    },
    {
      id: 'l4_keys_reorder',
      question: 'Daftar stateful dapat disusun ulang; setelah pengurutan, nilai input tampak berpindah ke baris lain. Diagnosis dan perbaikan paling kuat adalah ...',
      options: [
        { id: 'a', text: 'tinggi Row terlalu besar; tambahkan Padding' },
        { id: 'b', text: 'warna latar tidak seragam; ganti Container' },
        { id: 'c', text: 'ScrollController perlu dipasang pada setiap Text' },
        { id: 'd', text: 'identitas widget tidak stabil; berikan Key unik berdasarkan identitas data item' }
      ],
      answer: 'd'
    },
    {
      id: 'l4_animation_tradeoff',
      question: 'Transisi sederhana hanya mengubah warna dan ukuran berdasarkan state; tidak perlu sinkronisasi beberapa animasi atau kontrol waktu khusus. Pilihan yang paling sederhana dan mudah dirawat adalah ...',
      options: [
        { id: 'a', text: 'memilih implicit animation seperti AnimatedContainer' },
        { id: 'b', text: 'membuat TickerProvider dan controller manual untuk setiap properti' },
        { id: 'c', text: 'menjalankan Future.delayed berulang untuk mengubah style' },
        { id: 'd', text: 'menggunakan Navigator untuk memicu frame animasi' }
      ],
      answer: 'a'
    },
    {
      id: 'l4_accessibility',
      question: 'Tombol hanya berupa ikon, target sentuhnya kecil, dan warnanya menjadi satu-satunya pembeda status. Perbaikan yang paling menyeluruh adalah ...',
      options: [
        { id: 'a', text: 'memperbesar ikon visual saja' },
        { id: 'b', text: 'menyediakan label semantik, area sentuh memadai, dan penanda status selain warna' },
        { id: 'c', text: 'mengganti ikon dengan teks berwarna tanpa label aksi' },
        { id: 'd', text: 'menyembunyikan tombol dari pembaca layar' }
      ],
      answer: 'b'
    },
    {
      id: 'l4_form_error_design',
      question: 'Beberapa field formulir saling bergantung; validasi perlu menampilkan pesan dekat field dan mencegah submit bila ada kesalahan. Rancangan yang paling tepat adalah ...',
      options: [
        { id: 'a', text: 'mengubah warna seluruh halaman saat ada input salah' },
        { id: 'b', text: 'menjalankan validasi hanya setelah aplikasi ditutup' },
        { id: 'c', text: 'menggunakan Form dan validator yang sesuai, lalu menyatukan aturan lintas field pada lapisan validasi yang jelas' },
        { id: 'd', text: 'menyimpan pesan error sebagai children Stack tanpa mengaitkan field' }
      ],
      answer: 'c'
    },
    {
      id: 'l4_scroll_composition',
      question: 'Halaman memerlukan header yang dapat mengecil saat digulir, bagian kategori, lalu daftar besar yang efisien. Komposisi terbaik adalah ...',
      options: [
        { id: 'a', text: 'Column besar di dalam SingleChildScrollView dengan semua item dibuat sekaligus' },
        { id: 'b', text: 'Stack dengan seluruh konten pada posisi tetap' },
        { id: 'c', text: 'ListTile sebagai root yang menampung semua bagian' },
        { id: 'd', text: 'CustomScrollView dengan sliver yang sesuai untuk header, kategori, dan daftar' }
      ],
      answer: 'd'
    },
    {
      id: 'l4_rebuild_analysis',
      question: 'Profiler menunjukkan perubahan pada tombol kecil membangun ulang subtree mahal yang tidak bergantung pada tombol. Langkah perbaikan paling tepat adalah ...',
      options: [
        { id: 'a', text: 'mempersempit batas state/rebuild dan memisahkan subtree mahal yang tidak bergantung pada nilai tersebut' },
        { id: 'b', text: 'menambahkan setState pada widget yang lebih tinggi' },
        { id: 'c', text: 'mengganti semua widget dengan StatefulWidget' },
        { id: 'd', text: 'menambahkan animasi agar rebuild tidak terlihat' }
      ],
      answer: 'a'
    },
    {
      id: 'l4_data_empty_loading',
      question: 'Komponen daftar perlu membedakan kondisi memuat, kosong, gagal, dan berhasil tanpa mencampur semuanya dalam satu layout. Pola widget yang paling jelas adalah ...',
      options: [
        { id: 'a', text: 'selalu menampilkan daftar kosong saat permintaan berjalan' },
        { id: 'b', text: 'menyatakan state UI secara eksplisit lalu merender subtree yang sesuai untuk tiap state' },
        { id: 'c', text: 'menutupi semua status dengan satu CircularProgressIndicator permanen' },
        { id: 'd', text: 'membuat empat Scaffold bertumpuk sekaligus' }
      ],
      answer: 'b'
    },
    {
      id: 'l4_dependency_injection',
      question: 'Widget anak menampilkan data yang dimuat oleh lapisan aplikasi dan perlu mengirim aksi kembali. Agar mudah diuji dan tidak terikat pada sumber data konkret, desain tepat adalah ...',
      options: [
        { id: 'a', text: 'mengakses singleton jaringan langsung dari setiap build' },
        { id: 'b', text: 'menyimpan koneksi jaringan pada BuildContext secara manual' },
        { id: 'c', text: 'menerima data dan callback melalui kontrak/parameter atau state management yang dapat diinjeksi' },
        { id: 'd', text: 'membuat ulang sumber data setiap kali widget digambar' }
      ],
      answer: 'c'
    },
    {
      id: 'l4_widget_testing',
      question: 'Untuk memastikan widget formulir menampilkan pesan validasi dan memanggil callback saat input benar, pengujian paling relevan adalah ...',
      options: [
        { id: 'a', text: 'hanya membandingkan nama kelas widget' },
        { id: 'b', text: 'menjalankan hot reload tanpa assertion' },
        { id: 'c', text: 'memeriksa warna emulator secara manual saja' },
        { id: 'd', text: 'widget test yang mengisi field, menekan tombol, lalu memeriksa pesan dan callback' }
      ],
      answer: 'd'
    },
    {
      id: 'l4_semantics_test',
      question: 'Tampilan visual tombol sudah benar, tetapi pengujian aksesibilitas menemukan aksi tidak memiliki nama yang dapat diumumkan. Perbaikan dan verifikasi terbaik adalah ...',
      options: [
        { id: 'a', text: 'menetapkan label/semantics yang bermakna lalu memeriksa Semantics tree dalam widget test' },
        { id: 'b', text: 'menambah margin tanpa mengubah semantik' },
        { id: 'c', text: 'menambah Key acak setiap build' },
        { id: 'd', text: 'mengubah tombol menjadi Container tanpa aksi' }
      ],
      answer: 'a'
    },
    {
      id: 'l4_tradeoff_builder',
      question: 'Daftar pendek yang seluruh isinya selalu tampil bersamaan perlu susunan khusus; daftar lain berisi ribuan elemen yang digulir. Evaluasi pilihan implementasi yang paling tepat adalah ...',
      options: [
        { id: 'a', text: 'selalu memakai Column untuk kedua daftar' },
        { id: 'b', text: 'memilih widget berdasarkan pola interaksi: susunan statis sederhana untuk daftar pendek dan builder/sliver untuk daftar panjang yang digulir' },
        { id: 'c', text: 'selalu memakai ListView.builder tanpa mempertimbangkan kebutuhan susunan' },
        { id: 'd', text: 'menaruh daftar panjang pada AppBar agar dibangun sekali' }
      ],
      answer: 'b'
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
    recordParticipantAccess_(participant);
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

function recordParticipantAccess_(participant) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(EXAM_CONFIG.accessSheet);
    if (!sheet) sheet = spreadsheet.insertSheet(EXAM_CONFIG.accessSheet);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Waktu', 'NIS', 'Nama', 'Rayon']);
    }

    const row = sheet.getLastRow() + 1;
    sheet.getRange(row, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    sheet.getRange(row, 2, 1, 3).setNumberFormat('@');
    sheet.getRange(row, 1, 1, 4).setValues([[
      new Date(),
      participant.nis,
      participant.name,
      participant.rayon
    ]]);
    updateScoreSummary_(spreadsheet);
  } finally {
    lock.releaseLock();
  }
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
    : resultSheet.getRange(2, 3, lastResultRow - 1, 6).getValues()
      .map(([nis, rawScore, , , , rawLevel]) => ({
        nis: String(nis).trim(),
        score: typeof rawScore === 'number' ? rawScore : Number(String(rawScore).trim()),
        level: rawLevel === '' || rawLevel === null ? 1 : Number(rawLevel)
      }))
      .filter(attempt =>
        attempt.nis &&
        Number.isFinite(attempt.score) &&
        Number.isInteger(attempt.level) &&
        attempt.level >= 1 &&
        attempt.level <= EXAM_CONFIG.levelCount
      );
  const scores = attempts.map(attempt => attempt.score);
  const highest = scores.length ? Math.max(...scores) : 0;
  const lowest = scores.length ? Math.min(...scores) : 0;
  const average = scores.length
    ? Math.round((scores.reduce((sum, score) => sum + score, 0) / scores.length) * 100) / 100
    : 0;
  const participantSheet = spreadsheet.getSheetByName(EXAM_CONFIG.participantSheet);
  const participantsByNis = new Map();
  const accessSheet = spreadsheet.getSheetByName(EXAM_CONFIG.accessSheet);
  const accessCounts = new Map();
  const totalAccesses = accessSheet && accessSheet.getLastRow() >= 2
    ? accessSheet.getRange(2, 2, accessSheet.getLastRow() - 1, 1).getDisplayValues()
      .reduce((count, [nis]) => {
        const key = String(nis).trim();
        if (!key) return count;
        accessCounts.set(key, (accessCounts.get(key) || 0) + 1);
        return count + 1;
      }, 0)
    : 0;
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
        scores: [],
        scoresByLevel: new Map(),
        accessCount: accessCounts.get(nis) || 0
      });
    });
  }
  attempts.forEach(attempt => {
    if (!participantsByNis.has(attempt.nis)) {
      participantsByNis.set(attempt.nis, {
        nis: attempt.nis,
        name: '',
        rayon: '',
        scores: [],
        scoresByLevel: new Map(),
        accessCount: accessCounts.get(attempt.nis) || 0
      });
    }
    const participant = participantsByNis.get(attempt.nis);
    participant.scores.push(attempt.score);
    if (!participant.scoresByLevel.has(attempt.level)) {
      participant.scoresByLevel.set(attempt.level, []);
    }
    participant.scoresByLevel.get(attempt.level).push(attempt.score);
  });
  accessCounts.forEach((accessCount, nis) => {
    if (participantsByNis.has(nis)) {
      participantsByNis.get(nis).accessCount = accessCount;
      return;
    }
    participantsByNis.set(nis, {
      nis,
      name: '',
      rayon: '',
      scores: [],
      scoresByLevel: new Map(),
      accessCount
    });
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
        participantScores.length ? Math.max(...participantScores) : '',
        participant.accessCount
      ];
    });
  const levelRows = [...participantsByNis.values()]
    .sort((left, right) => left.name.localeCompare(right.name) || left.nis.localeCompare(right.nis))
    .flatMap(participant => [...participant.scoresByLevel.entries()]
      .sort(([left], [right]) => left - right)
      .map(([level, levelScores]) => [
        participant.nis,
        participant.name,
        participant.rayon,
        level,
        Math.max(...levelScores),
        levelScores[levelScores.length - 1],
        levelScores.length,
        levelScores.some(score => score >= EXAM_CONFIG.passingScore) ? 'Lulus' : 'Belum lulus'
      ])
    );

  summary.getRange('A1:B5').setValues([
    ['Ringkasan Nilai Asesmen', ''],
    ['Nilai tertinggi', highest],
    ['Nilai terendah', lowest],
    ['Rata-rata nilai', average],
    ['Jumlah percobaan', scores.length]
  ]);
  summary.getRange('A6').setValue('Nilai Akhir adalah nilai tertinggi setiap peserta; semua percobaan ulang tetap dihitung.');
  summary.getRange('A7:B7').setValues([
    ['Jumlah akses berhasil', totalAccesses]
  ]);
  summary.getRange('A8:I9').setValues([
    ['Ringkasan Per Peserta', '', '', '', '', '', '', '', ''],
    ['NIS', 'Nama', 'Rayon', 'Nilai tertinggi', 'Nilai terendah', 'Rata-rata nilai', 'Jumlah percobaan', 'Nilai Akhir', 'Jumlah akses']
  ]);
  const oldLastRow = summary.getLastRow();
  if (oldLastRow >= 10) summary.getRange(10, 1, oldLastRow - 9, 9).clearContent();
  if (participantRows.length) {
    summary.getRange(10, 1, participantRows.length, 9).setValues(participantRows);
  }
  const levelSectionRow = Math.max(12, 10 + participantRows.length + 2);
  summary.getRange(levelSectionRow, 1, 2, 8).setValues([
    ['Rekap Nilai Per Level', '', '', '', '', '', '', ''],
    ['NIS', 'Nama', 'Rayon', 'Level', 'Nilai tertinggi', 'Nilai terakhir', 'Jumlah percobaan', 'Status kelulusan']
  ]);
  if (levelRows.length) {
    summary.getRange(levelSectionRow + 2, 1, levelRows.length, 8).setValues(levelRows);
    summary.getRange(levelSectionRow + 2, 1, levelRows.length, 1).setNumberFormat('@');
    summary.getRange(levelSectionRow + 2, 4, levelRows.length, 4).setNumberFormat('0');
  }
  summary.getRange('A1:B1').setFontWeight('bold');
  summary.getRange('A1:B1').setBackground('#312e81').setFontColor('#ffffff');
  summary.getRange('A8:I8').setFontWeight('bold');
  summary.getRange('A8:I8').setBackground('#312e81').setFontColor('#ffffff');
  summary.getRange(levelSectionRow, 1, 1, 8).setFontWeight('bold');
  summary.getRange(levelSectionRow, 1, 1, 8).setBackground('#312e81').setFontColor('#ffffff');
  summary.getRange(levelSectionRow + 1, 1, 1, 8).setFontWeight('bold');
  summary.getRange(levelSectionRow + 1, 1, 1, 8).setBackground('#e0e7ff').setFontColor('#312e81');
  summary.getRange('A9:I9').setFontWeight('bold');
  summary.getRange('A9:I9').setBackground('#e0e7ff').setFontColor('#312e81');
  summary.getRange('A2:A5').setFontWeight('bold');
  summary.getRange('A7').setFontWeight('bold');
  summary.getRange('B2:B4').setNumberFormat('0.00');
  summary.getRange('B5').setNumberFormat('0');
  summary.getRange('B7').setNumberFormat('0');
  if (participantRows.length) {
    summary.getRange(10, 1, participantRows.length, 1).setNumberFormat('@');
    summary.getRange(10, 4, participantRows.length, 3).setNumberFormat('0.00');
    summary.getRange(10, 7, participantRows.length, 1).setNumberFormat('0');
    summary.getRange(10, 8, participantRows.length, 1).setNumberFormat('0.00');
    summary.getRange(10, 9, participantRows.length, 1).setNumberFormat('0');
  }
  summary.getRange('A6:B6').setFontStyle('italic').setFontColor('#475569');
  [100, 180, 140, 130, 130, 140, 145, 110, 110].forEach((width, index) => summary.setColumnWidth(index + 1, width));
}

function refreshScoreSummary() {
  updateScoreSummary_(SpreadsheetApp.getActiveSpreadsheet());
}

function onEdit(event) {
  const sheet = event && event.range && event.range.getSheet();
  if (!sheet) return;

  const sheetName = sheet.getName();
  if (
    sheetName === EXAM_CONFIG.participantSheet ||
    sheetName === EXAM_CONFIG.resultSheet
  ) {
    updateScoreSummary_(event.source || SpreadsheetApp.getActiveSpreadsheet());
  }
}

function refreshSummaryOnStructureChange_(event) {
  const structuralChanges = [
    'INSERT_ROW',
    'REMOVE_ROW',
    'INSERT_COLUMN',
    'REMOVE_COLUMN',
    'INSERT_GRID',
    'REMOVE_GRID'
  ];
  if (!event || !structuralChanges.includes(event.changeType)) return;

  updateScoreSummary_(event.source || SpreadsheetApp.getActiveSpreadsheet());
}

function installSummaryRefreshTrigger() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  ScriptApp.getProjectTriggers()
    .filter(trigger => trigger.getHandlerFunction() === 'refreshSummaryOnStructureChange_')
    .forEach(trigger => ScriptApp.deleteTrigger(trigger));

  ScriptApp.newTrigger('refreshSummaryOnStructureChange_')
    .forSpreadsheet(spreadsheet)
    .onChange()
    .create();
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Asesmen')
    .addItem('Perbarui Ringkasan Nilai', 'refreshScoreSummary')
    .addItem('Aktifkan Pembaruan Otomatis', 'installSummaryRefreshTrigger')
    .addToUi();
}
