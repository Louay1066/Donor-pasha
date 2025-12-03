import './MenuItem.css';

const MenuItem = ({ item, language }) => {
    // Use category-based Unsplash images
    const getImageUrl = () => {
        const categoryImages = {
            'doner': 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=400&q=80&fit=crop',
            'iraqi': 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&h=400&q=80&fit=crop',
            'saj': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&q=80&fit=crop',
            'shawarma': 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a6?w=600&h=400&q=80&fit=crop',
            'jumbo': 'https://images.unsplash.com/photo-1562059390-a761a084768e?w=600&h=400&q=80&fit=crop',
            'pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&q=80&fit=crop',
            'meals': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&q=80&fit=crop',
            'dips': 'https://images.unsplash.com/photo-1623427629227-a78b31f64e6f?w=600&h=400&q=80&fit=crop',
            'falafel': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&q=80&fit=crop',
            'drinks': 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&q=80&fit=crop',
            'appetizers': 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=600&h=400&q=80&fit=crop'
        };
        return categoryImages[item.category] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&q=80&fit=crop';
    };

    const getCategoryName = () => {
        const categoryNames = {
            'ar': {
                'doner': 'دونر',
                'iraqi': 'عراقي',
                'saj': 'صاج',
                'shawarma': 'شاورما',
                'jumbo': 'جامبو',
                'pizza': 'بيتزا',
                'meals': 'وجبات',
                'dips': 'صلصات',
                'falafel': 'فلافل',
                'drinks': 'مشروبات',
                'appetizers': 'مقبلات'
            },
            'en': {
                'doner': 'Doner',
                'iraqi': 'Iraqi',
                'saj': 'Saj',
                'shawarma': 'Shawarma',
                'jumbo': 'Jumbo',
                'pizza': 'Pizza',
                'meals': 'Meals',
                'dips': 'Dips',
                'falafel': 'Falafel',
                'drinks': 'Drinks',
                'appetizers': 'Appetizers'
            }
        };
        return categoryNames[language][item.category] || item.category;
    };

    return (
        <div className="menu-item">
            <div className="menu-item-image">
                <img
                    src={getImageUrl()}
                    alt={item.name[language]}
                    loading="lazy"
                />
                {item.category === 'dips' || item.category === 'drinks' ? (
                    <div className="item-badge">
                        <span className="badge-new">
                            {language === 'ar' ? 'جديد' : 'New'}
                        </span>
                    </div>
                ) : null}
            </div>

            <div className="menu-item-content">
                <span className="item-category">{getCategoryName()}</span>

                <h3 className="card-title">{item.name[language]}</h3>

                <div className="price-wrapper">
                    <span className="item-price">
                        {language === 'ar' ? `${item.price} ر.س` : `${item.price} SAR`}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
