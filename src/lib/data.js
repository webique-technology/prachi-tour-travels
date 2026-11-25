export const slugify = (text = "") => {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start
    .replace(/-+$/, ""); // Trim - from end
};

// Cabs / Taxi cars data
// Ensure your slugify helper supports { en, hi, mr } objects:
// const slugify = (str) => String(typeof str === "object" ? str.en : str).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const rawCabsData = [
  // ─── 1. MAHINDRA XYLO ──────────────────────────────────────────────────────
  {
    id: "cab-01",
    name: {
      en: "Mahindra Xylo",
      hi: "महिंद्रा ज़ाइलो",
      mr: "महिंद्रा झायलो",
    },
    title: {
      en: "Xylo / Scorpio",
      hi: "ज़ाइलो / स्कॉर्पियो",
      mr: "झायलो / स्कॉर्पिओ",
    },
    routesSubtitle: {
      en: "Premium Cab / Taxi Rental Services between Nashik, Mumbai, Pune, Shani Shingnapur, Manmad, Trimbakeshwar, and Nashik Airport.",
      hi: "नासिक, मुंबई, पुणे, शनि शिंगणापुर, मनमाड, त्र्यंबकेश्वर और नासिक एयरपोर्ट के बीच प्रीमियम कैब / टैक्सी रेंटल सेवाएं।",
      mr: "नाशिक, मुंबई, पुणे, शनि शिंगणापूर, मनमाड, त्र्यंबकेश्वर आणि नाशिक विमानतळादरम्यान प्रीमियम कॅब / टॅक्सी रेंटल सेवा.",
    },
    description: {
      en: "We provide Budget Mahindra Xylo/Scorpio Cab rentals ensuring premium comfort and spacious legroom. Highly ideal for family packages, outstation tours, and business transit, our vehicles come fully equipped with modern amenities. Get clean Cabs / Taxi accompanied by our highly experienced local drivers-cum-guides.",
      hi: "हम बजट-अनुकूल महिंद्रा ज़ाइलो/स्कॉर्पियो कैब रेंटल प्रदान करते हैं जो प्रीमियम आराम और पर्याप्त लेगरूम सुनिश्चित करती है। पारिवारिक पैकेज, आउटस्टेशन टूर और व्यावसायिक यात्राओं के लिए आदर्श, हमारे वाहन आधुनिक सुविधाओं से सुसज्जित हैं। अनुभवी स्थानीय ड्राइवरों के साथ स्वच्छ कैब्स पाएं।",
      mr: "आम्ही परवडणाऱ्या दरात महिंद्रा झायलो/स्कॉर्पिओ कॅब रेंटल सेवा देतो जी प्रीमियम आराम आणि प्रशस्त लेगरूम सुनिश्चित करते. कौटुंबिक पॅकेजेस, आउटस्टेशन सहली आणि व्यावसायिक प्रवासासाठी अत्यंत उपयुक्त, आमची वाहने आधुनिक सुविधांनी सुसज्ज आहेत.",
    },
    imageSrc: "/images/fleet/mahindra-xylo.webp",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "Mahindra Xylo/Scorpio Online Booking, Luxury Car Hire for Family Tours, Outstation Online Cab Booking all over Maharashtra, Best Economical Car Rental Services.",
      hi: "महिंद्रा ज़ाइलो/स्कॉर्पियो ऑनलाइन बुकिंग, पारिवारिक यात्राओं के लिए लक्ज़री कार किराए पर लें, पूरे महाराष्ट्र में आउटस्टेशन ऑनलाइन कैब बुकिंग।",
      mr: "महिंद्रा झायलो/स्कॉर्पिओ ऑनलाइन बुकिंग, कौटुंबिक सहलींसाठी लक्झरी कार भाड्याने घ्या, संपूर्ण महाराष्ट्रात आउटस्टेशन ऑनलाइन कॅब बुकिंग.",
    },
    category: "SUV",
    features: {
      en: [
        "6-7 Passengers",
        "Spacious Legroom",
        "Carrier Available",
        "Dual AC",
        "Music System",
      ],
      hi: [
        "6-7 यात्री",
        "विशाल लेगरूम",
        "लगेज कैरियर उपलब्ध",
        "डुअल एसी",
        "म्यूज़िक सिस्टम",
      ],
      mr: [
        "६-७ प्रवासी",
        "प्रशस्त लेगरूम",
        "लगेज कॅरियर उपलब्ध",
        "ड्युअल एसी",
        "म्युझिक सिस्टीम",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "Mahindra Xylo",
          hi: "महिंद्रा ज़ाइलो",
          mr: "महिंद्रा झायलो",
        },
        ratePerKm: { en: "₹14/km", hi: "₹14/किमी", mr: "₹१४/किमी" },
        minKm: { en: "250 km/day", hi: "250 किमी/दिन", mr: "२५० किमी/दिवस" },
        driverAllowance: { en: "₹300/day", hi: "₹300/दिन", mr: "₹३००/दिवस" },
      },
    ],
  },

  // ─── 2. TOYOTA INNOVA ──────────────────────────────────────────────────────
  {
    id: "cab-02",
    name: {
      en: "Toyota Innova",
      hi: "टोयोटा इनोवा",
      mr: "टोयोटा इनोव्हा",
    },
    title: {
      en: "Toyota Innova",
      hi: "टोयोटा इनोवा",
      mr: "टोयोटा इनोव्हा",
    },
    routesSubtitle: {
      en: "Premium Cab / Taxi Rental Services between Nashik, Mumbai, Pune, Shani Shingnapur, Manmad, Trimbakeshwar, and Nashik Airport.",
      hi: "नासिक, मुंबई, पुणे, शनि शिंगणापुर, मनमाड, त्र्यंबकेश्वर और नासिक एयरपोर्ट के बीच प्रीमियम कैब / टैक्सी रेंटल सेवाएं।",
      mr: "नाशिक, मुंबई, पुणे, शनि शिंगणापूर, मनमाड, त्र्यंबकेश्वर आणि नाशिक विमानतळादरम्यान प्रीमियम कॅब / टॅक्सी रेंटल सेवा.",
    },
    description: {
      en: "Experience premium class travel with our spotless Toyota Innova fleet. Recognized across Maharashtra for elite comfort and unmatched highway safety, it is the top choice for long-distance outstation journeys, corporate transits, and multicity holiday itineraries.",
      hi: "हमारे स्वच्छ टोयोटा इनोवा बेड़े के साथ प्रीमियम श्रेणी की यात्रा का अनुभव करें। उत्कृष्ट आराम और बेजोड़ हाईवे सुरक्षा के लिए पूरे महाराष्ट्र में प्रसिद्ध, यह लंबी दूरी की आउटस्टेशन यात्राओं, कॉर्पोरेट यात्राओं और मल्टीसिटी छुट्टियों के लिए पहली पसंद है।",
      mr: "आमच्या स्वच्छ टोयोटा इनोव्हा ताफ्यासह प्रीमियम दर्जाच्या प्रवासाचा अनुभव घ्या. उत्कृष्ट आराम आणि अद्वितीय महामार्ग सुरक्षिततेसाठी संपूर्ण महाराष्ट्रात ओळखली जाणारी ही गाडी लांब पल्ल्याच्या आउटस्टेशन प्रवासासाठी सर्वोत्तम पर्याय आहे.",
    },
    imageSrc: "/images/toyota-innova.avif",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "Toyota Innova Car Rental, Premium SUV Hire for Long Trips, Prachi Tours & Travels Airport Drop Cab, Affordable Innova Tour Packages.",
      hi: "टोयोटा इनोवा कार रेंटल, लंबी यात्राओं के लिए प्रीमियम एसयूवी किराए पर लें, प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट ड्रॉप कैब, किफायती इनोवा टूर पैकेज।",
      mr: "टोयोटा इनोव्हा कार रेंटल, लांबच्या सहलींसाठी प्रीमियम एसयूव्ही भाड्याने घ्या, प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट ड्रॉप कॅब, परवडणारे इनोव्हा टूर पॅकेजेस.",
    },
    category: "SUV",
    features: {
      en: [
        "6-7 Passengers",
        "Elite Highway Safety",
        "Plush Pushback Seats",
        "Dual Air Conditioning",
        "Ample Boot Space",
      ],
      hi: [
        "6-7 यात्री",
        "उत्कृष्ट हाईवे सुरक्षा",
        "आरामदायक पुशबैक सीटें",
        "डुअल एयर कंडीशनिंग",
        "पर्याप्त बूट स्पेस",
      ],
      mr: [
        "६-७ प्रवासी",
        "उत्कृष्ट महामार्ग सुरक्षा",
        "आरामदायी पुशबॅक सीट्स",
        "ड्युअल एअर कंडिशनिंग",
        "भरपूर बूट स्पेस",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "Toyota Innova",
          hi: "टोयोटा इनोवा",
          mr: "टोयोटा इनोव्हा",
        },
        ratePerKm: { en: "₹16/km", hi: "₹16/किमी", mr: "₹१६/किमी" },
        minKm: { en: "250 km/day", hi: "250 किमी/दिन", mr: "२५० किमी/दिवस" },
        driverAllowance: { en: "₹300/day", hi: "₹300/दिन", mr: "₹३००/दिवस" },
      },
    ],
  },

  // ─── 3. CHEVROLET TAVERA / ENJOY ───────────────────────────────────────────
  {
    id: "cab-03",
    name: {
      en: "Chevrolet Tavera / Enjoy",
      hi: "शेवरले तवेरा / एन्जॉय",
      mr: "शेवरलेट तवेरा / एन्जॉय",
    },
    title: {
      en: "Chevrolet Tavera / Enjoy",
      hi: "शेवरले तवेरा / एन्जॉय",
      mr: "शेवरलेट तवेरा / एन्जॉय",
    },
    routesSubtitle: {
      en: "Affordable Multi-Utility Vehicle Rental Services across Maharashtra.",
      hi: "पूरे महाराष्ट्र में किफायती मल्टी-यूटिलिटी वाहन रेंटल सेवाएं।",
      mr: "संपूर्ण महाराष्ट्रात परवडणाऱ्या दरात मल्टी-युटिलिटी वाहन रेंटल सेवा.",
    },
    description: {
      en: "Perfect for larger families and pilgrimage groups looking for budget-friendly alternatives without compromising structural seating space. Our Chevrolet fleet handles rough routes effortlessly, delivering a reliable commute to central tourist locations.",
      hi: "बैठने की जगह से समझौता किए बिना बजट-अनुकूल विकल्प तलाश रहे बड़े परिवारों और तीर्थयात्री समूहों के लिए उत्तम। हमारा शेवरले बेड़ा कठिन मार्गों पर भी सहजता से चलता है और प्रमुख पर्यटन स्थलों तक भरोसेमंद सफर प्रदान करता है।",
      mr: "आसनक्षमतेशी तडजोड न करता बजेट-अनुकूल पर्याय शोधणाऱ्या मोठ्या कुटुंबांसाठी आणि यात्रेकरू गटांसाठी उत्तम. आमचा शेवरलेट ताफा खडतर मार्गांवरही सहज धावतो आणि प्रमुख पर्यटन स्थळांपर्यंत विश्वासार्ह प्रवास देतो.",
    },
    imageSrc: "/images/fleet/chevrolet-tavera.webp",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "Budget Multi-Utility Vehicle Booking, Chevrolet Tavera Rental for Pilgrimages, Large Group Cab Booking, Economical Outstation Cab.",
      hi: "बजट मल्टी-यूटिलिटी वाहन बुकिंग, तीर्थयात्रा के लिए शेवरले तवेरा रेंटल, बड़े समूह की कैब बुकिंग, किफायती आउटस्टेशन कैब।",
      mr: "बजेट मल्टी-युटिलिटी वाहन बुकिंग, तीर्थयात्रेसाठी शेवरलेट तवेरा रेंटल, मोठ्या गटाची कॅब बुकिंग, किफायतशीर आउटस्टेशन कॅब.",
    },
    category: "SUV",
    features: {
      en: [
        "8-9 Passengers",
        "Deep Cabin Space",
        "Robust Suspension",
        "Powerful AC Grid",
        "Pilgrimage Optimized",
      ],
      hi: [
        "8-9 यात्री",
        "विशाल केबिन स्पेस",
        "मजबूत सस्पेंशन",
        "शक्तिशाली एसी ग्रिड",
        "तीर्थयात्रा के लिए उपयुक्त",
      ],
      mr: [
        "८-९ प्रवासी",
        "प्रशस्त केबिन स्पेस",
        "मजबूत सस्पेंशन",
        "शक्तिशाली एसी ग्रिड",
        "तीर्थयात्रेसाठी उपयुक्त",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "Chevrolet Tavera",
          hi: "शेवरले तवेरा",
          mr: "शेवरलेट तवेरा",
        },
        ratePerKm: { en: "₹18/km", hi: "₹18/किमी", mr: "₹१८/किमी" },
        minKm: { en: "300 km/day", hi: "300 किमी/दिन", mr: "३०० किमी/दिवस" },
        driverAllowance: { en: "₹300/day", hi: "₹300/दिन", mr: "₹३००/दिवस" },
      },
    ],
  },

  // ─── 4. MARUTI ERTIGA ──────────────────────────────────────────────────────
  {
    id: "cab-04",
    name: {
      en: "Maruti Ertiga",
      hi: "मारुति अर्टिगा",
      mr: "मारुती अर्टिगा",
    },
    title: {
      en: "Maruti Ertiga",
      hi: "मारुति अर्टिगा",
      mr: "मारुती अर्टिगा",
    },
    routesSubtitle: {
      en: "Smart 7-Seater Cab / Taxi Rental Services between Nashik, Mumbai, and Pune.",
      hi: "नासिक, मुंबई और पुणे के बीच स्मार्ट 7-सीटर कैब / टैक्सी रेंटल सेवाएं।",
      mr: "नाशिक, मुंबई आणि पुण्यादरम्यान स्मार्ट ७-सीटर कॅब / टॅक्सी रेंटल सेवा.",
    },
    description: {
      en: "The ideal modern 7-seater choice combining ultimate fuel efficiency with urban comfort. Perfect for mid-sized families traveling across busy city centers or taking swift intercity airport highway runs between Nashik and Mumbai.",
      hi: "बेहतरीन ईंधन दक्षता और शहरी आराम का संगम करने वाली आदर्श आधुनिक 7-सीटर कार। व्यस्त शहरी केंद्रों या नासिक और मुंबई के बीच तेज इंटरसिटी एयरपोर्ट हाईवे यात्रा करने वाले मध्यम आकार के परिवारों के लिए उत्तम।",
      mr: "उत्कृष्ट इंधन बचत आणि शहरी आरामाचा संगम करणारी आधुनिक ७-सीटर कार. व्यस्त शहरी भाग किंवा नाशिक आणि मुंबई दरम्यान जलद इंटरसिटी एअरपोर्ट महामार्ग प्रवास करणाऱ्या कुटुंबांसाठी उत्तम.",
    },
    imageSrc: "/images/maruti-ertiga.avif",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "Maruti Ertiga Rental Online, Cheap 7 Seater Cab Booking, Intercity Hybrid Cab Hire, Affordable Family Tour Vehicle.",
      hi: "मारुति अर्टिगा रेंटल ऑनलाइन, किफायती 7 सीटर कैब बुकिंग, इंटरसिटी हाइब्रिड कैब हायर, पारिवारिक टूर वाहन।",
      mr: "मारुती अर्टिगा रेंटल ऑनलाइन, परवडणारी ७ सीटर कॅब बुकिंग, इंटरसिटी हायब्रिड कॅब हायर, कौटुंबिक सहल वाहन.",
    },
    category: "SUV",
    features: {
      en: [
        "6 Passengers",
        "Hybrid Fuel Efficiency",
        "Compact Structural Profile",
        "Air Conditioning",
        "Flexible Folding Rear Seats",
      ],
      hi: [
        "6 यात्री",
        "हाइब्रिड ईंधन दक्षता",
        "कॉम्पैक्ट डिज़ाइन",
        "एयर कंडीशनिंग",
        "फोल्डिंग रियर सीटें",
      ],
      mr: [
        "६ प्रवासी",
        "हायब्रिड इंधन कार्यक्षमता",
        "कॉम्पॅक्ट रचना",
        "एअर कंडिशनिंग",
        "फोल्डिंग मागील सीट्स",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "Maruti Ertiga",
          hi: "मारुति अर्टिगा",
          mr: "मारुती अर्टिगा",
        },
        ratePerKm: { en: "₹12/km", hi: "₹12/किमी", mr: "₹१२/किमी" },
        minKm: { en: "250 km/day", hi: "250 किमी/दिन", mr: "२५० किमी/दिवस" },
        driverAllowance: { en: "₹300/day", hi: "₹300/दिन", mr: "₹३००/दिवस" },
      },
    ],
  },

  // ─── 5. HYUNDAI VERNA ─────────────────────────────────────────────────────
  {
    id: "cab-05",
    name: {
      en: "Hyundai Verna",
      hi: "हुंडई वरना",
      mr: "ह्युंदाई व्हर्ना",
    },
    title: {
      en: "Hyundai Verna",
      hi: "हुंडई वरना",
      mr: "ह्युंदाई व्हर्ना",
    },
    routesSubtitle: {
      en: "Premium Executive Sedan Rental for Stylish City Travel and Outstation Journeys.",
      hi: "स्टाइलिश शहरी यात्रा और आउटस्टेशन सफर के लिए प्रीमियम एग्जीक्यूटिव सेडान रेंटल।",
      mr: "स्टायलिश शहरी प्रवास आणि आउटस्टेशन सफरीसाठी प्रीमियम एक्झिक्युटिव्ह सेडान रेंटल.",
    },
    description: {
      en: "Our luxury sedan selection delivers powerful performance, sleek aerodynamics, and an ultra-modern cabin space. Perfect for executive business trips, airport drops, and couples seeking premium high-speed highway comfort.",
      hi: "हमारी लक्ज़री सेडान श्रेणी शक्तिशाली प्रदर्शन, आकर्षक डिज़ाइन और आधुनिक केबिन स्पेस प्रदान करती है। एग्जीक्यूटिव बिजनेस ट्रिप, एयरपोर्ट ड्रॉप और प्रीमियम हाईवे आराम चाहने वाले यात्रियों के लिए उत्तम।",
      mr: "आमची लक्झरी सेडान श्रेणी दमदार कामगिरी, आकर्षक डिझाइन आणि अत्याधुनिक केबिन स्पेस देते. व्यावसायिक प्रवास, एअरपोर्ट ड्रॉप आणि प्रीमियम महामार्ग आराम इच्छिणाऱ्या प्रवाशांसाठी उत्तम.",
    },
    imageSrc: "/images/fleet/hyundai-verna.webp",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "Hyundai Verna Sedan Booking, Premium Luxury Cab Rental, Outstation Executive Sedan Cab, Local Corporate Tour Packages.",
      hi: "हुंडई वरना सेडान बुकिंग, प्रीमियम लक्ज़री कैब रेंटल, आउटस्टेशन एग्जीक्यूटिव सेडान कैब, कॉर्पोरेट टूर पैकेज।",
      mr: "ह्युंदाई व्हर्ना सेडान बुकिंग, प्रीमियम लक्झरी कॅब रेंटल, आउटस्टेशन एक्झिक्युटिव्ह सेडान कॅब, कॉर्पोरेट टूर पॅकेजेस.",
    },
    category: "Sedan",
    features: {
      en: [
        "4 Passengers",
        "Executive Styling",
        "Premium Cabin Insulation",
        "Climate Control AC",
        "Deep Boot Space",
      ],
      hi: [
        "4 यात्री",
        "एग्जीक्यूटिव स्टाइलिंग",
        "प्रीमियम केबिन इंसुलेशन",
        "क्लाइमेट कंट्रोल एसी",
        "विशाल बूट स्पेस",
      ],
      mr: [
        "४ प्रवासी",
        "एक्झिक्युटिव्ह स्टायलिंग",
        "प्रीमियम केबिन इन्सुलेशन",
        "क्लायमेट कंट्रोल एसी",
        "प्रशस्त बूट स्पेस",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "Hyundai Verna",
          hi: "हुंडई वरना",
          mr: "ह्युंदाई व्हर्ना",
        },
        ratePerKm: { en: "₹12/km", hi: "₹12/किमी", mr: "₹१२/किमी" },
        minKm: { en: "250 km/day", hi: "250 किमी/दिन", mr: "२५० किमी/दिवस" },
        driverAllowance: { en: "₹300/day", hi: "₹300/दिन", mr: "₹३००/दिवस" },
      },
    ],
  },

  // ─── 6. SWIFT DZIRE ───────────────────────────────────────────────────────
  {
    id: "cab-06",
    name: {
      en: "Swift Dzire",
      hi: "स्विफ्ट डिजायर",
      mr: "स्विफ्ट डिझायर",
    },
    title: {
      en: "Swift Dzire",
      hi: "स्विफ्ट डिजायर",
      mr: "स्विफ्ट डिझायर",
    },
    routesSubtitle: {
      en: "Most Popular Compact Sedan Service for Economical Highway Travels.",
      hi: "किफायती हाईवे यात्रा के लिए सबसे लोकप्रिय कॉम्पैक्ट सेडान सेवा।",
      mr: "किफायतशीर महामार्ग प्रवासासाठी सर्वात लोकप्रिय कॉम्पॅक्ट सेडान सेवा.",
    },
    description: {
      en: "Maharashtra's favorite choice for economic travel. Enjoy fully air-conditioned, well-maintained Swift Dzire cars perfect for dynamic solo tracking, swift couple getaways, and dynamic airport point-to-point transfers.",
      hi: "किफायती यात्रा के लिए महाराष्ट्र की पसंदीदा कार। सोलो यात्रा, कपल ट्रिप और त्वरित एयरपोर्ट पॉइंट-टू-पॉइंट ट्रांसफर के लिए पूरी तरह वातानुकूलित, सुव्यवस्थित स्विफ्ट डिजायर कारों का आनंद लें।",
      mr: "परवडणाऱ्या प्रवासासाठी महाराष्ट्राची आवडती निवड. सोलो प्रवास, कपल सहली आणि जलद एअरपोर्ट पॉइंट-टू-पॉइंट ट्रान्सफरसाठी पूर्णपणे वातानुकूलित, सुस्थितीतील स्विफ्ट डिझायर गाड्यांचा आनंद घ्या.",
    },
    imageSrc: "/images/swift-dezire.webp",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "Swift Dzire Online Booking, Budget Sedan Cab Hire, Fast Airport Pick & Drop, Economical One-Way Cab / Taxi Rental Services.",
      hi: "स्विफ्ट डिजायर ऑनलाइन बुकिंग, बजट सेडान कैब हायर, तेज़ एयरपोर्ट पिक और ड्रॉप, किफायती वन-वे कैब / टैक्सी सेवाएं।",
      mr: "स्विफ्ट डिझायर ऑनलाइन बुकिंग, बजेट सेडान कॅब हायर, जलद एअरपोर्ट पिक आणि ड्रॉप, परवडणाऱ्या वन-वे कॅब / टॅक्सी सेवा.",
    },
    category: "Sedan",
    features: {
      en: [
        "4 Passengers",
        "Highly Economical",
        "Excellent Air Conditioning",
        "Compact Design",
        "Station Transfer Ready",
      ],
      hi: [
        "4 यात्री",
        "अत्यधिक किफायती",
        "बेहतरीन एयर कंडीशनिंग",
        "कॉम्पैक्ट डिज़ाइन",
        "स्टेशन ट्रांसफर के लिए तैयार",
      ],
      mr: [
        "४ प्रवासी",
        "अत्यंत किफायतशीर",
        "उत्कृष्ट एअर कंडिशनिंग",
        "कॉम्पॅक्ट डिझाइन",
        "स्टेशन ट्रान्सफरसाठी सज्ज",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "Swift Dzire",
          hi: "स्विफ्ट डिजायर",
          mr: "स्विफ्ट डिझायर",
        },
        ratePerKm: { en: "₹11/km", hi: "₹11/किमी", mr: "₹११/किमी" },
        minKm: { en: "250 km/day", hi: "250 किमी/दिन", mr: "२५० किमी/दिवस" },
        driverAllowance: { en: "₹300/day", hi: "₹300/दिन", mr: "₹३००/दिवस" },
      },
    ],
  },

  // ─── 7. HYUNDAI AURA ──────────────────────────────────────────────────────
  {
    id: "cab-07",
    name: {
      en: "Hyundai Aura",
      hi: "हुंडई ऑरा",
      mr: "ह्युंदाई ऑरा",
    },
    title: {
      en: "Hyundai Aura",
      hi: "हुंडई ऑरा",
      mr: "ह्युंदाई ऑरा",
    },
    routesSubtitle: {
      en: "Modern and Stylish Compact Sedan for Smart City Rides and Regional Tours.",
      hi: "स्मार्ट सिटी राइड्स और क्षेत्रीय यात्राओं के लिए आधुनिक और स्टाइलिश कॉम्पैक्ट सेडान।",
      mr: "स्मार्ट सिटी राइड्स आणि प्रादेशिक सहलींसाठी आधुनिक आणि स्टायलिश कॉम्पॅक्ट सेडान.",
    },
    description: {
      en: "A highly practical and tech-loaded compact sedan that perfectly balances fuel efficiency with contemporary styling. Featuring excellent cabin cooling, smart storage spaces, and an economical fare structure ideal for comfortable point-to-point transfers and airport drops.",
      hi: "एक अत्यंत व्यावहारिक और आधुनिक फीचर्स से लैस कॉम्पैक्ट सेडान जो ईंधन दक्षता और स्टाइल का बेहतरीन संतुलन बनाती है। आरामदायक पॉइंट-टू-पॉइंट ट्रांसफर और एयरपोर्ट ड्रॉप के लिए आदर्श।",
      mr: "इंधन बचत आणि आधुनिक स्टायलिंग यांचा उत्तम समतोल साधणारी कॉम्पॅक्ट सेडान. उत्कृष्ट केबिन कूलिंग आणि परवडणाऱ्या दरांसह पॉइंट-टू-पॉइंट ट्रान्सफर आणि एअरपोर्ट ड्रॉपसाठी आदर्श.",
    },
    imageSrc: "/images/fleet/hyundai-aura.webp",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "Hyundai Aura Cab / Taxi Rental Services, Affordable Compact Sedan Rentals, Railway Station Connection Cab, Lowest Fare Premium Sedan.",
      hi: "हुंडई ऑरा कैब / टैक्सी रेंटल सेवाएं, किफायती कॉम्पैक्ट सेडान रेंटल, रेलवे स्टेशन कनेक्शन कैब, सबसे कम किराए वाली प्रीमियम सेडान।",
      mr: "ह्युंदाई ऑरा कॅब / टॅक्सी रेंटल सेवा, परवडणारी कॉम्पॅक्ट सेडान रेंटल, रेल्वे स्थानक कनेक्शन कॅब, सर्वात कमी दरातील प्रीमियम सेडान.",
    },
    category: "Sedan",
    features: {
      en: [
        "4 Passengers",
        "Tech-Loaded Interiors",
        "Contemporary Look",
        "Responsive AC Grid",
        "Smart Travel Storage",
      ],
      hi: [
        "4 यात्री",
        "आधुनिक इंटीरियर",
        "आकर्षक लुक",
        "तेज़ कूलिंग एसी",
        "स्मार्ट लगेज स्टोरेज",
      ],
      mr: [
        "४ प्रवासी",
        "आधुनिक इंटिरियर",
        "आकर्षक लूक",
        "वेगवान कूलिंग एसी",
        "स्मार्ट प्रवासी स्टोरेज",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "Hyundai Aura",
          hi: "हुंडई ऑरा",
          mr: "ह्युंदाई ऑरा",
        },
        ratePerKm: { en: "₹11/km", hi: "₹11/किमी", mr: "₹११/किमी" },
        minKm: { en: "250 km/day", hi: "250 किमी/दिन", mr: "२५० किमी/दिवस" },
        driverAllowance: { en: "₹300/day", hi: "₹300/दिन", mr: "₹३००/दिवस" },
      },
    ],
  },

  // ─── 8. INDICA VISTA ──────────────────────────────────────────────────────
  {
    id: "cab-08",
    name: {
      en: "Indica Vista",
      hi: "इंडिका विस्टा",
      mr: "इंडिका व्हिस्टा",
    },
    title: {
      en: "Indica Vista",
      hi: "इंडिका विस्टा",
      mr: "इंडिका व्हिस्टा",
    },
    routesSubtitle: {
      en: "Pocket-Friendly Compact Hatchback for Daily Point-to-Point Runs.",
      hi: "दैनिक पॉइंट-टू-पॉइंट यात्राओं के लिए बजट-अनुकूल कॉम्पैक्ट हैचबैक।",
      mr: "दैनंदिन पॉइंट-टू-पॉइंट प्रवासासाठी परवडणारी कॉम्पॅक्ट हॅचबॅक.",
    },
    description: {
      en: "The ultimate compact travel option optimized for city navigation and short-distance outstation runs. An exceptionally priced solution offering complete maneuverability for tight schedules.",
      hi: "शहरी आवागमन और कम दूरी की आउटस्टेशन यात्राओं के लिए सर्वोत्तम कॉम्पैक्ट विकल्प। व्यस्त समय-सारणी के लिए बेहद किफायती और सुविधाजनक समाधान।",
      mr: "शहरी प्रवास आणि कमी अंतराच्या आउटस्टेशन सफरीसाठी उत्तम कॉम्पॅक्ट पर्याय. व्यस्त वेळापत्रकासाठी अत्यंत परवडणारा आणि सोयीस्कर प्रवास पर्याय.",
    },
    imageSrc: "/images/fleet/indica-vista.webp",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "Indica Vista Hatchback Hire, Cheapest Local Car Booking, Small Family Tour Cab, Short Distance Economical Ride.",
      hi: "इंडिका विस्टा हैचबैक हायर, सबसे सस्ती लोकल कार बुकिंग, छोटे परिवार की टूर कैब, कम दूरी की किफायती राइड।",
      mr: "इंडिका व्हिस्टा हॅचबॅक हायर, सर्वात स्वस्त लोकल कार बुकिंग, लहान कुटुंबासाठी टूर कॅब, कमी अंतराची किफायतशीर राइड.",
    },
    category: "Sedan",
    features: {
      en: [
        "4 Passengers",
        "Pocket Friendly",
        "City Driving Optimization",
        "Air Conditioning",
        "Maneuverable Footprint",
      ],
      hi: [
        "4 यात्री",
        "बजट अनुकूल",
        "शहरी ड्राइविंग के लिए उत्तम",
        "एयर कंडीशनिंग",
        "आसान पार्किंग और संचालन",
      ],
      mr: [
        "४ प्रवासी",
        "खिशास परवडणारी",
        "शहरी प्रवासासाठी उत्तम",
        "एअर कंडिशनिंग",
        "सोपे पार्किंग आणि संचालन",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "Indica Vista",
          hi: "इंडिका विस्टा",
          mr: "इंडिका व्हिस्टा",
        },
        ratePerKm: { en: "₹10/km", hi: "₹10/किमी", mr: "₹१०/किमी" },
        minKm: { en: "200 km/day", hi: "200 किमी/दिन", mr: "२०० किमी/दिवस" },
        driverAllowance: { en: "₹300/day", hi: "₹300/दिन", mr: "₹३००/दिवस" },
      },
    ],
  },

  // ─── 9. TEMPO TRAVELLER 13 SEATER ─────────────────────────────────────────
  {
    id: "cab-09",
    name: {
      en: "Tempo Traveller 13 Seater",
      hi: "टेम्पो ट्रैवलर 13 सीटर",
      mr: "टेम्पो ट्रॅव्हलर १३ सीटर",
    },
    title: {
      en: "13 Seater Tempo Traveller",
      hi: "13 सीटर टेम्पो ट्रैवलर",
      mr: "१३ सीटर टेम्पो ट्रॅव्हलर",
    },
    routesSubtitle: {
      en: "Luxury Group Mini-Bus Services for Pilgrimages and Family Outings.",
      hi: "तीर्थयात्राओं और पारिवारिक भ्रमण के लिए लक्ज़री ग्रुप मिनी-बस सेवाएं।",
      mr: "तीर्थयात्रा आणि कौटुंबिक सहलींसाठी लक्झरी ग्रुप मिनी-बस सेवा.",
    },
    description: {
      en: "Travel together with your family without crowding. Our premium 13-seater Tempo Traveller offers pushback luxury seating, powerful dual air conditioning, and deep luggage hold areas for high-end comfort during religious tours.",
      hi: "बिना किसी भीड़भाड़ के अपने पूरे परिवार के साथ एक साथ यात्रा करें। हमारा प्रीमियम 13-सीटर टेम्पो ट्रैवलर धार्मिक यात्राओं के दौरान उच्च स्तरीय आराम के लिए पुशबैक लक्ज़री सीटें, शक्तिशाली डुअल एयर कंडीशनिंग और पर्याप्त सामान रखने की जगह प्रदान करता है।",
      mr: "कोणत्याही गर्दीशिवाय तुमच्या संपूर्ण कुटुंबासोबत एकत्र प्रवास करा. आमचा प्रीमियम १३-सीटर टेम्पो ट्रॅव्हलर धार्मिक सहलींदरम्यान उच्च दर्जाच्या आरामासाठी पुशबॅक लक्झरी सीट्स, शक्तिशाली ड्युअल एअर कंडिशनिंग आणि भरपूर सामानाची जागा देतो.",
    },
    imageSrc: "/images/fleet/tempo-traveller-10.webp",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "13 Seater Tempo Traveller Booking, Luxury Mini Van Hire, Family Pilgrimage Transport, Premium Group Travel Service.",
      hi: "13 सीटर टेम्पो ट्रैवलर बुकिंग, लक्ज़री मिनी वैन हायर, पारिवारिक तीर्थयात्रा परिवहन, प्रीमियम ग्रुप ट्रैवल सेवा।",
      mr: "१३ सीटर टेम्पो ट्रॅव्हलर बुकिंग, लक्झरी मिनी व्हॅन हायर, कौटुंबिक तीर्थयात्रा वाहतूक, प्रीमियम ग्रुप ट्रॅव्हल सेवा.",
    },
    category: "Tempo Traveller",
    features: {
      en: [
        "13 Passengers",
        "Pushback Luxury Seats",
        "Dual Zone AC",
        "Ample Cargo Space",
        "Entertainment Screens Built-In",
      ],
      hi: [
        "13 यात्री",
        "पुशबैक लक्ज़री सीटें",
        "डुअल ज़ोन एसी",
        "पर्याप्त लगेज स्पेस",
        "इन-बिल्ट एंटरटेनमेंट स्क्रीन",
      ],
      mr: [
        "१३ प्रवासी",
        "पुशबॅक लक्झरी सीट्स",
        "ड्युअल झोन एसी",
        "भरपूर लगेज स्पेस",
        "इन-बिल्ट एंटरटेनमेंट स्क्रीन",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "13 Str Tempo Traveller",
          hi: "13 सीटर टेम्पो ट्रैवलर",
          mr: "१३ सीटर टेम्पो ट्रॅव्हलर",
        },
        ratePerKm: {
          en: "AC: ₹25/km | Non-AC: ₹21/km",
          hi: "AC: ₹25/किमी | Non-AC: ₹21/किमी",
          mr: "AC: ₹२५/किमी | Non-AC: ₹२१/किमी",
        },
        minKm: { en: "300 km/day", hi: "300 किमी/दिन", mr: "३०० किमी/दिवस" },
        driverAllowance: { en: "₹500/day", hi: "₹500/दिन", mr: "₹५००/दिवस" },
      },
    ],
  },

  // ─── 10. TEMPO TRAVELLER 17 SEATER ────────────────────────────────────────
  {
    id: "cab-10",
    name: {
      en: "Tempo Traveller 17 Seater",
      hi: "टेम्पो ट्रैवलर 17 सीटर",
      mr: "टेम्पो ट्रॅव्हलर १७ सीटर",
    },
    title: {
      en: "17 Seater Tempo Traveller",
      hi: "17 सीटर टेम्पो ट्रैवलर",
      mr: "१७ सीटर टेम्पो ट्रॅव्हलर",
    },
    routesSubtitle: {
      en: "Spacious Group Logistics for Corporate Retreats and Grand Family Events.",
      hi: "कॉर्पोरेट रिट्रीट और भव्य पारिवारिक आयोजनों के लिए विशाल ग्रुप परिवहन।",
      mr: "कॉर्पोरेट सहली आणि भव्य कौटुंबिक समारंभांसाठी प्रशस्त ग्रुप वाहतूक.",
    },
    description: {
      en: "Streamline transportation logistics for massive corporate groups or wedding functions. Features customized wide aisles, premium entertainment set systems, and customized shock suspension for maximum travel ease.",
      hi: "बड़े कॉर्पोरेट समूहों या विवाह समारोहों के लिए परिवहन को सुगम बनाएं। इसमें चौड़े गलियारे, प्रीमियम एंटरटेनमेंट सिस्टम और अधिकतम यात्रा आराम के लिए बेहतरीन सस्पेंशन की सुविधा है।",
      mr: "मोठ्या कॉर्पोरेट गटांसाठी किंवा विवाह समारंभांसाठी वाहतूक सुलभ करा. यामध्ये प्रशस्त चालण्याची जागा, प्रीमियम एंटरटेनमेंट सिस्टीम आणि जास्तीत जास्त प्रवासाच्या आरामासाठी उत्कृष्ट सस्पेंशनची सोय आहे.",
    },
    imageSrc: "/images/fleet/tempo-traveller-20.webp",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "17 Seater Bus Rental Online, Corporate Event Logistics, Large Tempo Traveller Rental, Group Tour Packages Maharashtra.",
      hi: "17 सीटर बस रेंटल ऑनलाइन, कॉर्पोरेट इवेंट लॉजिस्टिक्स, बड़ा टेम्पो ट्रैवलर रेंटल, ग्रुप टूर पैकेज महाराष्ट्र।",
      mr: "१७ सीटर बस रेंटल ऑनलाइन, कॉर्पोरेट इव्हेंट लॉजिस्टिक्स, मोठा टेम्पो ट्रॅव्हलर रेंटल, ग्रुप टूर पॅकेजेस महाराष्ट्र.",
    },
    category: "Tempo Traveller",
    features: {
      en: [
        "17 Passengers",
        "Wide Center Aisles",
        "Premium Audio-Visual Unit",
        "Shock Absorber Suspension",
        "Event Transport Ready",
      ],
      hi: [
        "17 यात्री",
        "चौड़ा सेंट्रल गैलरी मार्ग",
        "प्रीमियम ऑडियो-विजुअल यूनिट",
        "आरामदायक शॉक एब्जॉर्बर सस्पेंशन",
        "इवेंट ट्रांसपोर्ट के लिए तैयार",
      ],
      mr: [
        "१७ प्रवासी",
        "प्रशस्त मध्यवर्ती मार्ग",
        "प्रीमियम ऑडिओ-व्हिज्युअल युनिट",
        "आरामदायी शॉक ॲब्झॉर्बर सस्पेंशन",
        "इव्हेंट वाहतुकीसाठी सज्ज",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "17 Str Tempo Traveller",
          hi: "17 सीटर टेम्पो ट्रैवलर",
          mr: "१७ सीटर टेम्पो ट्रॅव्हलर",
        },
        ratePerKm: {
          en: "AC: ₹28/km | Non-AC: ₹23/km",
          hi: "AC: ₹28/किमी | Non-AC: ₹23/किमी",
          mr: "AC: ₹२८/किमी | Non-AC: ₹२३/किमी",
        },
        minKm: { en: "300 km/day", hi: "300 किमी/दिन", mr: "३०० किमी/दिवस" },
        driverAllowance: { en: "₹500/day", hi: "₹500/दिन", mr: "₹५००/दिवस" },
      },
    ],
  },

  // ─── 11. TEMPO TRAVELLER 20 SEATER ────────────────────────────────────────
  {
    id: "cab-11",
    name: {
      en: "Tempo Traveller 20 Seater",
      hi: "टेम्पो ट्रैवलर 20 सीटर",
      mr: "टेम्पो ट्रॅव्हलर २० सीटर",
    },
    title: {
      en: "20 Seater Tempo Traveller",
      hi: "20 सीटर टेम्पो ट्रैवलर",
      mr: "२० सीटर टेम्पो ट्रॅव्हलर",
    },
    routesSubtitle: {
      en: "Heavy Duty Group Transport for Corporate and Tourism Sectors.",
      hi: "कॉर्पोरेट और पर्यटन क्षेत्रों के लिए हैवी-ड्यूटी ग्रुप ट्रांसपोर्ट।",
      mr: "कॉर्पोरेट आणि पर्यटन क्षेत्रासाठी हेवी-ड्युटी ग्रुप ट्रान्सपोर्ट.",
    },
    description: {
      en: "Our largest mini-bus configuration optimized for peak stability and long highway operations. Features comfortable seating arrangements perfect for keeping big tourist circles together comfortably on interstate trips.",
      hi: "उच्च स्थिरता और लंबी हाईवे यात्राओं के लिए अनुकूलित हमारा विशाल मिनी-बस मॉडल। अंतर-राज्यीय यात्राओं पर बड़े पर्यटक समूहों को एक साथ आराम से ले जाने के लिए उत्तम बैठने की व्यवस्था।",
      mr: "उत्कृष्ट स्थिरता आणि लांब पल्ल्याच्या महामार्ग प्रवासासाठी अनुकूलित आमचे प्रशस्त मिनी-बस मॉडेल. आंतरराज्यीय सहलींवर मोठ्या पर्यटक गटांना एकत्र आरामात नेण्यासाठी उत्तम आसनव्यवस्था.",
    },
    imageSrc: "/images/fleet/tempo-traveller-25.webp",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "20 Seater Tempo Traveller Hire, Heavy Group Tour Logistics, Corporate Shuttle Services, Intercity Heavy Group Transit.",
      hi: "20 सीटर टेम्पो ट्रैवलर हायर, हैवी ग्रुप टूर लॉजिस्टिक्स, कॉर्पोरेट शटल सेवाएं, इंटरसिटी ग्रुप ट्रांजिट।",
      mr: "२० सीटर टेम्पो ट्रॅव्हलर हायर, हेवी ग्रुप टूर लॉजिस्टिक्स, कॉर्पोरेट शटल सेवा, इंटरसिटी ग्रुप ट्रान्झिट.",
    },
    category: "Tempo Traveller",
    features: {
      en: [
        "20 Passengers",
        "Heavy-Duty Highway Chassis",
        "Extended Wheelbase Stability",
        "Roof Carrier Integration",
        "Long Distance Optimized",
      ],
      hi: [
        "20 यात्री",
        "मजबूत हाईवे चेसिस",
        "बेहतर व्हीलबेस स्थिरता",
        "रूफ लगेज कैरियर सुविधा",
        "लंबी दूरी की यात्रा के लिए अनुकूल",
      ],
      mr: [
        "२० प्रवासी",
        "मजबूत महामार्ग चेसिस",
        "उत्कृष्ट व्हीलबेस स्थिरता",
        "रूफ लगेज कॅरियर सुविधा",
        "लांब पल्ल्याच्या प्रवासासाठी उपयुक्त",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "20 Str Tempo Traveller",
          hi: "20 सीटर टेम्पो ट्रैवलर",
          mr: "२० सीटर टेम्पो ट्रॅव्हलर",
        },
        ratePerKm: {
          en: "AC: ₹30/km | Non-AC: ₹25/km",
          hi: "AC: ₹30/किमी | Non-AC: ₹25/किमी",
          mr: "AC: ₹३०/किमी | Non-AC: ₹२५/किमी",
        },
        minKm: { en: "300 km/day", hi: "300 किमी/दिन", mr: "३०० किमी/दिवस" },
        driverAllowance: { en: "₹500/day", hi: "₹500/दिन", mr: "₹५००/दिवस" },
      },
    ],
  },

  // ─── 12. TEMPO TRAVELLER 26 SEATER ────────────────────────────────────────
  {
    id: "cab-12",
    name: {
      en: "Tempo Traveller 26 Seater",
      hi: "टेम्पो ट्रैवलर 26 सीटर",
      mr: "टेम्पो ट्रॅव्हलर २६ सीटर",
    },
    title: {
      en: "26 Seater Tempo Traveller",
      hi: "26 सीटर टेम्पो ट्रैवलर",
      mr: "२६ सीटर टेम्पो ट्रॅव्हलर",
    },
    routesSubtitle: {
      en: "Heavy Duty Group Transport for Corporate and Tourism Sectors.",
      hi: "कॉर्पोरेट और पर्यटन क्षेत्रों के लिए हैवी-ड्यूटी ग्रुप ट्रांसपोर्ट।",
      mr: "कॉर्पोरेट आणि पर्यटन क्षेत्रासाठी हेवी-ड्युटी ग्रुप ट्रान्सपोर्ट.",
    },
    description: {
      en: "Our largest mini-bus configuration optimized for peak stability and long highway operations. Features comfortable seating arrangements perfect for keeping big tourist circles together comfortably on interstate trips.",
      hi: "उच्च स्थिरता और लंबी हाईवे यात्राओं के लिए अनुकूलित हमारा सबसे बड़ा मिनी-बस विकल्प। अंतर-राज्यीय यात्राओं पर बड़े पर्यटक समूहों को एक साथ आराम से ले जाने के लिए उत्तम।",
      mr: "उत्कृष्ट स्थिरता आणि लांब पल्ल्याच्या महामार्ग प्रवासासाठी अनुकूलित आमचा सर्वात मोठा मिनी-बस पर्याय. आंतरराज्यीय सहलींवर मोठ्या पर्यटक गटांना एकत्र आरामात नेण्यासाठी उत्तम.",
    },
    imageSrc: "/images/tempo-traveller-26.webp",
    providerFallback: "Prachi Tours & Travels Airport Cabs / Taxi",
    notes: {
      en: "26 Seater Tempo Traveller Hire, Heavy Group Tour Logistics, Corporate Shuttle Services, Intercity Heavy Group Transit.",
      hi: "26 सीटर टेम्पो ट्रैवलर हायर, हैवी ग्रुप टूर लॉजिस्टिक्स, कॉर्पोरेट शटल सेवाएं, इंटरसिटी ग्रुप ट्रांजिट।",
      mr: "२६ सीटर टेम्पो ट्रॅव्हलर हायर, हेवी ग्रुप टूर लॉजिस्टिक्स, कॉर्पोरेट शटल सेवा, इंटरसिटी ग्रुप ट्रान्झिट.",
    },
    category: "Tempo Traveller",
    features: {
      en: [
        "26 Passengers",
        "Maximum Comfort",
        "Ideal for Pilgrimage",
        "Transparent Pricing",
        "Long Distance Optimized",
        "Professional Driver",
      ],
      hi: [
        "26 यात्री",
        "अधिकतम आराम",
        "तीर्थयात्रा के लिए आदर्श",
        "पारदर्शी किराया",
        "लंबी दूरी के लिए अनुकूल",
        "पेशेवर ड्राइवर",
      ],
      mr: [
        "२६ प्रवासी",
        "जास्तीत जास्त आराम",
        "तीर्थयात्रेसाठी आदर्श",
        "पारदर्शक दर",
        "लांब पल्ल्यासाठी उपयुक्त",
        "व्यावसायिक चालक",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "26 Str Tempo Traveller",
          hi: "26 सीटर टेम्पो ट्रैवलर",
          mr: "२६ सीटर टेम्पो ट्रॅव्हलर",
        },
        ratePerKm: {
          en: "AC: ₹37/km | Non-AC: ₹30/km",
          hi: "AC: ₹37/किमी | Non-AC: ₹30/किमी",
          mr: "AC: ₹३७/किमी | Non-AC: ₹३०/किमी",
        },
        minKm: { en: "300 km/day", hi: "300 किमी/दिन", mr: "३०० किमी/दिवस" },
        driverAllowance: { en: "₹500/day", hi: "₹500/दिन", mr: "₹५००/दिवस" },
      },
    ],
  },

  // ─── 13. 35 SEATER BUS ────────────────────────────────────────────────────
  {
    id: "bus-01",
    name: {
      en: "35 Seater Bus on Rent in Nashik",
      hi: "नासिक में किराए पर 35 सीटर बस",
      mr: "नाशिकमध्ये भाड्याने ३५ सीटर बस",
    },
    title: {
      en: "35 Seater Bus on Rent in Nashik | Midi Coach Rental",
      hi: "नासिक में किराए पर 35 सीटर बस | मिडी कोच रेंटल",
      mr: "नाशिकमध्ये भाड्याने ३५ सीटर बस | मिडी कोच रेंटल",
    },
    routesSubtitle: {
      en: "Optimal Group Transport for Medium Sized Pilgrim Circles and Family Tours.",
      hi: "मध्यम आकार के तीर्थयात्री समूहों और पारिवारिक यात्राओं के लिए सर्वोत्तम ग्रुप परिवहन।",
      mr: "मध्यम आकाराच्या यात्रेकरू गटांसाठी आणि कौटुंबिक सहलींसाठी सर्वोत्तम ग्रुप वाहतूक.",
    },
    description: {
      en: "Our 35-seater luxury midi-bus bridges the gap between smaller mini-vans and full-scale commercial coaches. It provides maximum interior cooling capability and ample headroom, ensuring your family or corporate tier arrives at central shrines fully refreshed.",
      hi: "हमारी 35-सीटर लक्ज़री मिनी-बस छोटी वैन और बड़े कमर्शियल कोच के बीच बेहतरीन विकल्प है। यह शानदार कूलिंग और पर्याप्त हेडरूम प्रदान करती है, जिससे आपका परिवार या कॉर्पोरेट समूह पूरी तरह तरोताजा होकर गंतव्य तक पहुंचता है।",
      mr: "आमची ३५-सीटर लक्झरी मिडी-बस लहान व्हॅन आणि मोठ्या कमर्शियल कोचमधील उत्तम दुवा आहे. यात उत्कृष्ट एसी कूलिंग आणि भरपूर हेडरूम मिळते, ज्यामुळे तुमचे कुटुंब किंवा कॉर्पोरेट गट ताजेतवाने होऊन इच्छित स्थळी पोहोचतात.",
    },
    imageSrc: "/images/fleet/bus-25-seater.png",
    providerFallback: "Nashik Tour Coaches",
    notes: {
      en: "35 Seater Bus Hire Nashik, Midi Commercial Bus Booking, Medium Family Tour Coach, Affordable Nashik Shani Shingnapur Bus.",
      hi: "नासिक में 35 सीटर बस हायर, मिडी कमर्शियल बस बुकिंग, मध्यम फैमिली टूर कोच, नासिक शनि शिंगणापुर किफायती बस।",
      mr: "नाशिकमध्ये ३५ सीटर बस हायर, मिडी कमर्शियल बस बुकिंग, मध्यम फॅमिली टूर कोच, नाशिक शनि शिंगणापूर परवडणारी बस.",
    },
    category: "Bus",
    features: {
      en: [
        "35 Premium Pushback Seats",
        "Hi-Cool Air Conditioning",
        "Integrated LCD Entertainment Systems",
        "Individual Reading Lights",
        "Rear Luggage Boots",
      ],
      hi: [
        "35 प्रीमियम पुशबैक सीटें",
        "हाई-कूल एयर कंडीशनिंग",
        "इंटीग्रेटेड LCD एंटरटेनमेंट सिस्टम",
        "व्यक्तिगत रीडिंग लाइट्स",
        "रियर लगेज बूट स्पेस",
      ],
      mr: [
        "३५ प्रीमियम पुशबॅक सीट्स",
        "हाय-कूल एअर कंडिशनिंग",
        "इंटीग्रेटेड LCD एंटरटेनमेंट सिस्टीम",
        "स्वतंत्र रीडिंग लाईट्स",
        "मागील बाजूस प्रशस्त लगेज स्पेस",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "35 Seater Luxury Bus",
          hi: "35 सीटर लक्ज़री बस",
          mr: "३५ सीटर लक्झरी बस",
        },
        ratePerKm: {
          en: "AC: ₹60/km | Non-AC: ₹42/km",
          hi: "AC: ₹60/किमी | Non-AC: ₹42/किमी",
          mr: "AC: ₹६०/किमी | Non-AC: ₹४२/किमी",
        },
        minKm: { en: "300 km/day", hi: "300 किमी/दिन", mr: "३०० किमी/दिवस" },
        driverAllowance: { en: "₹500/day", hi: "₹500/दिन", mr: "₹५००/दिवस" },
      },
    ],
  },

  // ─── 14. 42 SEATER BUS ────────────────────────────────────────────────────
  {
    id: "bus-02",
    name: {
      en: "42 Seater Bus on Rent in Nashik",
      hi: "नासिक में किराए पर 42 सीटर बस",
      mr: "नाशिकमध्ये भाड्याने ४२ सीटर बस",
    },
    title: {
      en: "42 Seater Bus on Rent in Nashik | Mid-Large Luxury Coach",
      hi: "नासिक में किराए पर 42 सीटर बस | मिड-लार्ज लक्ज़री कोच",
      mr: "नाशिकमध्ये भाड्याने ४२ सीटर बस | मिड-लार्ज लक्झरी कोच",
    },
    routesSubtitle: {
      en: "Heavy Duty Outstation Inter-City Commutes for Academic Tours and Corporate Retreats.",
      hi: "शैक्षणिक यात्राओं और कॉर्पोरेट रिट्रीट के लिए हैवी-ड्यूटी आउटस्टेशन इंटर-सिटी बस सेवा।",
      mr: "शैक्षणिक सहली आणि कॉर्पोरेट सहलींसाठी हेवी-ड्युटी आउटस्टेशन इंटर-सिटी बस सेवा.",
    },
    description: {
      en: "Optimized for extended highway routes throughout central Maharashtra. Features wide panoramic structural window framing, comfortable seating rows, and maximum under-floor luggage hold areas overseen by veteran long-distance heavy vehicle captains.",
      hi: "पूरे मध्य महाराष्ट्र के लंबे हाईवे मार्गों के लिए अनुकूलित। इसमें चौड़ी पैनोरमिक खिड़कियां, आरामदायक सीटें और अनुभवी ड्राइवरों के साथ विशाल अंडर-फ्लोर लगेज स्पेस की सुविधा है।",
      mr: "संपूर्ण मध्य महाराष्ट्रातील लांबच्या महामार्ग प्रवासासाठी अनुकूलित. यात रुंद पॅनोरॅमिक खिडक्या, आरामदायी सीट्स आणि अनुभवी चालकांसह प्रशस्त अंडर-फ्लोअर लगेज स्पेसची सुविधा आहे.",
    },
    imageSrc: "/images/fleet/bus-35-seater.webp",
    providerFallback: "Nashik Tour Coaches",
    notes: {
      en: "42 Seater Bus Rental Nashik, Corporate Outstation Coach Hire, Academic Tour Transport Nashik, Heavy Duty Passenger Bus.",
      hi: "नासिक 42 सीटर बस रेंटल, कॉर्पोरेट आउटस्टेशन कोच हायर, शैक्षणिक यात्रा परिवहन नासिक, हैवी ड्यूटी पैसेंजर बस।",
      mr: "नाशिक ४२ सीटर बस रेंटल, कॉर्पोरेट आउटस्टेशन कोच हायर, शैक्षणिक सहल वाहतूक नाशिक, हेवी ड्युटी पॅसेंजर बस.",
    },
    category: "Bus",
    features: {
      en: [
        "42 Luxury Recliners",
        "Panoramic Visual Glass Profiles",
        "Under-Floor Large Luggage Holds",
        "Digital Cockpit GPS System",
        "Emergency Exit Protocols Installed",
      ],
      hi: [
        "42 लक्ज़री रिक्लाइनर सीटें",
        "पैनोरमिक ग्लास विंडो",
        "विशाल अंडर-फ्लोर लगेज स्पेस",
        "डिजिटल कॉकपिट GPS सिस्टम",
        "आपातकालीन निकास सुरक्षा प्रणाली",
      ],
      mr: [
        "४२ लक्झरी रिक्लायनर सीट्स",
        "पॅनोरॅमिक ग्लास विंडो",
        "प्रशस्त अंडर-फ्लोअर लगेज स्पेस",
        "डिजिटल कॉकपिट GPS सिस्टीम",
        "आणीबाणी निर्गमन सुरक्षा प्रणाली",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "42 Seater Luxury Bus",
          hi: "42 सीटर लक्ज़री बस",
          mr: "४२ सीटर लक्झरी बस",
        },
        ratePerKm: { en: "AC: ₹63/km", hi: "AC: ₹63/किमी", mr: "AC: ₹६३/किमी" },
        minKm: { en: "300 km/day", hi: "300 किमी/दिन", mr: "३०० किमी/दिवस" },
        driverAllowance: { en: "₹500/day", hi: "₹500/दिन", mr: "₹५००/दिवस" },
      },
    ],
  },

  // ─── 15. 50 SEATER BUS ────────────────────────────────────────────────────
  {
    id: "bus-03",
    name: {
      en: "50 Seater Bus on Rent in Nashik",
      hi: "नासिक में किराए पर 50 सीटर बस",
      mr: "नाशिकमध्ये भाड्याने ५० सीटर बस",
    },
    title: {
      en: "50 Seater Bus on Rent in Nashik | Premium Commercial Coach",
      hi: "नासिक में किराए पर 50 सीटर बस | प्रीमियम कमर्शियल कोच",
      mr: "नाशिकमध्ये भाड्याने ५० सीटर बस | प्रीमियम कमर्शियल कोच",
    },
    routesSubtitle: {
      en: "High-Capacity Executive Coaches for Large Scale Events and Holiday Itineraries.",
      hi: "बड़े आयोजनों और हॉलिडे यात्राओं के लिए उच्च क्षमता वाले एग्जीक्यूटिव कोच।",
      mr: "मोठ्या समारंभांसाठी आणि सुट्टीतील सहलींसाठी उच्च क्षमतेचे एक्झिक्युटिव्ह कोच.",
    },
    description: {
      en: "Designed for heavy group transit management requirements. Includes fully automated premium dual-zone climate controllers, comfortable multi-row configurations, and exceptional vehicle durability, protecting your travel timeline from roadside complications.",
      hi: "बड़े समूहों के आरामदायक परिवहन के लिए विशेष रूप से डिज़ाइन किया गया। इसमें स्वचालित डुअल-ज़ोन क्लाइमेट कंट्रोल, आरामदायक सीटें और उच्च विश्वसनीयता शामिल है।",
      mr: "मोठ्या गटांच्या आरामदायी वाहतुकीसाठी विशेषतः डिझाइन केलेले. यामध्ये स्वयंचलित ड्युअल-झोन क्लायमेट कंट्रोल, आरामदायी आसनव्यवस्था आणि उत्कृष्ट टिकाऊपणा समाविष्ट आहे.",
    },
    imageSrc: "/images/fleet/bus-45-seater.webp",
    providerFallback: "Nashik Tour Coaches",
    notes: {
      en: "50 Seater Bus Hire Nashik, Large Scale Event Fleet Logistics, High Capacity Pilgrimage Transport, Premium AC Coach Rental.",
      hi: "नासिक 50 सीटर बस हायर, बड़े इवेंट फ्लीट लॉजिस्टिक्स, उच्च क्षमता तीर्थयात्रा परिवहन, प्रीमियम एसी कोच रेंटल।",
      mr: "नाशिक ५० सीटर बस हायर, मोठ्या इव्हेंटसाठी फ्लीट लॉजिस्टिक्स, उच्च क्षमतेची तीर्थयात्रा वाहतूक, प्रीमियम एसी कोच रेंटल.",
    },
    category: "Bus",
    features: {
      en: [
        "50 Reclining Passenger Seats",
        "Dual Zone Climate Controllers",
        "Pneumatic Automatic Sliding Doors",
        "Heavy Trunk Cargo Layouts",
        "Night Vision Driving Assist Cameras",
      ],
      hi: [
        "50 रिक्लाइनिंग यात्री सीटें",
        "डुअल ज़ोन क्लाइमेट कंट्रोलर",
        "स्वचालित स्लाइडिंग दरवाजे",
        "विशाल कार्गो लगेज स्पेस",
        "नाइट विज़न ड्राइविंग असिस्ट कैमरे",
      ],
      mr: [
        "५० रिक्लायनिंग प्रवासी सीट्स",
        "ड्युअल झोन क्लायमेट कंट्रोलर",
        "स्वयंचलित स्लायडिंग दरवाजे",
        "प्रशस्त कार्गो लगेज स्पेस",
        "नाईट व्हिजन ड्रायव्हिंग असिस्ट कॅमेरे",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "50 Seater Premium Coach",
          hi: "50 सीटर प्रीमियम कोच",
          mr: "५० सीटर प्रीमियम कोच",
        },
        ratePerKm: {
          en: "AC: ₹70/km | Non-AC: ₹52/km",
          hi: "AC: ₹70/किमी | Non-AC: ₹52/किमी",
          mr: "AC: ₹७०/किमी | Non-AC: ₹५२/किमी",
        },
        minKm: { en: "300 km/day", hi: "300 किमी/दिन", mr: "३०० किमी/दिवस" },
        driverAllowance: { en: "₹600/day", hi: "₹600/दिन", mr: "₹६००/दिवस" },
      },
    ],
  },

  // ─── 16. AC BUS BOOKING ───────────────────────────────────────────────────
  {
    id: "bus-04",
    name: {
      en: "Ac bus booking in Nashik",
      hi: "नासिक में एसी बस बुकिंग",
      mr: "नाशिकमध्ये एसी बस बुकिंग",
    },
    title: {
      en: "AC Bus Booking in Nashik | Online Luxury Coach Rentals",
      hi: "नासिक में एसी बस बुकिंग | ऑनलाइन लक्ज़री कोच रेंटल",
      mr: "नाशिकमध्ये एसी बस बुकिंग | ऑनलाइन लक्झरी कोच रेंटल",
    },
    routesSubtitle: {
      en: "Instant Premium AC Coach Deployments with Fixed Outstation Rate Cards.",
      hi: "निश्चित आउटस्टेशन दरों के साथ तत्काल प्रीमियम एसी कोच सेवाएं।",
      mr: "निश्चित आउटस्टेशन दरांसह त्वरित प्रीमियम एसी कोच सेवा.",
    },
    description: {
      en: "Secure immediate air-conditioned commercial coach placements via our online booking engine. Avoid hot travel seasons entirely with automated interior climate cooling arrays and professional heavy vehicle operations.",
      hi: "हमारे ऑनलाइन बुकिंग प्लेटफॉर्म के माध्यम से तत्काल वातानुकूलित लक्ज़री कोच बुक करें। स्वचालित कूलिंग सिस्टम और अनुभवी ड्राइवरों के साथ गर्मी के मौसम में भी ठंडी और आरामदायक यात्रा का आनंद लें।",
      mr: "आमच्या ऑनलाइन बुकिंग प्लॅटफॉर्मद्वारे त्वरित वातानुकूलित लक्झरी कोच आरक्षित करा. स्वयंचलित कूलिंग सिस्टीम आणि अनुभवी चालकांसह उन्हाळ्यातही थंड व आरामदायी प्रवासाचा आनंद घ्या.",
    },
    imageSrc: "/images/fleet/hire-bus.webp",
    providerFallback: "Nashik Tour Coaches",
    notes: {
      en: "Online AC Bus Booking Nashik, Hire Luxury AC Coaches, Fixed Tariff Bus Rental, Air Conditioned Group Transit Maharashtra.",
      hi: "ऑनलाइन एसी बस बुकिंग नासिक, लक्ज़री एसी कोच किराए पर लें, निश्चित दर बस रेंटल, वातानुकूलित ग्रुप परिवहन महाराष्ट्र।",
      mr: "ऑनलाइन एसी बस बुकिंग नाशिक, लक्झरी एसी कोच भाड्याने घ्या, निश्चित दर बस रेंटल, वातानुकूलित ग्रुप वाहतूक महाराष्ट्र.",
    },
    category: "Bus",
    features: {
      en: [
        "Advanced Climate Control Filtering",
        "Guaranteed Air Conditioned Cleanliness",
        "Punctual Terminal Placements",
        "Vetted Heavy Route Highway Captains",
        "Transparent Pricing Matrices",
      ],
      hi: [
        "उन्नत क्लाइमेट कंट्रोल फिल्टरिंग",
        "स्वच्छ और पूरी तरह वातानुकूलित इंटीरियर",
        "समय पर पिकअप और प्लेसमेंट",
        "अनुभवी और सत्यापित हैवी-व्हीकल ड्राइवर",
        "पारदर्शी किराया दरें",
      ],
      mr: [
        "प्रगत क्लायमेट कंट्रोल फिल्टरिंग",
        "स्वच्छ आणि पूर्णपणे वातानुकूलित इंटिरियर",
        "वेळेवर पिकअप आणि प्लेसमेंट",
        "अनुभवी आणि प्रमाणित हेवी-व्हेईकल चालक",
        "पारदर्शक दरपत्रक",
      ],
    },
    pricingTable: [
      {
        vehicle: {
          en: "Luxury AC Tour Bus",
          hi: "लक्ज़री एसी टूर बस",
          mr: "लक्झरी एसी टूर बस",
        },
        ratePerKm: { en: "AC: ₹70/km", hi: "AC: ₹70/किमी", mr: "AC: ₹७०/किमी" },
        minKm: { en: "300 km/day", hi: "300 किमी/दिन", mr: "३०० किमी/दिवस" },
        driverAllowance: { en: "₹600/day", hi: "₹600/दिन", mr: "₹६००/दिवस" },
      },
    ],
  },
];

