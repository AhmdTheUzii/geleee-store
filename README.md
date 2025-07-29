# 🏁 Geleee Store - WRC Exhaust Ordering Service

Website e-commerce untuk pemesanan knalpot racing WRC dengan sistem pembayaran transfer bank. Dibangun dengan HTML, CSS, JavaScript, dan Firebase untuk autentikasi dan database.

## 📋 Deskripsi

Geleee Store adalah platform pemesanan online khusus untuk produk knalpot racing WRC. Website ini menyediakan katalog produk lengkap, sistem keranjang belanja, dan proses checkout yang mudah dengan pembayaran via transfer bank.

## ✨ Fitur Utama

### 🛍 E-commerce
- *Katalog Produk*: Tampilan produk dengan gambar, harga, dan rating
- *Sistem Keranjang*: Tambah/hapus produk dengan localStorage
- *Checkout*: Form pemesanan dengan upload bukti transfer
- *Filter & Search*: Pencarian dan filter berdasarkan harga, brand, dll

### 🔐 Autentikasi
- *Login/Register*: Sistem autentikasi dengan Firebase Auth
- *Dashboard*: Panel admin untuk manajemen pesanan
- *Session Management*: Manajemen sesi user yang aman

### 💬 Review & Rating
- *Sistem Review*: User dapat memberikan rating dan review produk
- *Upload Foto*: Upload foto review dengan preview
- *Filter Review*: Filter berdasarkan rating dan tipe review

### 💳 Pembayaran
- *Transfer Bank*: Pembayaran via transfer SeaBank
- *Upload Bukti*: Upload bukti transfer dengan validasi
- *Konfirmasi*: Sistem konfirmasi pembayaran

### 📧 Notifikasi Email
- *EmailJS Integration*: Notifikasi pesanan otomatis ke admin
- *Email Template*: Template email profesional dengan detail pesanan
- *Real-time Notification*: Admin mendapat email setiap ada pesanan baru
- *Order Details*: Email berisi detail lengkap customer dan produk

## 🛠 Teknologi yang Digunakan

### Frontend
- *HTML5*: Struktur website yang semantic
- *CSS3*: Styling modern dengan gradient dan animasi
- *JavaScript (ES6+)*: Interaktivitas dan logika aplikasi
- *Responsive Design*: Mobile-first approach

### Backend & Database
- *Firebase Authentication*: Sistem login/register
- *Firebase Firestore*: Database untuk review dan data user
- *LocalStorage*: Penyimpanan keranjang belanja

### Email Service
- *EmailJS*: Service untuk pengiriman email otomatis
- *Gmail SMTP*: Integrasi dengan Gmail untuk notifikasi

### External Libraries
- *Google Fonts*: Inter, Poppins, Raleway
- *Firebase SDK*: Untuk integrasi Firebase
- *EmailJS SDK v4*: Untuk pengiriman email

## 📁 Struktur File


wrc-landing/
├── index.html              # Halaman utama/landing
├── shop.html               # Halaman katalog produk
├── product.html            # Detail produk & review
├── checkout.html           # Halaman checkout + EmailJS
├── dashboard.html          # Panel admin
├── 404.html               # Halaman error
├── style.css              # Stylesheet utama
├── script.js              # JavaScript utama
├── README.md              # Dokumentasi
├── racing-car.svg         # Icon racing
├── Dashhorizon-eZ5wg.otf  # Font custom
└── images/                # Folder gambar produk
    ├── bc02-sundblue.jpg
    ├── ss02-sundblue.jpg
    ├── kawa-style-sundblue.jpg
    ├── varky-v2-sundblue.jpg
    ├── ss02-stainless.jpg
    ├── kajaz-style-stainless.jpg
    ├── ss02-bluecoating.jpg
    ├── blackstyle.jpg
    └── std-racing.jpg


## 🚀 Cara Setup & Install

### Prerequisites
- Web browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet untuk Firebase dan EmailJS
- Live server (untuk development)

### Installation

1. *Clone Repository*
   bash
   git clone https://github.com/AhmdTheUzii/geleee-store.git
   cd geleee-store
   

