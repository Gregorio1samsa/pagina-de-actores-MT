import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="bg-primary text-primary-content p-2">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/" className="hover:underline">Principal</Link></li>
        <li><Link to="/peliculas" className="hover:underline">Películas</Link></li>
      </ul>
    </nav>
  );
}