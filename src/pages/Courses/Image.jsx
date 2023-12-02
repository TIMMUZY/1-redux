import React from "react";
import { useParams } from "react-router-dom";
import classes from "./Image.module.css";
const halfIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700", height="16" width="18" viewBox="0 0 576 512"><path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"/></svg>';
const iconstar =
  '<svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700", 135, 18" height="16" width="18" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>';
const imagesData = [
  {
    id: 1,
    src: "https://gov-web-sing.s3.ap-southeast-1.amazonaws.com/uploads/2023/1/Wordpress-featured-images-48-1672795987342.jpg",
    alt: "Image 1",
    name: "Photoshop - Web Design",
    price: "$290",
    description:
      "Celebrate success right, the only way, apple. To succeed you must believe, you will succeed.",
    year: "1 year",
    cours: "cours",
    count: 25,
    star: 4,
    half: 1,
    size: "Class Name",
    time: "7:00 - 10:00",
    duration: "Class Duration",
  },
  {
    id: 2,
    src: "https://previews.123rf.com/images/31moonlight31/31moonlight311602/31moonlight31160200115/52106248-mobile-app-development-experienced-team-flat-3d-isometric-vector-illustration.jpg",
    alt: "Image 2",
    name: "Sketch - Mobile App",
    price: "$170",
    description:
      "Celebrate success right, the only way, apple. To succeed you must believe, you will succeed.",
    year: "1 year",
    cours: "cours",
    count: 25,
    half: 1,
    star: 4,
    size: "Class Name",
    time: "7:00 - 10:00",
    duration: "Class Duration",
  },
  {
    id: 3,
    src: "https://fashiondiscounts.uk/wp-content/uploads/2022/03/Untitled-design-16-1.png",
    alt: "Image 3",
    name: "Corel - Fashion Design",
    price: "$290",
    description:
      "Celebrate success right, the only way, apple. To succeed you must believe, you will succeed.",
    year: "1 year",
    cours: "cours",
    count: 25,
    half: 1,
    star: 4,
    size: "Class Name",
    time: "7:00 - 10:00",
    duration: "Class Duration",
  },
  {
    id: 4,
    src: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60d490b32e60ec662071232e_Design-systems-A-beginners-guide-to-building-one-that-will-last_BlogHero.jpg",
    alt: "Image 4",
    name: "Corel - Fashion Design",
    price: "$290",
    description:
      "Celebrate success right, the only way, apple. To succeed you must believe, you will succeed.",
    year: "1 year",
    cours: "cours",
    count: 25,
    half: 1,
    star: 4,
    size: "Class Name",
    time: "7:00 - 10:00",
    duration: "Class Duration",
  },
  {
    id: 5,
    src: "https://agendabrussels2.imgix.net/57b16d3451c4ecab1a230a5a19642dbcddf0acaf.jpg",
    alt: "Image 5",
    name: "Corel - Fashion Design",
    price: "$290",
    description:
      "Celebrate success right, the only way, apple. To succeed you must believe, you will succeed.",
    year: "1 year",
    cours: "cours",
    count: 25,
    half: 1,
    star: 4,
    size: "Class Name",
    time: "7:00 - 10:00",
    duration: "Class Duration",
  },
  {
    id: 6,
    src: "https://www.ied.edu/_default_upload_bucket/1081/image-thumb__1081__scaleByWidth1000/1600x952px_Le%20scuole_Design.jpg",
    alt: "Image 6",
    name: "Corel - Fashion Design",
    price: "$290",
    description:
      "Celebrate success right, the only way, apple. To succeed you must believe, you will succeed.",
    year: "1 year",
    cours: "cours",
    count: 25,
    half: 1,
    star: 4,
    size: "Class Name",
    time: "7:00 - 10:00",
    duration: "Class Duration",
  },
];

const Image = () => {
  const { id } = useParams();
  const image = imagesData.find((img) => +img.id === +id);

  function getstar(count) {
    let htmls = "";
    for (let i = 0; i < count; i++) {
      console.log(iconstar);
      htmls += iconstar;
    }
    console.log(htmls);
    return <div dangerouslySetInnerHTML={{ __html: htmls }}></div>;
  }
  function getMid(count) {
    let single = "";
    for (let i = 0; i < count; i++) {
      single += halfIcon;
    }
    return <div dangerouslySetInnerHTML={{ __html: single }}></div>;
  }
  return (
    <div className={classes.reсeive}>
      <div className={classes.opacityBlack}>
        {
          <img
            className={classes.upwards}
            src="https://www.studywithmehar.com/content/images/size/w2000/2023/01/Study-With-Mehar-Template-2.png"
            alt=""
          />
        }

        <div className={classes.description}>
          <h1>COURSES GRID 3 COLUMS</h1>
          <p>Home {">"}Courses Grid</p>
        </div>
      </div>
      <div>
        <h1 className={classes.graphic}> UI-UX WEB Design, Graphic Design</h1>
        <div className={classes.profil}>
          {
            <img
              className={classes.brutal}
              src="https://masterpiecer-images.s3.yandex.net/569f0e4b7f3011ee900e2aa0df1cd6e5:upscaled"
              alt=""
            />
          }
          {/* <div className={classes.info}> */}

          <div className={classes.fullName}>
            <p>Keny White</p>
            <p className={classes.job}>Teacher</p>
          </div>
          <div>
            <p>Photoshop</p>
            <p className={classes.job}>Category</p>
          </div>
          <div>
            <div className={classes.rating}>
              <p>{getstar(image.star)}</p>
              <p className={classes.halfStar}>
                {" "}
                {getMid(image.half)} 25 Reviews
              </p>
            </div>
            <p className={classes.job}>Reviews</p>
          </div>
        </div>

        {/* </div> */}
        {image && image.src && (
          <img className={classes.picture} src={image.src} alt={image.alt} />
        )}
      </div>
      <div className={classes.line}> </div>
      <div className={classes.menuBox}>
        <h3>CATEGORIES</h3>
        <hr className={classes.lay} />
        <div className={classes.sphere}>
          <p className={classes.word}>Web Design(9)</p>
          <hr />
          <p>App Design(3)</p>
          <hr />
          <p>Graphic Design(23)</p>
          <hr />
          <p>Game Design(5)</p>
          <hr />
          <p>UI-UX Design(7)</p>
          <hr />
          <p>Print Design(2)</p>
          <hr />
          <p>Logo - Typo Design(5)</p>
        </div>
      </div>
    </div>
  );
};

export default Image;
