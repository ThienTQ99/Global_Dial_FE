

const languages = [
  {
    _id: "6471e12fcacfcb8da29df245",
    codeName: "ja",
    name: "Japanese",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df247",
    codeName: "pt",
    name: "Portuguese",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df241",
    codeName: "es",
    name: "Spanish",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df25f",
    codeName: "ms",
    name: "Malay",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df240",
    codeName: "en",
    name: "English",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df244",
    codeName: "it",
    name: "Italian",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df246",
    codeName: "ko",
    name: "Korean",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df248",
    codeName: "ru",
    name: "Russian",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df249",
    codeName: "zh",
    name: "Chinese",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df24a",
    codeName: "ar",
    name: "Arabic",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df24b",
    codeName: "hi",
    name: "Hindi",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df256",
    codeName: "da",
    name: "Danish",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df25c",
    codeName: "ga",
    name: "Irish",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df25e",
    codeName: "lt",
    name: "Lithuanian",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df266",
    codeName: "ur",
    name: "Urdu",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df26b",
    codeName: "bs",
    name: "Bosnian",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df27f",
    codeName: "fa",
    name: "Persian",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df28a",
    codeName: "yo",
    name: "Yoruba",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df250",
    codeName: "tr",
    name: "Turkish",
    isPremium: false,
  },
  {
    _id: "6471e12fcacfcb8da29df25b",
    codeName: "is",
    name: "Icelandic",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df262",
    codeName: "sk",
    name: "Slovak",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df265",
    codeName: "uk",
    name: "Ukrainian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df26a",
    codeName: "eu",
    name: "Basque",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df279",
    codeName: "la",
    name: "Latin",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df27a",
    codeName: "mk",
    name: "Macedonian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df283",
    codeName: "tl",
    name: "Tagalog",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df24c",
    codeName: "bn",
    name: "Bengali",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df242",
    codeName: "fr",
    name: "French",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df243",
    codeName: "de",
    name: "German",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df24d",
    codeName: "ru",
    name: "Russian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df252",
    codeName: "sv",
    name: "Swedish",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df257",
    codeName: "cs",
    name: "Czech",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df263",
    codeName: "sl",
    name: "Slovenian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df27c",
    codeName: "mn",
    name: "Mongolian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df289",
    codeName: "xh",
    name: "Xhosa",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df261",
    codeName: "sr",
    name: "Serbian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df26e",
    codeName: "et",
    name: "Estonian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df271",
    codeName: "ka",
    name: "Georgian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df272",
    codeName: "gu",
    name: "Gujarati",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df278",
    codeName: "lo",
    name: "Lao",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df286",
    codeName: "ur",
    name: "Urdu",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df251",
    codeName: "nl",
    name: "Dutch",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df253",
    codeName: "pl",
    name: "Polish",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df264",
    codeName: "th",
    name: "Thai",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df268",
    codeName: "sq",
    name: "Albanian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df269",
    codeName: "hy",
    name: "Armenian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df273",
    codeName: "iw",
    name: "Hebrew",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df274",
    codeName: "kn",
    name: "Kannada",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df277",
    codeName: "ku",
    name: "Kurdish",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df27d",
    codeName: "ne",
    name: "Nepali",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df284",
    codeName: "ta",
    name: "Tamil",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df28b",
    codeName: "zu",
    name: "Zulu",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df24e",
    codeName: "vi",
    name: "Vietnamese",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df254",
    codeName: "no",
    name: "Norwegian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df258",
    codeName: "el",
    name: "Greek",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df259",
    codeName: "he",
    name: "Hebrew",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df267",
    codeName: "af",
    name: "Afrikaans",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df26c",
    codeName: "ca",
    name: "Catalan",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df26f",
    codeName: "fo",
    name: "Faroese",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df270",
    codeName: "gl",
    name: "Galician",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df275",
    codeName: "kk",
    name: "Kazakh",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df27b",
    codeName: "mr",
    name: "Marathi",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df285",
    codeName: "te",
    name: "Telugu",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df287",
    codeName: "uz",
    name: "Uzbek",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df24f",
    codeName: "id",
    name: "Indonesian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df25d",
    codeName: "lv",
    name: "Latvian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df276",
    codeName: "km",
    name: "Khmer",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df288",
    codeName: "cy",
    name: "Welsh",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df255",
    codeName: "fi",
    name: "Finnish",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df25a",
    codeName: "hu",
    name: "Hungarian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df260",
    codeName: "ro",
    name: "Romanian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df26d",
    codeName: "hr",
    name: "Croatian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df27e",
    codeName: "ps",
    name: "Pashto",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df280",
    codeName: "sr",
    name: "Serbian",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df281",
    codeName: "si",
    name: "Sinhala",
    isPremium: false
  },
  {
    _id: "6471e12fcacfcb8da29df282",
    codeName: "sw",
    name: "Swahili",
    isPremium: false
  }

]




const topics = [
  {
    _id: "6472c4e3cacfcb8da2fc4ad9",
    codeName: "literature",
    name: "Literature",
    isPremium: true
  },
  {
    _id: "6472c4e3cacfcb8da2fc4adb",
    codeName: "psych",
    name: "Psychology",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ada",
    codeName: "tech",
    name: "Technology",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4add",
    codeName: "chem",
    name: "Chemistry",
    isPremium: true
  },
  {
    _id: "6472c4e3cacfcb8da2fc4adf",
    codeName: "music",
    name: "Music",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ad5",
    codeName: "anime",
    name: "Anime",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ae1",
    codeName: "politics",
    name: "Politics",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ad7",
    codeName: "math",
    name: "Mathematics",
    isPremium: true
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ad8",
    codeName: "history",
    name: "History",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4adc",
    codeName: "bio",
    name: "Biology",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ade",
    codeName: "sports",
    name: "Sports",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ae0",
    codeName: "art",
    name: "Art",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ae3",
    codeName: "fashion",
    name: "Fashion",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ae6",
    codeName: "business",
    name: "Business",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ad4",
    codeName: "phy",
    name: "Physics",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ad3",
    codeName: "cs",
    name: "Computer Science",
    isPremium: true
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ad6",
    codeName: "love",
    name: "Love",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ae2",
    codeName: "astro",
    name: "Astronomy",
    isPremium: false
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ad2",
    codeName: "health",
    name: "Health",
    isPremium: true
  },
  {
    _id: "6472c4e3cacfcb8da2fc4ad1",
    codeName: "env",
    name: "Environment",
    isPremium: true
  }

]



export { languages, topics };
