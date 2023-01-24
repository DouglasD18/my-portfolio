import { GitHubApi } from '../../github-api/get.github-api';
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

const cash = await GitHubApi.get('cash-fullstack').then((response) => response);
const apiPython = await GitHubApi.get('api-python').then((response) => response);
const dacxi = await GitHubApi.get('dacxi-frontend-test').then((response) => response);
const carShop = await GitHubApi.get('car-shop').then((response) => response);
const igniteLab = await GitHubApi.get('ignite-lab').then((response) => response);
const fad = await GitHubApi.get('fighters-and-dragons').then((response) => response);
const blogs = await GitHubApi.get('blogs-api').then((response) => response);
const planium = await GitHubApi.get('planium-test').then((response) => response);
const tfc = await GitHubApi.get('tfc').then((response) => response);
const trivia = await GitHubApi.get('trivia-project').then((response) => response);
const trybeSmith = await GitHubApi.get('trybesmith').then((response) => response);
const todo = await GitHubApi.get('to-do-list').then((response) => response);
const shopping = await GitHubApi.get('shopping-cart-trybe').then((response) => response);
const instagram = await GitHubApi.get('initial-instagram-interface').then((response) => response);
const art = await GitHubApi.get('pixels-art').then((response) => response);
const wallet = await GitHubApi.get('tryebe-wallet').then((response) => response);
const lucky = await GitHubApi.get('lucky-strike').then((response) => response);
const bookflix = await GitHubApi.get('Bookflix-Clone').then((response) => response);

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
    title: "Vue Aplication",
    url: dacxi.url,
    description: dacxi.description,
    image: 'https://github.com/DouglasD18/dacxi-frontend-test/blob/main/interface.png',
    category: 'frontend',
    tecnologies: ["Javascript", "CSS", "HTML", "Vue", "TailwindCSS", "Vite"]
  }, {
    id: uuid(),
    title: "Car Shop",
    url: carShop.url,
    description: carShop.description,
    image: 'https://github.com/DouglasD18/car-shop/blob/main/docs.png',
    category: 'back',
    tecnologies: ["Docker", "NodeJs", "Typescript", "Zod", "Express", "MongoDB", "Mongoose", "Mocha", "Sinon", "Chai", "Dotenv", "Ts-node"]
  },
]