export const CabsData = rawCabsData.map((cab) => ({
  ...cab,
  slug: slugify(typeof cab.name === "object" ? cab.name.en : cab.name),
}));

// Map over the single array to dynamically inject functional cross-page target links using slugs
const rawCityRoutes = [
  { id: "route-01", label: "Nashik to Panchavati" },
  { id: "route-02", label: "Nashik to Nashik" },
  { id: "route-03", label: "Nashik to Mumbai" },
  { id: "route-04", label: "Nashik to Chhatrapati Sambhajinagar" },
  { id: "route-05", label: "Nashik to Thane" },
  { id: "route-06", label: "Nashik to Ahmedabad" },
  { id: "route-07", label: "Nashik to Malegaon" },
  { id: "route-08", label: "Nashik to Nagpur" },
  { id: "route-09", label: "Nashik to Saputara" },
  { id: "route-10", label: "Nashik Shingnapur to Shani Shingnapur" },
  { id: "route-11", label: "Nashik to Bhimashankar" },
  { id: "route-12", label: "Nashik to Kalyan" },
  { id: "route-13", label: "Nashik to Ahmednagar" },
  { id: "route-14", label: "Nashik to Jalna" },
  { id: "route-15", label: "Nashik to Indore" },
  { id: "route-16", label: "Nashik to Goa Velha" },
  { id: "route-17", label: "Nashik to Nandurbar" },
  { id: "route-18", label: "Nashik to Ratnagiri" },
  { id: "route-19", label: "Nashik to Mahabaleshwar" },
  { id: "route-20", label: "Nashik to Tuljapur" },
  { id: "route-21", label: "Nashik to Pandharpur" },
  { id: "route-22", label: "Nashik to Solapur" },
  { id: "route-23", label: "Nashik to Chinchwad" },
  { id: "route-24", label: "Nashik to Mumbai Airport" },
  { id: "route-25", label: "Nashik to Satara" },
  { id: "route-26", label: "Nashik to Vadodara" },
  { id: "route-27", label: "Nashik to Navi Mumbai" },
  { id: "route-28", label: "Nashik to Trimbak" },
  { id: "route-29", label: "Nashik to Dhule" },
  { id: "route-30", label: "Nashik to Jalgaon" },
  { id: "route-31", label: "Nashik to Saptashrungi" },
  { id: "route-32", label: "Nashik to Igatpuri" },
  { id: "route-33", label: "Nashik to Lonavala" },
  { id: "route-34", label: "Nashik to Khandala" },
  { id: "route-35", label: "Nashik to Sambhaji Nagar" },
  { id: "route-36", label: "Nashik to Surat" },
];