2. *Setup Firebase* (Opsional - untuk fitur login/review)
   - Buat project di [Firebase Console](https://console.firebase.google.com/)
   - Aktifkan Authentication dan Firestore
   - Update konfigurasi Firebase di file HTML

3. *Setup EmailJS* (Untuk notifikasi email)
   - Daftar di [EmailJS.com](https://www.emailjs.com/)
   - Buat Email Service (Gmail)
   - Buat Email Template untuk notifikasi pesanan
   - Copy Public Key, Service ID, dan Template ID
   - Update konfigurasi di checkout.html

4. *Jalankan Website*
   bash
   # Menggunakan live-server
   npx live-server --port=5500
   
   # Atau buka file index.html langsung di browser
   

5. *Akses Website*
   - Buka browser dan akses http://localhost:5500
   - Website siap digunakan!

## ⚙ Konfigurasi EmailJS

### Setup Email Service
1. *Login ke EmailJS Dashboard*
2. *Buat Email Service*:
   - Pilih Gmail
   - Hubungkan dengan akun Gmail admin (geleeestore@gmail.com)
   
3. *Buat Email Template*:
   - Template ID: template_ervqrko
   - Subject: 🛒 Pesanan Baru - {{order_id}}
   - To Email: geleeestore@gmail.com
   - Body: Gunakan template HTML dengan variables seperti {{user_name}}, {{order_id}}, dll

### Konfigurasi Code
javascript
// Di checkout.html
emailjs.init("hSfrxGebd1Souwi75"); // Public Key
emailjs.send('service_e6j111d', 'template_ervqrko', templateParams); // Service ID & Template ID


### Template Variables
Template email mendukung variables berikut:
- {{user_name}} - Nama customer
- {{user_email}} - Email customer  
- {{user_phone}} - No. HP customer
- {{user_address}} - Alamat customer
- {{order_id}} - ID pesanan
- {{order_time}} - Waktu pesanan
- {{orders}} - Array produk yang dipesan
- {{cost_shipping}} - Biaya ongkir
- {{cost_total}} - Total pembayaran

## 🎯 Cara Penggunaan

### Untuk Customer
1. *Browse Produk*: Lihat katalog di halaman Shop
2. *Tambah ke Keranjang*: Klik "Tambah ke Keranjang"
3. *Checkout*: Klik icon keranjang → "Checkout"
4. *Isi Form*: Lengkapi data pemesanan
5. *Upload Bukti Transfer*: Upload bukti pembayaran
6. *Konfirmasi*: Tunggu konfirmasi dari admin (email otomatis terkirim)

### Untuk Admin
1. *Login*: Akses dashboard dengan akun admin
2. *Cek Email*: Notifikasi pesanan masuk ke Gmail
3. *Kelola Pesanan*: Lihat dan update status pesanan
4. *Kelola Produk*: Tambah/edit/hapus produk
5. *Kelola Review*: Moderasi review customer

### Flow Notifikasi Email
1. Customer melakukan checkout
2. EmailJS otomatis mengirim email ke geleeestore@gmail.com
3. Email berisi detail lengkap pesanan dan customer
4. Admin dapat langsung memproses pesanan

## 💰 Informasi Pembayaran

### Rekening Transfer
- *Bank*: SeaBank
- *No. Rekening*: 901891511783
- *Atas Nama*: Muhammad Rakhi Albima

### Ketentuan
- Transfer hanya ke rekening atas nama "Muhammad Rakhi Albima"
- Wajib sertakan bukti transfer
- Konfirmasi pembayaran maksimal 1x24 jam
- Notifikasi email otomatis ke admin setiap ada pesanan

## 📞 Kontak & Support

### Social Media
- *Instagram*: [@Geleee_Store](https://instagram.com/Geleee_Store)
- *WhatsApp*: [081290210394](https://wa.me/6281290210394)

### Technical Support
- *Email*: support@geleee-store.com
- *GitHub Issues*: [Report Bug](https://github.com/AhmdTheUzii/geleee-store/issues)

## 🔧 Development

### Menambah Produk Baru
1. Edit array products di shop.html
2. Tambahkan gambar ke folder images/
3. Update data produk sesuai format

### Customisasi Email Template
1. Login ke EmailJS dashboard
2. Edit template template_ervqrko
3. Sesuaikan design dan content email
4. Test template dengan data sample

### Customisasi Style
- Edit file style.css untuk mengubah tampilan
- Gunakan CSS variables untuk konsistensi warna
- Responsive design sudah dioptimasi

### Firebase Integration
- Update firebaseConfig di file HTML
- Setup Firestore rules untuk keamanan
- Konfigurasi Authentication providers

## 🐛 Troubleshooting

### Masalah Umum
1. *Gambar tidak muncul*: Pastikan path file benar
2. *Firebase error*: Cek konfigurasi dan koneksi internet
3. *LocalStorage error*: Clear browser cache
4. *Upload gagal*: Cek ukuran file (max 2MB)

### EmailJS Issues
1. *Email tidak terkirim*: 
   - Cek Public Key, Service ID, Template ID
   - Pastikan email service aktif di dashboard
   - Cek console browser untuk error
   
2. *Email masuk ke Sent bukan Inbox*:
   - Gunakan email admin yang berbeda dari pengirim
   - Atau buat email khusus untuk notifikasi
   
3. *Template error*: 
   - Pastikan semua variables ada di template
   - Cek format data yang dikirim ke EmailJS
   
4. *Rate limit error*:
   - EmailJS memiliki limit pengiriman per bulan
   - Upgrade plan jika perlu

### Debug Mode
- Buka Developer Tools (F12)
- Cek Console untuk error messages
- Network tab untuk masalah loading
- Test EmailJS dengan data sample

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📈 Roadmap

### Versi Selanjutnya
- [ ] Sistem notifikasi real-time
- [ ] Integrasi payment gateway
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] Advanced search filters
- [ ] WhatsApp notification integration
- [ ] SMS notification
- [ ] Email confirmation untuk customer

### Performance Optimization
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Service Worker for PWA
- [ ] CDN integration
- [ ] Email template optimization

---

*Dibuat dengan ❤ oleh Geleee Store Team*

Last updated: January 2025
