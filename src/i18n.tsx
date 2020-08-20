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
            language: "Language"
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
            language: "لغة"         
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
          language: "Sprache"
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
          language: "Langue"
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
          language: "语言"
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
