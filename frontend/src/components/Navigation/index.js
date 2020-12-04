/**
 * Navigation Bar:
 *    - creates links based on linkArr
 *    - logo and company name on opposite end of nav bar
 */

import Links from './Links';
import Logo from './Logo'
import './Navigation.css';
import ticket from './ticket.png';


function Navigation() {
  const linkArr = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const logo = {
    logoImg: { src: ticket, alt: 'movie ticket logo image' },
    logoText: 'MovieSearch'
  }

  return (
    <nav className="Navigation">
      < Logo data={logo}/>
        < Links linkArr={linkArr} />
      </nav>
  );
}

export default Navigation;
