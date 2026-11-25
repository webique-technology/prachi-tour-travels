// src/lib/cityData.js — Master Route Engine & Rich Dynamic Content

export const slugify = (text = "") => {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start
    .replace(/-+$/, ""); // Trim - from end
};

// Recursive helper to safely swap {origin} & {destination} across strings, arrays, and objects
function replacePlaceholders(val, origin, destination) {
  if (typeof val === "string") {
    return val
      .replace(/\{origin\}/g, origin)
      .replace(/\{destination\}/g, destination);
  }
  if (Array.isArray(val)) {
    return val.map((item) => replacePlaceholders(item, origin, destination));
  }
  if (typeof val === "object" && val !== null) {
    const res = {};
    for (const key in val) {
      res[key] = replacePlaceholders(val[key], origin, destination);
    }
    return res;
  }
  return val;
}

// ─── 1. RICH BASE TEMPLATES FOR DYNAMIC CITY PAIRS ─────────────────────────
const baseDynamicTours = [
  // ─── 1. NASHIK <-> MUMBAI ────────────────────────────────────────────────
  {
    id: "dyn-nashik-mumbai",
    baseOrigin: "Nashik",
    baseDestination: "Mumbai",
    distanceKm: 165,
    estimatedTime: "3.5 - 4 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-mumbai.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "At Prachi Tours & Travels Airport Cab, we offer premium, budget-friendly cab rentals for your journey between {origin} and {destination}. Whether you are traveling for business, family vacations, or direct airport drops at Chhatrapati Shivaji Maharaj International Airport (CSMIA), our reliable 24/7 service guarantees comfortable transit.",
      hi: "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब में, हम {origin} और {destination} के बीच आपकी यात्रा के लिए प्रीमियम और किफायती कैब रेंटल प्रदान करते हैं। चाहे आप व्यवसाय, पारिवारिक छुट्टियों या छत्रपति शिवाजी महाराज अंतर्राष्ट्रीय हवाई अड्डे (CSMIA) पर सीधे ड्रॉप के लिए यात्रा कर रहे हों, हमारी विश्वसनीय 24/7 सेवा आरामदायक सफर की गारंटी देती है।",
      mr: "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅबमध्ये, आम्ही {origin} आणि {destination} दरम्यानच्या तुमच्या प्रवासासाठी प्रीमियम आणि परवडणाऱ्या दरात कॅब रेंटल सेवा देतो. तुम्ही व्यवसाय, कौटुंबिक सुट्टी किंवा छत्रपती शिवाजी महाराज आंतरराष्ट्रीय विमानतळ (CSMIA) येथे थेट ड्रॉपसाठी प्रवास करत असाल, तरी आमची विश्वासार्ह २४/७ सेवा आरामदायी प्रवासाची हमी देते.",
    },
    fleetDescription: {
      en: "Our expansive fleet features a variety of clean, well-maintained AC vehicles including Swift Dzire, Toyota Etios, Maruti Ertiga, Toyota Innova Crysta, and 17-26 seater Tempo Travellers. Every vehicle undergoes regular safety checks and sanitization before every trip.",
      hi: "हमारे विशाल बेड़े में स्विफ्ट डिजायर, टोयोटा इटियोस, मारुति अर्टिगा, टोयोटा इनोवा क्रिस्टा और 17-26 सीटर टेम्पो ट्रैवलर सहित कई स्वच्छ और सुव्यवस्थित एसी वाहन शामिल हैं। प्रत्येक यात्रा से पहले हर वाहन की नियमित सुरक्षा जांच और सैनिटाइजेशन किया जाता है।",
      mr: "आमच्या विशाल ताफ्यात स्विफ्ट डिझायर, टोयोटा इटिओस, मारुती अर्टिगा, टोयोटा इनोव्हा क्रिस्टा आणि १७-२६ सीटर टेम्पो ट्रॅव्हलरसह अनेक स्वच्छ व सुस्थितीतील एसी वाहने उपलब्ध आहेत. प्रत्येक प्रवासापूर्वी प्रत्येक वाहनाची नियमित सुरक्षा तपासणी आणि सॅनिटायझेशन केले जाते.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Comfortable Highway Travel Between {origin} and {destination}",
          hi: "{origin} और {destination} के बीच आरामदायक हाईवे यात्रा",
          mr: "{origin} आणि {destination} दरम्यान आरामदायी महामार्ग प्रवास",
        },
        content: {
          en: "The 165 km highway distance via the Mumbai-Nashik Expressway and Samruddhi Mahamarg is covered smoothly by our trained drivers. Booking a private cab gives you complete control over your schedule—eliminating train wait times and crowded bus rides. Enjoy doorstep pickup from any locality and a smooth drive handled by professional highway drivers.",
          hi: "मुंबई-नासिक एक्सप्रेसवे और समृद्धि महामार्ग के माध्यम से 165 किमी की हाईवे दूरी हमारे प्रशिक्षित ड्राइवरों द्वारा सुगमता से तय की जाती है। निजी कैब बुक करने से आपको अपनी समय-सारणी पर पूरा नियंत्रण मिलता है—जिससे ट्रेन की प्रतीक्षा और भीड़भाड़ वाली बसों से छुटकारा मिलता है। किसी भी स्थान से डोरस्टेप पिकअप और पेशेवर ड्राइवरों के साथ आरामदायक सफर का आनंद लें।",
          mr: "मुंबई-नाशिक एक्सप्रेसवे आणि समृद्धी महामार्गाद्वारे १६५ किमीचे महामार्ग अंतर आमच्या प्रशिक्षित चालकांकडून अत्यंत सहजतेने पार केले जाते. खाजगी कॅब बुक केल्याने तुम्हाला तुमच्या वेळेवर पूर्ण नियंत्रण मिळते—ज्यामुळे रेल्वेची वाट पाहणे आणि गर्दीच्या बसचा त्रास वाचतो. कोणत्याही भागातून डोअरस्टेप पिकअप आणि अनुभवी चालकांसह सुखकर प्रवासाचा आनंद घ्या.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Why Choose Our {origin} to {destination} Cab / Taxi Rental Service?",
          hi: "{origin} से {destination} कैब / टैक्सी रेंटल सेवा के लिए हमें ही क्यों चुनें?",
          mr: "{origin} ते {destination} कॅब / टॅक्सी रेंटल सेवेसाठी आम्हालाच का निवडावे?",
        },
        intro: {
          en: "We take pride in providing top-rated intercity travel experiences. Here is why thousands of travelers trust us:",
          hi: "हमें सर्वश्रेष्ठ इंटरसिटी यात्रा अनुभव प्रदान करने पर गर्व है। जानिए हजारों यात्री हम पर भरोसा क्यों करते हैं:",
          mr: "आम्हाला सर्वोत्तम इंटरसिटी प्रवास अनुभव देण्याचा अभिमान आहे. हजारो प्रवासी आमच्यावर विश्वास का ठेवतात ते पहा:",
        },
        items: {
          en: [
            "Transparent pricing with clear toll, driver allowance, and GST breakdowns",
            "Clean, odor-free, fully air-conditioned Cabs / Taxi for maximum highway comfort",
            "Experienced, polite, and verified drivers familiar with expressways and city routes",
            "24/7 customer assistance with instant booking confirmations",
            "Flexible one-way drops, same-day roundtrips, and customized multi-day packages",
          ],
          hi: [
            "स्पष्ट टोल, ड्राइवर भत्ता और जीएसटी विवरण के साथ पारदर्शी किराया",
            "अधिकतम हाईवे आराम के लिए स्वच्छ, दुर्गंध-मुक्त और पूरी तरह वातानुकूलित कैब्स",
            "एक्सप्रेसवे और शहरी मार्गों के जानकार अनुभवी, विनम्र और सत्यापित ड्राइवर",
            "तत्काल बुकिंग कन्फर्मेशन के साथ 24/7 ग्राहक सहायता",
            "लचीले वन-वे ड्रॉप, सेम-डे राउंडट्रिप और कस्टमाइज़्ड मल्टी-डे पैकेज",
          ],
          mr: [
            "स्पष्ट टोल, चालक भत्ता आणि जीएसटी तपशीलासह पारदर्शक दर",
            "जास्तीत जास्त महामार्ग आरामासाठी स्वच्छ, दुर्गंधीमुक्त आणि पूर्णपणे वातानुकूलित कॅब्स",
            "एक्सप्रेसवे आणि शहरी मार्गांची माहिती असलेले अनुभवी, नम्र आणि प्रमाणित चालक",
            "त्वरित बुकिंग कन्फर्मेशनसह २४/७ ग्राहक सहाय्य",
            "लवचिक वन-वे ड्रॉप, सेम-डे राउंडट्रिप आणि कस्टमाइज्ड मल्टी-डे पॅकेजेस",
          ],
        },
        closing: {
          en: "Book your ride online or via WhatsApp today for instant confirmation and stress-free travel!",
          hi: "तत्काल कन्फर्मेशन और तनाव-मुक्त यात्रा के लिए आज ही ऑनलाइन या व्हाट्सएप द्वारा अपनी राइड बुक करें!",
          mr: "त्वरित कन्फर्मेशन आणि तणावमुक्त प्रवासासाठी आजच ऑनलाइन किंवा व्हॉट्सॲपद्वारे तुमची राइड बुक करा!",
        },
      },
      {
        type: "text",
        heading: {
          en: "Vehicle Fleet & Pricing Guidance",
          hi: "वाहन बेड़ा और किराया मार्गदर्शन",
          mr: "वाहन ताफा आणि दर मार्गदर्शन",
        },
        content: {
          en: "Choose a vehicle that fits your budget and travel group size. Sedans (Dzire/Etios) are ideal for 1-4 passengers seeking budget transfers. SUVs (Ertiga/Innova Crysta) offer extra legroom and luggage space for families up to 7 passengers. Larger corporate or pilgrim groups can select our Tempo Travellers.",
          hi: "अपने बजट और समूह के आकार के अनुसार वाहन चुनें। बजट यात्रा के लिए 1-4 यात्रियों हेतु सेडान (डिजायर/इटियोस) आदर्श हैं। 7 यात्रियों तक के परिवारों के लिए एसयूवी (अर्टिगा/इनोवा क्रिस्टा) अतिरिक्त लेगरूम और सामान की जगह प्रदान करती हैं। बड़े कॉर्पोरेट या तीर्थयात्री समूह हमारे टेम्पो ट्रैवलर चुन सकते हैं।",
          mr: "तुमच्या बजेट आणि प्रवाशांच्या संख्येनुसार वाहन निवडा. १-४ प्रवाशांसाठी परवडणाऱ्या प्रवासाकरिता सेडान (डिझायर/इटिओस) उत्तम आहेत. ७ प्रवाशांपर्यंतच्या कुटुंबांसाठी एसयूव्ही (अर्टिगा/इनोव्हा क्रिस्टा) अधिक लेगरूम आणि सामानाची जागा देतात. मोठे कॉर्पोरेट किंवा यात्रेकरू गट आमचे टेम्पो ट्रॅव्हलर निवडू शकतात.",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Nashik Mumbai Cabs / Taxi",
    baseMetaDesc:
      "Book reliable and affordable Cab / Taxi Rental Service between {origin} and {destination}. Swift Dzire, Ertiga, Innova Crysta available 24/7.",
  },

  // ─── 2. NASHIK <-> PUNE ──────────────────────────────────────────────────
  {
    id: "dyn-nashik-pune",
    baseOrigin: "Nashik",
    baseDestination: "Pune",
    distanceKm: 210,
    estimatedTime: "4.5 - 5 Hours",
    image: "/images/nashik-pune.jpg",
    baseDestinationImage: "/images/nashik-pune.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Connect between {origin} and {destination} with our dedicated outstation cab rental services. Designed for corporate commuters, college students, and family travelers, our direct service offers seamless pickup and drop across all major industrial and residential hubs.",
      hi: "हमारी समर्पित आउटस्टेशन कैब रेंटल सेवाओं के साथ {origin} और {destination} के बीच सुगम यात्रा करें। कॉर्पोरेट यात्रियों, छात्रों और परिवारों के लिए डिज़ाइन की गई हमारी सीधी सेवा सभी प्रमुख औद्योगिक और आवासीय क्षेत्रों में पिकअप और ड्रॉप प्रदान करती है।",
      mr: "आमच्या समर्पित आउटस्टेशन कॅब रेंटल सेवांसह {origin} आणि {destination} दरम्यान सहज प्रवास करा. कॉर्पोरेट प्रवासी, विद्यार्थी आणि कुटुंबांसाठी तयार केलेली आमची थेट सेवा सर्व प्रमुख औद्योगिक आणि निवासी भागांत पिकअप व ड्रॉप सुविधा देते.",
    },
    fleetDescription: {
      en: "Select from budget sedans (Dzire/Etios), comfortable MPVs (Ertiga), executive SUVs (Innova Crysta), or group Tempo Travellers.",
      hi: "बजट सेडान (डिजायर/इटियोस), आरामदायक एमपीवी (अर्टिगा), एग्जीक्यूटिव एसयूवी (इनोवा क्रिस्टा) या ग्रुप टेम्पो ट्रैवलर में से चुनें।",
      mr: "बजेट सेडान (डिझायर/इटिओस), आरामदायी एमपीव्ही (अर्टिगा), एक्झिक्युटिव्ह एसयूव्ही (इनोव्हा क्रिस्टा) किंवा ग्रुप टेम्पो ट्रॅव्हलरमधून निवडा.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "{origin} to {destination} Route Information",
          hi: "{origin} से {destination} मार्ग की जानकारी",
          mr: "{origin} ते {destination} मार्ग माहिती",
        },
        content: {
          en: "Covering 210 km via National Highway 60 (NH60), our experienced drivers ensure a smooth journey between {origin} and {destination} without public transport hassles. Sit back and relax while our skilled drivers manage highway traffic.",
          hi: "राष्ट्रीय राजमार्ग 60 (NH60) के माध्यम से 210 किमी की दूरी तय करते हुए, हमारे अनुभवी ड्राइवर सार्वजनिक परिवहन की परेशानी के बिना {origin} और {destination} के बीच सुगम यात्रा सुनिश्चित करते हैं। आराम से बैठें जबकि हमारे कुशल ड्राइवर हाईवे यातायात संभालते हैं।",
          mr: "राष्ट्रीय महामार्ग ६० (NH60) द्वारे २१० किमी अंतर पार करताना, आमचे अनुभवी चालक सार्वजनिक वाहतुकीच्या त्रासाशिवाय {origin} आणि {destination} दरम्यान सुखकर प्रवास सुनिश्चित करतात. निवांत बसा आणि आमचे कुशल चालक महामार्गावरील वाहतूक सांभाळतील.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Service Highlights for {origin} - {destination} Transfers",
          hi: "{origin} - {destination} यात्रा की मुख्य विशेषताएं",
          mr: "{origin} - {destination} प्रवासाची प्रमुख वैशिष्ट्ये",
        },
        intro: {
          en: "Our service guarantees high standards of safety and convenience:",
          hi: "हमारी सेवा सुरक्षा और सुविधा के उच्च मानकों की गारंटी देती है:",
          mr: "आमची सेवा सुरक्षितता आणि सोयीच्या उच्च मानकांची हमी देते:",
        },
        items: {
          en: [
            "Guaranteed on-time pickups from your doorstep or airport terminal",
            "Zero hidden fees—transparent fare structures provided before booking",
            "Highway-trained drivers skilled at navigating ghat sections and bypasses",
            "Customizable sightseeing stops along the route upon request",
          ],
          hi: [
            "आपके दरवाजे या एयरपोर्ट टर्मिनल से समय पर पिकअप की गारंटी",
            "कोई छिपा शुल्क नहीं—बुकिंग से पहले पारदर्शी किराया संरचना",
            "घाट क्षेत्रों और बाईपास पर कुशल हाईवे-प्रशिक्षित ड्राइवर",
            "अनुरोध पर मार्ग में दर्शनीय स्थलों पर रुकने की सुविधा",
          ],
          mr: [
            "तुमच्या दारातून किंवा विमानतळ टर्मिनलवरून वेळेवर पिकअपची हमी",
            "कोणतेही छुपे शुल्क नाही—बुकिंगपूर्वी पारदर्शक दरपत्रक",
            "घाट रस्ते आणि बायपास चालविण्यात कुशल महामार्ग-प्रशिक्षित चालक",
            "विनंतीनुसार मार्गावरील पर्यटन स्थळांवर थांबण्याची सोय",
          ],
        },
        closing: {
          en: "Contact our booking team anytime for tailored travel quotes.",
          hi: "कस्टमाइज़्ड यात्रा कोटेशन के लिए किसी भी समय हमारी बुकिंग टीम से संपर्क करें।",
          mr: "कस्टमाइज्ड प्रवास दरांसाठी कोणत्याही वेळी आमच्या बुकिंग टीमशी संपर्क साधा.",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Direct Intercity Taxi",
    baseMetaDesc:
      "Book comfortable Cab / Taxi Rental Service between {origin} and {destination}. 24/7 service, experienced drivers, and lowest rates.",
  },

  // ─── 3. MAIN HUBS <-> TRIMBAKESHWAR DARSHAN ─────────────────────────────
  {
    id: "dyn-hub-trimbakeshwar",
    baseOrigin: "Nashik",
    baseDestination: "Trimbakeshwar Darshan",
    distanceKm: 30,
    estimatedTime: "45 Minutes",
    image: "/images/nashik-trimbakeshwar.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Experience a peaceful spiritual journey between {origin} and {destination} Temple. We provide door-to-door pilgrimage Cab / Taxi Rental Services for families, senior citizens, and groups visiting one of the twelve sacred Jyotirlinga shrines.",
      hi: "{origin} और {destination} मंदिर के बीच एक शांत आध्यात्मिक यात्रा का अनुभव करें। हम बारह पवित्र ज्योतिर्लिंगों में से एक के दर्शन करने वाले परिवारों, वरिष्ठ नागरिकों और समूहों के लिए डोर-टू-डोर तीर्थयात्रा कैब सेवाएं प्रदान करते हैं।",
      mr: "{origin} आणि {destination} मंदिरादरम्यान शांत आध्यात्मिक प्रवासाचा अनुभव घ्या. बारा पवित्र ज्योतिर्लिंगांपैकी एकाचे दर्शन घेणाऱ्या कुटुंबांसाठी, ज्येष्ठ नागरिकांसाठी आणि गटांसाठी आम्ही डोअर-टू-डोअर तीर्थयात्रा कॅब सेवा देतो.",
    },
    fleetDescription: {
      en: "Clean AC sedans, 7-seater Innova Crystas, and spacious Tempo Travellers equipped for pilgrim travel with ample luggage room.",
      hi: "तीर्थयात्रियों की सुविधा और पर्याप्त सामान की जगह के साथ स्वच्छ एसी सेडान, 7-सीटर इनोवा क्रिस्टा और विशाल टेम्पो ट्रैवलर उपलब्ध हैं।",
      mr: "तीर्थयात्रेकरूंच्या सोयीसाठी आणि पुरेशा सामानाच्या जागेसह स्वच्छ एसी सेडान, ७-सीटर इनोव्हा क्रिस्टा आणि प्रशस्त टेम्पो ट्रॅव्हलर उपलब्ध आहेत.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Pilgrimage To {destination}",
          hi: "{destination} की तीर्थयात्रा",
          mr: "{destination} तीर्थयात्रा",
        },
        content: {
          en: "Trimbakeshwar houses one of the 12 sacred Jyotirlingas of Lord Shiva, renowned for its three-faced linga embodying Brahma, Vishnu, and Mahesh. Our knowledgeable drivers assist you with optimal routes, parking locations, and timing guidance for a hassle-free darshan.",
          hi: "त्र्यंबकेश्वर भगवान शिव के 12 पवित्र ज्योतिर्लिंगों में से एक है, जो ब्रह्मा, विष्णु और महेश के प्रतीक त्रिमुखी शिवलिंग के लिए प्रसिद्ध है। हमारे अनुभवी ड्राइवर सुगम दर्शन के लिए सर्वोत्तम मार्गों, पार्किंग स्थलों और समय के मार्गदर्शन में आपकी सहायता करते हैं।",
          mr: "त्र्यंबकेश्वर येथे भगवान शिवाच्या १२ पवित्र ज्योतिर्लिंगांपैकी एक ज्योतिर्लिंग असून ब्रह्मा, विष्णू आणि महेश यांचे प्रतीक असलेल्या त्रिमुखी लिंगासाठी ते प्रसिद्ध आहे. आमचे जाणकार चालक सुलभ दर्शनासाठी योग्य मार्ग, पार्किंग आणि वेळेचे मार्गदर्शन करतात.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Why Devotees Choose Our Pilgrimage Cabs / Taxi?",
          hi: "भक्त हमारी तीर्थयात्रा कैब्स क्यों चुनते हैं?",
          mr: "भाविक आमच्या तीर्थयात्रा कॅब्स का निवडतात?",
        },
        intro: {
          en: "We tailor our pilgrimage transfers specifically for family and senior citizen comfort:",
          hi: "हम अपनी तीर्थयात्रा सेवाओं को विशेष रूप से परिवार और वरिष्ठ नागरिकों के आराम के लिए तैयार करते हैं:",
          mr: "आम्ही आमच्या तीर्थयात्रा सेवा विशेषतः कुटुंब आणि ज्येष्ठ नागरिकांच्या आरामासाठी तयार करतो:",
        },
        items: {
          en: [
            "Doorstep pick-up from any residential locality, hotel, or station in {origin}",
            "Flexible waiting times included for temple darshan and pooja rituals",
            "Sanitized, smooth-riding AC vehicles with polite and respectful drivers",
            "Option to combine your trip with nearby holy sites like Kushavarta Tirtha and Brahmagiri hills",
          ],
          hi: [
            "{origin} के किसी भी आवासीय क्षेत्र, होटल या स्टेशन से डोरस्टेप पिकअप",
            "मंदिर दर्शन और पूजा अनुष्ठानों के लिए लचीला प्रतीक्षा समय शामिल",
            "विनम्र और सम्मानजनक ड्राइवरों के साथ सैनिटाइज्ड, आरामदायक एसी वाहन",
            "कुशावर्त तीर्थ और ब्रह्मगिरि पहाड़ियों जैसे नजदीकी पवित्र स्थलों को जोड़ने का विकल्प",
          ],
          mr: [
            "{origin} मधील कोणत्याही निवासी भागातून, हॉटेलमधून किंवा स्थानकावरून डोअरस्टेप पिकअप",
            "मंदिर दर्शन आणि पूजा विधींसाठी लवचिक प्रतीक्षा वेळ समाविष्ट",
            "नम्र आणि आदरणीय चालकांसह स्वच्छ, आरामदायी एसी वाहने",
            "कुशावर्त तीर्थ आणि ब्रह्मगिरी पर्वतांसारख्या जवळच्या पवित्र स्थळांना भेट देण्याचा पर्याय",
          ],
        },
        closing: {
          en: "Book your Trimbakeshwar Darshan cab today for a blessed journey!",
          hi: "एक मंगलमय यात्रा के लिए आज ही अपनी त्र्यंबकेश्वर दर्शन कैब बुक करें!",
          mr: "मंगलमय प्रवासासाठी आजच तुमची त्र्यंबकेश्वर दर्शन कॅब बुक करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Holy Jyotirlinga Package",
    baseMetaDesc:
      "Book direct pilgrimage Cabs / Taxi from {origin} to {destination}. Clean AC cars, polite drivers, and instant online booking.",
  },

  // ─── 4. MAIN HUBS <-> SHANI SHINGNAPUR ───────────────────────────────────
  {
    id: "dyn-hub-shani-shingnapur",
    baseOrigin: "Nashik",
    baseDestination: "Shani Shingnapur",
    distanceKm: 150,
    estimatedTime: "3.5 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/shani-shingnapur.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Plan your sacred trip between {origin} and {destination} with our affordable roundtrip and one-way cab packages. Visit the famous doorless village and Lord Shanidev shrine in comfort.",
      hi: "हमारे किफायती राउंडट्रिप और वन-वे कैब पैकेज के साथ {origin} और {destination} के बीच अपनी पवित्र यात्रा की योजना बनाएं। प्रसिद्ध बिना दरवाजों वाले गांव और भगवान शनिदेव मंदिर के आराम से दर्शन करें।",
      mr: "आमच्या परवडणाऱ्या राउंडट्रिप आणि वन-वे कॅब पॅकेजेससह {origin} आणि {destination} दरम्यानच्या पवित्र सहलीचे नियोजन करा. प्रसिद्ध दरवाजे नसलेल्या गावाला आणि भगवान शनिदेवांच्या मंदिराला आरामात भेट द्या.",
    },
    fleetDescription: {
      en: "Sedans (Dzire/Etios), Ertigas, Innova Crystas, and Tempo Travellers tailored for families and pilgrim groups.",
      hi: "परिवारों और तीर्थयात्री समूहों के लिए विशेष रूप से तैयार सेडान (डिजायर/इटियोस), अर्टिगा, इनोवा क्रिस्टा और टेम्पो ट्रैवलर।",
      mr: "कुटुंबे आणि यात्रेकरू गटांसाठी खास तयार केलेल्या सेडान (डिझायर/इटिओस), अर्टिगा, इनोव्हा क्रिस्टा आणि टेम्पो ट्रॅव्हलर.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Sacred Journey To Shani Shingnapur From {origin}",
          hi: "{origin} से शनि शिंगणापुर की पवित्र यात्रा",
          mr: "{origin} हून शनि शिंगणापूरची पवित्र यात्रा",
        },
        content: {
          en: "Located in Ahmednagar district, Shani Shingnapur is world-famous for its open-air temple of Lord Shanidev and the village's unique tradition of doorless homes. Our private Cabs / Taxi provide a peaceful highway journey from {origin} straight to the shrine premises.",
          hi: "अहमदनगर जिले में स्थित शनि शिंगणापुर भगवान शनिदेव के खुले मंदिर और गांव के बिना दरवाजों वाले घरों की अनूठी परंपरा के लिए विश्व प्रसिद्ध है। हमारी निजी कैब्स {origin} से सीधे मंदिर परिसर तक शांतिपूर्ण हाईवे यात्रा प्रदान करती हैं।",
          mr: "अहमदनगर जिल्ह्यातील शनि शिंगणापूर हे भगवान शनिदेवांचे मोकळ्या आकाशाखालील मंदिर आणि दरवाजे नसलेल्या घरांच्या अनोख्या परंपरेसाठी जगप्रसिद्ध आहे. आमच्या खाजगी कॅब्स {origin} येथून थेट मंदिर परिसरापर्यंत शांत महामार्ग प्रवास देतात.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Service Benefits for Devotees",
          hi: "भक्तों के लिए सेवा लाभ",
          mr: "भाविकांसाठी सेवेचे फायदे",
        },
        intro: {
          en: "Key features of our Shani Shingnapur packages:",
          hi: "हमारे शनि शिंगणापुर पैकेज की मुख्य विशेषताएं:",
          mr: "आमच्या शनि शिंगणापूर पॅकेजची प्रमुख वैशिष्ट्ये:",
        },
        items: {
          en: [
            "Doorstep pick-up and drop anywhere across {origin}",
            "Driver support for local parking and temple entrance points",
            "All-inclusive fixed fares covering fuel, toll fees, and driver allowances",
            "Customizable combination packages with Shirdi Sai Baba Temple",
          ],
          hi: [
            "{origin} में कहीं से भी डोरस्टेप पिकअप और ड्रॉप",
            "स्थानीय पार्किंग और मंदिर प्रवेश बिंदुओं के लिए ड्राइवर सहायता",
            "ईंधन, टोल शुल्क और ड्राइवर भत्ते सहित निश्चित ऑल-इनक्लूसिव किराया",
            "शिर्डी साईं बाबा मंदिर के साथ कस्टमाइज़्ड कॉम्बिनेशन पैकेज",
          ],
          mr: [
            "{origin} मधील कोठूनही डोअरस्टेप पिकअप आणि ड्रॉप",
            "स्थानिक पार्किंग आणि मंदिर प्रवेशद्वारांसाठी चालकांचे सहकार्य",
            "इंधन, टोल शुल्क आणि चालक भत्त्यांसह निश्चित ऑल-इनक्लूसिव्ह दर",
            "शिर्डी साईबाबा मंदिरासह कस्टमाइज्ड कॉम्बिनेशन पॅकेजेस",
          ],
        },
        closing: {
          en: "Reserve your sacred journey cab today!",
          hi: "आज ही अपनी पवित्र यात्रा के लिए कैब बुक करें!",
          mr: "आजच तुमच्या पवित्र यात्रेसाठी कॅब आरक्षित करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Pilgrimage Taxi",
    baseMetaDesc:
      "Book comfortable pilgrimage Cabs / Taxi between {origin} and {destination}. Fares from transparent pricing with zero surge.",
  },

  // ─── 5. MAIN HUBS <-> SHIRDI ─────────────────────────────────────────────
  {
    id: "dyn-hub-shirdi",
    baseOrigin: "Nashik",
    baseDestination: "Shirdi",
    distanceKm: 90,
    estimatedTime: "2 Hours",
    image: "/images/kopargaon-shirdi-cab.jpg",
    baseDestinationImage: "/images/to-shirdi.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Embark on a divine journey between {origin} and {destination} Sai Baba Temple. Our punctual, door-to-door pilgrimage cab transfers ensure smooth travel for devotees, senior citizens, and family groups.",
      hi: "{origin} और {destination} साईं बाबा मंदिर के बीच एक दिव्य यात्रा पर निकलें। हमारी समयनिष्ठ, डोर-टू-डोर तीर्थयात्रा कैब सेवा भक्तों, वरिष्ठ नागरिकों और परिवारों के लिए सुगम यात्रा सुनिश्चित करती है।",
      mr: "{origin} आणि {destination} साईबाबा मंदिरादरम्यानच्या दिव्य प्रवासाला सुरुवात करा. आमची वक्तशीर, डोअर-टू-डोअर तीर्थयात्रा कॅब सेवा भाविक, ज्येष्ठ नागरिक आणि कुटुंबांसाठी सुखकर प्रवासाची हमी देते.",
    },
    fleetDescription: {
      en: "Clean AC sedans, spacious Ertigas, luxury Innova Crystas, and Tempo Travellers available 24/7.",
      hi: "स्वच्छ एसी सेडान, विशाल अर्टिगा, लक्ज़री इनोवा क्रिस्टा और टेम्पो ट्रैवलर 24/7 उपलब्ध हैं।",
      mr: "स्वच्छ एसी सेडान, प्रशस्त अर्टिगा, लक्झरी इनोव्हा क्रिस्टा आणि टेम्पो ट्रॅव्हलर २४/७ उपलब्ध आहेत.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Shirdi Sai Baba Temple Highway Route",
          hi: "शिर्डी साईं बाबा मंदिर हाईवे मार्ग",
          mr: "शिर्डी साईबाबा मंदिर महामार्ग",
        },
        content: {
          en: "Enjoy a smooth highway drive from {origin} directly to Shirdi temple complex hotels and shrines. Our drivers are well-versed with temple entry gates, parking spots, and Aarti schedules to make your visit effortless.",
          hi: "{origin} से सीधे शिर्डी मंदिर परिसर के होटलों और मंदिरों तक सुगम हाईवे ड्राइव का आनंद लें। आपकी यात्रा को सहज बनाने के लिए हमारे ड्राइवर मंदिर के प्रवेश द्वार, पार्किंग स्थलों और आरती के समय से भली-भांति परिचित हैं।",
          mr: "{origin} येथून थेट शिर्डी मंदिर परिसरातील हॉटेल्स आणि मंदिरांपर्यंत सुखकर महामार्ग प्रवासाचा आनंद घ्या. तुमचा प्रवास सुलभ करण्यासाठी आमचे चालक मंदिराचे प्रवेशद्वार, पार्किंगची ठिकाणे आणि आरतीच्या वेळा यांशी पूर्णपणे परिचित आहेत.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Why Book Our {origin} to {destination} Cab?",
          hi: "{origin} से {destination} के लिए हमारी कैब क्यों बुक करें?",
          mr: "{origin} ते {destination} साठी आमची कॅब का बुक करावी?",
        },
        intro: {
          en: "Dedicated features for Sai Baba devotees:",
          hi: "साईं बाबा भक्तों के लिए विशेष सुविधाएं:",
          mr: "साईबाबा भक्तांसाठी खास वैशिष्ट्ये:",
        },
        items: {
          en: [
            "Prompt doorstep pickup from any address or transit terminal in {origin}",
            "Comfortable reclining seats and clean air-conditioned interiors",
            "Flexible one-way drops and same-day or multi-day return options",
            "24/7 customer helpline for instant booking and schedule changes",
          ],
          hi: [
            "{origin} के किसी भी पते या ट्रांजिट टर्मिनल से तुरंत डोरस्टेप पिकअप",
            "आरामदायक रिक्लाइनिंग सीटें और स्वच्छ वातानुकूलित इंटीरियर",
            "लचीले वन-वे ड्रॉप और सेम-डे या मल्टी-डे रिटर्न विकल्प",
            "तत्काल बुकिंग और समय परिवर्तन के लिए 24/7 ग्राहक हेल्पलाइन",
          ],
          mr: [
            "{origin} मधील कोणत्याही पत्त्यावरून किंवा ट्रान्झिट टर्मिनलवरून त्वरित डोअरस्टेप पिकअप",
            "आरामदायी रिक्लायनिंग सीट्स आणि स्वच्छ वातानुकूलित इंटीरियर",
            "लवचिक वन-वे ड्रॉप आणि सेम-डे किंवा मल्टी-डे परतीचे पर्याय",
            "त्वरित बुकिंग आणि वेळेतील बदलांसाठी २४/७ ग्राहक हेल्पलाइन",
          ],
        },
        closing: {
          en: "Book your Sai Baba Darshan cab now for a serene travel experience!",
          hi: "शांत यात्रा अनुभव के लिए अभी अपनी साईं बाबा दर्शन कैब बुक करें!",
          mr: "शांत प्रवासाच्या अनुभवासाठी आत्ताच तुमची साईबाबा दर्शन कॅब बुक करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Sai Baba Darshan",
    baseMetaDesc:
      "Book budget-friendly Cab / Taxi Rental Service between {origin} and {destination} Sai Baba Temple. On-time pickup and polite drivers.",
  },

  // ─── 6. MAIN HUBS <-> CHHATRAPATI SAMBHAJINAGAR / AJANTA ELLORA ──────────
  {
    id: "dyn-hub-sambhajinagar-ajanta",
    baseOrigin: "Nashik",
    baseDestination: "Chhatrapati Sambhajinagar Ajanta Ellora Caves",
    distanceKm: 180,
    estimatedTime: "3.5 Hours",
    image: "/images/nashik-aurangabad.jpg",
    baseDestinationImage: "/images/nashik-ajanta.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Explore UNESCO World Heritage sites with our outstation tour Cab / Taxi Rental Service connecting {origin} and {destination}. Enjoy fast, comfortable expressway transit to ancient rock-cut cave monuments and historical landmarks.",
      hi: "{origin} और {destination} को जोड़ने वाली हमारी आउटस्टेशन टूर कैब सेवा के साथ यूनेस्को विश्व धरोहर स्थलों की सैर करें। प्राचीन गुफा स्मारकों और ऐतिहासिक स्थलों तक तेज और आरामदायक एक्सप्रेसवे यात्रा का आनंद लें।",
      mr: "{origin} आणि {destination} यांना जोडणाऱ्या आमच्या आउटस्टेशन टूर कॅब सेवेसह युनेस्को जागतिक वारसा स्थळांना भेट द्या. प्राचीन लेणी आणि ऐतिहासिक वास्तूंपर्यंत वेगवान व आरामदायी एक्सप्रेसवे प्रवासाचा आनंद घ्या.",
    },
    fleetDescription: {
      en: "High-speed expressway ready vehicles including Dzire, Etios, Ertiga, Innova Crysta, and executive Tempo Travellers.",
      hi: "डिजायर, इटियोस, अर्टिगा, इनोवा क्रिस्टा और एग्जीक्यूटिव टेम्पो ट्रैवलर सहित हाई-स्पीड एक्सप्रेसवे के लिए तैयार वाहन।",
      mr: "डिझायर, इटिओस, अर्टिगा, इनोव्हा क्रिस्टा आणि एक्झिक्युटिव्ह टेम्पो ट्रॅव्हलरसह हाय-स्पीड एक्सप्रेसवेसाठी सज्ज वाहने.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Heritage Route via Samruddhi Mahamarg",
          hi: "समृद्धि महामार्ग के माध्यम से हेरिटेज मार्ग",
          mr: "समृद्धी महामार्गाद्वारे हेरिटेज मार्ग",
        },
        content: {
          en: "Travel seamlessly between {origin} and {destination} via the Samruddhi Mahamarg expressway corridor. Our drivers handle the highway drive while you enjoy scenic landscapes and plan your heritage cave explorations.",
          hi: "समृद्धि महामार्ग एक्सप्रेसवे कॉरिडोर के माध्यम से {origin} और {destination} के बीच निर्बाध यात्रा करें। हमारे ड्राइवर हाईवे ड्राइव संभालते हैं जबकि आप सुंदर दृश्यों का आनंद लेते हैं।",
          mr: "समृद्धी महामार्ग एक्सप्रेसवे कॉरिडॉरद्वारे {origin} आणि {destination} दरम्यान अखंड प्रवास करा. आमचे चालक महामार्ग प्रवासाची काळजी घेतात आणि तुम्ही निसर्गसौंदर्याचा आनंद घेऊ शकता.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Highlights of Our Heritage Sightseeing Package",
          hi: "हमारे हेरिटेज दर्शनीय स्थल पैकेज की विशेषताएं",
          mr: "आमच्या हेरिटेज पर्यटन पॅकेजची वैशिष्ट्ये",
        },
        intro: {
          en: "What makes our tour package ideal for tourists and families:",
          hi: "हमारा टूर पैकेज पर्यटकों और परिवारों के लिए आदर्श क्यों है:",
          mr: "आमचे टूर पॅकेज पर्यटक आणि कुटुंबांसाठी आदर्श का आहे:",
        },
        items: {
          en: [
            "Direct door-to-door transfers to Ajanta Caves, Ellora Caves, and Bibi Ka Maqbara",
            "Expressway-certified vehicles with high safety standards and air conditioning",
            "Transparent all-inclusive rates with toll charges and driver allowances covered",
            "Flexible 1-day express tours or comprehensive 2-day weekend packages",
          ],
          hi: [
            "अजंता गुफाओं, एलोरा गुफाओं और बीबी का मकबरा तक सीधा डोर-टू-डोर ट्रांसफर",
            "उच्च सुरक्षा मानकों और एयर कंडीशनिंग के साथ एक्सप्रेसवे-प्रमाणित वाहन",
            "टोल शुल्क और ड्राइवर भत्ते सहित पारदर्शी ऑल-इनक्लूसिव दरें",
            "लचीले 1-दिवसीय एक्सप्रेस टूर या संपूर्ण 2-दिवसीय वीकेंड पैकेज",
          ],
          mr: [
            "अजिंठा लेणी, वेरूळ लेणी आणि बीबी का मकबरा येथे थेट डोअर-टू-डोअर ट्रान्सफर",
            "उच्च सुरक्षा मानके आणि एअर कंडिशनिंगसह एक्सप्रेसवे-प्रमाणित वाहने",
            "टोल शुल्क आणि चालक भत्त्यांसह पारदर्शक ऑल-इनक्लूसिव्ह दर",
            "लवचिक १-दिवसीय एक्सप्रेस टूर किंवा संपूर्ण २-दिवसीय वीकेंड पॅकेजेस",
          ],
        },
        closing: {
          en: "Reserve your heritage tour cab today for an unforgettable trip!",
          hi: "एक अविस्मरणीय यात्रा के लिए आज ही अपनी हेरिटेज टूर कैब बुक करें!",
          mr: "अविस्मरणीय सहलीसाठी आजच तुमची हेरिटेज टूर कॅब आरक्षित करा!",
        },
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab | Heritage Tour",
    baseMetaDesc:
      "Book fast heritage tour Cabs / Taxi between {origin} and {destination} via Samruddhi Mahamarg. Best rates guaranteed.",
  },

  // ─── 7. MAIN HUBS <-> BHIMASHANKAR DARSHAN ──────────────────────────────
  {
    id: "dyn-hub-bhimashankar",
    baseOrigin: "Nashik",
    baseDestination: "Bhimashankar Darshan",
    distanceKm: 210,
    estimatedTime: "4.5 Hours",
    image: "/images/nashik-bhimashankar.jpg",
    baseDestinationImage: "/images/nashik-bhimashankar.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Travel comfortably through Sahyadri ghats between {origin} and {destination} Shrine. Our specialized mountain-certified Cabs / Taxi and expert drivers guarantee a safe pilgrimage to the holy Jyotirlinga temple.",
      hi: "{origin} और {destination} मंदिर के बीच सह्याद्रि घाटों से होकर आराम से यात्रा करें। हमारी पर्वतीय-प्रमाणित कैब्स और विशेषज्ञ ड्राइवर पवित्र ज्योतिर्लिंग मंदिर की सुरक्षित तीर्थयात्रा की गारंटी देते हैं।",
      mr: "{origin} आणि {destination} मंदिरादरम्यान सह्याद्रीच्या घाटांतून आरामात प्रवास करा. आमच्या घाट-प्रमाणित कॅब्स आणि तज्ज्ञ चालक पवित्र ज्योतिर्लिंग मंदिराच्या सुरक्षित यात्रेची हमी देतात.",
    },
    fleetDescription: {
      en: "Well-maintained, hill-tested sedans, SUVs (Ertiga/Innova Crysta), and group Tempo Travellers with experienced ghat drivers.",
      hi: "अनुभवी घाट ड्राइवरों के साथ सुव्यवस्थित, पहाड़ी मार्गों पर परखी गई सेडान, एसयूवी (अर्टिगा/इनोवा क्रिस्टा) और ग्रुप टेम्पो ट्रैवलर।",
      mr: "अनुभवी घाट चालकांसह सुस्थितीतील सेडान, एसयूव्ही (अर्टिगा/इनोव्हा क्रिस्टा) आणि ग्रुप टेम्पो ट्रॅव्हलर.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Ghat Route & Bhimashankar Jyotirlinga Visit",
          hi: "घाट मार्ग और भीमाशंकर ज्योतिर्लिंग दर्शन",
          mr: "घाट मार्ग आणि भीमाशंकर ज्योतिर्लिंग दर्शन",
        },
        content: {
          en: "Located in the Ghat region of the Sahyadri hills near Pune, Bhimashankar is both a revered Jyotirlinga shrine and the source of the Bhima River. Our drivers navigate scenic mountain roads effortlessly, allowing your family to travel stress-free.",
          hi: "पुणे के पास सह्याद्रि पहाड़ियों के घाट क्षेत्र में स्थित भीमाशंकर एक पूजनीय ज्योतिर्लिंग मंदिर और भीमा नदी का उद्गम स्थल है। हमारे ड्राइवर सुंदर पहाड़ी सड़कों पर सहजता से गाड़ी चलाते हैं, जिससे आपका परिवार तनाव-मुक्त यात्रा कर सके।",
          mr: "पुण्याजवळील सह्याद्री डोंगररांगांच्या घाट प्रदेशात वसलेले भीमाशंकर हे एक पवित्र ज्योतिर्लिंग आणि भीमा नदीचे उगमस्थान आहे. आमचे चालक निसर्गरम्य डोंगरी रस्त्यांवर सहजतेने वाहन चालवतात, ज्यामुळे तुमचे कुटुंब तणावमुक्त प्रवास करू शकते.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Pilgrimage Package Advantages",
          hi: "तीर्थयात्रा पैकेज के लाभ",
          mr: "तीर्थयात्रा पॅकेजचे फायदे",
        },
        intro: {
          en: "Why passengers trust us for hill pilgrimage journeys:",
          hi: "पहाड़ी तीर्थयात्राओं के लिए यात्री हम पर भरोसा क्यों करते हैं:",
          mr: "डोंगरी तीर्थयात्रांसाठी प्रवासी आमच्यावर विश्वास का ठेवतात:",
        },
        items: {
          en: [
            "Experienced mountain drivers skilled in negotiating ghat curves and monsoon routes",
            "Clean, regularly serviced vehicles with reliable brakes and comfortable seating",
            "Doorstep pick-up from any location in {origin} with flexible departure schedules",
            "Customizable packages including stopovers at nearby scenic and religious spots",
          ],
          hi: [
            "घाट मोड़ों और मानसून मार्गों पर गाड़ी चलाने में कुशल अनुभवी पहाड़ी ड्राइवर",
            "विश्वसनीय ब्रेक और आरामदायक सीटों के साथ स्वच्छ, नियमित रूप से सर्विस्ड वाहन",
            "लचीले प्रस्थान समय के साथ {origin} के किसी भी स्थान से डोरस्टेप पिकअप",
            "नजदीकी दर्शनीय और धार्मिक स्थलों पर रुकने सहित कस्टमाइज़्ड पैकेज",
          ],
          mr: [
            "घाट वळणे आणि पावसाळी मार्गांवर वाहन चालविण्यात कुशल अनुभवी चालक",
            "विश्वासार्ह ब्रेक्स आणि आरामदायी सीट्ससह स्वच्छ, नियमित सर्व्हिस केलेली वाहने",
            "लवचिक वेळेसह {origin} मधील कोणत्याही ठिकाणाहून डोअरस्टेप पिकअप",
            "जवळच्या निसर्गरम्य आणि धार्मिक स्थळांवर थांबण्यासह कस्टमाइज्ड पॅकेजेस",
          ],
        },
        closing: {
          en: "Book your Bhimashankar pilgrimage cab today!",
          hi: "आज ही अपनी भीमाशंकर तीर्थयात्रा कैब बुक करें!",
          mr: "आजच तुमची भीमाशंकर तीर्थयात्रा कॅब बुक करा!",
        },
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab | Jyotirlinga Special",
    baseMetaDesc:
      "Book expert hill drivers for {origin} to {destination} trips. Safe AC Cabs / Taxi and transparent fares.",
  },

  // ─── 8. MAIN HUBS <-> KOPARGAON ──────────────────────────────────────────
  {
    id: "dyn-hub-kopargaon",
    baseOrigin: "Nashik",
    baseDestination: "Kopargaon",
    distanceKm: 85,
    estimatedTime: "1.5 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/kopargaon-railway.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    introTemplate: {
      en: "Enjoy quick, dependable railway station and city transfers connecting {origin} and {destination}. We provide 24/7 pick-up for train passengers, business travelers, and local commuters.",
      hi: "{origin} और {destination} को जोड़ने वाली तेज, भरोसेमंद रेलवे स्टेशन और सिटी ट्रांसफर सेवा का आनंद लें। हम ट्रेन यात्रियों, व्यावसायिक यात्रियों और स्थानीय यात्रियों के लिए 24/7 पिकअप प्रदान करते हैं।",
      mr: "{origin} आणि {destination} यांना जोडणाऱ्या जलद, विश्वासार्ह रेल्वे स्थानक आणि शहर ट्रान्सफर सेवेचा आनंद घ्या. आम्ही रेल्वे प्रवासी, व्यावसायिक प्रवासी आणि स्थानिक प्रवाशांसाठी २४/७ पिकअप देतो.",
    },
    fleetDescription: {
      en: "Fuel-efficient Sedans (Dzire/Etios) and spacious MPVs (Ertiga) for fast station transfers.",
      hi: "तेज स्टेशन ट्रांसफर के लिए किफायती सेडान (डिजायर/इटियोस) और विशाल एमपीवी (अर्टिगा)।",
      mr: "जलद स्टेशन ट्रान्सफरसाठी इंधन-कार्यक्षम सेडान (डिझायर/इटिओस) आणि प्रशस्त एमपीव्ही (अर्टिगा).",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Railway Station Pickup & City Transfer",
          hi: "रेलवे स्टेशन पिकअप और सिटी ट्रांसफर",
          mr: "रेल्वे स्थानक पिकअप आणि शहर ट्रान्सफर",
        },
        content: {
          en: "Kopargaon Railway Station is a key rail transit hub in Ahmednagar district. Our direct door-to-door cab pickups ensure you never have to wait for local autos or deal with luggage hassle after a long train journey.",
          hi: "कोपरगांव रेलवे स्टेशन अहमदनगर जिले का एक प्रमुख रेल पारगमन केंद्र है। हमारी सीधी डोर-टू-डोर कैब पिकअप सुनिश्चित करती है कि लंबी ट्रेन यात्रा के बाद आपको स्थानीय ऑटो की प्रतीक्षा या सामान की परेशानी न हो।",
          mr: "कोपरगाव रेल्वे स्थानक हे अहमदनगर जिल्ह्यातील एक महत्त्वाचे रेल्वे जंक्शन आहे. आमच्या थेट डोअर-टू-डोअर कॅब पिकअपमुळे लांबच्या रेल्वे प्रवासानंतर तुम्हाला स्थानिक रिक्षाची वाट पाहावी लागत नाही.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Transfer Highlights",
          hi: "ट्रांसफर की मुख्य विशेषताएं",
          mr: "ट्रान्सफरची मुख्य वैशिष्ट्ये",
        },
        intro: {
          en: "Guaranteed travel convenience:",
          hi: "सुनिश्चित यात्रा सुविधा:",
          mr: "हमीपूर्वक प्रवास सोय:",
        },
        items: {
          en: [
            "24/7 pickup synchronized with train arrival and departure times",
            "Affordable fixed fares with zero hidden night surges",
            "Clean AC cars with courteous drivers ready to assist with luggage",
          ],
          hi: [
            "ट्रेन के आगमन और प्रस्थान के समय के अनुसार 24/7 पिकअप",
            "बिना किसी छिपे रात्रि शुल्क के किफायती निश्चित किराया",
            "सामान में सहायता के लिए तत्पर विनम्र ड्राइवरों के साथ स्वच्छ एसी कारें",
          ],
          mr: [
            "रेल्वेच्या आगमन आणि प्रस्थानाच्या वेळेनुसार २४/७ पिकअप",
            "कोणत्याही छुप्या रात्रीच्या शुल्काशिवाय परवडणारे निश्चित दर",
            "सामान उचलण्यास मदत करणाऱ्या नम्र चालकांसह स्वच्छ एसी गाड्या",
          ],
        },
        closing: {
          en: "Book your Kopargaon station cab in advance!",
          hi: "अपनी कोपरगांव स्टेशन कैब पहले से बुक करें!",
          mr: "तुमची कोपरगाव स्टेशन कॅब आगाऊ बुक करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Station Transfer",
    baseMetaDesc:
      "Quick railway station and city transfers between {origin} and {destination}. Book 24/7 at low rates.",
  },

  // ─── 9. MAIN HUBS <-> MANMAD ─────────────────────────────────────────────
  {
    id: "dyn-hub-manmad",
    baseOrigin: "Nashik",
    baseDestination: "Manmad",
    distanceKm: 90,
    estimatedTime: "2 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-manmad.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    introTemplate: {
      en: "Book affordable outstation Cab / Taxi Rental Services connecting {origin} and {destination} Railway Junction. Enjoy reliable door-to-door pick-up for comfortable onward travel across Maharashtra.",
      hi: "{origin} और {destination} रेलवे जंक्शन को जोड़ने वाली किफायती आउटस्टेशन कैब / टैक्सी सेवाएं बुक करें। पूरे महाराष्ट्र में आरामदायक आगे की यात्रा के लिए विश्वसनीय डोर-टू-डोर पिकअप का आनंद लें।",
      mr: "{origin} आणि {destination} रेल्वे जंक्शनला जोडणाऱ्या परवडणाऱ्या आउटस्टेशन कॅब / टॅक्सी सेवा बुक करा. संपूर्ण महाराष्ट्रात आरामदायी पुढील प्रवासासाठी विश्वासार्ह डोअर-टू-डोअर पिकअपचा आनंद घ्या.",
    },
    fleetDescription: {
      en: "Sedans, Ertigas, Innovas, and Tempo Travellers for individual or group station drops.",
      hi: "व्यक्तिगत या सामूहिक स्टेशन ड्रॉप के लिए सेडान, अर्टिगा, इनोवा और टेम्पो ट्रैवलर।",
      mr: "वैयक्तिक किंवा सामूहिक स्टेशन ड्रॉपसाठी सेडान, अर्टिगा, इनोव्हा आणि टेम्पो ट्रॅव्हलर.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Manmad Junction Route Details",
          hi: "मनमाड जंक्शन मार्ग विवरण",
          mr: "मनमाड जंक्शन मार्ग तपशील",
        },
        content: {
          en: "Manmad Junction is one of the busiest railway hubs under the Bhusawal division. Our private Cab / Taxi Rental Service connects {origin} directly with Manmad station, ensuring on-time arrivals for important train connections.",
          hi: "मनमाड जंक्शन भुसावल मंडल के सबसे व्यस्त रेलवे केंद्रों में से एक है। हमारी निजी कैब सेवा {origin} को सीधे मनमाड स्टेशन से जोड़ती है, जिससे महत्वपूर्ण ट्रेन कनेक्शन के लिए समय पर पहुंचना सुनिश्चित होता है।",
          mr: "मनमाड जंक्शन हे भुसावळ विभागातील सर्वात व्यस्त रेल्वे केंद्रांपैकी एक आहे. आमची खाजगी कॅब सेवा {origin} ला थेट मनमाड स्थानकाशी जोडते, ज्यामुळे महत्त्वाच्या रेल्वे गाड्यांसाठी वेळेवर पोहोचणे शक्य होते.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Service Benefits",
          hi: "सेवा के लाभ",
          mr: "सेवेचे फायदे",
        },
        intro: {
          en: "Why choose our station transfer Cabs / Taxi:",
          hi: "हमारी स्टेशन ट्रांसफर कैब्स क्यों चुनें:",
          mr: "आमच्या स्टेशन ट्रान्सफर कॅब्स का निवडाव्यात:",
        },
        items: {
          en: [
            "On-time pick-up guaranteed to ensure you never miss a train",
            "Clean vehicles with dedicated luggage space",
            "Transparent, fixed rates with toll and allowance details included",
          ],
          hi: [
            "समय पर पिकअप की गारंटी ताकि आपकी ट्रेन कभी न छूटे",
            "समर्पित सामान स्थान के साथ स्वच्छ वाहन",
            "टोल और भत्ते के विवरण सहित पारदर्शी, निश्चित दरें",
          ],
          mr: [
            "तुमची रेल्वे कधीही चुकू नये यासाठी वेळेवर पिकअपची हमी",
            "सामानासाठी स्वतंत्र जागेसह स्वच्छ वाहने",
            "टोल आणि भत्त्यांच्या तपशीलासह पारदर्शक, निश्चित दर",
          ],
        },
        closing: {
          en: "Call us now for instant Manmad cab bookings!",
          hi: "तत्काल मनमाड कैब बुकिंग के लिए अभी हमें कॉल करें!",
          mr: "त्वरित मनमाड कॅब बुकिंगसाठी आत्ताच आम्हाला कॉल करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Railway Transfer",
    baseMetaDesc:
      "Book station transfer Cabs / Taxi between {origin} and {destination}. On-time pickup and transparent rates.",
  },

  // ─── 10. MAIN HUBS <-> AHMEDNAGAR ────────────────────────────────────────
  {
    id: "dyn-hub-ahmednagar",
    baseOrigin: "Nashik",
    baseDestination: "Ahmednagar",
    distanceKm: 150,
    estimatedTime: "3 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-ahmednagar.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    introTemplate: {
      en: "Budget-friendly intercity car rentals connecting {origin} and {destination}. Whether traveling for commercial work, official visits, or family trips, our 24/7 Cab / Taxi Rental Service guarantees smooth highway transit.",
      hi: "{origin} और {destination} को जोड़ने वाली बजट-अनुकूल इंटरसिटी कार रेंटल सेवाएं। चाहे व्यावसायिक कार्य, आधिकारिक यात्रा या पारिवारिक भ्रमण हो, हमारी 24/7 कैब सेवा सुगम हाईवे यात्रा की गारंटी देती है।",
      mr: "{origin} आणि {destination} यांना जोडणाऱ्या बजेट-अनुकूल इंटरसिटी कार रेंटल सेवा. व्यावसायिक काम, अधिकृत भेटी किंवा कौटुंबिक सहलींसाठी आमची २४/७ कॅब सेवा सुखकर महामार्ग प्रवासाची हमी देते.",
    },
    fleetDescription: {
      en: "Clean AC sedans and MPVs tailored for business and family journeys.",
      hi: "व्यावसायिक और पारिवारिक यात्राओं के लिए तैयार स्वच्छ एसी सेडान और एमपीवी।",
      mr: "व्यावसायिक आणि कौटुंबिक प्रवासासाठी तयार केलेल्या स्वच्छ एसी सेडान आणि एमपीव्ही.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Intercity Route Details",
          hi: "इंटरसिटी मार्ग विवरण",
          mr: "इंटरसिटी मार्ग तपशील",
        },
        content: {
          en: "Covering 150 kilometers, the road trip between {origin} and {destination} is a major commercial corridor. Our drivers ensure smooth driving, clean rest stops, and punctual drops to any city address.",
          hi: "150 किलोमीटर की दूरी तय करते हुए, {origin} और {destination} के बीच की सड़क यात्रा एक प्रमुख व्यावसायिक गलियारा है। हमारे ड्राइवर शहर के किसी भी पते पर सुगम ड्राइविंग और समय पर ड्रॉप सुनिश्चित करते हैं।",
          mr: "१५० किलोमीटर अंतर पार करणारा {origin} आणि {destination} दरम्यानचा रस्ता हा एक प्रमुख व्यापारी मार्ग आहे. आमचे चालक शहरातील कोणत्याही पत्त्यावर सुरक्षित आणि वेळेवर पोहोचण्याची खात्री देतात.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Why Travel With Us?",
          hi: "हमारे साथ यात्रा क्यों करें?",
          mr: "आमच्यासोबत प्रवास का करावा?",
        },
        intro: {
          en: "Key features of our intercity Cab / Taxi Rental Service:",
          hi: "हमारी इंटरसिटी कैब / टैक्सी रेंटल सेवा की मुख्य विशेषताएं:",
          mr: "आमच्या इंटरसिटी कॅब / टॅक्सी रेंटल सेवेची प्रमुख वैशिष्ट्ये:",
        },
        items: {
          en: [
            "Fixed pricing with clear fare estimates before booking",
            "Well-maintained AC cars sanitized before every journey",
            "Experienced drivers who know city bypasses and short routes",
          ],
          hi: [
            "बुकिंग से पहले स्पष्ट किराया अनुमान के साथ निश्चित मूल्य निर्धारण",
            "प्रत्येक यात्रा से पहले सैनिटाइज की गई सुव्यवस्थित एसी कारें",
            "शहर के बाईपास और छोटे मार्गों के जानकार अनुभवी ड्राइवर",
          ],
          mr: [
            "बुकिंगपूर्वी स्पष्ट दर अंदाजासह निश्चित किंमत",
            "प्रत्येक प्रवासापूर्वी स्वच्छ केलेल्या सुस्थितीतील एसी गाड्या",
            "शहराचे बायपास आणि जवळच्या मार्गांची माहिती असलेले अनुभवी चालक",
          ],
        },
        closing: {
          en: "Book your Ahmednagar Cab / Taxi Rental Service today!",
          hi: "आज ही अपनी अहमदनगर कैब / टैक्सी रेंटल सेवा बुक करें!",
          mr: "आजच तुमची अहमदनगर कॅब / टॅक्सी रेंटल सेवा बुक करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Intercity Taxi",
    baseMetaDesc:
      "Reliable intercity Cab / Taxi Rental Service between {origin} and {destination}. Book online at low rates.",
  },

  // ─── 11. MAIN HUBS <-> VERUL (ELLORA) ────────────────────────────────────
  {
    id: "dyn-hub-verul",
    baseOrigin: "Nashik",
    baseDestination: "Verul Ellora",
    distanceKm: 170,
    estimatedTime: "3.5 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-verul.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Dedicated heritage tour cab rentals between {origin} and {destination} Caves. Visit the magnificent Kailasa Temple and rock-cut cave architecture in absolute comfort.",
      hi: "{origin} और {destination} गुफाओं के बीच समर्पित हेरिटेज टूर कैब रेंटल। भव्य कैलाश मंदिर और चट्टानों को काटकर बनाई गई गुफा वास्तुकला के पूर्ण आराम से दर्शन करें।",
      mr: "{origin} आणि {destination} लेण्यांदरम्यान समर्पित हेरिटेज टूर कॅब रेंटल. भव्य कैलास मंदिर आणि कोरीव लेण्यांच्या स्थापत्यकलेचे पूर्ण आरामात दर्शन घ्या.",
    },
    fleetDescription: {
      en: "Comfortable touring sedans, 7-seater MPVs, and group Tempo Travellers.",
      hi: "आरामदायक टूरिंग सेडान, 7-सीटर एमपीवी और ग्रुप टेम्पो ट्रैवलर।",
      mr: "आरामदायी टूरिंग सेडान, ७-सीटर एमपीव्ही आणि ग्रुप टेम्पो ट्रॅव्हलर.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Verul Kailasa Temple & Ellora Sightseeing",
          hi: "वेरुल कैलाश मंदिर और एलोरा दर्शनीय स्थल",
          mr: "वेरूळ कैलास मंदिर आणि एलोरा पर्यटन",
        },
        content: {
          en: "Verul (Ellora) is world-famous for its monolithic rock-cut cave temples, culminating in the awe-inspiring Cave 16 (Kailasa Temple). Our sightseeing cab packages from {origin} give you complete freedom to explore at your own pace.",
          hi: "वेरुल (एलोरा) अपने अखंड शैलकृत गुफा मंदिरों के लिए विश्व प्रसिद्ध है, जिसमें विस्मयकारी गुफा 16 (कैलाश मंदिर) प्रमुख है। {origin} से हमारे दर्शनीय स्थल कैब पैकेज आपको अपनी गति से घूमने की पूरी स्वतंत्रता देते हैं।",
          mr: "वेरूळ (एलोरा) हे आपल्या अखंड कोरीव लेणी मंदिरांसाठी जगप्रसिद्ध असून त्यातील गुहा क्रमांक १६ (कैलास मंदिर) अद्वितीय आहे. {origin} येथून आमचे पर्यटन कॅब पॅकेजेस तुम्हाला तुमच्या सोयीनुसार फिरण्याचे पूर्ण स्वातंत्र्य देतात.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Heritage Package Highlights",
          hi: "हेरिटेज पैकेज की विशेषताएं",
          mr: "हेरिटेज पॅकेजची वैशिष्ट्ये",
        },
        intro: {
          en: "Special inclusions for tourists:",
          hi: "पर्यटकों के लिए विशेष सुविधाएं:",
          mr: "पर्यटकांसाठी खास समावेश:",
        },
        items: {
          en: [
            "Doorstep pick-up from any address or hotel in {origin}",
            "Flexible waiting time included for cave exploration and photography",
            "Polite drivers who know local tourist routes and food plazas",
          ],
          hi: [
            "{origin} के किसी भी पते या होटल से डोरस्टेप पिकअप",
            "गुफा भ्रमण और फोटोग्राफी के लिए लचीला प्रतीक्षा समय शामिल",
            "स्थानीय पर्यटन मार्गों और फूड प्लाजा के जानकार विनम्र ड्राइवर",
          ],
          mr: [
            "{origin} मधील कोणत्याही पत्त्यावरून किंवा हॉटेलमधून डोअरस्टेप पिकअप",
            "लेणी पाहण्यासाठी आणि फोटोग्राफीसाठी लवचिक प्रतीक्षा वेळ समाविष्ट",
            "स्थानिक पर्यटन मार्ग आणि फूड प्लाझाची माहिती असलेले नम्र चालक",
          ],
        },
        closing: {
          en: "Book your Verul Ellora heritage cab package today!",
          hi: "आज ही अपना वेरुल एलोरा हेरिटेज कैब पैकेज बुक करें!",
          mr: "आजच तुमचे वेरूळ एलोरा हेरिटेज कॅब पॅकेज बुक करा!",
        },
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab | Ellora Caves Tour",
    baseMetaDesc:
      "Book sightseeing Cabs / Taxi to {destination} from {origin}. Clean AC cars and fixed rates.",
  },

  // ─── 12. MAIN HUBS <-> AJANTA ELLORA COMBINED ────────────────────────────
  {
    id: "dyn-hub-ajanta-ellora",
    baseOrigin: "Nashik",
    baseDestination: "Ajanta Ellora",
    distanceKm: 200,
    estimatedTime: "4 Hours",
    image: "/images/nashik-ajanta.jpg",
    baseDestinationImage: "/images/ajanta-nashik.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    introTemplate: {
      en: "Complete 2-day heritage cave tour packages connecting {origin} and {destination}. Explore ancient Buddhist paintings and monolithic cave temples with our private, air-conditioned Cabs / Taxi.",
      hi: "{origin} और {destination} को जोड़ने वाले संपूर्ण 2-दिवसीय हेरिटेज गुफा टूर पैकेज। हमारी निजी, वातानुकूलित कैब्स के साथ प्राचीन बौद्ध चित्रकला और अखंड गुफा मंदिरों का भ्रमण करें।",
      mr: "{origin} आणि {destination} यांना जोडणारे संपूर्ण २-दिवसीय हेरिटेज लेणी टूर पॅकेजेस. आमच्या खाजगी, वातानुकूलित कॅब्ससह प्राचीन बौद्ध चित्रकला आणि कोरीव लेण्यांना भेट द्या.",
    },
    fleetDescription: {
      en: "Spacious SUVs (Ertiga/Innova Crysta) and Tempo Travellers for tourist groups.",
      hi: "पर्यटक समूहों के लिए विशाल एसयूवी (अर्टिगा/इनोवा क्रिस्टा) और टेम्पो ट्रैवलर।",
      mr: "पर्यटक गटांसाठी प्रशस्त एसयूव्ही (अर्टिगा/इनोव्हा क्रिस्टा) आणि टेम्पो ट्रॅव्हलर.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Complete Ajanta & Ellora Heritage Circuit",
          hi: "संपूर्ण अजंता और एलोरा हेरिटेज सर्किट",
          mr: "संपूर्ण अजिंठा आणि वेरूळ हेरिटेज सर्किट",
        },
        content: {
          en: "Combine both UNESCO World Heritage sites in a single seamless trip. Our private Cabs / Taxi handle all local transfers between Ajanta Caves, Ellora Caves, Bibi Ka Maqbara, and your hotel in Chhatrapati Sambhajinagar.",
          hi: "एक ही सुगम यात्रा में दोनों यूनेस्को विश्व धरोहर स्थलों को शामिल करें। हमारी निजी कैब्स अजंता गुफाओं, एलोरा गुफाओं, बीबी का मकबरा और छत्रपति संभाजीनगर में आपके होटल के बीच सभी स्थानीय ट्रांसफर संभालती हैं।",
          mr: "एकाच अखंड सहलीत दोन्ही युनेस्को जागतिक वारसा स्थळांना भेट द्या. आमच्या खाजगी कॅब्स अजिंठा लेणी, वेरूळ लेणी, बीबी का मकबरा आणि छत्रपती संभाजीनगरमधील तुमच्या हॉटेलदरम्यान सर्व स्थानिक प्रवास हाताळतात.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Tour Features",
          hi: "टूर की विशेषताएं",
          mr: "सहलीची वैशिष्ट्ये",
        },
        intro: {
          en: "Why tourists choose our combined package:",
          hi: "पर्यटक हमारा संयुक्त पैकेज क्यों चुनते हैं:",
          mr: "पर्यटक आमचे एकत्रित पॅकेज का निवडतात:",
        },
        items: {
          en: [
            "Customizable multi-day itinerary starting directly from {origin}",
            "Comfortable AC vehicles with extra legroom for long sightseeing days",
            "Driver lodging and allowances fully transparent and included",
          ],
          hi: [
            "सीधे {origin} से शुरू होने वाला कस्टमाइज़ेबल मल्टी-डे यात्रा कार्यक्रम",
            "लंबे दर्शनीय स्थलों के दिनों के लिए अतिरिक्त लेगरूम वाले आरामदायक एसी वाहन",
            "ड्राइवर के ठहरने और भत्ते पूरी तरह से पारदर्शी और शामिल",
          ],
          mr: [
            "थेट {origin} येथून सुरू होणारा कस्टमाइज्ड मल्टी-डे प्रवास कार्यक्रम",
            "दिवसभराच्या पर्यटनासाठी अधिक लेगरूम असलेली आरामदायी एसी वाहने",
            "चालकाची राहण्याची व्यवस्था आणि भत्ते पूर्णपणे पारदर्शक आणि समाविष्ट",
          ],
        },
        closing: {
          en: "Plan your weekend heritage tour with us now!",
          hi: "अभी हमारे साथ अपने वीकेंड हेरिटेज टूर की योजना बनाएं!",
          mr: "आत्ताच आमच्यासोबत तुमच्या वीकेंड हेरिटेज टूरचे नियोजन करा!",
        },
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Package | Heritage Circuit",
    baseMetaDesc:
      "Combined Ajanta Ellora cave tour packages from {origin}. Book online for best rates.",
  },

  // ─── 13. MAIN HUBS <-> CITY LOCAL TOUR ───────────────────────────────────
  {
    id: "dyn-hub-city-local",
    baseOrigin: "Nashik",
    baseDestination: "City Local Sightseeing",
    distanceKm: 80,
    estimatedTime: "8 Hours / 80 Km",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-city.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    introTemplate: {
      en: "Full-day local city rental Cabs / Taxi for sightseeing, temple visits, shopping, and business meetings in {origin}. Enjoy flexible hourly packages with a dedicated private car and driver.",
      hi: "{origin} में दर्शनीय स्थलों की यात्रा, मंदिर दर्शन, खरीदारी और व्यावसायिक बैठकों के लिए पूरे दिन की लोकल सिटी रेंटल कैब्स। समर्पित निजी कार और ड्राइवर के साथ लचीले प्रति घंटा पैकेज का आनंद लें।",
      mr: "{origin} मधील पर्यटन स्थळे, मंदिर दर्शन, खरेदी आणि व्यावसायिक बैठकांसाठी पूर्ण दिवसाची लोकल सिटी रेंटल कॅब. समर्पित खाजगी कार आणि चालकासह लवचिक तासांच्या पॅकेजेसचा आनंद घ्या.",
    },
    fleetDescription: {
      en: "Hourly package Cabs / Taxi: Dzire, Etios, Ertiga, Innova Crysta.",
      hi: "प्रति घंटा पैकेज कैब्स: डिजायर, इटियोस, अर्टिगा, इनोवा क्रिस्टा।",
      mr: "तासांच्या पॅकेजसाठी कॅब्स: डिझायर, इटिओस, अर्टिगा, इनोव्हा क्रिस्टा.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Full Day Local City Package in {origin}",
          hi: "{origin} में पूरे दिन का लोकल सिटी पैकेज",
          mr: "{origin} मधील पूर्ण दिवसाचे लोकल सिटी पॅकेज",
        },
        content: {
          en: "Explore major attractions, sacred ghats, shopping markets, or business parks in {origin} without booking multiple rides. Our hourly packages give you a private car at your disposal all day.",
          hi: "कई राइड बुक किए बिना {origin} के प्रमुख आकर्षणों, पवित्र घाटों, शॉपिंग बाजारों या बिजनेस पार्कों की सैर करें। हमारे प्रति घंटा पैकेज आपको पूरे दिन के लिए एक निजी कार प्रदान करते हैं।",
          mr: "अनेक राइड्स बुक न करता {origin} मधील प्रमुख आकर्षणे, पवित्र घाट, बाजारपेठा किंवा बिझनेस पार्क्सना भेट द्या. आमचे तासांचे पॅकेजेस तुम्हाला दिवसभर खाजगी कार उपलब्ध करून देतात.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Local Package Features",
          hi: "लोकल पैकेज की विशेषताएं",
          mr: "लोकल पॅकेजची वैशिष्ट्ये",
        },
        intro: {
          en: "Convenient local rental benefits:",
          hi: "सुविधाजनक लोकल रेंटल के लाभ:",
          mr: "सोयीस्कर लोकल रेंटलचे फायदे:",
        },
        items: {
          en: [
            "Standard packages of 8 Hours / 80 Km with flexible extra hour/km add-ons",
            "Doorstep pick-up and drop anywhere within city limits",
            "Polite local drivers familiar with all city shortcuts and parking zones",
          ],
          hi: [
            "लचीले अतिरिक्त घंटे/किमी ऐड-ऑन के साथ 8 घंटे / 80 किमी के मानक पैकेज",
            "शहर की सीमा के भीतर कहीं भी डोरस्टेप पिकअप और ड्रॉप",
            "शहर के सभी शॉर्टकट और पार्किंग जोन के जानकार विनम्र स्थानीय ड्राइवर",
          ],
          mr: [
            "लवचिक अतिरिक्त तास/किमी सुविधेसह ८ तास / ८० किमी चे मानक पॅकेजेस",
            "शहराच्या हद्दीत कोठेही डोअरस्टेप पिकअप आणि ड्रॉप",
            "शहरातील सर्व शॉर्टकट्स आणि पार्किंग झोनची माहिती असलेले नम्र स्थानिक चालक",
          ],
        },
        closing: {
          en: "Book your local city cab rental today!",
          hi: "आज ही अपनी लोकल सिटी कैब रेंटल बुक करें!",
          mr: "आजच तुमची लोकल सिटी कॅब रेंटल बुक करा!",
        },
      },
    ],
    baseMetaTitle: "Local Cab Rental in {origin} | Hourly Packages",
    baseMetaDesc:
      "Book local hourly sightseeing Cabs / Taxi in {origin}. Clean AC cars and polite drivers.",
  },

  // ─── 14. MAIN HUBS <-> LONAVALA ──────────────────────────────────────────
  {
    id: "dyn-hub-lonavala",
    baseOrigin: "Mumbai",
    baseDestination: "Lonavala Khandala",
    distanceKm: 85,
    estimatedTime: "2 Hours",
    image: "/images/nashik-mumbai.jpg",
    baseDestinationImage: "/images/nashik-lonavala.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Escape to the Western Ghats with our scenic hill station getaway Cabs / Taxi connecting {origin} and {destination}. Ideal for weekend family vacations, resort stays, and nature sightseeing.",
      hi: "{origin} और {destination} को जोड़ने वाली हमारी हिल स्टेशन गेटअवे कैब्स के साथ पश्चिमी घाट की सैर करें। वीकेंड पारिवारिक छुट्टियों, रिसॉर्ट स्टे और प्राकृतिक दर्शनीय स्थलों की यात्रा के लिए आदर्श।",
      mr: "{origin} आणि {destination} यांना जोडणाऱ्या आमच्या हिल स्टेशन कॅब्ससह पश्चिम घाटाची सफर करा. वीकेंड कौटुंबिक सहली, रिसॉर्ट मुक्काम आणि निसर्ग पर्यटनासाठी उत्तम.",
    },
    fleetDescription: {
      en: "Comfortable sedans, spacious MPVs (Ertiga), and executive SUVs.",
      hi: "आरामदायक सेडान, विशाल एमपीवी (अर्टिगा) और एग्जीक्यूटिव एसयूवी।",
      mr: "आरामदायी सेडान, प्रशस्त एमपीव्ही (अर्टिगा) आणि एक्झिक्युटिव्ह एसयूव्ही.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Hill Station Getaway To Lonavala & Khandala",
          hi: "लोनावला और खंडाला हिल स्टेशन यात्रा",
          mr: "लोणावळा आणि खंडाळा हिल स्टेशन सहल",
        },
        content: {
          en: "Famous for lush green valleys, Tiger Point, Bhushi Dam, and chikki markets, Lonavala is the perfect mountain escape from {origin}. Enjoy smooth expressway and ghat driving handled by expert highway drivers.",
          hi: "हरी-भरी घाटियों, टाइगर पॉइंट, भुशी डैम और चिक्की बाजारों के लिए प्रसिद्ध लोनावला {origin} से एक बेहतरीन पहाड़ी पर्यटन स्थल है। विशेषज्ञ हाईवे ड्राइवरों के साथ सुगम एक्सप्रेसवे और घाट ड्राइविंग का आनंद लें।",
          mr: "हिरव्यागार दऱ्या, टायगर पॉइंट, भुशी डॅम आणि चिक्की बाजारांसाठी प्रसिद्ध लोणावळा हे {origin} येथून एक उत्तम पर्यटन स्थळ आहे. तज्ज्ञ चालकांसह एक्सप्रेसवे आणि घाट प्रवासाचा आनंद घ्या.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Weekend Getaway Highlights",
          hi: "वीकेंड गेटअवे की मुख्य विशेषताएं",
          mr: "वीकेंड सहलीची प्रमुख वैशिष्ट्ये",
        },
        intro: {
          en: "What you get with our Lonavala cab package:",
          hi: "हमारे लोनावला कैब पैकेज में आपको क्या मिलता है:",
          mr: "आमच्या लोणावळा कॅब पॅकेजमध्ये तुम्हाला काय मिळते:",
        },
        items: {
          en: [
            "Direct resort pick-up and drop options",
            "Customizable sightseeing stopovers at lakes, forts, and viewpoints",
            "All-inclusive fixed fares with no unexpected surge prices",
          ],
          hi: [
            "सीधे रिसॉर्ट पिकअप और ड्रॉप विकल्प",
            "झीलों, किलों और व्यूपॉइंट्स पर कस्टमाइज़ेबल दर्शनीय स्थल पड़ाव",
            "बिना किसी अप्रत्याशित मूल्य वृद्धि के ऑल-इनक्लूसिव निश्चित किराया",
          ],
          mr: [
            "थेट रिसॉर्ट पिकअप आणि ड्रॉप पर्याय",
            "तलाव, किल्ले आणि व्ह्यूपॉइंट्सवर कस्टमाइज्ड थांबे",
            "कोणत्याही अनपेक्षित दरवाढीशिवाय ऑल-इनक्लूसिव्ह निश्चित दर",
          ],
        },
        closing: {
          en: "Book your hill station trip today!",
          hi: "आज ही अपनी हिल स्टेशन यात्रा बुक करें!",
          mr: "आजच तुमची हिल स्टेशन सहल बुक करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Hill Station Taxi",
    baseMetaDesc:
      "Book hill station weekend Cabs / Taxi between {origin} and {destination}. Instant online rates.",
  },

  // ─── 15. MAIN HUBS <-> MAHABALESHWAR ─────────────────────────────────────
  {
    id: "dyn-hub-mahabaleshwar",
    baseOrigin: "Pune",
    baseDestination: "Mahabaleshwar",
    distanceKm: 120,
    estimatedTime: "3 Hours",
    image: "/images/nashik-pune.jpg",
    baseDestinationImage: "/images/nashik-mahabaleshwar.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Strawberry farm and hill station tour packages connecting {origin} and {destination}. Enjoy scenic mountain drives through Pasrani Ghat with our safe outstation Cabs / Taxi.",
      hi: "{origin} और {destination} को जोड़ने वाले स्ट्रॉबेरी फार्म और हिल स्टेशन टूर पैकेज। हमारी सुरक्षित आउटस्टेशन कैब्स के साथ पसरनी घाट से होकर सुंदर पहाड़ी ड्राइव का आनंद लें।",
      mr: "{origin} आणि {destination} यांना जोडणारे स्ट्रॉबेरी फार्म आणि हिल स्टेशन टूर पॅकेजेस. आमच्या सुरक्षित आउटस्टेशन कॅब्ससह पसरणी घाटातून निसर्गरम्य प्रवासाचा आनंद घ्या.",
    },
    fleetDescription: {
      en: "Clean AC sedans, Ertigas, Innova Crystas, and Tempo Travellers with mountain drivers.",
      hi: "पहाड़ी मार्गों के अनुभवी ड्राइवरों के साथ स्वच्छ एसी सेडान, अर्टिगा, इनोवा क्रिस्टा और टेम्पो ट्रैवलर।",
      mr: "घाट चालकांसह स्वच्छ एसी सेडान, अर्टिगा, इनोव्हा क्रिस्टा आणि टेम्पो ट्रॅव्हलर.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Hill Station Tour To Mahabaleshwar & Panchgani",
          hi: "महाबलेश्वर और पंचगनी हिल स्टेशन टूर",
          mr: "महाबळेश्वर आणि पाचगणी हिल स्टेशन सहल",
        },
        content: {
          en: "Visit Venna Lake, Arthur's Seat, Mapro Garden strawberry farms, and Table Land with our private Cabs / Taxi from {origin}. We offer flexible 2-day or multi-day holiday packages tailored to your schedule.",
          hi: "{origin} से हमारी निजी कैब्स के साथ वेन्ना झील, आर्थर सीट, मैप्रो गार्डन स्ट्रॉबेरी फार्म और टेबल लैंड की सैर करें। हम आपकी समय-सारणी के अनुसार लचीले 2-दिवसीय या मल्टी-डे हॉलिडे पैकेज प्रदान करते हैं।",
          mr: "{origin} येथून आमच्या खाजगी कॅब्ससह वेण्णा लेक, आर्थर सीट, मॅप्रो गार्डन स्ट्रॉबेरी फार्म आणि टेबल लँडला भेट द्या. आम्ही तुमच्या वेळेनुसार लवचिक २-दिवसीय किंवा मल्टी-डे हॉलिडे पॅकेजेस देतो.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Holiday Package Inclusions",
          hi: "हॉलिडे पैकेज में शामिल सुविधाएं",
          mr: "हॉलिडे पॅकेजमधील समावेश",
        },
        intro: {
          en: "Key features for vacationers:",
          hi: "पर्यटकों के लिए मुख्य विशेषताएं:",
          mr: "पर्यटकांसाठी प्रमुख वैशिष्ट्ये:",
        },
        items: {
          en: [
            "Doorstep pickup in {origin} and direct hotel drop in Mahabaleshwar",
            "Hill-experienced drivers familiar with Pasrani Ghat and local points",
            "Customizable sightseeing itineraries for families and groups",
          ],
          hi: [
            "{origin} में डोरस्टेप पिकअप और महाबलेश्वर में सीधा होटल ड्रॉप",
            "पसरनी घाट और स्थानीय स्थलों के जानकार पहाड़ी-अनुभवी ड्राइवर",
            "परिवारों और समूहों के लिए कस्टमाइज़ेबल दर्शनीय स्थल यात्रा कार्यक्रम",
          ],
          mr: [
            "{origin} मध्ये डोअरस्टेप पिकअप आणि महाबळेश्वरमध्ये थेट हॉटेल ड्रॉप",
            "पसरणी घाट आणि स्थानिक पर्यटन स्थळांची माहिती असलेले अनुभवी चालक",
            "कुटुंबे आणि गटांसाठी कस्टमाइज्ड पर्यटन वेळापत्रक",
          ],
        },
        closing: {
          en: "Plan your Mahabaleshwar holiday with us today!",
          hi: "आज ही हमारे साथ अपनी महाबलेश्वर छुट्टियों की योजना बनाएं!",
          mr: "आजच आमच्यासोबत तुमच्या महाबळेश्वर सुट्टीचे नियोजन करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Holiday Package",
    baseMetaDesc:
      "Book holiday tour Cabs / Taxi between {origin} and {destination}. Scenic mountain drivers.",
  },

  // ─── 16. MAIN HUBS <-> GOA ───────────────────────────────────────────────
  {
    id: "dyn-hub-goa",
    baseOrigin: "Pune",
    baseDestination: "Goa",
    distanceKm: 450,
    estimatedTime: "9 Hours",
    image: "/images/nashik-pune.jpg",
    baseDestinationImage: "/images/nashik-goa.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Experience the ultimate coastal road trip connecting {origin} and {destination}. Our long-distance outstation Cab / Taxi Rental Service guarantees a smooth, safe, and scenic journey straight to North or South Goa beaches.",
      hi: "{origin} और {destination} को जोड़ने वाली यादगार तटीय रोड ट्रिप का अनुभव करें। हमारी लंबी दूरी की आउटस्टेशन कैब सेवा सीधे उत्तरी या दक्षिणी गोवा के समुद्र तटों तक सुगम, सुरक्षित और सुंदर यात्रा की गारंटी देती है।",
      mr: "{origin} आणि {destination} यांना जोडणाऱ्या अविस्मरणीय कोस्टल रोड ट्रिपचा अनुभव घ्या. आमची लांब पल्ल्याची आउटस्टेशन कॅब सेवा थेट उत्तर किंवा दक्षिण गोव्याच्या समुद्रकिनाऱ्यांपर्यंत सुरक्षित व निसर्गरम्य प्रवासाची हमी देते.",
    },
    fleetDescription: {
      en: "Spacious Ertigas, Innova Crystas, and 17-seater Tempo Travellers designed for long highway trips.",
      hi: "लंबी हाईवे यात्राओं के लिए डिज़ाइन की गई विशाल अर्टिगा, इनोवा क्रिस्टा और 17-सीटर टेम्पो ट्रैवलर।",
      mr: "लांबच्या महामार्ग प्रवासासाठी तयार केलेल्या प्रशस्त अर्टिगा, इनोव्हा क्रिस्टा आणि १७-सीटर टेम्पो ट्रॅव्हलर.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Long-Distance Coastal Road Trip",
          hi: "लंबी दूरी की तटीय रोड ट्रिप",
          mr: "लांब पल्ल्याची कोस्टल रोड ट्रिप",
        },
        content: {
          en: "Travel in luxury across state lines without train waiting lists or crowded flight connections. Our long-distance highway drivers ensure safe overnight or daytime travel straight to your beach resort in Goa.",
          hi: "ट्रेन की प्रतीक्षा सूची या भीड़भाड़ वाली उड़ानों के बिना अंतर-राज्यीय लक्ज़री यात्रा करें। हमारे लंबी दूरी के हाईवे ड्राइवर सीधे गोवा में आपके बीच रिसॉर्ट तक सुरक्षित रात्रि या दिन की यात्रा सुनिश्चित करते हैं।",
          mr: "रेल्वेच्या प्रतीक्षा यादीशिवाय किंवा गर्दीच्या फ्लाइटशिवाय आंतरराज्यीय आरामदायी प्रवास करा. आमचे लांब पल्ल्याचे महामार्ग चालक थेट गोव्यातील तुमच्या बीच रिसॉर्टपर्यंत सुरक्षित रात्रीचा किंवा दिवसाचा प्रवास सुनिश्चित करतात.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Outstation Trip Highlights",
          hi: "आउटस्टेशन यात्रा की मुख्य विशेषताएं",
          mr: "आउटस्टेशन सहलीची मुख्य वैशिष्ट्ये",
        },
        intro: {
          en: "Why travel long-distance with us:",
          hi: "हमारे साथ लंबी दूरी की यात्रा क्यों करें:",
          mr: "आमच्यासोबत लांब पल्ल्याचा प्रवास का करावा:",
        },
        items: {
          en: [
            "Commercial All-India tourist permit vehicles with all tax paperwork handled",
            "Spacious legroom and ample luggage capacity for group holidays",
            "Clean highway meal stops at verified restaurants along the route",
          ],
          hi: [
            "सभी कर कागजी कार्रवाई के साथ कमर्शियल ऑल-इंडिया टूरिस्ट परमिट वाहन",
            "ग्रुप हॉलिडे के लिए विशाल लेगरूम और पर्याप्त सामान क्षमता",
            "मार्ग में सत्यापित रेस्तरां में स्वच्छ हाईवे भोजन पड़ाव",
          ],
          mr: [
            "सर्व कर कागदपत्रांसह कमर्शियल ऑल-इंडिया टूरिस्ट परमिट वाहने",
            "ग्रुप हॉलिडेसाठी प्रशस्त लेगरूम आणि पुरेशी सामान क्षमता",
            "मार्गावरील प्रमाणित रेस्टॉरंट्समध्ये स्वच्छ महामार्ग भोजन थांबे",
          ],
        },
        closing: {
          en: "Book your Goa road trip package now!",
          hi: "अभी अपना गोवा रोड ट्रिप पैकेज बुक करें!",
          mr: "आत्ताच तुमचे गोवा रोड ट्रिप पॅकेज बुक करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Outstation Road Trip",
    baseMetaDesc:
      "Long distance outstation Cabs / Taxi between {origin} and {destination}. All-India permit vehicles.",
  },

  // ─── 17. MAIN HUBS <-> KONKAN ────────────────────────────────────────────
  {
    id: "dyn-hub-konkan",
    baseOrigin: "Mumbai",
    baseDestination: "Konkan Beach Tour",
    distanceKm: 320,
    estimatedTime: "7 Hours",
    image: "/images/nashik-mumbai.jpg",
    baseDestinationImage: "/images/nashik-konkan.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    introTemplate: {
      en: "Beach holiday tour packages connecting {origin} with Ganpatipule, Ratnagiri, Malvan, and Tarkarli along the breathtaking Konkan coastline.",
      hi: "मनमोहक कोंकण तटरेखा के साथ {origin} को गणपतिपुले, रत्नागिरी, मालवण और तारकरली से जोड़ने वाले बीच हॉलिडे टूर पैकेज।",
      mr: "निसर्गरम्य कोकण किनारपट्टीवरील गणपतीपुळे, रत्नागिरी, मालवण आणि तारकर्ली यांना {origin} शी जोडणारे बीच हॉलिडे टूर पॅकेजेस.",
    },
    fleetDescription: {
      en: "Comfortable long-distance touring sedans and SUVs.",
      hi: "आरामदायक लंबी दूरी की टूरिंग सेडान और एसयूवी।",
      mr: "आरामदायी लांब पल्ल्याच्या टूरिंग सेडान आणि एसयूव्ही.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Coastal Konkan Beach Vacation",
          hi: "तटीय कोंकण बीच वेकेशन",
          mr: "कोकण समुद्रकिनारा सुट्टी सहल",
        },
        content: {
          en: "Discover pristine beaches, coastal forts, and authentic Malvani cuisine with private cab tours starting from {origin}. Enjoy flexible travel schedules through coastal highways.",
          hi: "{origin} से शुरू होने वाले निजी कैब टूर के साथ स्वच्छ समुद्र तटों, तटीय किलों और प्रामाणिक मालवणी व्यंजनों का आनंद लें। तटीय राजमार्गों के माध्यम से लचीली यात्रा का अनुभव करें।",
          mr: "{origin} येथून सुरू होणाऱ्या खाजगी कॅब टूरसह स्वच्छ समुद्रकिनारे, सागरी किल्ले आणि अस्सल मालवणी खाद्यपदार्थांचा आस्वाद घ्या. किनारी महामार्गांवरून लवचिक प्रवासाचा आनंद घ्या.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Konkan Package Highlights",
          hi: "कोंकण पैकेज की मुख्य विशेषताएं",
          mr: "कोकण पॅकेजची प्रमुख वैशिष्ट्ये",
        },
        intro: {
          en: "Inclusions for family beach holidays:",
          hi: "पारिवारिक बीच छुट्टियों में शामिल सुविधाएं:",
          mr: "कौटुंबिक बीच सुट्ट्यांमधील समावेश:",
        },
        items: {
          en: [
            "Customizable itineraries covering Ganpatipule temple, Alibaug, and Tarkarli water sports",
            "Spacious AC vehicles equipped for long coastal drives",
            "Experienced drivers who know coastal routes and ferry points",
          ],
          hi: [
            "गणपतिपुले मंदिर, अलीबाग और तारकरली वॉटर स्पोर्ट्स को कवर करने वाले कस्टमाइज़ेबल यात्रा कार्यक्रम",
            "लंबी तटीय ड्राइव के लिए सुसज्जित विशाल एसी वाहन",
            "तटीय मार्गों और फेरी पॉइंट्स के जानकार अनुभवी ड्राइवर",
          ],
          mr: [
            "गणपतीपुळे मंदिर, अलिबाग आणि तारकर्ली वॉटर स्पोर्ट्स समाविष्ट असलेले कस्टमाइज्ड वेळापत्रक",
            "लांबच्या किनारी प्रवासासाठी सुसज्ज प्रशस्त एसी वाहने",
            "किनारी मार्ग आणि फेरी पॉइंट्सची माहिती असलेले अनुभवी चालक",
          ],
        },
        closing: {
          en: "Book your Konkan beach escape today!",
          hi: "आज ही अपनी कोंकण बीच यात्रा बुक करें!",
          mr: "आजच तुमची कोकण बीच सहल बुक करा!",
        },
      },
    ],
    baseMetaTitle: "{origin} to {destination} Cab Package | Coastal Vacation",
    baseMetaDesc:
      "Coastal beach tour Cabs / Taxi connecting {origin} and {destination}. Instant booking.",
  },

  // ─── 18. MAIN HUBS <-> NAGPUR ────────────────────────────────────────────
  {
    id: "dyn-hub-nagpur",
    baseOrigin: "Nashik",
    baseDestination: "Nagpur",
    distanceKm: 530,
    estimatedTime: "7 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-nagpur.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    introTemplate: {
      en: "Superfast expressway transfers connecting {origin} and {destination} via the Samruddhi Mahamarg. Experience smooth, high-speed travel across Maharashtra in private AC Cabs / Taxi.",
      hi: "समृद्धि महामार्ग के माध्यम से {origin} और {destination} को जोड़ने वाली सुपरफास्ट एक्सप्रेसवे कैब सेवा। निजी एसी कैब्स में पूरे महाराष्ट्र में सुगम, हाई-स्पीड यात्रा का अनुभव करें।",
      mr: "समृद्धी महामार्गाद्वारे {origin} आणि {destination} यांना जोडणारी सुपरफास्ट एक्सप्रेसवे कॅब सेवा. खाजगी एसी कॅब्समध्ये संपूर्ण महाराष्ट्रात वेगवान आणि आरामदायी प्रवासाचा अनुभव घ्या.",
    },
    fleetDescription: {
      en: "Expressway-certified sedans (Dzire/Etios) and executive SUVs (Innova Crysta).",
      hi: "एक्सप्रेसवे-प्रमाणित सेडान (डिजायर/इटियोस) और एग्जीक्यूटिव एसयूवी (इनोवा क्रिस्टा)।",
      mr: "एक्सप्रेसवे-प्रमाणित सेडान (डिझायर/इटिओस) आणि एक्झिक्युटिव्ह एसयूव्ही (इनोव्हा क्रिस्टा).",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Samruddhi Mahamarg Express Corridor",
          hi: "समृद्धि महामार्ग एक्सप्रेस कॉरिडोर",
          mr: "समृद्धी महामार्ग एक्सप्रेस कॉरिडॉर",
        },
        content: {
          en: "Travel seamlessly between {origin} and the Vidarbha region. Thanks to the Samruddhi Mahamarg expressway, long-distance road travel is now fast, safe, and remarkably smooth.",
          hi: "{origin} और विदर्भ क्षेत्र के बीच निर्बाध रूप से यात्रा करें। समृद्धि महामार्ग एक्सप्रेसवे के कारण लंबी दूरी की सड़क यात्रा अब तेज, सुरक्षित और बेहद सुगम हो गई है।",
          mr: "{origin} आणि विदर्भ प्रदेशादरम्यान अखंड प्रवास करा. समृद्धी महामार्ग एक्सप्रेसवेमुळे लांब पल्ल्याचा रस्ते प्रवास आता वेगवान, सुरक्षित आणि अत्यंत सुखकर झाला आहे.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Expressway Service Advantages",
          hi: "एक्सप्रेसवे सेवा के लाभ",
          mr: "एक्सप्रेसवे सेवेचे फायदे",
        },
        intro: {
          en: "Why choose our express highway Cabs / Taxi:",
          hi: "हमारी एक्सप्रेस हाईवे कैब्स क्यों चुनें:",
          mr: "आमच्या एक्सप्रेस हायवे कॅब्स का निवडाव्यात:",
        },
        items: {
          en: [
            "Expressway-tested vehicles maintained for high-speed cruising",
            "Professional drivers trained for long expressway corridors",
            "Fixed all-inclusive pricing covering expressway tolls",
          ],
          hi: [
            "हाई-स्पीड क्रूज़िंग के लिए सुव्यवस्थित एक्सप्रेसवे-परीक्षित वाहन",
            "लंबे एक्सप्रेसवे कॉरिडोर के लिए प्रशिक्षित पेशेवर ड्राइवर",
            "एक्सप्रेसवे टोल सहित निश्चित ऑल-इनक्लूसिव किराया",
          ],
          mr: [
            "हाय-स्पीड प्रवासासाठी सुस्थितीतील एक्सप्रेसवे-प्रमाणित वाहने",
            "लांबच्या एक्सप्रेसवे कॉरिडॉरसाठी प्रशिक्षित व्यावसायिक चालक",
            "एक्सप्रेसवे टोलसह निश्चित ऑल-इनक्लूसिव्ह दर",
          ],
        },
        closing: {
          en: "Book your fast Samruddhi Mahamarg cab now!",
          hi: "अभी अपनी तेज समृद्धि महामार्ग कैब बुक करें!",
          mr: "आत्ताच तुमची वेगवान समृद्धी महामार्ग कॅब बुक करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Express Corridor",
    baseMetaDesc:
      "Book fast Samruddhi Mahamarg Cabs / Taxi between {origin} and {destination}. Best rates.",
  },

  // ─── 19. MAIN HUBS <-> INDORE ────────────────────────────────────────────
  {
    id: "dyn-hub-indore",
    baseOrigin: "Nashik",
    baseDestination: "Indore",
    distanceKm: 410,
    estimatedTime: "8 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-indore.webp",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    introTemplate: {
      en: "Inter-state outstation Cab / Taxi Rental Services connecting Maharashtra ({origin}) with Madhya Pradesh ({destination}). Perfect for business drops, family trips, and pilgrimage extensions to Mahakaleshwar Ujjain.",
      hi: "महाराष्ट्र ({origin}) को मध्य प्रदेश ({destination}) से जोड़ने वाली अंतर-राज्यीय आउटस्टेशन कैब / टैक्सी सेवाएं। व्यावसायिक यात्रा, पारिवारिक भ्रमण और महाकालेश्वर उज्जैन तीर्थयात्रा के लिए उत्तम।",
      mr: "महाराष्ट्र ({origin}) आणि मध्य प्रदेश ({destination}) यांना जोडणाऱ्या आंतरराज्यीय आउटस्टेशन कॅब / टॅक्सी सेवा. व्यावसायिक प्रवास, कौटुंबिक सहली आणि महाकालेश्वर उज्जैन तीर्थयात्रेसाठी उत्तम.",
    },
    fleetDescription: {
      en: "All-India tourist permit Cabs / Taxi with expert inter-state highway drivers.",
      hi: "विशेषज्ञ अंतर-राज्यीय हाईवे ड्राइवरों के साथ ऑल-इंडिया टूरिस्ट परमिट कैब्स।",
      mr: "तज्ज्ञ आंतरराज्यीय महामार्ग चालकांसह ऑल-इंडिया टूरिस्ट परमिट कॅब्स.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Inter-State Highway Journey To Indore & Ujjain",
          hi: "इंदौर और उज्जैन के लिए अंतर-राज्यीय हाईवे यात्रा",
          mr: "इंदूर आणि उज्जैनसाठी आंतरराज्यीय महामार्ग प्रवास",
        },
        content: {
          en: "Connect between {origin} and Indore via NH52. We offer direct door-to-door Cab / Taxi Rental Services with all border taxes, toll permits, and driver allowances pre-calculated for transparent billing.",
          hi: "NH52 के माध्यम से {origin} और इंदौर के बीच जुड़ें। हम पारदर्शी बिलिंग के लिए सभी सीमा करों, टोल परमिट और ड्राइवर भत्तों की पूर्व-गणना के साथ सीधी डोर-टू-डोर कैब सेवाएं प्रदान करते हैं।",
          mr: "NH52 द्वारे {origin} आणि इंदूर दरम्यान प्रवास करा. आम्ही पारदर्शक बिलिंगसाठी सर्व सीमा कर, टोल परमिट आणि चालक भत्त्यांसह थेट डोअर-टू-डोअर कॅब सेवा देतो.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Inter-State Service Highlights",
          hi: "अंतर-राज्यीय सेवा की मुख्य विशेषताएं",
          mr: "आंतरराज्यीय सेवेची मुख्य वैशिष्ट्ये",
        },
        intro: {
          en: "Key benefits of our long-distance transfers:",
          hi: "हमारी लंबी दूरी की यात्राओं के प्रमुख लाभ:",
          mr: "आमच्या लांब पल्ल्याच्या प्रवासाचे मुख्य फायदे:",
        },
        items: {
          en: [
            "Commercial All-India tourist permit vehicles for smooth border crossing",
            "Punctual doorstep pickup and direct hotel drops",
            "Optional temple tour add-ons for Mahakaleshwar Jyotirlinga in Ujjain",
          ],
          hi: [
            "सुगम सीमा पार करने के लिए कमर्शियल ऑल-इंडिया टूरिस्ट परमिट वाहन",
            "समयनिष्ठ डोरस्टेप पिकअप और सीधे होटल ड्रॉप",
            "उज्जैन में महाकालेश्वर ज्योतिर्लिंग के लिए वैकल्पिक मंदिर दर्शन ऐड-ऑन",
          ],
          mr: [
            "सुलभ सीमा ओलांडण्यासाठी कमर्शियल ऑल-इंडिया टूरिस्ट परमिट वाहने",
            "वक्तशीर डोअरस्टेप पिकअप आणि थेट हॉटेल ड्रॉप",
            "उज्जैनमधील महाकालेश्वर ज्योतिर्लिंग दर्शनासाठी पर्यायी टूर सुविधा",
          ],
        },
        closing: {
          en: "Book your inter-state cab package today!",
          hi: "आज ही अपना अंतर-राज्यीय कैब पैकेज बुक करें!",
          mr: "आजच तुमचे आंतरराज्यीय कॅब पॅकेज बुक करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Inter-State Taxi",
    baseMetaDesc:
      "Inter-state outstation Cabs / Taxi between {origin} and {destination}. All-India permit vehicles.",
  },

  // ─── 20. MAIN HUBS <-> JALNA ─────────────────────────────────────────────
  {
    id: "dyn-hub-jalna",
    baseOrigin: "Nashik",
    baseDestination: "Jalna",
    distanceKm: 240,
    estimatedTime: "4 Hours",
    image: "/images/nashik-jalna.webp",
    baseDestinationImage: "/images/jalna.webp",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: false,
    introTemplate: {
      en: "Direct Samruddhi Mahamarg expressway transfers connecting {origin} and {destination}. Reliable intercity Cabs / Taxi for commercial trips, steel hub visits, and family travel.",
      hi: "{origin} और {destination} को जोड़ने वाली सीधी समृद्धि महामार्ग एक्सप्रेसवे ट्रांसफर सेवा। व्यावसायिक यात्राओं, स्टील हब विजिट और पारिवारिक यात्रा के लिए विश्वसनीय इंटरसिटी कैब्स।",
      mr: "{origin} आणि {destination} यांना जोडणारी थेट समृद्धी महामार्ग एक्सप्रेसवे ट्रान्सफर सेवा. व्यावसायिक प्रवास, स्टील हब भेटी आणि कौटुंबिक सहलींसाठी विश्वासार्ह इंटरसिटी कॅब्स.",
    },
    fleetDescription: {
      en: "Clean AC sedans, Ertigas, and Innova Crystas.",
      hi: "स्वच्छ एसी सेडान, अर्टिगा और इनोवा क्रिस्टा।",
      mr: "स्वच्छ एसी सेडान, अर्टिगा आणि इनोव्हा क्रिस्टा.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Expressway Transit To Jalna",
          hi: "जालना के लिए एक्सप्रेसवे यात्रा",
          mr: "जालन्यासाठी एक्सप्रेसवे प्रवास",
        },
        content: {
          en: "Travel quickly between {origin} and Jalna via the direct Samruddhi Mahamarg expressway corridor. Our service provides door-to-door pickups with fixed, transparent pricing.",
          hi: "सीधे समृद्धि महामार्ग एक्सप्रेसवे कॉरिडोर के माध्यम से {origin} और जालना के बीच तेजी से यात्रा करें। हमारी सेवा निश्चित, पारदर्शी किराए के साथ डोर-टू-डोर पिकअप प्रदान करती है।",
          mr: "थेट समृद्धी महामार्ग एक्सप्रेसवे कॉरिडॉरद्वारे {origin} आणि जालना दरम्यान जलद प्रवास करा. आमची सेवा निश्चित आणि पारदर्शक दरांसह डोअर-टू-डोअर पिकअप देते.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Service Highlights",
          hi: "सेवा की मुख्य विशेषताएं",
          mr: "सेवेची मुख्य वैशिष्ट्ये",
        },
        intro: {
          en: "Guaranteed comfort and speed:",
          hi: "सुनिश्चित आराम और गति:",
          mr: "हमीपूर्वक आराम आणि वेग:",
        },
        items: {
          en: [
            "Fast expressway routing with minimal travel time",
            "Clean vehicles equipped with air conditioning and luggage space",
            "24/7 customer support for early morning or late night pickups",
          ],
          hi: [
            "न्यूनतम यात्रा समय के साथ तेज एक्सप्रेसवे रूटिंग",
            "एयर कंडीशनिंग और सामान की जगह से सुसज्जित स्वच्छ वाहन",
            "सुबह जल्दी या देर रात पिकअप के लिए 24/7 ग्राहक सहायता",
          ],
          mr: [
            "कमीत कमी प्रवास वेळेसह वेगवान एक्सप्रेसवे मार्ग",
            "एअर कंडिशनिंग आणि सामानाच्या जागेसह स्वच्छ वाहने",
            "पहाटे किंवा रात्री उशिरा पिकअपसाठी २४/७ ग्राहक सहाय्य",
          ],
        },
        closing: {
          en: "Book your Jalna Cab / Taxi Rental Service today!",
          hi: "आज ही अपनी जालना कैब / टैक्सी रेंटल सेवा बुक करें!",
          mr: "आजच तुमची जालना कॅब / टॅक्सी रेंटल सेवा बुक करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Express Route",
    baseMetaDesc:
      "Expressway cab transfers between {origin} and {destination}. Instant booking.",
  },

  // ─── 21. MAIN HUBS <-> IGATPURI ──────────────────────────────────────────
  {
    id: "dyn-hub-igatpuri",
    baseOrigin: "Mumbai",
    baseDestination: "Igatpuri Hill Station",
    distanceKm: 120,
    estimatedTime: "2.5 Hours",
    image: "/images/nashik-mumbai.jpg",
    baseDestinationImage: "/images/nashik-igatpuri.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Monsoon getaway and resort pickup/drop Cabs / Taxi connecting {origin} and {destination}. Escape to the serene Western Ghats and Vipassana center with our comfortable private Cabs / Taxi.",
      hi: "{origin} और {destination} को जोड़ने वाली मानसून गेटअवे और रिसॉर्ट पिकअप/ड्रॉप कैब्स। हमारी आरामदायक निजी कैब्स के साथ शांत पश्चिमी घाट और विपश्यना केंद्र की सैर करें।",
      mr: "{origin} आणि {destination} यांना जोडणाऱ्या मान्सून सहल आणि रिसॉर्ट पिकअप/ड्रॉप कॅब्स. आमच्या आरामदायी खाजगी कॅब्ससह शांत पश्चिम घाट आणि विपश्यना केंद्राला भेट द्या.",
    },
    fleetDescription: {
      en: "Hill-certified AC sedans, SUVs, and Tempo Travellers.",
      hi: "पहाड़ी-प्रमाणित एसी सेडान, एसयूवी और टेम्पो ट्रैवलर।",
      mr: "घाट-प्रमाणित एसी सेडान, एसयूव्ही आणि टेम्पो ट्रॅव्हलर.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "Kasara Ghat Road Trip To Igatpuri",
          hi: "इगतपुरी के लिए कसारा घाट रोड ट्रिप",
          mr: "इगतपुरीसाठी कसारा घाट रोड ट्रिप",
        },
        content: {
          en: "Located along the Kasara Ghats, Igatpuri is famous for Dhammagiri Vipassana Academy, waterfalls, and luxury nature resorts. Enjoy a scenic hill drive handled by experienced drivers.",
          hi: "कसारा घाट के किनारे स्थित इगतपुरी धम्मगिरि विपश्यना अकादमी, झरनों और लक्ज़री नेचर रिसॉर्ट्स के लिए प्रसिद्ध है। अनुभवी ड्राइवरों के साथ सुंदर पहाड़ी ड्राइव का आनंद लें।",
          mr: "कसारा घाटाच्या कुशीत वसलेले इगतपुरी हे धम्मगिरी विपश्यना अकादमी, धबधबे आणि लक्झरी नेचर रिसॉर्ट्ससाठी प्रसिद्ध आहे. अनुभवी चालकांसह निसर्गरम्य घाट प्रवासाचा आनंद घ्या.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Hill Getaway Advantages",
          hi: "हिल गेटअवे के लाभ",
          mr: "हिल स्टेशन सहलीचे फायदे",
        },
        intro: {
          en: "Why travellers book our Igatpuri Cabs / Taxi:",
          hi: "यात्री हमारी इगतपुरी कैब्स क्यों बुक करते हैं:",
          mr: "प्रवासी आमच्या इगतपुरी कॅब्स का बुक करतात:",
        },
        items: {
          en: [
            "Direct transfers to all top Igatpuri resorts and wellness retreats",
            "Ghat-experienced drivers skilled in rainy and foggy conditions",
            "All-inclusive fixed fares with no hidden mountain surcharges",
          ],
          hi: [
            "इगतपुरी के सभी प्रमुख रिसॉर्ट्स और वेलनेस रिट्रीट्स के लिए सीधा ट्रांसफर",
            "बारिश और कोहरे की स्थिति में कुशल घाट-अनुभवी ड्राइवर",
            "बिना किसी छिपे पहाड़ी शुल्क के ऑल-इनक्लूसिव निश्चित किराया",
          ],
          mr: [
            "इगतपुरीतील सर्व प्रमुख रिसॉर्ट्स आणि वेलनेस रिट्रीट्ससाठी थेट ट्रान्सफर",
            "पाऊस आणि धुक्याच्या परिस्थितीत कुशल घाट-अनुभवी चालक",
            "कोणत्याही छुप्या डोंगरी शुल्काशिवाय ऑल-इनक्लूसिव्ह निश्चित दर",
          ],
        },
        closing: {
          en: "Plan your Igatpuri hill retreat with us!",
          hi: "हमारे साथ अपनी इगतपुरी पहाड़ी यात्रा की योजना बनाएं!",
          mr: "आमच्यासोबत तुमच्या इगतपुरी सहलीचे नियोजन करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Resort Drops",
    baseMetaDesc:
      "Book resort drops and weekend Cabs / Taxi between {origin} and {destination}. Low fares.",
  },

  // ─── 22. MAIN HUBS <-> THANE ─────────────────────────────────────────────
  {
    id: "dyn-hub-thane",
    baseOrigin: "Nashik",
    baseDestination: "Thane",
    distanceKm: 140,
    estimatedTime: "3 Hours",
    image: "/images/nashik-city.jpg",
    baseDestinationImage: "/images/nashik-thane.jpg",
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    introTemplate: {
      en: "Direct door-to-door expressway transfers connecting {origin} with Thane Metropolitan Region. Enjoy comfortable cab drops to Ghodbunder Road, Majiwada, Thane Station, and Eastern Express Highway.",
      hi: "{origin} को ठाणे महानगर क्षेत्र से जोड़ने वाली सीधी डोर-टू-डोर एक्सप्रेसवे कैब सेवा। घोड़बंदर रोड, माजीवाड़ा, ठाणे स्टेशन और ईस्टर्न एक्सप्रेस हाईवे तक आरामदायक कैब ड्रॉप का आनंद लें।",
      mr: "{origin} ला ठाणे महानगर प्रदेशाशी जोडणारी थेट डोअर-टू-डोअर एक्सप्रेसवे कॅब सेवा. घोडबंदर रोड, माजीवडा, ठाणे स्थानक आणि ईस्टर्न एक्सप्रेस हायवेपर्यंत आरामदायी कॅब ड्रॉपचा आनंद घ्या.",
    },
    fleetDescription: {
      en: "Comfortable sedans (Dzire/Etios) and spacious MPVs (Ertiga/Innova Crysta).",
      hi: "आरामदायक सेडान (डिजायर/इटियोस) और विशाल एमपीवी (अर्टिगा/इनोवा क्रिस्टा)।",
      mr: "आरामदायी सेडान (डिझायर/इटिओस) आणि प्रशस्त एमपीव्ही (अर्टिगा/इनोव्हा क्रिस्टा).",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "MMR Expressway Connection",
          hi: "एमएमआर एक्सप्रेसवे कनेक्शन",
          mr: "एमएमआर एक्सप्रेसवे जोडणी",
        },
        content: {
          en: "Thane serves as the gateway to the Mumbai Metropolitan Region. Our private Cab / Taxi Rental Service connects {origin} directly with all major Thane residential and corporate hubs without public transit transfers.",
          hi: "ठाणे मुंबई महानगर क्षेत्र के प्रवेश द्वार के रूप में कार्य करता है। हमारी निजी कैब सेवा बिना किसी सार्वजनिक परिवहन बदलाव के {origin} को सीधे ठाणे के सभी प्रमुख आवासीय और कॉर्पोरेट केंद्रों से जोड़ती है।",
          mr: "ठाणे हे मुंबई महानगर प्रदेशाचे प्रवेशद्वार आहे. आमची खाजगी कॅब सेवा कोणत्याही सार्वजनिक वाहतुकीच्या बदलाशिवाय {origin} ला थेट ठाण्यातील सर्व प्रमुख निवासी आणि कॉर्पोरेट केंद्रांशी जोडते.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Service Benefits",
          hi: "सेवा के लाभ",
          mr: "सेवेचे फायदे",
        },
        intro: {
          en: "Key features of our Thane transfers:",
          hi: "हमारे ठाणे ट्रांसफर की मुख्य विशेषताएं:",
          mr: "आमच्या ठाणे ट्रान्सफरची मुख्य वैशिष्ट्ये:",
        },
        items: {
          en: [
            "Doorstep pick-up and drop across all Thane localities",
            "Clean AC vehicles with toll fees included",
            "Drivers familiar with suburban Mumbai traffic and bypasses",
          ],
          hi: [
            "ठाणे के सभी क्षेत्रों में डोरस्टेप पिकअप और ड्रॉप",
            "टोल शुल्क सहित स्वच्छ एसी वाहन",
            "उपनगरीय मुंबई यातायात और बाईपास के जानकार ड्राइवर",
          ],
          mr: [
            "ठाण्यातील सर्व भागांत डोअरस्टेप पिकअप आणि ड्रॉप",
            "टोल शुल्कासह स्वच्छ एसी वाहने",
            "उपनगरीय मुंबई वाहतूक आणि बायपासची माहिती असलेले चालक",
          ],
        },
        closing: {
          en: "Book your Thane expressway cab now!",
          hi: "अभी अपनी ठाणे एक्सप्रेसवे कैब बुक करें!",
          mr: "आत्ताच तुमची ठाणे एक्सप्रेसवे कॅब बुक करा!",
        },
      },
    ],
    baseMetaTitle:
      "{origin} to {destination} Cab / Taxi Rental Service | Expressway Taxi",
    baseMetaDesc:
      "Direct expressway Cabs / Taxi connecting {origin} and {destination}. On-time door pickups.",
  },
];

