export const SUPPORTED_LANGUAGES = [
  { code: "en", label: "EN", fullName: "English" },
  { code: "hi", label: "हिं", fullName: "हिन्दी" },
  { code: "mr", label: "मर", fullName: "मराठी" },
];

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      cities: "Cities",
      Airport: "Airport",
      cabs: "Cabs",
      railway: "Railway Station",
      bus: "Bus",
      bookNow: "Book Now",
    },
    navSidebar: {
      home: "Home",
      aboutUs: "About Us",
      cities: "Cities",
      airport: "Airport",
      cabs: "Cabs",
      railwayStation: "Railway Station",
      bus: "Bus",
      contactUs: "Contact Us",
      address: "Coming soon...",
    },
    heroSec: {
      prevSlideAria: "Previous Slide",
      nextSlideAria: "Next Slide",
      slides: [
        {
          id: 1,
          title: "TRAVEL ANYWHERE. COMFORTABLY & ON TIME.",
          subTitle: "Book With Us",
          desc: "One-Way • Round Trip • Airport • Outstation Cabs.",
          btnText: "Get a Quick Quote",
        },
        {
          id: 2,
          title: "NEVER MISS A FLIGHT. RIDE WITH CONFIDENCE.",
          subTitle: "24/7 Airport Transfers",
          desc: "Punctual doorstep pickup and drop services from Nashik to Mumbai, Pune & Shirdi Airports.",
          btnText: "Explore Airport Cabs",
        },
      ],
    },
    aboutSec: {
      heading: "COMFORTABLE JOURNEYS ACROSS ",
      highlightWord: "MAHARASHTRA",
      description:
        "We provide a seamless and reliable way to explore the world around you, making every journey an enjoyable experience. From spiritual pilgrimages to Shirdi and Trimbakeshwar to comfortable family road trips across Maharashtra, we deliver clean vehicles, verified local drivers, and transparent pricing from Nashik.",
      badgeText: {
        normalText: 8,
        highlightedText: "8 Years of Service",
      },
      keyPoints: [
        {
          id: 1,
          imgIcon: "/images/happy-face.png",
          title: "Happy Traveller",
          number: 124,
        },
        {
          id: 2,
          imgIcon: "/images/rate.png",
          title: "Satisfaction Rate",
          number: 126,
        },
      ],
      btnText: "Read More",
    },
    aboutPageExplorationSec: {
      heading: "10 Years of Delivering Reliable ",
      highlightWord: "Cab Journeys",
      description:
        "Prachi Tours & Travels Airport Cabs is a trusted intercity and local taxi service in Nashik. With a well-maintained fleet and courteous, verified drivers, we make airport transfers, pilgrimage tours, and outstation family trips safe and punctual.",
      vissionMission: [
        {
          id: "vision",
          title: "Vision",
          desc: "To be Maharashtra's most trusted and customer-first cab rental service, setting the benchmark for safety, punctuality, and transparent pricing.",
        },
        {
          id: "mission",
          title: "Mission",
          desc: "To deliver clean, comfortable vehicles with experienced drivers 24/7, making every pilgrimage, airport drop, and outstation journey completely stress-free.",
        },
      ],
    },
    aboutDownloadSec: {
      titlePrefix: "Ever wondered how smooth your journey can be? At ",
      titleHighlight: "Prachi Tours & Travels Airport Cabs",
      titleSuffix: "We Make It Happen.",
    },
    pilgrimStandardSec: {
      title: "The Premium Ride",
      highlightWord: "Standard",
      cards: [
        {
          title: "Vetted & Verified Drivers",
          description:
            "Every driver undergoes a background check and a specialized orientation for the Nashik city routes and temple etiquettes.",
        },
        {
          title: "100% Booking Guarantee",
          description:
            "Once confirmed, your vehicle is locked in. No cancellations during the peak mela hours.",
        },
        {
          title: "Sanitized Fleet",
          description:
            "Vehicles are deep cleaned after every trip following international hygiene protocols.",
        },
        {
          title: "24/7 Roadside Assistance",
          description:
            "Dedicated helpline for any on-road emergencies, ensuring your journey remains uninterrupted.",
        },
      ],
    },
    counterSec: {},
    whyChooseUs: {
      title: "Why Choose",
      highlightWord: "Us",
      features: [
        {
          id: 1,
          iconName: "UserCheck",
          title: "Tour Guide",
          description:
            "Professional, well-mannered drivers who double as local travel guides throughout Maharashtra.",
        },
        {
          id: 2,
          iconName: "Coins",
          title: "Friendly Price",
          description:
            "Transparent, budget-friendly outstation Cab / Taxi rates with no hidden tolls or surprise surcharges.",
        },
        {
          id: 3,
          iconName: "CalendarDays",
          title: "Instant Booking",
          description:
            "Seamless 24/7 digital reservations with instant ride allocation and quick vehicle dispatch.",
        },
        {
          id: 4,
          iconName: "FileText",
          title: "Custom Strategy",
          description:
            "Tailored transit logistics carefully planned for corporate events, family trips, and pilgrimages.",
        },
      ],
    },
    testimonialSec: {
      heading: "What our Clients",
      highlight: "say",
      reviewBtn: "Review",
      badgeLabel: "Verified Review",
      items: [
        {
          id: 1,
          rating: 5,
          text: "Stress-free 4 AM airport drop with clear upfront pricing on WhatsApp. Neat clean new car and well-trained chauffeur.",
          name: "Sneha Deshmukh",
          location: "Indira Nagar, Nashik",
          trip: "Mumbai Airport Drop (Sedan)",
        },
        {
          id: 2,
          rating: 5,
          text: "Booked 2 Innova Crysta cabs from Nashik to Mumbai International Airport for a return journey. Very punctual and reliable service.",
          name: "Vishal Tambe",
          location: "College Road, Nashik",
          trip: "Nashik to Mumbai Airport (Innova Crysta)",
        },
        {
          id: 3,
          rating: 5,
          text: "Best cab rental service in Nashik for family travel. Smooth and comfortable ride to Pune Airport with courteous driving.",
          name: "Sagar Kadam",
          location: "Gangapur Road, Nashik",
          trip: "Nashik to Pune Airport (SUV)",
        },
        {
          id: 4,
          rating: 5,
          text: "Hired a one-way cab from Nashik to Pune Airport Viman Nagar. Nice experience, transparent fare, and clean vehicle.",
          name: "Ratnadeep Lokhande",
          location: "Panchavati, Nashik",
          trip: "Nashik to Viman Nagar, Pune (One Way)",
        },
        {
          id: 5,
          rating: 5,
          text: "Very impressive and prompt cab service for Mumbai and Pune Airport transfers. Always on time even for early morning flights.",
          name: "Sumit Pavankar",
          location: "Cidco, Nashik",
          trip: "Mumbai & Pune Airport Transfer (Sedan)",
        },
        {
          id: 6,
          rating: 5,
          text: "Booked a cab from Nashik Panchavati to Shirdi and Pune. Hassle-free booking and polite driver throughout the trip.",
          name: "Kiran Nawale",
          location: "Panchavati, Nashik",
          trip: "Nashik to Pune Outstation (Sedan)",
        },
      ],
    },
    servicesPromoSec: {
      highlightText: "",
      mainTitleNormal: "",
      mainTitleBold: "COMPLETE TRAVEL & ",
      highlightWord: "CAB SERVICES.",
      mainTitleSuffix: "",
      buttonText: "",
      desc: [],
      features: [
        {
          id: 1,
          icon: "/images/deal.png",
          title: "Hire Cab / Taxis in Nashik",
          description:
            "A diverse fleet of reliable vehicles, from luxury sedans to spacious vans, tailored perfectly for solo travelers, families, and corporate groups.",
        },
        {
          id: 2,
          icon: "/images/airport-transfer.svg",
          title: "Airport Pickup / Drop Cab / Taxi Services",
          description:
            "Reliable and punctual transfers to and from all major airports including CSMIA Mumbai. Professional chauffeurs ensure you never miss a flight.",
        },
        {
          id: 3,
          icon: "/images/bus.png",
          title: "Bus Services from Nashik",
          description:
            "Spacious and comfortable bus rentals for group pilgrimages and corporate tours in Nashik and surrounding areas, equipped with modern amenities.",
        },
        {
          id: 4,
          icon: "/images/luggage.png",
          title: "Corporate Travel",
          description:
            "Streamlined corporate logistics and efficient group transportation solutions customized to simplify high-level business travel needs.",
        },
      ],
    },
    servicesSec: {
      title: " Choose Your Ride For Every",
      highlightWord: "Journey",
    },
    servicesGridSec: {
      heading: "",
      viewDetailsBtn: "View Details",
    },
    serviceTabsSec: {
      title: "Choose Your Ride For Every",
      highlightWord: "Journey",
      tabs: {
        sedan: "Sedan",
        suv: "SUV",
        tempoTraveller: "Tempo Traveller",
        bus: "Bus",
      },
      viewDetailsBtn: "View Details",
      emptyMessage:
        "No fleet available under this specific category selection.",
    },
    cabDetailSec: {
      backBtn: "Back to Fleet Selection",
      backToCabs: "Back to Cabs",
      backToBus: "Back to Buses",
      fleetChoiceSuffix: "Fleet Choice",
      bookHirePrefix: "Book / Hire",
      journeyOverview: "Journey Overview",
      amenitiesTitle: "Vehicle Amenities & Inclusions",
      rateCardTitle: "Estimated Rate Card (Per-Km Matrix)",
      tableHeaders: {
        vehicleModel: "Vehicle Model",
        ratePerKm: "Rate / KM",
        minLimit: "Min. Limit",
        driverAllowance: "Driver Allowance",
      },
      rateDisclaimer:
        "*Note: Tolls, state permits, and state parking charges are calculated additionally based on your exact route checkpoints.",
      driverTitle: "Experienced Drivers Included",
      driverDescPrefix: "Every ride booked with",
      driverDescSuffix:
        "includes an experienced, professional driver-cum-guide who is well-mannered and fully vetted for a safe journey.",
      bookingRefTitle: "Booking Reference & Service Scope",
      callUsBtn: "Call Us",
      whatsappBtn: "Chat with Us",
    },
    ctaSec: {
      titlePrefix: "Ready to Travel? Book Your Cab",
      titleHighlight: "for a Safe",
      titleSuffix: "& On-Time Ride!",
      contactBtn: "Contact Us",
      whatsappBtn: "Chat with Us",
    },
    travelLinks: {},
    pagesSec: {},
    form: {
      title: "Book Your Cab Ride",
      subtitle: "To get the ride of your Cab please select from the following:",
      fullName: "Full Name",
      phone: "Phone No",
      email: "Email Address",
      vehicleType: "Choose Vehicle Type",
      tourType: "Choose Tour Type",
      tourTypeOptions: {
        outstation: "Outstation",
        oneWay: "One Way",
        roundTrip: "Round Trip",
        airport: "Airport Pickup / Drop",
        local: "Local",
      },
      pickupAddress: "Pickup Add.",
      dropAddress: "Drop Add.",
      pickupDate: "Pickup Date",
      pickupTime: "Pickup Time",
      message: "Additional Instructions / Message",
      submitBtn: "Submit Request",
    },
    common: {},
    footerLinksSec: {
      heading: "POPULAR CITY",
      highlight: "SERVICES",
      description:
        "Discover Reliable Cab / Taxi Rental Services in Top Cities with Prachi Tours & Travels Cabs / Taxi. Click Below to Explore Availability!",
      pillGridHeading: "EXPLORE POPULAR",
      pillGridHighlight: "CITY ROUTES",
    },
    footer: {
      description:
        "Local Nashik travel desk for Maharashtra tours, pilgrimage trips, and clean outstation cabs.",
      quickLinksTitle: "Quick Links",
      otherServicesTitle: "Other Services",
      contactInfoTitle: "Contact Info",
      address: "Nashik, Maharashtra",
      links: {
        home: "Home",
        about: "About",
        contact: "Contact",
        cities: "Cities",
        airport: "Airport",
        cabs: "Cabs",
        railway: "Railway Station",
        bus: "Bus",
      },
      copyright: "All Rights Reserved by",
      companyName: "Prachi Tours & Travels",
      developedBy: "Design & Developed By",
    },
    button: {
      bookNow: "Book Now",
    },
    cabsTabsSec: {
      title: "Choose Your",
      highlightWord: "Cab",
      desc: "",
    },
    busTabsSec: {
      title: "Group Travel",
      highlightWord: "Buses",
      desc: "",
    },
    popularDestinationsSec: {
      title: "Most Popular",
      highlightWord: "City",
      footerText: "These popular cities have a lot to offer!",
      buttonText: "View All Cities",
    },
    destinationCard: {
      sightseeingSpots: "Sightseeing Spots",
    },
    contactPage: {
      bannerTitle: "Contact Us",
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Contact Us",
      heading: "Get in Touch",
      subText:
        "Premium intercity mobility across Maharashtra. We're here to assist with your travel needs, 24/7.",
      cards: {
        officeTitle: "Our Office",
        officeAddress:
          "Nashik, Maharashtra",
        emailTitle: "Email Us",
        callTitle: "Call Us",
        callNote: "Available 24/7 for support and bookings.",
      },
      form: {
        fullNameLabel: "Full Name",
        fullNamePlaceholder: "John Doe",
        emailLabel: "Email Address",
        emailPlaceholder: "john@example.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+91 00000 00000",
        subjectLabel: "Subject",
        subjectPlaceholder: "Inquiry about...",
        messageLabel: "Message",
        messagePlaceholder: "How can we help you today?",
        submitBtn: "Submit Message",
      },
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      cities: "शहर",
      Airport: "एयरपोर्ट",
      cabs: "कैब्स",
      railway: "रेलवे स्टेशन",
      bus: "बस",
      bookNow: "अभी बुक करें",
    },
    navSidebar: {
      home: "होम",
      aboutUs: "हमारे बारे में",
      cities: "शहर",
      airport: "एयरपोर्ट",
      cabs: "कैब्स",
      railwayStation: "रेलवे स्टेशन",
      bus: "बस",
      contactUs: "संपर्क करें",
      address: "जल्द आ रहा है...",
    },
    heroSec: {
      prevSlideAria: "पिछली स्लाइड",
      nextSlideAria: "अगली स्लाइड",
      slides: [
        {
          id: 1,
          title: "कहीं भी यात्रा करें। आरामदायक और समय पर।",
          subTitle: "हमारे साथ बुक करें",
          desc: "वन-वे • राउंड ट्रिप • एयरपोर्ट • आउटस्टेशन कैब्स।",
          btnText: "त्वरित कोटेशन प्राप्त करें",
        },
        {
          id: 2,
          title: "कभी अपनी फ्लाइट न चूकें। भरोसे के साथ सफर करें।",
          subTitle: "24/7 एयरपोर्ट ट्रांसफर",
          desc: "नासिक से मुंबई, पुणे और शिर्डी एयरपोर्ट के लिए समय पर पिकअप और ड्रॉप सेवाएं।",
          btnText: "एयरपोर्ट कैब देखें",
        },
      ],
    },
    aboutSec: {
      heading: "संसार की सैर का आपका सहज ",
      highlightWord: "मार्ग",
      description:
        "हम आपको अपने आस-पास की दुनिया घूमने का एक सहज और विश्वसनीय माध्यम प्रदान करते हैं, जिससे हर यात्रा एक सुखद अनुभव बन जाती है। शिर्डी और त्र्यंबकेश्वर की आध्यात्मिक तीर्थयात्रा से लेकर पूरे महाराष्ट्र में आरामदायक पारिवारिक रोड ट्रिप तक, हम नासिक से स्वच्छ वाहन, सत्यापित स्थानीय ड्राइवर और पारदर्शी किराया प्रदान करते हैं।",
      badgeText: {
        normalText: 8,
        highlightedText: "8 वर्षों की सेवा",
      },
      keyPoints: [
        {
          id: 1,
          imgIcon: "/images/happy-face.png",
          title: "परिवहन सेवा",
          number: 150,
        },
        {
          id: 2,
          imgIcon: "/images/rate.png",
          title: "परिवहन सेवा",
          number: 76,
        },
      ],
      btnText: "और पढ़ें",
    },
    aboutPageExplorationSec: {
      heading: "10 वर्षों से भरोसेमंद ",
      highlightWord: "कैब यात्रा का अनुभव",
      description:
        "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स नासिक की एक विश्वसनीय इंटरसिटी और लोकल टैक्सी सेवा है। सुव्यवस्थित वाहनों और अनुभवी, विनम्र ड्राइवरों के साथ हम एयरपोर्ट ट्रांसफर, तीर्थयात्रा और पारिवारिक आउटस्टेशन सफर को सुरक्षित और समयनिष्ठ बनाते हैं।",
      vissionMission: [
        {
          id: "vision",
          title: "विज़न (दृष्टिकोण)",
          desc: "सुरक्षा, समयबद्धता और पारदर्शी किराए के उच्च मानकों के साथ महाराष्ट्र की सबसे भरोसेमंद और ग्राहक-प्रथम कैब रेंटल सेवा बनना।",
        },
        {
          id: "mission",
          title: "मिशन (लक्ष्य)",
          desc: "24/7 अनुभवी ड्राइवरों के साथ स्वच्छ और आरामदायक वाहन उपलब्ध कराना, ताकि हर तीर्थयात्रा, एयरपोर्ट ड्रॉप और आउटस्टेशन सफर पूरी तरह तनाव-मुक्त रहे।",
        },
      ],
    },
    aboutDownloadSec: {
      titlePrefix: "क्या आपने कभी सोचा है कि आपका सफर कितना सुगम हो सकता है? ",
      titleHighlight: "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स",
      titleSuffix: " में हम इसे संभव बनाते हैं।",
    },
    pilgrimStandardSec: {
      title: "प्रीमियम राइड",
      highlightWord: "मानक",
      cards: [
        {
          title: "सत्यापित और अनुभवी ड्राइवर",
          description:
            "प्रत्येक ड्राइवर की पृष्ठभूमि की जांच की जाती है और नासिक शहर के मार्गों व मंदिर शिष्टाचार के लिए विशेष प्रशिक्षण दिया जाता है।",
        },
        {
          title: "100% बुकिंग गारंटी",
          description:
            "एक बार पुष्टि होने के बाद आपका वाहन सुनिश्चित हो जाता है। भीड़भाड़ के समय में भी कोई रद्दीकरण नहीं।",
        },
        {
          title: "स्वच्छ और सैनिटाइज़्ड वाहन",
          description:
            "अंतरराष्ट्रीय स्वच्छता मानकों का पालन करते हुए प्रत्येक यात्रा के बाद वाहनों की गहरी सफाई की जाती है।",
        },
        {
          title: "24/7 रोडसाइड सहायता",
          description:
            "सड़क पर किसी भी आपात स्थिति के लिए समर्पित हेल्पलाइन, ताकि आपकी यात्रा निर्बाध बनी रहे।",
        },
      ],
    },
    counterSec: {},
    whyChooseUs: {
      title: "हमें ही",
      highlightWord: "क्यों चुनें",
      features: [
        {
          id: 1,
          iconName: "UserCheck",
          title: "टूर गाइड",
          description:
            "पेशेवर और विनम्र ड्राइवर, जो पूरे महाराष्ट्र में आपके स्थानीय ट्रैवल गाइड की भूमिका भी निभाते हैं।",
        },
        {
          id: 2,
          iconName: "Coins",
          title: "किफायती किराया",
          description:
            "बिना किसी छिपे टोल या अतिरिक्त शुल्क के पारदर्शी और बजट-अनुकूल आउटस्टेशन कैब/टैक्सी दरें।",
        },
        {
          id: 3,
          iconName: "CalendarDays",
          title: "तत्काल बुकिंग",
          description:
            "तुरंत राइड आवंटन और त्वरित वाहन डिस्पैच के साथ सहज 24/7 डिजिटल बुकिंग सुविधा।",
        },
        {
          id: 4,
          iconName: "FileText",
          title: "कस्टम यात्रा योजना",
          description:
            "कॉर्पोरेट इवेंट्स, पारिवारिक यात्राओं और तीर्थयात्राओं के लिए विशेष रूप से तैयार की गई यात्रा व्यवस्था।",
        },
      ],
    },
    testimonialSec: {
      heading: "हमारे ग्राहक क्या",
      highlight: "कहते हैं",
      reviewBtn: "रिव्यू दें",
      badgeLabel: "सत्यापित समीक्षा",
      items: [
        {
          id: 1,
          rating: 5,
          text: "व्हाट्सएप पर स्पष्ट और पारदर्शी किराये के साथ सुबह 4 बजे तनाव-मुक्त एयरपोर्ट ड्रॉप। साफ-सुथरी नई कार और प्रशिक्षित ड्राइवर।",
          name: "स्नेहा देशमुख",
          location: "इंदिरा नगर, नासिक",
          trip: "मुंबई एयरपोर्ट ड्रॉप (सेडान)",
        },
        {
          id: 2,
          rating: 5,
          text: "नासिक से मुंबई इंटरनेशनल एयरपोर्ट की वापसी यात्रा के लिए 2 इनोवा क्रिस्टा बुक कीं। बेहद समयनिष्ठ और भरोसेमंद सेवा।",
          name: "विशाल तांबे",
          location: "कॉलेज रोड, नासिक",
          trip: "नासिक से मुंबई एयरपोर्ट (इनोवा क्रिस्टा)",
        },
        {
          id: 3,
          rating: 5,
          text: "पारिवारिक यात्रा के लिए नासिक में सर्वश्रेष्ठ कैब रेंटल सेवा। विनम्र ड्राइवर के साथ पुणे एयरपोर्ट तक आरामदायक सफर।",
          name: "सागर कदम",
          location: "गंगापुर रोड, नासिक",
          trip: "नासिक से पुणे एयरपोर्ट (एसयूवी)",
        },
        {
          id: 4,
          rating: 5,
          text: "नासिक से पुणे एयरपोर्ट विमान नगर के लिए वन-वे कैब बुक की। शानदार अनुभव, पारदर्शी किराया और स्वच्छ गाड़ी।",
          name: "रत्नदीप लोखंडे",
          location: "पंचवटी, नासिक",
          trip: "नासिक से विमान नगर, पुणे (वन-वे)",
        },
        {
          id: 5,
          rating: 5,
          text: "मुंबई और पुणे एयरपोर्ट ट्रांसफर के लिए बेहद प्रभावशाली और त्वरित कैब सेवा। सुबह की फ्लाइट के लिए भी हमेशा समय पर।",
          name: "सुमित पावनकर",
          location: "सिडको, नासिक",
          trip: "मुंबई और पुणे एयरपोर्ट ट्रांसफर (सेडान)",
        },
        {
          id: 6,
          rating: 5,
          text: "नासिक पंचवटी से शिर्डी और पुणे के लिए कैब बुक की। आसान बुकिंग प्रक्रिया और पूरे सफर में विनम्र ड्राइवर।",
          name: "किरण नवले",
          location: "पंचवटी, नासिक",
          trip: "नासिक से पुणे आउटस्टेशन (सेडान)",
        },
      ],
    },
    servicesPromoSec: {
      highlightText: "",
      mainTitleNormal: "",
      mainTitleBold: "संपूर्ण ट्रैवल और ",
      highlightWord: "कैब सेवाएं।",
      mainTitleSuffix: "",
      buttonText: "",
      desc: [],
      features: [
        {
          id: 1,
          icon: "/images/deal.png",
          title: "नासिक में कैब / टैक्सी किराए पर लें",
          description:
            "लक्ज़री सेडान से लेकर विशाल वैन तक विश्वसनीय वाहनों का विविध बेड़ा, जो अकेले यात्रियों, परिवारों और कॉर्पोरेट समूहों के लिए बिल्कुल उपयुक्त है।",
        },
        {
          id: 2,
          icon: "/images/airport-transfer.svg",
          title: "एयरपोर्ट पिकअप / ड्रॉप कैब और टैक्सी सेवाएं",
          description:
            "CSMIA मुंबई सहित सभी प्रमुख एयरपोर्ट के लिए भरोसेमंद और समयनिष्ठ ट्रांसफर सेवा। अनुभवी ड्राइवर सुनिश्चित करते हैं कि आपकी फ्लाइट कभी न छूटे।",
        },
        {
          id: 3,
          icon: "/images/bus.png",
          title: "नासिक से बस सेवाएं",
          description:
            "नासिक और आसपास के क्षेत्रों में सामूहिक तीर्थयात्राओं और कॉर्पोरेट टूर के लिए आधुनिक सुविधाओं से सुसज्जित विशाल और आरामदायक बस रेंटल सेवा।",
        },
        {
          id: 4,
          icon: "/images/luggage.png",
          title: "कॉर्पोरेट ट्रैवल",
          description:
            "व्यावसायिक यात्रा की जरूरतों को सरल बनाने के लिए तैयार की गई सुव्यवस्थित कॉर्पोरेट लॉजिस्टिक्स और कुशल समूह परिवहन सेवाएं।",
        },
      ],
    },
    servicesSec: {},
    servicesGridSec: {
      heading: "",
      viewDetailsBtn: "विवरण देखें",
    },
    serviceTabsSec: {
      title: "हर सफर के लिए चुनें अपनी मनपसंद",
      highlightWord: "सवारी",
      tabs: {
        sedan: "सेडान",
        suv: "एसयूवी",
        tempoTraveller: "टेम्पो ट्रैवलर",
        bus: "बस",
      },
      viewDetailsBtn: "विवरण देखें",
      emptyMessage: "इस श्रेणी में वर्तमान में कोई वाहन उपलब्ध नहीं है।",
    },
    cabDetailSec: {
      backBtn: "वाहन सूची पर वापस जाएं",
      backToCabs: "कैब सूची पर वापस जाएं",
      backToBus: "बस सूची पर वापस जाएं",
      fleetChoiceSuffix: "श्रेणी वाहन",
      bookHirePrefix: "बुक / किराए पर लें",
      journeyOverview: "यात्रा विवरण",
      amenitiesTitle: "वाहन सुविधाएं और समावेशन",
      rateCardTitle: "अनुमानित किराया दर (प्रति-किमी सूची)",
      tableHeaders: {
        vehicleModel: "वाहन मॉडल",
        ratePerKm: "दर / किमी",
        minLimit: "न्यूनतम सीमा",
        driverAllowance: "ड्राइवर भत्ता",
      },
      rateDisclaimer:
        "*नोट: टोल, राज्य परमिट और पार्किंग शुल्क आपके सटीक यात्रा मार्ग के आधार पर अतिरिक्त रूप से लागू होंगे।",
      driverTitle: "अनुभवी ड्राइवर शामिल",
      driverDescPrefix: "",
      driverDescSuffix:
        "के साथ बुक की गई प्रत्येक राइड में एक अनुभवी, विनम्र और सत्यापित पेशेवर ड्राइवर-सह-गाइड शामिल होता है।",
      bookingRefTitle: "बुकिंग संदर्भ और सेवा दायरा",
      callUsBtn: "कॉल करें",
      whatsappBtn: "व्हाट्सएप पर बात करें",
    },
    ctaSec: {
      titlePrefix: "यात्रा के लिए तैयार हैं? अपनी कैब बुक करें",
      titleHighlight: "सुरक्षित और समय पर",
      titleSuffix: "सफर के लिए!",
      contactBtn: "संपर्क करें",
      whatsappBtn: "व्हाट्सएप पर बात करें",
    },
    travelLinks: {},
    pagesSec: {},
    form: {
      title: "अपनी कैब राइड बुक करें",
      subtitle: "अपनी कैब बुक करने के लिए कृपया नीचे दिए गए विवरण चुनें:",
      fullName: "पूरा नाम",
      phone: "फ़ोन नंबर",
      email: "ईमेल पता",
      vehicleType: "वाहन का प्रकार चुनें",
      tourType: "यात्रा का प्रकार चुनें",
      tourTypeOptions: {
        outstation: "आउटस्टेशन",
        oneWay: "वन-वे",
        roundTrip: "राउंड ट्रिप",
        airport: "एयरपोर्ट पिकअप / ड्रॉप",
        local: "लोकल",
      },
      pickupAddress: "पिकअप पता",
      dropAddress: "ड्रॉप पता",
      pickupDate: "पिकअप की तारीख",
      pickupTime: "पिकअप का समय",
      message: "अतिरिक्त निर्देश / संदेश",
      submitBtn: "अनुरोध भेजें",
    },
    common: {},
    footerLinksSec: {
      heading: "लोकप्रिय शहर",
      highlight: "सेवाएं",
      description:
        "प्राची टूर्स एंड ट्रैवल्स कैब्स / टैक्सी के साथ प्रमुख शहरों में विश्वसनीय कैब / टैक्सी रेंटल सेवाओं की खोज करें। उपलब्धता देखने के लिए नीचे क्लिक करें!",
      pillGridHeading: "लोकप्रिय शहरी",
      pillGridHighlight: "रूट्स देखें",
    },
    footer: {
      description:
        "महाराष्ट्र टूर, तीर्थयात्रा और स्वच्छ आउटस्टेशन कैब सेवाओं के लिए नासिक का विश्वसनीय ट्रैवल डेस्क।",
      quickLinksTitle: "त्वरित लिंक",
      otherServicesTitle: "अन्य सेवाएं",
      contactInfoTitle: "संपर्क जानकारी",
      address: "नासिक, महाराष्ट्र",
      links: {
        home: "होम",
        about: "हमारे बारे में",
        contact: "संपर्क करें",
        cities: "शहर",
        airport: "एयरपोर्ट",
        cabs: "कैब्स",
        railway: "रेलवे स्टेशन",
        bus: "बस",
      },
      copyright: "सर्वाधिकार सुरक्षित",
      companyName: "प्राची टूर्स एंड ट्रैवल्स",
      developedBy: "डिज़ाइन और विकसित",
    },
    button: {
      bookNow: "अभी बुक करें",
    },
    cabsTabsSec: {
      title: "अपनी पसंदीदा चुनें",
      highlightWord: "कैब",
      desc: "",
    },
    busTabsSec: {
      title: "ग्रुप यात्रा के लिए",
      highlightWord: "बसें",
      desc: "",
    },
    popularDestinationsSec: {
      title: "सबसे लोकप्रिय",
      highlightWord: "शहर",
      footerText: "इन लोकप्रिय शहरों में घूमने के लिए बहुत कुछ है!",
      buttonText: "सभी शहर देखें",
    },
    destinationCard: {
      sightseeingSpots: "दर्शनीय स्थल",
    },
    contactPage: {
      bannerTitle: "संपर्क करें",
      breadcrumbHome: "होम",
      breadcrumbCurrent: "संपर्क करें",
      heading: "हमसे संपर्क करें",
      subText:
        "पूरे महाराष्ट्र में प्रीमियम इंटरसिटी यात्रा सेवा। आपकी यात्रा संबंधी हर सहायता के लिए हम 24/7 उपलब्ध हैं।",
      cards: {
        officeTitle: "हमारा कार्यालय",
        officeAddress:
          "नासिक, महाराष्ट्र",
        emailTitle: "ईमेल करें",
        callTitle: "कॉल करें",
        callNote: "सहायता और बुकिंग के लिए 24/7 उपलब्ध।",
      },
      form: {
        fullNameLabel: "पूरा नाम",
        fullNamePlaceholder: "आपका नाम दर्ज करें",
        emailLabel: "ईमेल पता",
        emailPlaceholder: "name@example.com",
        phoneLabel: "फ़ोन नंबर",
        phonePlaceholder: "+91 00000 00000",
        subjectLabel: "विषय",
        subjectPlaceholder: "पूछताछ का विषय...",
        messageLabel: "संदेश",
        messagePlaceholder: "आज हम आपकी क्या सहायता कर सकते हैं?",
        submitBtn: "संदेश भेजें",
      },
    },
  },
  mr: {
    nav: {
      home: "होम",
      about: "आमच्याबद्दल",
      cities: "शहरे",
      Airport: "विमानतळ",
      cabs: "कॅब्स",
      railway: "रेल्वे स्थानक",
      bus: "बस",
      bookNow: "आता बुक करा",
    },
    navSidebar: {
      home: "मुख्यपृष्ठ",
      aboutUs: "आमच्याबद्दल",
      cities: "शहरे",
      airport: "विमानतळ",
      cabs: "कॅब्स",
      railwayStation: "रेल्वे स्थानक",
      bus: "बस",
      contactUs: "संपर्क करा",
      address: "लवकरच येत आहे...",
    },
    heroSec: {
      prevSlideAria: "मागील स्लाइड",
      nextSlideAria: "पुढील स्लाइड",
      slides: [
        {
          id: 1,
          title: "कुठेही प्रवास करा. आरामदायी आणि वेळेवर.",
          subTitle: "आमच्यासोबत बुक करा",
          desc: "वन-वे • राउंड ट्रिप • विमानतळ • आउटस्टेशन कॅब्स.",
          btnText: "त्वरित दर जाणून घ्या",
        },
        {
          id: 2,
          title: "तुमची फ्लाइट कधीही चुकवू नका. विश्वासाने प्रवास करा.",
          subTitle: "२४/७ विमानतळ ट्रान्सफर",
          desc: "नाशिक ते मुंबई, पुणे आणि शिर्डी विमानतळासाठी वेळेवर पिकअप आणि ड्रॉप सेवा.",
          btnText: "विमानतळ कॅब पहा",
        },
      ],
    },
    aboutSec: {
      heading: "जगभ्रमंतीचा तुमचा सहज आणि सोपा ",
      highlightWord: "प्रवास",
      description:
        "आम्ही तुम्हाला तुमच्या सभोवतालचे जग फिरण्याचा एक सहज आणि विश्वासार्ह मार्ग देतो, ज्यामुळे प्रत्येक प्रवास आनंददायी अनुभव बनतो. शिर्डी आणि त्र्यंबकेश्वरच्या आध्यात्मिक तीर्थयात्रेपासून ते संपूर्ण महाराष्ट्रातील आरामदायी कौटुंबिक सहलींपर्यंत, आम्ही नाशिकमधून स्वच्छ वाहने, प्रमाणित स्थानिक चालक आणि पारदर्शक दर देतो.",
      badgeText: {
        normalText: "८",
        highlightedText: "८ वर्षांची सेवा",
      },
      keyPoints: [
        {
          id: 1,
          imgIcon: "/images/happy-face.png",
          title: "वाहतूक सेवा",
          number: 150,
        },
        {
          id: 2,
          imgIcon: "/images/rate.png",
          title: "वाहतूक सेवा",
          number: 76,
        },
      ],
      btnText: "अधिक वाचा",
    },
    aboutPageExplorationSec: {
      heading: "१० वर्षांपासून विश्वासार्ह ",
      highlightWord: "कॅब प्रवासाचा अनुभव",
      description:
        "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स ही नाशिकमधील एक विश्वासार्ह इंटरसिटी आणि लोकल टॅक्सी सेवा आहे. सुस्थितीतील वाहने आणि अनुभवी, नम्र चालकांसह आम्ही एअरपोर्ट ट्रान्सफर, तीर्थयात्रा आणि कौटुंबिक आउटस्टेशन प्रवास सुरक्षित आणि वक्तशीर बनवतो.",
      vissionMission: [
        {
          id: "vision",
          title: "व्हिजन (दृष्टिकोन)",
          desc: "सुरक्षितता, वक्तशीरपणा आणि पारदर्शक दरांचे नवे मानदंड प्रस्थापित करत महाराष्ट्रातील सर्वात विश्वासार्ह आणि ग्राहक-केंद्रित कॅब रेंटल सेवा बनणे.",
        },
        {
          id: "mission",
          title: "मिशन (ध्येय)",
          desc: "२४/७ अनुभवी चालकांसह स्वच्छ व आरामदायी वाहने उपलब्ध करून देणे, जेणेकरून प्रत्येक तीर्थयात्रा, एअरपोर्ट ड्रॉप आणि आउटस्टेशन प्रवास पूर्णपणे तणावमुक्त होईल.",
        },
      ],
    },
    aboutDownloadSec: {
      titlePrefix: "तुमचा प्रवास किती सुखकर होऊ शकतो याचा विचार केला आहे का? ",
      titleHighlight: "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स",
      titleSuffix: " मध्ये आम्ही ते शक्य करतो.",
    },
    pilgrimStandardSec: {
      title: "प्रीमियम राइड",
      highlightWord: "दर्जा",
      cards: [
        {
          title: "तपासलेले आणि प्रमाणित चालक",
          description:
            "प्रत्येक चालकाची पार्श्वभूमी तपासली जाते आणि नाशिक शहरातील मार्ग व मंदिर शिष्टाचारासाठी विशेष प्रशिक्षण दिले जाते.",
        },
        {
          title: "१००% बुकिंग हमी",
          description:
            "एकदा बुकिंग निश्चित झाल्यावर तुमचे वाहन आरक्षित राहते. गर्दीच्या वेळेतही कोणतीही बुकिंग रद्द केली जात नाही.",
        },
        {
          title: "स्वच्छ आणि सॅनिटाइझ्ड ताफा",
          description:
            "आंतरराष्ट्रीय स्वच्छता नियमांचे पालन करून प्रत्येक प्रवासानंतर वाहनांची सखोल स्वच्छता केली जाते.",
        },
        {
          title: "२४/७ रोडसाइड सहाय्य",
          description:
            "प्रवासादरम्यान कोणत्याही आपत्कालीन परिस्थितीसाठी स्वतंत्र हेल्पलाइन, जेणेकरून तुमचा प्रवास अखंड सुरू राहील.",
        },
      ],
    },
    counterSec: {},
    whyChooseUs: {
      title: "आम्हालाच",
      highlightWord: "का निवडावे",
      features: [
        {
          id: 1,
          iconName: "UserCheck",
          title: "टूर गाईड",
          description:
            "व्यावसायिक आणि नम्र चालक, जे संपूर्ण महाराष्ट्रात तुमच्या स्थानिक ट्रॅव्हल गाईडची भूमिकाही निभावतात.",
        },
        {
          id: 2,
          iconName: "Coins",
          title: "परवडणारे दर",
          description:
            "कोणत्याही छुप्या टोल किंवा अतिरिक्त शुल्काशिवाय पारदर्शक आणि बजेट-अनुकूल आउटस्टेशन कॅब/टॅक्सी दर.",
        },
        {
          id: 3,
          iconName: "CalendarDays",
          title: "त्वरित बुकिंग",
          description:
            "तात्काळ राइड वाटप आणि जलद वाहन सेवेसह सहज २४/७ डिजिटल बुकिंग सुविधा.",
        },
        {
          id: 4,
          iconName: "FileText",
          title: "कस्टम प्रवास नियोजन",
          description:
            "कॉर्पोरेट इव्हेंट्स, कौटुंबिक सहली आणि तीर्थयात्रांसाठी खास नियोजित केलेली प्रवास व्यवस्था.",
        },
      ],
    },
    testimonialSec: {
      heading: "आमचे ग्राहक काय",
      highlight: "म्हणतात",
      reviewBtn: "रिव्ह्यू द्या",
      badgeLabel: "प्रमाणित अभिप्राय",
      items: [
        {
          id: 1,
          rating: 5,
          text: "व्हॉट्सॲपवर स्पष्ट आणि पारदर्शक दरांसह पहाटे ४ वाजता तणावमुक्त विमानतळ ड्रॉप. स्वच्छ नवीन गाडी आणि प्रशिक्षित चालक.",
          name: "स्नेहा देशमुख",
          location: "इंदिरा नगर, नाशिक",
          trip: "मुंबई विमानतळ ड्रॉप (सेडान)",
        },
        {
          id: 2,
          rating: 5,
          text: "नाशिक ते मुंबई आंतरराष्ट्रीय विमानतळाच्या परतीच्या प्रवासासाठी २ इनोव्हा क्रिस्टा बुक केल्या. अत्यंत वक्तशीर आणि विश्वासार्ह सेवा.",
          name: "विशाल तांबे",
          location: "कॉलेज रोड, नाशिक",
          trip: "नाशिक ते मुंबई विमानतळ (इनोव्हा क्रिस्टा)",
        },
        {
          id: 3,
          rating: 5,
          text: "कौटुंबिक प्रवासासाठी नाशिकमधील सर्वोत्तम कॅब रेंटल सेवा. नम्र चालकासह पुणे विमानतळापर्यंत आरामदायी प्रवास.",
          name: "सागर कदम",
          location: "गंगापूर रोड, नाशिक",
          trip: "नाशिक ते पुणे विमानतळ (एसयूव्ही)",
        },
        {
          id: 4,
          rating: 5,
          text: "नाशिक ते पुणे विमानतळ विमान नगरसाठी वन-वे कॅब बुक केली. उत्तम अनुभव, पारदर्शक भाडे आणि स्वच्छ वाहन.",
          name: "रत्नदीप लोखंडे",
          location: "पंचवटी, नाशिक",
          trip: "नाशिक ते विमान नगर, पुणे (वन-वे)",
        },
        {
          id: 5,
          rating: 5,
          text: "मुंबई आणि पुणे विमानतळ प्रवासासाठी अत्यंत प्रभावी आणि तत्पर कॅब सेवा. पहाटेच्या फ्लाइटसाठीही नेहमी वेळेवर.",
          name: "सुमित पावनकर",
          location: "सिडको, नाशिक",
          trip: "मुंबई आणि पुणे विमानतळ ट्रान्सफर (सेडान)",
        },
        {
          id: 6,
          rating: 5,
          text: "नाशिक पंचवटी ते शिर्डी आणि पुण्यासाठी कॅब बुक केली. सहज बुकिंग आणि संपूर्ण प्रवासात नम्र चालक.",
          name: "किरण नवले",
          location: "पंचवटी, नाशिक",
          trip: "नाशिक ते पुणे आउटस्टेशन (सेडान)",
        },
      ],
    },
    servicesPromoSec: {
      highlightText: "",
      mainTitleNormal: "",
      mainTitleBold: "संपूर्ण ट्रॅव्हल आणि ",
      highlightWord: "कॅब सेवा.",
      mainTitleSuffix: "",
      buttonText: "",
      desc: [],
      features: [
        {
          id: 1,
          icon: "/images/deal.png",
          title: "नाशिकमध्ये कॅब / टॅक्सी भाड्याने घ्या",
          description:
            "लक्झरी सेडानपासून ते प्रशस्त व्हॅनपर्यंत विश्वासार्ह वाहनांचा विविध ताफा—एकट्या प्रवाशांसाठी, कुटुंबांसाठी आणि कॉर्पोरेट ग्रुप्ससाठी उत्तम.",
        },
        {
          id: 2,
          icon: "/images/airport-transfer.svg",
          title: "विमानतळ पिकअप / ड्रॉप कॅब आणि टॅक्सी सेवा",
          description:
            "CSMIA मुंबईसह सर्व प्रमुख विमानतळांवर विश्वासार्ह आणि वेळेवर ट्रान्सफर सेवा. अनुभवी चालक तुमची फ्लाइट कधीही चुकणार नाही याची काळजी घेतात.",
        },
        {
          id: 3,
          icon: "/images/bus.png",
          title: "नाशिकहून बस सेवा",
          description:
            "नाशिक आणि परिसरातील सामूहिक तीर्थयात्रा व कॉर्पोरेट सहलींसाठी आधुनिक सुविधांनी सुसज्ज प्रशस्त आणि आरामदायी बस रेंटल सेवा.",
        },
        {
          id: 4,
          icon: "/images/luggage.png",
          title: "कॉर्पोरेट प्रवास सेवा",
          description:
            "व्यावसायिक प्रवासाच्या गरजा सुलभ करण्यासाठी तयार केलेली सुव्यवस्थित कॉर्पोरेट लॉजिस्टिक्स आणि कार्यक्षम ग्रुप वाहतूक व्यवस्था.",
        },
      ],
    },
    servicesSec: {},
    servicesGridSec: {
      heading: "",
      viewDetailsBtn: "तपशील पहा",
    },
    serviceTabsSec: {
      title: "प्रत्येक प्रवासासाठी निवडा तुमची",
      highlightWord: "राइड",
      tabs: {
        sedan: "सेडान",
        suv: "एसयूव्ही",
        tempoTraveller: "टेम्पो ट्रॅव्हलर",
        bus: "बस",
      },
      viewDetailsBtn: "तपशील पहा",
      emptyMessage: "या श्रेणीमध्ये सध्या कोणतेही वाहन उपलब्ध नाही.",
    },
    cabDetailSec: {
      backBtn: "वाहन यादीवर परत जा",
      backToCabs: "कॅब यादीवर परत जा",
      backToBus: "बस यादीवर परत जा",
      fleetChoiceSuffix: "श्रेणी वाहन",
      bookHirePrefix: "बुक / भाड्याने घ्या",
      journeyOverview: "प्रवास तपशील",
      amenitiesTitle: "वाहन सुविधा आणि समाविष्ट बाबी",
      rateCardTitle: "अंदाजे दरपत्रक (प्रति-किमी तक्ता)",
      tableHeaders: {
        vehicleModel: "वाहन मॉडेल",
        ratePerKm: "दर / किमी",
        minLimit: "किमान मर्यादा",
        driverAllowance: "चालक भत्ता",
      },
      rateDisclaimer:
        "*टीप: टोल, राज्य परमिट आणि पार्किंग शुल्क तुमच्या अचूक प्रवास मार्गानुसार अतिरिक्त आकारले जातील.",
      driverTitle: "अनुभवी चालक समाविष्ट",
      driverDescPrefix: "",
      driverDescSuffix:
        "सोबत बुक केलेल्या प्रत्येक राइडमध्ये सुरक्षित प्रवासासाठी अनुभवी, नम्र आणि प्रमाणित व्यावसायिक चालक-कम-गाईड समाविष्ट असतो.",
      bookingRefTitle: "बुकिंग संदर्भ आणि सेवा व्याप्ती",
      callUsBtn: "कॉल करा",
      whatsappBtn: "व्हॉट्सॲपवर चॅट करा",
    },
    ctaSec: {
      titlePrefix: "प्रवासासाठी तयार आहात? तुमची कॅब बुक करा",
      titleHighlight: "सुरक्षित आणि वेळेवर",
      titleSuffix: "प्रवासासाठी!",
      contactBtn: "संपर्क करा",
      whatsappBtn: "व्हॉट्सॲपवर चॅट करा",
    },
    travelLinks: {},
    pagesSec: {},
    form: {
      title: "तुमची कॅब राइड बुक करा",
      subtitle: "तुमची कॅब बुक करण्यासाठी कृपया खालील तपशील निवडा:",
      fullName: "पूर्ण नाव",
      phone: "फोन नंबर",
      email: "ईमेल पत्ता",
      vehicleType: "वाहनाचा प्रकार निवडा",
      tourType: "सहलीचा प्रकार निवडा",
      tourTypeOptions: {
        outstation: "आउटस्टेशन",
        oneWay: "वन-वे",
        roundTrip: "राउंड ट्रिप",
        airport: "विमानतळ पिकअप / ड्रॉप",
        local: "लोकल",
      },
      pickupAddress: "पिकअप पत्ता",
      dropAddress: "ड्रॉप पत्ता",
      pickupDate: "पिकअप तारीख",
      pickupTime: "पिकअप वेळ",
      message: "अतिरिक्त सूचना / संदेश",
      submitBtn: "विनंती पाठवा",
    },
    common: {},
    footerLinksSec: {
      heading: "लोकप्रिय शहर",
      highlight: "सेवा",
      description:
        "प्राची टूर्स अँड ट्रॅव्हल्स कॅब्स / टॅक्सीसह प्रमुख शहरांमध्ये विश्वासार्ह कॅब / टॅक्सी रेंटल सेवा शोधा. उपलब्धता पाहण्यासाठी खाली क्लिक करा!",
      pillGridHeading: "लोकप्रिय शहरी",
      pillGridHighlight: "मार्ग पहा",
    },
    footer: {
      description:
        "महाराष्ट्र सहली, तीर्थयात्रा आणि स्वच्छ आउटस्टेशन कॅब सेवांसाठी नाशिकमधील विश्वासार्ह ट्रॅव्हल डेस्क.",
      quickLinksTitle: "द्रुत दुवे",
      otherServicesTitle: "इतर सेवा",
      contactInfoTitle: "संपर्क माहिती",
      address: "नाशिक, महाराष्ट्र",
      links: {
        home: "होम",
        about: "आमच्याबद्दल",
        contact: "संपर्क करा",
        cities: "शहरे",
        airport: "विमानतळ",
        cabs: "कॅब्स",
        railway: "रेल्वे स्थानक",
        bus: "बस",
      },
      copyright: "सर्व हक्क राखीव",
      companyName: "प्राची टूर्स अँड ट्रॅव्हल्स",
      developedBy: "डिझाइन आणि विकसित",
    },
    button: {
      bookNow: "आता बुक करा",
    },
    cabsTabsSec: {
      title: "तुमची आवडती निवडा",
      highlightWord: "कॅब",
      desc: "",
    },
    busTabsSec: {
      title: "ग्रुप प्रवासासाठी",
      highlightWord: "बसेस",
      desc: "",
    },
    popularDestinationsSec: {
      title: "सर्वाधिक लोकप्रिय",
      highlightWord: "शहरे",
      footerText: "या लोकप्रिय शहरांमध्ये पाहण्यासारखे खूप काही आहे!",
      buttonText: "सर्व शहरे पहा",
    },
    destinationCard: {
      sightseeingSpots: "पर्यटन स्थळे",
    },
    contactPage: {
      bannerTitle: "संपर्क करा",
      breadcrumbHome: "मुख्यपृष्ठ",
      breadcrumbCurrent: "संपर्क करा",
      heading: "आमच्याशी संपर्क साधा",
      subText:
        "संपूर्ण महाराष्ट्रात प्रीमियम इंटरसिटी प्रवास सेवा. तुमच्या प्रवासाच्या मदतीसाठी आम्ही २४/७ उपलब्ध आहोत.",
      cards: {
        officeTitle: "आमचे कार्यालय",
        officeAddress:
          "नाशिक, महाराष्ट्र",
        emailTitle: "ईमेल करा",
        callTitle: "कॉल करा",
        callNote: "मदत आणि बुकिंगसाठी २४/७ उपलब्ध.",
      },
      form: {
        fullNameLabel: "पूर्ण नाव",
        fullNamePlaceholder: "तुमचे पूर्ण नाव टाका",
        emailLabel: "ईमेल पत्ता",
        emailPlaceholder: "name@example.com",
        phoneLabel: "फोन नंबर",
        phonePlaceholder: "+91 00000 00000",
        subjectLabel: "विषय",
        subjectPlaceholder: "चौकशीचा विषय...",
        messageLabel: "संदेश",
        messagePlaceholder: "आम्ही तुम्हाला आज कशी मदत करू शकतो?",
        submitBtn: "संदेश पाठवा",
      },
    },
  },
};
