/**
 * @file i18n.ts
 * @description i18next initialization with English and Russian translations for the Aviatech site.
 */

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * Detect initial language based on the browser setting.
 * Defaults to 'en' if not Russian.
 */
const detectBrowserLanguage = (): 'en' | 'ru' => {
  if (typeof navigator !== 'undefined') {
    const lang = navigator.language || navigator.languages?.[0]
    if (lang && lang.toLowerCase().startsWith('ru')) return 'ru'
  }
  return 'en'
}

const resources = {
  en: {
    translation: {
      aria: {
        home: 'Aviatech home',
        switchLanguage: 'Switch language',
      },
      brand: 'Aviatech',
      nav: {
        home: 'Home',
        advantages: 'Advantages',
        contacts: 'Contacts',
      },
      cta: {
        primary: 'Send technical assignment',
        secondary: 'Request a quote',
        download: 'Download brief (PDF)',
      },
      hero: {
        h1: 'High-precision metalworking for aerospace and space industries',
        sub: 'Parts from aluminum, titanium, and heat-resistant steels on multi-axis CNC. Compliance with GOST, OST, and international quality standards.',
        stats: {
          experienceLabel: 'Experience',
          experienceValue: '15+ years',
          precisionLabel: 'Precision',
          precisionValue: '±0.01 mm',
          parkLabel: 'Machine park',
          parkValue: '12+ CNC centers',
        },
      },
      benefits: {
        eyebrow: 'Advantages',
        title: 'Engineered for precision and reliability',
        subtitle: 'Industrial-grade processes and equipment tailored for aerospace manufacturing.',
        items: {
          aerospace: {
            title: 'Aerospace specialization',
            desc: '15+ years working with leading enterprises in the sector.',
          },
          precision: {
            title: 'Precision',
            desc: 'Tolerances down to ±0.01 mm, Ra 0.63 surface finish.',
          },
          equipment: {
            title: 'Modern equipment',
            desc: 'Park with 12+ multi-axis CNC machining centers.',
          },
          standards: {
            title: 'Standards compliance',
            desc: 'GOST RV 0015-002, ISO 9001 quality management.',
          },
          materials: {
            title: 'Challenging materials',
            desc: 'Titanium VT-6, VT-9, aluminum AMg6, V95, heat-resistant steels.',
          },
          process: {
            title: 'End-to-end process',
            desc: 'From drawing to finished part with CMM quality control.',
          },
        },
      },
      contact: {
        eyebrow: 'Contacts',
        title: "Let's discuss your task",
        subtitle: 'Send a quick request — we will contact you within 24 hours.',
        info: {
          title: 'Contact information',
          addressLabel: 'Address',
          hoursLabel: 'Working hours',
          hoursValue: 'Mon–Fri 8:00–18:00',
        },
        taLink: 'Send technical assignment',
        taDesc: 'Need to attach drawings and specs? Use the full TA form.',
        form: {
          title: 'Quick request',
          subtitle: 'Fill in the fields and we will get back to you shortly.',
          fields: {
            name: 'Name*',
            phone: 'Phone*',
            email: 'Email*',
            brief: 'Short description*',
          },
          placeholders: {
            name: 'Your name',
            phone: '+7 (___) ___-__-__',
            email: 'name@company.com',
            brief: 'Part type, material, quantity, desired terms…',
          },
          helper: 'Up to 500 characters.',
          submit: 'Send request',
          sending: 'Sending…',
          successTitle: 'Request sent',
          successDesc: 'We will contact you within 24 hours.',
          errors: {
            nameRequired: 'Please enter your name',
            phoneRequired: 'Please enter a phone number',
            emailInvalid: 'Please enter a valid email address',
            briefRequired: 'Please add a short description',
            briefTooLong: 'The description is too long (max 500 chars)',
          },
        },
      },
      footer: {
        companyDesc: 'High-precision metalworking for aerospace and adjacent industries.',
        contacts: 'Contacts',
        quickLinks: 'Quick links',
        salesLine: 'Sales: +7 (495) 123-45-67 · a.ivanov@aviatech.ru',
        engineeringLine: 'Engineering: +7 (495) 123-45-68 · technology@aviatech.ru',
        qualityLine: 'Quality: +7 (495) 123-45-69 · quality@aviatech.ru',
        address: 'Moscow, Industrialnaya St. 15, bld. 3',
        copyright: '© {{year}} Aviatech. All rights reserved.',
      },
    },
  },
  ru: {
    translation: {
      aria: {
        home: 'Aviatech — главная',
        switchLanguage: 'Сменить язык',
      },
      brand: 'Aviatech',
      nav: {
        home: 'Главная',
        advantages: 'Преимущества',
        contacts: 'Контакты',
      },
      cta: {
        primary: 'Отправить техническое задание',
        secondary: 'Запросить расчет',
        download: 'Скачать бриф (PDF)',
      },
      hero: {
        h1: 'Высокоточная металлообработка для авиационной и космической промышленности',
        sub: 'Изготовление ответственных деталей из алюминия, титана и жаропрочных сталей на многоосевых станках с ЧПУ. Соответствие ГОСТ, ОСТ и международным стандартам качества.',
        stats: {
          experienceLabel: 'Опыт',
          experienceValue: '15+ лет',
          precisionLabel: 'Точность',
          precisionValue: '±0.01 мм',
          parkLabel: 'Парк оборудования',
          parkValue: '12+ станков с ЧПУ',
        },
      },
      benefits: {
        eyebrow: 'Преимущества',
        title: 'Создано для точности и надежности',
        subtitle: 'Промышленные процессы и оборудование, адаптированные для авиакосмического производства.',
        items: {
          aerospace: {
            title: 'Специализация на авиастроении',
            desc: '15+ лет работы с ведущими предприятиями отрасли.',
          },
          precision: {
            title: 'Прецизионная точность',
            desc: 'Допуски до ±0.01 мм, шероховатость Ra 0.63.',
          },
          equipment: {
            title: 'Современное оборудование',
            desc: 'Парк из 12+ многоосевых обрабатывающих центров.',
          },
          standards: {
            title: 'Соответствие стандартам',
            desc: 'ГОСТ РВ 0015-002, система менеджмента качества ISO 9001.',
          },
          materials: {
            title: 'Сложные материалы',
            desc: 'Титан ВТ-6, ВТ-9, алюминий АМг6, В95, жаропрочные стали.',
          },
          process: {
            title: 'Сквозной процесс',
            desc: 'От чертежа до готовой детали с контролем на КИМ.',
          },
        },
      },
      contact: {
        eyebrow: 'Контакты',
        title: 'Обсудим вашу задачу',
        subtitle: 'Оставьте быстрый запрос — мы свяжемся с вами в течение 24 часов.',
        info: {
          title: 'Контактная информация',
          addressLabel: 'Адрес',
          hoursLabel: 'Время работы',
          hoursValue: 'Пн–Пт 8:00–18:00',
        },
        taLink: 'Отправить техническое задание',
        taDesc: 'Нужно приложить чертежи и ТТ? Воспользуйтесь полной формой ТЗ.',
        form: {
          title: 'Быстрый запрос',
          subtitle: 'Заполните поля — мы свяжемся с вами в ближайшее время.',
          fields: {
            name: 'Имя*',
            phone: 'Телефон*',
            email: 'Email*',
            brief: 'Краткое описание*',
          },
          placeholders: {
            name: 'Ваше имя',
            phone: '+7 (___) ___-__-__',
            email: 'name@company.com',
            brief: 'Тип детали, материал, количество, желаемые сроки…',
          },
          helper: 'До 500 символов.',
          submit: 'Отправить запрос',
          sending: 'Отправка…',
          successTitle: 'Запрос отправлен',
          successDesc: 'Мы свяжемся с вами в течение 24 часов.',
          errors: {
            nameRequired: 'Укажите имя',
            phoneRequired: 'Укажите номер телефона',
            emailInvalid: 'Укажите корректный email',
            briefRequired: 'Добавьте краткое описание',
            briefTooLong: 'Слишком длинное описание (макс. 500 символов)',
          },
        },
      },
      footer: {
        companyDesc: 'Высокоточная металлообработка для авиационной и смежных отраслей.',
        contacts: 'Контакты',
        quickLinks: 'Быстрые ссылки',
        salesLine: 'Продажи: +7 (495) 123-45-67 · a.ivanov@aviatech.ru',
        engineeringLine: 'Инженерный отдел: +7 (495) 123-45-68 · technology@aviatech.ru',
        qualityLine: 'Отдел качества: +7 (495) 123-45-69 · quality@aviatech.ru',
        address: 'Москва, ул. Промышленная, д. 15, стр. 3',
        copyright: '© {{year}} Aviatech. Все права защищены.',
      },
    },
  },
} as const

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectBrowserLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'ru'],
  })

// Keep the <html lang="..."> in sync for accessibility and SEO
if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language
  i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng
  })
}

export default i18n
