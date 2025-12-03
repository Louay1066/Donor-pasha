import { useState } from 'react';
import MenuItem from './MenuItem';
import menuData from '../data/menuData';
import './MenuShowcase.css';

const MenuShowcase = ({ language }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = selectedCategory === 'all'
        ? menuData.products
        : menuData.products.filter(p => p.category === selectedCategory);

    return (
        <section id="menu" className="section menu-showcase">
            <div className="container">
                <div className="menu-header">
                    <h2 className="section-title-left">
                        {language === 'ar' ? (
                            <>قائمتنا <span>المميزة</span></>
                        ) : (
                            <>Our <span>Signature</span> Menu</>
                        )}
                    </h2>
                    <p className="section-subtitle-left">
                        {language === 'ar'
                            ? 'اكتشف مجموعة متنوعة من الأطباق التركية الأصيلة المحضرة بأجود المكونات'
                            : 'Discover a variety of authentic Turkish dishes prepared with the finest ingredients'
                        }
                    </p>
                </div>

                {/* Menu Grid */}
                <div className="menu-grid">
                    {filteredProducts.slice(0, 6).map(item => (
                        <MenuItem key={item.id} item={item} language={language} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuShowcase;
