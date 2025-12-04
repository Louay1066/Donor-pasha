import './Hero.css';

const Hero = ({ language }) => {
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
                    <span
                        className="glf-button btn-reservation "
                        data-glf-cuid="8ca97d04-5172-459f-8216-6f926b12fa04"
                        data-glf-ruid="33eec5bf-0b59-4bf7-bfc0-b8a0057288f5"
                    >
                        {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                    </span>
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
