import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuShowcase from './components/MenuShowcase';
import Order from './components/Order';
import Footer from './components/Footer';
import './index.css';

function App() {
    const [language, setLanguage] = useState('ar');

    // Update document direction when language changes
    const updateDirection = (lang) => {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.body.style.fontFamily = lang === 'ar' ? "var(--font-arabic)" : "var(--font-english)";
        setLanguage(lang);
    };

    return (
        <div className="app">
            <Navbar language={language} setLanguage={updateDirection} />
            <Hero language={language} />
            <MenuShowcase language={language} />
            <Order language={language} />
            <Footer language={language} />
        </div>
    );
}

export default App;
