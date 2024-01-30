import { Link, useLocation } from 'react-router-dom';
import Searchbar from './Searchbar';

const Header=()=> {
  const { pathname } = useLocation();
  return (
    <div id="header-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <header id="header">
              <h1><a href="/" id="logo">Poetry</a></h1>
              <nav id="nav">
                <Link to="/" className={pathname === '/' ? 'current-page-item' : ''}>Home</Link>
                <Link to="/portr" className={pathname === '/portr' ? 'current-page-item' : ''}>Post Right</Link>
                <Link to="/postl" className={pathname === '/postl' ? 'current-page-item' : ''}>Post Left</Link>
                <Link to="/freepost" className={pathname === '/freepost' ? 'current-page-item' : ''}>Free Post</Link>
                <Link to="/archive" className={pathname === '/archive' ? 'current-page-item' : ''}>Archive</Link>
              </nav>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;