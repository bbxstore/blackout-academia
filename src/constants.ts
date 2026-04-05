export const GYM_INFO = {
  name: 'BLACKOUT ACADEMIA',
  address: 'R. Aureliano Lessa, 97 - Ramos, Rio de Janeiro - RJ, 21060-080',
  phone: '(21) 3269-8030',
  whatsapp: '552132698030',
  instagram: 'https://www.instagram.com/acadblackout/',
  hours: {
    weekdays: '06h às 22h',
    saturday: '08h às 14h',
    sunday: 'Fechado',
  },
};

export const WHATSAPP_MESSAGES = {
  general: 'Olá! Vim pelo site da Blackout Academia e quero saber mais sobre os planos e horários.',
  enrollment: 'Olá! Vim pelo site da Blackout Academia e quero começar a treinar. Pode me passar os planos?',
  classes: 'Olá! Vim pelo site da Blackout Academia e quero saber mais sobre as aulas coletivas e horários.',
  offer: 'Olá! Vim pelo site da Blackout Academia e quero saber mais sobre a condição do Plano Blackout Year.',
  visit: 'Olá! Vim pelo site da Blackout Academia e gostaria de conhecer a academia.',
};

export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=R.+Aureliano+Lessa,+97+-+Ramos,+Rio+de+Janeiro+-+RJ,+21060-080';
export const MAPS_EMBED_URL = 'https://www.google.com/maps?q=R.+Aureliano+Lessa,+97+-+Ramos,+Rio+de+Janeiro+-+RJ,+21060-080&output=embed';

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${GYM_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
};
