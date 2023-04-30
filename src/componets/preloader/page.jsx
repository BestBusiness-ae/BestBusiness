import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function PagePreloader() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector('.preloader').style = 'display: block';
    setTimeout(() => {
      document.querySelector('.preloader').style = 'display: none';
    }, 900);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      document.querySelector('.preloader').style = 'display: block';
    };
  }, []);

  return null;
}

export default PagePreloader;