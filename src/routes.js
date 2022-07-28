import Body from './components/contents/Body';
import Users from './components/contents/user/Users';
import Posts from './components/contents/posts/Posts';
import Categories from './components/contents/categories/Categories';
import Login from './components/Login/Login';
// import Profile from './components/Contents/Profile';
// import Roles from './components/Contents/Roles';
// import Maps from './components/Contents/Maps';

const routes = {
  outside:[{
    path: '/Login',
    component: <Login />,
  }], 
  inside:[{
    path: '/',
    component: <Body />,
  },  {
    path: '/users',
    component: <Users />
  }, {
    path: '/posts',
    component: <Posts />
  }, {
    path: '/categories',
    component: <Categories />
  }, 
//   {
//     path: '/profile',
//     component: <Profile />
//   }, {
//     path: '/roles',
//     component: <Roles />
//   }, {
//     path: '/maps',
//     component: <Maps />
//   },
]};
  
export default routes;