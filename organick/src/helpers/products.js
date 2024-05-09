import stars from "../assets/products/Star.png";
import img1 from "../assets/products/Kiwi.jpg";
import img2 from "../assets/products/Mindal.png";
import img3 from "../assets/products/abrikos.png";
import img4 from "../assets/products/ananas.jpg";
import img5 from "../assets/products/baclazhan.png";
import img6 from "../assets/products/banan.png";
import img7 from "../assets/products/bred.png";
import img8 from "../assets/products/broccol.png";
import img9 from "../assets/products/brown-fyndyk.png";
import img10 from "../assets/products/cabachek2.png";
import img11 from "../assets/products/corn.png";
import img12 from "../assets/products/cvetnaya-kapusta.png";
import img13 from "../assets/products/eggs.png";
import img14 from "../assets/products/fasol.png";
import img15 from "../assets/products/fistashka.png";
import img16 from "../assets/products/garlic.jpg";
import img17 from "../assets/products/granat.jpg";
import img18 from "../assets/products/grechka.jpg";
import img19 from "../assets/products/green-apple.jpg";
import img20 from "../assets/products/kabachek.png";
import img21 from "../assets/products/kapusta.png";
import img22 from "../assets/products/kapysta.png";
import img23 from "../assets/products/klybnica.jpg";
import img24 from "../assets/products/lyk.jpg";
import img25 from "../assets/products/lyk.png";
import img26 from "../assets/products/perec.jpg";
import img27 from "../assets/products/pitahaya.png";
import img28 from "../assets/products/potato.png";
import img29 from "../assets/products/red-apple.jpg";
import img30 from "../assets/products/ris.png";
import img31 from "../assets/products/tomat.png";
import img32 from "../assets/products/white-fyndyk.png";
import img33 from "../assets/products/kapusta2.jpg";

