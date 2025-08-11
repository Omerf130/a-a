// const propertyData = [
//   {
//     description:
//       "אם אתם גרים בבית משותף, ודאי יצא לכם לתהות לא פעם כיצד מתנהלים ענייני התחזוקה, הכספים והשירותים בבניין. מיא אחראי? למי אפשר לפנות אם יש בעיה? והכי חשוב - האם מותר לכם לדעת איך הכסף שלכם מנוהל? התשובה היא כן! בעלי הדירות זכאים לקבל מידע על ניהול הרכוש המשותף, כולל דוחות כספיים והחלטות הנוגעות לאחזקה.",
//     headline: "הזכות למידע על ניהול הבית המשותף - האם היא מוחלטת?",
//     image:
//       "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
//   {
//     description:
//       "בבניינים משותפים רבים בישראל, השימוש ברכוש המשותף הוא נושא נפיץ שעלול להוביל לסכסוכים בין שכנים. אחד המקרים השכיחים ביותר הוא התקנת סוכך לחנייה - פעולה שנראית לכאורה פשוטה, אך עשויה להוביל למחלוקות משפטיות. אז מתי סוכך לחניה הופך לבעיה? ומתי השימוש בו נחשב סביר?",
//     headline: "שימוש סביר בסוכך לחנייה ברכוש משותף - מתי זה הופך לבעיה משפטית?",
//     image:
//       "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
//   {
//     description:
//       "אחת הסוגייות המורכבות והטעונות ביותר בחיי היום יום של בתים משותפים היא השאלה: האם דייר או קבוצת דיירים יכולים להתנהל בנפרד משאר הבניין - כלכלית, תפעולית וניהולית? השאלה הזאת עולה בעיקר בבתים משותפים בעלי אגפים נפרדים, מבנים כפולים או כאשר מתקיימת תחושת קיפוח של חלק מהדיירים",
//     headline: "מתי תאושר הפרדת ניהול בבית משותף?",
//     image:
//       "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
//   {
//     description:
//       "בשנים האחרונות, סוגיית התקנת מצלמות ברכוש המשותף הפכה לנושא מרכזי בדיונים בין שכנים בבית משותף. מצד אחד, בעלי הדירות מבקשים להתקין מצלמות להגנה על רכושם ושמירה על הביטחון, ומנגד, קיים חשש לפגיעה בפרטיות הדיירים האחרים. הפסיקה מגדירה מספר קריטריונים להערכת חוקיות התקנת מצלמות ברכוש משותף",
//     headline: "התקנת מצלמות ברכוש משותף - מה מותר ומה אסור?",
//     image:
//       "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
//   {
//     description:
//       "אחד הסכסוכים הנופצים ביותר בין שכנים בבניינין משותפים נוגע לשאלה: האם כל בעל דירה חייב להשתתף בעלויות שיפוץ של הרכוש המשותף - גם אם הוא מתנגד לכך?",
//     headline: "מתי חייב בעל הדירה להשתתף בשיפוץ?",
//     image:
//       "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
//   {
//     description:
//       "לפי סעיף 58(א) לחוק מקרקעין, כל בעל דירה בבניין משותף חייב להשתתף בהוצאות התחזוקה והניהול של הרכוש המשותף, כמו ניקיון, תאורנ, תיקונים ועוד. החישוב נעשה לפי גודל הדירה - כלומר, שטח הרצפה של הדירה עצמה(נטו), בלי חצרות, בלי גינות ובלי מחסנים צמודים.",
//     headline:
//       "עושים סדר - מי משלם על תחוזקת הרכוש המשותף בבניין - ולפי מה מחשבים את זה?",
//     image:
//       "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
// ];

import type { ISlideData } from "../interfaces/interfaces";

