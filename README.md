# Geleee Store - Landing Page & Product Review

Landing page dan halaman produk untuk toko knalpot motor, dengan fitur review produk, login/register via Firebase, dan komentar persistent menggunakan Firestore.

---

## ✨ Fitur Utama
- **Landing Page Modern**: Desain responsif, clean, dan profesional.
- **Halaman Produk Detail**: Galeri gambar, deskripsi, harga, stok, dan review.
- **Review & Komentar Produk**:
  - User bisa menulis review (rating, komentar, upload foto, dsb).
  - Komentar/review langsung tersimpan di Firestore (bukan hanya lokal).
  - Komentar bisa di-filter, sort, dan like.
  - Hanya user login yang bisa menulis review.
  - User bisa edit & hapus komentarnya sendiri.
- **Login/Register**: Menggunakan Firebase Authentication (email & password).
- **Persistent Data**: Semua komentar/review tetap ada meski di-refresh atau deploy ulang.
- **Keranjang Belanja**: Simpan produk ke keranjang (localStorage).

---

## 🗂️ Struktur File

```
├── index.html           # Landing page utama
├── shop.html            # Halaman katalog produk
├── product.html         # Halaman detail produk + review
├── dashboard.html       # (Opsional) Halaman admin/dashboard
├── style.css            # Semua styling utama
├── script.js            # (Jika ada, untuk logic tambahan)
├── images/              # Folder gambar produk
├── ...
```

---

## ⚙️ Cara Setup & Jalankan Lokal

1. **Clone repo ini**
2. Pastikan sudah punya Node.js (untuk live-server, opsional)
3. Jalankan di lokal (opsi):
   ```bash
   npx live-server --port=5500
   # atau buka index.html langsung di browser
   ```
4. **Konfigurasi Firebase**
   - Sudah include di `<script>` pada setiap file HTML (lihat bagian `<head>` di product.html)
   - Ganti config Firebase jika pakai project sendiri

---

## ☁️ Cara Deploy ke Vercel

1. **Push semua file ke GitHub**
2. **Login ke [vercel.com](https://vercel.com/)**
3. **Import project dari GitHub**
4. **Build Command:** *(kosongkan)*
5. **Output Directory:** `.` (titik, jika semua file di root)
6. **Environment Variables:** *(tidak perlu, kecuali ingin menyembunyikan config)*
7. **Deploy!**
8. Setelah deploy, cek domain vercel kamu. Semua fitur Firebase tetap berjalan.

---

## 🔒 Catatan Penting
- **API Key Firebase** tetap aman untuk frontend (tidak bisa akses data sensitif tanpa rules yang benar).
- **Authorized Domains:** Setelah deploy, tambahkan domain vercel kamu di Firebase Console > Authentication > Authorized domains.
- **Rules Firestore:** Pastikan rules Firestore sudah benar agar hanya user login yang bisa menulis/mengedit/menghapus komentarnya sendiri.
- **Gambar upload**: Untuk demo, gambar review hanya disimpan sebagai data URL (base64). Untuk produksi, gunakan Firebase Storage.

---

## 🚀 Spesifikasi Teknis
- **Frontend:** HTML, CSS, JS vanilla (tanpa framework)
- **Auth & Database:** Firebase Auth & Firestore
- **Deploy:** Vercel (static hosting)
- **Fitur CRUD Komentar:**
  - Create: User login bisa submit review
  - Read: Semua komentar diambil dari Firestore
  - Update: User bisa edit komentarnya sendiri
  - Delete: User bisa hapus komentarnya sendiri

---

## 👨‍💻 Pengembangan Lanjutan
- Integrasi Firebase Storage untuk upload gambar review
- Dashboard admin untuk moderasi komentar
- Notifikasi real-time (Firestore listener)
- Responsive improvement & dark mode

---

## 📞 Kontak & Kontribusi
- Project ini open source, silakan fork & kembangkan!
- Untuk pertanyaan, hubungi: [your-email@example.com]

---

Selamat mencoba & semoga sukses dengan project-mu! 