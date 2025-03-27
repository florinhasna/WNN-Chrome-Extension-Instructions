import { LANG_ENCODING_LENGTH } from './../config/constants.mjs';
import { encodeToBinarySequence } from './utilities.mjs';

const languages = [
    {
        "kind": "youtube#i18nLanguage",
        "etag": "1OjwIvsEf9UstcR8l9SVbvsK8Qw",
        "id": "af",
        "snippet": {
            "hl": "af",
            "name": "Afrikaans"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "ptN1RQzFShVdKYWSazyl6Givu1Q",
        "id": "am",
        "snippet": {
            "hl": "am",
            "name": "Amharic"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "GOvkz2ITW6w0y-0cigEa0BiHOac",
        "id": "ar",
        "snippet": {
            "hl": "ar",
            "name": "Arabic"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "qq6RBDRnnlL26sMbNlNgGRzeHUA",
        "id": "as",
        "snippet": {
            "hl": "as",
            "name": "Assamese"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "uDg13IUyl-wwViQm18NMTW_ce0A",
        "id": "az",
        "snippet": {
            "hl": "az",
            "name": "Azerbaijani"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "Lm0ZiLTnpttFm1HusOcCsptMVxE",
        "id": "be",
        "snippet": {
            "hl": "be",
            "name": "Belarusian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "Dj3vfaKr-aZ-b-06kGnY4PXI7bM",
        "id": "bg",
        "snippet": {
            "hl": "bg",
            "name": "Bulgarian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "a471edgI4PA-FqA83fMPVUU6zvA",
        "id": "bn",
        "snippet": {
            "hl": "bn",
            "name": "Bangla"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "nuRjdcP-Q8WkXeMGSdDWeVFkcvY",
        "id": "bs",
        "snippet": {
            "hl": "bs",
            "name": "Bosnian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "L_u-rBrwiKODP2FjRrnQKITLSPA",
        "id": "ca",
        "snippet": {
            "hl": "ca",
            "name": "Catalan"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "MJmowW8Rg_nt7Tjiw4rrm0fGNDw",
        "id": "cs",
        "snippet": {
            "hl": "cs",
            "name": "Czech"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "MipTdZ94p3AUXZxJYZjtSQmhGGs",
        "id": "da",
        "snippet": {
            "hl": "da",
            "name": "Danish"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "6bbZS27M2Eb5bzFunNXOIM2_tX8",
        "id": "de",
        "snippet": {
            "hl": "de",
            "name": "German"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "5zEwAScJ2Y38LtPsAjjnEwNpPm8",
        "id": "el",
        "snippet": {
            "hl": "el",
            "name": "Greek"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "qgroCBr1hP_jXuenKDTfoe7IyyA",
        "id": "en-GB",
        "snippet": {
            "hl": "en-GB",
            "name": "English (United Kingdom)"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "PHRE99ogPUJCN_skbHTZfCM97pA",
        "id": "en-IN",
        "snippet": {
            "hl": "en-IN",
            "name": "English (India)"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "srA_BMmtwErWd1pyYvAE2VztIpc",
        "id": "en",
        "snippet": {
            "hl": "en",
            "name": "English"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "v4C78JQrZLnUSgSe_L6suQGX5LY",
        "id": "es",
        "snippet": {
            "hl": "es",
            "name": "Spanish"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "TGn2CqD2AtjuK4fs7SzzIdw54E4",
        "id": "es-419",
        "snippet": {
            "hl": "es-419",
            "name": "Spanish (Latin America)"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "Z-MgkL-MuKhVt7mKTXdrmjP9dR0",
        "id": "es-US",
        "snippet": {
            "hl": "es-US",
            "name": "Spanish (United States)"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "qcPudx3epm-gXf9cb5ySQ2pWMg8",
        "id": "et",
        "snippet": {
            "hl": "et",
            "name": "Estonian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "bC9x5fg82j8TipdPmQiHwdYCH98",
        "id": "eu",
        "snippet": {
            "hl": "eu",
            "name": "Basque"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "g0j--ft2e1DH2z9HagcVs3IGFmI",
        "id": "fa",
        "snippet": {
            "hl": "fa",
            "name": "Persian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "BvlcHJ6JlwmywjZa9CYjLAHFpvM",
        "id": "fi",
        "snippet": {
            "hl": "fi",
            "name": "Finnish"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "BhMshfumon6e2maHdP08bebwwBU",
        "id": "fil",
        "snippet": {
            "hl": "fil",
            "name": "Filipino"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "gJ691d_VvC7WECuAVhJLL9bFYkU",
        "id": "fr-CA",
        "snippet": {
            "hl": "fr-CA",
            "name": "French (Canada)"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "ff1FjCL1SFlYsjv-EQ1-UVADSwU",
        "id": "fr",
        "snippet": {
            "hl": "fr",
            "name": "French"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "6KcW4x-G1aheGoghSFsNykDivDU",
        "id": "gl",
        "snippet": {
            "hl": "gl",
            "name": "Galician"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "WaPTdmFmbTHWRCNQBwjOBY7rrF4",
        "id": "gu",
        "snippet": {
            "hl": "gu",
            "name": "Gujarati"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "KtnqcIYqnier7i9q3LSy3e-Pq9Y",
        "id": "hi",
        "snippet": {
            "hl": "hi",
            "name": "Hindi"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "tU0qw0ipNPNzz8nrj2iVM7crTw8",
        "id": "hr",
        "snippet": {
            "hl": "hr",
            "name": "Croatian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "8Fe26hnjaipwmaOx2AfMi2Ykqoo",
        "id": "hu",
        "snippet": {
            "hl": "hu",
            "name": "Hungarian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "HRIO2nt8t08FmC2M7jW56qWXr24",
        "id": "hy",
        "snippet": {
            "hl": "hy",
            "name": "Armenian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "x29H6JIPwYGT-2OA4nmdD_WSf6I",
        "id": "id",
        "snippet": {
            "hl": "id",
            "name": "Indonesian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "OvJDGeq2teVfWFxvSf5Zf_I6itI",
        "id": "is",
        "snippet": {
            "hl": "is",
            "name": "Icelandic"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "RoEk7F9gU6Gz_6pm_qPjQrpjUpQ",
        "id": "it",
        "snippet": {
            "hl": "it",
            "name": "Italian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "QpsUsLITQ0GaDMli0aJuDDuuoF4",
        "id": "iw",
        "snippet": {
            "hl": "iw",
            "name": "Hebrew"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "ne7vQB7aUHUG3OZ-iCEAuK5ghC4",
        "id": "ja",
        "snippet": {
            "hl": "ja",
            "name": "Japanese"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "2PXmMJtcDuPB23E-Ng7NlgjpuqE",
        "id": "ka",
        "snippet": {
            "hl": "ka",
            "name": "Georgian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "-fzM_yuD4n5iHVl5ESrBQL9p9EQ",
        "id": "kk",
        "snippet": {
            "hl": "kk",
            "name": "Kazakh"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "JGMaEUBB_NQH60DUx-IWLFThkUA",
        "id": "km",
        "snippet": {
            "hl": "km",
            "name": "Khmer"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "hqlcjZ2KdbanfptwlGIO5CVxoWg",
        "id": "kn",
        "snippet": {
            "hl": "kn",
            "name": "Kannada"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "hX4XxuVa7vozg76LerYBxjd9e9Q",
        "id": "ko",
        "snippet": {
            "hl": "ko",
            "name": "Korean"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "84-5bTMigkGR6-uIxecMnfpc_VU",
        "id": "ky",
        "snippet": {
            "hl": "ky",
            "name": "Kyrgyz"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "iLkQiKZdkkWumNUm0MhdsAebW2E",
        "id": "lo",
        "snippet": {
            "hl": "lo",
            "name": "Lao"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "fkhCcvt4Y_FDBbY54q-QwaknA9s",
        "id": "lt",
        "snippet": {
            "hl": "lt",
            "name": "Lithuanian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "qy0yiyNPm_JD1jYhyRsF2sL8Gf4",
        "id": "lv",
        "snippet": {
            "hl": "lv",
            "name": "Latvian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "nxL2PL_NSEMMbB3uyjYA7-RQylg",
        "id": "mk",
        "snippet": {
            "hl": "mk",
            "name": "Macedonian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "wc_r2RBsVRS280GV8CBITxN4Pvc",
        "id": "ml",
        "snippet": {
            "hl": "ml",
            "name": "Malayalam"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "in00H1u-QuyNmbplTpg7wl3et8I",
        "id": "mn",
        "snippet": {
            "hl": "mn",
            "name": "Mongolian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "Q_TF-K8SG5BLqKBoYdzdeuETGgg",
        "id": "mr",
        "snippet": {
            "hl": "mr",
            "name": "Marathi"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "GCqlF9AzxiwvUP9ZjXiQOxq1tes",
        "id": "ms",
        "snippet": {
            "hl": "ms",
            "name": "Malay"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "WYtBSX54W1ONeSv5rWUd6YbPxOk",
        "id": "my",
        "snippet": {
            "hl": "my",
            "name": "Burmese"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "TlRKZ7LR7Mxr2BrdYay09qmE_zU",
        "id": "no",
        "snippet": {
            "hl": "no",
            "name": "Norwegian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "s44seYfkgzL0291EvBZUj-I9qcg",
        "id": "ne",
        "snippet": {
            "hl": "ne",
            "name": "Nepali"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "8NcPxfJdcixU77sHLIuJ9aslXsA",
        "id": "nl",
        "snippet": {
            "hl": "nl",
            "name": "Dutch"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "J6tmo6IsmgMqmhaEeYTGdj82Efk",
        "id": "or",
        "snippet": {
            "hl": "or",
            "name": "Odia"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "r61FMGEYqGhhMUEvII0clGzQteA",
        "id": "pa",
        "snippet": {
            "hl": "pa",
            "name": "Punjabi"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "sOOBBUxID5FHTinJEz8Svv_Pqj0",
        "id": "pl",
        "snippet": {
            "hl": "pl",
            "name": "Polish"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "TpOuEcXQTRYC9jbCwCG-3hGLxm8",
        "id": "pt",
        "snippet": {
            "hl": "pt",
            "name": "Portuguese"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "u_6kRW_aWEYOVUrkgHEs8KmGZwM",
        "id": "pt-PT",
        "snippet": {
            "hl": "pt-PT",
            "name": "Portuguese (Portugal)"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "RaClB6TANEGgSezqHFhPEpydufQ",
        "id": "ro",
        "snippet": {
            "hl": "ro",
            "name": "Romanian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "R3RnpgIhyb0ypE3xjN0YBslJqkM",
        "id": "ru",
        "snippet": {
            "hl": "ru",
            "name": "Russian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "Oi6XM2eV8Fh7A80IfGeATuffRgg",
        "id": "si",
        "snippet": {
            "hl": "si",
            "name": "Sinhala"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "ubtqwC6fgeD7ZuQlqWEsWG1yrKo",
        "id": "sk",
        "snippet": {
            "hl": "sk",
            "name": "Slovak"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "6t3DNC9czoelgtH8Nw5hoQ0l48w",
        "id": "sl",
        "snippet": {
            "hl": "sl",
            "name": "Slovenian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "G6TEN4Hcl2U7C24HZUB34YsAnyk",
        "id": "sq",
        "snippet": {
            "hl": "sq",
            "name": "Albanian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "05Lq4UynSdqU2GA2pCKqdmTKjk8",
        "id": "sr-Latn",
        "snippet": {
            "hl": "sr-Latn",
            "name": "Serbian (Latin)"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "ltNW65vuGc8r0uAff-b7ST8lTc4",
        "id": "sr",
        "snippet": {
            "hl": "sr",
            "name": "Serbian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "oXea28GTU_Zk6UHqckSqbD-ccTc",
        "id": "sv",
        "snippet": {
            "hl": "sv",
            "name": "Swedish"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "H0ONqeZ95hXwnTupnDff-DI9IZg",
        "id": "sw",
        "snippet": {
            "hl": "sw",
            "name": "Swahili"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "zD2HOFSWIDuwNrC0PNxNSQdyUhU",
        "id": "ta",
        "snippet": {
            "hl": "ta",
            "name": "Tamil"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "3t0nbZzMhw8SSPKyfQ0WszuYyoI",
        "id": "te",
        "snippet": {
            "hl": "te",
            "name": "Telugu"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "JEO97LKUQYa0WKVwgJX8zJpjXLM",
        "id": "th",
        "snippet": {
            "hl": "th",
            "name": "Thai"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "Z_uJ-7NpKHZghFeafQIOBFX3MOo",
        "id": "tr",
        "snippet": {
            "hl": "tr",
            "name": "Turkish"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "VpafXahYGk9cF6A2hI2DJbl66o0",
        "id": "uk",
        "snippet": {
            "hl": "uk",
            "name": "Ukrainian"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "Su_Yyv-OI66a7Sn_ESc41bsXL-s",
        "id": "ur",
        "snippet": {
            "hl": "ur",
            "name": "Urdu"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "dI4rueS0GzGmVt1kgjKOMuHdvYs",
        "id": "uz",
        "snippet": {
            "hl": "uz",
            "name": "Uzbek"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "T3uQ4tVeneMmPkcA0BbPWApZDpA",
        "id": "vi",
        "snippet": {
            "hl": "vi",
            "name": "Vietnamese"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "bkg4rd9A68P3G0xhFJkaA0KVV8Y",
        "id": "zh-CN",
        "snippet": {
            "hl": "zh-CN",
            "name": "Chinese (China)"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "mk_T8veXmBeLDq2xav2Xr8lOWSI",
        "id": "zh-HK",
        "snippet": {
            "hl": "zh-HK",
            "name": "Chinese (Hong Kong)"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "vMdhkOgejDEgFAr4z5ltzL7YBWY",
        "id": "zh-TW",
        "snippet": {
            "hl": "zh-TW",
            "name": "Chinese (Taiwan)"
        }
    },
    {
        "kind": "youtube#i18nLanguage",
        "etag": "TYtevacb-AAUxciP8DCCUO88pSM",
        "id": "zu",
        "snippet": {
            "hl": "zu",
            "name": "Zulu"
        }
    }
]

const languageEncodings = {};
let count = 1;

/** Loop languages array retrieved manually from YT Data API
 * and assign binary encodings to each language.
 */
languages.forEach((element) => {
    languageEncodings[element.id] = {
        encoding: encodeToBinarySequence(count, LANG_ENCODING_LENGTH),
        name: element.snippet.name
    }
    count++;
});

/** Returns the encoding of a language. 
 * @param {string} language - The language to be encoded.
 * @returns {Array} - The encoding of the language.
*/
export const getLanguageEncoding = (language) => {
    return languageEncodings[language].encoding;
}

/** Checking for YouTube data bugs.
 * @param {string} language - The language to be checked.
 * @returns {string} - The corrected language.
 */
export const handleBug = (language) => {
    console.log("Checking for YouTube language bug...");
    if (language === 'en-US' || language === 'zxx') {
        console.log("YouTube bug handled...")
        return 'en';
    } else if (language === 'es-ES') {
        console.log("YouTube bug handled...")
        return 'es';
    } else if (!languageEncodings[language]) { // Default handling if language is not in the list
        return 'en';
    } else {
        return language;
    }
}