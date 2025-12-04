import './About.css';

const About = ({ language }) => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-container">
                    {/* Image Side */}
                    <div className="about-image-wrapper">
                        <video
                            src="/vid2.mp4"
                            className="about-image"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        <div className="about-badge">
                            <span className="badge-year">1998</span>
                            <span>{language === 'ar' ? 'منذ' : 'Since'}</span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="about-content fade-in-right">
                        <span className="about-subtitle">
                            {language === 'ar' ? 'قصتنا' : 'Our Story'}
                        </span>
                        <h2 className="about-title">
                            {language === 'ar' ? 'نقدم لكم أشهى المأكولات التركية' : 'Serving the Finest Turkish Cuisine'}
                        </h2>
                        <p className="about-text">
                            {language === 'ar'
                                ? 'في دونر باشا، نحن نفخر بتقديم تجربة طعام أصيلة تجمع بين التقاليد التركية العريقة واللمسات العصرية. نستخدم فقط أجود المكونات الطازجة واللحوم المختارة بعناية لنقدم لكم أطباقاً لا تُنسى.'
                                : 'At Doner Pasha, we take pride in offering an authentic dining experience that combines rich Turkish traditions with modern touches. We use only the finest fresh ingredients and carefully selected meats to serve you unforgettable dishes.'
                            }
                        </p>
                        <p className="about-text">
                            {language === 'ar'
                                ? 'شغفنا هو تقديم المذاق الحقيقي للدونر والكباب التركي، محضرين بأيدي أمهر الطهاة المتخصصين.'
                                : 'Our passion is delivering the true taste of Turkish Doner and Kebabs, prepared by our skilled specialist chefs.'
                            }
                        </p>

                        <div className="features-list">
                            <div className="feature-item">
                                <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="feature-text">{language === 'ar' ? 'مكونات طازجة' : 'Fresh Ingredients'}</span>
                            </div>
                            <div className="feature-item">
                                <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="feature-text">{language === 'ar' ? 'طهاة محترفون' : 'Expert Chefs'}</span>
                            </div>
                            <div className="feature-item">
                                <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="feature-text">{language === 'ar' ? 'وصفات تقليدية' : 'Traditional Recipes'}</span>
                            </div>
                            <div className="feature-item">
                                <svg className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="feature-text">{language === 'ar' ? 'أجواء فاخرة' : 'Luxury Ambience'}</span>
                            </div>
                        </div>

                        <button className="btn btn-primary">
                            {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
