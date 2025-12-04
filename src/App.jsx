import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuShowcase from './components/MenuShowcase';
import About from './components/About';
import Order from './components/Order';
import Footer from './components/Footer';
import './index.css';

function App() {
    const [language, setLanguage] = useState('ar');

    useEffect(() => {
        // Load GloriaFood script dynamically
        const script = document.createElement('script');
        script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    // Update document direction when language changes
    const updateDirection = (lang) => {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.body.style.fontFamily = lang === 'ar' ? "var(--font-arabic)" : "var(--font-english)";
        setLanguage(lang);
    };

    return (
        <div className="app fade-in">
            <Navbar language={language} setLanguage={updateDirection} />
            <Hero language={language} />
            <MenuShowcase language={language} />
            <About language={language} />
            <Order language={language} />
            <Footer language={language} />
        </div>
    );
}

export default App;
