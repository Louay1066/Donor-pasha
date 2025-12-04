import './Order.css';

const Order = ({ language }) => {
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

                    <span
                        className="glf-button btn btn-secondary"
                        data-glf-cuid="8ca97d04-5172-459f-8216-6f926b12fa04"
                        data-glf-ruid="33eec5bf-0b59-4bf7-bfc0-b8a0057288f5"
                        style={{ cursor: 'pointer', display: 'inline-block' }}
                    >
                        {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
                    </span>

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
