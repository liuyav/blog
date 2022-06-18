import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/layout';
import Home from '@/views/home';
import About from '@/views/about';
import Life from '@/views/life';
import Article from '@/views/article';
import Contact from '@/views/contact';
import ArticleDetail from '@/views/article/detail';
import NotFound from '@/views/404';

const routes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="life" element={<Life />}></Route>
        <Route path="article" element={<Article />}></Route>
        <Route path="article/detail/:id" element={<ArticleDetail />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

export default routes;
