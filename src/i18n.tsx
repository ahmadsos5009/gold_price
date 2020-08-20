import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en:{
        translations: {
            header: "Gold Price In {{countryName}}",
            update: "Updated {{updatedTime}}",
            purity: "Price table based on purity, in",
            tableUnti: "Unit",
            tablePrice: "Price",
            weightTableHeader: "Price Per Weight",
            weightTableWeight: "Weight",
            gram: "Gram",
            ounce: "Ounce",
            kilo: "Kilo",
            badgePriceTable: "Price get updated every 12 hours",
            badgeGraph: "30 Day Gold Price History",
            Welcome1: "Hey, nice to see you",
            Welcome2: "Throughout history, gold has been seen as a special and valuable commodity.",
            Welcome3: "Today, owning gold can act as a hedge against inflation and deflation alike, as well as a good portfolio diversifier.",
            Welcome4: "As a global store of value, gold can also provide financial cover during geopolitical and macroeconomic uncertainty.",
            Welcome5: "We should know that gold price is linked to oil and dollar as following:",
            Welcome6: "The higher the price of oil, so that the price of gold; The relationship between them is a direct correlation.",
            Welcome7: "The higher the price of the dollar, the lower the price of gold. The relationship between them is inverse.",
            currencysPage: "Currencies Page",
            language: "Language",
            metaTitle: "Gold Price in {{countryName}} - Ounce Gram Kilo Gold Rate in {{code}}", 
            metaDescription: "Gold rate in {{countryName}}. Current price of Ounce Gram Kilo is available in {{countryCurrency}} in 24k, 22k, 21k, 18k",
            metaKeywords: `ounce gold rates in {{countryName}},  gram gold rates in {{countryName}}, kilo gold rates in {{countryName}}, 
            gold price in {{countryCurrency}}, gold price per ounce in , today ounce gold rate in {{countryName}} , 
            22k 21k 24k 20k 18k 14k gold price in  {{countryCurrency}} in {{countryName}}, 
            gold price today in {{countryName}}, gold stock price, 24k gold price per gram, 18k gold /gram price, 21k gold price per gram, 21k gold /gram price 24k gold /gram price`,
            metaOGDescription: `Gold Price in {{countryName}}. Current price of Ounce Gram Kilo is available in {{countryCurrency}} in 24k, 22k, 23k, 21k, 20k, 18k .   
            We are providing the latest rates in the current exchange rate of {{countryCurrency}}.  
            Today gold price per Ounce =  {{ouncePrice}} {{code}}, Today gold price per Gram =  {{gramPrice}} {{code}}, Today gold price per Kilo =  {{kiloPrice}} {{code}}, updated at {{updatedTime}}.`,
          }
      },
      ara: {
        translations: {
            header: "سعر الذهب في {{countryName}}",
            update: "{{updatedTime}} اخر تحديث",
            purity: "جدول الأسعار على أساس النقاء ، مرتكز على",
            tableUnti: "وحدة",
            tablePrice: "السعر",
            weightTableHeader: "السعر لكل وزن",
            weightTableWeight: "وزن",
            gram: "غرام",
            ounce: "أوقية",
            kilo: "كيلو",
            badgePriceTable: "يتم تحديث السعر كل 12 ساعة",
            badgeGraph: "تاريخ أسعار الذهب لمدة 30 يومًا",
            Welcome1: "مرحبًا ، سررت برؤيتك",
            Welcome2: ".عبر التاريخ ، كان يُنظر إلى الذهب على أنه سلعة خاصة وقيمة",
            Welcome3: ".اليوم ، يمكن أن يكون امتلاك الذهب بمثابة تحوط ضد التضخم والانكماش على حد سواء ، فضلاً عن كونه أداة تنويع جيدة للمحفظة",
            Welcome4: "كمخزن عالمي للقيمة ، يمكن للذهب أيضًا توفير غطاء مالي خلال حالة عدم اليقين الجيوسياسي والاقتصاد الكلي",
            Welcome5: ":يجب أن نعلم أن سعر الذهب مرتبط بالنفط والدولار على النحو التالي",
            Welcome6: "كلما ارتفع سعر النفط ، ارتفع سعر الذهب ؛ العلاقة بينهما علاقة مباشرة",
            Welcome7: "كلما ارتفع سعر الدولار ، انخفض سعر الذهب. العلاقة بينهما معكوسة",
            currencysPage: "صفحة العملات",
            language: "لغة",
            metaTitle: "سعر الذهب في {{countryName}} - {{countryName}} سعر أوقية جرام كيلو الذهب في", 
            metaDescription: "سعر الذهب في {{countryName}}. السعر الحالي للجرام أوقية كيلو متاح في {{countryCurrency}} في 24 قيراط ، 22 قيراط ، 21 ك ، 18 قيراط",
            metaKeywords: `أسعار أوقية الذهب في {{countryName}},  أسعار جرام الذهب في {{countryName}}, أسعار كيلو الذهب في {{countryName}}, 
            سعر الذهب في {{countryCurrency}}, سعر أونصة الذهب , اليوم سعر أوقية الذهب في {{countryName}} , 
            سعر الذهب عيار 22 قيراطًا عيار 24 قيراطًا عيار 18 في  {{countryCurrency}} في {{countryName}}, 
            سعر الذهب اليوم بـ {{countryName}}, سعر سهم الذهب , سعر جرام الذهب عيار 24 , سعر الذهب عيار 18 للجرام ، سعر الذهب عيار 21 للجرام ، سعر الذهب عيار 21 للجرام سعر الذهب عيار ٢٤ / الجرام`,
            metaOGDescription: `سعر الذهب في {{countryName}}. السعر الحالي للجرام أوقية كيلو متاح في {{countryCurrency}} في 24 قيراط ، 22 قيراط ، 23 قيراطًا ، 21 ك ، 20 قيراطًا ، 18 قيراطًا .   
            نحن نقدم أحدث الأسعار بسعر الصرف الحالي لـ {{countryCurrency}}.  
            سعر أوقية الذهب اليوم =  {{ouncePrice}} {{code}}, سعر جرام الذهب اليوم =  {{gramPrice}} {{code}}, اليوم سعر الذهب للكيلو =  {{kiloPrice}} {{code}}, تم التحديث في {{updatedTime}}.`,         
        }
      },
      deu: {
        translations: {
          header: "Goldpreis In {{countryName}}",
          update: "Aktualisiert {{updatedTime}}",
          purity: "Preistabelle basierend auf Reinheit, in",
          tableUnti: "Einheit",
          tablePrice: "Preis",
          weightTableHeader: "Preis pro Gewicht",
          weightTableWeight: "Gewicht",
          gram: "Gramm",
          ounce: "Unze",
          kilo: "Kilo",
          badgePriceTable: "Der Preis wird alle 12 Stunden aktualisiert",
          badgeGraph: "30 Tage Goldpreisverlauf",
          Welcome1: "Hey, schön dich zu sehen",
          Welcome2: "Im Laufe der Geschichte wurde Gold als besonderes und wertvolles Gut angesehen.",
          Welcome3: "Heute kann der Besitz von Gold sowohl als Absicherung gegen Inflation und Deflation als auch als guter Portfoliodiversifikator dienen.",
          Welcome4: "Als globaler Wertspeicher kann Gold auch bei geopolitischen und makroökonomischen Unsicherheiten finanzielle Deckung bieten.",
          Welcome5: "Wir sollten wissen, dass der Goldpreis wie folgt mit Öl und Dollar verbunden ist:",
          Welcome6: "Je höher der Ölpreis, desto höher der Goldpreis; Die Beziehung zwischen ihnen ist eine direkte Korrelation.",
          Welcome7: "Je höher der Preis des Dollars ist, desto niedriger ist der Goldpreis. Die Beziehung zwischen ihnen ist umgekehrt.",
          currencysPage: "Währungen Seite",
          language: "Sprache",
          metaTitle: "Goldpreis in {{countryName}} - Unze Gramm Kilo Gold Rate in {{code}}", 
          metaDescription: "Goldpreis in {{countryName}}. Der aktuelle Preis für Unzen Gramm Kilo ist in {{countryCurrency}} in 24.000, 22.000, 21.000, 18.000 verfügbar",
          metaKeywords: `Unzen Goldraten in {{countryName}}, Gramm Goldraten in {{countryName}}, Kilogoldraten in {{countryName}},
              Goldpreis in {{countryCurrency}}, Goldpreis pro Unze in, heute Unzen Goldpreis in {{countryName}},
              22.000 21.000 24.000 20.000 18.000 14.000 Goldpreis in {{countryCurrency}} in {{countryName}},
              Goldpreis heute in {{countryName}}, Goldaktienpreis, 24.000 Goldpreis pro Gramm, 18.000 Gold / Gramm Preis, 21.000 Goldpreis pro Gramm, 21.000 Gold / Gramm Preis 24.000 Gold / Gramm Preis`,
          metaOGDescription: `Goldpreis in {{countryName}}. Der aktuelle Preis für Unzen Gramm Kilo ist in {{countryCurrency}} in 24.000, 22.000, 23.000, 21.000, 20.000, 18.000 verfügbar.
             Wir bieten die neuesten Kurse zum aktuellen Wechselkurs von {{countryCurrency}}.
             Heute Goldpreis pro Unze = {{ouncePrice}} {{code}}, Heute Goldpreis pro Gramm = {{gramPrice}} {{code}}, Heute Goldpreis pro Kilo = {{kiloPrice}} {{code}} , aktualisiert um {{updatedTime}}.`,
      }
      },
      spa: {
        translations: {
          header: "Gold Price In {{countryName}}",
          update: "Updated {{updatedTime}}",
          purity: "Price table based on purity, in",
          tableUnti: "Unit",
          tablePrice: "Price",
          weightTableHeader: "Price Per Weight",
          weightTableWeight: "Weight",
          gram: "Gram",
          ounce: "Ounce",
          kilo: "Kilo",
          badgePriceTable: "Price get updated every 12 hours",
          badgeGraph: "30 Day Gold Price History",
          Welcome1: "Hey, nice to see you",
          Welcome2: "Throughout history, gold has been seen as a special and valuable commodity.",
          Welcome3: "Today, owning gold can act as a hedge against inflation and deflation alike, as well as a good portfolio diversifier.",
          Welcome4: "As a global store of value, gold can also provide financial cover during geopolitical and macroeconomic uncertainty.",
          Welcome5: "We should know that gold price is linked to oil and dollar as following:",
          Welcome6: "The higher the price of oil, so that the price of gold; The relationship between them is a direct correlation.",
          Welcome7: "The higher the price of the dollar, the lower the price of gold. The relationship between them is inverse.",
          currencysPage: "Currencys Page",
          language: "Language",
      }
      },
      fra: {
        translations: {
          header: "Prix de l'or en {{countryName}}",
          update: "Actualisé {{updatedTime}}",
          purity: "Tableau des prix basé sur la pureté, en",
          tableUnti: "Unité",
          tablePrice: "Prix",
          weightTableHeader: "Prix par poids",
          weightTableWeight: "Poids",
          gram: "Gramme",
          ounce: "Once",
          kilo: "Kilo",
          badgePriceTable: "Le prix est mis à jour toutes les 12 heures",
          badgeGraph: "Historique du prix de l'or sur 30 jours",
          Welcome1: "Hé, ravi de te voir",
          Welcome2: "Tout au long de l'histoire, l'or a été considéré comme une matière première spéciale et précieuse.",
          Welcome3: "Aujourd'hui, posséder de l'or peut servir de couverture contre l'inflation et la déflation, ainsi qu'un bon diversificateur de portefeuille.",
          Welcome4: "En tant que réserve de valeur mondiale, l'or peut également fournir une couverture financière en période d'incertitude géopolitique et macroéconomique.",
          Welcome5: "Il faut savoir que le prix de l'or est lié au pétrole et au dollar comme suit:",
          Welcome6: "Plus le prix du pétrole est élevé, de sorte que le prix de l'or; La relation entre eux est une corrélation directe.",
          Welcome7: "Plus le prix du dollar est élevé, plus le prix de l'or est bas. La relation entre eux est inverse.",
          currencysPage: "Page des devises",
          language: "Langue",
          metaTitle: "Taux de l'or en {{countryName}}. Le prix actuel de l'Ounce Gram Kilo est disponible en {{countryCurrency}} en 24k, 22k, 21k, 18k", 
          metaDescription: "Taux de l'or en {{countryName}}. Le prix actuel de l'Ounce Gram Kilo est disponible en {{countryCurrency}} en 24k, 22k, 21k, 18k",
          metaKeywords: `taux de l'once d'or en {{countryName}}, taux du gramme d'or en {{countryName}}, taux du kilo d'or en {{countryName}},
             prix de l'or en {{countryCurrency}}, prix de l'or par once en, taux de l'once d'or aujourd'hui en {{countryName}},
             22k 21k 24k 20k 18k 14k prix de l'or en {{countryCurrency}} en {{countryName}},
             prix de l'or aujourd'hui en {{countryName}}, cours de l'or, prix de l'or 24 carats par gramme, prix or 18 carats / gramme, prix de l'or 21 carats par gramme, prix or 21 carats / gramme prix or / gramme 24 carats`,
          metaOGDescription: `Prix de l'or en {{countryName}}. Le prix actuel de l'Ounce Gram Kilo est disponible en {{countryCurrency}} en 24k, 22k, 23k, 21k, 20k, 18k.
             Nous fournissons les derniers taux du taux de change actuel de {{countryCurrency}}.
             Prix de l'or aujourd'hui par once = {{ouncePrice}} {{code}}, prix de l'or aujourd'hui par gramme = {{gramPrice}} {{code}}, prix de l'or aujourd'hui par kilo = {{kiloPrice}} {{code}} , mis à jour à {{updatedTime}}.`,
      }
      },
      zho: {
        translations: {
          header: "黄金价格 {{countryName}}",
          update: "更新 {{updatedTime}}",
          purity: "基于纯度的价格表，以",
          tableUnti: "单元",
          tablePrice: "价钱",
          weightTableHeader: "单价",
          weightTableWeight: "重量",
          gram: "公克",
          ounce: "盎司",
          kilo: "公斤",
          badgePriceTable: "价格每12小时更新一次",
          badgeGraph: "30天黄金价格历史记录",
          Welcome1: "嘿，很高兴见到你",
          Welcome2: "在整个历史中，黄金一直被视为一种特殊而有价值的商品。",
          Welcome3: "如今，拥有黄金既可以充当通货膨胀和通缩的避险工具，又可以作为良好的投资组合多元化产品。",
          Welcome4: "作为全球价值存储，黄金还可以在地缘政治和宏观经济不确定性期间提供财务保障。",
          Welcome5: "我们应该知道，黄金价格与石油和美元联系如下：",
          Welcome6: "石油的价格越高，黄金的价格就越高； 它们之间的关系是直接相关的。",
          Welcome7: "美元价格越高，黄金价格越低。 它们之间的关系是相反的。",
          currencysPage: "货币页面",
          language: "语言",
          metaTitle: "{{countryName}}中的黄金价格-{{code}}中的盎司克黄金汇率", 
          metaDescription: "{{countryName}}中的黄金汇率。 盎司{克朗货币}}的当前价格为24k，22k，21k，18k",
          metaKeywords: `{{countryName}}中的盎司金价，{{countryName}}中的克金价，{{countryName}}中的千金价，
             {{countryCurrency}}中的黄金价格，每盎司中的黄金价格，{{countryName}}中的今天盎司黄金价格，
             在{{countryName}}中{{countryCurrency}}中的22k 21k 24k 20k 18k 14k黄金价格，
             {{countryName}}中的今天黄金价格，黄金库存价格，每克24k黄金价格，18k黄金/克价格，21k黄金每克价格，21k黄金/克价格24k黄金/克价格`,
          metaOGDescription: `{{countryName}}中的黄金价格。 盎司（{{countryCurrency}}}的当前价格为24k，22k，23k，21k，20k，18k。
             我们正在提供{{countryCurrency}}当前汇率中的最新汇率。
             今天每盎司黄金价格= {{ouncePrice}} {{code}}，今天每克黄金价格= {{gramPrice}} {{code}}，今天每公斤黄金价格= {{kiloPrice}} {{code}} ，于{{updatedTime}}更新。`,
      }
      },
    },
    fallbackLng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
