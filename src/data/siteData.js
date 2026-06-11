import { Github, Instagram, Linkedin, Send, Youtube } from 'lucide-react';

export const profile = {
  initials: 'JI',
  logoName: 'JAVOHIR',
  logoImageUrl: '/logo.jpg',
  firstName: 'Javohir',
  lastName: 'Ibrohimov',
  role: 'IT Developer / Telegram Bot Developer',
  location: "Buxoro, O'zbekiston",
  email: 'javohiribrohimov0521@gmail.com',
  telegramUsername: '@javohir_ibrohimov',
  telegramUrl: 'https://t.me/javohir_ibrohimov',
  // Profil rasm qo'yish: rasmni public ichiga saqlang va shu yo'lni yangilang.
  imageUrl: '/profile.png',
};

export const socialLinks = [
  { label: 'Telegram', icon: Send, href: profile.telegramUrl },
  { label: 'GitHub', icon: Github, href: 'https://github.com/' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com/' },
  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com/' },
];
