import Students from './../pages/Students'
export const studentRoutes=[
    {
        path:"students",
        loader: async() =>{
            return fetch('https://dummyjson.com/users');
          },
        element:<Students />,
      },
];