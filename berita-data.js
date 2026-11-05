/**
 * =============================================================================
 *  COSWEET - PUSAT DATA & KONTEN BERITA EDUKASI (berita-data.js)
 * =============================================================================
 *  Halo Developer! File ini dibuat khusus untuk mempermudah pengelolaan berita.
 *  
 *  KEUNTUNGAN SISTEM INI:
 *  1. Satu Tempat untuk Semua: Judul, ringkasan, gambar, dan isi artikel diatur di sini.
 *  2. Otomatis Sinkron: Mengubah teks di sini langsung mengubah tampilan di Card Berita
 *     maupun Pop-up Modal Baca secara bersamaan.
 *  3. Mudah Menambah Berita: Cukup duplikasi (copy-paste) salah satu objek artikel
 *     di bawah untuk menambah berita baru ke-4, ke-5, dst.
 * 
 *  CARA MENGEDIT CEPAT:
 *  - Cukup ubah teks di dalam tanda kutip "..."
 *  - Tekan Ctrl + S untuk menyimpan, lalu refresh browser Anda!
 * =============================================================================
 */

var BERITA_DATA = [
    {
        id: "berita-1",
        kategori: "Kesehatan",
        kategoriIcon: "fa-heart-pulse",
        tanggal: "10 Sep 2026",
        waktuBaca: "4 Menit Baca",
        penulis: "Tim Edukasi Nutrisi CoSweet",
        inisialPenulis: "CS",
        keteranganPenulis: "Ditinjau oleh Ahli Pangan • 10 September 2026",
        gambar: "assets/berita/berita-manfaat-gula-kelapa.jpg",
        captionGambar: "Pemanis alami gula kelapa mempertahankan kandungan nutrisi esensial yang hilang pada proses pemurnian gula tebu rafinasi.",
        judul: "Manfaat Gula Kelapa Alami dibanding Gula Pasir untuk Gaya Hidup Sehat",
        ringkasan: "Kenali keunggulan gula kelapa alami dengan indeks glikemik rendah, serat prebiotik inulin, dan kaya mineral esensial untuk menjaga kestabilan energi tubuh.",
        konten: [
            {
                tipe: "pembuka",
                teks: "Dalam beberapa tahun terakhir, kesadaran masyarakat akan bahaya konsumsi gula berlebih semakin meningkat. Gula kelapa alami (coconut sugar) asal Banyumas kini menjadi primadona sebagai alternatif pemanis alami yang jauh lebih ramah terhadap metabolisme tubuh."
            },
            {
                tipe: "subjudul",
                teks: "1. Indeks Glikemik Rendah (Low GI)"
            },
            {
                tipe: "paragraf",
                teks: "Salah satu keunggulan terbesar gula kelapa alami adalah skor <strong>Indeks Glikemik (GI) yang rendah, yakni berkisar 35</strong>, berbanding jauh dengan gula pasir tebu yang memiliki GI antara 65 hingga 70."
            },
            {
                tipe: "highlight",
                judul: "Mengapa Skor GI Penting?",
                teks: "Indeks Glikemik mengukur seberapa cepat makanan memicu kenaikan gula darah. Makanan dengan GI rendah diserap secara perlahan, sehingga tidak menimbulkan lonjakan gula darah dan penurunan energi drastis (<em>sugar crash</em>)."
            },
            {
                tipe: "subjudul",
                teks: "2. Mengandung Serat Prebiotik Inulin"
            },
            {
                tipe: "paragraf",
                teks: "Gula kelapa alami mengandung serat larut bernama <strong>Inulin</strong>. Serat ini memperlambat penyerapan glukosa ke dalam aliran darah sekaligus bertindak sebagai makanan bagi bakteri baik di saluran pencernaan, membantu memelihara kesehatan usus."
            },
            {
                tipe: "subjudul",
                teks: "3. Kaya Mineral Esensial & Antioksidan"
            },
            {
                tipe: "paragraf",
                teks: "Berbeda dengan gula pasir putih yang melalui proses rafinasi kimiawi hingga hanya menyisakan kalori kosong, gula kelapa diproses secara minimal sehingga tetap mempertahankan mikronutrien penting:"
            },
            {
                tipe: "list",
                items: [
                    "<strong>Kalium (Potassium):</strong> Membantu mengontrol tekanan darah dan keseimbangan elektrolit.",
                    "<strong>Magnesium:</strong> Mendukung fungsi saraf, kontraksi otot, dan metabolisme energi.",
                    "<strong>Zat Besi & Seng (Zinc):</strong> Mendukung imunitas dan pembentukan sel darah merah.",
                    "<strong>Polifenol:</strong> Senyawa antioksidan alami penangkal radikal bebas."
                ]
            },
            {
                tipe: "subjudul",
                teks: "4. Bebas Bahan Kimia & Pengawet Sulfit"
            },
            {
                tipe: "paragraf",
                teks: "Gula kelapa alami <strong>CoSweet</strong> diproduksi dari nira murni Karanglewas tanpa pemutih sintetis, pengawet sulfit, atau campuran pemanis buatan. Cita rasanya gurih manis berpadu aroma karamel khas yang lembut."
            },
            {
                tipe: "tips",
                judul: "Tips Sehat Sehari-hari:",
                icon: "fa-lightbulb",
                teks: "Gunakan 1 sendok teh gula semut kristal CoSweet untuk secangkir kopi hitam, teh hijau, atau seduhan jahe hangat Anda. Anda mendapatkan kenikmatan manis alami dengan ketenangan pikiran."
            }
        ]
    },
    {
        id: "berita-2",
        kategori: "Resep & Baking",
        kategoriIcon: "fa-cake-candles",
        tanggal: "05 Sep 2026",
        waktuBaca: "5 Menit Baca",
        penulis: "Chef Pastry & R&D CoSweet",
        inisialPenulis: "CK",
        keteranganPenulis: "Panduan Dapur Sehat • 05 September 2026",
        gambar: "assets/berita/berita-resep-kue.jpg",
        captionGambar: "Aroma karamel khas dari gula kelapa alami memberikan kedalaman rasa istimewa pada sajian kue keluarga.",
        judul: "Tips Praktis Mengganti Pemanis untuk Resep Kue & Pastry Sehat",
        ringkasan: "Ingin baking kue yang lebih sehat untuk keluarga? Berikut adalah panduan takaran konversi penggunaan gula kelapa kristal pengganti gula pasir dalam resep Anda.",
        konten: [
            {
                tipe: "pembuka",
                teks: "Membuat kue (baking) sehat tanpa mengorbankan kelezatan rasa kini bukan lagi hal yang mustahil. Gula kelapa kristal alami CoSweet adalah sahabat terbaik para pecinta pastry yang ingin mengurangi konsumsi gula rafinasi."
            },
            {
                tipe: "subjudul",
                teks: "1. Rasio Konversi 1:1 yang Sangat Mudah"
            },
            {
                tipe: "paragraf",
                teks: "Kabar baiknya, Anda tidak memerlukan rumus rumit! Gula kelapa kristal CoSweet memiliki tingkat kemanisan yang hampir sama dengan gula pasir putih, sehingga dapat diganti dengan rasio <strong>1:1 (1 cangkir gula pasir = 1 cangkir gula kelapa)</strong>."
            },
            {
                tipe: "subjudul",
                teks: "2. Karakteristik Rasa Karamel Hangat"
            },
            {
                tipe: "paragraf",
                teks: "Gula kelapa tidak berasa kelapa gurih melainkan memiliki profil rasa mirip <em>brown sugar</em> dengan sentuhan karamel hangat (<em>butterscotch note</em>). Sangat cocok untuk resep:"
            },
            {
                tipe: "list",
                items: [
                    "Fudgy Chocolate Brownies & Choco Chip Cookies",
                    "Bolu Pisang (Banana Bread) & Carrot Cake",
                    "Apple Cinnamon Pie & Oatmeal Muffin",
                    "Saus Karamel Sehat untuk Pancake & Waffle"
                ]
            },
            {
                tipe: "subjudul",
                teks: "3. Perhatikan Suhu Oven & Karamelisasi"
            },
            {
                tipe: "paragraf",
                teks: "Karena gula kelapa memiliki titik leleh dan titik karamelisasi sedikit lebih rendah dibanding sukrosa murni, ikuti tips berikut agar adonan tidak cepat gelap:"
            },
            {
                tipe: "grid-cards",
                cards: [
                    {
                        icon: "fa-temperature-arrow-down",
                        iconColor: "text-caramel",
                        judul: "Turunkan Suhu Oven",
                        teks: "Turunkan suhu oven sekitar 5°C - 10°C dari resep standar agar kue matang merata tanpa gosong."
                    },
                    {
                        icon: "fa-droplet",
                        iconColor: "text-blue-500",
                        judul: "Jaga Kelembapan",
                        teks: "Gula kelapa mengikat kelembapan dengan baik, menghasilkan tekstur cookies yang renyah di luar dan lembut di dalam."
                    }
                ]
            },
            {
                tipe: "subjudul",
                teks: "4. Resep Singkat: Healthy Banana Muffin"
            },
            {
                tipe: "resep",
                judul: "Bahan-Bahan Utama:",
                bahan: [
                    "3 buah pisang matang (dihaluskan)",
                    "100 gr Gula Semut CoSweet",
                    "1 butir telur & 60 ml minyak kelapa",
                    "150 gr tepung gandum utuh / tepung oat",
                    "1 sdt kayu manis bubuk & 1/2 sdt baking powder"
                ],
                catatan: "Panggang pada suhu 175°C selama 20-25 menit. Nikmati aroma karamel wangi yang menggugah selera!"
            }
        ]
    },
    {
        id: "berita-3",
        kategori: "Cerita Petani",
        kategoriIcon: "fa-tree",
        tanggal: "28 Agu 2026",
        waktuBaca: "6 Menit Baca",
        penulis: "Tim Pemberdayaan Petani CoSweet",
        inisialPenulis: "KB",
        keteranganPenulis: "Liputan Lapangan Karanglewas • 28 Agustus 2026",
        gambar: "assets/berita/berita-penyadapan-nira.jpg",
        captionGambar: "Pemandangan pagi hari di perkebunan kelapa Karanglewas, Banyumas, tempat nira murni disadap setiap subuh.",
        judul: "Proses Penyadapan Nira di Karanglewas: Dedikasi & Tradisi Manis Banyumas",
        ringkasan: "Melihat lebih dekat keseharian para penderes nira kelapa di Karanglewas, Banyumas. Dedikasi mereka adalah kunci kualitas premium CoSweet.",
        konten: [
            {
                tipe: "pembuka",
                teks: "Saat fajar baru saja menyingsing di lereng barat Banyumas, derit bambu dan ayunan langkah para penderes kelapa (<em>penyadap nira</em>) telah memecah keheningan Karanglewas. Dari ketangguhan merekalah butiran manis CoSweet tercipta."
            },
            {
                tipe: "subjudul",
                teks: "1. Meniti Ketinggian 15-20 Meter Dua Kali Sehari"
            },
            {
                tipe: "paragraf",
                teks: "Pekerjaan penderes nira menuntut stamina prima dan ketelitian tinggi. Setiap hari, saat subuh dan menjelang senja, mereka memanjat puluhan pohon kelapa menjulang. Tanpa tali pengaman modern, hanya berbekal tangga bambu (<em>ondhe</em>) dan keberanian bertahun-tahun."
            },
            {
                tipe: "paragraf",
                teks: "Mayang bunga kelapa yang belum mekar disayat tipis dengan pisau arit yang sangat tajam. Tetes demi tetes cairan bening manis mengalir ke dalam bumbung bambu penampung (<em>pongkor</em>)."
            },
            {
                tipe: "subjudul",
                teks: "2. Inovasi Higienis Bebas Sulfit (Sulfit-Free)"
            },
            {
                tipe: "paragraf",
                teks: "Tantangan terbesar nira segar adalah mudahnya terfermentasi menjadi asam (tuak) jika terkena mikroba. Di masa lampau, banyak perajin menggunakan natrium metabisulfit kimiawi untuk mengawetkan."
            },
            {
                tipe: "highlight",
                judul: "Standar Alami CoSweet:",
                teks: "Petani mitra CoSweet diedukasi menggunakan ramuan alami dari ekstrak kulit manggis, kapur sirih murni, dan getah kayu nangka untuk menjaga pH nira tetap manis segar, menghasilkan produk akhir yang <strong>100% Alami & Bebas Sulfit</strong>."
            },
            {
                tipe: "subjudul",
                teks: "3. Evaporasi Tradisional Menjadi Kristal Emas"
            },
            {
                tipe: "paragraf",
                teks: "Nira segar yang terkumpul disaring rapat kemudian dimasak di atas wajan kuali besar menggunakan bahan bakar biomassa kayu bersih. Proses perebusan memakan waktu 3-4 jam dengan pengadukan berkesinambungan hingga air menguap dan tekstur berubah menjadi karamel kental (<em>pekat</em>)."
            },
            {
                tipe: "paragraf",
                teks: "Kuali kemudian diturunkan dan diaduk cepat dengan batok kelapa hingga terbentuk kristal-kristal halus yang harum. Setelah itu diayak (<em>disaring mesh</em>) dan dikeringkan higienis hingga kadar air di bawah 2%."
            },
            {
                tipe: "subjudul",
                teks: "4. Membangun Kesejahteraan Komunitas Banyumas"
            },
            {
                tipe: "paragraf",
                teks: "Didirikan oleh <strong>Elly Anggraeni pada tahun 2015</strong>, CoSweet memegang teguh prinsip <em>fair trade</em> (perdagangan berkeadilan). Kami membeli nira dan gula dengan harga premium yang stabil, menyediakan pelatihan higienitas, serta bantuan jaminan perlindungan bagi para penderes lokal di Karanglewas."
            }
        ]
    }
];

// Pastikan BERITA_DATA langsung dapat diakses global
window.BERITA_DATA = BERITA_DATA;
