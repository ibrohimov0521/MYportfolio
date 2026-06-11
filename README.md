# Javohir Ibrohimov Portfolio

Zamonaviy bir sahifalik portfolio / digital vizitka sayti. React + Vite, Tailwind CSS, Framer Motion va Lucide React bilan yaratilgan.

## O'rnatish

```bash
npm install
```

## Local ishga tushirish

```bash
npm run dev
```

Brauzerda ko'rsatilgan local URL ni oching, odatda:

```bash
http://localhost:5173
```

## Production build

```bash
npm run build
```

Build natijasi `dist` papkasida hosil bo'ladi.

## Sayt ma'lumotlarini sozlash

Asosiy sozlamalar bitta joyda:

```bash
src/data/siteData.js
```

Shu faylda quyidagilarni o'zgartirasiz:

- `initials`: logo matni, hozir `JI`
- `logoName`: logo yonidagi matn
- `logoImageUrl`: header logo rasmi, hozir `/logo.jpg`
- `firstName`, `lastName`, `role`: hero qismidagi asosiy matnlar
- `email`, `telegramUsername`, `telegramUrl`, `location`: kontakt ma'lumotlari
- `socialLinks`: Telegram, GitHub, LinkedIn, Instagram, YouTube linklari

Profil rasm qo'yish:

1. Rasmni `public/profile.jpg` nomi bilan joylang.
2. `src/data/siteData.js` ichida `imageUrl` qiymatini shunday qiling:

```js
imageUrl: '/profile.jpg',
```

Header logo rasmini almashtirish:

1. Yangi logoni `public/logo.jpg` sifatida joylang.
2. `src/data/siteData.js` ichida `logoImageUrl: '/logo.jpg'` bo'lib qoladi.

Loyihalar kartalarini o'zgartirish:

```bash
src/components/Projects.jsx
```

Texnologiyalar ro'yxatini o'zgartirish:

```bash
src/components/Skills.jsx
```

Kontakt formasi hozircha frontend alert/toast bilan ishlaydi. Uni Telegram bot, email servis yoki backendga ulash uchun:

```bash
src/components/Contact.jsx
```

## Cloudflare Pages deploy

1. Loyihani GitHub repository'ga yuklang.
2. Cloudflare Dashboard -> Workers & Pages -> Create application -> Pages bo'limiga o'ting.
3. GitHub repository'ni ulang.
4. Build sozlamalarini kiriting:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Deploy tugmasini bosing.

## bestgamers.win domenini ulash

1. Cloudflare Pages loyihasida `Custom domains` bo'limiga kiring.
2. `Set up a custom domain` tugmasini bosing.
3. Domen sifatida `bestgamers.win` kiriting.
4. Agar domen Cloudflare'da bo'lsa, DNS yozuvlari avtomatik yaratiladi.
5. Agar kerak bo'lsa, `www.bestgamers.win` uchun ham custom domain qo'shing.

## Asosiy komandalar

```bash
npm install
npm run dev
npm run build
```