// const damageData = [
//   {
//     description:
//       "אם אתם גרים בבית משותף, ודאי יצא לכם לתהות לא פעם כיצד מתנהלים ענייני התחזוקה, הכספים והשירותים בבניין. מיא אחראי? למי אפשר לפנות אם יש בעיה? והכי חשוב - האם מותר לכם לדעת איך הכסף שלכם מנוהל? התשובה היא כן! בעלי הדירות זכאים לקבל מידע על ניהול הרכוש המשותף, כולל דוחות כספיים והחלטות הנוגעות לאחזקה.",
//     headline: "הזכות למידע על ניהול הבית המשותף - האם היא מוחלטת?",
//     image:
//       "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
//   {
//     description:
//       "בבניינים משותפים רבים בישראל, השימוש ברכוש המשותף הוא נושא נפיץ שעלול להוביל לסכסוכים בין שכנים. אחד המקרים השכיחים ביותר הוא התקנת סוכך לחנייה - פעולה שנראית לכאורה פשוטה, אך עשויה להוביל למחלוקות משפטיות. אז מתי סוכך לחניה הופך לבעיה? ומתי השימוש בו נחשב סביר?",
//     headline: "שימוש סביר בסוכך לחנייה ברכוש משותף - מתי זה הופך לבעיה משפטית?",
//     image:
//       "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
//   {
//     description:
//       "אחת הסוגייות המורכבות והטעונות ביותר בחיי היום יום של בתים משותפים היא השאלה: האם דייר או קבוצת דיירים יכולים להתנהל בנפרד משאר הבניין - כלכלית, תפעולית וניהולית? השאלה הזאת עולה בעיקר בבתים משותפים בעלי אגפים נפרדים, מבנים כפולים או כאשר מתקיימת תחושת קיפוח של חלק מהדיירים",
//     headline: "מתי תאושר הפרדת ניהול בבית משותף?",
//     image:
//       "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
//   {
//     description:
//       "בשנים האחרונות, סוגיית התקנת מצלמות ברכוש המשותף הפכה לנושא מרכזי בדיונים בין שכנים בבית משותף. מצד אחד, בעלי הדירות מבקשים להתקין מצלמות להגנה על רכושם ושמירה על הביטחון, ומנגד, קיים חשש לפגיעה בפרטיות הדיירים האחרים. הפסיקה מגדירה מספר קריטריונים להערכת חוקיות התקנת מצלמות ברכוש משותף",
//     headline: "התקנת מצלמות ברכוש משותף - מה מותר ומה אסור?",
//     image:
//       "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
//   {
//     description:
//       "אחד הסכסוכים הנופצים ביותר בין שכנים בבניינין משותפים נוגע לשאלה: האם כל בעל דירה חייב להשתתף בעלויות שיפוץ של הרכוש המשותף - גם אם הוא מתנגד לכך?",
//     headline: "מתי חייב בעל הדירה להשתתף בשיפוץ?",
//     image:
//       "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
//   {
//     description:
//       "לפי סעיף 58(א) לחוק מקרקעין, כל בעל דירה בבניין משותף חייב להשתתף בהוצאות התחזוקה והניהול של הרכוש המשותף, כמו ניקיון, תאורנ, תיקונים ועוד. החישוב נעשה לפי גודל הדירה - כלומר, שטח הרצפה של הדירה עצמה(נטו), בלי חצרות, בלי גינות ובלי מחסנים צמודים.",
//     headline:
//       "עושים סדר - מי משלם על תחוזקת הרכוש המשותף בבניין - ולפי מה מחשבים את זה?",
//     image:
//       "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     category: "real-estate",
//   },
// ];

export const propertyData: ISlideData[] = [
  {
    id: 1,
    headline: "Property Headline 1",
    description:
      "אם אתם גרים בבית משותף, ודאי יצא לכם לתהות לא פעם כיצד מתנהלים ענייני התחזוקה, הכספים והשירותים בבניין. מיא אחראי? למי אפשר לפנות אם יש בעיה? והכי חשוב - האם מותר לכם לדעת איך הכסף שלכם מנוהל? התשובה היא כן! בעלי הדירות זכאים לקבל מידע על ניהול הרכוש המשותף, כולל דוחות כספיים והחלטות הנוגעות לאחזקה.",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 2,
    headline: "Property Headline 2",
    description: "Description for property 2",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 3,
    headline: "Property Headline 3",
    description: "Description for property 3",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 4,
    headline: "Property Headline 4",
    description: "Description for property 4",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 5,
    headline: "Property Headline 5",
    description: "Description for property 5",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 6,
    headline: "Property Headline 6",
    description: "Description for property 6",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 7,
    headline: "Property Headline 7",
    description: "Description for property 7",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 8,
    headline: "Property Headline 8",
    description: "Description for property 8",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 9,
    headline: "Property Headline 9",
    description: "Description for property 9",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 10,
    headline: "Property Headline 10",
    description: "Description for property 10",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 11,
    headline: "Property Headline 11",
    description: "Description for property 11",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 12,
    headline: "Property Headline 12",
    description: "Description for property 12",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 13,
    headline: "Property Headline 13",
    description: "Description for property 13",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 14,
    headline: "Property Headline 14",
    description: "Description for property 14",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 15,
    headline: "Property Headline 15",
    description: "Description for property 15",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 16,
    headline: "Property Headline 16",
    description: "Description for property 16",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
];

export const damageData = [
  {
    id: 17,
    headline: "Damage Headline 17",
    description: "Description for damage 17",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 18,
    headline: "Damage Headline 18",
    description: "Description for damage 18",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 19,
    headline: "Damage Headline 19",
    description: "Description for damage 19",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 20,
    headline: "Damage Headline 20",
    description: "Description for damage 20",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 21,
    headline: "Damage Headline 21",
    description: "Description for damage 21",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 22,
    headline: "Damage Headline 22",
    description: "Description for damage 22",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
  {
    id: 23,
    headline: "Damage Headline 23",
    description: "Description for damage 23",
    image: "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    category: "real-estate",
  },
];
