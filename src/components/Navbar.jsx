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

    // Close menu when clicking outside
    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-content">
                    <div className="navbar-brand">
                        <img src="/images/logo.png" alt="Doner Pasha" className="navbar-logo" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-links desktop-only">
                        <a href="#" className="nav-link active">{language === 'ar' ? 'الرئيسية' : 'Home'}</a>
                        <a href="#menu" className="nav-link">{language === 'ar' ? 'القائمة' : 'Menu'}</a>
                        <a href="#about" className="nav-link">{language === 'ar' ? 'من نحن' : 'About Us'}</a>
                        <a href="#contact" className="nav-link">{language === 'ar' ? 'اتصل بنا' : 'Contact'}</a>
                    </div>

                    <div className="navbar-actions desktop-only">
                        <span
                            className="glf-button btn-reservation"
                            data-glf-cuid="8ca97d04-5172-459f-8216-6f926b12fa04"
                            data-glf-ruid="33eec5bf-0b59-4bf7-bfc0-b8a0057288f5"
                            style={{ display: 'block', width: '100%', margin: '0 auto', borderRadius: '10px' }}
                        >
                            {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                        </span>

                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`mobile-toggle ${isMobileMenuOpen ? 'menu-open' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    </button>

                    {/* Mobile Menu */}
                    <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                        <a href="#" onClick={closeMenu}>{language === 'ar' ? 'الرئيسية' : 'Home'}</a>
                        <a href="#menu" onClick={closeMenu}>{language === 'ar' ? 'القائمة' : 'Menu'}</a>
                        <a href="#about" onClick={closeMenu}>{language === 'ar' ? 'من نحن' : 'About'}</a>
                        <a href="#contact" onClick={closeMenu}>{language === 'ar' ? 'اتصل بنا' : 'Contact'}</a>

                        <span
                            className="glf-button btn-reservation"
                            data-glf-cuid="8ca97d04-5172-459f-8216-6f926b12fa04"
                            data-glf-ruid="33eec5bf-0b59-4bf7-bfc0-b8a0057288f5"
                            style={{ display: 'block', width: 'fit-content', margin: '0 auto', marginTop: '50px', borderRadius: '10px' }}
                            onClick={closeMenu}
                        >
                            {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                        </span>
                    </div>
                </div>
            </nav>

            {/* Overlay to close menu */}
            {isMobileMenuOpen && (
                <div className="mobile-overlay open" onClick={closeMenu}></div>
            )}
        </>
    );
};

export default Navbar;
