import About from "./../modules/About/pages/About";
import HomePage from "./../modules/HomePage/pages/HomePage";
import News from "./../modules/News/pages/News";
import App from "./../App";
import { courseRoutes } from "../modules/courses/routes/CourseRoutes";
import { teacherRoutes } from "../modules/Teachers/routes/TeacherRoutes";
import { studentRoutes } from "../modules/students/routes/StudentRoutes"; 
export const routes=[
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/HomePage",
        element:<HomePage/>
      },
      {
        path:"/News",
        element:<News/>
      },
     ...courseRoutes,
     ...teacherRoutes,
     ...studentRoutes,
    ],
  },
];