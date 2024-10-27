// Importing images from the assets folder
import Shiro from './Shiro.jpg'; // Make sure the image is in the assets folder
import shiro1 from './shiro1.jpg'; // Make sure the image is in the assets folder
import shiro2 from './shiro2.jpg'; // Make sure the image is in the assets folder
import shiro3 from './shiro3.jpg'; // Make sure the image is in the assets folder
import Gomen from './Gomen.jpg';
import gomen1 from './gomen1.jpg';
import gomen2 from './gomen2.jpg';
import gomen3 from './gomen3.jpg';
import tibsImage from './tibs.jpg';
import tibsImage1 from './tibs1.jpg';
import tibsImage2 from './tibs2.jpg';
import tibsImage3 from './tibs3.jpg';
import firfirImage from './firfir.jpg';
import firfirImage1 from './firfir1.jpg';
import firfirImage2 from './firfir2.jpg';
import firfirImage3 from './firfir3.jpg';
import tereImage from './tere.jpg';
import tereImage1 from './tere1.jpg';
import tereImage2 from './tere2.jpg';
import tereImage3 from './tere3.jpg';
import doroWotImage from './dorowet.jpg';
import doroWotImage1 from './dorowet1.jpg';
import doroWotImage2 from './dorowet2.jpg';
import doroWotImage3 from './dorowet3.jpg';

