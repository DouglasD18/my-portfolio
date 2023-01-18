import { getUrlAndDescription } from '../../github-api/get.github-api';
import { v4 as uuid } from 'uuid';

interface Project {
  id: string;
  title: string;
  url: string;
  description: string;
  image: string;
  category: string;
  tecnologies: string[];
}

const cash = await getUrlAndDescription('cash-fullstack').then((response) => response);
const apiPython = await getUrlAndDescription('api-python').then((response) => response);
const igniteLab = await getUrlAndDescription('ignite-lab').then((response) => response);
const carShop = await getUrlAndDescription('car-shop').then((response) => response);
const fad = await getUrlAndDescription('fighters-and-dragons').then((response) => response);
const blogs = await getUrlAndDescription('blogs-api').then((response) => response);
const planium = await getUrlAndDescription('planium-test').then((response) => response);
const tfc = await getUrlAndDescription('tfc').then((response) => response);
const trivia = await getUrlAndDescription('trivia-project').then((response) => response);
const trybeSmith = await getUrlAndDescription('trybesmith').then((response) => response);
const todo = await getUrlAndDescription('to-do-list').then((response) => response);
const shopping = await getUrlAndDescription('shopping-cart-trybe').then((response) => response);
const dacxi = await getUrlAndDescription('dacxi-frontend-test').then((response) => response);
const instagram = await getUrlAndDescription('initial-instagram-interface').then((response) => response);
const art = await getUrlAndDescription('pixels-art').then((response) => response);
const wallet = await getUrlAndDescription('tryebe-wallet').then((response) => response);
const lucky = await getUrlAndDescription('lucky-strike').then((response) => response);
const bookflix = await getUrlAndDescription('Bookflix-Clone').then((response) => response);

const projects: Project[] = [
  {
    id: uuid(),
    title: "Cash Fullstack",
    url: cash.url,
    description: cash.description,
    image: 'https://github.com/DouglasD18/cash-fullstack/blob/main/cashforce-view.png',
    category: 'fullstack',
    tecnologies: ["Docker", "NodeJs", "Typescript", "VueJs", "Express", "MySQL", "Sequelize", "Mocha", "Sinon", "Chai", "Cors", "Ts-node"]
  }, {
    id: uuid(),
    title: "Python API",
    url: apiPython.url,
    description: apiPython.description,
    image: 'https://github.com/DouglasD18/api-python/blob/main/demonstration/response.png',
    category: 'backend',
    tecnologies: ["Python", "Uvicorn", "FastAPI"]
  }, {
    id: uuid(),
    title: "To Do List",
    url: todo.url,
    description: todo.description,
    image: '',
    category: 'frontend',
    tecnologies: ["Javascript", "Bootstrap", "CSS", "HTML"]
  }, {
    id: uuid(),
    title: "Car Shop",
    url: carShop.url,
    description: carShop.description,
    image: '',
    category: 'back',
    tecnologies: ["Docker", "NodeJs", "Typescript", "Zod", "Express", "MongoDB", "Mongoose", "Mocha", "Sinon", "Chai", "Dotenv", "Ts-node"]
  },
]
