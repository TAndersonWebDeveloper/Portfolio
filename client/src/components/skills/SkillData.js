import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiStyledcomponents,
  SiExpress,
  SiRedux,
  SiFigma,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
// import { TbApi } from "react-icons/ti";
import { DiVisualstudio } from "react-icons/di";
export const frontend = [
  {
    img: <FaHtml5 />,
    title: "HTML5",
    color: "#e34f26",
  },
  {
    img: <FaCss3Alt />,
    title: "CSS3",
    color: "#264de4",
  },
  {
    img: <SiJavascript />,
    title: "JavaScript",
    color: "#f0db4f",
  },
  {
    img: <FaReact />,
    title: "React",
    color: "#61dbfb",
  },
  {
    img: <SiRedux />,
    title: "Redux",
    color: "#764abc",
  },
  {
    img: <FaBootstrap />,
    title: "Bootstrap",
    color: "#563d7c",
  },
  {
    img: <SiStyledcomponents />,
    title: "Styled Components",
    color: "#db7093",
  },
];

export const backend = [
  {
    img: <FaNodeJs />,
    title: "Node.js",
    color: "#339933",
  },
  {
    img: <SiMongodb />,
    title: "MongoDB",
    color: "#47a248",
  },
  {
    img: <SiMysql />,
    title: "MySQL",
    color: "#00758f",
  },
  {
    img: <SiExpress />,
    title: "Express",
    color: "#000000",
  },
  //   {
  //     img: TbApi,
  //     title: "APIs",
  //   },
];

export const tools = [
  {
    img: <BsGit />,
    title: "Git",
    color: "#f14e32",
  },
  {
    img: <DiVisualstudio />,
    title: "VS Code",
    color: "#007acc",
  },
  {
    img: <SiFigma />,
    title: "Figma",
    color: "#f24e1e",
  },
];
