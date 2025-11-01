import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        viewAllServices: 'View All Services',
        digitalMarketing: 'Digital Marketing',
        cyberSecurity: 'Cyber Security',
        exploreDigitalMarketing: 'Explore Digital Marketing',
        exploreCyberSecurity: 'Explore Cyber Security',
        about: 'About',
        contact: 'Contact'
      },
      services: {
        dm: {
          title: 'Digital Marketing',
          seoOptimization: 'SEO Optimization',
          ppcManagement: 'PPC Management',
          socialMediaGrowth: 'Social Media Growth',
          brandingStrategy: 'Branding & Strategy'
        },
        cs: {
          title: 'Cyber Security',
          firewallSetup: 'Firewall Setup',
          securityAudit: 'Security Audit',
          threatProtection: 'Threat Protection',
          dataRecovery: 'Data Recovery'
        }
      },
      cta: {
        freeConsultation: 'Get a Free Consultation'
      },
      mobile: {
        ourStory: 'Our Story',
        team: 'Team'
      },
      contactForm: {
        title: 'Tell Us How We Can Help You',
        labels: {
          fullName: 'Full Name',
          companyNameOptional: 'Company Name (optional)',
          email: 'Email Address',
          phone: 'Phone Number',
          serviceType: 'Service Type',
          messageDetails: 'Message / Project Details'
        },
        placeholders: {
          fullName: 'John Doe',
          company: 'Your Company',
          email: 'john@example.com',
          phone: '+1 (555) 123-4567',
          message: 'Tell us about your project...'
        },
        options: {
          selectService: 'Select a service',
          marketing: 'Digital Marketing',
          security: 'Cyber Security',
          both: 'Both'
        },
        submit: {
          sending: 'Sending...',
          requestConsultation: 'Request Consultation'
        }
      },
      callbackModal: {
        title: 'Request a Callback',
        labels: {
          fullName: 'Full Name',
          phone: 'Phone Number',
          emailOptional: 'Email Address (optional)',
          preferredDateOptional: 'Preferred Date (optional)',
          selectService: 'Select Service',
          callbackMethodOptional: 'Callback Method (optional)',
          preferredLanguageOptional: 'Preferred Language (optional)',
          messageOptional: 'Message (optional)'
        },
        placeholders: {
          fullName: 'John Doe',
          phone: 'your number',
          date: 'Select date',
          message: 'Your message'
        },
        options: {
          selectService: 'Select a service',
          marketing: 'Digital Marketing',
          security: 'Cyber Security',
          both: 'Both',
          other: 'Other',
          selectMethod: 'Select method',
          phoneCall: 'Phone Call',
          whatsapp: 'WhatsApp',
          zoomMeeting: 'Zoom Meeting',
          selectLanguage: 'Select language',
          hindi: 'Hindi',
          english: 'English',
          sanskrit: 'Sanskrit'
        },
        actions: {
          cancel: 'Cancel',
          sendViaWhatsApp: 'Send via WhatsApp',
          submitting: 'Submitting...',
          requestCallback: 'Request Callback'
        }
      },
      home: {
        hero: {
          title1: 'SecureReach',
          title2: 'Digital Solutions',
          subtitle: 'Accelerate Your Business with Security & Strategy',
          blurb: 'We blend {{dm}} with {{cs}} — helping your business grow confidently online.',
          dm: 'performance-driven digital marketing',
          cs: 'enterprise-grade cybersecurity',
          stats: { clients: 'Clients', retention: 'Retention', support: 'Support' },
          ctas: { explore: 'Explore Our Services', audit: 'Get a Free Audit' },
          cards: {
            analyticsTitle: 'Growth Analytics', analyticsDesc: 'Track your success in real-time',
            shieldTitle: 'Security Shield', shieldDesc: 'Protected 24/7'
          }
        },
        core: {
          title: 'Our Core Services',
          desc: 'We help you scale with smart digital growth strategies and protect your business with advanced cyber solutions.',
          marketing: {
            title: 'Digital Marketing',
            list: ['SEO Optimization', 'PPC Management', 'Social Media Growth', 'Branding & Strategy'],
            learnMore: 'Learn More'
          },
          security: {
            title: 'Cyber Security',
            list: ['Firewall & Network Protection', 'Threat Detection', 'Security Audits', 'Data Backup & Recovery'],
            learnMore: 'Learn More'
          }
        },
        why: {
          title: 'Why Leading Brands Trust SecureReach',
          features: [
            { title: 'Certified Experts', desc: 'Specialists in marketing & security' },
            { title: 'ROI-Focused Strategies', desc: 'Measurable results every time' },
            { title: '24/7 Threat Protection', desc: 'Real-time monitoring and defense' },
            { title: 'Client-Centric Approach', desc: 'We grow only when you do' }
          ]
        },
        ctaBanner: {
          title: 'Ready to Transform and Secure Your Business?',
          subtitle: "Let's discuss how SecureReach can help you dominate safely in the digital world.",
          button: 'Book a Free Strategy Call'
        },
        testimonials: {
          title: 'Trusted by Businesses Worldwide',
          srOnly: 'Customer Testimonials'
        }
      },
      footer: {
        blurb: 'We help businesses grow with digital marketing and cyber security.',
        services: 'Services',
        quickLinks: 'Quick Links',
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        address: 'Address',
        rights: 'All rights reserved.'
      },
      contactPage: {
        headerTitle: 'Let’s Connect and Secure Your Digital Growth.',
        headerDesc: 'If you’re facing any kind of emergency, you can use the “Request Callback” option to contact us immediately.',
        headerCTA: 'Book a Free Consultation'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'होम',
        services: 'सेवाएँ',
        viewAllServices: 'सभी सेवाएँ देखें',
        digitalMarketing: 'डिजिटल मार्केटिंग',
        cyberSecurity: 'साइबर सुरक्षा',
        exploreDigitalMarketing: 'डिजिटल मार्केटिंग देखें',
        exploreCyberSecurity: 'साइबर सुरक्षा देखें',
        about: 'हमारे बारे में',
        contact: 'संपर्क'
      },
      services: {
        dm: {
          title: 'डिजिटल मार्केटिंग',
          seoOptimization: 'एसईओ ऑप्टिमाइज़ेशन',
          ppcManagement: 'पीपीसी मैनेजमेंट',
          socialMediaGrowth: 'सोशल मीडिया ग्रोथ',
          brandingStrategy: 'ब्रांडिंग और रणनीति'
        },
        cs: {
          title: 'साइबर सुरक्षा',
          firewallSetup: 'फ़ायरवॉल सेटअप',
          securityAudit: 'सिक्योरिटी ऑडिट',
          threatProtection: 'थ्रेट प्रोटेक्शन',
          dataRecovery: 'डेटा रिकवरी'
        }
      },
      cta: { freeConsultation: 'नि:शुल्क परामर्श प्राप्त करें' },
      mobile: { ourStory: 'हमारी कहानी', team: 'टीम' },
      contactForm: {
        title: 'बताइए हम आपकी कैसे मदद कर सकते हैं',
        labels: {
          fullName: 'पूरा नाम',
          companyNameOptional: 'कंपनी का नाम (वैकल्पिक)',
          email: 'ईमेल पता',
          phone: 'फ़ोन नंबर',
          serviceType: 'सेवा का प्रकार',
          messageDetails: 'संदेश / प्रोजेक्ट विवरण'
        },
        placeholders: {
          fullName: 'जॉन डो',
          company: 'आपकी कंपनी',
          email: 'john@example.com',
          phone: '+1 (555) 123-4567',
          message: 'अपने प्रोजेक्ट के बारे में बताएं...'
        },
        options: {
          selectService: 'सेवा चुनें',
          marketing: 'डिजिटल मार्केटिंग',
          security: 'साइबर सुरक्षा',
          both: 'दोनों'
        },
        submit: {
          sending: 'भेजा जा रहा है...',
          requestConsultation: 'परामर्श का अनुरोध करें'
        }
      },
      callbackModal: {
        title: 'कॉल बैक का अनुरोध',
        labels: {
          fullName: 'पूरा नाम',
          phone: 'फ़ोन नंबर',
          emailOptional: 'ईमेल पता (वैकल्पिक)',
          preferredDateOptional: 'पसंदीदा तारीख (वैकल्पिक)',
          selectService: 'सेवा चुनें',
          callbackMethodOptional: 'कॉल बैक तरीका (वैकल्पिक)',
          preferredLanguageOptional: 'पसंदीदा भाषा (वैकल्पिक)',
          messageOptional: 'संदेश (वैकल्पिक)'
        },
        placeholders: {
          fullName: 'जॉन डो',
          phone: 'आपका नंबर',
          date: 'तारीख चुनें',
          message: 'आपका संदेश'
        },
        options: {
          selectService: 'सेवा चुनें',
          marketing: 'डिजिटल मार्केटिंग',
          security: 'साइबर सुरक्षा',
          both: 'दोनों',
          other: 'अन्य',
          selectMethod: 'तरीका चुनें',
          phoneCall: 'फ़ोन कॉल',
          whatsapp: 'व्हाट्सऐप',
          zoomMeeting: 'ज़ूम मीटिंग',
          selectLanguage: 'भाषा चुनें',
          hindi: 'हिन्दी',
          english: 'अंग्रेज़ी',
          sanskrit: 'संस्कृत'
        },
        actions: {
          cancel: 'रद्द करें',
          sendViaWhatsApp: 'व्हाट्सऐप से भेजें',
          submitting: 'सबमिट किया जा रहा है...',
          requestCallback: 'कॉल बैक का अनुरोध'
        }
      },
      home: {
        hero: {
          title1: 'SecureReach',
          title2: 'डिजिटल सॉल्यूशंस',
          subtitle: 'सुरक्षा और रणनीति के साथ अपने व्यवसाय को तेज़ बनाएं',
          blurb: 'हम {{dm}} और {{cs}} का समन्वय करते हैं — ताकि आपका व्यवसाय आत्मविश्वास से बढ़े।',
          dm: 'परफ़ॉर्मेंस-ड्रिवन डिजिटल मार्केटिंग',
          cs: 'एंटरप्राइज़-ग्रेड साइबर सुरक्षा',
          stats: { clients: 'क्लाइंट्स', retention: 'रिटेंशन', support: 'सपोर्ट' },
          ctas: { explore: 'हमारी सेवाएँ देखें', audit: 'मुफ़्त ऑडिट पाएं' },
          cards: {
            analyticsTitle: 'वृद्धि विश्लेषण', analyticsDesc: 'रियल-टाइम में सफलता ट्रैक करें',
            shieldTitle: 'सुरक्षा शील्ड', shieldDesc: '24/7 सुरक्षा'
          }
        },
        core: {
          title: 'हमारी प्रमुख सेवाएँ',
          desc: 'हम स्मार्ट डिजिटल ग्रोथ रणनीतियों से आपको स्केल करने और उन्नत साइबर समाधानों से आपके व्यवसाय की सुरक्षा में मदद करते हैं।',
          marketing: {
            title: 'डिजिटल मार्केटिंग',
            list: ['एसईओ ऑप्टिमाइज़ेशन', 'पीपीसी मैनेजमेंट', 'सोशल मीडिया ग्रोथ', 'ब्रांडिंग और रणनीति'],
            learnMore: 'और जानें'
          },
          security: {
            title: 'साइबर सुरक्षा',
            list: ['फ़ायरवॉल और नेटवर्क सुरक्षा', 'थ्रेट डिटेक्शन', 'सुरक्षा ऑडिट', 'डेटा बैकअप और रिकवरी'],
            learnMore: 'और जानें'
          }
        },
        why: {
          title: 'आगे बढ़ते ब्रांड SecureReach पर क्यों भरोसा करते हैं',
          features: [
            { title: 'प्रमाणित विशेषज्ञ', desc: 'मार्केटिंग और सुरक्षा के विशेषज्ञ' },
            { title: 'आरओआई-केंद्रित रणनीतियाँ', desc: 'हर बार मापने योग्य परिणाम' },
            { title: '24/7 थ्रेट सुरक्षा', desc: 'रियल-टाइम मॉनिटरिंग और डिफ़ेंस' },
            { title: 'क्लाइंट-प्रथम दृष्टिकोण', desc: 'हम तभी बढ़ते हैं जब आप बढ़ते हैं' }
          ]
        },
        ctaBanner: {
          title: 'बिज़नेस को रूपांतरित और सुरक्षित करने के लिए तैयार हैं?',
          subtitle: 'आइए बात करें कि SecureReach आपको सुरक्षित रूप से डिजिटल दुनिया में कैसे आगे बढ़ा सकता है।',
          button: 'मुफ़्त स्ट्रैटेजी कॉल बुक करें'
        },
        testimonials: {
          title: 'दुनिया भर के व्यवसायों द्वारा विश्वसनीय',
          srOnly: 'ग्राहक प्रशंसापत्र'
        }
      },
      footer: {
        blurb: 'हम डिजिटल मार्केटिंग और साइबर सुरक्षा के साथ व्यवसायों को बढ़ाते हैं।',
        services: 'सेवाएँ',
        quickLinks: 'त्वरित लिंक',
        home: 'होम',
        about: 'हमारे बारे में',
        contact: 'संपर्क',
        privacy: 'गोपनीयता नीति',
        address: 'पता',
        rights: 'सभी अधिकार सुरक्षित।'
      },
      contactPage: {
        headerTitle: 'जुड़ें और अपनी डिजिटल ग्रोथ को सुरक्षित करें।',
        headerDesc: 'कोई प्रोजेक्ट है या विशेषज्ञ सलाह चाहिए? हमारी टीम मदद के लिए तैयार है।',
        headerCTA: 'मुफ़्त परामर्श बुक करें'
      }
    }
  },
  sa: {
    translation: {
      nav: {
        home: 'गृह',
        services: 'सेवाः',
        viewAllServices: 'सर्वाः सेवाः पश्य',
        digitalMarketing: 'डिजिटल विपणनम्',
        cyberSecurity: 'साइबर सुरक्षा',
        exploreDigitalMarketing: 'डिजिटल विपणनम् अवगच्छ',
        exploreCyberSecurity: 'साइबर सुरक्षा अवगच्छ',
        about: 'विषये',
        contact: 'सम्पर्कः'
      },
      services: {
        dm: {
          title: 'डिजिटल विपणनम्',
          seoOptimization: 'एसईओ अनुकूलनम्',
          ppcManagement: 'पीपीसी प्रबन्धनम्',
          socialMediaGrowth: 'सोशल मीडिया वृद्धिः',
          brandingStrategy: 'ब्रान्डिङ् तथा नीति'
        },
        cs: {
          title: 'साइबर सुरक्षा',
          firewallSetup: 'फ़ायरवॉल विन्यासः',
          securityAudit: 'सुरक्षा लेखापरीक्षा',
          threatProtection: 'भयसंरक्षणम्',
          dataRecovery: 'दत्तांश-उद्धारः'
        }
      },
      cta: { freeConsultation: 'निःशुल्क परामर्शम् प्राप्नुहि' },
      mobile: { ourStory: 'अस्माकं कथा', team: 'दलः' },
      contactForm: {
        title: 'कथं वयं सहायं कर्तुं शक्नुमः, ब्रूहि',
        labels: {
          fullName: 'पूर्णनाम',
          companyNameOptional: 'संस्थानाम (वैकल्पिकम्)',
          email: 'ईमेलः',
          phone: 'दूरवाणी संख्या',
          serviceType: 'सेवा प्रकारः',
          messageDetails: 'सन्देशः / परियोजन-विवरणम्'
        },
        placeholders: {
          fullName: 'जॉन डो',
          company: 'भवतः संस्था',
          email: 'john@example.com',
          phone: '+1 (555) 123-4567',
          message: 'परियोजनां वर्णय'
        },
        options: {
          selectService: 'सेवां चिनु',
          marketing: 'डिजिटल विपणनम्',
          security: 'साइबर सुरक्षा',
          both: 'उभे'
        },
        submit: {
          sending: 'प्रेष्यते...',
          requestConsultation: 'परामर्शं याचस्व'
        }
      },
      callbackModal: {
        title: 'कॉल-बैक निवेदनम्',
        labels: {
          fullName: 'पूर्णनाम',
          phone: 'दूरवाणी संख्या',
          emailOptional: 'ईमेलः (वैकल्पिकम्)',
          preferredDateOptional: 'इष्टतिथिः (वैकल्पिकम्)',
          selectService: 'सेवां चिनु',
          callbackMethodOptional: 'कॉल-बैक विधिः (वैकल्पिकम्)',
          preferredLanguageOptional: 'प्रियभाषा (वैकल्पिकम्)',
          messageOptional: 'सन्देशः (वैकल्पिकम्)'
        },
        placeholders: {
          fullName: 'जॉन डो',
          phone: 'भवतः संख्या',
          date: 'तिथिं चिनु',
          message: 'भवतः सन्देशः'
        },
        options: {
          selectService: 'सेवां चिनु',
          marketing: 'डिजिटल विपणनम्',
          security: 'साइबर सुरक्षा',
          both: 'उभे',
          other: 'अन्यत्',
          selectMethod: 'विधिं चिनु',
          phoneCall: 'दूरभाष',
          whatsapp: 'WhatsApp',
          zoomMeeting: 'Zoom सभा',
          selectLanguage: 'भाषां चिनु',
          hindi: 'हिन्दी',
          english: 'अंग्रेज़ी',
          sanskrit: 'संस्कृतम्'
        },
        actions: {
          cancel: 'निरस्य',
          sendViaWhatsApp: 'WhatsApp द्वारा प्रेषय',
          submitting: 'सुप्रेषणम्...',
          requestCallback: 'कॉल-बैक याचस्व'
        }
      },
      home: {
        hero: {
          title1: 'SecureReach',
          title2: 'डिजिटल समाधान',
          subtitle: 'सुरक्षया सह व्यवसायस्य वेगवृद्धिः',
          blurb: 'वयं {{dm}} च {{cs}} संयोजयामः — विश्वासपूर्वकं वृढिं साधय।',
          dm: 'प्रभाव-प्रधान डिजिटल-विपणनम्',
          cs: 'उच्चस्तरीया साइबर-सुरक्षा',
          stats: { clients: 'ग्राहकाः', retention: 'धारणम्', support: 'सहाय्यं' },
          ctas: { explore: 'अस्माकं सेवाः पश्य', audit: 'निशुल्कम् लेखा परीक्षणम्' },
          cards: {
            analyticsTitle: 'वृद्धि-विश्लेषणम्', analyticsDesc: 'यथार्थकाले सफलतां अनुयच्छ',
            shieldTitle: 'सुरक्षा-कवचम्', shieldDesc: '२४×७ संरक्षणम्'
          }
        },
        core: {
          title: 'अस्माकं मुख्याः सेवाः',
          desc: 'डिजिटल-वृद्धि-रणनीतिभिः स्केलं साधयामः, उन्नत-साइबर-समाधानैः व्यवसायं रक्षामः।',
          marketing: {
            title: 'डिजिटल विपणनम्',
            list: ['एसईओ अनुकूलनम्', 'पीपीसी प्रबन्धनम्', 'सोशल-मीडिया वृद्धिः', 'ब्रान्डिङ् तथा नीति'],
            learnMore: 'अधिकं ज्ञातुम्'
          },
          security: {
            title: 'साइबर सुरक्षा',
            list: ['फायरवॉल च नेटवर्क संरक्षणम्', 'भय-परिचयः', 'सुरक्षा लेखापरीक्षा', 'दत्त-संग्रहः च उद्धारः'],
            learnMore: 'अधिकं ज्ञातुम्'
          }
        },
        why: {
          title: 'प्रमुख-ब्राण्डाः SecureReach इति किमर्थं विश्वसन्ति',
          features: [
            { title: 'प्रमाणित-विशेषज्ञाः', desc: 'विपणन-सुरक्षा-विशेषज्ञाः' },
            { title: 'आरओआई-केंद्रिता नीतिः', desc: 'सदा मापनयोग्या फलानि' },
            { title: '२४/७ भय-रक्षा', desc: 'यथार्थकाल-निगराणी च रक्षा' },
            { title: 'ग्राहक-केंद्रित दृष्टिः', desc: 'भवतः वृद्धौ एव अस्माकं वृद्धिः' }
          ]
        },
        ctaBanner: {
          title: 'रूपान्तरणाय च सुरक्षाय च सज्जः भव!',
          subtitle: 'कथं SecureReach त्वां सुरक्षितया डिजिटल-जगति प्रगाढं करोतु — चर्चा कुर्मः।',
          button: 'निःशुल्क रणनीति-सम्पर्कः'
        },
        testimonials: {
          title: 'विश्व-व्यापारेषु विश्वसनीयम्',
          srOnly: 'ग्राहक-प्रशंसाएँ'
        }
      },
      footer: {
        blurb: 'वयं डिजिटल-विपणन-साइबर-सुरक्षाभ्यां व्यवसायान् वर्धयामः।',
        services: 'सेवाः',
        quickLinks: 'शीघ्र-संबन्धाः',
        home: 'गृह',
        about: 'विषये',
        contact: 'सम्पर्कः',
        privacy: 'गोपनीयता नीतिः',
        address: 'स्थाननिर्देशः',
        rights: 'सर्वे अधिकाराः सुरक्षिताः।'
      },
      contactPage: {
        headerTitle: 'युज्यते स्म, भवतः डिजिटल-वृद्धिं रक्षामः।',
        headerDesc: 'परियोजना अस्ति वा? अस्माकं विशेषज्ञाः सहाय्याय सिद्धाः।',
        headerCTA: 'निःशुल्क परामर्शं बुक् कुरु'
      }
    }
  }
}

const savedLng = typeof window !== 'undefined' ? (localStorage.getItem('lng') || 'en') : 'en'

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLng,
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18n


