# LINNMS Landing Page — Operator Documentation

Folder template **`linnms-landingpage-tamplat/`** untuk repository koleksi **`plannethost/LandingPage`**.

Ini adalah **template kedua** yang berdiri sendiri, diletakkan sejajar dengan folder `Tech-Netnms/`; tidak mengganti, menghapus atau mencampurkan file template pertama.

## Tujuan
Landing page LINNMS Production dengan gaya dark-network, aksen biru/cyan, dan dokumentasi operasional yang fokus pada:
- `index.html`: pintu masuk dan navigasi topik.
- `docs.html`: instalasi Docker Compose/CasaOS, image, port, volume, kesehatan layanan dan upgrade.
- `oid.html`: OID standar MIB-II/IF-MIB, contoh cabang ZTE/HIOSO, GET/WALK, dan interpretasi.
- `troubleshooting.html`: pesan error GHCR, Docker, database, web, SNMP dan OID.
- `about.html`: batas cakupan dokumentasi.

Semua halaman menggunakan `styles.css` dan `script.js` tanpa framework, bundler, backend, atau aset gambar eksternal. Font dapat menggunakan Google Fonts, dengan fallback sistem saat jaringan offline.

## Menjalankan lokal

Buka `index.html` langsung atau jalankan dari folder:

```bash
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Catatan operasional
- Image production: `ghcr.io/ramonveredic/linnms`, dengan tag yang benar-benar sudah diterbitkan.
- File Compose rujukan: `RamonVeredic/LINNMS/deploy/`. Sesuaikan keamanan database sebelum deployment.
- OID enterprise ZTE (`1.3.6.1.4.1.3902`) dan HIOSO (`1.3.6.1.4.1.25355`) didasarkan pada cabang yang terlihat pada driver di `LINNMS-Staging`, bukan klaim bahwa setiap model/firmware mendukung seluruh sub-OID.
- Contoh IP, community dan tag versi adalah placeholder.
- Dokumentasi **tidak** memuat detail logika aplikasi.

## Desain
Komponen responsif, sidebar dokumentasi sticky, pencarian referensi OID, filter standar/vendor, pencarian error, panel troubleshooting expandable, tombol salin command dan navigasi mobile. Komponen tidak menyimulasikan metrik perangkat sungguhan.
