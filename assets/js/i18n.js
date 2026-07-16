const translations = {
  fr: {
    meta: {
      home: {
        title: "NexGen Web Designs | Conception de sites web partout au Canada",
        description: "Studio de conception web canadien. Sites professionnels par abonnement mensuel, sans gros montant de départ. Au service des entreprises partout au pays."
      },
      services: {
        title: "Services et tarifs | NexGen Web Designs",
        description: "Forfaits d'abonnement mensuel pour sites web professionnels au Canada : Core 199 $, Plus 299 $, Pro 499 $, Signature 600 $+ CAD."
      },
      about: {
        title: "À propos | NexGen Web Designs",
        description: "NexGen Web Designs est un studio de conception web canadien, dédié aux entreprises d'ici, partout au pays."
      },
      contact: {
        title: "Contact | NexGen Web Designs",
        description: "Discutons de votre projet de site web. Studio canadien, au service des entreprises partout au pays."
      },
      privacy: {
        title: "Politique de confidentialité | NexGen Web Designs",
        description: "Comment NexGen Web Designs recueille, utilise et protège vos renseignements personnels, conformément à la Loi 25 du Québec."
      }
    },
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      contact: "Contact",
      cta: "Réserver un appel",
      skip: "Passer au contenu"
    },
    home: {
      hero: {
        eyebrow: "Studio web canadien",
        title: "Votre site web professionnel. Payé mois par mois.",
        subtitle: "NexGen Web Designs conçoit des sites sur mesure pour les entreprises d'un bout à l'autre du Canada, sans facture de 5 000 $ à payer d'avance. Un abonnement mensuel simple, tout inclus.",
        ctaPrimary: "Voir nos forfaits",
        ctaSecondary: "Réserver un appel",
        badge: "Dès 199 $ CAD / mois"
      },
      trust: {
        eyebrow: "Fièrement canadien",
        title: "Conçu au Canada, pour le Canada",
        items: [
          { title: "Entreprise 100 % canadienne", desc: "Une équipe qui comprend le marché canadien et vos réalités d'affaires, d'un océan à l'autre." },
          { title: "Confidentialité respectée", desc: "Vos renseignements et ceux de vos clients sont traités selon les normes canadiennes de protection de la vie privée." },
          { title: "Facturé en dollars canadiens", desc: "Aucune surprise de taux de change : vos factures sont toujours en CAD, mois après mois." },
          { title: "Livraison en 10 à 14 jours", desc: "De la première rencontre à la mise en ligne, la majorité de nos projets sont livrés en deux semaines." }
        ]
      },
      value: {
        eyebrow: "Notre approche",
        title: "Un abonnement mensuel, pas une facture choc",
        body: "Les agences traditionnelles facturent 3 000 $ à 10 000 $ d'un coup pour un site web, avant même de parler d'entretien. Chez NexGen, vous payez un abonnement mensuel fixe qui couvre la conception, l'hébergement, la sécurité et les mises à jour. Aucune surprise, aucun contrat à long terme.",
        traditionalTitle: "Agence traditionnelle",
        traditional: [
          "Facture initiale de 3 000 $ à 10 000 $",
          "Entretien facturé séparément, à l'heure",
          "Contrat de plusieurs années",
          "Délais de 2 à 4 mois"
        ],
        nexgenTitle: "NexGen Web Designs",
        nexgen: [
          "Abonnement mensuel dès 199 $ CAD",
          "Hébergement, sécurité et mises à jour inclus",
          "Aucun contrat à long terme",
          "Livraison en 10 à 14 jours"
        ]
      },
      servicesTeaser: {
        eyebrow: "Nos forfaits",
        title: "Un forfait pour chaque étape de votre croissance",
        link: "Voir tous les forfaits",
        cards: [
          { name: "Core", tag: "1 page", price: "199 $", period: "/mois", desc: "Une page percutante pour lancer votre présence en ligne." },
          { name: "Plus", tag: "Multi-pages", price: "299 $", period: "/mois", desc: "Un site complet pour présenter vos services en détail." },
          { name: "Pro", tag: "Automatisation", price: "499 $", period: "/mois", desc: "Rendez-vous et suivi client automatisés." },
          { name: "Signature", tag: "Sur mesure", price: "600 $+", period: "/mois", desc: "Une solution web entièrement personnalisée." }
        ]
      },
      ctaBanner: {
        title: "Prêt à mettre votre entreprise en ligne?",
        subtitle: "Réservez un appel de 20 minutes, sans engagement.",
        button: "Réserver un appel"
      }
    },
    services: {
      header: {
        eyebrow: "Nos forfaits",
        title: "Des forfaits simples, un abonnement mensuel",
        subtitle: "Quatre forfaits pensés pour chaque étape de votre entreprise. Prix en dollars canadiens, sans surprise à la facturation."
      },
      plans: [
        {
          name: "Core", tag: "1 page", price: "199 $", period: "/mois CAD",
          desc: "Une page web percutante pour lancer votre présence en ligne rapidement.",
          features: [
            "Site une page, design sur mesure",
            "Optimisé pour mobile et tablette",
            "Formulaire de contact intégré",
            "Hébergement et nom de domaine inclus",
            "Référencement local de base (SEO)"
          ],
          cta: "Choisir Core"
        },
        {
          name: "Plus", tag: "Multi-pages", price: "299 $", period: "/mois CAD", badge: "Le plus populaire",
          desc: "Un site multi-pages pour présenter vos services en détail.",
          features: [
            "Jusqu'à 5 pages (Accueil, Services, À propos, etc.)",
            "Design entièrement personnalisé",
            "Formulaires et intégration Google Maps",
            "Hébergement, sécurité et mises à jour inclus",
            "Référencement local avancé"
          ],
          cta: "Choisir Plus"
        },
        {
          name: "Pro", tag: "Automatisation", price: "499 $", period: "/mois CAD",
          desc: "Pour les entreprises qui veulent automatiser leur prise de rendez-vous et leur suivi de clientèle.",
          features: [
            "Tout le contenu du forfait Plus",
            "Support bilingue (FR/EN) inclus par défaut",
            "Prise de rendez-vous en ligne automatisée",
            "Automatisations courriel (suivi, rappels)",
            "Intégration à vos outils (CRM, calendrier)",
            "Rapports mensuels de performance"
          ],
          cta: "Choisir Pro"
        },
        {
          name: "Signature", tag: "Sur mesure", price: "600 $+", period: "/mois CAD",
          desc: "Une solution web entièrement sur mesure pour les projets complexes ou les besoins particuliers.",
          features: [
            "Architecture et fonctionnalités sur mesure",
            "Boutique en ligne, portails clients ou applications web",
            "Intégrations avancées (ERP, paiement, API)",
            "Accompagnement stratégique dédié",
            "Support prioritaire"
          ],
          cta: "Discuter de mon projet"
        }
      ],
      faq: {
        eyebrow: "Questions fréquentes",
        title: "Ce qu'on nous demande le plus souvent",
        items: [
          { q: "Puis-je annuler mon abonnement à tout moment?", a: "Oui. Il n'y a aucun contrat à long terme : vous pouvez modifier ou annuler votre forfait avec un préavis de 30 jours." },
          { q: "Le nom de domaine et l'hébergement sont-ils inclus?", a: "Oui, tous nos forfaits incluent l'hébergement, la sécurité et la gestion du nom de domaine." },
          { q: "Combien de temps avant la mise en ligne de mon site?", a: "La majorité de nos projets sont livrés entre 10 et 14 jours ouvrables suivant notre premier appel." },
          { q: "Que se passe-t-il si mes besoins changent?", a: "Vous pouvez changer de forfait à tout moment pour ajuster votre abonnement à la croissance de votre entreprise." }
        ]
      },
      ctaBanner: {
        title: "Pas certain du forfait qui vous convient?",
        subtitle: "Réservons un appel, on vous conseille sans pression.",
        button: "Réserver un appel"
      }
    },
    about: {
      header: {
        eyebrow: "À propos",
        title: "Le partenaire web canadien pour les entreprises qui avancent",
        subtitle: "Nous concevons des sites web professionnels pour les commerces, cabinets et entrepreneurs d'un bout à l'autre du Canada, avec la rigueur d'une agence et la simplicité d'un abonnement."
      },
      story: {
        eyebrow: "Notre histoire",
        title: "Pourquoi NexGen existe",
        body: "Trop d'entreprises repoussent leur présence en ligne à cause d'une facture initiale de plusieurs milliers de dollars. NexGen Web Designs a été fondée pour changer cette réalité : un site professionnel, livré rapidement, payé mensuellement, comme n'importe quel autre outil d'affaires essentiel.",
        body2: "Nous travaillons avec des commerces de quartier, des cabinets professionnels et des entrepreneurs partout au Canada, toujours en français et en anglais."
      },
      process: {
        eyebrow: "Notre processus",
        title: "De la première rencontre à la mise en ligne",
        steps: [
          { num: "01", title: "Découverte", desc: "Un appel de 20 minutes pour comprendre vos objectifs, votre clientèle et vos besoins." },
          { num: "02", title: "Design", desc: "Nous concevons une maquette sur mesure alignée à votre image de marque." },
          { num: "03", title: "Développement", desc: "Votre site est construit, testé sur mobile et tablette, et optimisé pour le référencement local." },
          { num: "04", title: "Lancement et suivi", desc: "Mise en ligne, puis entretien, sécurité et mises à jour continues inclus dans votre abonnement." }
        ]
      },
      values: {
        eyebrow: "Notre façon de travailler",
        title: "Ce sur quoi nous ne transigeons pas",
        items: [
          { title: "Communication directe", desc: "Vous parlez directement à la personne qui construit votre site, pas à un intermédiaire." },
          { title: "Rapide, sans raccourcis", desc: "Des délais courts ne veulent pas dire du travail bâclé : chaque site est testé avant sa mise en ligne." },
          { title: "Prix transparent", desc: "Un seul abonnement mensuel, taxes et détails clairs dès le premier appel." }
        ]
      },
      ctaBanner: {
        title: "Envie de rencontrer l'équipe?",
        subtitle: "Réservez un appel de découverte, sans obligation.",
        button: "Réserver un appel"
      }
    },
    contact: {
      header: {
        eyebrow: "Contact",
        title: "Parlons de votre projet",
        subtitle: "Remplissez le formulaire ci-dessous ou écrivez-nous directement. Nous répondons sous un jour ouvrable."
      },
      form: {
        name: "Nom complet",
        email: "Courriel",
        company: "Entreprise (optionnel)",
        plan: "Forfait qui vous intéresse",
        planOptions: [
          "Pas certain",
          "Core (199 $/mois)",
          "Plus (299 $/mois)",
          "Pro (499 $/mois)",
          "Signature (600 $+/mois)"
        ],
        message: "Parlez-nous de votre projet",
        submit: "Envoyer ma demande",
        note: "En cliquant, votre client courriel s'ouvrira avec les détails déjà remplis, prêts à envoyer à nexgenweb1@gmail.com.",
        requiredNote: "Champs requis : nom, courriel et message.",
        errorRequired: "Veuillez remplir votre nom, votre courriel et votre message avant d'envoyer.",
        errorEmail: "Veuillez entrer une adresse courriel valide."
      },
      info: {
        title: "Nous joindre",
        emailLabel: "Courriel",
        locationLabel: "Zone desservie",
        locationValue: "Partout au Canada",
        responseLabel: "Délai de réponse",
        responseValue: "1 jour ouvrable"
      }
    },
    privacy: {
      header: {
        eyebrow: "Confidentialité",
        title: "Politique de confidentialité",
        subtitle: "Comment NexGen Web Designs recueille, utilise et protège vos renseignements personnels."
      },
      updated: "Dernière mise à jour : 16 juillet 2026",
      intro: {
        title: "Notre engagement",
        body: "NexGen Web Designs s'engage à protéger la vie privée des visiteurs de ce site et de nos clients, conformément à la Loi sur la protection des renseignements personnels dans le secteur privé (communément appelée la Loi 25) et aux lois canadiennes applicables en matière de protection des renseignements personnels."
      },
      collect: {
        title: "Renseignements que nous recueillons",
        body: "Lorsque vous remplissez notre formulaire de contact, nous recueillons uniquement les renseignements que vous nous fournissez volontairement :",
        items: ["Nom complet", "Adresse courriel", "Nom de l'entreprise (facultatif)", "Le contenu de votre message et le forfait qui vous intéresse"],
        note: "Nous n'utilisons aucun témoin de suivi ni outil d'analyse tiers. Le seul élément conservé dans votre navigateur est votre préférence de langue (français ou anglais), enregistrée localement sur votre appareil et jamais transmise à nos serveurs."
      },
      purpose: {
        title: "Pourquoi nous recueillons ces renseignements",
        body: "Nous utilisons ces renseignements uniquement pour répondre à votre demande, préparer une soumission adaptée à votre projet et communiquer avec vous au sujet de nos services. Nous ne les utilisons à aucune autre fin."
      },
      sharing: {
        title: "Partage de vos renseignements",
        body: "Nous ne vendons, ne louons et ne partageons jamais vos renseignements personnels avec des tiers à des fins commerciales ou publicitaires. Vos renseignements peuvent être transmis à nos fournisseurs de services essentiels, comme notre service de messagerie courriel, uniquement dans la mesure nécessaire pour vous répondre, ou lorsque la loi l'exige."
      },
      retention: {
        title: "Conservation des renseignements",
        body: "Nous conservons vos renseignements personnels seulement le temps nécessaire pour répondre à votre demande ou pour la durée de notre relation d'affaires, puis nous les supprimons de façon sécuritaire, sauf si la loi exige une conservation plus longue."
      },
      security: {
        title: "Sécurité",
        body: "Nous mettons en place des mesures raisonnables, techniques et organisationnelles, pour protéger vos renseignements personnels contre la perte, le vol, ainsi que l'accès, l'utilisation ou la divulgation non autorisés."
      },
      rights: {
        title: "Vos droits en vertu de la Loi 25",
        body: "Vous avez le droit de :",
        items: [
          "Accéder aux renseignements personnels que nous détenons à votre sujet",
          "Faire rectifier tout renseignement inexact, incomplet ou périmé",
          "Retirer votre consentement à la collecte ou à l'utilisation de vos renseignements en tout temps",
          "Demander la suppression de vos renseignements personnels",
          "Déposer une plainte auprès de la Commission d'accès à l'information du Québec si vous estimez que vos droits n'ont pas été respectés"
        ]
      },
      contact: {
        title: "Nous contacter",
        body: "Pour exercer l'un de ces droits ou pour toute question au sujet de cette politique, écrivez-nous à nexgenweb1@gmail.com. Nous répondons à toute demande dans un délai raisonnable, conformément à la loi."
      }
    },
    footer: {
      tagline: "Conception de sites web pour les entreprises d'un bout à l'autre du Canada.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      locationLine: "Partout au Canada",
      legal: "Vos renseignements personnels sont traités de façon sécuritaire et confidentielle.",
      privacyLink: "Politique de confidentialité",
      copyright: "© 2026 NexGen Web Designs. Tous droits réservés."
    }
  },
  en: {
    meta: {
      home: {
        title: "NexGen Web Designs | Canadian Web Design Studio",
        description: "Canadian web design studio. Professional websites on a monthly subscription, no big upfront bill. Serving businesses nationwide across Canada."
      },
      services: {
        title: "Services & Pricing | NexGen Web Designs",
        description: "Monthly subscription plans for professional websites across Canada: Core $199, Plus $299, Pro $499, Signature $600+ CAD."
      },
      about: {
        title: "About | NexGen Web Designs",
        description: "NexGen Web Designs is a Canadian web design studio dedicated to businesses nationwide."
      },
      contact: {
        title: "Contact | NexGen Web Designs",
        description: "Let's talk about your website project. A Canadian studio serving businesses nationwide."
      },
      privacy: {
        title: "Privacy Policy | NexGen Web Designs",
        description: "How NexGen Web Designs collects, uses, and protects your personal information, in compliance with Quebec's Law 25."
      }
    },
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      cta: "Book a call",
      skip: "Skip to content"
    },
    home: {
      hero: {
        eyebrow: "A Canadian web studio",
        title: "Your business website. Paid month by month.",
        subtitle: "NexGen Web Designs builds custom websites for businesses from coast to coast, without a $5,000 bill upfront. One simple monthly subscription, everything included.",
        ctaPrimary: "See our plans",
        ctaSecondary: "Book a call",
        badge: "From $199 CAD / month"
      },
      trust: {
        eyebrow: "Proudly Canadian",
        title: "Built in Canada, for Canada",
        items: [
          { title: "100% Canadian-owned", desc: "A team that understands the Canadian market and how you do business, from coast to coast." },
          { title: "Privacy-first", desc: "Your data and your customers' data are handled according to Canadian privacy standards." },
          { title: "Billed in Canadian dollars", desc: "No surprise currency conversion: your invoices are always in CAD, month after month." },
          { title: "Delivered in 10–14 days", desc: "From our first call to launch, most projects go live within two weeks." }
        ]
      },
      value: {
        eyebrow: "Our approach",
        title: "One monthly subscription, not a shock invoice",
        body: "Traditional agencies charge $3,000 to $10,000 upfront for a website, before maintenance even enters the conversation. With NexGen, you pay one fixed monthly subscription that covers design, hosting, security, and updates. No surprises, no long-term contract.",
        traditionalTitle: "Traditional agency",
        traditional: [
          "$3,000–$10,000 upfront invoice",
          "Maintenance billed separately, by the hour",
          "Multi-year contracts",
          "2–4 month timelines"
        ],
        nexgenTitle: "NexGen Web Designs",
        nexgen: [
          "Monthly subscription from $199 CAD",
          "Hosting, security & updates included",
          "No long-term contract",
          "Delivered in 10–14 days"
        ]
      },
      servicesTeaser: {
        eyebrow: "Our plans",
        title: "A plan for every stage of your growth",
        link: "See all plans",
        cards: [
          { name: "Core", tag: "1 page", price: "$199", period: "/mo", desc: "One high-impact page to get your business online." },
          { name: "Plus", tag: "Multi-page", price: "$299", period: "/mo", desc: "A complete site to showcase your services in depth." },
          { name: "Pro", tag: "Automation", price: "$499", period: "/mo", desc: "Automated booking and client follow-up." },
          { name: "Signature", tag: "Custom", price: "$600+", period: "/mo", desc: "A fully custom web solution." }
        ]
      },
      ctaBanner: {
        title: "Ready to bring your business online?",
        subtitle: "Book a free 20-minute call, no strings attached.",
        button: "Book a call"
      }
    },
    services: {
      header: {
        eyebrow: "Our plans",
        title: "Simple plans, one monthly subscription",
        subtitle: "Four plans built for every stage of your business. Priced in Canadian dollars, no billing surprises."
      },
      plans: [
        {
          name: "Core", tag: "1 page", price: "$199", period: "/mo CAD",
          desc: "One high-impact page to get your business online, fast.",
          features: [
            "Single-page, custom design",
            "Optimized for mobile & tablet",
            "Built-in contact form",
            "Hosting & domain included",
            "Basic local SEO setup"
          ],
          cta: "Choose Core"
        },
        {
          name: "Plus", tag: "Multi-page", price: "$299", period: "/mo CAD", badge: "Most popular",
          desc: "A multi-page site to showcase your services in depth.",
          features: [
            "Up to 5 pages (Home, Services, About, etc.)",
            "Fully custom design",
            "Forms & Google Maps integration",
            "Hosting, security & updates included",
            "Advanced local SEO"
          ],
          cta: "Choose Plus"
        },
        {
          name: "Pro", tag: "Automation", price: "$499", period: "/mo CAD",
          desc: "For businesses ready to automate booking and client follow-up.",
          features: [
            "Everything in Plus",
            "Bilingual (FR/EN) support included by default",
            "Automated online booking",
            "Email automations (follow-ups, reminders)",
            "Integrations with your tools (CRM, calendar)",
            "Monthly performance reports"
          ],
          cta: "Choose Pro"
        },
        {
          name: "Signature", tag: "Custom", price: "$600+", period: "/mo CAD",
          desc: "A fully custom web solution for complex projects or specific needs.",
          features: [
            "Custom architecture & functionality",
            "Online stores, client portals or web apps",
            "Advanced integrations (ERP, payment, API)",
            "Dedicated strategic guidance",
            "Priority support"
          ],
          cta: "Discuss my project"
        }
      ],
      faq: {
        eyebrow: "Frequently asked",
        title: "What we get asked the most",
        items: [
          { q: "Can I cancel my subscription at any time?", a: "Yes. There's no long-term contract: you can change or cancel your plan with 30 days' notice." },
          { q: "Are hosting and the domain name included?", a: "Yes, every plan includes hosting, security, and domain management." },
          { q: "How long until my site goes live?", a: "Most projects are delivered within 10 to 14 business days after our first call." },
          { q: "What if my needs change?", a: "You can switch plans at any time to match your subscription to your business's growth." }
        ]
      },
      ctaBanner: {
        title: "Not sure which plan is right for you?",
        subtitle: "Let's book a call and we'll guide you, no pressure.",
        button: "Book a call"
      }
    },
    about: {
      header: {
        eyebrow: "About",
        title: "Canada's web partner for businesses that move forward",
        subtitle: "We design professional websites for shops, firms, and entrepreneurs from coast to coast, with agency-level craft and subscription-level simplicity."
      },
      story: {
        eyebrow: "Our story",
        title: "Why NexGen exists",
        body: "Too many businesses put off going online because of a five-figure upfront invoice. NexGen Web Designs was founded to change that: a professional website, delivered quickly, paid for monthly, like any other essential business tool.",
        body2: "We work with neighbourhood shops, professional firms, and entrepreneurs across Canada, always in both French and English."
      },
      process: {
        eyebrow: "Our process",
        title: "From first call to launch",
        steps: [
          { num: "01", title: "Discover", desc: "A 20-minute call to understand your goals, your customers, and your needs." },
          { num: "02", title: "Design", desc: "We design a custom mockup aligned with your brand." },
          { num: "03", title: "Build", desc: "Your site is built, tested on mobile and tablet, and optimized for local SEO." },
          { num: "04", title: "Launch & support", desc: "We launch your site, then handle ongoing maintenance, security, and updates as part of your subscription." }
        ]
      },
      values: {
        eyebrow: "How we work",
        title: "What we don't compromise on",
        items: [
          { title: "Direct communication", desc: "You talk directly to the person building your site, not a middleman." },
          { title: "Fast, without shortcuts", desc: "A short timeline doesn't mean rushed work: every site is tested before it goes live." },
          { title: "Transparent pricing", desc: "One monthly subscription, with taxes and details made clear from the first call." }
        ]
      },
      ctaBanner: {
        title: "Want to meet the team?",
        subtitle: "Book a discovery call, no obligation.",
        button: "Book a call"
      }
    },
    contact: {
      header: {
        eyebrow: "Contact",
        title: "Let's talk about your project",
        subtitle: "Fill out the form below or reach out directly. We reply within one business day."
      },
      form: {
        name: "Full name",
        email: "Email",
        company: "Company (optional)",
        plan: "Plan you're interested in",
        planOptions: [
          "Not sure yet",
          "Core ($199/mo)",
          "Plus ($299/mo)",
          "Pro ($499/mo)",
          "Signature ($600+/mo)"
        ],
        message: "Tell us about your project",
        submit: "Send my request",
        note: "Clicking this will open your email client with the details pre-filled, ready to send to nexgenweb1@gmail.com.",
        requiredNote: "Required fields: name, email, and message.",
        errorRequired: "Please fill in your name, email, and message before sending.",
        errorEmail: "Please enter a valid email address."
      },
      info: {
        title: "Get in touch",
        emailLabel: "Email",
        locationLabel: "Service area",
        locationValue: "Nationwide across Canada",
        responseLabel: "Response time",
        responseValue: "1 business day"
      }
    },
    privacy: {
      header: {
        eyebrow: "Privacy",
        title: "Privacy Policy",
        subtitle: "How NexGen Web Designs collects, uses, and protects your personal information."
      },
      updated: "Last updated: July 16, 2026",
      intro: {
        title: "Our commitment",
        body: "NexGen Web Designs is committed to protecting the privacy of visitors to this site and our clients, in compliance with Quebec's Act Respecting the Protection of Personal Information in the Private Sector (commonly known as Law 25) and applicable Canadian privacy laws."
      },
      collect: {
        title: "Information we collect",
        body: "When you fill out our contact form, we collect only the information you voluntarily provide to us:",
        items: ["Full name", "Email address", "Company name (optional)", "The content of your message and the plan you're interested in"],
        note: "We do not use any tracking cookies or third-party analytics tools. The only thing stored in your browser is your language preference (French or English), saved locally on your device and never transmitted to our servers."
      },
      purpose: {
        title: "Why we collect this information",
        body: "We use this information only to respond to your inquiry, prepare a quote tailored to your project, and communicate with you about our services. We do not use it for any other purpose."
      },
      sharing: {
        title: "Sharing your information",
        body: "We never sell, rent, or share your personal information with third parties for commercial or advertising purposes. Your information may be passed to our essential service providers, such as our email service, only to the extent necessary to respond to you, or where required by law."
      },
      retention: {
        title: "Retention of information",
        body: "We keep your personal information only as long as necessary to respond to your inquiry or for the duration of our business relationship, then securely delete it, unless the law requires a longer retention period."
      },
      security: {
        title: "Security",
        body: "We implement reasonable technical and organizational measures to protect your personal information against loss, theft, and unauthorized access, use, or disclosure."
      },
      rights: {
        title: "Your rights under Law 25",
        body: "You have the right to:",
        items: [
          "Access the personal information we hold about you",
          "Request the correction of any inaccurate, incomplete, or outdated information",
          "Withdraw your consent to the collection or use of your information at any time",
          "Request the deletion of your personal information",
          "File a complaint with Quebec's Commission d'accès à l'information if you believe your rights have not been respected"
        ]
      },
      contact: {
        title: "Contact us",
        body: "To exercise any of these rights or for any question about this policy, write to us at nexgenweb1@gmail.com. We respond to all requests within a reasonable time, in accordance with the law."
      }
    },
    footer: {
      tagline: "Web design for businesses from coast to coast across Canada.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      locationLine: "Nationwide across Canada",
      legal: "Your personal information is handled securely and kept confidential.",
      privacyLink: "Privacy Policy",
      copyright: "© 2026 NexGen Web Designs. All rights reserved."
    }
  }
};

function ngGetLang() {
  return localStorage.getItem("ng_lang") || "fr";
}

function ngSetLang(lang) {
  localStorage.setItem("ng_lang", lang);
}

function ngGetNested(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

function ngApplyStaticTranslations(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = ngGetNested(dict, key);
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = ngGetNested(dict, key);
    if (val !== undefined) el.setAttribute("placeholder", val);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    const val = ngGetNested(dict, key);
    if (val !== undefined) el.setAttribute("aria-label", val);
  });

  const pageKey = document.body.getAttribute("data-page");
  if (pageKey && dict.meta && dict.meta[pageKey]) {
    document.title = dict.meta[pageKey].title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict.meta[pageKey].description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dict.meta[pageKey].title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", dict.meta[pageKey].description);
  }

  document.querySelectorAll("[data-lang-label]").forEach((el) => {
    el.textContent = lang === "fr" ? "EN" : "FR";
  });
}

function ngSwitchLang(nextLang) {
  ngSetLang(nextLang);
  ngApplyStaticTranslations(nextLang);
  document.dispatchEvent(new CustomEvent("ng:langchange", { detail: { lang: nextLang } }));
}
