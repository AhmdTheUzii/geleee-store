# 🏁 Geleee Store - WRC Exhaust Ordering Service

Website e-commerce untuk pemesanan knalpot racing WRC dengan sistem pembayaran transfer bank. Dibangun dengan HTML, CSS, JavaScript, dan Firebase untuk autentikasi dan database.

## 📋 Deskripsi

Geleee Store adalah platform pemesanan online khusus untuk produk knalpot racing WRC. Website ini menyediakan katalog produk lengkap, sistem keranjang belanja, dan proses checkout yang mudah dengan pembayaran via transfer bank.

## ✨ Fitur Utama

### 🛍️ E-commerce
- **Katalog Produk**: Tampilan produk dengan gambar, harga, dan rating
- **Sistem Keranjang**: Tambah/hapus produk dengan localStorage
- **Checkout**: Form pemesanan dengan upload bukti transfer
- **Filter & Search**: Pencarian dan filter berdasarkan harga, brand, dll

### 🔐 Autentikasi
- **Login/Register**: Sistem autentikasi dengan Firebase Auth
- **Dashboard**: Panel admin untuk manajemen pesanan
- **Session Management**: Manajemen sesi user yang aman

### 💬 Review & Rating
- **Sistem Review**: User dapat memberikan rating dan review produk
- **Upload Foto**: Upload foto review dengan preview
- **Filter Review**: Filter berdasarkan rating dan tipe review

### 💳 Pembayaran
- **Transfer Bank**: Pembayaran via transfer SeaBank
- **Upload Bukti**: Upload bukti transfer dengan validasi
- **Konfirmasi**: Sistem konfirmasi pembayaran

## 🛠️ Teknologi yang Digunakan

### Frontend
- **HTML5**: Struktur website yang semantic
- **CSS3**: Styling modern dengan gradient dan animasi
- **JavaScript (ES6+)**: Interaktivitas dan logika aplikasi
- **Responsive Design**: Mobile-first approach

### Backend & Database
- **Firebase Authentication**: Sistem login/register
- **Firebase Firestore**: Database untuk review dan data user
- **LocalStorage**: Penyimpanan keranjang belanja

### External Libraries
- **Google Fonts**: Inter, Poppins, Raleway
- **Firebase SDK**: Untuk integrasi Firebase

## 📁 Struktur File

```
wrc-landing/
├── index.html              # Halaman utama/landing
├── shop.html               # Halaman katalog produk
├── product.html            # Detail produk & review
├── checkout.html           # Halaman checkout
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
    ├── kawa-style-sundblue .jpg
    ├── varky-v2-sundblue.jpg
    ├── ss02-stainless.jpg
    ├── kajaz-style-stainless.jpg
    ├── ss02-bluecoating.jpg
    ├── blackstyle.jpg
    └── std-racing.jpg
```

## 🚀 Cara Setup & Install

### Prerequisites
- Web browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet untuk Firebase
- Live server (untuk development)

### Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/AhmdTheUzii/geleee-store.git
   cd geleee-store
   ```

2. **Setup Firebase** (Opsional - untuk fitur login/review)
   - Buat project di [Firebase Console](https://console.firebase.google.com/)
   - Aktifkan Authentication dan Firestore
   - Update konfigurasi Firebase di file HTML

3. **Jalankan Website**
   ```bash
   # Menggunakan live-server
   npx live-server --port=5500
   
   # Atau buka file index.html langsung di browser
   ```

4. **Akses Website**
   - Buka browser dan akses `http://localhost:5500`
   - Website siap digunakan!

## 🎯 Cara Penggunaan

### Untuk Customer
1. **Browse Produk**: Lihat katalog di halaman Shop
2. **Tambah ke Keranjang**: Klik "Tambah ke Keranjang"
3. **Checkout**: Klik icon keranjang → "Checkout"
4. **Isi Form**: Lengkapi data pemesanan
5. **Upload Bukti Transfer**: Upload bukti pembayaran
6. **Konfirmasi**: Tunggu konfirmasi dari admin

### Untuk Admin
1. **Login**: Akses dashboard dengan akun admin
2. **Kelola Pesanan**: Lihat dan update status pesanan
3. **Kelola Produk**: Tambah/edit/hapus produk
4. **Kelola Review**: Moderasi review customer

## 💰 Informasi Pembayaran

### Rekening Transfer
- **Bank**: SeaBank
- **No. Rekening**: 901891511783
- **Atas Nama**: Muhammad Rakhi Albima

### Ketentuan
- Transfer hanya ke rekening atas nama "Muhammad Rakhi Albima"
- Wajib sertakan bukti transfer
- Konfirmasi pembayaran maksimal 1x24 jam

## 📞 Kontak & Support

### Social Media
- **Instagram**: [@Geleee_Store](https://instagram.com/Geleee_Store)
- **WhatsApp**: [081290210394](https://wa.me/6281290210394)

### Technical Support
- **Email**: support@geleee-store.com
- **GitHub Issues**: [Report Bug](https://github.com/AhmdTheUzii/geleee-store/issues)

## 🔧 Development

### Menambah Produk Baru
1. Edit array `products` di `shop.html`
2. Tambahkan gambar ke folder `images/`
3. Update data produk sesuai format

### Customisasi Style
- Edit file `style.css` untuk mengubah tampilan
- Gunakan CSS variables untuk konsistensi warna
- Responsive design sudah dioptimasi

### Firebase Integration
- Update `firebaseConfig` di file HTML
- Setup Firestore rules untuk keamanan
- Konfigurasi Authentication providers

## 🐛 Troubleshooting

### Masalah Umum
1. **Gambar tidak muncul**: Pastikan path file benar
2. **Firebase error**: Cek konfigurasi dan koneksi internet
3. **LocalStorage error**: Clear browser cache
4. **Upload gagal**: Cek ukuran file (max 2MB)

### Debug Mode
- Buka Developer Tools (F12)
- Cek Console untuk error messages
- Network tab untuk masalah loading

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📈 Roadmap

### Versi Selanjutnya
- [ ] Sistem notifikasi real-time
- [ ] Integrasi payment gateway
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] Advanced search filters

### Performance Optimization
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Service Worker for PWA
- [ ] CDN integration

---

**Dibuat dengan ❤️ oleh Geleee Store Team**

*Last updated: January 2025* 
