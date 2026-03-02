# CodiXQR Kurumsal Web Sitesi

CodiXQR yazılım firmasının kurumsal tanıtım sitesi.

## Özellikler

- **Hero**: Technopark onayı, global operasyon ve Avrupa şirketi rozetleri
- **SaaS Ürünleri**: RestXQR ve RoomXQR için öne çıkan kartlar ve doğrudan yönlendirme
- **Hizmetler**: Yazılım geliştirme, SaaS, dijital dönüşüm, CRM
- **Projeler**: Glowup, Glaskauf, KreşIQ, Rent-ex, Europacifictrade, Listeperspektive
- **Toplumsal Katkı**: Vakıf projeleri ve gönüllü faaliyetler
- **Ortaklar**: Xezmet IT, bpajans, artistiCreativity, Metechnik
- **İletişim Formu**: RestXQR / RoomXQR / özel proje seçenekleri

## Kurulum

1. Bu klasörü bir web sunucusunda veya statik host'ta yayınlayın
2. RestXQR ve RoomXQR linklerini `index.html` içinde güncelleyin (restxqr.com, roomxqr.com)
3. İletişim formu için backend/API entegrasyonu ekleyebilirsiniz

## Yerel Önizleme

```bash
# Python ile
python -m http.server 8000

# Node.js (npx) ile
npx serve .
```

Tarayıcıda `http://localhost:8000` adresine gidin.

## Güncellenecek Alanlar

- `info@codixqr.com` → gerçek e-posta adresiniz
- RestXQR / RoomXQR URL'leri → gerçek ürün sayfaları
- İletişim formu → Formspree, Netlify Forms veya kendi API'niz
