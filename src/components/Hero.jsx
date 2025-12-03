import './Hero.css';

const Hero = ({ language }) => {
    const handleOrderClick = () => {
        window.open('https://www.gloriafood.com/', '_blank');
    };

    const handleMenuClick = () => {
        const menuSection = document.getElementById('menu');
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-ornament"></div>

                <p className="hero-subtitle-top">
                    {language === 'ar' ? 'مطعم فاخر' : 'Authentic Turkish Cuisine'}
                </p>

                <h1 className="hero-title">
                    {language === 'ar' ? (
                        <>
                            مرحباً بكم في<br />
                            <span>دونر باشا</span>
                        </>
                    ) : (
                        <>
                            Welcome to<br />
                            <span>Doner Pasha</span>
                        </>
                    )}
                </h1>

                <p className="hero-subtitle">
                    {language === 'ar'
                        ? 'تجربة طعام تركية أصيلة مع أجود المكونات الطازجة وأفضل الوصفات التقليدية'
                        : 'Experience authentic Turkish flavors crafted with the finest ingredients and traditional recipes'
                    }
                </p>

                <div className="hero-buttons">
                    <button className="btn-hero-primary" onClick={handleOrderClick}>
                        {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                    </button>
                    <button className="btn-hero-secondary" onClick={handleMenuClick}>
                        {language === 'ar' ? 'تصفح القائمة' : 'View Menu'}
                    </button>
                </div>
            </div>

            <div className="scroll-indicator">
                {language === 'ar' ? 'اسحب للأسفل' : 'Scroll'}
            </div>
        </section>
    );
};

export default Hero;
