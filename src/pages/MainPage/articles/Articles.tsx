import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide from "./Slide";
import "./Articles.scss";

const slidesData = [
  {
    description:
      "אם אתם גרים בבית משותף, ודאי יצא לכם לתהות לא פעם כיצד מתנהלים ענייני התחזוקה, הכספים והשירותים בבניין. מיא אחראי? למי אפשר לפנות אם יש בעיה? והכי חשוב - האם מותר לכם לדעת איך הכסף שלכם מנוהל? התשובה היא כן! בעלי הדירות זכאים לקבל מידע על ניהול הרכוש המשותף, כולל דוחות כספיים והחלטות הנוגעות לאחזקה.",
    headline: "הזכות למידע על ניהול הבית המשותף - האם היא מוחלטת?",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category:""
  },
  {
    description:
      "בבניינים משותפים רבים בישראל, השימוש ברכוש המשותף הוא נושא נפיץ שעלול להוביל לסכסוכים בין שכנים. אחד המקרים השכיחים ביותר הוא התקנת סוכך לחנייה - פעולה שנראית לכאורה פשוטה, אך עשויה להוביל למחלוקות משפטיות. אז מתי סוכך לחניה הופך לבעיה? ומתי השימוש בו נחשב סביר?",
    headline: "שימוש סביר בסוכך לחנייה ברכוש משותף - מתי זה הופך לבעיה משפטית?",
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category:""
  },
  {
    description:
      "אחת הסוגייות המורכבות והטעונות ביותר בחיי היום יום של בתים משותפים היא השאלה: האם דייר או קבוצת דיירים יכולים להתנהל בנפרד משאר הבניין - כלכלית, תפעולית וניהולית? השאלה הזאת עולה בעיקר בבתים משותפים בעלי אגפים נפרדים, מבנים כפולים או כאשר מתקיימת תחושת קיפוח של חלק מהדיירים",
    headline: "מתי תאושר הפרדת ניהול בבית משותף?",
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category:""
  },
  {
    description:
      "בשנים האחרונות, סוגיית התקנת מצלמות ברכוש המשותף הפכה לנושא מרכזי בדיונים בין שכנים בבית משותף. מצד אחד, בעלי הדירות מבקשים להתקין מצלמות להגנה על רכושם ושמירה על הביטחון, ומנגד, קיים חשש לפגיעה בפרטיות הדיירים האחרים. הפסיקה מגדירה מספר קריטריונים להערכת חוקיות התקנת מצלמות ברכוש משותף",
    headline: "התקנת מצלמות ברכוש משותף - מה מותר ומה אסור?",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category:""
  },
  {
    description:
      "אחד הסכסוכים הנופצים ביותר בין שכנים בבניינין משותפים נוגע לשאלה: האם כל בעל דירה חייב להשתתף בעלויות שיפוץ של הרכוש המשותף - גם אם הוא מתנגד לכך?",
    headline: "מתי חייב בעל הדירה להשתתף בשיפוץ?",
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category:""
  },
  {
    description:
      "לפי סעיף 58(א) לחוק מקרקעין, כל בעל דירה בבניין משותף חייב להשתתף בהוצאות התחזוקה והניהול של הרכוש המשותף, כמו ניקיון, תאורנ, תיקונים ועוד. החישוב נעשה לפי גודל הדירה - כלומר, שטח הרצפה של הדירה עצמה(נטו), בלי חצרות, בלי גינות ובלי מחסנים צמודים.",
    headline:
      "עושים סדר - מי משלם על תחוזקת הרכוש המשותף בבניין - ולפי מה מחשבים את זה?",
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      category:""
  },
];

const Articles = () => {
  return (
    <div id="articles" className="articles-container">
      <Carousel
        additionalTransfrom={0}
        autoPlay={true}  
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            partialVisibilityGutter: 0,
          },
          tablet: {
            breakpoint: { max: 1024, min: 640 },
            items: 3,
            partialVisibilityGutter: 0,
          },
          smallTablet: {
            breakpoint: { max: 640, min: 484 },
            items: 2,
            partialVisibilityGutter: 0,
          },
          mobile: {
            breakpoint: { max: 484, min: 0 },
            items: 1,
            partialVisibilityGutter: 0,
            slidesToSlide: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl
        shouldResetAutoplay
        showDots
        sliderClass="slider"
        slidesToSlide={1}
        swipeable
      >
        {slidesData.map((slide, index) => (
          <Slide
            key={index}
            id={index + 1}
            description={slide.description}
            headline={slide.headline}
            image={slide.image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Articles;
