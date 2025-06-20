# TastyApp 🍽️

TastyApp adalah aplikasi pencarian resep berbasis React + TailwindCSS yang menggunakan Tasty API dari RapidAPI. Aplikasi ini memungkinkan pengguna untuk mencari resep makanan lengkap dengan gambar, deskripsi, dan tautan menuju instruksi memasak.

## 🚀 Cara Menjalankan Aplikasi

1. **Clone repositori ini**

```bash
git clone https://github.com/devina36/tastyapp.git
cd tastyapp
```

2. **Install dependensi**

```bash
npm install
```

3. **Setup environment variable**
   Buat file `.env` di root folder dan isi:

```env
VITE_RAPIDAPI_KEY=your-rapidapi-key
```

4. **Jalankan aplikasi**

```bash
npm run dev
```

5. **Buka di browser**
   Akses [http://localhost:5173](http://localhost:5173) di browser.

---

## 📦 Fitur Aplikasi

### 🔍 Home Page

- Hero section dengan penjelasan aplikasi
- Ringkasan singkat tentang fitur

### 🧾 Product Page

- Menampilkan list resep makanan dari Tasty API
- Fitur pencarian resep berdasarkan kata kunci
- Tampilan responsif menggunakan ShadCN UI dan Tailwind

### 📄 About Page

- Penjelasan tentang TastyApp
- Kontak pengembang (email support)

---

## 🛠 Teknologi

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadCN UI](https://ui.shadcn.dev/)
- [React Router](https://reactrouter.com/)
- [Tasty API (via RapidAPI)](https://rapidapi.com/apidojo/api/tasty)
