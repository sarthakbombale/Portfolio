import dayjs from 'dayjs';
import { navLinks, navIcons, type NavIcon } from '../constants/index.ts';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="Apple logo" />
                <p className='font-bold'>Sarthak's Portfolio</p>
                <ul>
                    {navLinks.map(({ id, name }) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map(({ id, img }: NavIcon) => (
                        <li key={id}>
                            <img
                                src={img}
                                alt={`icon-${id}`}
                                className='icon-hover w-5 h-5'
                            />
                        </li>
                    ))}
                </ul>
                <time>
                    <time className="text-sm font-medium">
                        {dayjs().format("ddd MMM D h:mm A")}
                    </time>
                </time>
            </div>
        </nav>
    );
};

export default Navbar;