const products = [
  {
    id: 1,
    kind: "Vegetable",
    title: "Calabrese Broccoli",
    img: img8,
    oldPrice: 20.0,
    newPrice: 13.0,
    quality: stars,
  },
  {
    id: 2,
    kind: "Vegetable",
    title: "Vegan Red Tomato",
    img: img31,
    oldPrice: 20.0,
    newPrice: 17.0,
    quality: stars,
  },
  {
    id: 25,
    kind: "Nuts",
    title: "White Hazelnut",
    img: img32,
    oldPrice: 10.0,
    newPrice: 8.0,
    quality: stars,
  },

  {
    id: 3,
    kind: "Groats",
    title: "Mung Bean",
    img: img14,
    oldPrice: 20.0,
    newPrice: 11.0,
    quality: stars,
  },

  {
    id: 5,
    kind: "Vegetable",
    title: "Onion",
    img: img24,
    oldPrice: 20.0,
    newPrice: 14.0,
    quality: stars,
  },
  {
    id: 20,
    kind: "Fruits",
    title: "Green Apple",
    img: img19,
    oldPrice: 10.0,
    newPrice: 8.0,
    quality: stars,
  },

  {
    id: 6,
    kind: "Vegetable",
    title: "Cabbage",
    img: img21,
    oldPrice: 20.0,
    newPrice: 17.0,
    quality: stars,
  },
  {
    id: 18,
    kind: "Fruits",
    title: "Banana",
    img: img6,
    oldPrice: 20.0,
    newPrice: 15.0,
    quality: stars,
  },
  {
    id: 8,
    kind: "Vegetable",
    title: "Vegetable marrow",
    img: img10,
    oldPrice: 20.0,
    newPrice: 18.0,
    quality: stars,
  },
  {
    id: 7,
    kind: "Vegetable",
    title: "Eggplant",
    img: img5,
    oldPrice: 20.0,
    newPrice: 18.0,
    quality: stars,
  },

  {
    id: 9,
    kind: "Vegetable",
    title: "Garlic",
    img: img16,
    oldPrice: 13.0,
    newPrice: 9.0,
    quality: stars,
  },
  {
    id: 10,
    kind: "Vegetable",
    title: "Vegetable marrow",
    img: img20,
    oldPrice: 20.0,
    newPrice: 18.0,
    quality: stars,
  },
  {
    id: 11,
    kind: "Vegetable",
    title: "Cabbage",
    img: img22,
    oldPrice: 20.0,
    newPrice: 16.0,
    quality: stars,
  },
  {
    id: 12,
    kind: "Vegetable",
    title: "Cabbage",
    img: img33,
    oldPrice: 20.0,
    newPrice: 16.0,
    quality: stars,
  },

  {
    id: 14,
    kind: "Vegetable",
    title: "Pepper",
    img: img26,
    oldPrice: 15.0,
    newPrice: 11.0,
    quality: stars,
  },
  {
    id: 15,
    kind: "Vegetable",
    title: "Potato",
    img: img28,
    oldPrice: 16.0,
    newPrice: 12.0,
    quality: stars,
  },

  {
    id: 17,
    kind: "Fruits",
    title: "Pineapple",
    img: img4,
    oldPrice: 22.0,
    newPrice: 19.0,
    quality: stars,
  },

  {
    id: 30,
    kind: "Groats",
    title: "Rice",
    img: img30,
    oldPrice: 15.0,
    newPrice: 11.0,
    quality: stars,
  },
  {
    id: 19,
    kind: "Fruits",
    title: "Pomegranate",
    img: img17,
    oldPrice: 20.0,
    newPrice: 18.0,
    quality: stars,
  },

  {
    id: 4,
    kind: "Vegetable",
    title: "Cauliflower",
    img: img12,
    oldPrice: 20.0,
    newPrice: 11.0,
    quality: stars,
  },

  {
    id: 13,
    kind: "Vegetable",
    title: "Onion Purple",
    img: img25,
    oldPrice: 20.0,
    newPrice: 14.0,
    quality: stars,
  },
  {
    id: 21,
    kind: "Fruits",
    title: "Red Apple",
    img: img29,
    oldPrice: 10.0,
    newPrice: 8.0,
    quality: stars,
  },
  {
    id: 22,
    kind: "Fruits",
    title: "Kiwi",
    img: img1,
    oldPrice: 10.0,
    newPrice: 8.0,
    quality: stars,
  },
  {
    id: 16,
    kind: "Fruits",
    title: "Apricot",
    img: img3,
    oldPrice: 17.0,
    newPrice: 12.0,
    quality: stars,
  },
  {
    id: 23,
    kind: "Fruits",
    title: "Strawberry",
    img: img23,
    oldPrice: 10.0,
    newPrice: 8.0,
    quality: stars,
  },
  {
    id: 24,
    kind: "Fruits",
    title: "Pitahaya",
    img: img27,
    oldPrice: 10.0,
    newPrice: 8.0,
    quality: stars,
  },

  {
    id: 26,
    kind: "Nuts",
    title: "Brown Hazelnut",
    img: img9,
    oldPrice: 10.0,
    newPrice: 8.0,
    quality: stars,
  },
  {
    id: 27,
    kind: "Nuts",
    title: "White Nuts",
    img: img15,
    oldPrice: 10.0,
    newPrice: 8.0,
    quality: stars,
  },
  {
    id: 28,
    kind: "Nuts",
    title: "Organic Almonds",
    img: img2,
    oldPrice: 10.0,
    newPrice: 8.0,
    quality: stars,
  },

  {
    id: 29,
    kind: "Groats",
    title: "Buckwheat",
    img: img18,
    oldPrice: 15.0,
    newPrice: 11.0,
    quality: stars,
  },

  {
    id: 31,
    kind: "Fresh",
    title: "Bread",
    img: img7,
    oldPrice: 15.0,
    newPrice: 11.0,
    quality: stars,
  },
  {
    id: 32,
    kind: "Fresh",
    title: "Corn",
    img: img11,
    oldPrice: 15.0,
    newPrice: 11.0,
    quality: stars,
  },
  {
    id: 33,
    kind: "Fresh",
    title: "Eggs",
    img: img13,
    oldPrice: 15.0,
    newPrice: 11.0,
    quality: stars,
  },
];

export { products };