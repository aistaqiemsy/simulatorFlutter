const EXAM_CONFIG = {
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
      participant
    };
  }

  if (action === 'questions') {
    const questions = EXAM_QUESTIONS.map(({ id, question, options }) => ({ id, question, options }));
    for (let index = questions.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [questions[index], questions[randomIndex]] = [questions[randomIndex], questions[index]];
    }

    return {
      success: true,
      questions
    };
  }

  if (action === 'submit') {
    return saveExamResult_(nis, parameters);
  }

  return { success: false, message: 'Aksi ujian tidak dikenal.' };
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
  let answers;
  try {
    answers = JSON.parse(parameters.answers || '{}');
  } catch (error) {
    return { success: false, message: 'Data jawaban tidak valid. Silakan ulangi ujian.' };
  }
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) {
    return { success: false, message: 'Format jawaban tidak valid.' };
  }

  const correct = EXAM_QUESTIONS.reduce(
    (total, question) => total + (answers[question.id] === question.answer ? 1 : 0),
    0
  );
  const total = EXAM_QUESTIONS.length;
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(EXAM_CONFIG.resultSheet);
    if (!sheet) sheet = spreadsheet.insertSheet(EXAM_CONFIG.resultSheet);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['No. Ujian', 'Waktu', 'NIS', 'Nilai (%)', 'Benar', 'Jumlah Soal', 'Jawaban']);
    }

    const attemptNumber = sheet.getLastRow();
    const previousAttempts = attemptNumber > 1
      ? sheet.getRange(2, 3, attemptNumber - 1, 1).getDisplayValues()
        .some(([previousNis]) => String(previousNis).trim() === nis)
      : false;
    const rawScore = Math.round((correct / total) * 100);
    const score = previousAttempts
      ? Math.min(rawScore, EXAM_CONFIG.passingScore)
      : rawScore;
    const row = attemptNumber + 1;
    sheet.getRange(row, 1, 1, 3).setNumberFormat('@');
    sheet.getRange(row, 4, 1, 3).setNumberFormat('0');
    sheet.getRange(row, 7, 1, 1).setNumberFormat('@');
    sheet.getRange(row, 1, 1, 7).setValues([[
      String(attemptNumber),
      new Date().toISOString(),
      nis,
      score,
      correct,
      total,
      JSON.stringify(answers)
    ]]);
    updateScoreSummary_(spreadsheet);

    return {
      success: true,
      attemptNumber,
      score,
      correct,
      total,
      passed: score >= EXAM_CONFIG.passingScore
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
