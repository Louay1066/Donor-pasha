import './Order.css';

const Order = ({ language }) => {
    const handleOrderClick = () => {
        window.open('https://www.gloriafood.com/', '_blank');
    };

    return (
        <section id="order" className="order-section">
            <div className="container">
                <div className="order-content">
                    <div className="ornamental-frame"></div>

                    <h2 className="order-title">
                        {language === 'ar' ? (
                            <>جاهز لتقديم <span>طلبك</span>؟</>
                        ) : (
                            <>Ready to Place Your <span>Order</span>?</>
                        )}
                    </h2>

                    <p className="order-subtitle">
                        {language === 'ar'
                            ? 'اطلب الآن واستمتع بأشهى الأطباق التركية الأصيلة في منزلك'
                            : 'Order now and enjoy authentic Turkish cuisine delivered to your door'
                        }
                    </p>

                    <div className="order-features">
                        <div className="order-feature">
                            <div className="feature-icon-large">🚀</div>
                            <span>{language === 'ar' ? 'توصيل سريع' : 'Fast Delivery'}</span>
                        </div>
                        <div className="order-feature">
                            <div className="feature-icon-large">🌟</div>
                            <span>{language === 'ar' ? 'طعام طازج' : 'Fresh Food'}</span>
                        </div>
                        <div className="order-feature">
                            <div className="feature-icon-large">🔒</div>
                            <span>{language === 'ar' ? 'دفع آمن' : 'Secure Payment'}</span>
                        </div>
                    </div>

                    <button className="order-btn" onClick={handleOrderClick}>
                        {language === 'ar' ? 'اطلب الآن عبر GloriaFood' : 'Order Now via GloriaFood'}
                    </button>

                    <p className="order-note">
                        {language === 'ar'
                            ? 'أو اتصل بنا على: +966 xxx xxx xxx'
                            : 'Or call us at: +966 xxx xxx xxx'
                        }
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Order;
