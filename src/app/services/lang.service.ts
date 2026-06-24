import { Injectable, signal, effect } from '@angular/core';

export type Lang = 'en' | 'ar';

export interface Translations {
  // Nav
  navHome: string;
  navStory: string;
  navDetails: string;
  navGallery: string;
  navContact: string;
  navRsvp: string;

  // Welcome
  welcomeEyebrow: string;
  welcomeHeading: string;
  welcomeTap: string;

  // Hero
  heroEyebrow: string;
  heroRequest: string;
  heroDateLabel: string;
  heroDateValue: string;
  heroTimeLabel: string;
  heroTimeValue: string;
  heroScroll: string;

  // Countdown
  countdownEyebrow: string;
  countdownTitle: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;
  countdownTagline: string;
  countdownDate: string;

  // Gallery
  galleryEyebrow: string;
  galleryTitle: string;
  gallerySubtitle: string;
  galleryCaption1Date: string;
  galleryCaption1Text: string;
  galleryCaption2Date: string;
  galleryCaption2Text: string;
  galleryQuote: string;
  galleryQuoteAuthor: string;

  // Event Details
  eventEyebrow: string;
  eventTitle: string;
  eventSubtitle: string;
  eventCardTitle: string;
  eventDate: string;
  eventTime: string;
  eventAddressName: string;
  eventAddressDetail: string;
  eventMapBtn: string;

  // RSVP
  rsvpEyebrow: string;
  rsvpTitle: string;
  rsvpSubtitle: string;
  rsvpNameLabel: string;
  rsvpNamePlaceholder: string;
  rsvpAttendingLabel: string;
  rsvpAttendingPlaceholder: string;
  rsvpAccept: string;
  rsvpDecline: string;
  rsvpGuestsLabel: string;
  rsvpWishesLabel: string;
  rsvpWishesPlaceholder: string;
  rsvpSend: string;
  rsvpSending: string;
  rsvpNote: string;

  // Contact
  contactEyebrow: string;
  contactTitle: string;
  contactSubtitle: string;
  contactPhone: string;
  contactWhatsapp: string;
  contactEmail: string;
  contactInstagram: string;

  // Footer
  footerNote: string;

  // Toast messages
  toastSuccess: string;
  toastSad: string;
  toastError: string;
}

const EN: Translations = {
  navHome: 'Home',
  navStory: 'Our Story',
  navDetails: 'Details',
  navGallery: 'Gallery',
  navContact: 'Contact',
  navRsvp: 'RSVP',

  welcomeEyebrow: 'YOU HAVE RECEIVED A',
  welcomeHeading: 'Wedding Invitation',
  welcomeTap: 'tap to open',

  heroEyebrow: 'Together with their families',
  heroRequest: 'Request the honour of your presence\nat their wedding celebration',
  heroDateLabel: 'Date',
  heroDateValue: 'Friday, July 24th, 2026',
  heroTimeLabel: 'Time',
  heroTimeValue: '9:20 PM Onwards',
  heroScroll: 'Scroll',

  countdownEyebrow: 'The Big Day',
  countdownTitle: 'Counting Down Together',
  countdownDays: 'Days',
  countdownHours: 'Hours',
  countdownMinutes: 'Minutes',
  countdownSeconds: 'Seconds',
  countdownTagline: 'Counting the days to our forever',
  countdownDate: 'Friday, 24th July 2026',

  galleryEyebrow: 'Our Journey',
  galleryTitle: 'Our Story',
  gallerySubtitle: 'From a simple "I love you" to forever',
  galleryCaption1Date: '24 July 2024',
  galleryCaption1Text: 'First "Tetgawzeeny!"',
  galleryCaption2Date: '11 November 2024',
  galleryCaption2Text: 'Our Engagement',
  galleryQuote: 'Two souls with but a single thought, two hearts that beat as one.',
  galleryQuoteAuthor: '— John Keats',

  eventEyebrow: 'Celebration Details',
  eventTitle: 'When & Where',
  eventSubtitle: 'We look forward to celebrating with you',
  eventCardTitle: 'Katb-Ketab',
  eventDate: 'Friday, 24 July 2026',
  eventTime: '9:20 PM',
  eventAddressName: 'Click Below for Location',
  eventAddressDetail: 'We look forward to seeing you there',
  eventMapBtn: 'View on Map',

  rsvpEyebrow: 'Join the Celebration',
  rsvpTitle: 'RSVP',
  rsvpSubtitle: 'Kindly respond by 24th June, 2026',
  rsvpNameLabel: 'Full Name(s)',
  rsvpNamePlaceholder: 'e.g. John & Jane Doe',
  rsvpAttendingLabel: 'Attending?',
  rsvpAttendingPlaceholder: 'Please choose…',
  rsvpAccept: 'Joyfully Accept',
  rsvpDecline: 'Regretfully Decline',
  rsvpGuestsLabel: 'Number of Guests',
  rsvpWishesLabel: 'Leave us your Congratulations',
  rsvpWishesPlaceholder: 'Share your warm wishes',
  rsvpSend: 'Send RSVP',
  rsvpSending: 'Sending…',
  rsvpNote: 'Thank you for being part of our special moment',

  contactEyebrow: 'Get In Touch',
  contactTitle: 'Contact Us',
  contactSubtitle: "We'd love to hear from you",
  contactPhone: 'Phone',
  contactWhatsapp: 'WhatsApp',
  contactEmail: 'Email',
  contactInstagram: 'Instagram',

  footerNote: 'With love and gratitude — Ahmed & Sara',

  toastSuccess: "Thank you for your RSVP! We can't wait to celebrate with you! ✨",
  toastSad: 'We are so sorry you cannot make it. You will be missed! 😔',
  toastError: 'There was an issue sending your RSVP. Please try again.',
};