export const CityServicesRoute = rawCityRoutes.map((route) => ({
  ...route,
  url: `/cities/${slugify(route.label)}`,
}));

// tourData.js — Complete dynamic tour data
export const toursData = [
  // ─── TOUR 01 ───────────────────────────────────────────────────────────────
  {
    id: "tour-01",
    title: {
      en: "Shani Shingnapur Cab / Taxi Rental Service",
      hi: "शनि शिंगणापुर कैब / टैक्सी रेंटल सेवा",
      mr: "शनि शिंगणापूर कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "shani-shingnapur-car-rental",
    image: "/images/shani-shingnapur.jpg",
    tagline: {
      en: "Shani Shingnapur Cab / Taxi Rental Services",
      hi: "शनि शिंगणापुर कैब / टैक्सी रेंटल सेवाएं",
      mr: "शनि शिंगणापूर कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Shani Shingnapur",
      hi: "शनि शिंगणापुर",
      mr: "शनि शिंगणापूर",
    },
    intro: {
      en: "At Prachi Tours & Travels Airport Cab, we offer budget-friendly Cab rentals for your journey to Shani Shingnapur. Whether you're planning a roundtrip or a one-way ride, we provide the most reliable and affordable Cab / Taxi Rental Services for this sacred journey.",
      hi: "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब में, हम शनि शिंगणापुर की आपकी यात्रा के लिए किफायती कैब रेंटल प्रदान करते हैं। चाहे आप राउंडट्रिप की योजना बना रहे हों या वन-वे राइड की, हम इस पवित्र यात्रा के लिए सबसे भरोसेमंद और किफायती कैब / टैक्सी सेवाएं देते हैं।",
      mr: "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅबमध्ये आम्ही तुमच्या शनि शिंगणापूर प्रवासासाठी परवडणाऱ्या दरात कॅब रेंटल सेवा देतो. तुम्ही राउंडट्रिप किंवा वन-वे प्रवासाचे नियोजन करत असाल, तरी या पवित्र यात्रेसाठी आम्ही सर्वात विश्वासार्ह व किफायतशीर कॅब / टॅक्सी सेवा पुरवतो.",
    },
    fleetDescription: {
      en: "Our fleet includes a variety of cars like Swift Dzire, Tempo Traveller, and Innova, ensuring that you find the perfect vehicle to suit your needs. With our easy online booking system, friendly drivers, and well-maintained Cabs / Taxi, we guarantee a smooth and hassle-free experience as you travel to Shani Shingnapur.",
      hi: "हमारे बेड़े में स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसी कई गाड़ियां शामिल हैं, जिससे आपको अपनी आवश्यकता के अनुसार उपयुक्त वाहन मिलता है। हमारी आसान ऑनलाइन बुकिंग, विनम्र ड्राइवरों और सुव्यवस्थित कैब्स के साथ हम शनि शिंगणापुर की सुगम यात्रा की गारंटी देते हैं।",
      mr: "आमच्या ताफ्यात स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या विविध गाड्या आहेत, ज्यामुळे तुम्हाला तुमच्या गरजेनुसार योग्य वाहन मिळते. आमच्या सोप्या ऑनलाइन बुकिंग, नम्र चालक आणि सुस्थितीतील कॅब्ससह आम्ही शनि शिंगणापूरच्या सुखकर प्रवासाची खात्री देतो.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "About Shani Shingnapur",
          hi: "शनि शिंगणापुर के बारे में",
          mr: "शनि शिंगणापूरबद्दल माहिती",
        },
        content: {
          en: "Shani Shingnapur, located in the Ahmednagar District of Maharashtra, is about 70 kilometers from Nashik. Known for its temple dedicated to Lord Shaneshwara, the town draws thousands of devotees daily, especially on Saturdays, which is considered an auspicious day to seek the Lord's blessings. The unique aspect of this temple is that it has no traditional structure; the deity is enshrined on an open platform, showcasing the awe-inspiring black stone idol of Lord Shanidev, the embodiment of the planet Saturn.",
          hi: "महाराष्ट्र के अहमदनगर जिले में स्थित शनि शिंगणापुर नासिक से लगभग 70 किलोमीटर दूर है। भगवान शनेश्वर को समर्पित इस मंदिर में प्रतिदिन हजारों श्रद्धालु आते हैं, विशेष रूप से शनिवार को जो भगवान शनिदेव का आशीर्वाद लेने के लिए अत्यंत शुभ माना जाता है। इस मंदिर की विशेषता यह है कि इसका कोई पारंपरिक भवन नहीं है; यहाँ खुले चबूतरे पर काले पत्थर की भव्य स्वयंभू मूर्ति विराजमान है।",
          mr: "महाराष्ट्रातील अहमदनगर जिल्ह्यात वसलेले शनि शिंगणापूर नाशिकपासून सुमारे ७० किलोमीटर अंतरावर आहे. भगवान शनेश्वराला समर्पित या मंदिरात दररोज हजारो भाविक दर्शनासाठी येतात, विशेषतः शनिवारी येथे मोठी गर्दी असते. या मंदिराचे वैशिष्ट्य म्हणजे येथे कोणतीही पारंपरिक इमारत किंवा छत नाही; उघड्या चौथऱ्यावर शनिदेवाची काळ्या पाषाणातील भव्य स्वयंभू मूर्ती विराजमान आहे.",
        },
      },
      {
        type: "callout",
        heading: {
          en: "Distance and Fare",
          hi: "दूरी और किराया",
          mr: "अंतर आणि दर",
        },
        content: {
          en: "The roundtrip distance to Shani Shingnapur is approximately 150 km. Our Cab / Taxi Rental Services provide the most convenient travel option for this route. Cab fares range between ₹1300 and ₹2500, depending on your vehicle choice and any shared ride arrangements. For larger groups, we offer Tempo Traveller services on a per-seat basis.",
          hi: "शनि शिंगणापुर की राउंडट्रिप दूरी लगभग 150 किमी है। हमारी कैब सेवा इस मार्ग के लिए सबसे सुविधाजनक विकल्प है। वाहन के चयन के आधार पर कैब का किराया ₹1300 से ₹2500 के बीच रहता है। बड़े समूहों के लिए हम प्रति-सीट आधार पर टेम्पो ट्रैवलर सेवा भी प्रदान करते हैं।",
          mr: "शनि शिंगणापूरचे राउंडट्रिप अंतर सुमारे १५० किमी आहे. या मार्गासाठी आमची कॅब सेवा सर्वात सोयीस्कर पर्याय आहे. वाहनाच्या निवडीनुसार कॅबचे भाडे ₹१३०० ते ₹२५०० दरम्यान असते. मोठ्या गटांसाठी आम्ही प्रति-सीट दराने टेम्पो ट्रॅव्हलर सेवा देखील देतो.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Why Choose Us?",
          hi: "हमें ही क्यों चुनें?",
          mr: "आम्हालाच का निवडावे?",
        },
        intro: {
          en: "At Prachi Tours & Travels Airport Cab, we prioritize your safety, comfort, and satisfaction. Our services include:",
          hi: "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब में, हम आपकी सुरक्षा, आराम और संतुष्टि को सर्वोच्च प्राथमिकता देते हैं। हमारी सेवाओं में शामिल हैं:",
          mr: "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅबमध्ये आम्ही तुमची सुरक्षितता, आराम आणि समाधानाला सर्वोच्च प्राधान्य देतो. आमच्या सेवांमध्ये समाविष्ट आहे:",
        },
        items: {
          en: [
            "Safe, punctual, and dependable rides",
            "Competitive pricing",
            "Clean and well-maintained vehicles",
            "Friendly and courteous drivers",
            "Stress-free travel with customizable packages",
          ],
          hi: [
            "सुरक्षित, समयनिष्ठ और भरोसेमंद यात्रा",
            "किफायती और पारदर्शी किराया",
            "स्वच्छ और सुव्यवस्थित वाहन",
            "विनम्र और अनुभवी ड्राइवर",
            "कस्टमाइज़ करने योग्य पैकेज के साथ तनाव-मुक्त सफर",
          ],
          mr: [
            "सुरक्षित, वक्तशीर आणि विश्वासार्ह प्रवास",
            "स्पर्धात्मक आणि पारदर्शक दर",
            "स्वच्छ आणि सुस्थितीतील वाहने",
            "नम्र आणि अनुभवी चालक",
            "कस्टमाईझ पॅकेजेससह तणावमुक्त प्रवास",
          ],
        },
        closing: {
          en: "We are available 24/7, offering round-the-clock support to ensure that your journey is seamless and enjoyable. Whether you're a solo traveler or with family, book with us for a memorable trip.",
          hi: "हम आपकी यात्रा को सुगम और सुखद बनाने के लिए 24/7 उपलब्ध हैं। चाहे आप अकेले यात्रा कर रहे हों या परिवार के साथ, यादगार यात्रा के लिए हमारे साथ बुकिंग करें।",
          mr: "तुमचा प्रवास सुखकर आणि आनंददायी व्हावा यासाठी आम्ही २४/७ उपलब्ध आहोत. तुम्ही एकटे प्रवास करत असाल किंवा कुटुंबासोबत, अविस्मरणीय सहलीसाठी आमच्याकडे बुकिंग करा.",
        },
      },
      {
        type: "text",
        heading: {
          en: "A Divine Experience",
          hi: "एक दिव्य अनुभव",
          mr: "एक दिव्य अनुभव",
        },
        content: {
          en: "Shani Shingnapur is a unique destination, not just for its spiritual significance but also for its unconventional architecture. The village is renowned for the absence of doors and locks, symbolizing a place of ultimate faith and safety. Every day, around 30,000 devotees visit the temple, with numbers soaring to over 300,000 on Saturdays and Shani Trayodashi.",
          hi: "शनि शिंगणापुर न केवल अपने आध्यात्मिक महत्व बल्कि अपनी अनूठी परंपरा के लिए भी प्रसिद्ध है। यह गांव घरों में दरवाजे और ताले न होने के लिए जाना जाता है, जो अटूट आस्था और सुरक्षा का प्रतीक है। प्रतिदिन लगभग 30,000 श्रद्धालु यहां दर्शन करते हैं, और शनिवार तथा शनि त्रयोदशी को यह संख्या 3,00,000 से अधिक हो जाती है।",
          mr: "शनि शिंगणापूर हे केवळ धार्मिक महत्त्वासाठीच नव्हे तर आपल्या आगळ्यावेगळ्या परंपरेसाठीही प्रसिद्ध आहे. येथील घरांना दरवाजे आणि कुलूप नसणे हे अतूट श्रद्धा आणि सुरक्षिततेचे प्रतीक मानले जाते. दररोज सुमारे ३०,००० भाविक येथे दर्शनासाठी येतात, तर शनिवारी आणि शनि त्रयोदशीला ही संख्या ३,००,००० च्या पुढे जाते.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Places to Visit Near Shani Shingnapur",
          hi: "शनि शिंगणापुर के पास घूमने की जगहें",
          mr: "शनि शिंगणापूरजवळील पर्यटन स्थळे",
        },
        intro: {
          en: "While visiting Shani Shingnapur, you can also plan a family outing to these nearby attractions:",
          hi: "शनि शिंगणापुर की यात्रा के दौरान आप इन नजदीकी दर्शनीय स्थलों की यात्रा की भी योजना बना सकते हैं:",
          mr: "शनि शिंगणापूर भेटीदरम्यान तुम्ही जवळच्या या पर्यटन स्थळांनाही भेट देण्याचे नियोजन करू शकता:",
        },
        items: {
          en: [
            "Mula Dam (located along the Shani Shingnapur road)",
            "Temple of Goddess Laxmi",
            "Sant Shri Udasi Baba's Samadhi",
            "Temple of Shri Dattatraya",
          ],
          hi: [
            "मुला बांध (शनि शिंगणापुर मार्ग पर स्थित)",
            "माता लक्ष्मी मंदिर",
            "संत श्री उदासी बाबा समाधि",
            "श्री दत्तात्रेय मंदिर",
          ],
          mr: [
            "मुळा धरण (शनि शिंगणापूर मार्गावर स्थित)",
            "देवी लक्ष्मी मंदिर",
            "संत श्री उदासी बाबा समाधी",
            "श्री दत्तात्रेय मंदिर",
          ],
        },
        closing: {
          en: "For a comfortable and smooth journey to Shani Shingnapur, book your Cab with Prachi Tours & Travels Airport Cab today!",
          hi: "शनि शिंगणापुर की आरामदायक और सुगम यात्रा के लिए आज ही प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब के साथ अपनी कैब बुक करें!",
          mr: "शनि शिंगणापूरच्या आरामदायी आणि सुखकर प्रवासासाठी आजच प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅबसोबत तुमची कॅब बुक करा!",
        },
      },
    ],
    longDistance: {
      heading: { en: "", hi: "", mr: "" },
      content: { en: "", hi: "", mr: "" },
      closing: {
        en: "Call us today for easy bookings and stress-free travel!",
        hi: "आसान बुकिंग और तनाव-मुक्त यात्रा के लिए आज ही हमें कॉल करें!",
        mr: "सोप्या बुकिंग आणि तणावमुक्त प्रवासासाठी आजच आम्हाला कॉल करा!",
      },
    },
    meta: {
      title:
        "Shani Shingnapur Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Book affordable Cab to Shani Shingnapur. Swift Dzire, Innova, Tempo Traveller available. Fares from ₹1300. 24/7 service.",
    },
  },

  // ─── TOUR 02 ───────────────────────────────────────────────────────────────
  {
    id: "tour-02",
    title: {
      en: "Trimbakeshwar Darshan Cab / Taxi Rental Service",
      hi: "त्र्यंबकेश्वर दर्शन कैब / टैक्सी रेंटल सेवा",
      mr: "त्र्यंबकेश्वर दर्शन कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "trimbakeshwar-darshan-cab",
    image: "/images/nashik-trimbakeshwar.jpg",
    tagline: {
      en: "Trimbakeshwar Cab / Taxi Rental Services",
      hi: "त्र्यंबकेश्वर कैब / टैक्सी रेंटल सेवाएं",
      mr: "त्र्यंबकेश्वर कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    intro: { en: "", hi: "", mr: "" },
    popularCity: true,
    popularCityTitle: {
      en: "Trimbakeshwar",
      hi: "त्र्यंबकेश्वर",
      mr: "त्र्यंबकेश्वर",
    },
    fleetDescription: { en: "", hi: "", mr: "" },
    longDistance: {
      heading: { en: "", hi: "", mr: "" },
      content: {
        en: [
          "Trimbakeshwar is a religious center having one of the twelve Jyotirlingas. The extraordinary feature of the Jyotirlinga located here is its three faces embodying Lord Brahma, Lord Vishnu, and Lord Rudra. Due to the excessive use of water, the linga has started to erode. It is said that this erosion symbolizes the eroding nature of human society. The Lingas are covered by a jeweled crown which is placed over the Gold Mask of Tridev (Brahma Vishnu Mahesh).",
          "Planning a quick trip to Trimbakeshwar? Have you thought about how you’re going to commute with your entire family in a convenient and comfortable way? We can help. How? With the best of car rental services to Trimbakeshwar.",
          "We provide Trimbakeshwar Cab / Taxi Rental Services at awesome offers. Hire a cab to Trimbakeshwar from us with best car services. Experience our online Cab booking services to Trimbakeshwar with reliable and polite drivers. Prachi Tours & Travels Airport Cabs / Taxi, the leading car rental services in Nashik has all the variety fleet of cars like Swift Dzire, Tempo Traveller, Innova to get for a Trimbakeshwar tour package at affordable fare.",
        ],
        hi: [
          "त्र्यंबकेश्वर एक प्रमुख धार्मिक केंद्र है जहां बारह ज्योतिर्लिंगों में से एक विराजमान है। यहां स्थित ज्योतिर्लिंग की असाधारण विशेषता इसके तीन मुख हैं जो भगवान ब्रह्मा, भगवान विष्णु और भगवान रुद्र के प्रतीक हैं। ज्योतिर्लिंग पर त्रिदेव (ब्रह्मा, विष्णु, महेश) के स्वर्ण मुखौटे के ऊपर रत्नजड़ित मुकुट सुशोभित है।",
          "क्या आप अपने पूरे परिवार के साथ त्र्यंबकेश्वर की सुविधाजनक और आरामदायक यात्रा की योजना बना रहे हैं? हम त्र्यंबकेश्वर के लिए सर्वश्रेष्ठ कार रेंटल सेवाओं के साथ आपकी यात्रा को सुगम बनाते हैं।",
          "हम त्र्यंबकेश्वर कैब / टैक्सी रेंटल सेवाओं पर बेहतरीन ऑफ़र प्रदान करते हैं। नासिक की अग्रणी कार रेंटल सेवा प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स के पास किफायती किराए पर स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसी सभी गाड़ियां उपलब्ध हैं।",
        ],
        mr: [
          "त्र्यंबकेश्वर हे बारा ज्योतिर्लिंगांपैकी एक असलेले अत्यंत पवित्र धार्मिक क्षेत्र आहे. येथील ज्योतिर्लिंगाचे अद्वितीय वैशिष्ट्य म्हणजे याला ब्रह्मा, विष्णू आणि महेश या त्रिदेवांचे प्रतीक असलेली तीन मुखे आहेत. त्रिदेवांच्या सुवर्ण मुखवट्यावर रत्नजडित मुकुट विराजमान आहे.",
          "तुमच्या संपूर्ण कुटुंबासोबत त्र्यंबकेश्वरला सोयीस्कर आणि आरामदायी प्रवासाचे नियोजन करत आहात का? आम्ही त्र्यंबकेश्वरसाठी सर्वोत्तम कार रेंटल सेवा देऊन तुमचा प्रवास सुखकर करतो.",
          "आम्ही त्र्यंबकेश्वर कॅब / टॅक्सी रेंटल सेवांवर आकर्षक ऑफर्स देतो. नाशिकमधील अग्रगण्य कार रेंटल सेवा प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्सकडे परवडणाऱ्या दरात स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या सर्व गाड्या उपलब्ध आहेत.",
        ],
      },
      closing: {
        en: "Call us to book your Trimbakeshwar Darshan cab today!",
        hi: "आज ही अपनी त्र्यंबकेश्वर दर्शन कैब बुक करने के लिए हमें कॉल करें!",
        mr: "आजच तुमची त्र्यंबकेश्वर दर्शन कॅब बुक करण्यासाठी आम्हाला कॉल करा!",
      },
    },
    meta: {
      title: "Trimbakeshwar Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Book comfortable Cab to Trimbakeshwar Jyotirlinga. Fares from ₹2000. AC Cabs / Taxi, experienced drivers.",
    },
  },

  // ─── TOUR 03 ───────────────────────────────────────────────────────────────
  {
    id: "tour-03",
    title: {
      en: "Kopargaon Cab / Taxi Rental Service",
      hi: "कोपरगांव कैब / टैक्सी रेंटल सेवा",
      mr: "कोपरगाव कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "kopargaon-cab",
    image: "/images/kopargaon-shirdi-cab.jpg",
    tagline: {
      en: "Kopargaon to Nashik Cab / Taxi Rental Service",
      hi: "कोपरगांव से नासिक कैब / टैक्सी रेंटल सेवा",
      mr: "कोपरगाव ते नाशिक कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    longDistance: {
      heading: {
        en: "Need Onward Travel from Nashik?",
        hi: "क्या आपको नासिक से आगे की यात्रा करनी है?",
        mr: "नाशिकहून पुढील प्रवासाची गरज आहे का?",
      },
      content: {
        en: [
          "Planning a quick trip from Kopargaon to Nashik? Wondering how to ensure a comfortable and convenient journey for your entire family? We’ve got you covered with top-notch car rental services! The distance from Kopargaon Railway Station to the Nashik Sai Baba Temple is approximately 18 kilometers, taking about 26 to 30 minutes by Cab. Renting a cab from Kopargaon to Nashik ensures a smooth, fast, and comfortable ride. Our cars are well-maintained and easy to drive, with professional drivers who are familiar with the route and ensure a pleasant travel experience.",
          "Kopargaon Railway Station, located in Ahmednagar district, Maharashtra, serves the town of Kopargaon and operates under the Solapur railway division of the Central Railway Zone. Sitting at an elevation of 508 meters, the station has two platforms and is part of an electrified single broad gauge line. With 74 trains stopping here, it’s a busy hub. We offer affordable and reliable Cab / Taxi Rental Services from Kopargaon to Nashik, ensuring a stress-free journey.",
          "Hire a cab from Kopargaon to Nashik with us, enjoying the best car services in the region. Our online booking platform provides access to a variety of vehicles such as Swift Dzire, Tempo Travellers, and Innovas, all at competitive rates. Prachi Tours & Travels Airport Cabs / Taxi is dedicated to delivering high-quality service, both to our customers and our hardworking drivers, who strive to ensure a pleasant experience for every passenger.",
          "Depending on your travel needs and group size, we offer a range of vehicle options to choose from. Whether you need a one-way trip from Kopargaon to Nashik or a round trip back, our exceptional Cab / Taxi Rental Services ensure a reliable and enjoyable journey.",
          "Prachi Tours & Travels Airport Cabs / Taxi, based in Nashik, Maharashtra, also offers online booking for Cabs / Taxi to Kopargaon. Check out our Kopargaon to Nashik Cab fares, and let us make your travel easy and hassle-free.",
        ],
        hi: [
          "कोपरगांव से नासिक की त्वरित यात्रा की योजना बना रहे हैं? हम आपकी पूरी फैमिली के लिए आरामदायक और सुविधाजनक कार रेंटल सेवाएं प्रदान करते हैं। हमारे अनुभवी ड्राइवर और सुव्यवस्थित कारें एक तेज और सुखद सफर सुनिश्चित करती हैं।",
          "महाराष्ट्र के अहमदनगर जिले में स्थित कोपरगांव रेलवे स्टेशन मध्य रेलवे ज़ोन के सोलापुर डिवीजन के अंतर्गत एक व्यस्त केंद्र है। हम कोपरगांव से नासिक के लिए किफायती और भरोसेमंद कैब / टैक्सी सेवाएं प्रदान करते हैं।",
          "हमारे ऑनलाइन बुकिंग प्लेटफॉर्म पर स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसे विभिन्न वाहन प्रतिस्पर्धी दरों पर उपलब्ध हैं। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स हर यात्री को बेहतरीन सेवा देने के लिए प्रतिबद्ध है।",
          "आपकी यात्रा की आवश्यकता और समूह के आकार के अनुसार हमारे पास वन-वे और राउंडट्रिप दोनों विकल्प उपलब्ध हैं।",
          "नासिक स्थित प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स कोपरगांव आने-जाने के लिए आसान ऑनलाइन बुकिंग प्रदान करता है।",
        ],
        mr: [
          "कोपरगाव ते नाशिक जलद प्रवासाचे नियोजन करत आहात का? आम्ही तुमच्या संपूर्ण कुटुंबासाठी आरामदायी आणि सोयीस्कर कार रेंटल सेवा देतो. आमचे अनुभवी चालक आणि सुस्थितीतील वाहने सुखकर प्रवासाची खात्री देतात.",
          "महाराष्ट्रातील अहमदनगर जिल्ह्यातील कोपरगाव रेल्वे स्थानक हे मध्य रेल्वेच्या सोलापूर विभागातील एक महत्त्वाचे स्थानक आहे. आम्ही कोपरगावहून नाशिकसाठी परवडणाऱ्या व विश्वासार्ह कॅब / टॅक्सी सेवा देतो.",
          "आमच्या ऑनलाइन बुकिंग प्लॅटफॉर्मवर स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारखी विविध वाहने स्पर्धात्मक दरात उपलब्ध आहेत. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स प्रत्येक प्रवाशाला उत्तम सेवा देण्यासाठी कटिबद्ध आहे.",
          "तुमच्या प्रवासाच्या गरजेनुसार आणि गटाच्या आकारानुसार आम्ही वन-वे आणि राउंडट्रिप दोन्ही पर्याय देतो.",
          "नाशिक येथील प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स कोपरगाव ये-जा करण्यासाठी सोपी ऑनलाइन बुकिंग सुविधा देते.",
        ],
      },
      closing: {
        en: "Call us now for instant cab booking!",
        hi: "तत्काल कैब बुकिंग के लिए अभी हमें कॉल करें!",
        mr: "त्वरित कॅब बुकिंगसाठी आत्ताच आम्हाला कॉल करा!",
      },
    },
    meta: {
      title:
        "Kopargaon to Nashik Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Quick cab from Kopargaon Railway Station to Nashik Sai Baba Temple. Fares from ₹300. 24/7 service.",
    },
  },

  // ─── TOUR 04 ───────────────────────────────────────────────────────────────
  {
    id: "tour-04",
    title: {
      en: "Manmad Cab / Taxi Rental Service",
      hi: "मनमाड कैब / टैक्सी रेंटल सेवा",
      mr: "मनमाड कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "manmad-cab-service",
    image: "/images/nashik-manmad.jpg",
    tagline: {
      en: "Manmad Cab / Taxi Rental Service",
      hi: "मनमाड कैब / टैक्सी रेंटल सेवा",
      mr: "मनमाड कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    longDistance: {
      heading: {
        en: "Long Distance Travel?",
        hi: "लंबी दूरी की यात्रा?",
        mr: "लांब पल्ल्याचा प्रवास?",
      },
      content: {
        en: [
          "Planning a quick trip to Manmad? Wondering how to ensure a comfortable and convenient journey for your entire family? We’ve got you covered with top-notch car rental services! The distance to Manmad is approximately 90 kilometers, taking about 2 hours by Cab. Renting a cab to Manmad ensures a smooth, fast, and comfortable ride. Our cars are well-maintained and easy to drive, with professional drivers who are familiar with the route and ensure a pleasant travel experience.",
          "Manmad Railway Station, located in the Nashik district of Maharashtra, is a crucial railway junction operating under the Bhusawal railway division of the Central Railway Zone. Serving as a major transit hub connecting various parts of the country, it handles a massive volume of daily passengers. We offer affordable and reliable Cab / Taxi Rental Services to Manmad, ensuring a stress-free journey.",
          "Hire a cab to Manmad with us, enjoying the best car services in the region. Our online booking platform provides access to a variety of vehicles such as Swift Dzire, Tempo Travellers, and Innovas, all at competitive rates. Prachi Tours & Travels Airport Cab is dedicated to delivering high-quality service, both to our customers and our hardworking drivers, who strive to ensure a pleasant experience for every passenger.",
          "Depending on your travel needs and group size, we offer a range of vehicle options to choose from. Whether you need a one-way trip to Manmad or a round trip back, our exceptional Cab / Taxi Rental Services ensure a reliable and enjoyable journey.",
          "Prachi Tours & Travels Airport Cabs / Taxi offers seamless online booking for Cabs / Taxi to Manmad and back. Check out our Manmad Cab fares, and let us make your travel easy and hassle-free.",
        ],
        hi: [
          "मनमाड की यात्रा की योजना बना रहे हैं? मनमाड की दूरी लगभग 90 किलोमीटर है, जिसे कैब द्वारा तय करने में लगभग 2 घंटे लगते हैं। हमारी सुव्यवस्थित कारों और अनुभवी ड्राइवरों के साथ एक तेज और आरामदायक सफर का आनंद लें।",
          "महाराष्ट्र के नासिक जिले में स्थित मनमाड रेलवे स्टेशन मध्य रेलवे के भुसावल डिवीजन का एक अत्यंत महत्वपूर्ण रेलवे जंक्शन है। हम मनमाड के लिए किफायती और भरोसेमंद कैब सेवाएं प्रदान करते हैं।",
          "हमारे ऑनलाइन बुकिंग प्लेटफॉर्म पर स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसे वाहन प्रतिस्पर्धी दरों पर उपलब्ध हैं।",
          "आपकी आवश्यकता और समूह के आकार के अनुसार वन-वे या राउंडट्रिप दोनों विकल्प उपलब्ध हैं।",
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स मनमाड आने-जाने के लिए सहज ऑनलाइन बुकिंग और पारदर्शी किराया प्रदान करता है।",
        ],
        mr: [
          "मनमाडच्या प्रवासाचे नियोजन करत आहात का? मनमाडचे अंतर सुमारे ९० किलोमीटर असून कॅबने हा प्रवास सुमारे २ तासांत पूर्ण होतो. आमच्या सुस्थितीतील गाड्या आणि अनुभवी चालकांसह जलद व आरामदायी प्रवासाचा आनंद घ्या.",
          "महाराष्ट्रातील नाशिक जिल्ह्यातील मनमाड रेल्वे स्थानक हे मध्य रेल्वेच्या भुसावळ विभागातील एक अत्यंत महत्त्वाचे रेल्वे जंक्शन आहे. आम्ही मनमाडसाठी परवडणाऱ्या आणि विश्वासार्ह कॅब सेवा देतो.",
          "आमच्या ऑनलाइन बुकिंग प्लॅटफॉर्मवर स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारखी वाहने स्पर्धात्मक दरात उपलब्ध आहेत.",
          "तुमच्या प्रवासाच्या गरजेनुसार आणि गटाच्या आकारानुसार वन-वे किंवा राउंडट्रिप दोन्ही पर्याय उपलब्ध आहेत.",
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स मनमाड ये-जा करण्यासाठी सोपी ऑनलाइन बुकिंग आणि पारदर्शक दर देते.",
        ],
      },
      closing: {
        en: "Call us for bookings!",
        hi: "बुकिंग के लिए हमें कॉल करें!",
        mr: "बुकिंगसाठी आम्हाला कॉल करा!",
      },
    },
    meta: {
      title: "Manmad Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description: "Affordable cab to Manmad. Fares from ₹1800. 24/7 pickup.",
    },
  },

  // ─── TOUR 05 ───────────────────────────────────────────────────────────────
  {
    id: "tour-05",
    title: {
      en: "Bhimashankar Darshan Cab / Taxi Rental Service",
      hi: "भीमाशंकर दर्शन कैब / टैक्सी रेंटल सेवा",
      mr: "भीमाशंकर दर्शन कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "bhimashankar-darshan-cab",
    image: "/images/nashik-bhimashankar.jpg",
    tagline: {
      en: "Bhimashankar Jyotirlinga Cab / Taxi Rental Service",
      hi: "भीमाशंकर ज्योतिर्लिंग कैब / टैक्सी रेंटल सेवा",
      mr: "भीमाशंकर ज्योतिर्लिंग कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Bhimashankar",
      hi: "भीमाशंकर",
      mr: "भीमाशंकर",
    },
    longDistance: {
      heading: {
        en: "Combine with Pune Trip",
        hi: "पुणे यात्रा के साथ जोड़ें",
        mr: "पुणे सहलीसोबत नियोजन करा",
      },
      content: {
        en: [
          "We provide Bhimashankar Cab / Taxi Rental Services at awesome offers. Hire a cab to Bhimashankar from us with the best car services. Experience our online cab booking services to Bhimashankar with reliable and polite drivers. Prachi Tours & Travels Airport Cabs / Taxi, the leading car rental services in Nashik has all the variety fleet of cars like Swift Dzire, Tempo Traveller, Innova to hire for a Cab to Bhimashankar at affordable rates.",
          "Bhimashankar Temple is a Jyotirlinga shrine located 50 km northwest of Khed, near Pune, in India. It is located 127 km from Shivaji Nagar (Pune) in the Ghat region of the Sahyadri hills. Bhimashankar is also the source of the river Bhima, which flows southeast and merges with the Krishna river near Raichur. The other Jyotirlinga shrines in Maharashtra are Vaidyanath near Parli Dist Beed, Trimbakeshwara near Nashik, Grishneshwar near Aurangabad and Aundha Nagnath Temple in Hingoli, Nagnaath in Aundh built by Pandav brothers in one night during their exile.",
        ],
        hi: [
          "हम भीमाशंकर कैब / टैक्सी रेंटल सेवाओं पर बेहतरीन ऑफ़र प्रदान करते हैं। भरोसेमंद और विनम्र ड्राइवरों के साथ भीमाशंकर के लिए ऑनलाइन कैब बुकिंग का अनुभव लें। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स के पास स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसी सभी गाड़ियां किफायती दरों पर उपलब्ध हैं।",
          "भीमाशंकर मंदिर पुणे के पास सह्याद्री पहाड़ियों के घाट क्षेत्र में स्थित एक पवित्र ज्योतिर्लिंग है। यह शिवाजी नगर (पुणे) से 127 किमी दूर स्थित है और भीमा नदी का उद्गम स्थल भी है। महाराष्ट्र के अन्य ज्योतिर्लिंगों में परली वैजनाथ, त्र्यंबकेश्वर, घृष्णेश्वर और औंढा नागनाथ शामिल हैं।",
        ],
        mr: [
          "आम्ही भीमाशंकर कॅब / टॅक्सी रेंटल सेवांवर आकर्षक ऑफर्स देतो. विश्वासार्ह आणि नम्र चालकांसह भीमाशंकरसाठी ऑनलाइन कॅब बुकिंगचा अनुभव घ्या. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्सकडे स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या सर्व गाड्या परवडणाऱ्या दरात उपलब्ध आहेत.",
          "भीमाशंकर मंदिर हे पुण्याजवळील सह्याद्री पर्वतरांगांच्या घाट परिसरात वसलेले एक पवित्र ज्योतिर्लिंग आहे. शिवाजीनगर (पुणे) पासून १२७ किमी अंतरावर असलेले हे स्थान भीमा नदीचे उगमस्थान देखील आहे. महाराष्ट्रातील इतर ज्योतिर्लिंगांमध्ये परळी वैजनाथ, त्र्यंबकेश्वर, घृष्णेश्वर आणि औंढा नागनाथ यांचा समावेश होतो.",
        ],
      },
      closing: {
        en: "Ask us about combo packages!",
        hi: "कॉम्बो पैकेज के बारे में हमसे पूछें!",
        mr: "कॉम्बो पॅकेजेसबद्दल आम्हाला विचारा!",
      },
    },
    meta: {
      title: "Bhimashankar Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Cab to Bhimashankar Jyotirlinga. Expert hill drivers. Fares from ₹3500.",
    },
  },

  // ─── TOUR 06 ───────────────────────────────────────────────────────────────
  {
    id: "tour-06",
    title: {
      en: "Ahmednagar Cab / Taxi Rental Service",
      hi: "अहमदनगर कैब / टैक्सी रेंटल सेवा",
      mr: "अहमदनगर कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "ahmednagar-cab-service",
    image: "/images/nashik-ahmednagar.jpg",
    tagline: {
      en: "Ahmednagar Cab / Taxi Rental Service",
      hi: "अहमदनगर कैब / टैक्सी रेंटल सेवा",
      mr: "अहमदनगर कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    longDistance: {
      heading: {
        en: "More Destinations from Ahmednagar",
        hi: "अहमदनगर से अन्य गंतव्य स्थल",
        mr: "अहमदनगरहून पुढील पर्यटन स्थळे",
      },
      content: {
        en: [
          "Prachi Tours & Travels Airport Cabs / Taxi provides Budget Cabs / Taxi & Cab on Rent to Ahmednagar with roundtrip journeys.",
          "We provide Ahmednagar Cab / Taxi Rental Services with the lowest fare. Hire a cab to Ahmednagar from us with the best local car services. Experience our online cab booking services to Ahmednagar with reliable and polite drivers. Prachi Tours & Travels Airport Cabs / Taxi, the leading car rental travel services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Ahmednagar at affordable rates. Located in Maharashtra, the Ahmednagar District is at a distance of approximately 120 km from Nashik.",
        ],
        hi: [
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स राउंडट्रिप यात्राओं के साथ अहमदनगर के लिए किफायती कैब / टैक्सी सेवाएं प्रदान करता है।",
          "हम सबसे कम किराए पर अहमदनगर कैब रेंटल सेवाएं प्रदान करते हैं। नासिक से लगभग 120 किमी दूर स्थित अहमदनगर जिले के लिए स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसी गाड़ियां किफायती दरों पर उपलब्ध हैं।",
        ],
        mr: [
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स राउंडट्रिप प्रवासासह अहमदनगरसाठी परवडणाऱ्या दरात कॅब / टॅक्सी सेवा देते.",
          "आम्ही सर्वात कमी दरात अहमदनगर कॅब रेंटल सेवा देतो. नाशिकपासून सुमारे १२० किमी अंतरावर असलेल्या अहमदनगर जिल्ह्यासाठी स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या गाड्या किफायतशीर दरात उपलब्ध आहेत.",
        ],
      },
      closing: {
        en: "Call us for all your travel needs!",
        hi: "अपनी सभी यात्रा आवश्यकताओं के लिए हमें कॉल करें!",
        mr: "तुमच्या सर्व प्रवासाच्या गरजांसाठी आम्हाला कॉल करा!",
      },
    },
    meta: {
      title: "Ahmednagar Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description: "Reliable cab to Ahmednagar. Fares from ₹1200. Book now.",
    },
  },

  // ─── TOUR 07 ───────────────────────────────────────────────────────────────
  {
    id: "tour-07",
    title: {
      en: "Chhatrapati Sambhajinagar Ajanta Ellora Caves",
      hi: "छत्रपति संभाजीनगर अजंता एलोरा गुफाएं",
      mr: "छत्रपती संभाजीनगर अजिंठा वेरूळ लेणी",
    },
    slug: "chhatrapati-sambhajinagar-ajanta-ellora-cab",
    image: "/images/nashik-aurangabad.jpg",
    tagline: {
      en: "Chhatrapati Sambhajinagar Ajanta Ellora Cab / Taxi Rental Service",
      hi: "छत्रपति संभाजीनगर अजंता एलोरा कैब / टैक्सी रेंटल सेवा",
      mr: "छत्रपती संभाजीनगर अजिंठा वेरूळ कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    longDistance: {
      heading: {
        en: "Perfect for a 2-Day Tour",
        hi: "2-दिवसीय यात्रा के लिए उत्तम",
        mr: "२-दिवसीय सहलीसाठी उत्तम",
      },
      content: {
        en: [
          "The Ajanta Caves in the Chhatrapati Sambhajinagar (Aurangabad) district of Maharashtra state of India are about 30 rock-cut Buddhist cave monuments which date from the 2nd century BCE to about 480 or 650 CE. The caves include paintings and sculptures described by the government Archaeological Survey of India as “the finest surviving examples of Indian art, particularly painting”, which are masterpieces of Buddhist religious art, with figures of the Buddha and depictions of the Jataka tales.",
          "A few of the world heritage sites in Maharashtra are located at Chhatrapati Sambhajinagar (Aurangabad), including Ajanta-Ellora and Bibi ka Maqbara. It is just a 4-5 hour journey. If your weekend tour is planned on a Saturday, we recommend an excellent extended tour to Ajanta-Ellora. How to travel? Booking a full day car for a quick, convenient, comfortable, and affordable Ajanta-Ellora Caves tour is the best option you can choose over bus and train.",
          "Prachi Tours & Travels Airport Cabs / Taxi provides Cab / Taxi Rental Services for local and outstation destinations. Book budget Cabs / Taxi or hire Cab rental services at a very affordable rate from the most trusted leading car rental service provider in the region at a very economical fare. We offer one of the most affordable and comfortable Cab / Taxi Rental Services in the city, with multiple tour packages available as per your budget so you can plan your ride accordingly.",
          "Our drivers appreciate and enjoy the journey with each of our customers, keeping a primary responsibility for a safer journey & scheduled arrival at nearby places, or pickup/drop-off services to nearby airports, railway stations, or tourist places with transparent prices.",
        ],
        hi: [
          "महाराष्ट्र के छत्रपति संभाजीनगर (औरंगाबाद) जिले में स्थित अजंता की गुफाएं लगभग 30 चट्टानों को काटकर बनाए गए बौद्ध गुफा स्मारक हैं, जो भारतीय कला और चित्रकला की उत्कृष्ट कृतियां हैं।",
          "अजंता-एलोरा और बीबी का मकबरा जैसे विश्व धरोहर स्थल छत्रपति संभाजीनगर में स्थित हैं, जो केवल 4-5 घंटे की दूरी पर है। बस या ट्रेन की तुलना में पूरे दिन के लिए निजी कैब बुक करना सबसे आरामदायक विकल्प है।",
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स लोकल और आउटस्टेशन गंतव्यों के लिए किफायती और बजट-अनुकूल टूर पैकेज प्रदान करता है।",
          "हमारे अनुभवी ड्राइवर पारदर्शी किराए के साथ सुरक्षित यात्रा और समय पर आगमन सुनिश्चित करते हैं।",
        ],
        mr: [
          "महाराष्ट्रातील छत्रपती संभाजीनगर (औरंगाबाद) जिल्ह्यातील अजिंठा लेणी ही सुमारे ३० कातळात कोरलेली बौद्ध लेणी स्मारके आहेत, जी भारतीय चित्रकला आणि शिल्पकलेचे सर्वोत्तम नमुने मानली जातात.",
          "अजिंठा-वेरूळ आणि बीबी का मकबरा ही जागतिक वारसा स्थळे छत्रपती संभाजीनगर येथे असून हा प्रवास केवळ ४-५ तासांचा आहे. बस किंवा रेल्वेपेक्षा पूर्ण दिवसासाठी खाजगी कॅब बुक करणे सर्वात सोयीस्कर ठरते.",
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स लोकल आणि आउटस्टेशन सहलींसाठी परवडणारे आणि बजेट-अनुकूल टूर पॅकेजेस देते.",
          "आमचे अनुभवी चालक पारदर्शक दरांसह सुरक्षित प्रवास आणि वेळेवर पोहोचण्याची खात्री देतात.",
        ],
      },
      closing: {
        en: "Ask about our 2-day package deals!",
        hi: "हमारे 2-दिवसीय पैकेज ऑफ़र के बारे में पूछें!",
        mr: "आमच्या २-दिवसीय पॅकेज ऑफर्सबद्दल विचारा!",
      },
    },
    meta: {
      title:
        "Chhatrapati Sambhajinagar Ajanta Ellora Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Cab to Ajanta Ellora Caves Aurangabad. Heritage day tour. Fares from ₹2500.",
    },
  },

  // ─── TOUR 08 ───────────────────────────────────────────────────────────────
  {
    id: "tour-08",
    title: {
      en: "Verul Cab / Taxi Rental Service",
      hi: "वेरुल कैब / टैक्सी रेंटल सेवा",
      mr: "वेरूळ कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "verul-car-rental-cab",
    image: "/images/nashik-verul.jpg",
    tagline: {
      en: "Verul Car Rental",
      hi: "वेरुल कार रेंटल",
      mr: "वेरूळ कार रेंटल",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Verul",
      hi: "वेरुल",
      mr: "वेरूळ",
    },
    longDistance: {
      heading: {
        en: "Why Choose Prachi Tours & Travels Airport Cab?",
        hi: "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब ही क्यों चुनें?",
        mr: "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब का निवडावे?",
      },
      content: {
        en: [
          "We provide Verul Cab / Taxi Rental Services at awesome offers. Hire a cab to Verul from us with the best local car services. Experience our online cab booking services to Verul with reliable and polite drivers. Prachi Tours & Travels Airport Cabs / Taxi, the leading car rental services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Verul at affordable rates.",
          "Prachi Tours & Travels Airport Cabs / Taxi is the premier provider of outstation & local car rental offerings, featuring specialized Verul car rentals. We offer highly customized & transparent service at a lower rate in comparison with traditional tour operators. We leverage modern booking systems to ensure you get the absolute best value-to-cost equation.",
          "Offering premium touring options, we welcome the opportunity to introduce ourselves as a renowned transport contractor and fleet owner. We maintain strict quality management standards across our entire company while encouraging and ensuring the active dedication of our team.",
        ],
        hi: [
          "हम वेरुल कैब / टैक्सी रेंटल सेवाओं पर शानदार ऑफ़र प्रदान करते हैं। हमारे पास स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसी गाड़ियां किफायती दरों पर उपलब्ध हैं।",
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स पारंपरिक टूर ऑपरेटरों की तुलना में कम दर पर पारदर्शी और कस्टमाइज़ सेवा प्रदान करता है।",
          "एक प्रतिष्ठित फ्लीट ओनर के रूप में हम अपनी पूरी कंपनी में उच्च गुणवत्ता मानकों का पालन करते हैं।",
        ],
        mr: [
          "आम्ही वेरूळ कॅब / टॅक्सी रेंटल सेवांवर आकर्षक ऑफर्स देतो. आमच्याकडे स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या गाड्या परवडणाऱ्या दरात उपलब्ध आहेत.",
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स पारंपरिक टूर ऑपरेटर्सच्या तुलनेत कमी दरात पारदर्शक आणि कस्टमाईझ सेवा देते.",
          "एक नामांकित फ्लीट ओनर म्हणून आम्ही आमच्या संपूर्ण कंपनीत उच्च दर्जाची गुणवत्ता आणि सुरक्षिततेचे निकष पाळतो.",
        ],
      },
      closing: {
        en: "Call us now for instant cab booking!",
        hi: "तत्काल कैब बुकिंग के लिए अभी हमें कॉल करें!",
        mr: "त्वरित कॅब बुकिंगसाठी आत्ताच आम्हाला कॉल करा!",
      },
    },
    meta: {
      title: "Verul Ellora Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description: "Cab to Verul Ellora Caves. Day trip fares from ₹2500.",
    },
  },

  // ─── TOUR 09 ───────────────────────────────────────────────────────────────
  {
    id: "tour-09",
    title: {
      en: "Ajanta Ellora Cab / Taxi Rental Service",
      hi: "अजंता एलोरा कैब / टैक्सी रेंटल सेवा",
      mr: "अजिंठा वेरूळ कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "ajanta-ellora-cab-service",
    image: "/images/nashik-ajanta.jpg",
    tagline: {
      en: "Ajanta & Ellora Combined Tour",
      hi: "अजंता और एलोरा संयुक्त यात्रा",
      mr: "अजिंठा आणि वेरूळ एकत्रित सहल",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    longDistance: {
      heading: {
        en: "Perfect Weekend Getaway",
        hi: "सप्ताहांत की बेहतरीन यात्रा",
        mr: "वीकेंड सहलीसाठी सर्वोत्तम पर्याय",
      },
      content: {
        en: [
          "We provide Ajanta Ellora Car Rental services at awesome offers. Hire a cab to Ajanta Ellora from us with the best local car services. Experience our online cab booking services to Ajanta Ellora with reliable and polite drivers. Prachi Tours & Travels Airport Cabs / Taxi, the leading car rental services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Ajanta Ellora at affordable rates.",
          "For Ajanta and Ellora Caves outstation (roundtrip) bookings, travelers can secure the best deals on our online cab/Cab booking platform, alongside transparent updates on cab fares and comprehensive tour package details. Prachi Tours & Travels Airport Cabs / Taxi provides both economy and luxurious cab options to Ajanta and Ellora Caves, which are ideal for small family weekend trips, corporate outings, and long weekend getaways.",
        ],
        hi: [
          "हम अजंता एलोरा कार रेंटल सेवाओं पर बेहतरीन ऑफ़र प्रदान करते हैं। विश्वसनीय और विनम्र ड्राइवरों के साथ स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा किफायती दरों पर बुक करें।",
          "अजंता और एलोरा गुफाओं की राउंडट्रिप बुकिंग के लिए हमारे प्लेटफॉर्म पर इकोनॉमी और लक्ज़री दोनों कैब विकल्प उपलब्ध हैं, जो पारिवारिक वीकेंड ट्रिप और कॉर्पोरेट आउटिंग के लिए आदर्श हैं।",
        ],
        mr: [
          "आम्ही अजिंठा वेरूळ कार रेंटल सेवांवर आकर्षक ऑफर्स देतो. विश्वासार्ह आणि नम्र चालकांसह स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा परवडणाऱ्या दरात बुक करा.",
          "अजिंठा आणि वेरूळ लेण्यांच्या राउंडट्रिप बुकिंगसाठी आमच्याकडे इकॉनॉमी आणि लक्झरी दोन्ही कॅब पर्याय उपलब्ध आहेत, जे कौटुंबिक वीकेंड ट्रिप आणि कॉर्पोरेट सहलींसाठी आदर्श आहेत.",
        ],
      },
      closing: {
        en: "Book your heritage weekend now!",
        hi: "अभी अपना हेरिटेज वीकेंड बुक करें!",
        mr: "आत्ताच तुमचा हेरिटेज वीकेंड बुक करा!",
      },
    },
    meta: {
      title: "Ajanta Ellora Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description: "Combined Ajanta Ellora cave tour. Fares from ₹4500.",
    },
  },

  // ─── TOUR 10 ───────────────────────────────────────────────────────────────
  {
    id: "tour-10",
    title: {
      en: "City Cab / Taxi Rental Service",
      hi: "सिटी कैब / टैक्सी रेंटल सेवा",
      mr: "सिटी कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "city-car-rental-cab",
    image: "/images/nashik-city.jpg",
    tagline: {
      en: "City Cab / Taxi Rental Service",
      hi: "सिटी कैब / टैक्सी रेंटल सेवा",
      mr: "सिटी कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    longDistance: {
      heading: {
        en: "Mumbai Package",
        hi: "मुंबई पैकेज",
        mr: "मुंबई पॅकेज",
      },
      content: {
        en: [
          "We provide premium City Car Rental services at awesome offers. Hire a local or outstation cab from us to experience the best car rental services. Enjoy our seamless online cab booking system with highly reliable, professional, and polite drivers. Prachi Tours & Travels Airport Cabs / Taxi, the leading vehicle rental service in the region, boasts a diverse fleet of well-maintained cars—including Swift Dzire, Tempo Traveller, and Innova—available to hire at incredibly affordable rates.",
          "Whether you need a local city ride or an outstation roundtrip, travelers can get the best deals right here on our online Cab booking platform. Check our competitive cab fares, transparent pricing structures, and customizable tour packages. Prachi Tours & Travels Airport Cabs / Taxi provides both economy and luxurious vehicle options, making us the ideal choice for small family weekend getaways, corporate outings, airport transfers, and long weekend trips.",
        ],
        hi: [
          "हम शानदार ऑफ़र के साथ प्रीमियम सिटी कार रेंटल सेवाएं प्रदान करते हैं। स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा सहित सुव्यवस्थित कारों के बेड़े और अनुभवी ड्राइवरों के साथ लोकल या आउटस्टेशन कैब बुक करें।",
          "चाहे आपको लोकल सिटी राइड चाहिए या आउटस्टेशन राउंडट्रिप, हमारे प्लेटफॉर्म पर पारदर्शी किराए और कस्टमाइज़ टूर पैकेज उपलब्ध हैं।",
        ],
        mr: [
          "आम्ही आकर्षक ऑफर्ससह प्रीमियम सिटी कार रेंटल सेवा देतो. स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या सुस्थितीतील गाड्या आणि अनुभवी चालकांसह लोकल किंवा आउटस्टेशन कॅब बुक करा.",
          "तुम्हाला लोकल सिटी राइड हवी असेल किंवा आउटस्टेशन राउंडट्रिप, आमच्याकडे पारदर्शक दर आणि कस्टमाईझ टूर पॅकेजेस उपलब्ध आहेत.",
        ],
      },
      closing: {
        en: "Ask about our combo packages!",
        hi: "हमारे कॉम्बो पैकेज के बारे में पूछें!",
        mr: "आमच्या कॉम्बो पॅकेजेसबद्दल विचारा!",
      },
    },
    meta: {
      title: "City Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Comfortable city cab. Fares from ₹1800. Trimbakeshwar stop available.",
    },
  },

  // ─── TOUR 11 ───────────────────────────────────────────────────────────────
  {
    id: "tour-11",
    title: {
      en: "Mumbai Cab / Taxi Rental Service",
      hi: "मुंबई कैब / टैक्सी रेंटल सेवा",
      mr: "मुंबई कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "mumbai-car-rental-cab",
    image: "/images/nashik-mumbai.jpg",
    tagline: {
      en: "Mumbai Cab / Taxi Rental Service",
      hi: "मुंबई कैब / टैक्सी रेंटल सेवा",
      mr: "मुंबई कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Gateway of India, Mumbai",
      hi: "गेटवे ऑफ इंडिया, मुंबई",
      mr: "गेटवे ऑफ इंडिया, मुंबई",
    },
    longDistance: {
      heading: {
        en: "Airport Drop Available",
        hi: "एयरपोर्ट ड्रॉप सुविधा उपलब्ध",
        mr: "एअरपोर्ट ड्रॉप सुविधा उपलब्ध",
      },
      content: {
        en: [
          "The route to Mumbai is an important outstation route for both pilgrims and tourists, covering approximately 165 km via the Mumbai Nashik Expressway. Travelers can book Swift Dzire, Ertiga, Innova, or Tempo Traveller vehicles with experienced drivers for smooth transfers to Mumbai Airport (CSMIA) or any Mumbai location. Toll charges, GST, and driver allowances are included in our transparent pricing—no hidden costs.",
          "Our Mumbai Cab / Taxi Rental Service operates 24x7 with flexible drop-off and round-trip options. For pilgrims, we offer one-day darshan trips including Trimbakeshwar and other temples along the route. Corporate and family groups can choose sedan, SUV, or tempo traveller vehicles based on seating requirements. All vehicles are regularly serviced and sanitized for passenger safety on the highway. Book online or via WhatsApp with instant confirmation.",
        ],
        hi: [
          "मुंबई-नासिक एक्सप्रेसवे के माध्यम से लगभग 165 किमी का यह मार्ग तीर्थयात्रियों और पर्यटकों दोनों के लिए एक महत्वपूर्ण आउटस्टेशन रूट है। यात्री मुंबई एयरपोर्ट (CSMIA) या मुंबई के किसी भी स्थान तक सुगम यात्रा के लिए अनुभवी ड्राइवरों के साथ स्विफ्ट डिजायर, अर्टिगा, इनोवा या टेम्पो ट्रैवलर बुक कर सकते हैं। हमारे पारदर्शी किराए में कोई छिपा हुआ शुल्क नहीं है।",
          "हमारी मुंबई कैब / टैक्सी रेंटल सेवा 24x7 संचालित होती है। तीर्थयात्रियों के लिए हम त्र्यंबकेश्वर और मार्ग के अन्य मंदिरों सहित एक-दिवसीय दर्शन यात्राएं भी प्रदान करते हैं। व्हाट्सएप या ऑनलाइन के माध्यम से तुरंत कन्फर्मेशन के साथ बुक करें।",
        ],
        mr: [
          "मुंबई-नाशिक एक्सप्रेसवेद्वारे सुमारे १६५ किमीचा हा मार्ग भाविक आणि पर्यटकांसाठी अत्यंत महत्त्वाचा आहे. प्रवासी मुंबई विमानतळ (CSMIA) किंवा मुंबईतील कोणत्याही भागात जाण्यासाठी अनुभवी चालकांसह स्विफ्ट डिझायर, अर्टिगा, इनोव्हा किंवा टेम्पो ट्रॅव्हलर बुक करू शकतात. आमच्या पारदर्शक दरांमध्ये कोणतेही छुपे शुल्क नाही.",
          "आमची मुंबई कॅब / टॅक्सी रेंटल सेवा २४x७ कार्यरत आहे. भाविकांसाठी आम्ही त्र्यंबकेश्वर आणि मार्गावरील इतर मंदिरांसह एकदिवसीय दर्शन सहली देखील देतो. व्हाट्सॲप किंवा ऑनलाइनद्वारे त्वरित बुकिंग करा.",
        ],
      },
      closing: {
        en: "Book your Mumbai cab now!",
        hi: "अभी अपनी मुंबई कैब बुक करें!",
        mr: "आत्ताच तुमची मुंबई कॅब बुक करा!",
      },
    },
    meta: {
      title: "Mumbai Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Outstation cab to Mumbai. Expressway route. Fares from ₹3500.",
    },
  },

  // ─── TOUR 12 ───────────────────────────────────────────────────────────────
  {
    id: "tour-12",
    title: {
      en: "Pune Cab / Taxi Rental Service",
      hi: "पुणे कैब / टैक्सी रेंटल सेवा",
      mr: "पुणे कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "pune-car-rental-cab",
    image: "/images/nashik-pune.jpg",
    tagline: {
      en: "Pune Cab / Taxi Rental Service",
      hi: "पुणे कैब / टैक्सी रेंटल सेवा",
      mr: "पुणे कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Shaniwar Wada, Pune",
      hi: "शनिवार वाड़ा, पुणे",
      mr: "शनिवार वाडा, पुणे",
    },
    longDistance: {
      heading: {
        en: "Pune Airport Drop",
        hi: "पुणे एयरपोर्ट ड्रॉप",
        mr: "पुणे एअरपोर्ट ड्रॉप",
      },
      content: {
        en: [
          "Prachi Tours & Travels Airport Cabs / Taxi is the premier provider of outstation & local car rental offerings, featuring specialized Pune Cab and Cab / Taxi Rental Services. We offer affordable car rental options to the Pune Airport, as well as general city-to-city transfers to Pune. We offer a highly customized & transparent service at a lower rate in comparison with traditional tour operators, leveraging modern booking systems to ensure you get the absolute best value-to-cost equation.",
          "Offering versatile touring options, we welcome the opportunity to introduce ourselves as a renowned transport contractor and fleet owner. We maintain strict quality management standards across our entire company while encouraging and ensuring the active dedication of our team.",
        ],
        hi: [
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स पुणे एयरपोर्ट ड्रॉप और इंटर-सिटी यात्रा के लिए किफायती और पारदर्शी पुणे कैब रेंटल सेवाएं प्रदान करता है।",
          "एक प्रतिष्ठित फ्लीट ओनर के रूप में हम उच्च गुणवत्ता मानकों का पालन करते हैं ताकि आपको सबसे सुरक्षित और आरामदायक यात्रा का अनुभव मिले।",
        ],
        mr: [
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स पुणे एअरपोर्ट ड्रॉप आणि इंटर-सिटी प्रवासासाठी परवडणाऱ्या दरात आणि पारदर्शक पुणे कॅब रेंटल सेवा देते.",
          "एक नामांकित फ्लीट ओनर म्हणून आम्ही उच्च दर्जाची गुणवत्ता आणि सुरक्षिततेचे निकष पाळतो ज्यामुळे तुम्हाला सर्वात सुरक्षित प्रवासाचा अनुभव मिळतो.",
        ],
      },
      closing: {
        en: "Call us to plan your trip!",
        hi: "अपनी यात्रा की योजना बनाने के लिए हमें कॉल करें!",
        mr: "तुमच्या प्रवासाचे नियोजन करण्यासाठी आम्हाला कॉल करा!",
      },
    },
    meta: {
      title: "Pune Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Outstation cab to Pune. Via Shani Shingnapur option. Fares from ₹3200.",
    },
  },

  // ─── TOUR 13 ───────────────────────────────────────────────────────────────
  {
    id: "tour-13",
    title: {
      en: "Lonavala Cab / Taxi Rental Service",
      hi: "लोनावाला कैब / टैक्सी रेंटल सेवा",
      mr: "लोणावळा कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "lonavala-car-rental-cab",
    image: "/images/nashik-lonavala.jpg",
    tagline: {
      en: "Lonavala Cab / Taxi Rental Service",
      hi: "लोनावाला कैब / टैक्सी रेंटल सेवा",
      mr: "लोणावळा कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Lonavala & Khandala",
      hi: "लोनावाला और खंडाला",
      mr: "लोणावळा आणि खंडाळा",
    },
    longDistance: {
      heading: {
        en: "Combine with Pune",
        hi: "पुणे यात्रा के साथ जोड़ें",
        mr: "पुणे सहलीसोबत नियोजन करा",
      },
      content: {
        en: [
          "We provide premium Lonavala Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Lonavala from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who know the routes perfectly. Prachi Tours & Travels Airport Cabs / Taxi, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, spacious Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
          "For your next Lonavala outstation roundtrip or one-way drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Lonavala tour packages.",
        ],
        hi: [
          "हम शानदार ऑफ़र और प्रतिस्पर्धी पैकेज के साथ प्रीमियम लोनावाला कार रेंटल सेवाएं प्रदान करते हैं। अनुभवी ड्राइवरों के साथ स्विफ्ट डिजायर, इनोवा और टेम्पो ट्रैवलर किफायती दरों पर उपलब्ध हैं।",
          "अपनी अगली लोनावाला राउंडट्रिप या वन-वे ड्रॉप के लिए हमारे कस्टमाइज़ टूर पैकेज के साथ पारदर्शी और अग्रिम किराया प्राप्त करें।",
        ],
        mr: [
          "आम्ही आकर्षक ऑफर्स आणि स्पर्धात्मक पॅकेजेससह प्रीमियम लोणावळा कार रेंटल सेवा देतो. अनुभवी चालकांसह स्विफ्ट डिझायर, इनोव्हा आणि टेम्पो ट्रॅव्हलर परवडणाऱ्या दरात उपलब्ध आहेत.",
          "तुमच्या पुढील लोणावळा राउंडट्रिप किंवा वन-वे ड्रॉपसाठी आमच्या कस्टमाईझ टूर पॅकेजेससह पारदर्शक आणि आगाऊ दर मिळवा.",
        ],
      },
      closing: {
        en: "Ask us about Lonavala-Pune combo!",
        hi: "लोनावाला-पुणे कॉम्बो पैकेज के बारे में हमसे पूछें!",
        mr: "लोणावळा-पुणे कॉम्बो पॅकेजबद्दल आम्हाला विचारा!",
      },
    },
    meta: {
      title: "Lonavala Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description: "Cab to Lonavala hill station. Fares from ₹4500.",
    },
  },

  // ─── TOUR 14 ───────────────────────────────────────────────────────────────
  {
    id: "tour-14",
    title: {
      en: "Mahabaleshwar Cab / Taxi Rental Service",
      hi: "महाबलेश्वर कैब / टैक्सी रेंटल सेवा",
      mr: "महाबळेश्वर कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "mahabaleshwar-car-rental-cab",
    image: "/images/nashik-mahabaleshwar.jpg",
    tagline: {
      en: "Mahabaleshwar Cab / Taxi Rental Service",
      hi: "महाबलेश्वर कैब / टैक्सी रेंटल सेवा",
      mr: "महाबळेश्वर कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Mahabaleshwar",
      hi: "महाबलेश्वर",
      mr: "महाबळेश्वर",
    },
    longDistance: {
      heading: {
        en: "2-Day Mahabaleshwar Package",
        hi: "2-दिवसीय महाबलेश्वर पैकेज",
        mr: "२-दिवसीय महाबळेश्वर पॅकेज",
      },
      content: {
        en: [
          "We provide premium Mahabaleshwar Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Mahabaleshwar from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth journey through the scenic ghats. Prachi Tours & Travels Airport Cabs / Taxi, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, spacious Ertigas, premium Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
          "For your next Mahabaleshwar outstation roundtrip or one-way drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Mahabaleshwar tour packages. Prachi Tours & Travels Airport Cabs / Taxi provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for small family weekend getaways to the strawberry farms, office or corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your holiday to Mahabaleshwar completely stress-free.",
        ],
        hi: [
          "हम शानदार ऑफ़र और प्रतिस्पर्धी पैकेज के साथ प्रीमियम महाबलेश्वर कार रेंटल सेवाएं प्रदान करते हैं। सुंदर घाट मार्गों के अनुभवी ड्राइवरों और स्विफ्ट डिजायर, अर्टिगा, इनोवा तथा टेम्पो ट्रैवलर के साथ आरामदायक सफर का आनंद लें।",
          "स्ट्रॉबेरी फार्म की पारिवारिक यात्राओं, कॉर्पोरेट आउटिंग और लंबी सड़क यात्राओं के लिए हमारे पास इकोनॉमी और लक्ज़री दोनों विकल्प बिना किसी छिपे शुल्क के उपलब्ध हैं।",
        ],
        mr: [
          "आम्ही आकर्षक ऑफर्स आणि स्पर्धात्मक पॅकेजेससह प्रीमियम महाबळेश्वर कार रेंटल सेवा देतो. निसर्गरम्य घाट मार्गांचा अनुभव असलेल्या चालकांसह स्विफ्ट डिझायर, अर्टिगा, इनोव्हा आणि टेम्पो ट्रॅव्हलरमधून आरामदायी प्रवास करा.",
          "स्ट्रॉबेरी फार्मच्या कौटुंबिक सहली, कॉर्पोरेट सहली आणि लांबच्या रोड ट्रिपसाठी आमच्याकडे कोणत्याही छुप्या शुल्काशिवाय इकॉनॉमी आणि लक्झरी दोन्ही पर्याय उपलब्ध आहेत.",
        ],
      },
      closing: {
        en: "Enquire about our holiday packages!",
        hi: "हमारे हॉलिडे पैकेज के बारे में पूछताछ करें!",
        mr: "आमच्या हॉलिडे पॅकेजेसबद्दल चौकशी करा!",
      },
    },
    meta: {
      title: "Mahabaleshwar Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Scenic cab to Mahabaleshwar hill station. Fares from ₹4200.",
    },
  },

  // ─── TOUR 15 ───────────────────────────────────────────────────────────────
  {
    id: "tour-15",
    title: {
      en: "Goa Cab / Taxi Rental Service",
      hi: "गोवा कैब / टैक्सी रेंटल सेवा",
      mr: "गोवा कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "goa-car-rental-cab",
    image: "/images/nashik-goa.jpg",
    tagline: {
      en: "Goa Long-Distance Cab / Taxi Rental Service",
      hi: "गोवा लंबी दूरी की कैब / टैक्सी रेंटल सेवा",
      mr: "गोवा लांब पल्ल्याची कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Goa",
      hi: "गोवा",
      mr: "गोवा",
    },
    longDistance: {
      heading: {
        en: "The Ultimate Maharashtra-Goa Road Trip",
        hi: "शानदार महाराष्ट्र-गोवा रोड ट्रिप",
        mr: "सर्वोत्तम महाराष्ट्र-गोवा रोड ट्रिप",
      },
      content: {
        en: [
          "We provide premium Goa Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Goa from us to experience the finest long-distance intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth and safe long-distance journey. Prachi Tours & Travels Airport Cabs / Taxi, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
          "For your next Goa outstation roundtrip or long-distance drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Goa tour packages. Prachi Tours & Travels Airport Cabs / Taxi provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for small family vacations, extended coastal road trips, and group holidays. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Goa completely stress-free.",
        ],
        hi: [
          "हम शानदार ऑफ़र और प्रतिस्पर्धी पैकेज के साथ प्रीमियम गोवा कार रेंटल सेवाएं प्रदान करते हैं। अनुभवी लंबी दूरी के ड्राइवरों और स्विफ्ट डिजायर, इनोवा तथा टेम्पो ट्रैवलर के साथ सुरक्षित सफर का आनंद लें।",
          "पारिवारिक छुट्टियों, तटीय रोड ट्रिप और ग्रुप हॉलिडे के लिए हमारे कस्टमाइज़ गोवा टूर पैकेज बिना किसी छिपे शुल्क के पारदर्शी किराया प्रदान करते हैं।",
        ],
        mr: [
          "आम्ही आकर्षक ऑफर्स आणि स्पर्धात्मक पॅकेजेससह प्रीमियम गोवा कार रेंटल सेवा देतो. लांब पल्ल्याचा अनुभव असलेल्या चालकांसह स्विफ्ट डिझायर, इनोव्हा आणि टेम्पो ट्रॅव्हलरमधून सुरक्षित प्रवासाचा आनंद घ्या.",
          "कौटुंबिक सुट्ट्या, कोस्टल रोड ट्रिप आणि ग्रुप हॉलिडेसाठी आमची कस्टमाईझ गोवा टूर पॅकेजेस कोणत्याही छुप्या शुल्काशिवाय पारदर्शक दर देतात.",
        ],
      },
      closing: {
        en: "Book our Goa package now!",
        hi: "अभी हमारा गोवा पैकेज बुक करें!",
        mr: "आत्ताच आमचे गोवा पॅकेज बुक करा!",
      },
    },
    meta: {
      title: "Goa Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Long-distance cab to Goa. Fares from ₹7500. Overnight option.",
    },
  },

  // ─── TOUR 16 ───────────────────────────────────────────────────────────────
  {
    id: "tour-16",
    title: {
      en: "Konkan Cab / Taxi Rental Service",
      hi: "कोंकण कैब / टैक्सी रेंटल सेवा",
      mr: "कोकण कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "konkan-car-rental-cab",
    image: "/images/nashik-konkan.jpg",
    tagline: {
      en: "Konkan Coast Cab / Taxi Rental Service",
      hi: "कोंकण तट कैब / टैक्सी रेंटल सेवा",
      mr: "कोकण किनारपट्टी कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    longDistance: {
      heading: {
        en: "Konkan Weekend Package",
        hi: "कोंकण वीकेंड पैकेज",
        mr: "कोकण वीकेंड पॅकेज",
      },
      content: {
        en: [
          "We provide premium Konkan Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Konkan from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth journey down to the beautiful coastal belt. Prachi Tours & Travels Airport Cabs / Taxi, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
          "For your next Konkan outstation roundtrip, beach holiday, or coastal tour, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Konkan tour packages. Prachi Tours & Travels Airport Cabs / Taxi provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for family beach vacations, nature weekend getaways, and extended coastal road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Konkan completely stress-free.",
        ],
        hi: [
          "हम शानदार ऑफ़र और प्रतिस्पर्धी पैकेज के साथ प्रीमियम कोंकण कार रेंटल सेवाएं प्रदान करते हैं। सुंदर तटीय क्षेत्र के लिए स्विफ्ट डिजायर, इनोवा और टेम्पो ट्रैवलर किफायती दरों पर बुक करें।",
          "समुद्र तट की छुट्टियों और प्रकृति के बीच वीकेंड ट्रिप के लिए हमारे कस्टमाइज़ कोंकण टूर पैकेज बिना किसी छिपे शुल्क के पारदर्शी किराया प्रदान करते हैं।",
        ],
        mr: [
          "आम्ही आकर्षक ऑफर्स आणि स्पर्धात्मक पॅकेजेससह प्रीमियम कोकण कार रेंटल सेवा देतो. निसर्गरम्य कोकण किनारपट्टीसाठी स्विफ्ट डिझायर, इनोव्हा आणि टेम्पो ट्रॅव्हलर परवडणाऱ्या दरात बुक करा.",
          "समुद्रकिनाऱ्यावरील सुट्ट्या आणि वीकेंड सहलींसाठी आमची कस्टमाईझ कोकण टूर पॅकेजेस कोणत्याही छुप्या शुल्काशिवाय पारदर्शक दर देतात.",
        ],
      },
      closing: {
        en: "Book your Konkan escape!",
        hi: "अपनी कोंकण यात्रा बुक करें!",
        mr: "तुमची कोकण सहल बुक करा!",
      },
    },
    meta: {
      title: "Konkan Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Cab to Konkan coast. Ganpatipule, Ratnagiri, Tarkarli. Fares from ₹5500.",
    },
  },

  // ─── TOUR 17 ───────────────────────────────────────────────────────────────
  {
    id: "tour-17",
    title: {
      en: "Nagpur Cab / Taxi Rental Service",
      hi: "नागपुर कैब / टैक्सी रेंटल सेवा",
      mr: "नागपूर कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "nagpur-car-rental-cab",
    image: "/images/nashik-nagpur.jpg",
    tagline: {
      en: "Nagpur Long-Distance Cab / Taxi Rental Service",
      hi: "नागपुर लंबी दूरी की कैब / टैक्सी रेंटल सेवा",
      mr: "नागपूर लांब पल्ल्याची कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    longDistance: {
      heading: {
        en: "Vidarbha Extension Package",
        hi: "विदर्भ विस्तार पैकेज",
        mr: "विदर्भ विस्तार पॅकेज",
      },
      content: {
        en: [
          "We provide premium Nagpur Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Nagpur from us to experience the finest long-distance intercity travel services in the region, taking full advantage of the fast Samruddhi Mahamarg route. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth, quick, and safe long-distance journey. Prachi Tours & Travels Airport Cabs / Taxi, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
          "For your next Nagpur outstation roundtrip, family holiday, or business drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Nagpur tour packages. Prachi Tours & Travels Airport Cabs / Taxi provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for long-distance family travel, corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Nagpur completely stress-free.",
        ],
        hi: [
          "हम तेज़ समृद्धि महामार्ग मार्ग के माध्यम से प्रीमियम नागपुर कार रेंटल सेवाएं प्रदान करते हैं। अनुभवी ड्राइवरों के साथ स्विफ्ट डिजायर, इनोवा और टेम्पो ट्रैवलर किफायती दरों पर उपलब्ध हैं।",
          "लंबी दूरी की पारिवारिक यात्राओं, कॉर्पोरेट आउटिंग और बिजनेस ड्रॉप के लिए बिना किसी छिपे शुल्क के पारदर्शी नागपुर टूर पैकेज प्राप्त करें।",
        ],
        mr: [
          "आम्ही वेगवान समृद्धी महामार्गाद्वारे प्रीमियम नागपूर कार रेंटल सेवा देतो. अनुभवी चालकांसह स्विफ्ट डिझायर, इनोव्हा आणि टेम्पो ट्रॅव्हलर परवडणाऱ्या दरात उपलब्ध आहेत.",
          "लांब पल्ल्याच्या कौटुंबिक सहली, कॉर्पोरेट सहली आणि बिझनेस ड्रॉपसाठी कोणत्याही छुप्या शुल्काशिवाय पारदर्शक नागपूर टूर पॅकेजेस मिळवा.",
        ],
      },
      closing: {
        en: "Plan your Vidarbha tour with us!",
        hi: "हमारे साथ अपनी विदर्भ यात्रा की योजना बनाएं!",
        mr: "आमच्यासोबत तुमच्या विदर्भ सहलीचे नियोजन करा!",
      },
    },
    meta: {
      title: "Nagpur Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Long-distance cab to Nagpur. Fares from ₹7000. Night travel available.",
    },
  },

  // ─── TOUR 18 ───────────────────────────────────────────────────────────────
  {
    id: "tour-18",
    title: {
      en: "Indore Cab / Taxi Rental Service",
      hi: "इंदौर कैब / टैक्सी रेंटल सेवा",
      mr: "इंदूर कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "indore-car-rental-cab",
    image: "/images/nashik-indore.webp",
    tagline: {
      en: "Indore Inter-State Cab / Taxi Rental Service",
      hi: "इंदौर अंतर-राज्यीय कैब / टैक्सी रेंटल सेवा",
      mr: "इंदूर आंतरराज्यीय कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    longDistance: {
      heading: {
        en: "Ujjain Extension",
        hi: "उज्जैन विस्तार यात्रा",
        mr: "उज्जैन विस्तार सहल",
      },
      content: {
        en: [
          "We provide premium Indore Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Indore from us to experience the finest long-distance intercity travel services across state lines. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth and safe long-distance journey. Prachi Tours & Travels Airport Cabs / Taxi, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
          "For your next Indore outstation roundtrip, family holiday, or business drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Indore tour packages. Prachi Tours & Travels Airport Cabs / Taxi provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for long-distance family vacations, corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Indore completely stress-free.",
        ],
        hi: [
          "हम अंतर-राज्यीय यात्रा के लिए शानदार ऑफ़र के साथ प्रीमियम इंदौर कार रेंटल सेवाएं प्रदान करते हैं। अनुभवी ड्राइवरों के साथ स्विफ्ट डिजायर, इनोवा और टेम्पो ट्रैवलर किफायती दरों पर बुक करें।",
          "पारिवारिक छुट्टियों, व्यावसायिक यात्राओं और उज्जैन दर्शन के लिए बिना किसी छिपे शुल्क के पारदर्शी इंदौर टूर पैकेज प्राप्त करें।",
        ],
        mr: [
          "आम्ही आंतरराज्यीय प्रवासासाठी आकर्षक ऑफर्ससह प्रीमियम इंदूर कार रेंटल सेवा देतो. अनुभवी चालकांसह स्विफ्ट डिझायर, इनोव्हा आणि टेम्पो ट्रॅव्हलर परवडणाऱ्या दरात बुक करा.",
          "कौटुंबिक सुट्ट्या, व्यावसायिक प्रवास आणि उज्जैन दर्शनासाठी कोणत्याही छुप्या शुल्काशिवाय पारदर्शक इंदूर टूर पॅकेजेस मिळवा.",
        ],
      },
      closing: {
        en: "Book your Indore-Ujjain package!",
        hi: "अपना इंदौर-उज्जैन पैकेज बुक करें!",
        mr: "तुमचे इंदूर-उज्जैन पॅकेज बुक करा!",
      },
    },
    meta: {
      title: "Indore Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Inter-state cab to Indore MP. All-India permit. Fares from ₹7500.",
    },
  },

  // ─── TOUR 19 ───────────────────────────────────────────────────────────────
  {
    id: "tour-19",
    title: {
      en: "Jalna Cab / Taxi Rental Service",
      hi: "जालना कैब / टैक्सी रेंटल सेवा",
      mr: "जालना कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "jalna-car-rental-cab",
    image: "/images/jalna.webp",
    tagline: {
      en: "Jalna Cab / Taxi Rental Service",
      hi: "जालना कैब / टैक्सी रेंटल सेवा",
      mr: "जालना कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    longDistance: {
      heading: {
        en: "Connect via Samruddhi Mahamarg",
        hi: "समृद्धि महामार्ग के माध्यम से जुड़ें",
        mr: "समृद्धी महामार्गाद्वारे थेट जोडणी",
      },
      content: {
        en: [
          "We provide premium Jalna Car Rental services packed with unbeatable offers and budget-friendly packages. Hire a reliable cab to Jalna from us to experience smooth and comfortable travel via the direct Samruddhi Mahamarg expressway corridor. Enjoy our seamless online cab booking platform with polite, skilled drivers who ensure on-time pick-ups and safe highway transit. Prachi Tours & Travels Airport Cabs / Taxi offers a wide fleet including Swift Dzire, Ertiga, Innova Crysta, and Tempo Travellers for groups of all sizes.",
          "Located in the Marathwada region adjacent to Chhatrapati Sambhajinagar, Jalna is a key commercial center known for its steel industry and agricultural trade. Whether you need a one-way transfer, roundtrip ride, or an extended Marathwada heritage tour combined with Shirdi and Ajanta-Ellora, we provide transparent fares with no hidden costs.",
        ],
        hi: [
          "हम सीधे समृद्धि महामार्ग एक्सप्रेसवे के माध्यम से सुगम और आरामदायक यात्रा के लिए किफायती जालना कार रेंटल सेवाएं प्रदान करते हैं। सभी समूहों के लिए स्विफ्ट डिजायर, अर्टिगा, इनोवा क्रिस्टा और टेम्पो ट्रैवलर उपलब्ध हैं।",
          "छत्रपति संभाजीनगर के निकट मराठवाड़ा क्षेत्र में स्थित जालना एक प्रमुख व्यावसायिक केंद्र है। वन-वे ट्रांसफर, राउंडट्रिप या शिर्डी और अजंता-एलोरा के साथ मराठवाड़ा यात्रा के लिए बिना किसी छिपे शुल्क के पारदर्शी किराया पाएं।",
        ],
        mr: [
          "आम्ही थेट समृद्धी महामार्ग एक्सप्रेसवेद्वारे सुखकर आणि आरामदायी प्रवासासाठी परवडणाऱ्या दरात जालना कार रेंटल सेवा देतो. सर्व गटांसाठी स्विफ्ट डिझायर, अर्टिगा, इनोव्हा क्रिस्टा आणि टेम्पो ट्रॅव्हलर उपलब्ध आहेत.",
          "छत्रपती संभाजीनगरजवळ मराठवाड्यात वसलेले जालना हे एक महत्त्वाचे व्यापारी केंद्र आहे. वन-वे ट्रान्सफर, राउंडट्रिप किंवा शिर्डी आणि अजिंठा-वेरूळसह मराठवाडा सहलीसाठी कोणत्याही छुप्या शुल्काशिवाय पारदर्शक दर मिळवा.",
        ],
      },
      closing: {
        en: "Book your Jalna Cab / Taxi Rental Service today!",
        hi: "आज ही अपनी जालना कैब / टैक्सी रेंटल सेवा बुक करें!",
        mr: "आजच तुमची जालना कॅब / टॅक्सी रेंटल सेवा बुक करा!",
      },
    },
    meta: {
      title: "Jalna Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Reliable Cab / Taxi Rental Service to Jalna via Samruddhi Mahamarg. Fares from ₹3200. 24/7 service.",
    },
  },

  // ─── TOUR 20 ───────────────────────────────────────────────────────────────
  {
    id: "tour-20",
    title: {
      en: "Igatpuri Hill Station Cab / Taxi Rental Service",
      hi: "इगतपुरी हिल स्टेशन कैब / टैक्सी रेंटल सेवा",
      mr: "इगतपुरी हिल स्टेशन कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "igatpuri-hill-station-cab",
    image: "/images/nashik-igatpuri.jpg",
    tagline: {
      en: "Igatpuri Getaway Cab / Taxi Rental Service",
      hi: "इगतपुरी हिल स्टेशन कैब / टैक्सी रेंटल सेवा",
      mr: "इगतपुरी हिल स्टेशन कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Igatpuri",
      hi: "इगतपुरी",
      mr: "इगतपुरी",
    },
    longDistance: {
      heading: {
        en: "Kasara Ghat & Monsoon Getaway",
        hi: "कसारा घाट और मानसून यात्रा",
        mr: "कसारा घाट आणि पावसाळी सहल",
      },
      content: {
        en: [
          "Escape to the serene hills with our specialized Igatpuri Car Rental services. Located along the Western Ghats between Mumbai and Nashik, Igatpuri is famous for the Vipassana International Academy (Dhammagiri), Bhatsa River Valley, Kalsubai Peak, and ancient forts like Tringalwadi. We offer flexible local sightseeing, resort pickup/drop, and outstation roundtrips at competitive prices.",
          "Whether you are traveling from Mumbai, Pune, or Nashik for a weekend retreat or monsoon getaway, Prachi Tours & Travels Airport Cabs / Taxi ensures a safe, comfortable drive through the Kasara Ghats with experienced mountain drivers. Choose from sedan models, spacious SUVs, or Tempo Travellers for group weekend tours.",
        ],
        hi: [
          "हमारी विशेष इगतपुरी कार रेंटल सेवाओं के साथ शांत पहाड़ियों की सैर करें। मुंबई और नासिक के बीच पश्चिमी घाट में स्थित इगतपुरी धम्मगिरि विपश्यना केंद्र, भातसा नदी घाटी, कलसुबाई शिखर और त्रिंगलवाड़ी किले के लिए प्रसिद्ध है।",
          "चाहे आप मुंबई, पुणे या नासिक से वीकेंड या मानसून यात्रा के लिए आ रहे हों, हमारे अनुभवी पहाड़ी ड्राइवर कसारा घाट से सुरक्षित और आरामदायक सफर सुनिश्चित करते हैं।",
        ],
        mr: [
          "आमच्या विशेष इगतपुरी कार रेंटल सेवांसह शांत डोंगररांगांची सफर करा. मुंबई आणि नाशिकदरम्यान पश्चिम घाटात वसलेले इगतपुरी धम्मगिरी विपश्यना केंद्र, भातसा नदी खोरे, कळसूबाई शिखर आणि त्रिंगलवाडी किल्ल्यासाठी प्रसिद्ध आहे.",
          "तुम्ही मुंबई, पुणे किंवा नाशिकहून वीकेंड किंवा पावसाळी सहलीसाठी येत असाल, तर आमचे अनुभवी घाट चालक कसारा घाटातून सुरक्षित आणि आरामदायी प्रवासाची खात्री देतात.",
        ],
      },
      closing: {
        en: "Plan your Igatpuri hill retreat with us!",
        hi: "हमारे साथ अपनी इगतपुरी हिल स्टेशन यात्रा की योजना बनाएं!",
        mr: "आमच्यासोबत तुमच्या इगतपुरी हिल स्टेशन सहलीचे नियोजन करा!",
      },
    },
    meta: {
      title: "Igatpuri Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Book scenic hill station cab to Igatpuri. Resort drops & sightseeing packages from ₹1500.",
    },
  },

  // ─── TOUR 21 ───────────────────────────────────────────────────────────────
  {
    id: "tour-21",
    title: {
      en: "Thane Cab / Taxi Rental Service",
      hi: "ठाणे कैब / टैक्सी रेंटल सेवा",
      mr: "ठाणे कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "thane-car-rental-cab",
    image: "/images/nashik-thane.jpg",
    tagline: {
      en: "Thane Expressway Cab / Taxi Rental Service",
      hi: "ठाणे एक्सप्रेसवे कैब / टैक्सी रेंटल सेवा",
      mr: "ठाणे एक्सप्रेसवे कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Thane Junction",
      hi: "ठाणे जंक्शन",
      mr: "ठाणे जंक्शन",
    },
    longDistance: {
      heading: {
        en: "Gateway to Mumbai & MMR Region",
        hi: "मुंबई और एमएमआर क्षेत्र का प्रवेश द्वार",
        mr: "मुंबई आणि एमएमआर प्रदेशाचे प्रवेशद्वार",
      },
      content: {
        en: [
          "Prachi Tours & Travels Airport Cabs / Taxi offers dedicated Thane Car Rental services connecting Nashik, Pune, Shirdi, and the Mumbai Metropolitan Region. Situated at the crossroads of major national highways and the Samruddhi Mahamarg entrance corridor, Thane is a key transit destination for corporate travelers, commuters, and pilgrims.",
          "Enjoy door-to-door cab drops to all major Thane localities including Ghodbunder Road, Majiwada, Thane Railway Station, and Eastern Express Highway connectors. We offer clean AC Cabs / Taxi, 24/7 customer support, transparent toll/fare structures, and professional drivers experienced in suburban traffic management.",
        ],
        hi: [
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स नासिक, पुणे, शिर्डी और मुंबई महानगर क्षेत्र को जोड़ने वाली समर्पित ठाणे कार रेंटल सेवाएं प्रदान करता है। प्रमुख राष्ट्रीय राजमार्गों और समृद्धि महामार्ग के प्रवेश द्वार पर स्थित ठाणे कॉर्पोरेट और तीर्थयात्रियों के लिए एक महत्वपूर्ण केंद्र है।",
          "घोड़बंदर रोड, माजीवाड़ा, ठाणे रेलवे स्टेशन और ईस्टर्न एक्सप्रेस हाईवे सहित ठाणे के सभी प्रमुख क्षेत्रों में डोर-टू-डोर कैब ड्रॉप और पारदर्शी टोल/किराया सुविधा का लाभ उठाएं।",
        ],
        mr: [
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स नाशिक, पुणे, शिर्डी आणि मुंबई महानगर प्रदेशाला जोडणाऱ्या विशेष ठाणे कार रेंटल सेवा देते. प्रमुख राष्ट्रीय महामार्ग आणि समृद्धी महामार्गाच्या प्रवेशद्वारावर असलेले ठाणे कॉर्पोरेट आणि भाविकांसाठी महत्त्वाचे केंद्र आहे.",
          "घोडबंदर रोड, माजीवडा, ठाणे रेल्वे स्थानक आणि ईस्टर्न एक्सप्रेस हायवेसह ठाण्यातील सर्व प्रमुख भागांमध्ये डोअर-टू-डोअर कॅब ड्रॉप आणि पारदर्शक टोल/भाडे दरांचा लाभ घ्या.",
        ],
      },
      closing: {
        en: "Call us now to book your Thane cab!",
        hi: "अभी अपनी ठाणे कैब बुक करने के लिए हमें कॉल करें!",
        mr: "आत्ताच तुमची ठाणे कॅब बुक करण्यासाठी आम्हाला कॉल करा!",
      },
    },
    meta: {
      title: "Thane Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Direct cab to Thane from Nashik, Pune, or Shirdi. Fast highway connectivity. Fares from ₹2800.",
    },
  },
];

// Helper: Find a single tour object by its unique ID string (e.g., 'tour-01')
export function getTourById(id) {
  if (!id) return null;
  return toursData.find((t) => t.id === id) || null;
}

// Helper: Find a single tour object by its URL slug (used in Next.js dynamic routing components)
export function getTourBySlug(slug) {
  if (!slug) return null;
  return toursData.find((t) => t.slug === slug) || null;
}

// Helper: Extracts all available slugs for Next.js build-time pre-rendering configurations
export function getAllSlugs() {
  return toursData.map((t) => ({ slug: t.slug }));
}

// Utility Export: Maps your array to include absolute routing paths.
export const CabServicesCityToCity = toursData.map((tour) => ({
  ...tour,
  redirectUrl: `/cities/${tour.slug}`,
}));

export const footerLinksData = [
  {
    id: "Cab-services",
    title: "NASHIK Cab / Taxi Rental ServiceS",
    links: [
      {
        text: "Nashik Airport Pickup Drop",
        href: "/airport/nashik-airport-cab",
      },
      {
        text: "Nashik to Kopargaon Pickup Drop",
        href: "/cities/kopargaon-cab",
      },
      {
        text: "Nashik to Manmad Cab / Taxi Rental Service",
        href: "/cities/manmad-cab-service",
      },
      {
        text: "Nashik to Bhimashankar Pickup Drop",
        href: "/cities/bhimashankar-darshan-cab",
      },
      {
        text: "Nashik To Shanishingnapur Pickup Drop",
        href: "/cities/shani-shingnapur-car-rental",
      },
    ],
  },
  {
    id: "local-services",
    title: "Mumbai Cab / Taxi Rental Service",
    links: [
      {
        text: "Mumbai to Igatpuri Cab / Taxi Rental Service",
        href: "/cities/igatpuri-hill-station-cab",
      },
      {
        text: "Mumbai to Trimbakeshwar Cab / Taxi Rental Service",
        href: "/cities/trimbakeshwar-darshan-cab",
      },
      {
        text: "Mumbai to Shirdi Airport Pickup Drop",
        href: "/airport/shirdi-airport-cab",
      },
      {
        text: "Mumbai to Manmad Pickup Drop",
        href: "/cities/manmad-cab-service",
      },
    ],
  },
  {
    id: "outstation-cabs",
    title: "Pune Cab / Taxi Rental Service",
    links: [
      {
        text: "Pune to Mumbai Cab / Taxi Rental Service",
        href: "/cities/mumbai-car-rental-cab",
      },
      {
        text: "Pune to Goa Cab / Taxi Rental Service",
        href: "/cities/goa-car-rental-cab",
      },
      {
        text: "Pune to Chhatrapati Sambhajinagar Cab / Taxi Rental Service",
        href: "/cities/chhatrapati-sambhajinagar-ajanta-ellora-cab",
      },
      {
        text: "Pune to Indore Cab / Taxi Rental Service",
        href: "/cities/indore-car-rental-cab",
      },
    ],
  },
  {
    id: "bus-services",
    title: "NASHIK BUS SERVICES",
    links: [
      {
        text: "Best Bus Service in Nashik",
        href: "/bus/best-bus-service-in-nashik",
      },
      {
        text: "25 Seater Bus on Rent in Nashik",
        href: "/bus/25-seater-bus-on-rent-in-nashik",
      },
      {
        text: "32 Seater Bus on Rent in Nashik",
        href: "/bus/32-seater-bus-on-rent-in-nashik",
      },
      {
        text: "35 Seater Bus on Rent in Nashik",
        href: "/bus/35-seater-bus-on-rent-in-nashik",
      },
      {
        text: "45 Seater Bus on Rent in Nashik",
        href: "/bus/45-seater-bus-on-rent-in-nashik",
      },
      {
        text: "50-Seater Bus on Rent in Nashik",
        href: "/bus/50-seater-bus-on-rent-in-nashik",
      },
      {
        text: "Mini Bus on Rent in Nashik",
        href: "/bus/mini-bus-on-rent-in-nashik",
      },
      {
        text: "Ac bus booking in nashik",
        href: "/bus/ac-bus-booking-in-nashik",
      },
    ],
  },
];