const menuData = [
  {
    id: 1,
    title: "Gomen",
    price: "50.00",
    category: "Gomen",
    description: "Enjoy a delightful serving of Gomen, a traditional Ethiopian dish made with tender collard greens sautéed in a blend of spices. Perfectly paired with injera or rice, this healthy option brings a taste of home right to your doorstep.",
    image: Gomen,
  },
  {
    id: 2,
    title: "Shiro ",
    price: "30.00",
    category: "Shiro",
    description: "Enjoy a bowl of Shiro, a flavorful Ethiopian stew made from ground chickpeas or lentils and seasoned with a blend of spices. This vegetarian delight is rich in flavor and pairs wonderfully with injera or rice, offering a wholesome meal delivered right to your table.",
    image: Shiro,
  },
  {
    id: 3,
    title: "Tibs",
    price: "70.00",
    category: "Tibs",
    description: " Indulge in sizzling Tibs, a popular Ethiopian dish featuring marinated meat sautéed with onions, peppers, and spices. This savory delight is perfect for sharing and comes with injera or rice, making it an excellent choice for a flavorful meal at home.",
    image: tibsImage,
  },
  {
    id: 4,
    title: "Firfir",
    price: "40.00",
    category: "Firfir",
    description: "Treat yourself to Firfir, a delicious dish made from shredded injera sautéed with spices and sometimes mixed with leftover Doro Wat or Tibs. It’s a comforting and satisfying option that captures the essence of Ethiopian cuisine, delivered straight to your door.",
    image: firfirImage,
  },
  {
    id: 5,
    title: "Tere",
    price: "90.00",
    category: "Tere",
    description: "Experience the unique taste of Tere, a traditional Ethiopian dish featuring finely minced raw beef seasoned with spices and served with a side of spicy sauce. Often enjoyed as a delicacy, it’s a bold choice for adventurous eaters looking for an authentic culinary experience, delivered fresh to your doorstep.",
    image: tereImage,
  },
  {
    id: 6,
    title: "Doro Wot",
    price: "60.00",
    category: "Doro Wot",
    description: "Experience the rich and aromatic flavors of Dorowet, a slow-cooked chicken stew infused with berbere spice and served with hard-boiled eggs. Delivered hot and ready to enjoy, it’s a hearty meal that warms both the body and soul.Experience the rich and aromatic flavors of Dorowet, a slow-cooked chicken stew infused with berbere spice and served with hard-boiled eggs. Delivered hot and ready to enjoy, it’s a hearty meal that warms both the body and soul.",
    image: doroWotImage,
  },
  {
    id: 7,
    title: " Special Tere",
    price: "120.00",
    category: "Tere",
    description: "Experience the unique taste of Tere, a traditional Ethiopian dish featuring finely minced raw beef seasoned with spices and served with a side of spicy sauce. Often enjoyed as a delicacy, it’s a bold choice for adventurous eaters looking for an authentic culinary experience, delivered fresh to your doorstep.",
    image: tereImage1,
  },
  {
    id: 8,
    title: " Special Shiro ",
    price: "100.00",
    category: "Shiro",
    description: "Enjoy a bowl of Shiro, a flavorful Ethiopian stew made from ground chickpeas or lentils and seasoned with a blend of spices. This vegetarian delight is rich in flavor and pairs wonderfully with injera or rice, offering a wholesome meal delivered right to your table.",
    image: shiro1,
  },{
    id: 9,
    title: "Tegabino ",
    price: "70.00",
    category: "Shiro",
    description: "Enjoy a bowl of Shiro, a flavorful Ethiopian stew made from ground chickpeas or lentils and seasoned with a blend of spices. This vegetarian delight is rich in flavor and pairs wonderfully with injera or rice, offering a wholesome meal delivered right to your table.",
    image: shiro2,
  },{
    id: 10,
    title: "Fikir Shiro ",
    price: "70.00",
    category: "Shiro",
    description: "Enjoy a bowl of Shiro, a flavorful Ethiopian stew made from ground chickpeas or lentils and seasoned with a blend of spices. This vegetarian delight is rich in flavor and pairs wonderfully with injera or rice, offering a wholesome meal delivered right to your table.",
    image: shiro3,
  },
  {
    id: 11,
    title: "Special Gomen",
    price: "140.00",
    category: "Gomen",
    description: "Enjoy a delightful serving of Gomen, a traditional Ethiopian dish made with tender collard greens sautéed in a blend of spices. Perfectly paired with injera or rice, this healthy option brings a taste of home right to your doorstep.",
    image: gomen1,
  },{
    id: 12,
    title: "Gomen Besiga ",
    price: "120.00",
    category: "Gomen",
    description: "Enjoy a delightful serving of Gomen, a traditional Ethiopian dish made with tender collard greens sautéed in a blend of spices. Perfectly paired with injera or rice, this healthy option brings a taste of home right to your doorstep.",
    image: gomen2,
  },{
    id: 13,
    title: "Gomen Beatikelt",
    price: "110.00",
    category: "Gomen",
    description: "Enjoy a delightful serving of Gomen, a traditional Ethiopian dish made with tender collard greens sautéed in a blend of spices. Perfectly paired with injera or rice, this healthy option brings a taste of home right to your doorstep.",
    image: gomen3,
  },
  {
    id: 14,
    title: " Special Tibs",
    price: "120.00",
    category: "Tibs",
    description: " Indulge in sizzling Tibs, a popular Ethiopian dish featuring marinated meat sautéed with onions, peppers, and spices. This savory delight is perfect for sharing and comes with injera or rice, making it an excellent choice for a flavorful meal at home.",
    image: tibsImage1,
  },  {
    id: 15,
    title: "Bani Tibs",
    price: "200.00",
    category: "Tibs",
    description: " Indulge in sizzling Tibs, a popular Ethiopian dish featuring marinated meat sautéed with onions, peppers, and spices. This savory delight is perfect for sharing and comes with injera or rice, making it an excellent choice for a flavorful meal at home.",
    image: tibsImage2,
  },  {
    id: 16,
    title: "Gaslight Tibs",
    price: "130.00",
    category: "Tibs",
    description: " Indulge in sizzling Tibs, a popular Ethiopian dish featuring marinated meat sautéed with onions, peppers, and spices. This savory delight is perfect for sharing and comes with injera or rice, making it an excellent choice for a flavorful meal at home.",
    image: tibsImage3,
  }, {
    id: 17,
    title: "Special Firfir",
    price: "150.00",
    category: "Firfir",
    description: "Treat yourself to Firfir, a delicious dish made from shredded injera sautéed with spices and sometimes mixed with leftover Doro Wat or Tibs. It’s a comforting and satisfying option that captures the essence of Ethiopian cuisine, delivered straight to your door.",
    image: firfirImage1,
  }, {
    id: 18,
    title: "Firfir Besiga",
    price: "170.00",
    category: "Firfir",
    description: "Treat yourself to Firfir, a delicious dish made from shredded injera sautéed with spices and sometimes mixed with leftover Doro Wat or Tibs. It’s a comforting and satisfying option that captures the essence of Ethiopian cuisine, delivered straight to your door.",
    image: firfirImage2,
  }, {
    id: 19,
    title: "Firfir Be Pasta",
    price: "190.00",
    category: "Firfir",
    description: "Treat yourself to Firfir, a delicious dish made from shredded injera sautéed with spices and sometimes mixed with leftover Doro Wat or Tibs. It’s a comforting and satisfying option that captures the essence of Ethiopian cuisine, delivered straight to your door.",
    image: firfirImage3,
  },
  {
    id: 20,
    title: "Bani Tere",
    price: "130.00",
    category: "Tere",
    description: "Experience the unique taste of Tere, a traditional Ethiopian dish featuring finely minced raw beef seasoned with spices and served with a side of spicy sauce. Often enjoyed as a delicacy, it’s a bold choice for adventurous eaters looking for an authentic culinary experience, delivered fresh to your doorstep.",
    image: tereImage2,
  },{
    id: 21,
    title: "Tere Beayibe",
    price: "150.00",
    category: "Tere",
    description: "Experience the unique taste of Tere, a traditional Ethiopian dish featuring finely minced raw beef seasoned with spices and served with a side of spicy sauce. Often enjoyed as a delicacy, it’s a bold choice for adventurous eaters looking for an authentic culinary experience, delivered fresh to your doorstep.",
    image: tereImage3,
  },
  {
    id: 23,
    title: " Special Doro Wot",
    price: "60.00",
    category: "Doro Wot",
    description: "Doro Wat is one of the most famous of all African dishes.  You will find it in every Ethiopian restaurant and virtually anyone who is familiar with African cuisine will have heard of it.  Another version, though not as commonly known here, is Sega Wat, made with beef (fyi, you’ll find recipes online calling it Sik Sik ",
    image: doroWotImage1,
  },
  {
    id: 24,
    title: "Vaniya Doro Wot",
    price: "230.00",
    category: "Doro Wot",
    description: "Doro Wat is one of the most famous of all African dishes.  You will find it in every Ethiopian restaurant and virtually anyone who is familiar with African cuisine will have heard of it.  Another version, though not as commonly known here, is Sega Wat, made with beef (fyi, you’ll find recipes online calling it Sik Sik ",
    image: doroWotImage2,
  },
  {
    id: 25,
    title: "Derek Doro Wot",
    price: "170.00",
    category: "Doro Wot",
    description: "Doro Wat is one of the most famous of all African dishes.  You will find it in every Ethiopian restaurant and virtually anyone who is familiar with African cuisine will have heard of it.  Another version, though not as commonly known here, is Sega Wat, made with beef (fyi, you’ll find recipes online calling it Sik Sik ",
    image: doroWotImage3,
  },
];

export default menuData;