const AR: Translations = {
  navHome: 'الرئيسية',
  navStory: 'قصتنا',
  navDetails: 'التفاصيل',
  navGallery: 'الصور',
  navContact: 'تواصل معنا',
  navRsvp: 'تأكيد الحضور',

  welcomeEyebrow: 'لقد تلقيتَ',
  welcomeHeading: 'دعوة زفاف',
  welcomeTap: 'اضغط لفتح الدعوة',

  heroEyebrow: 'بصحبة عائلتيهما',
  heroRequest: 'يتشرفان بدعوتكم\nلحضور حفل زفافهما',
  heroDateLabel: 'التاريخ',
  heroDateValue: 'الجمعة، ٢٤ يوليو ٢٠٢٦',
  heroTimeLabel: 'الوقت',
  heroTimeValue: 'من الساعة ٩:٢٠ مساءً',
  heroScroll: 'تمرير',

  countdownEyebrow: 'اليوم الكبير',
  countdownTitle: 'العد التنازلي لليوم السعيد',
  countdownDays: 'أيام',
  countdownHours: 'ساعات',
  countdownMinutes: 'دقائق',
  countdownSeconds: 'ثوانٍ',
  countdownTagline: 'نعدّ الأيام حتى أبديّتنا',
  countdownDate: 'الجمعة، ٢٤ يوليو ٢٠٢٦',

  galleryEyebrow: 'رحلتنا',
  galleryTitle: 'قصتنا',
  gallerySubtitle: 'من كلمة "بحبك" البسيطة إلى الأبد',
  galleryCaption1Date: '٢٤ يوليو ٢٠٢٤',
  galleryCaption1Text: 'أول "تتجوزيني!"',
  galleryCaption2Date: '١١ نوفمبر ٢٠٢٤',
  galleryCaption2Text: 'خطوبتنا',
  galleryQuote: 'روحان تجمعهما فكرة واحدة، وقلبان ينبضان كأنهما قلب واحد.',
  galleryQuoteAuthor: '— جون كيتس',

  eventEyebrow: 'تفاصيل الاحتفال',
  eventTitle: 'الموعد والمكان',
  eventSubtitle: 'نتطلع إلى الاحتفال بكم',
  eventCardTitle: 'كتب الكتاب',
  eventDate: 'الجمعة، ٢٤ يوليو ٢٠٢٦',
  eventTime: '٩:٢٠ مساءً',
  eventAddressName: 'انقر أدناه للوصول إلى الموقع',
  eventAddressDetail: 'نتطلع إلى رؤيتكم هناك',
  eventMapBtn: 'عرض على الخريطة',

  rsvpEyebrow: 'انضموا إلى فرحتنا',
  rsvpTitle: 'تأكيد الحضور',
  rsvpSubtitle: 'يُرجى الرد بحلول ٢٤ يونيو ٢٠٢٦',
  rsvpNameLabel: 'الاسم الكامل',
  rsvpNamePlaceholder: 'مثال: أحمد وسارة',
  rsvpAttendingLabel: 'هل ستحضرون؟',
  rsvpAttendingPlaceholder: 'اختر…',
  rsvpAccept: 'بكل سرور سأحضر',
  rsvpDecline: 'آسف، لن أتمكن من الحضور',
  rsvpGuestsLabel: 'عدد الضيوف',
  rsvpWishesLabel: 'اتركوا لنا تهانيكم',
  rsvpWishesPlaceholder: 'شاركونا أجمل تمنياتكم',
  rsvpSend: 'إرسال التأكيد',
  rsvpSending: 'جارٍ الإرسال…',
  rsvpNote: 'شكراً لكونكم جزءاً من لحظتنا الخاصة',

  contactEyebrow: 'تواصل معنا',
  contactTitle: 'اتصل بنا',
  contactSubtitle: 'يسعدنا سماعكم',
  contactPhone: 'هاتف',
  contactWhatsapp: 'واتساب',
  contactEmail: 'البريد الإلكتروني',
  contactInstagram: 'إنستغرام',

  footerNote: 'بكل المحبة والامتنان — أحمد وسارة',

  toastSuccess: 'شكراً لتأكيد حضوركم! لا نستطيع الانتظار للاحتفال بكم! ✨',
  toastSad: 'نأسف لعدم تمكنكم من الحضور. ستُفتقدون كثيراً! 😔',
  toastError: 'حدث خطأ أثناء إرسال التأكيد. يرجى المحاولة مجدداً.',
};

@Injectable({ providedIn: 'root' })
export class LangService {
  readonly lang = signal<Lang>('ar');
  readonly t = signal<Translations>(AR);

  constructor() {
    // Apply RTL/LTR on language change
    effect(() => {
      const current = this.lang();
      document.documentElement.setAttribute('lang', current);
      document.documentElement.setAttribute('dir', current === 'ar' ? 'rtl' : 'ltr');
      this.t.set(current === 'ar' ? AR : EN);
    });
  }

  toggle() {
    this.lang.update(l => (l === 'ar' ? 'en' : 'ar'));
  }

  setLang(l: Lang) {
    this.lang.set(l);
  }
}
