import { useState, useRef } from 'react';
import MenuItem from './MenuItem';
import menuData from '../data/menuData';
import './MenuShowcase.css';

const MenuShowcase = ({ language }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const scrollRef = useRef(null);

    const filteredProducts = selectedCategory === 'all'
        ? menuData.products
        : menuData.products.filter(p => p.category === selectedCategory);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 200;
            if (direction === 'left') {
                current.scrollLeft -= scrollAmount;
            } else {
                current.scrollLeft += scrollAmount;
            }
        }
    };

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

                {/* Category Filter */}
                <div className="category-tabs-wrapper">
                    <button
                        className="scroll-btn left"
                        onClick={() => scroll('right')}
                        aria-label="Scroll Left"
                    >
                        &#10094;
                    </button>

                    <div className="category-tabs" ref={scrollRef}>
                        <button
                            className={`category-tab ${selectedCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('all')}
                        >
                            {language === 'ar' ? 'الكل' : 'All'}
                        </button>
                        {menuData.categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`category-tab ${selectedCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                {cat.name[language]}
                            </button>
                        ))}
                    </div>

                    <button
                        className="scroll-btn right"
                        onClick={() => scroll('left')}
                        aria-label="Scroll Right"
                    >
                        &#10095;
                    </button>
                </div>

                {/* Menu Grid */}
                <div className="menu-grid">
                    {filteredProducts.map(item => (
                        <MenuItem key={item.id} item={item} language={language} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuShowcase;
