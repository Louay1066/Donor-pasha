import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ language, setLanguage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'ar' ? 'en' : 'ar');
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="navbar-brand">
                    <span className="brand-text">Doner Pasha</span>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-links desktop-only">
                    <a href="#" className="nav-link active">{language === 'ar' ? 'الرئيسية' : 'Home'}</a>
                    <a href="#menu" className="nav-link">{language === 'ar' ? 'العروض' : 'Offer'}</a>
                    <a href="#services" className="nav-link">{language === 'ar' ? 'الخدمات' : 'Service'}</a>
                    <a href="#menu" className="nav-link">{language === 'ar' ? 'القائمة' : 'Menu'}</a>
                    <a href="#about" className="nav-link">{language === 'ar' ? 'من نحن' : 'About Us'}</a>
                </div>

                <div className="navbar-actions desktop-only">
                    <button className="btn-text" onClick={toggleLanguage}>
                        {language === 'ar' ? 'English' : 'العربية'}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="#" onClick={() => setIsMobileMenuOpen(false)}>{language === 'ar' ? 'الرئيسية' : 'Home'}</a>
                    <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>{language === 'ar' ? 'القائمة' : 'Menu'}</a>
                    <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>{language === 'ar' ? 'من نحن' : 'About'}</a>
                    <button className="btn btn-primary btn-block" onClick={toggleLanguage}>
                        {language === 'ar' ? 'English' : 'العربية'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