// static city packages
export const originalStaticTours = [
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
      hi: "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब में, हम शनि शिंगणापुर की आपकी यात्रा के लिए बजट-अनुकूल कैब रेंटल प्रदान करते हैं। चाहे आप राउंडट्रिप की योजना बना रहे हों या वन-वे राइड की, हम इस पवित्र यात्रा के लिए सबसे विश्वसनीय और किफायती कैब / टैक्सी रेंटल सेवाएं प्रदान करते हैं।",
      mr: "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅबमध्ये, आम्ही शनि शिंगणापूरच्या तुमच्या प्रवासासाठी बजेट-अनुकूल कॅब रेंटल देतो. तुम्ही राउंडट्रिपची योजना आखत असाल किंवा वन-वे राइडची, आम्ही या पवित्र प्रवासासाठी सर्वात विश्वासार्ह आणि परवडणाऱ्या कॅब / टॅक्सी रेंटल सेवा पुरवतो.",
    },
    fleetDescription: {
      en: "Our fleet includes a variety of cars like Swift Dzire, Tempo Traveller, and Innova, ensuring that you find the perfect vehicle to suit your needs. With our easy online booking system, friendly drivers, and well-maintained Cabs / Taxi, we guarantee a smooth and hassle-free experience as you travel to Shani Shingnapur.",
      hi: "हमारे बेड़े में स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसी विभिन्न प्रकार की कारें शामिल हैं, जिससे यह सुनिश्चित होता है कि आपको अपनी आवश्यकताओं के अनुरूप एकदम सही वाहन मिले। हमारी आसान ऑनलाइन बुकिंग प्रणाली, मिलनसार ड्राइवरों और सुव्यवस्थित कैब / टैक्सी के साथ, हम शनि शिंगणापुर की यात्रा के दौरान एक सुगम और परेशानी-मुक्त अनुभव की गारंटी देते हैं।",
      mr: "आमच्या ताफ्यात स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या विविध गाड्यांचा समावेश आहे, ज्यामुळे तुमच्या गरजेनुसार अगदी योग्य वाहन तुम्हाला मिळेल याची खात्री राहते. आमच्या सोप्या ऑनलाइन बुकिंग प्रणालीसह, मनमिळावू चालक आणि सुस्थितीतील कॅब / टॅक्सीसह, आम्ही शनि शिंगणापूरच्या प्रवासात एक सुखकर आणि त्रासमुक्त अनुभवाची हमी देतो.",
    },
    contentBlocks: [
      {
        type: "text",
        heading: {
          en: "About Shani Shingnapur",
          hi: "शनि शिंगणापुर के बारे में",
          mr: "शनि शिंगणापूरबद्दल",
        },
        content: {
          en: "Shani Shingnapur, located in the Ahmednagar District of Maharashtra, is about 70 kilometers from Nashik. Known for its temple dedicated to Lord Shaneshwara, the town draws thousands of devotees daily, especially on Saturdays, which is considered an auspicious day to seek the Lord's blessings. The unique aspect of this temple is that it has no traditional structure; the deity is enshrined on an open platform, showcasing the awe-inspiring black stone idol of Lord Shanidev, the embodiment of the planet Saturn.",
          hi: "महाराष्ट्र के अहमदनगर जिले में स्थित शनि शिंगणापुर, नासिक से लगभग 70 किलोमीटर दूर है। भगवान शनैश्चर को समर्पित अपने मंदिर के लिए प्रसिद्ध यह नगर प्रतिदिन हजारों भक्तों को आकर्षित करता है, विशेष रूप से शनिवार को, जिसे भगवान का आशीर्वाद लेने के लिए अत्यंत शुभ दिन माना जाता है। इस मंदिर का अनूठा पहलू यह है कि इसकी कोई पारंपरिक संरचना नहीं है; देवता एक खुले चबूतरे पर विराजमान हैं, जहां शनि ग्रह के स्वरूप भगवान शनिदेव की विस्मयकारी काले पत्थर की मूर्ति स्थापित है।",
          mr: "महाराष्ट्रातील अहमदनगर जिल्ह्यात वसलेले शनि शिंगणापूर नाशिकपासून सुमारे ७० किलोमीटर अंतरावर आहे. भगवान शनैश्चराला समर्पित मंदिरासाठी प्रसिद्ध असलेले हे गाव दररोज हजारो भाविकांना आकर्षित करते, विशेषतः शनिवारी, जो देवाचे आशीर्वाद घेण्यासाठी अत्यंत शुभ दिवस मानला जातो. या मंदिराचे वेगळेपण असे की याला कोणतीही पारंपरिक इमारत किंवा रचना नाही; देवता एका मोकळ्या चौथऱ्यावर विराजमान असून तेथे शनि ग्रहाचे स्वरूप असलेल्या भगवान शनिदेवाची भव्य काळ्या पाषाणातील मूर्ती स्थापित आहे.",
        },
      },
      {
        type: "callout",
        heading: {
          en: "Distance and Fare",
          hi: "दूरी और किराया",
          mr: "अंतर आणि भाडे",
        },
        content: {
          en: "The roundtrip distance to Shani Shingnapur is approximately 150 km. Our Cab / Taxi Rental Services provide the most convenient travel option for this route. Cab fares range between ₹1300 and ₹2500, depending on your vehicle choice and any shared ride arrangements. For larger groups, we offer Tempo Traveller services on a per-seat basis.",
          hi: "शनि शिंगणापुर की राउंडट्रिप दूरी लगभग 150 किमी है। हमारी कैब / टैक्सी रेंटल सेवाएं इस मार्ग के लिए सबसे सुविधाजनक यात्रा विकल्प प्रदान करती हैं। आपके वाहन के चयन और किसी भी शेयर्ड राइड व्यवस्था के आधार पर कैब का किराया ₹1300 से ₹2500 के बीच रहता है। बड़े समूहों के लिए, हम प्रति-सीट आधार पर टेम्पो ट्रैवलर सेवाएं प्रदान करते हैं।",
          mr: "शनि शिंगणापूरचे राउंडट्रिप अंतर अंदाजे १५० किमी आहे. आमच्या कॅब / टॅक्सी रेंटल सेवा या मार्गासाठी सर्वात सोयीस्कर प्रवासाचा पर्याय देतात. तुमच्या वाहनाच्या निवडीनुसार आणि कोणत्याही शेअर्ड राइड व्यवस्थेनुसार कॅबचे भाडे ₹१३०० ते ₹२५०० दरम्यान असते. मोठ्या गटांसाठी, आम्ही प्रति-सीट तत्त्वावर टेम्पो ट्रॅव्हलर सेवा देतो.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Why Choose Us?",
          hi: "हमें क्यों चुनें?",
          mr: "आम्हाला का निवडावे?",
        },
        intro: {
          en: "At Prachi Tours & Travels Airport Cab, we prioritize your safety, comfort, and satisfaction. Our services include:",
          hi: "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब में, हम आपकी सुरक्षा, आराम और संतुष्टि को प्राथमिकता देते हैं। हमारी सेवाओं में शामिल हैं:",
          mr: "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅबमध्ये, आम्ही तुमची सुरक्षितता, आराम आणि समाधानाला प्राधान्य देतो. आमच्या सेवांमध्ये समाविष्ट आहे:",
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
            "सुरक्षित, समयनिष्ठ और भरोसेमंद राइड्स",
            "प्रतिस्पर्धी कीमतें",
            "स्वच्छ और सुव्यवस्थित वाहन",
            "मिलनसार और विनम्र ड्राइवर",
            "कस्टमाइज़ेबल पैकेज के साथ तनाव-मुक्त यात्रा",
          ],
          mr: [
            "सुरक्षित, वक्तशीर आणि विश्वासार्ह राइड्स",
            "स्पर्धात्मक दर",
            "स्वच्छ आणि सुस्थितीतील वाहने",
            "मनमिळावू आणि नम्र चालक",
            "कस्टमायझेबल पॅकेजेससह तणावमुक्त प्रवास",
          ],
        },
        closing: {
          en: "We are available 24/7, offering round-the-clock support to ensure that your journey is seamless and enjoyable. Whether you're a solo traveler or with family, book with us for a memorable trip.",
          hi: "हम 24/7 उपलब्ध हैं और आपकी यात्रा को निर्बाध तथा आनंददायक बनाने के लिए चौबीसों घंटे सहायता प्रदान करते हैं। चाहे आप अकेले यात्रा कर रहे हों या परिवार के साथ, एक यादगार यात्रा के लिए हमारे साथ बुकिंग करें।",
          mr: "आम्ही २४/७ उपलब्ध आहोत आणि तुमचा प्रवास अखंड व आनंददायी व्हावा यासाठी अहोरात्र मदत देतो. तुम्ही एकटे प्रवास करत असाल किंवा कुटुंबासोबत, एका अविस्मरणीय सहलीसाठी आमच्यासोबत बुकिंग करा.",
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
          hi: "शनि शिंगणापुर न केवल अपने आध्यात्मिक महत्व के लिए बल्कि अपनी अपरंपरागत वास्तुकला के लिए भी एक अनूठा गंतव्य है। यह गांव दरवाजों और तालों की अनुपस्थिति के लिए प्रसिद्ध है, जो परम आस्था और सुरक्षा के स्थान का प्रतीक है। प्रतिदिन लगभग 30,000 भक्त मंदिर में दर्शन के लिए आते हैं, और शनिवार तथा शनि त्रयोदशी को यह संख्या 3,00,000 से भी अधिक हो जाती है।",
          mr: "शनि शिंगणापूर हे केवळ त्याच्या आध्यात्मिक महत्त्वासाठीच नव्हे तर त्याच्या अपारंपरिक वास्तुरचनेसाठी देखील एक अद्वितीय ठिकाण आहे. हे गाव दरवाजे आणि कुलूप नसण्यासाठी प्रसिद्ध आहे, जे परम श्रद्धा आणि सुरक्षिततेच्या ठिकाणाचे प्रतीक आहे. दररोज सुमारे ३०,००० भाविक मंदिराला भेट देतात, तर शनिवारी आणि शनि त्रयोदशीला ही संख्या ३,००,००० च्या पुढे जाते.",
        },
      },
      {
        type: "list",
        heading: {
          en: "Places to Visit Near Shani Shingnapur",
          hi: "शनि शिंगणापुर के पास घूमने की जगहें",
          mr: "शनि शिंगणापूरजवळ भेट देण्याची ठिकाणे",
        },
        intro: {
          en: "While visiting Shani Shingnapur, you can also plan a family outing to these nearby attractions:",
          hi: "शनि शिंगणापुर की यात्रा के दौरान, आप इन नजदीकी आकर्षणों की पारिवारिक सैर की भी योजना बना सकते हैं:",
          mr: "शनि शिंगणापूरला भेट देताना, तुम्ही जवळच्या या पर्यटन स्थळांना कुटुंबासोबत भेट देण्याचेही नियोजन करू शकता:",
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
            "देवी लक्ष्मी का मंदिर",
            "संत श्री उदासी बाबा की समाधि",
            "श्री दत्तात्रेय का मंदिर",
          ],
          mr: [
            "मुळा धरण (शनि शिंगणापूर रस्त्यावर स्थित)",
            "देवी लक्ष्मीचे मंदिर",
            "संत श्री उदासी बाबांची समाधी",
            "श्री दत्तात्रेयांचे मंदिर",
          ],
        },
        closing: {
          en: "For a comfortable and smooth journey to Shani Shingnapur, book your Cab with Prachi Tours & Travels Airport Cab today!",
          hi: "शनि शिंगणापुर की आरामदायक और सुगम यात्रा के लिए, आज ही प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब के साथ अपनी कैब बुक करें!",
          mr: "शनि शिंगणापूरच्या आरामदायी आणि सुखकर प्रवासासाठी, आजच प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅबसोबत तुमची कॅब बुक करा!",
        },
      },
    ],
    longDistance: {
      heading: { en: "", hi: "", mr: "" },
      content: { en: "", hi: "", mr: "" },
      closing: {
        en: "Call us today for easy bookings and stress-free travel!",
        hi: "आसान बुकिंग और तनाव-मुक्त यात्रा के लिए आज ही हमें कॉल करें!",
        mr: "सोप्या बुकिंगसाठी आणि तणावमुक्त प्रवासासाठी आजच आम्हाला कॉल करा!",
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
          "त्र्यंबकेश्वर एक धार्मिक केंद्र है जहां बारह ज्योतिर्लिंगों में से एक स्थित है। यहां स्थित ज्योतिर्लिंग की असाधारण विशेषता इसके तीन मुख हैं जो भगवान ब्रह्मा, भगवान विष्णु और भगवान रुद्र के प्रतीक हैं। पानी के अत्यधिक उपयोग के कारण लिंग का क्षरण शुरू हो गया है। ऐसा कहा जाता है कि यह क्षरण मानव समाज की क्षरणशील प्रकृति का प्रतीक है। लिंगों को एक रत्नजड़ित मुकुट से ढका गया है जिसे त्रिदेव (ब्रह्मा विष्णु महेश) के स्वर्ण मुखौटे के ऊपर रखा गया है।",
          "त्र्यंबकेश्वर की त्वरित यात्रा की योजना बना रहे हैं? क्या आपने सोचा है कि आप अपने पूरे परिवार के साथ सुविधाजनक और आरामदायक तरीके से कैसे यात्रा करेंगे? हम मदद कर सकते हैं। कैसे? त्र्यंबकेश्वर के लिए सर्वोत्तम कार रेंटल सेवाओं के साथ।",
          "हम शानदार ऑफ़र पर त्र्यंबकेश्वर कैब / टैक्सी रेंटल सेवाएं प्रदान करते हैं। सर्वोत्तम कार सेवाओं के साथ हमसे त्र्यंबकेश्वर के लिए कैब किराए पर लें। विश्वसनीय और विनम्र ड्राइवरों के साथ त्र्यंबकेश्वर के लिए हमारी ऑनलाइन कैब बुकिंग सेवाओं का अनुभव करें। नासिक की अग्रणी कार रेंटल सेवा प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास किफायती किराए पर त्र्यंबकेश्वर टूर पैकेज प्राप्त करने के लिए स्विफ्ट डिजायर, टेम्पो ट्रैवलर, इनोवा जैसी कारों का विविध बेड़ा उपलब्ध है।",
        ],
        mr: [
          "त्र्यंबकेश्वर हे बारा ज्योतिर्लिंगांपैकी एक ज्योतिर्लिंग असलेले धार्मिक केंद्र आहे. येथे असलेल्या ज्योतिर्लिंगाचे विलक्षण वैशिष्ट्य म्हणजे भगवान ब्रह्मा, भगवान विष्णू आणि भगवान रुद्र यांचे प्रतीक असलेले त्याचे तीन मुख. पाण्याच्या अतिवापरामुळे लिंगाची झीज होऊ लागली आहे. असे म्हटले जाते की ही झीज मानवी समाजाच्या क्षय होणाऱ्या स्वभावाचे प्रतीक आहे. लिंगांवर त्रिदेव (ब्रह्मा विष्णू महेश) यांच्या सुवर्ण मुखवट्यावर रत्नजडित मुकुट ठेवलेला आहे.",
          "त्र्यंबकेश्वरच्या जलद सहलीचे नियोजन करत आहात? तुम्ही तुमच्या संपूर्ण कुटुंबासह सोयीस्कर आणि आरामदायी पद्धतीने प्रवास कसा करणार याचा विचार केला आहे का? आम्ही मदत करू शकतो. कसे? त्र्यंबकेश्वरसाठी सर्वोत्तम कार रेंटल सेवांसह.",
          "आम्ही उत्तम ऑफर्सवर त्र्यंबकेश्वर कॅब / टॅक्सी रेंटल सेवा पुरवतो. सर्वोत्तम कार सेवांसह आमच्याकडून त्र्यंबकेश्वरसाठी कॅब भाड्याने घ्या. विश्वासार्ह आणि नम्र चालकांसह त्र्यंबकेश्वरसाठी आमच्या ऑनलाइन कॅब बुकिंग सेवांचा अनुभव घ्या. नाशिकमधील अग्रगण्य कार रेंटल सेवा प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे परवडणाऱ्या दरात त्र्यंबकेश्वर टूर पॅकेज मिळवण्यासाठी स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर, इनोव्हा यांसारख्या गाड्यांचा विविध ताफा उपलब्ध आहे.",
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
        hi: "क्या नासिक से आगे की यात्रा की आवश्यकता है?",
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
          "कोपरगांव से नासिक की त्वरित यात्रा की योजना बना रहे हैं? सोच रहे हैं कि अपने पूरे परिवार के लिए आरामदायक और सुविधाजनक यात्रा कैसे सुनिश्चित करें? हमने आपको बेहतरीन कार रेंटल सेवाओं के साथ कवर किया है! कोपरगांव रेलवे स्टेशन से नासिक साईं बाबा मंदिर की दूरी लगभग 18 किलोमीटर है, जिसे कैब द्वारा तय करने में लगभग 26 से 30 मिनट लगते हैं। कोपरगांव से नासिक के लिए कैब किराए पर लेने से एक सुगम, तेज़ और आरामदायक सवारी सुनिश्चित होती है। हमारी कारें सुव्यवस्थित और चलाने में आसान हैं, जिनमें पेशेवर ड्राइवर हैं जो मार्ग से अच्छी तरह परिचित हैं और सुखद यात्रा अनुभव सुनिश्चित करते हैं।",
          "महाराष्ट्र के अहमदनगर जिले में स्थित कोपरगांव रेलवे स्टेशन, कोपरगांव शहर को सेवा प्रदान करता है और मध्य रेलवे ज़ोन के सोलापुर रेलवे डिवीजन के अंतर्गत संचालित होता है। 508 मीटर की ऊंचाई पर स्थित इस स्टेशन में दो प्लेटफॉर्म हैं और यह एक विद्युतीकृत सिंगल ब्रॉड गेज लाइन का हिस्सा है। यहां 74 ट्रेनें रुकती हैं, जिससे यह एक व्यस्त केंद्र है। हम कोपरगांव से नासिक तक किफायती और विश्वसनीय कैब / टैक्सी रेंटल सेवाएं प्रदान करते हैं, जो तनाव-मुक्त यात्रा सुनिश्चित करती हैं।",
          "क्षेत्र में सर्वोत्तम कार सेवाओं का आनंद लेते हुए हमारे साथ कोपरगांव से नासिक के लिए कैब किराए पर लें। हमारा ऑनलाइन बुकिंग प्लेटफॉर्म प्रतिस्पर्धी दरों पर स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसे विभिन्न वाहनों तक पहुंच प्रदान करता है। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी हमारे ग्राहकों और हमारे मेहनती ड्राइवरों दोनों को उच्च गुणवत्ता वाली सेवा प्रदान करने के लिए समर्पित है, जो प्रत्येक यात्री के लिए सुखद अनुभव सुनिश्चित करने का प्रयास करते हैं।",
          "आपकी यात्रा की आवश्यकताओं और समूह के आकार के आधार पर, हम चुनने के लिए कई प्रकार के वाहन विकल्प प्रदान करते हैं। चाहे आपको कोपरगांव से नासिक की एकतरफा यात्रा की आवश्यकता हो या वापसी की राउंड ट्रिप की, हमारी असाधारण कैब / टैक्सी रेंटल सेवाएं एक विश्वसनीय और आनंददायक यात्रा सुनिश्चित करती हैं।",
          "नासिक, महाराष्ट्र में स्थित प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी कोपरगांव के लिए कैब / टैक्सी की ऑनलाइन बुकिंग भी प्रदान करता है। हमारे कोपरगांव से नासिक कैब किराए देखें, और हमें आपकी यात्रा को आसान और परेशानी-मुक्त बनाने दें।",
        ],
        mr: [
          "कोपरगाव ते नाशिक जलद प्रवासाचे नियोजन करत आहात? तुमच्या संपूर्ण कुटुंबासाठी आरामदायी आणि सोयीस्कर प्रवास कसा सुनिश्चित करायचा याचा विचार करत आहात? आम्ही तुम्हाला सर्वोत्तम कार रेंटल सेवांसह पूर्ण सहकार्य करतो! कोपरगाव रेल्वे स्थानकापासून नाशिक साईबाबा मंदिरापर्यंतचे अंतर सुमारे १८ किलोमीटर आहे, ज्याला कॅबने सुमारे २६ ते ३० मिनिटे लागतात. कोपरगावहून नाशिकसाठी कॅब भाड्याने घेतल्याने सुरळीत, जलद आणि आरामदायी प्रवासाची खात्री मिळते. आमच्या गाड्या सुस्थितीत आणि चालवण्यास सोप्या आहेत, ज्यामध्ये या मार्गाची पूर्ण माहिती असलेले व्यावसायिक चालक आहेत आणि ते आनंददायी प्रवासाचा अनुभव देतात.",
          "महाराष्ट्रातील अहमदनगर जिल्ह्यात स्थित कोपरगाव रेल्वे स्थानक कोपरगाव शहराला सेवा देते आणि मध्य रेल्वे झोनच्या सोलापूर रेल्वे विभागांतर्गत कार्यरत आहे. ५०८ मीटर उंचीवर असलेल्या या स्थानकावर दोन फलाट आहेत आणि ते विद्युतीकृत सिंगल ब्रॉड गेज मार्गाचा भाग आहे. येथे ७४ गाड्या थांबत असल्याने हे एक गजबजलेले केंद्र आहे. आम्ही कोपरगावहून नाशिकपर्यंत परवडणाऱ्या आणि विश्वासार्ह कॅब / टॅक्सी रेंटल सेवा देतो, ज्यामुळे तणावमुक्त प्रवासाची खात्री मिळते.",
          "या भागातील सर्वोत्तम कार सेवांचा आनंद घेत आमच्यासोबत कोपरगावहून नाशिकसाठी कॅब भाड्याने घ्या. आमचे ऑनलाइन बुकिंग प्लॅटफॉर्म स्पर्धात्मक दरात स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या विविध वाहनांचा पर्याय उपलब्ध करून देते. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी आमच्या ग्राहकांना आणि आमच्या मेहनती चालकांना उच्च दर्जाची सेवा देण्यासाठी समर्पित आहे, जे प्रत्येक प्रवाशासाठी सुखद अनुभव सुनिश्चित करण्याचा प्रयत्न करतात.",
          "तुमच्या प्रवासाच्या गरजा आणि गटाच्या आकारानुसार, आम्ही निवडण्यासाठी विविध वाहन पर्याय देतो. तुम्हाला कोपरगावहून नाशिकला एकेरी प्रवासाची गरज असो किंवा परतीच्या राउंड ट्रिपची, आमच्या उत्कृष्ट कॅब / टॅक्सी रेंटल सेवा विश्वासार्ह आणि आनंददायी प्रवास सुनिश्चित करतात.",
          "नाशिक, महाराष्ट्र येथे स्थित प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी कोपरगावसाठी कॅब / टॅक्सीचे ऑनलाइन बुकिंग देखील देते. आमचे कोपरगाव ते नाशिक कॅब दर पहा आणि आम्हाला तुमचा प्रवास सोपा आणि त्रासमुक्त करू द्या.",
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
          "मनमाड की त्वरित यात्रा की योजना बना रहे हैं? सोच रहे हैं कि अपने पूरे परिवार के लिए आरामदायक और सुविधाजनक यात्रा कैसे सुनिश्चित करें? हमने आपको बेहतरीन कार रेंटल सेवाओं के साथ कवर किया है! मनमाड की दूरी लगभग 90 किलोमीटर है, जिसे कैब द्वारा तय करने में लगभग 2 घंटे लगते हैं। मनमाड के लिए कैब किराए पर लेने से एक सुगम, तेज़ और आरामदायक सवारी सुनिश्चित होती है। हमारी कारें सुव्यवस्थित और चलाने में आसान हैं, जिनमें पेशेवर ड्राइवर हैं जो मार्ग से अच्छी तरह परिचित हैं और सुखद यात्रा अनुभव सुनिश्चित करते हैं।",
          "महाराष्ट्र के नासिक जिले में स्थित मनमाड रेलवे स्टेशन, मध्य रेलवे ज़ोन के भुसावल रेलवे डिवीजन के अंतर्गत संचालित एक महत्वपूर्ण रेलवे जंक्शन है। देश के विभिन्न हिस्सों को जोड़ने वाले एक प्रमुख ट्रांजिट हब के रूप में सेवा करते हुए, यह दैनिक यात्रियों की विशाल संख्या को संभालता है। हम मनमाड के लिए किफायती और विश्वसनीय कैब / टैक्सी रेंटल सेवाएं प्रदान करते हैं, जो तनाव-मुक्त यात्रा सुनिश्चित करती हैं।",
          "क्षेत्र में सर्वोत्तम कार सेवाओं का आनंद लेते हुए हमारे साथ मनमाड के लिए कैब किराए पर लें। हमारा ऑनलाइन बुकिंग प्लेटफॉर्म प्रतिस्पर्धी दरों पर स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसे विभिन्न वाहनों तक पहुंच प्रदान करता है। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब हमारे ग्राहकों और हमारे मेहनती ड्राइवरों दोनों को उच्च गुणवत्ता वाली सेवा प्रदान करने के लिए समर्पित है, जो प्रत्येक यात्री के लिए सुखद अनुभव सुनिश्चित करने का प्रयास करते हैं।",
          "आपकी यात्रा की आवश्यकताओं और समूह के आकार के आधार पर, हम चुनने के लिए कई प्रकार के वाहन विकल्प प्रदान करते हैं। चाहे आपको मनमाड की एकतरफा यात्रा की आवश्यकता हो या वापसी की राउंड ट्रिप की, हमारी असाधारण कैब / टैक्सी रेंटल सेवाएं एक विश्वसनीय और आनंददायक यात्रा सुनिश्चित करती हैं।",
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी मनमाड आने और जाने के लिए कैब / टैक्सी की निर्बाध ऑनलाइन बुकिंग प्रदान करता है। हमारे मनमाड कैब किराए देखें, और हमें आपकी यात्रा को आसान और परेशानी-मुक्त बनाने दें।",
        ],
        mr: [
          "मनमाडच्या जलद प्रवासाचे नियोजन करत आहात? तुमच्या संपूर्ण कुटुंबासाठी आरामदायी आणि सोयीस्कर प्रवास कसा सुनिश्चित करायचा याचा विचार करत आहात? आम्ही तुम्हाला सर्वोत्तम कार रेंटल सेवांसह पूर्ण सहकार्य करतो! मनमाडचे अंतर सुमारे ९० किलोमीटर आहे, ज्याला कॅबने सुमारे २ तास लागतात. मनमाडसाठी कॅब भाड्याने घेतल्याने सुरळीत, जलद आणि आरामदायी प्रवासाची खात्री मिळते. आमच्या गाड्या सुस्थितीत आणि चालवण्यास सोप्या आहेत, ज्यामध्ये या मार्गाची पूर्ण माहिती असलेले व्यावसायिक चालक आहेत आणि ते आनंददायी प्रवासाचा अनुभव देतात.",
          "महाराष्ट्रातील नाशिक जिल्ह्यात स्थित मनमाड रेल्वे स्थानक हे मध्य रेल्वे झोनच्या भुसावळ रेल्वे विभागांतर्गत कार्यरत एक महत्त्वाचे रेल्वे जंक्शन आहे. देशाच्या विविध भागांना जोडणारे प्रमुख ट्रान्झिट हब म्हणून सेवा देत असताना, ते दररोज मोठ्या संख्येने प्रवाशांची वाहतूक हाताळते. आम्ही मनमाडसाठी परवडणाऱ्या आणि विश्वासार्ह कॅब / टॅक्सी रेंटल सेवा देतो, ज्यामुळे तणावमुक्त प्रवासाची खात्री मिळते.",
          "या भागातील सर्वोत्तम कार सेवांचा आनंद घेत आमच्यासोबत मनमाडसाठी कॅब भाड्याने घ्या. आमचे ऑनलाइन बुकिंग प्लॅटफॉर्म स्पर्धात्मक दरात स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या विविध वाहनांचा पर्याय उपलब्ध करून देते. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब आमच्या ग्राहकांना आणि आमच्या मेहनती चालकांना उच्च दर्जाची सेवा देण्यासाठी समर्पित आहे, जे प्रत्येक प्रवाशासाठी सुखद अनुभव सुनिश्चित करण्याचा प्रयत्न करतात.",
          "तुमच्या प्रवासाच्या गरजा आणि गटाच्या आकारानुसार, आम्ही निवडण्यासाठी विविध वाहन पर्याय देतो. तुम्हाला मनमाडला एकेरी प्रवासाची गरज असो किंवा परतीच्या राउंड ट्रिपची, आमच्या उत्कृष्ट कॅब / टॅक्सी रेंटल सेवा विश्वासार्ह आणि आनंददायी प्रवास सुनिश्चित करतात.",
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी मनमाडला जाण्यासाठी आणि परत येण्यासाठी कॅब / टॅक्सीचे अखंड ऑनलाइन बुकिंग देते. आमचे मनमाड कॅब दर पहा आणि आम्हाला तुमचा प्रवास सोपा आणि त्रासमुक्त करू द्या.",
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
        hi: "पुणे यात्रा के साथ संयोजित करें",
        mr: "पुणे सहलीसोबत एकत्र करा",
      },
      content: {
        en: [
          "We provide Bhimashankar Cab / Taxi Rental Services at awesome offers. Hire a cab to Bhimashankar from us with the best car services. Experience our online cab booking services to Bhimashankar with reliable and polite drivers. Prachi Tours & Travels Airport Cabs / Taxi, the leading car rental services in Nashik has all the variety fleet of cars like Swift Dzire, Tempo Traveller, Innova to hire for a Cab to Bhimashankar at affordable rates.",
          "Bhimashankar Temple is a Jyotirlinga shrine located 50 km northwest of Khed, near Pune, in India. It is located 127 km from Shivaji Nagar (Pune) in the Ghat region of the Sahyadri hills. Bhimashankar is also the source of the river Bhima, which flows southeast and merges with the Krishna river near Raichur. The other Jyotirlinga shrines in Maharashtra are Vaidyanath near Parli Dist Beed, Trimbakeshwara near Nashik, Grishneshwar near Aurangabad and Aundha Nagnath Temple in Hingoli, Nagnaath in Aundh built by Pandav brothers in one night during their exile.",
        ],
        hi: [
          "हम शानदार ऑफ़र पर भीमाशंकर कैब / टैक्सी रेंटल सेवाएं प्रदान करते हैं। सर्वोत्तम कार सेवाओं के साथ हमसे भीमाशंकर के लिए कैब किराए पर लें। विश्वसनीय और विनम्र ड्राइवरों के साथ भीमाशंकर के लिए हमारी ऑनलाइन कैब बुकिंग सेवाओं का अनुभव करें। नासिक की अग्रणी कार रेंटल सेवा प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास किफायती दरों पर भीमाशंकर के लिए कैब किराए पर लेने हेतु स्विफ्ट डिजायर, टेम्पो ट्रैवलर, इनोवा जैसी कारों का विविध बेड़ा उपलब्ध है।",
          "भीमाशंकर मंदिर भारत में पुणे के पास खेड़ से 50 किमी उत्तर-पश्चिम में स्थित एक ज्योतिर्लिंग तीर्थ है। यह सह्याद्रि पहाड़ियों के घाट क्षेत्र में शिवाजी नगर (पुणे) से 127 किमी दूर स्थित है। भीमाशंकर भीमा नदी का उद्गम स्थल भी है, जो दक्षिण-पूर्व की ओर बहती है और रायचूर के पास कृष्णा नदी में मिल जाती है। महाराष्ट्र के अन्य ज्योतिर्लिंग तीर्थ परली जिला बीड के पास वैद्यनाथ, नासिक के पास त्र्यंबकेश्वर, औरंगाबाद के पास घृष्णेश्वर और हिंगोली में औंढा नागनाथ मंदिर हैं, जो औंध में पांडव भाइयों द्वारा अपने वनवास के दौरान एक रात में बनाया गया नागनाथ मंदिर है।",
        ],
        mr: [
          "आम्ही उत्तम ऑफर्सवर भीमाशंकर कॅब / टॅक्सी रेंटल सेवा पुरवतो. सर्वोत्तम कार सेवांसह आमच्याकडून भीमाशंकरसाठी कॅब भाड्याने घ्या. विश्वासार्ह आणि नम्र चालकांसह भीमाशंकरसाठी आमच्या ऑनलाइन कॅब बुकिंग सेवांचा अनुभव घ्या. नाशिकमधील अग्रगण्य कार रेंटल सेवा प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे परवडणाऱ्या दरात भीमाशंकरसाठी कॅब भाड्याने घेण्यासाठी स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर, इनोव्हा यांसारख्या गाड्यांचा विविध ताफा उपलब्ध आहे.",
          "भीमाशंकर मंदिर हे भारतातील पुण्याजवळ खेडच्या वायव्येस ५० किमी अंतरावर असलेले एक ज्योतिर्लिंग तीर्थक्षेत्र आहे. हे सह्याद्री पर्वतरांगांच्या घाट प्रदेशात शिवाजी नगर (पुणे) पासून १२७ किमी अंतरावर आहे. भीमाशंकर हे भीमा नदीचे उगमस्थान देखील आहे, जी आग्नेयेकडे वाहते आणि रायचूरजवळ कृष्णा नदीला मिळते. महाराष्ट्रातील इतर ज्योतिर्लिंग तीर्थक्षेत्रे म्हणजे परळी जिल्हा बीडजवळील वैद्यनाथ, नाशिकजवळील त्र्यंबकेश्वर, औरंगाबादजवळील घृष्णेश्वर आणि हिंगोलीतील औंढा नागनाथ मंदिर, जे पांडव भावांनी वनवासात असताना एका रात्रीत औंध येथे बांधलेले नागनाथ मंदिर आहे.",
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
        hi: "अहमदनगर से अन्य गंतव्य",
        mr: "अहमदनगरहून अधिक पर्यटन स्थळे",
      },
      content: {
        en: [
          "Prachi Tours & Travels Airport Cabs / Taxi provides Budget Cabs / Taxi & Cab on Rent to Ahmednagar with roundtrip journeys.",
          "We provide Ahmednagar Cab / Taxi Rental Services with the lowest fare. Hire a cab to Ahmednagar from us with the best local car services. Experience our online cab booking services to Ahmednagar with reliable and polite drivers. Prachi Tours & Travels Airport Cabs / Taxi, the leading car rental travel services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Ahmednagar at affordable rates. Located in Maharashtra, the Ahmednagar District is at a distance of approximately 120 km from Nashik.",
        ],
        hi: [
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी राउंडट्रिप यात्राओं के साथ अहमदनगर के लिए बजट कैब / टैक्सी और किराए पर कैब प्रदान करता है।",
          "हम सबसे कम किराए के साथ अहमदनगर कैब / टैक्सी रेंटल सेवाएं प्रदान करते हैं। सर्वोत्तम स्थानीय कार सेवाओं के साथ हमसे अहमदनगर के लिए कैब किराए पर लें। विश्वसनीय और विनम्र ड्राइवरों के साथ अहमदनगर के लिए हमारी ऑनलाइन कैब बुकिंग सेवाओं का अनुभव करें। क्षेत्र की अग्रणी कार रेंटल यात्रा सेवा प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास किफायती दरों पर अहमदनगर के लिए कैब किराए पर लेने हेतु स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसी कारों का विविध बेड़ा उपलब्ध है। महाराष्ट्र में स्थित अहमदनगर जिला नासिक से लगभग 120 किमी की दूरी पर है।",
        ],
        mr: [
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी राउंडट्रिप प्रवासासह अहमदनगरसाठी बजेट कॅब / टॅक्सी आणि भाड्याने कॅब पुरवते.",
          "आम्ही सर्वात कमी भाड्यासह अहमदनगर कॅब / टॅक्सी रेंटल सेवा देतो. सर्वोत्तम स्थानिक कार सेवांसह आमच्याकडून अहमदनगरसाठी कॅब भाड्याने घ्या. विश्वासार्ह आणि नम्र चालकांसह अहमदनगरसाठी आमच्या ऑनलाइन कॅब बुकिंग सेवांचा अनुभव घ्या. या भागातील अग्रगण्य कार रेंटल ट्रॅव्हल सेवा प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे परवडणाऱ्या दरात अहमदनगरसाठी कॅब भाड्याने घेण्यासाठी स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या गाड्यांचा विविध ताफा उपलब्ध आहे. महाराष्ट्रात स्थित अहमदनगर जिल्हा नाशिकपासून सुमारे १२० किमी अंतरावर आहे.",
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
          "भारत के महाराष्ट्र राज्य के छत्रपति संभाजीनगर (औरंगाबाद) जिले में स्थित अजंता की गुफाएं लगभग 30 चट्टानों को काटकर बनाए गए बौद्ध गुफा स्मारक हैं जो दूसरी शताब्दी ईसा पूर्व से लगभग 480 या 650 ईस्वी के बीच के हैं। गुफाओं में ऐसे चित्र और मूर्तियां शामिल हैं जिन्हें भारतीय पुरातत्व सर्वेक्षण द्वारा “भारतीय कला, विशेष रूप से चित्रकला के सबसे बेहतरीन जीवित उदाहरण” के रूप में वर्णित किया गया है, जो बुद्ध की आकृतियों और जातक कथाओं के चित्रण के साथ बौद्ध धार्मिक कला की उत्कृष्ट कृतियां हैं।",
          "महाराष्ट्र के कुछ विश्व धरोहर स्थल छत्रपति संभाजीनगर (औरंगाबाद) में स्थित हैं, जिनमें अजंता-एलोरा और बीबी का मकबरा शामिल हैं। यह केवल 4-5 घंटे की यात्रा है। यदि आपकी सप्ताहांत यात्रा शनिवार को नियोजित है, तो हम अजंता-एलोरा की एक उत्कृष्ट विस्तारित यात्रा की सलाह देते हैं। यात्रा कैसे करें? त्वरित, सुविधाजनक, आरामदायक और किफायती अजंता-एलोरा गुफाओं की यात्रा के लिए पूरे दिन की कार बुक करना सबसे अच्छा विकल्प है जिसे आप बस और ट्रेन की तुलना में चुन सकते हैं।",
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी स्थानीय और बाहरी गंतव्यों के लिए कैब / टैक्सी रेंटल सेवाएं प्रदान करता है। बहुत ही किफायती किराए पर क्षेत्र के सबसे विश्वसनीय अग्रणी कार रेंटल सेवा प्रदाता से बेहद सस्ती दर पर बजट कैब / टैक्सी बुक करें या कैब रेंटल सेवाएं किराए पर लें। हम शहर में सबसे किफायती और आरामदायक कैब / टैक्सी रेंटल सेवाओं में से एक प्रदान करते हैं, जिसमें आपके बजट के अनुसार कई टूर पैकेज उपलब्ध हैं ताकि आप तदनुसार अपनी सवारी की योजना बना सकें।",
          "हमारे ड्राइवर हमारे प्रत्येक ग्राहक के साथ यात्रा की सराहना करते हैं और आनंद लेते हैं, और पारदर्शी कीमतों के साथ सुरक्षित यात्रा और आस-पास के स्थानों पर निर्धारित आगमन, या आस-पास के हवाई अड्डों, रेलवे स्टेशनों या पर्यटन स्थलों के लिए पिकअप/ड्रॉप-ऑफ सेवाओं की प्राथमिक जिम्मेदारी निभाते हैं।",
        ],
        mr: [
          "भारतातील महाराष्ट्र राज्याच्या छत्रपती संभाजीनगर (औरंगाबाद) जिल्ह्यातील अजिंठा लेणी ही सुमारे ३० कातळात कोरलेली बौद्ध लेणी स्मारके आहेत जी इ.स.पूर्व २ऱ्या शतकापासून ते सुमारे इ.स. ४८० किंवा ६५० दरम्यानची आहेत. या लेण्यांमध्ये अशी चित्रे आणि शिल्पे आहेत ज्यांचे वर्णन भारतीय पुरातत्व सर्वेक्षण विभागाने “भारतीय कलेचे, विशेषतः चित्रकलेचे सर्वोत्तम जिवंत नमुने” असे केले आहे, जी बुद्धांच्या मूर्ती आणि जातक कथांच्या चित्रणासह बौद्ध धार्मिक कलेचे उत्कृष्ट नमुने आहेत.",
          "महाराष्ट्रातील काही जागतिक वारसा स्थळे छत्रपती संभाजीनगर (औरंगाबाद) येथे आहेत, ज्यात अजिंठा-वेरूळ आणि बीबी का मकबरा यांचा समावेश आहे. हा फक्त ४-५ तासांचा प्रवास आहे. जर तुमची वीकेंड सहल शनिवारी नियोजित असेल, तर आम्ही अजिंठा-वेरूळच्या उत्कृष्ट विस्तारित सहलीची शिफारस करतो. प्रवास कसा करावा? जलद, सोयीस्कर, आरामदायी आणि परवडणाऱ्या अजिंठा-वेरूळ लेणी सहलीसाठी पूर्ण दिवसाची कार बुक करणे हा बस आणि रेल्वेपेक्षा तुम्ही निवडू शकता असा सर्वोत्तम पर्याय आहे.",
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी स्थानिक आणि बाहेरील ठिकाणांसाठी कॅब / टॅक्सी रेंटल सेवा पुरवते. अतिशय किफायतशीर भाड्यात या भागातील सर्वात विश्वासार्ह अग्रगण्य कार रेंटल सेवा प्रदात्याकडून अतिशय परवडणाऱ्या दरात बजेट कॅब / टॅक्सी बुक करा किंवा कॅब रेंटल सेवा भाड्याने घ्या. आम्ही शहरातील सर्वात परवडणाऱ्या आणि आरामदायी कॅब / टॅक्सी रेंटल सेवांपैकी एक देतो, ज्यामध्ये तुमच्या बजेटनुसार अनेक टूर पॅकेजेस उपलब्ध आहेत जेणेकरून तुम्ही त्यानुसार तुमच्या प्रवासाचे नियोजन करू शकाल.",
          "आमचे चालक आमच्या प्रत्येक ग्राहकासोबतच्या प्रवासाचा आदर करतात आणि आनंद घेतात, आणि पारदर्शक किमतींसह सुरक्षित प्रवास आणि जवळपासच्या ठिकाणी नियोजित वेळेत पोहोचणे, किंवा जवळच्या विमानतळ, रेल्वे स्थानके किंवा पर्यटन स्थळांसाठी पिकअप/ड्रॉप-ऑफ सेवांची प्राथमिक जबाबदारी पार पाडतात.",
        ],
      },
      closing: {
        en: "Ask about our 2-day package deals!",
        hi: "हमारे 2-दिवसीय पैकेज सौदों के बारे में पूछें!",
        mr: "आमच्या २-दिवसीय पॅकेज डील्सबद्दल विचारा!",
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
        hi: "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब क्यों चुनें?",
        mr: "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब का निवडावे?",
      },
      content: {
        en: [
          "We provide Verul Cab / Taxi Rental Services at awesome offers. Hire a cab to Verul from us with the best local car services. Experience our online cab booking services to Verul with reliable and polite drivers. Prachi Tours & Travels Airport Cabs / Taxi, the leading car rental services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Verul at affordable rates.",
          "Prachi Tours & Travels Airport Cabs / Taxi is the premier provider of outstation & local car rental offerings, featuring specialized Verul car rentals. We offer highly customized & transparent service at a lower rate in comparison with traditional tour operators. We leverage modern booking systems to ensure you get the absolute best value-to-cost equation.",
          "Offering premium touring options, we welcome the opportunity to introduce ourselves as a renowned transport contractor and fleet owner. We maintain strict quality management standards across our entire company while encouraging and ensuring the active dedication of our team.",
        ],
        hi: [
          "हम शानदार ऑफ़र पर वेरुल कैब / टैक्सी रेंटल सेवाएं प्रदान करते हैं। सर्वोत्तम स्थानीय कार सेवाओं के साथ हमसे वेरुल के लिए कैब किराए पर लें। विश्वसनीय और विनम्र ड्राइवरों के साथ वेरुल के लिए हमारी ऑनलाइन कैब बुकिंग सेवाओं का अनुभव करें। क्षेत्र की अग्रणी कार रेंटल सेवा प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास किफायती दरों पर वेरुल के लिए कैब किराए पर लेने हेतु स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसी कारों का विविध बेड़ा उपलब्ध है।",
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी आउटस्टेशन और स्थानीय कार रेंटल सेवाओं का प्रमुख प्रदाता है, जिसमें विशेष वेरुल कार रेंटल शामिल है। हम पारंपरिक टूर ऑपरेटरों की तुलना में कम दर पर अत्यधिक कस्टमाइज़्ड और पारदर्शी सेवा प्रदान करते हैं। हम यह सुनिश्चित करने के लिए आधुनिक बुकिंग प्रणालियों का लाभ उठाते हैं कि आपको लागत के मुकाबले सर्वोत्तम मूल्य मिले।",
          "प्रीमियम टूरिंग विकल्प प्रदान करते हुए, हम एक प्रतिष्ठित ट्रांसपोर्ट कॉन्ट्रैक्टर और फ्लीट ओनर के रूप में अपना परिचय देने के अवसर का स्वागत करते हैं। हम अपनी टीम के सक्रिय समर्पण को प्रोत्साहित और सुनिश्चित करते हुए अपनी पूरी कंपनी में सख्त गुणवत्ता प्रबंधन मानकों को बनाए रखते हैं।",
        ],
        mr: [
          "आम्ही उत्तम ऑफर्सवर वेरूळ कॅब / टॅक्सी रेंटल सेवा पुरवतो. सर्वोत्तम स्थानिक कार सेवांसह आमच्याकडून वेरूळसाठी कॅब भाड्याने घ्या. विश्वासार्ह आणि नम्र चालकांसह वेरूळसाठी आमच्या ऑनलाइन कॅब बुकिंग सेवांचा अनुभव घ्या. या भागातील अग्रगण्य कार रेंटल सेवा प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे परवडणाऱ्या दरात वेरूळसाठी कॅब भाड्याने घेण्यासाठी स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या गाड्यांचा विविध ताफा उपलब्ध आहे.",
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी ही आउटस्टेशन आणि स्थानिक कार रेंटल सेवांची प्रमुख प्रदाता आहे, ज्यामध्ये विशेष वेरूळ कार रेंटलचा समावेश आहे. आम्ही पारंपारिक टूर ऑपरेटर्सच्या तुलनेत कमी दरात अत्यंत कस्टमाइज्ड आणि पारदर्शक सेवा देतो. तुम्हाला खर्चाच्या तुलनेत सर्वोत्तम मूल्य मिळावे यासाठी आम्ही आधुनिक बुकिंग प्रणालीचा वापर करतो.",
          "प्रीमियम टूरिंग पर्याय देत असताना, एक नामांकित ट्रान्सपोर्ट कॉन्ट्रॅक्टर आणि फ्लीट ओनर म्हणून आमची ओळख करून देण्याच्या संधीचे आम्ही स्वागत करतो. आम्ही आमच्या टीमच्या सक्रिय समर्पणाला प्रोत्साहन देत आणि ते सुनिश्चित करत आमच्या संपूर्ण कंपनीमध्ये कडक गुणवत्ता व्यवस्थापन मानके पाळतो.",
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
        hi: "सप्ताहांत की बेहतरीन सैर",
        mr: "परिपूर्ण वीकेंड सहल",
      },
      content: {
        en: [
          "We provide Ajanta Ellora Car Rental services at awesome offers. Hire a cab to Ajanta Ellora from us with the best local car services. Experience our online cab booking services to Ajanta Ellora with reliable and polite drivers. Prachi Tours & Travels Airport Cabs / Taxi, the leading car rental services in the region, has a varied fleet of cars like Swift Dzire, Tempo Traveller, and Innova available to hire for a Cab to Ajanta Ellora at affordable rates.",
          "For Ajanta and Ellora Caves outstation (roundtrip) bookings, travelers can secure the best deals on our online cab/Cab booking platform, alongside transparent updates on cab fares and comprehensive tour package details. Prachi Tours & Travels Airport Cabs / Taxi provides both economy and luxurious cab options to Ajanta and Ellora Caves, which are ideal for small family weekend trips, corporate outings, and long weekend getaways.",
        ],
        hi: [
          "हम शानदार ऑफ़र पर अजंता एलोरा कार रेंटल सेवाएं प्रदान करते हैं। सर्वोत्तम स्थानीय कार सेवाओं के साथ हमसे अजंता एलोरा के लिए कैब किराए पर लें। विश्वसनीय और विनम्र ड्राइवरों के साथ अजंता एलोरा के लिए हमारी ऑनलाइन कैब बुकिंग सेवाओं का अनुभव करें। क्षेत्र की अग्रणी कार रेंटल सेवा प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास किफायती दरों पर अजंता एलोरा के लिए कैब किराए पर लेने हेतु स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा जैसी कारों का विविध बेड़ा उपलब्ध है।",
          "अजंता और एलोरा गुफाओं की आउटस्टेशन (राउंडट्रिप) बुकिंग के लिए, यात्री कैब किराए पर पारदर्शी अपडेट और व्यापक टूर पैकेज विवरण के साथ हमारे ऑनलाइन कैब बुकिंग प्लेटफॉर्म पर सर्वोत्तम सौदे प्राप्त कर सकते हैं। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी अजंता और एलोरा गुफाओं के लिए इकोनॉमी और लक्ज़री दोनों कैब विकल्प प्रदान करता है, जो छोटे परिवार की सप्ताहांत यात्राओं, कॉर्पोरेट आउटिंग और लंबे सप्ताहांत की छुट्टियों के लिए आदर्श हैं।",
        ],
        mr: [
          "आम्ही उत्तम ऑफर्सवर अजिंठा वेरूळ कार रेंटल सेवा पुरवतो. सर्वोत्तम स्थानिक कार सेवांसह आमच्याकडून अजिंठा वेरूळसाठी कॅब भाड्याने घ्या. विश्वासार्ह आणि नम्र चालकांसह अजिंठा वेरूळसाठी आमच्या ऑनलाइन कॅब बुकिंग सेवांचा अनुभव घ्या. या भागातील अग्रगण्य कार रेंटल सेवा प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे परवडणाऱ्या दरात अजिंठा वेरूळसाठी कॅब भाड्याने घेण्यासाठी स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांसारख्या गाड्यांचा विविध ताफा उपलब्ध आहे.",
          "अजिंठा आणि वेरूळ लेण्यांच्या आउटस्टेशन (राउंडट्रिप) बुकिंगसाठी, प्रवासी कॅब भाड्यावरील पारदर्शक माहिती आणि सर्वसमावेशक टूर पॅकेज तपशीलांसह आमच्या ऑनलाइन कॅब बुकिंग प्लॅटफॉर्मवर सर्वोत्तम डील्स मिळवू शकतात. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी अजिंठा आणि वेरूळ लेण्यांसाठी इकॉनॉमी आणि लक्झरी दोन्ही कॅब पर्याय देते, जे लहान कुटुंबाच्या वीकेंड सहली, कॉर्पोरेट आउटिंग आणि लांबच्या वीकेंड सुट्ट्यांसाठी आदर्श आहेत.",
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
          "हम शानदार ऑफ़र पर प्रीमियम सिटी कार रेंटल सेवाएं प्रदान करते हैं। सर्वोत्तम कार रेंटल सेवाओं का अनुभव करने के लिए हमसे स्थानीय या आउटस्टेशन कैब किराए पर लें। अत्यधिक विश्वसनीय, पेशेवर और विनम्र ड्राइवरों के साथ हमारी निर्बाध ऑनलाइन कैब बुकिंग प्रणाली का आनंद लें। क्षेत्र की अग्रणी वाहन रेंटल सेवा प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास सुव्यवस्थित कारों का एक विविध बेड़ा है—जिसमें स्विफ्ट डिजायर, टेम्पो ट्रैवलर और इनोवा शामिल हैं—जो अविश्वसनीय रूप से किफायती दरों पर किराए पर उपलब्ध हैं।",
          "चाहे आपको स्थानीय शहर की सवारी की आवश्यकता हो या आउटस्टेशन राउंडट्रिप की, यात्री यहीं हमारे ऑनलाइन कैब बुकिंग प्लेटफॉर्म पर सर्वोत्तम सौदे प्राप्त कर सकते हैं। हमारे प्रतिस्पर्धी कैब किराए, पारदर्शी मूल्य निर्धारण संरचनाओं और कस्टमाइज़ेबल टूर पैकेजों की जांच करें। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी इकोनॉमी और लक्ज़री दोनों वाहन विकल्प प्रदान करता है, जो हमें छोटे परिवार की सप्ताहांत यात्राओं, कॉर्पोरेट आउटिंग, एयरपोर्ट ट्रांसफर और लंबे सप्ताहांत की यात्राओं के लिए आदर्श विकल्प बनाता है।",
        ],
        mr: [
          "आम्ही उत्तम ऑफर्सवर प्रीमियम सिटी कार रेंटल सेवा पुरवतो. सर्वोत्तम कार रेंटल सेवांचा अनुभव घेण्यासाठी आमच्याकडून स्थानिक किंवा आउटस्टेशन कॅब भाड्याने घ्या. अत्यंत विश्वासार्ह, व्यावसायिक आणि नम्र चालकांसह आमच्या अखंड ऑनलाइन कॅब बुकिंग प्रणालीचा आनंद घ्या. या भागातील अग्रगण्य वाहन रेंटल सेवा प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे सुस्थितीतील गाड्यांचा विविध ताफा आहे—ज्यामध्ये स्विफ्ट डिझायर, टेम्पो ट्रॅव्हलर आणि इनोव्हा यांचा समावेश आहे—जे अत्यंत परवडणाऱ्या दरात भाड्याने उपलब्ध आहेत.",
          "तुम्हाला स्थानिक शहरातील राइडची गरज असो किंवा आउटस्टेशन राउंडट्रिपची, प्रवासी येथेच आमच्या ऑनलाइन कॅब बुकिंग प्लॅटफॉर्मवर सर्वोत्तम डील्स मिळवू शकतात. आमचे स्पर्धात्मक कॅब दर, पारदर्शक किंमत रचना आणि कस्टमायझेबल टूर पॅकेजेस पहा. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी इकॉनॉमी आणि लक्झरी दोन्ही वाहन पर्याय देते, ज्यामुळे आम्ही लहान कुटुंबाच्या वीकेंड सहली, कॉर्पोरेट आउटिंग, एअरपोर्ट ट्रान्सफर आणि लांबच्या वीकेंड प्रवासासाठी आदर्श पर्याय ठरतो.",
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
        hi: "एयरपोर्ट ड्रॉप उपलब्ध",
        mr: "एअरपोर्ट ड्रॉप उपलब्ध",
      },
      content: {
        en: [
          "The route to Mumbai is an important outstation route for both pilgrims and tourists, covering approximately 165 km via the Mumbai Nashik Expressway. Travelers can book Swift Dzire, Ertiga, Innova, or Tempo Traveller vehicles with experienced drivers for smooth transfers to Mumbai Airport (CSMIA) or any Mumbai location. Toll charges, GST, and driver allowances are included in our transparent pricing—no hidden costs.",
          "Our Mumbai Cab / Taxi Rental Service operates 24x7 with flexible drop-off and round-trip options. For pilgrims, we offer one-day darshan trips including Trimbakeshwar and other temples along the route. Corporate and family groups can choose sedan, SUV, or tempo traveller vehicles based on seating requirements. All vehicles are regularly serviced and sanitized for passenger safety on the highway. Book online or via WhatsApp with instant confirmation.",
        ],
        hi: [
          "मुंबई का मार्ग तीर्थयात्रियों और पर्यटकों दोनों के लिए एक महत्वपूर्ण आउटस्टेशन मार्ग है, जो मुंबई नासिक एक्सप्रेसवे के माध्यम से लगभग 165 किमी की दूरी तय करता है। यात्री मुंबई एयरपोर्ट (CSMIA) या मुंबई के किसी भी स्थान पर सुगम ट्रांसफर के लिए अनुभवी ड्राइवरों के साथ स्विफ्ट डिजायर, अर्टिगा, इनोवा या टेम्पो ट्रैवलर वाहन बुक कर सकते हैं। टोल शुल्क, जीएसटी और ड्राइवर भत्ते हमारे पारदर्शी मूल्य निर्धारण में शामिल हैं—कोई छिपी हुई लागत नहीं।",
          "हमारी मुंबई कैब / टैक्सी रेंटल सेवा लचीले ड्रॉप-ऑफ और राउंड-ट्रिप विकल्पों के साथ 24x7 संचालित होती है। तीर्थयात्रियों के लिए, हम मार्ग में पड़ने वाले त्र्यंबकेश्वर और अन्य मंदिरों सहित एक-दिवसीय दर्शन यात्राएं प्रदान करते हैं। कॉर्पोरेट और पारिवारिक समूह बैठने की आवश्यकताओं के आधार पर सेडान, एसयूवी या टेम्पो ट्रैवलर वाहन चुन सकते हैं। हाईवे पर यात्रियों की सुरक्षा के लिए सभी वाहनों की नियमित रूप से सर्विसिंग और सैनिटाइजेशन किया जाता है। तत्काल पुष्टि के साथ ऑनलाइन या व्हाट्सएप के माध्यम से बुक करें।",
        ],
        mr: [
          "मुंबईचा मार्ग हा भाविक आणि पर्यटक दोघांसाठी एक महत्त्वाचा आउटस्टेशन मार्ग आहे, जो मुंबई नाशिक एक्सप्रेसवेद्वारे सुमारे १६५ किमी अंतर पार करतो. प्रवासी मुंबई विमानतळ (CSMIA) किंवा मुंबईतील कोणत्याही ठिकाणी सुरळीत पोहोचण्यासाठी अनुभवी चालकांसह स्विफ्ट डिझायर, अर्टिगा, इनोव्हा किंवा टेम्पो ट्रॅव्हलर वाहने बुक करू शकतात. टोल शुल्क, जीएसटी आणि चालक भत्ते आमच्या पारदर्शक दरांमध्ये समाविष्ट आहेत—कोणताही छुपा खर्च नाही.",
          "आमची मुंबई कॅब / टॅक्सी रेंटल सेवा लवचिक ड्रॉप-ऑफ आणि राउंड-ट्रिप पर्यायांसह २४x७ कार्यरत आहे. भाविकांसाठी, आम्ही मार्गावरील त्र्यंबकेश्वर आणि इतर मंदिरांसह एकदिवसीय दर्शन सहली देतो. कॉर्पोरेट आणि कौटुंबिक गट आसनक्षमतेच्या गरजेनुसार सेडान, एसयूव्ही किंवा टेम्पो ट्रॅव्हलर वाहने निवडू शकतात. महामार्गावर प्रवाशांच्या सुरक्षिततेसाठी सर्व वाहनांची नियमित सर्व्हिसिंग आणि सॅनिटायझेशन केले जाते. त्वरित खात्रीसह ऑनलाइन किंवा व्हॉट्सॲपद्वारे बुक करा.",
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
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी आउटस्टेशन और स्थानीय कार रेंटल सेवाओं का प्रमुख प्रदाता है, जिसमें विशेष पुणे कैब और कैब / टैक्सी रेंटल सेवाएं शामिल हैं। हम पुणे एयरपोर्ट के लिए किफायती कार रेंटल विकल्प, साथ ही पुणे के लिए सामान्य शहर-से-शहर ट्रांसफर प्रदान करते हैं। हम पारंपरिक टूर ऑपरेटरों की तुलना में कम दर पर अत्यधिक कस्टमाइज़्ड और पारदर्शी सेवा प्रदान करते हैं, और यह सुनिश्चित करने के लिए आधुनिक बुकिंग प्रणालियों का लाभ उठाते हैं कि आपको लागत के मुकाबले सर्वोत्तम मूल्य मिले।",
          "बहुमुखी टूरिंग विकल्प प्रदान करते हुए, हम एक प्रतिष्ठित ट्रांसपोर्ट कॉन्ट्रैक्टर और फ्लीट ओनर के रूप में अपना परिचय देने के अवसर का स्वागत करते हैं। हम अपनी टीम के सक्रिय समर्पण को प्रोत्साहित और सुनिश्चित करते हुए अपनी पूरी कंपनी में सख्त गुणवत्ता प्रबंधन मानकों को बनाए रखते हैं।",
        ],
        mr: [
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी ही आउटस्टेशन आणि स्थानिक कार रेंटल सेवांची प्रमुख प्रदाता आहे, ज्यामध्ये विशेष पुणे कॅब आणि कॅब / टॅक्सी रेंटल सेवांचा समावेश आहे. आम्ही पुणे विमानतळासाठी परवडणारे कार रेंटल पर्याय, तसेच पुण्यासाठी सामान्य शहर-ते-शहर ट्रान्सफर देतो. आम्ही पारंपारिक टूर ऑपरेटर्सच्या तुलनेत कमी दरात अत्यंत कस्टमाइज्ड आणि पारदर्शक सेवा देतो, आणि तुम्हाला खर्चाच्या तुलनेत सर्वोत्तम मूल्य मिळावे यासाठी आधुनिक बुकिंग प्रणालीचा वापर करतो.",
          "अष्टपैलू टूरिंग पर्याय देत असताना, एक नामांकित ट्रान्सपोर्ट कॉन्ट्रॅक्टर आणि फ्लीट ओनर म्हणून आमची ओळख करून देण्याच्या संधीचे आम्ही स्वागत करतो. आम्ही आमच्या टीमच्या सक्रिय समर्पणाला प्रोत्साहन देत आणि ते सुनिश्चित करत आमच्या संपूर्ण कंपनीमध्ये कडक गुणवत्ता व्यवस्थापन मानके पाळतो.",
        ],
      },
      closing: {
        en: "Call us to plan your trip!",
        hi: "अपनी यात्रा की योजना बनाने के लिए हमें कॉल करें!",
        mr: "तुमच्या सहलीचे नियोजन करण्यासाठी आम्हाला कॉल करा!",
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
      hi: "लोनावला कैब / टैक्सी रेंटल सेवा",
      mr: "लोणावळा कॅब / टॅक्सी रेंटल सेवा",
    },
    slug: "lonavala-car-rental-cab",
    image: "/images/nashik-lonavala.jpg",
    tagline: {
      en: "Lonavala Cab / Taxi Rental Service",
      hi: "लोनावला कैब / टैक्सी रेंटल सेवा",
      mr: "लोणावळा कॅब / टॅक्सी रेंटल सेवा",
    },
    company: "Prachi Tours & Travels Airport Cab",
    popularCity: true,
    popularCityTitle: {
      en: "Lonavala & Khandala",
      hi: "लोनावला और खंडाला",
      mr: "लोणावळा आणि खंडाळा",
    },
    longDistance: {
      heading: {
        en: "Combine with Pune",
        hi: "पुणे के साथ संयोजित करें",
        mr: "पुण्यासोबत एकत्र करा",
      },
      content: {
        en: [
          "We provide premium Lonavala Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Lonavala from us to experience the finest intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who know the routes perfectly. Prachi Tours & Travels Airport Cabs / Taxi, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, spacious Innovas, and comfortable Tempo Travellers—all available for hire at incredibly affordable rates.",
          "For your next Lonavala outstation roundtrip or one-way drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Lonavala tour packages.",
        ],
        hi: [
          "हम शानदार ऑफ़र और प्रतिस्पर्धी पैकेज से भरपूर प्रीमियम लोनावला कार रेंटल सेवाएं प्रदान करते हैं। क्षेत्र में बेहतरीन इंटरसिटी यात्रा सेवाओं का अनुभव करने के लिए हमसे लोनावला के लिए एक विश्वसनीय कैब किराए पर लें। पेशेवर, अत्यधिक अनुभवी और विनम्र ड्राइवरों द्वारा समर्थित हमारी निर्बाध ऑनलाइन कैब बुकिंग प्रणाली का आनंद लें जो मार्गों को अच्छी तरह जानते हैं। अग्रणी वाहन रेंटल सेवा प्रदाता प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास सुव्यवस्थित कारों का एक विविध बेड़ा है—जिसमें ईंधन-कुशल स्विफ्ट डिजायर, विशाल इनोवा और आरामदायक टेम्पो ट्रैवलर शामिल हैं—जो अविश्वसनीय रूप से किफायती दरों पर किराए पर उपलब्ध हैं।",
          "आपकी अगली लोनावला आउटस्टेशन राउंडट्रिप या वन-वे ड्रॉप के लिए, यात्री यहीं हमारे बुकिंग प्लेटफॉर्म पर सर्वोत्तम सौदे प्राप्त कर सकते हैं। हमारे कस्टमाइज़ेबल लोनावला टूर पैकेजों के साथ पारदर्शी, अग्रिम कैब किराए और सभी समावेशी लागत विवरण प्राप्त करें।",
        ],
        mr: [
          "आम्ही उत्तम ऑफर्स आणि स्पर्धात्मक पॅकेजेसने परिपूर्ण प्रीमियम लोणावळा कार रेंटल सेवा पुरवतो. या भागातील सर्वोत्तम इंटरसिटी प्रवास सेवांचा अनुभव घेण्यासाठी आमच्याकडून लोणावळ्यासाठी विश्वासार्ह कॅब भाड्याने घ्या. मार्गांची अचूक माहिती असलेल्या व्यावसायिक, अत्यंत अनुभवी आणि नम्र चालकांच्या पाठबळासह आमच्या अखंड ऑनलाइन कॅब बुकिंग प्रणालीचा आनंद घ्या. अग्रगण्य वाहन रेंटल सेवा प्रदाता प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे सुस्थितीतील गाड्यांचा विविध ताफा आहे—ज्यामध्ये इंधन-कार्यक्षम स्विफ्ट डिझायर, प्रशस्त इनोव्हा आणि आरामदायी टेम्पो ट्रॅव्हलर यांचा समावेश आहे—जे अत्यंत परवडणाऱ्या दरात भाड्याने उपलब्ध आहेत.",
          "तुमच्या पुढील लोणावळा आउटस्टेशन राउंडट्रिप किंवा वन-वे ड्रॉपसाठी, प्रवासी येथेच आमच्या बुकिंग प्लॅटफॉर्मवर सर्वोत्तम डील्स मिळवू शकतात. आमच्या कस्टमायझेबल लोणावळा टूर पॅकेजेससह पारदर्शक, आगाऊ कॅब भाडे आणि सर्वसमावेशक खर्चाचा तपशील मिळवा.",
        ],
      },
      closing: {
        en: "Ask us about Lonavala-Pune combo!",
        hi: "लोनावला-पुणे कॉम्बो के बारे में हमसे पूछें!",
        mr: "लोणावळा-पुणे कॉम्बोबद्दल आम्हाला विचारा!",
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
          "हम शानदार ऑफ़र और प्रतिस्पर्धी पैकेज से भरपूर प्रीमियम महाबलेश्वर कार रेंटल सेवाएं प्रदान करते हैं। क्षेत्र में बेहतरीन इंटरसिटी यात्रा सेवाओं का अनुभव करने के लिए हमसे महाबलेश्वर के लिए एक विश्वसनीय कैब किराए पर लें। पेशेवर, अत्यधिक अनुभवी और विनम्र ड्राइवरों द्वारा समर्थित हमारी निर्बाध ऑनलाइन कैब बुकिंग प्रणाली का आनंद लें जो सुंदर घाटों से होकर एक सुगम यात्रा सुनिश्चित करते हैं। अग्रणी वाहन रेंटल सेवा प्रदाता प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास सुव्यवस्थित कारों का एक विविध बेड़ा है—जिसमें ईंधन-कुशल स्विफ्ट डिजायर, विशाल अर्टिगा, प्रीमियम इनोवा और आरामदायक टेम्पो ट्रैवलर शामिल हैं—जो अविश्वसनीय रूप से किफायती दरों पर किराए पर उपलब्ध हैं।",
          "आपकी अगली महाबलेश्वर आउटस्टेशन राउंडट्रिप या वन-वे ड्रॉप के लिए, यात्री यहीं हमारे बुकिंग प्लेटफॉर्म पर सर्वोत्तम सौदे प्राप्त कर सकते हैं। हमारे कस्टमाइज़ेबल महाबलेश्वर टूर पैकेजों के साथ पारदर्शी, अग्रिम कैब किराए और सभी समावेशी लागत विवरण प्राप्त करें। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी आपके समूह के आकार और यात्रा प्राथमिकताओं के अनुरूप इकोनॉमी और लक्ज़री दोनों वाहन विकल्प प्रदान करता है, जो हमारी सेवाओं को स्ट्रॉबेरी फार्मों के लिए छोटे परिवार की सप्ताहांत यात्राओं, कार्यालय या कॉर्पोरेट आउटिंग और विस्तारित सड़क यात्राओं के लिए आदर्श विकल्प बनाता है। हम आधुनिक शेड्यूलिंग और पारदर्शी मूल्य निर्धारण का लाभ उठाकर गुणवत्ता और लागत के बीच की खाई को पाटते हैं, जिससे यह सुनिश्चित होता है कि आपको कभी भी छिपे हुए शुल्कों की चिंता न करनी पड़े। आज ही अपनी राइड बुक करें और महाबलेश्वर की अपनी छुट्टी को पूरी तरह से तनाव-मुक्त बनाएं।",
        ],
        mr: [
          "आम्ही उत्तम ऑफर्स आणि स्पर्धात्मक पॅकेजेसने परिपूर्ण प्रीमियम महाबळेश्वर कार रेंटल सेवा पुरवतो. या भागातील सर्वोत्तम इंटरसिटी प्रवास सेवांचा अनुभव घेण्यासाठी आमच्याकडून महाबळेश्वरसाठी विश्वासार्ह कॅब भाड्याने घ्या. निसर्गरम्य घाटांमधून सुरळीत प्रवासाची खात्री देणाऱ्या व्यावसायिक, अत्यंत अनुभवी आणि नम्र चालकांच्या पाठबळासह आमच्या अखंड ऑनलाइन कॅब बुकिंग प्रणालीचा आनंद घ्या. अग्रगण्य वाहन रेंटल सेवा प्रदाता प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे सुस्थितीतील गाड्यांचा विविध ताफा आहे—ज्यामध्ये इंधन-कार्यक्षम स्विफ्ट डिझायर, प्रशस्त अर्टिगा, प्रीमियम इनोव्हा आणि आरामदायी टेम्पो ट्रॅव्हलर यांचा समावेश आहे—जे अत्यंत परवडणाऱ्या दरात भाड्याने उपलब्ध आहेत.",
          "तुमच्या पुढील महाबळेश्वर आउटस्टेशन राउंडट्रिप किंवा वन-वे ड्रॉपसाठी, प्रवासी येथेच आमच्या बुकिंग प्लॅटफॉर्मवर सर्वोत्तम डील्स मिळवू शकतात. आमच्या कस्टमायझेबल महाबळेश्वर टूर पॅकेजेससह पारदर्शक, आगाऊ कॅब भाडे आणि सर्वसमावेशक खर्चाचा तपशील मिळवा. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी तुमच्या गटाच्या आकारानुसार आणि प्रवासाच्या पसंतीनुसार इकॉनॉमी आणि लक्झरी दोन्ही वाहन पर्याय देते, ज्यामुळे स्ट्रॉबेरी फार्मच्या लहान कौटुंबिक वीकेंड सहली, ऑफिस किंवा कॉर्पोरेट आउटिंग आणि लांबच्या रोड ट्रिपसाठी आमच्या सेवा आदर्श ठरतात. आम्ही आधुनिक वेळापत्रक आणि पारदर्शक किंमत रचना वापरून गुणवत्ता आणि खर्चातील अंतर भरून काढतो, ज्यामुळे तुम्हाला कधीही छुप्या शुल्काची काळजी करावी लागत नाही. आजच तुमची राइड बुक करा आणि महाबळेश्वरची तुमची सुट्टी पूर्णपणे तणावमुक्त बनवा.",
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
        hi: "सर्वश्रेष्ठ महाराष्ट्र-गोवा रोड ट्रिप",
        mr: "सर्वोत्तम महाराष्ट्र-गोवा रोड ट्रिप",
      },
      content: {
        en: [
          "We provide premium Goa Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Goa from us to experience the finest long-distance intercity travel services in the region. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth and safe long-distance journey. Prachi Tours & Travels Airport Cabs / Taxi, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
          "For your next Goa outstation roundtrip or long-distance drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Goa tour packages. Prachi Tours & Travels Airport Cabs / Taxi provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for small family vacations, extended coastal road trips, and group holidays. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Goa completely stress-free.",
        ],
        hi: [
          "हम शानदार ऑफ़र और प्रतिस्पर्धी पैकेज से भरपूर प्रीमियम गोवा कार रेंटल सेवाएं प्रदान करते हैं। क्षेत्र में बेहतरीन लंबी दूरी की इंटरसिटी यात्रा सेवाओं का अनुभव करने के लिए हमसे गोवा के लिए एक विश्वसनीय कैब किराए पर लें। पेशेवर, अत्यधिक अनुभवी और विनम्र ड्राइवरों द्वारा समर्थित हमारी निर्बाध ऑनलाइन कैब बुकिंग प्रणाली का आनंद लें जो एक सुगम और सुरक्षित लंबी दूरी की यात्रा सुनिश्चित करते हैं। अग्रणी वाहन रेंटल सेवा प्रदाता प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास सुव्यवस्थित कारों का एक विविध बेड़ा है—जिसमें ईंधन-कुशल स्विफ्ट डिजायर, प्रीमियम इनोवा और विशाल टेम्पो ट्रैवलर शामिल हैं—जो अविश्वसनीय रूप से किफायती दरों पर किराए पर उपलब्ध हैं।",
          "आपकी अगली गोवा आउटस्टेशन राउंडट्रिप या लंबी दूरी की ड्रॉप के लिए, यात्री यहीं हमारे बुकिंग प्लेटफॉर्म पर सर्वोत्तम सौदे प्राप्त कर सकते हैं। हमारे कस्टमाइज़ेबल गोवा टूर पैकेजों के साथ पारदर्शी, अग्रिम कैब किराए और सभी समावेशी लागत विवरण प्राप्त करें। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी आपके समूह के आकार और यात्रा प्राथमिकताओं के अनुरूप इकोनॉमी और लक्ज़री दोनों वाहन विकल्प प्रदान करता है, जो हमारी सेवाओं को छोटे परिवार की छुट्टियों, विस्तारित तटीय सड़क यात्राओं और समूह छुट्टियों के लिए आदर्श विकल्प बनाता है। हम आधुनिक शेड्यूलिंग और पारदर्शी मूल्य निर्धारण का लाभ उठाकर गुणवत्ता और लागत के बीच की खाई को पाटते हैं, जिससे यह सुनिश्चित होता है कि आपको कभी भी छिपे हुए शुल्कों की चिंता न करनी पड़े। आज ही अपनी राइड बुक करें और गोवा की अपनी यात्रा को पूरी तरह से तनाव-मुक्त बनाएं।",
        ],
        mr: [
          "आम्ही उत्तम ऑफर्स आणि स्पर्धात्मक पॅकेजेसने परिपूर्ण प्रीमियम गोवा कार रेंटल सेवा पुरवतो. या भागातील सर्वोत्तम लांब पल्ल्याच्या इंटरसिटी प्रवास सेवांचा अनुभव घेण्यासाठी आमच्याकडून गोव्यासाठी विश्वासार्ह कॅब भाड्याने घ्या. सुरळीत आणि सुरक्षित लांब पल्ल्याच्या प्रवासाची खात्री देणाऱ्या व्यावसायिक, अत्यंत अनुभवी आणि नम्र चालकांच्या पाठबळासह आमच्या अखंड ऑनलाइन कॅब बुकिंग प्रणालीचा आनंद घ्या. अग्रगण्य वाहन रेंटल सेवा प्रदाता प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे सुस्थितीतील गाड्यांचा विविध ताफा आहे—ज्यामध्ये इंधन-कार्यक्षम स्विफ्ट डिझायर, प्रीमियम इनोव्हा आणि प्रशस्त टेम्पो ट्रॅव्हलर यांचा समावेश आहे—जे अत्यंत परवडणाऱ्या दरात भाड्याने उपलब्ध आहेत.",
          "तुमच्या पुढील गोवा आउटस्टेशन राउंडट्रिप किंवा लांब पल्ल्याच्या ड्रॉपसाठी, प्रवासी येथेच आमच्या बुकिंग प्लॅटफॉर्मवर सर्वोत्तम डील्स मिळवू शकतात. आमच्या कस्टमायझेबल गोवा टूर पॅकेजेससह पारदर्शक, आगाऊ कॅब भाडे आणि सर्वसमावेशक खर्चाचा तपशील मिळवा. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी तुमच्या गटाच्या आकारानुसार आणि प्रवासाच्या पसंतीनुसार इकॉनॉमी आणि लक्झरी दोन्ही वाहन पर्याय देते, ज्यामुळे लहान कौटुंबिक सुट्ट्या, विस्तारित कोस्टल रोड ट्रिप आणि ग्रुप हॉलिडेसाठी आमच्या सेवा आदर्श ठरतात. आम्ही आधुनिक वेळापत्रक आणि पारदर्शक किंमत रचना वापरून गुणवत्ता आणि खर्चातील अंतर भरून काढतो, ज्यामुळे तुम्हाला कधीही छुप्या शुल्काची काळजी करावी लागत नाही. आजच तुमची राइड बुक करा आणि गोव्याचा तुमचा प्रवास पूर्णपणे तणावमुक्त बनवा.",
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
          "हम शानदार ऑफ़र और प्रतिस्पर्धी पैकेज से भरपूर प्रीमियम कोंकण कार रेंटल सेवाएं प्रदान करते हैं। क्षेत्र में बेहतरीन इंटरसिटी यात्रा सेवाओं का अनुभव करने के लिए हमसे कोंकण के लिए एक विश्वसनीय कैब किराए पर लें। पेशेवर, अत्यधिक अनुभवी और विनम्र ड्राइवरों द्वारा समर्थित हमारी निर्बाध ऑनलाइन कैब बुकिंग प्रणाली का आनंद लें जो सुंदर तटीय क्षेत्र तक एक सुगम यात्रा सुनिश्चित करते हैं। अग्रणी वाहन रेंटल सेवा प्रदाता प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास सुव्यवस्थित कारों का एक विविध बेड़ा है—जिसमें ईंधन-कुशल स्विफ्ट डिजायर, प्रीमियम इनोवा और आरामदायक टेम्पो ट्रैवलर शामिल हैं—जो अविश्वसनीय रूप से किफायती दरों पर किराए पर उपलब्ध हैं।",
          "आपकी अगली कोंकण आउटस्टेशन राउंडट्रिप, समुद्र तट की छुट्टी या तटीय यात्रा के लिए, यात्री यहीं हमारे बुकिंग प्लेटफॉर्म पर सर्वोत्तम सौदे प्राप्त कर सकते हैं। हमारे कस्टमाइज़ेबल कोंकण टूर पैकेजों के साथ पारदर्शी, अग्रिम कैब किराए और सभी समावेशी लागत विवरण प्राप्त करें। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी आपके समूह के आकार और यात्रा प्राथमिकताओं के अनुरूप इकोनॉमी और लक्ज़री दोनों वाहन विकल्प प्रदान करता है, जो हमारी सेवाओं को पारिवारिक बीच छुट्टियों, प्रकृति सप्ताहांत की सैर और विस्तारित तटीय सड़क यात्राओं के लिए आदर्श विकल्प बनाता है। हम आधुनिक शेड्यूलिंग और पारदर्शी मूल्य निर्धारण का लाभ उठाकर गुणवत्ता और लागत के बीच की खाई को पाटते हैं, जिससे यह सुनिश्चित होता है कि आपको कभी भी छिपे हुए शुल्कों की चिंता न करनी पड़े। आज ही अपनी राइड बुक करें और कोंकण की अपनी यात्रा को पूरी तरह से तनाव-मुक्त बनाएं।",
        ],
        mr: [
          "आम्ही उत्तम ऑफर्स आणि स्पर्धात्मक पॅकेजेसने परिपूर्ण प्रीमियम कोकण कार रेंटल सेवा पुरवतो. या भागातील सर्वोत्तम इंटरसिटी प्रवास सेवांचा अनुभव घेण्यासाठी आमच्याकडून कोकणासाठी विश्वासार्ह कॅब भाड्याने घ्या. सुंदर किनारपट्टीच्या भागात सुरळीत प्रवासाची खात्री देणाऱ्या व्यावसायिक, अत्यंत अनुभवी आणि नम्र चालकांच्या पाठबळासह आमच्या अखंड ऑनलाइन कॅब बुकिंग प्रणालीचा आनंद घ्या. अग्रगण्य वाहन रेंटल सेवा प्रदाता प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे सुस्थितीतील गाड्यांचा विविध ताफा आहे—ज्यामध्ये इंधन-कार्यक्षम स्विफ्ट डिझायर, प्रीमियम इनोव्हा आणि आरामदायी टेम्पो ट्रॅव्हलर यांचा समावेश आहे—जे अत्यंत परवडणाऱ्या दरात भाड्याने उपलब्ध आहेत.",
          "तुमच्या पुढील कोकण आउटस्टेशन राउंडट्रिप, समुद्रकिनाऱ्यावरील सुट्टी किंवा किनारपट्टीच्या सहलीसाठी, प्रवासी येथेच आमच्या बुकिंग प्लॅटफॉर्मवर सर्वोत्तम डील्स मिळवू शकतात. आमच्या कस्टमायझेबल कोकण टूर पॅकेजेससह पारदर्शक, आगाऊ कॅब भाडे आणि सर्वसमावेशक खर्चाचा तपशील मिळवा. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी तुमच्या गटाच्या आकारानुसार आणि प्रवासाच्या पसंतीनुसार इकॉनॉमी आणि लक्झरी दोन्ही वाहन पर्याय देते, ज्यामुळे कौटुंबिक बीच सुट्ट्या, निसर्ग वीकेंड सहली आणि विस्तारित कोस्टल रोड ट्रिपसाठी आमच्या सेवा आदर्श ठरतात. आम्ही आधुनिक वेळापत्रक आणि पारदर्शक किंमत रचना वापरून गुणवत्ता आणि खर्चातील अंतर भरून काढतो, ज्यामुळे तुम्हाला कधीही छुप्या शुल्काची काळजी करावी लागत नाही. आजच तुमची राइड बुक करा आणि कोकणचा तुमचा प्रवास पूर्णपणे तणावमुक्त बनवा.",
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
          "हम तेज़ समृद्धि महामार्ग मार्ग का पूरा लाभ उठाते हुए, शानदार ऑफ़र और प्रतिस्पर्धी पैकेज से भरपूर प्रीमियम नागपुर कार रेंटल सेवाएं प्रदान करते हैं। क्षेत्र में बेहतरीन लंबी दूरी की इंटरसिटी यात्रा सेवाओं का अनुभव करने के लिए हमसे नागपुर के लिए एक विश्वसनीय कैब किराए पर लें। पेशेवर, अत्यधिक अनुभवी और विनम्र ड्राइवरों द्वारा समर्थित हमारी निर्बाध ऑनलाइन कैब बुकिंग प्रणाली का आनंद लें जो एक सुगम, तेज़ और सुरक्षित लंबी दूरी की यात्रा सुनिश्चित करते हैं। अग्रणी वाहन रेंटल सेवा प्रदाता प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास सुव्यवस्थित कारों का एक विविध बेड़ा है—जिसमें ईंधन-कुशल स्विफ्ट डिजायर, प्रीमियम इनोवा और विशाल टेम्पो ट्रैवलर शामिल हैं—जो अविश्वसनीय रूप से किफायती दरों पर किराए पर उपलब्ध हैं।",
          "आपकी अगली नागपुर आउटस्टेशन राउंडट्रिप, पारिवारिक छुट्टी या व्यावसायिक ड्रॉप के लिए, यात्री यहीं हमारे बुकिंग प्लेटफॉर्म पर सर्वोत्तम सौदे प्राप्त कर सकते हैं। हमारे कस्टमाइज़ेबल नागपुर टूर पैकेजों के साथ पारदर्शी, अग्रिम कैब किराए और सभी समावेशी लागत विवरण प्राप्त करें। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी आपके समूह के आकार और यात्रा प्राथमिकताओं के अनुरूप इकोनॉमी और लक्ज़री दोनों वाहन विकल्प प्रदान करता है, जो हमारी सेवाओं को लंबी दूरी की पारिवारिक यात्रा, कॉर्पोरेट आउटिंग और विस्तारित सड़क यात्राओं के लिए आदर्श विकल्प बनाता है। हम आधुनिक शेड्यूलिंग और पारदर्शी मूल्य निर्धारण का लाभ उठाकर गुणवत्ता और लागत के बीच की खाई को पाटते हैं, जिससे यह सुनिश्चित होता है कि आपको कभी भी छिपे हुए शुल्कों की चिंता न करनी पड़े। आज ही अपनी राइड बुक करें और नागपुर की अपनी यात्रा को पूरी तरह से तनाव-मुक्त बनाएं।",
        ],
        mr: [
          "आम्ही वेगवान समृद्धी महामार्ग मार्गाचा पूर्ण लाभ घेत, उत्तम ऑफर्स आणि स्पर्धात्मक पॅकेजेसने परिपूर्ण प्रीमियम नागपूर कार रेंटल सेवा पुरवतो. या भागातील सर्वोत्तम लांब पल्ल्याच्या इंटरसिटी प्रवास सेवांचा अनुभव घेण्यासाठी आमच्याकडून नागपूरसाठी विश्वासार्ह कॅब भाड्याने घ्या. सुरळीत, जलद आणि सुरक्षित लांब पल्ल्याच्या प्रवासाची खात्री देणाऱ्या व्यावसायिक, अत्यंत अनुभवी आणि नम्र चालकांच्या पाठबळासह आमच्या अखंड ऑनलाइन कॅब बुकिंग प्रणालीचा आनंद घ्या. अग्रगण्य वाहन रेंटल सेवा प्रदाता प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे सुस्थितीतील गाड्यांचा विविध ताफा आहे—ज्यामध्ये इंधन-कार्यक्षम स्विफ्ट डिझायर, प्रीमियम इनोव्हा आणि प्रशस्त टेम्पो ट्रॅव्हलर यांचा समावेश आहे—जे अत्यंत परवडणाऱ्या दरात भाड्याने उपलब्ध आहेत.",
          "तुमच्या पुढील नागपूर आउटस्टेशन राउंडट्रिप, कौटुंबिक सुट्टी किंवा व्यावसायिक ड्रॉपसाठी, प्रवासी येथेच आमच्या बुकिंग प्लॅटफॉर्मवर सर्वोत्तम डील्स मिळवू शकतात. आमच्या कस्टमायझेबल नागपूर टूर पॅकेजेससह पारदर्शक, आगाऊ कॅब भाडे आणि सर्वसमावेशक खर्चाचा तपशील मिळवा. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी तुमच्या गटाच्या आकारानुसार आणि प्रवासाच्या पसंतीनुसार इकॉनॉमी आणि लक्झरी दोन्ही वाहन पर्याय देते, ज्यामुळे लांब पल्ल्याचा कौटुंबिक प्रवास, कॉर्पोरेट आउटिंग आणि विस्तारित रोड ट्रिपसाठी आमच्या सेवा आदर्श ठरतात. आम्ही आधुनिक वेळापत्रक आणि पारदर्शक किंमत रचना वापरून गुणवत्ता आणि खर्चातील अंतर भरून काढतो, ज्यामुळे तुम्हाला कधीही छुप्या शुल्काची काळजी करावी लागत नाही. आजच तुमची राइड बुक करा आणि नागपूरचा तुमचा प्रवास पूर्णपणे तणावमुक्त बनवा.",
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
        hi: "उज्जैन विस्तार",
        mr: "उज्जैन विस्तार",
      },
      content: {
        en: [
          "We provide premium Indore Car Rental services packed with awesome offers and competitive packages. Hire a reliable cab to Indore from us to experience the finest long-distance intercity travel services across state lines. Enjoy our seamless online cab booking system, backed by professional, highly experienced, and polite drivers who ensure a smooth and safe long-distance journey. Prachi Tours & Travels Airport Cabs / Taxi, the leading vehicle rental service provider, boasts a diverse and well-maintained fleet of cars—including fuel-efficient Swift Dzires, premium Innovas, and spacious Tempo Travellers—all available for hire at incredibly affordable rates.",
          "For your next Indore outstation roundtrip, family holiday, or business drop, travelers can unlock the absolute best deals right here on our booking platform. Get transparent, up-front cab fares and all-inclusive cost details with our customizable Indore tour packages. Prachi Tours & Travels Airport Cabs / Taxi provides both economy and luxurious vehicle options tailored to your group size and travel preferences, making our services the ideal choice for long-distance family vacations, corporate outings, and extended road trips. We bridge the gap between quality and cost by leveraging modern scheduling and transparent pricing, ensuring you never have to worry about hidden charges. Book your ride today and make your journey to Indore completely stress-free.",
        ],
        hi: [
          "हम शानदार ऑफ़र और प्रतिस्पर्धी पैकेज से भरपूर प्रीमियम इंदौर कार रेंटल सेवाएं प्रदान करते हैं। राज्य की सीमाओं के पार बेहतरीन लंबी दूरी की इंटरसिटी यात्रा सेवाओं का अनुभव करने के लिए हमसे इंदौर के लिए एक विश्वसनीय कैब किराए पर लें। पेशेवर, अत्यधिक अनुभवी और विनम्र ड्राइवरों द्वारा समर्थित हमारी निर्बाध ऑनलाइन कैब बुकिंग प्रणाली का आनंद लें जो एक सुगम और सुरक्षित लंबी दूरी की यात्रा सुनिश्चित करते हैं। अग्रणी वाहन रेंटल सेवा प्रदाता प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी के पास सुव्यवस्थित कारों का एक विविध बेड़ा है—जिसमें ईंधन-कुशल स्विफ्ट डिजायर, प्रीमियम इनोवा और विशाल टेम्पो ट्रैवलर शामिल हैं—जो अविश्वसनीय रूप से किफायती दरों पर किराए पर उपलब्ध हैं।",
          "आपकी अगली इंदौर आउटस्टेशन राउंडट्रिप, पारिवारिक छुट्टी या व्यावसायिक ड्रॉप के लिए, यात्री यहीं हमारे बुकिंग प्लेटफॉर्म पर सर्वोत्तम सौदे प्राप्त कर सकते हैं। हमारे कस्टमाइज़ेबल इंदौर टूर पैकेजों के साथ पारदर्शी, अग्रिम कैब किराए और सभी समावेशी लागत विवरण प्राप्त करें। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी आपके समूह के आकार और यात्रा प्राथमिकताओं के अनुरूप इकोनॉमी और लक्ज़री दोनों वाहन विकल्प प्रदान करता है, जो हमारी सेवाओं को लंबी दूरी की पारिवारिक छुट्टियों, कॉर्पोरेट आउटिंग और विस्तारित सड़क यात्राओं के लिए आदर्श विकल्प बनाता है। हम आधुनिक शेड्यूलिंग और पारदर्शी मूल्य निर्धारण का लाभ उठाकर गुणवत्ता और लागत के बीच की खाई को पाटते हैं, जिससे यह सुनिश्चित होता है कि आपको कभी भी छिपे हुए शुल्कों की चिंता न करनी पड़े। आज ही अपनी राइड बुक करें और इंदौर की अपनी यात्रा को पूरी तरह से तनाव-मुक्त बनाएं।",
        ],
        mr: [
          "आम्ही उत्तम ऑफर्स आणि स्पर्धात्मक पॅकेजेसने परिपूर्ण प्रीमियम इंदूर कार रेंटल सेवा पुरवतो. राज्याच्या सीमा ओलांडून सर्वोत्तम लांब पल्ल्याच्या इंटरसिटी प्रवास सेवांचा अनुभव घेण्यासाठी आमच्याकडून इंदूरसाठी विश्वासार्ह कॅब भाड्याने घ्या. सुरळीत आणि सुरक्षित लांब पल्ल्याच्या प्रवासाची खात्री देणाऱ्या व्यावसायिक, अत्यंत अनुभवी आणि नम्र चालकांच्या पाठबळासह आमच्या अखंड ऑनलाइन कॅब बुकिंग प्रणालीचा आनंद घ्या. अग्रगण्य वाहन रेंटल सेवा प्रदाता प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सीकडे सुस्थितीतील गाड्यांचा विविध ताफा आहे—ज्यामध्ये इंधन-कार्यक्षम स्विफ्ट डिझायर, प्रीमियम इनोव्हा आणि प्रशस्त टेम्पो ट्रॅव्हलर यांचा समावेश आहे—जे अत्यंत परवडणाऱ्या दरात भाड्याने उपलब्ध आहेत.",
          "तुमच्या पुढील इंदूर आउटस्टेशन राउंडट्रिप, कौटुंबिक सुट्टी किंवा व्यावसायिक ड्रॉपसाठी, प्रवासी येथेच आमच्या बुकिंग प्लॅटफॉर्मवर सर्वोत्तम डील्स मिळवू शकतात. आमच्या कस्टमायझेबल इंदूर टूर पॅकेजेससह पारदर्शक, आगाऊ कॅब भाडे आणि सर्वसमावेशक खर्चाचा तपशील मिळवा. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी तुमच्या गटाच्या आकारानुसार आणि प्रवासाच्या पसंतीनुसार इकॉनॉमी आणि लक्झरी दोन्ही वाहन पर्याय देते, ज्यामुळे लांब पल्ल्याच्या कौटुंबिक सुट्ट्या, कॉर्पोरेट आउटिंग आणि विस्तारित रोड ट्रिपसाठी आमच्या सेवा आदर्श ठरतात. आम्ही आधुनिक वेळापत्रक आणि पारदर्शक किंमत रचना वापरून गुणवत्ता आणि खर्चातील अंतर भरून काढतो, ज्यामुळे तुम्हाला कधीही छुप्या शुल्काची काळजी करावी लागत नाही. आजच तुमची राइड बुक करा आणि इंदूरचा तुमचा प्रवास पूर्णपणे तणावमुक्त बनवा.",
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
        mr: "समृद्धी महामार्गाद्वारे जोडा",
      },
      content: {
        en: [
          "We provide premium Jalna Car Rental services packed with unbeatable offers and budget-friendly packages. Hire a reliable cab to Jalna from us to experience smooth and comfortable travel via the direct Samruddhi Mahamarg expressway corridor. Enjoy our seamless online cab booking platform with polite, skilled drivers who ensure on-time pick-ups and safe highway transit. Prachi Tours & Travels Airport Cabs / Taxi offers a wide fleet including Swift Dzire, Ertiga, Innova Crysta, and Tempo Travellers for groups of all sizes.",
          "Located in the Marathwada region adjacent to Chhatrapati Sambhajinagar, Jalna is a key commercial center known for its steel industry and agricultural trade. Whether you need a one-way transfer, roundtrip ride, or an extended Marathwada heritage tour combined with Shirdi and Ajanta-Ellora, we provide transparent fares with no hidden costs.",
        ],
        hi: [
          "हम अद्वितीय ऑफ़र और बजट-अनुकूल पैकेज से भरपूर प्रीमियम जालना कार रेंटल सेवाएं प्रदान करते हैं। सीधे समृद्धि महामार्ग एक्सप्रेसवे कॉरिडोर के माध्यम से सुगम और आरामदायक यात्रा का अनुभव करने के लिए हमसे जालना के लिए एक विश्वसनीय कैब किराए पर लें। विनम्र, कुशल ड्राइवरों के साथ हमारे निर्बाध ऑनलाइन कैब बुकिंग प्लेटफॉर्म का आनंद लें जो समय पर पिक-अप और सुरक्षित हाईवे यात्रा सुनिश्चित करते हैं। प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी सभी आकारों के समूहों के लिए स्विफ्ट डिजायर, अर्टिगा, इनोवा क्रिस्टा और टेम्पो ट्रैवलर सहित एक विस्तृत बेड़ा प्रदान करता है।",
          "छत्रपति संभाजीनगर से सटे मराठवाड़ा क्षेत्र में स्थित जालना अपने इस्पात उद्योग और कृषि व्यापार के लिए जाना जाने वाला एक प्रमुख वाणिज्यिक केंद्र है। चाहे आपको वन-वे ट्रांसफर, राउंडट्रिप राइड, या शिर्डी और अजंता-एलोरा के साथ संयुक्त एक विस्तारित मराठवाड़ा विरासत यात्रा की आवश्यकता हो, हम बिना किसी छिपी लागत के पारदर्शी किराए प्रदान करते हैं।",
        ],
        mr: [
          "आम्ही अद्वितीय ऑफर्स आणि बजेट-अनुकूल पॅकेजेसने परिपूर्ण प्रीमियम जालना कार रेंटल सेवा पुरवतो. थेट समृद्धी महामार्ग एक्सप्रेसवे कॉरिडॉरद्वारे सुरळीत आणि आरामदायी प्रवासाचा अनुभव घेण्यासाठी आमच्याकडून जालनासाठी विश्वासार्ह कॅब भाड्याने घ्या. वेळेवर पिक-अप आणि सुरक्षित महामार्ग प्रवासाची खात्री देणाऱ्या नम्र, कुशल चालकांसह आमच्या अखंड ऑनलाइन कॅब बुकिंग प्लॅटफॉर्मचा आनंद घ्या. प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी सर्व आकारांच्या गटांसाठी स्विफ्ट डिझायर, अर्टिगा, इनोव्हा क्रिस्टा आणि टेम्पो ट्रॅव्हलरसह एक मोठा ताफा पुरवते.",
          "छत्रपती संभाजीनगरला लागून असलेल्या मराठवाडा विभागात वसलेले जालना हे पोलाद उद्योग आणि कृषी व्यापारासाठी ओळखले जाणारे एक प्रमुख व्यापारी केंद्र आहे. तुम्हाला एकेरी ट्रान्सफर, राउंडट्रिप राइड किंवा शिर्डी आणि अजिंठा-वेरूळसह एकत्रित केलेल्या विस्तारित मराठवाडा वारसा सहलीची गरज असो, आम्ही कोणत्याही छुप्या खर्चाशिवाय पारदर्शक भाडे देतो.",
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
      hi: "इगतपुरी गेटअवे कैब / टैक्सी रेंटल सेवा",
      mr: "इगतपुरी गेटअवे कॅब / टॅक्सी रेंटल सेवा",
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
        hi: "कसारा घाट और मानसून की सैर",
        mr: "कसारा घाट आणि पावसाळी सहल",
      },
      content: {
        en: [
          "Escape to the serene hills with our specialized Igatpuri Car Rental services. Located along the Western Ghats between Mumbai and Nashik, Igatpuri is famous for the Vipassana International Academy (Dhammagiri), Bhatsa River Valley, Kalsubai Peak, and ancient forts like Tringalwadi. We offer flexible local sightseeing, resort pickup/drop, and outstation roundtrips at competitive prices.",
          "Whether you are traveling from Mumbai, Pune, or Nashik for a weekend retreat or monsoon getaway, Prachi Tours & Travels Airport Cabs / Taxi ensures a safe, comfortable drive through the Kasara Ghats with experienced mountain drivers. Choose from sedan models, spacious SUVs, or Tempo Travellers for group weekend tours.",
        ],
        hi: [
          "हमारी विशेष इगतपुरी कार रेंटल सेवाओं के साथ शांत पहाड़ियों की सैर पर निकलें। मुंबई और नासिक के बीच पश्चिमी घाट में स्थित इगतपुरी विपश्यना इंटरनेशनल अकादमी (धम्मगिरि), भातसा रिवर वैली, कलसुबाई शिखर और त्रिंगलवाड़ी जैसे प्राचीन किलों के लिए प्रसिद्ध है। हम प्रतिस्पर्धी कीमतों पर लचीले स्थानीय दर्शनीय स्थलों की सैर, रिसॉर्ट पिकअप/ड्रॉप और आउटस्टेशन राउंडट्रिप प्रदान करते हैं।",
          "चाहे आप सप्ताहांत की छुट्टी या मानसून की सैर के लिए मुंबई, पुणे या नासिक से यात्रा कर रहे हों, प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी अनुभवी पहाड़ी ड्राइवरों के साथ कसारा घाट से होकर एक सुरक्षित, आरामदायक ड्राइव सुनिश्चित करता है। समूह सप्ताहांत यात्राओं के लिए सेडान मॉडल, विशाल एसयूवी या टेम्पो ट्रैवलर में से चुनें।",
        ],
        mr: [
          "आमच्या विशेष इगतपुरी कार रेंटल सेवांसह शांत डोंगररांगांच्या सफरीला जा. मुंबई आणि नाशिक दरम्यान पश्चिम घाटात वसलेले इगतपुरी हे विपश्यना इंटरनॅशनल अकादमी (धम्मगिरी), भातसा रिव्हर व्हॅली, कळसूबाई शिखर आणि त्रिंगलवाडी यांसारख्या प्राचीन किल्ल्यांसाठी प्रसिद्ध आहे. आम्ही स्पर्धात्मक दरात लवचिक स्थानिक पर्यटन, रिसॉर्ट पिकअप/ड्रॉप आणि आउटस्टेशन राउंडट्रिप देतो.",
          "तुम्ही वीकेंड विश्रांतीसाठी किंवा पावसाळी सहलीसाठी मुंबई, पुणे किंवा नाशिकहून प्रवास करत असाल, तरी प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी अनुभवी घाट चालकांसह कसारा घाटातून सुरक्षित, आरामदायी प्रवासाची खात्री देते. ग्रुप वीकेंड टूर्ससाठी सेडान मॉडेल्स, प्रशस्त एसयूव्ही किंवा टेम्पो ट्रॅव्हलरमधून निवड करा.",
        ],
      },
      closing: {
        en: "Plan your Igatpuri hill retreat with us!",
        hi: "हमारे साथ अपनी इगतपुरी पहाड़ी यात्रा की योजना बनाएं!",
        mr: "आमच्यासोबत तुमच्या इगतपुरी डोंगरी सहलीचे नियोजन करा!",
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
          "प्राची टूर्स एंड ट्रैवल्स एयरपोर्ट कैब्स / टैक्सी नासिक, पुणे, शिर्डी और मुंबई महानगर क्षेत्र को जोड़ने वाली समर्पित ठाणे कार रेंटल सेवाएं प्रदान करता है। प्रमुख राष्ट्रीय राजमार्गों और समृद्धि महामार्ग प्रवेश गलियारे के चौराहे पर स्थित, ठाणे कॉर्पोरेट यात्रियों, दैनिक यात्रियों और तीर्थयात्रियों के लिए एक प्रमुख पारगमन गंतव्य है।",
          "घोड़बंदर रोड, माजीवाड़ा, ठाणे रेलवे स्टेशन और ईस्टर्न एक्सप्रेस हाईवे कनेक्टर सहित ठाणे के सभी प्रमुख इलाकों में डोर-टू-डोर कैब ड्रॉप का आनंद लें। हम स्वच्छ एसी कैब / टैक्सी, 24/7 ग्राहक सहायता, पारदर्शी टोल/किराया संरचनाएं और उपनगरीय यातायात प्रबंधन में अनुभवी पेशेवर ड्राइवर प्रदान करते हैं।",
        ],
        mr: [
          "प्राची टूर्स अँड ट्रॅव्हल्स एअरपोर्ट कॅब्स / टॅक्सी नाशिक, पुणे, शिर्डी आणि मुंबई महानगर प्रदेशाला जोडणाऱ्या समर्पित ठाणे कार रेंटल सेवा देते. प्रमुख राष्ट्रीय महामार्ग आणि समृद्धी महामार्ग प्रवेश कॉरिडॉरच्या चौकात वसलेले ठाणे हे कॉर्पोरेट प्रवासी, दैनंदिन प्रवासी आणि भाविकांसाठी एक महत्त्वाचे ट्रान्झिट ठिकाण आहे.",
          "घोडबंदर रोड, माजीवडा, ठाणे रेल्वे स्थानक आणि ईस्टर्न एक्सप्रेस हायवे कनेक्टरसह ठाण्यातील सर्व प्रमुख भागांमध्ये डोअर-टू-डोअर कॅब ड्रॉपचा आनंद घ्या. आम्ही स्वच्छ एसी कॅब / टॅक्सी, २४/७ ग्राहक सहाय्य, पारदर्शक टोल/भाडे रचना आणि उपनगरीय वाहतूक व्यवस्थापनाचा अनुभव असलेले व्यावसायिक चालक देतो.",
        ],
      },
      closing: {
        en: "Call us now to book your Thane cab!",
        hi: "अपनी ठाणे कैब बुक करने के लिए अभी हमें कॉल करें!",
        mr: "तुमची ठाणे कॅब बुक करण्यासाठी आत्ताच आम्हाला कॉल करा!",
      },
    },
    meta: {
      title: "Thane Cab | Prachi Tours & Travels Airport Cabs / Taxi",
      description:
        "Direct cab to Thane from Nashik, Pune, or Shirdi. Fast highway connectivity. Fares from ₹2800.",
    },
  },
];

// Major Hubs List
const primaryHubs = [
  "Nashik",
  "Mumbai",
  "Pune",
  "Shirdi",
  "Chhatrapati Sambhajinagar",
];

// Map hub destinations to existing image paths in public/images/
const hubImageMap = {
  Nashik: "/images/nashik-city.jpg",
  Mumbai: "/images/nashik-mumbai.jpg", // Correct existing file path
  Pune: "/images/nashik-pune.jpg",
  Shirdi: "/images/to-shirdi.jpg",
  "Chhatrapati Sambhajinagar": "/images/nashik-ajanta.jpg",
};

function createRouteObject(base, origin, destination) {
  const originSlug = slugify(origin);
  const destSlug = slugify(destination);
  const slug = `${originSlug}-to-${destSlug}-cab`;
  const title = `${origin} to ${destination} Cab / Taxi Rental Service`;
  const tagline = `${origin} to ${destination} Direct Cab`;

  // Safely resolve existing destination image file path
  const routeImage =
    destination === base.baseDestination
      ? base.baseDestinationImage || base.image
      : hubImageMap[destination] || base.image || "/images/nashik-mumbai.jpg";

  return {
    id: `${base.id}-${slug}`,
    title: title,
    slug: slug,
    origin: origin,
    destination: destination,
    distanceKm: base.distanceKm,
    estimatedTime: base.estimatedTime,
    image: routeImage,
    routeImg: routeImage,
    tagline: tagline,
    company: base.company,
    popularCity: base.popularCity,

    intro: replacePlaceholders(base.introTemplate, origin, destination),
    fleetDescription: base.fleetDescription,

    contentBlocks: base.contentBlocks.map((block) =>
      replacePlaceholders(block, origin, destination),
    ),

    meta: {
      title: replacePlaceholders(base.baseMetaTitle, origin, destination),
      description: replacePlaceholders(base.baseMetaDesc, origin, destination),
    },
  };
}

// Generate complete matrix: Every Hub connected to all 22 card destinations (Forward & Reverse)
const generatedDynamicRoutes = baseDynamicTours.flatMap((base) => {
  const routes = [];

  primaryHubs.forEach((hub) => {
    if (slugify(hub) !== slugify(base.baseDestination)) {
      // Forward: Hub -> Destination (Image = baseDestinationImage)
      routes.push(createRouteObject(base, hub, base.baseDestination));
      // Reverse: Destination -> Hub (Image = Hub Image)
      routes.push(createRouteObject(base, base.baseDestination, hub));
    }
  });

  return routes;
});

// Combine Generated Dynamic Routes + Original Static Tour Packages
export const toursData = [...generatedDynamicRoutes, ...originalStaticTours];

export function getStaticTourBySlug(rawSlug) {
  if (!rawSlug) return null;
  const clean = String(rawSlug).toLowerCase().trim().replace(/\/$/, "");
  return originalStaticTours.find((t) => t.slug === clean) || null;
}

export function getDynamicTourBySlug(rawSlug) {
  if (!rawSlug) return null;
  const clean = String(rawSlug).toLowerCase().trim().replace(/\/$/, "");

  let found = generatedDynamicRoutes.find((t) => t.slug === clean);
  if (found) return found;

  const withoutCab = clean.replace(/-cab$/, "");
  found = generatedDynamicRoutes.find(
    (t) => t.slug.replace(/-cab$/, "") === withoutCab,
  );
  if (found) return found;

  const parts = clean.replace(/-cab$/, "").split("-to-");
  if (parts.length === 2) {
    const [orig, dest] = parts;
    found = generatedDynamicRoutes.find(
      (t) => slugify(t.origin) === orig && slugify(t.destination) === dest,
    );
  }

  return found || null;
}

export function getTourBySlug(rawSlug) {
  return getStaticTourBySlug(rawSlug) || getDynamicTourBySlug(rawSlug);
}

export function getAllSlugs() {
  const staticSlugs = originalStaticTours.map((t) => ({ slug: t.slug }));
  const dynamicSlugs = generatedDynamicRoutes.map((t) => ({ slug: t.slug }));
  return [...staticSlugs, ...dynamicSlugs];
}

// ─── 4. PILL GRID DATA (MATCHING YOUR DEMO IMAGE) ─────────────────────────
export const routePillGridData = [
  {
    name: {
      en: "Nashik to Trimbakeshwar Darshan",
      hi: "नासिक से त्र्यंबकेश्वर दर्शन",
      mr: "नाशिक ते त्र्यंबकेश्वर दर्शन",
    },
    href: "/cities/nashik-to-trimbakeshwar-darshan-cab",
  },
  {
    name: {
      en: "Nashik to Shani Shingnapur",
      hi: "नासिक से शनि शिंगणापुर",
      mr: "नाशिक ते शनि शिंगणापूर",
    },
    href: "/cities/nashik-to-shani-shingnapur-cab",
  },
  {
    name: {
      en: "Nashik to Mumbai",
      hi: "नासिक से मुंबई",
      mr: "नाशिक ते मुंबई",
    },
    href: "/cities/nashik-to-mumbai-cab",
  },
  {
    name: {
      en: "Nashik to Pune",
      hi: "नासिक से पुणे",
      mr: "नाशिक ते पुणे",
    },
    href: "/cities/nashik-to-pune-cab",
  },
  {
    name: {
      en: "Nashik to Shirdi",
      hi: "नासिक से शिर्डी",
      mr: "नाशिक ते शिर्डी",
    },
    href: "/cities/nashik-to-shirdi-cab",
  },
  {
    name: {
      en: "Nashik to Chhatrapati Sambhajinagar",
      hi: "नासिक से छत्रपति संभाजीनगर",
      mr: "नाशिक ते छत्रपती संभाजीनगर",
    },
    href: "/cities/nashik-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
  },
  {
    name: {
      en: "Nashik to Bhimashankar Darshan",
      hi: "नासिक से भीमाशंकर दर्शन",
      mr: "नाशिक ते भीमाशंकर दर्शन",
    },
    href: "/cities/nashik-to-bhimashankar-darshan-cab",
  },
  {
    name: {
      en: "Nashik to Igatpuri",
      hi: "नासिक से इगतपुरी",
      mr: "नाशिक ते इगतपुरी",
    },
    href: "/cities/nashik-to-igatpuri-hill-station-cab",
  },
  {
    name: {
      en: "Mumbai to Trimbakeshwar Darshan",
      hi: "मुंबई से त्र्यंबकेश्वर दर्शन",
      mr: "मुंबई ते त्र्यंबकेश्वर दर्शन",
    },
    href: "/cities/mumbai-to-trimbakeshwar-darshan-cab",
  },
  {
    name: {
      en: "Mumbai to Shani Shingnapur",
      hi: "मुंबई से शनि शिंगणापुर",
      mr: "मुंबई ते शनि शिंगणापूर",
    },
    href: "/cities/mumbai-to-shani-shingnapur-cab",
  },
  {
    name: {
      en: "Mumbai to Nashik",
      hi: "मुंबई से नासिक",
      mr: "मुंबई ते नाशिक",
    },
    href: "/cities/mumbai-to-nashik-cab",
  },
  {
    name: {
      en: "Mumbai to Pune",
      hi: "मुंबई से पुणे",
      mr: "मुंबई ते पुणे",
    },
    href: "/cities/mumbai-to-pune-cab",
  },
  {
    name: {
      en: "Mumbai to Shirdi",
      hi: "मुंबई से शिर्डी",
      mr: "मुंबई ते शिर्डी",
    },
    href: "/cities/mumbai-to-shirdi-cab",
  },
  {
    name: {
      en: "Mumbai to Chhatrapati Sambhajinagar",
      hi: "मुंबई से छत्रपति संभाजीनगर",
      mr: "मुंबई ते छत्रपती संभाजीनगर",
    },
    href: "/cities/mumbai-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
  },
  {
    name: {
      en: "Mumbai to Lonavala",
      hi: "मुंबई से लोनावला",
      mr: "मुंबई ते लोणावळा",
    },
    href: "/cities/mumbai-to-lonavala-khandala-cab",
  },
  {
    name: {
      en: "Mumbai to Mahabaleshwar",
      hi: "मुंबई से महाबलेश्वर",
      mr: "मुंबई ते महाबळेश्वर",
    },
    href: "/cities/mumbai-to-mahabaleshwar-cab",
  },
  {
    name: {
      en: "Pune to Trimbakeshwar Darshan",
      hi: "पुणे से त्र्यंबकेश्वर दर्शन",
      mr: "पुणे ते त्र्यंबकेश्वर दर्शन",
    },
    href: "/cities/pune-to-trimbakeshwar-darshan-cab",
  },
  {
    name: {
      en: "Pune to Shani Shingnapur",
      hi: "पुणे से शनि शिंगणापुर",
      mr: "पुणे ते शनि शिंगणापूर",
    },
    href: "/cities/pune-to-shani-shingnapur-cab",
  },
  {
    name: {
      en: "Pune to Nashik",
      hi: "पुणे से नासिक",
      mr: "पुणे ते नाशिक",
    },
    href: "/cities/pune-to-nashik-cab",
  },
  {
    name: {
      en: "Pune to Mumbai",
      hi: "पुणे से मुंबई",
      mr: "पुणे ते मुंबई",
    },
    href: "/cities/pune-to-mumbai-cab",
  },
  {
    name: {
      en: "Pune to Shirdi",
      hi: "पुणे से शिर्डी",
      mr: "पुणे ते शिर्डी",
    },
    href: "/cities/pune-to-shirdi-cab",
  },
  {
    name: {
      en: "Pune to Chhatrapati Sambhajinagar",
      hi: "पुणे से छत्रपति संभाजीनगर",
      mr: "पुणे ते छत्रपती संभाजीनगर",
    },
    href: "/cities/pune-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
  },
  {
    name: {
      en: "Pune to Goa",
      hi: "पुणे से गोवा",
      mr: "पुणे ते गोवा",
    },
    href: "/cities/pune-to-goa-cab",
  },
  {
    name: {
      en: "Pune to Mahabaleshwar",
      hi: "पुणे से महाबलेश्वर",
      mr: "पुणे ते महाबळेश्वर",
    },
    href: "/cities/pune-to-mahabaleshwar-cab",
  },
  {
    name: {
      en: "Shirdi to Trimbakeshwar Darshan",
      hi: "शिर्डी से त्र्यंबकेश्वर दर्शन",
      mr: "शिर्डी ते त्र्यंबकेश्वर दर्शन",
    },
    href: "/cities/shirdi-to-trimbakeshwar-darshan-cab",
  },
  {
    name: {
      en: "Shirdi to Shani Shingnapur",
      hi: "शिर्डी से शनि शिंगणापुर",
      mr: "शिर्डी ते शनि शिंगणापूर",
    },
    href: "/cities/shirdi-to-shani-shingnapur-cab",
  },
  {
    name: {
      en: "Shirdi to Nashik",
      hi: "शिर्डी से नासिक",
      mr: "शिर्डी ते नाशिक",
    },
    href: "/cities/shirdi-to-nashik-cab",
  },
  {
    name: {
      en: "Shirdi to Mumbai",
      hi: "शिर्डी से मुंबई",
      mr: "शिर्डी ते मुंबई",
    },
    href: "/cities/shirdi-to-mumbai-cab",
  },
  {
    name: {
      en: "Shirdi to Pune",
      hi: "शिर्डी से पुणे",
      mr: "शिर्डी ते पुणे",
    },
    href: "/cities/shirdi-to-pune-cab",
  },
  {
    name: {
      en: "Shirdi to Kopargaon",
      hi: "शिर्डी से कोपरगांव",
      mr: "शिर्डी ते कोपरगाव",
    },
    href: "/cities/shirdi-to-kopargaon-cab",
  },
  {
    name: {
      en: "Shirdi to Manmad",
      hi: "शिर्डी से मनमाड",
      mr: "शिर्डी ते मनमाड",
    },
    href: "/cities/shirdi-to-manmad-cab",
  },
  {
    name: {
      en: "Chhatrapati Sambhajinagar to Trimbakeshwar Darshan",
      hi: "छत्रपति संभाजीनगर से त्र्यंबकेश्वर दर्शन",
      mr: "छत्रपती संभाजीनगर ते त्र्यंबकेश्वर दर्शन",
    },
    href: "/cities/chhatrapati-sambhajinagar-to-trimbakeshwar-darshan-cab",
  },
  {
    name: {
      en: "Chhatrapati Sambhajinagar to Shani Shingnapur",
      hi: "छत्रपति संभाजीनगर से शनि शिंगणापुर",
      mr: "छत्रपती संभाजीनगर ते शनि शिंगणापूर",
    },
    href: "/cities/chhatrapati-sambhajinagar-to-shani-shingnapur-cab",
  },
  {
    name: {
      en: "Chhatrapati Sambhajinagar to Nashik",
      hi: "छत्रपति संभाजीनगर से नासिक",
      mr: "छत्रपती संभाजीनगर ते नाशिक",
    },
    href: "/cities/chhatrapati-sambhajinagar-to-nashik-cab",
  },
  {
    name: {
      en: "Chhatrapati Sambhajinagar to Mumbai",
      hi: "छत्रपति संभाजीनगर से मुंबई",
      mr: "छत्रपती संभाजीनगर ते मुंबई",
    },
    href: "/cities/chhatrapati-sambhajinagar-to-mumbai-cab",
  },
  {
    name: {
      en: "Chhatrapati Sambhajinagar to Pune",
      hi: "छत्रपति संभाजीनगर से पुणे",
      mr: "छत्रपती संभाजीनगर ते पुणे",
    },
    href: "/cities/chhatrapati-sambhajinagar-to-pune-cab",
  },
  {
    name: {
      en: "Chhatrapati Sambhajinagar to Verul",
      hi: "छत्रपति संभाजीनगर से वेरुल",
      mr: "छत्रपती संभाजीनगर ते वेरूळ",
    },
    href: "/cities/chhatrapati-sambhajinagar-to-verul-ellora-cab",
  },
  {
    name: {
      en: "Chhatrapati Sambhajinagar to Jalna",
      hi: "छत्रपति संभाजीनगर से जालना",
      mr: "छत्रपती संभाजीनगर ते जालना",
    },
    href: "/cities/chhatrapati-sambhajinagar-to-jalna-cab",
  },
];

// ─── 5. FOOTER LINK DATA ───────────────────────────────────────────────────
export const footerLinksData = [
  {
    id: "nashik-hub-routes",
    title: {
      en: "Nashik Routes",
      hi: "नासिक रूट्स",
      mr: "नाशिक मार्ग",
    },
    links: [
      {
        name: {
          en: "Nashik to Trimbakeshwar Darshan",
          hi: "नासिक से त्र्यंबकेश्वर दर्शन",
          mr: "नाशिक ते त्र्यंबकेश्वर दर्शन",
        },
        href: "/cities/nashik-to-trimbakeshwar-darshan-cab",
      },
      {
        name: {
          en: "Nashik to Shani Shingnapur",
          hi: "नासिक से शनि शिंगणापुर",
          mr: "नाशिक ते शनि शिंगणापूर",
        },
        href: "/cities/nashik-to-shani-shingnapur-cab",
      },
      {
        name: {
          en: "Nashik to Mumbai",
          hi: "नासिक से मुंबई",
          mr: "नाशिक ते मुंबई",
        },
        href: "/cities/nashik-to-mumbai-cab",
      },
      {
        name: {
          en: "Nashik to Pune",
          hi: "नासिक से पुणे",
          mr: "नाशिक ते पुणे",
        },
        href: "/cities/nashik-to-pune-cab",
      },
      {
        name: {
          en: "Nashik to Shirdi",
          hi: "नासिक से शिर्डी",
          mr: "नाशिक ते शिर्डी",
        },
        href: "/cities/nashik-to-shirdi-cab",
      },
      {
        name: {
          en: "Nashik to Chh. Sambhajinagar",
          hi: "नासिक से छत्रपति संभाजीनगर",
          mr: "नाशिक ते छत्रपती संभाजीनगर",
        },
        href: "/cities/nashik-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
      },
      {
        name: {
          en: "Nashik to Bhimashankar Darshan",
          hi: "नासिक से भीमाशंकर दर्शन",
          mr: "नाशिक ते भीमाशंकर दर्शन",
        },
        href: "/cities/nashik-to-bhimashankar-darshan-cab",
      },
      {
        name: {
          en: "Nashik to Igatpuri",
          hi: "नासिक से इगतपुरी",
          mr: "नाशिक ते इगतपुरी",
        },
        href: "/cities/nashik-to-igatpuri-hill-station-cab",
      },
    ],
  },
  {
    id: "mumbai-hub-routes",
    title: {
      en: "Mumbai Routes",
      hi: "मुंबई रूट्स",
      mr: "मुंबई मार्ग",
    },
    links: [
      {
        name: {
          en: "Mumbai to Trimbakeshwar Darshan",
          hi: "मुंबई से त्र्यंबकेश्वर दर्शन",
          mr: "मुंबई ते त्र्यंबकेश्वर दर्शन",
        },
        href: "/cities/mumbai-to-trimbakeshwar-darshan-cab",
      },
      {
        name: {
          en: "Mumbai to Shani Shingnapur",
          hi: "मुंबई से शनि शिंगणापुर",
          mr: "मुंबई ते शनि शिंगणापूर",
        },
        href: "/cities/mumbai-to-shani-shingnapur-cab",
      },
      {
        name: {
          en: "Mumbai to Nashik",
          hi: "मुंबई से नासिक",
          mr: "मुंबई ते नाशिक",
        },
        href: "/cities/mumbai-to-nashik-cab",
      },
      {
        name: {
          en: "Mumbai to Pune",
          hi: "मुंबई से पुणे",
          mr: "मुंबई ते पुणे",
        },
        href: "/cities/mumbai-to-pune-cab",
      },
      {
        name: {
          en: "Mumbai to Shirdi",
          hi: "मुंबई से शिर्डी",
          mr: "मुंबई ते शिर्डी",
        },
        href: "/cities/mumbai-to-shirdi-cab",
      },
      {
        name: {
          en: "Mumbai to Chh. Sambhajinagar",
          hi: "मुंबई से छत्रपति संभाजीनगर",
          mr: "मुंबई ते छत्रपती संभाजीनगर",
        },
        href: "/cities/mumbai-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
      },
      {
        name: {
          en: "Mumbai to Lonavala",
          hi: "मुंबई से लोनावला",
          mr: "मुंबई ते लोणावळा",
        },
        href: "/cities/mumbai-to-lonavala-khandala-cab",
      },
      {
        name: {
          en: "Mumbai to Mahabaleshwar",
          hi: "मुंबई से महाबलेश्वर",
          mr: "मुंबई ते महाबळेश्वर",
        },
        href: "/cities/mumbai-to-mahabaleshwar-cab",
      },
    ],
  },
  {
    id: "pune-hub-routes",
    title: {
      en: "Pune Routes",
      hi: "पुणे रूट्स",
      mr: "पुणे मार्ग",
    },
    links: [
      {
        name: {
          en: "Pune to Trimbakeshwar Darshan",
          hi: "पुणे से त्र्यंबकेश्वर दर्शन",
          mr: "पुणे ते त्र्यंबकेश्वर दर्शन",
        },
        href: "/cities/pune-to-trimbakeshwar-darshan-cab",
      },
      {
        name: {
          en: "Pune to Shani Shingnapur",
          hi: "पुणे से शनि शिंगणापुर",
          mr: "पुणे ते शनि शिंगणापूर",
        },
        href: "/cities/pune-to-shani-shingnapur-cab",
      },
      {
        name: {
          en: "Pune to Nashik",
          hi: "पुणे से नासिक",
          mr: "पुणे ते नाशिक",
        },
        href: "/cities/pune-to-nashik-cab",
      },
      {
        name: {
          en: "Pune to Mumbai",
          hi: "पुणे से मुंबई",
          mr: "पुणे ते मुंबई",
        },
        href: "/cities/pune-to-mumbai-cab",
      },
      {
        name: {
          en: "Pune to Shirdi",
          hi: "पुणे से शिर्डी",
          mr: "पुणे ते शिर्डी",
        },
        href: "/cities/pune-to-shirdi-cab",
      },
      {
        name: {
          en: "Pune to Chh. Sambhajinagar",
          hi: "पुणे से छत्रपति संभाजीनगर",
          mr: "पुणे ते छत्रपती संभाजीनगर",
        },
        href: "/cities/pune-to-chhatrapati-sambhajinagar-ajanta-ellora-caves-cab",
      },
      {
        name: {
          en: "Pune to Goa",
          hi: "पुणे से गोवा",
          mr: "पुणे ते गोवा",
        },
        href: "/cities/pune-to-goa-cab",
      },
      {
        name: {
          en: "Pune to Mahabaleshwar",
          hi: "पुणे से महाबलेश्वर",
          mr: "पुणे ते महाबळेश्वर",
        },
        href: "/cities/pune-to-mahabaleshwar-cab",
      },
    ],
  },
  {
    id: "shirdi-hub-routes",
    title: {
      en: "Shirdi Routes",
      hi: "शिर्डी रूट्स",
      mr: "शिर्डी मार्ग",
    },
    links: [
      {
        name: {
          en: "Shirdi to Trimbakeshwar Darshan",
          hi: "शिर्डी से त्र्यंबकेश्वर दर्शन",
          mr: "शिर्डी ते त्र्यंबकेश्वर दर्शन",
        },
        href: "/cities/shirdi-to-trimbakeshwar-darshan-cab",
      },
      {
        name: {
          en: "Shirdi to Shani Shingnapur",
          hi: "शिर्डी से शनि शिंगणापुर",
          mr: "शिर्डी ते शनि शिंगणापूर",
        },
        href: "/cities/shirdi-to-shani-shingnapur-cab",
      },
      {
        name: {
          en: "Shirdi to Nashik",
          hi: "शिर्डी से नासिक",
          mr: "शिर्डी ते नाशिक",
        },
        href: "/cities/shirdi-to-nashik-cab",
      },
      {
        name: {
          en: "Shirdi to Mumbai",
          hi: "शिर्डी से मुंबई",
          mr: "शिर्डी ते मुंबई",
        },
        href: "/cities/shirdi-to-mumbai-cab",
      },
      {
        name: {
          en: "Shirdi to Pune",
          hi: "शिर्डी से पुणे",
          mr: "शिर्डी ते पुणे",
        },
        href: "/cities/shirdi-to-pune-cab",
      },
      {
        name: {
          en: "Shirdi to Kopargaon",
          hi: "शिर्डी से कोपरगांव",
          mr: "शिर्डी ते कोपरगाव",
        },
        href: "/cities/shirdi-to-kopargaon-cab",
      },
      {
        name: {
          en: "Shirdi to Manmad",
          hi: "शिर्डी से मनमाड",
          mr: "शिर्डी ते मनमाड",
        },
        href: "/cities/shirdi-to-manmad-cab",
      },
    ],
  },
  {
    id: "sambhajinagar-hub-routes",
    title: {
      en: "Chh. Sambhajinagar Routes",
      hi: "छत्रपति संभाजीनगर रूट्स",
      mr: "छत्रपती संभाजीनगर मार्ग",
    },
    links: [
      {
        name: {
          en: "Chh. Sambhajinagar to Trimbakeshwar Darshan",
          hi: "छत्रपति संभाजीनगर से त्र्यंबकेश्वर दर्शन",
          mr: "छत्रपती संभाजीनगर ते त्र्यंबकेश्वर दर्शन",
        },
        href: "/cities/chhatrapati-sambhajinagar-to-trimbakeshwar-darshan-cab",
      },
      {
        name: {
          en: "Chh. Sambhajinagar to Shani Shingnapur",
          hi: "छत्रपति संभाजीनगर से शनि शिंगणापुर",
          mr: "छत्रपती संभाजीनगर ते शनि शिंगणापूर",
        },
        href: "/cities/chhatrapati-sambhajinagar-to-shani-shingnapur-cab",
      },
      {
        name: {
          en: "Chh. Sambhajinagar to Nagpur",
          hi: "छत्रपति संभाजीनगर से नागपुर",
          mr: "छत्रपती संभाजीनगर ते नागपूर",
        },
        href: "/cities/chhatrapati-sambhajinagar-to-nagpur-cab",
      },
      {
        name: {
          en: "Chh. Sambhajinagar to Mumbai",
          hi: "छत्रपति संभाजीनगर से मुंबई",
          mr: "छत्रपती संभाजीनगर ते मुंबई",
        },
        href: "/cities/chhatrapati-sambhajinagar-to-mumbai-cab",
      },
      {
        name: {
          en: "Chh. Sambhajinagar to Pune",
          hi: "छत्रपति संभाजीनगर से पुणे",
          mr: "छत्रपती संभाजीनगर ते पुणे",
        },
        href: "/cities/chhatrapati-sambhajinagar-to-pune-cab",
      },
      {
        name: {
          en: "Chh. Sambhajinagar to Verul",
          hi: "छत्रपति संभाजीनगर से वेरुल",
          mr: "छत्रपती संभाजीनगर ते वेरूळ",
        },
        href: "/cities/chhatrapati-sambhajinagar-to-verul-ellora-cab",
      },
      {
        name: {
          en: "Chh. Sambhajinagar to Jalna",
          hi: "छत्रपति संभाजीनगर से जालना",
          mr: "छत्रपती संभाजीनगर ते जालना",
        },
        href: "/cities/chhatrapati-sambhajinagar-to-jalna-cab",
      },
    ],
  },
];
