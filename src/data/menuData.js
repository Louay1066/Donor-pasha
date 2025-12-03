// Doner Pasha Menu Data
// Based on actual menu structure

export const menuData = {
    categories: [
        { id: 'doner', name: { ar: 'دونير', en: 'Doner' } },
        { id: 'iraqi', name: { ar: 'عراقي', en: 'Iraqi' } },
        { id: 'saj', name: { ar: 'صاج', en: 'Saj' } },
        { id: 'shawarma', name: { ar: 'شاورما', en: 'Shawarma' } },
        { id: 'jumbo', name: { ar: 'جمبو وميني', en: 'Jumbo & Mini' } },
        { id: 'pizza', name: { ar: 'بيتزا', en: 'Pizza' } },
        { id: 'meals', name: { ar: 'وجبات', en: 'Meals' } },
        { id: 'dips', name: { ar: 'تغميسات', en: 'Dips' } },
        { id: 'falafel', name: { ar: 'فلافل', en: 'Falafel' } },
        { id: 'drinks', name: { ar: 'عصائر ومشروبات', en: 'Drinks' } },
        { id: 'appetizers', name: { ar: 'مقبلات', en: 'Appetizers' } },
    ],

    products: [
        // DONER CATEGORY
        {
            id: 1,
            name: { ar: 'دونر دجاج', en: 'Chicken Doner Wrap' },
            description: { ar: 'طلبة كلاسيكية، خبز صاج، 54 مل صلصة', en: 'Classic Fluffy Shawarma Wrap, month khamii, 54 ml Sauce' },
            category: 'doner',
            price: 25,
            calories: 350,
            image: 'doner-chicken.jpg'
        },
        {
            id: 2,
            name: { ar: 'دونر لحم', en: 'Beef Doner Wrap' },
            description: { ar: 'طلبة كلاسيكية، خبز صاج، 54 مل صلصة', en: 'Classic Fluffy Shawarma Wrap, month khamii, 54 ml Sauce' },
            category: 'doner',
            price: 30,
            calories: 400,
            image: 'doner-beef.jpg'
        },
        {
            id: 3,
            name: { ar: 'دونر مكسيكي', en: 'Mexican Doner' },
            description: { ar: 'نكهة مكسيكية حارة مع صاج طازج', en: 'Spicy Mexican flavor with fresh saj' },
            category: 'doner',
            price: 28,
            calories: 380,
            image: 'doner-mexican.jpg'
        },
        {
            id: 4,
            name: { ar: 'دونر مكس', en: 'Mix Doner' },
            description: { ar: 'مزيج من الدجاج واللحم', en: 'Mix of chicken and beef' },
            category: 'doner',
            price: 32,
            calories: 420,
            image: 'doner-mix.jpg'
        },

        // IRAQI CATEGORY
        {
            id: 5,
            name: { ar: 'عراقي دجاج', en: 'Iraqi Chicken' },
            description: { ar: 'على الطريقة العراقية الأصيلة', en: 'Authentic Iraqi style' },
            category: 'iraqi',
            price: 26,
            calories: 360,
            image: 'iraqi-chicken.jpg'
        },
        {
            id: 6,
            name: { ar: 'عراقي لحم', en: 'Iraqi Beef' },
            description: { ar: 'لحم طازج على الطريقة العراقية', en: 'Fresh beef Iraqi style' },
            category: 'iraqi',
            price: 31,
            calories: 410,
            image: 'iraqi-beef.jpg'
        },
        {
            id: 7,
            name: { ar: 'عراقي مكسيكي', en: 'Iraqi Mexican' },
            description: { ar: 'مزيج فريد من النكهات', en: 'Unique flavor combination' },
            category: 'iraqi',
            price: 29,
            calories: 390,
            image: 'iraqi-mexican.jpg'
        },

        // SAJ CATEGORY
        {
            id: 8,
            name: { ar: 'صاج دجاج', en: 'Saj Chicken Wrap' },
            description: { ar: 'طلبة كلاسيكية، خبز صاج، 34 مل صلصة', en: 'Classic Fluffy Shawarma Wrap, month khamii, 34 ml Sauce' },
            category: 'saj',
            price: 25,
            calories: 340,
            image: 'saj-chicken.jpg'
        },
        {
            id: 9,
            name: { ar: 'صاج لحم', en: 'Saj Beef' },
            description: { ar: 'لحم صاج طازج', en: 'Fresh beef saj' },
            category: 'saj',
            price: 30,
            calories: 390,
            image: 'saj-beef.jpg'
        },
        {
            id: 10,
            name: { ar: 'صاج مكسيكي', en: 'Saj Mexican' },
            description: { ar: 'صاج بنكهة مكسيكية', en: 'Mexican flavored saj' },
            category: 'saj',
            price: 27,
            calories: 370,
            image: 'saj-mexican.jpg'
        },

        // SHAWARMA CATEGORY
        {
            id: 11,
            name: { ar: 'شاورما دجاج', en: 'Chicken Shawarma' },
            description: { ar: 'شاورما دجاج كلاسيكية', en: 'Classic chicken shawarma' },
            category: 'shawarma',
            price: 23,
            calories: 320,
            image: 'shawarma-chicken.jpg'
        },
        {
            id: 12,
            name: { ar: 'شاورما لحم', en: 'Beef Shawarma' },
            description: { ar: 'شاورما لحم طازجة', en: 'Fresh beef shawarma' },
            category: 'shawarma',
            price: 28,
            calories: 370,
            image: 'shawarma-beef.jpg'
        },

        // JUMBO CATEGORY
        {
            id: 13,
            name: { ar: 'جمبو دجاج', en: 'Jumbo Chicken' },
            description: { ar: 'وجبة جمبو بالدجاج', en: 'Jumbo chicken meal' },
            category: 'jumbo',
            price: 35,
            calories: 550,
            image: 'jumbo-chicken.jpg'
        },
        {
            id: 14,
            name: { ar: 'ميني دجاج', en: 'Mini Chicken' },
            description: { ar: 'وجبة صغيرة مثالية', en: 'Perfect small meal' },
            category: 'jumbo',
            price: 20,
            calories: 280,
            image: 'mini-chicken.jpg'
        },

        // PIZZA CATEGORY
        {
            id: 15,
            name: { ar: 'بيتزا دجاج', en: 'Chicken Pizza' },
            description: { ar: 'بيتزا طازجة بالدجاج', en: 'Fresh chicken pizza' },
            category: 'pizza',
            price: 40,
            calories: 600,
            image: 'pizza-chicken.jpg'
        },
        {
            id: 16,
            name: { ar: 'بيتزا لحم', en: 'Beef Pizza' },
            description: { ar: 'بيتزا لذيذة باللحم', en: 'Delicious beef pizza' },
            category: 'pizza',
            price: 45,
            calories: 650,
            image: 'pizza-beef.jpg'
        },
        {
            id: 17,
            name: { ar: 'بيتزا مكس', en: 'Mix Pizza' },
            description: { ar: 'بيتزا متنوعة', en: 'Mixed pizza' },
            category: 'pizza',
            price: 48,
            calories: 680,
            image: 'pizza-mix.jpg'
        },

        // MEALS CATEGORY
        {
            id: 18,
            name: { ar: 'وجبة عائلية', en: 'Family Meal' },
            description: { ar: 'وجبة كاملة للعائلة', en: 'Complete family meal' },
            category: 'meals',
            price: 120,
            calories: 2000,
            image: 'family-meal.jpg'
        },
        {
            id: 19,
            name: { ar: 'وجبة كيلو', en: 'Kilo Meal' },
            description: { ar: 'كيلو كامل من اللحم أو الدجاج', en: 'Full kilo of meat or chicken' },
            category: 'meals',
            price: 95,
            calories: 1500,
            image: 'kilo-meal.jpg'
        },

        // DIPS CATEGORY
        {
            id: 20,
            name: { ar: 'تغميسة الثوم', en: 'Garlic Sauce' },
            description: { ar: 'صلصة ثوم طازجة', en: 'Fresh garlic sauce' },
            category: 'dips',
            price: 5,
            calories: 80,
            image: 'dip-garlic.jpg'
        },
        {
            id: 21,
            name: { ar: 'تغميسة سبايسي', en: 'Spicy Sauce' },
            description: { ar: 'صلصة حارة', en: 'Spicy hot sauce' },
            category: 'dips',
            price: 5,
            calories: 70,
            image: 'dip-spicy.jpg'
        },
        {
            id: 22,
            name: { ar: 'تغميسة الجبن', en: 'Cheese Sauce' },
            description: { ar: 'صلصة جبن كريمية', en: 'Creamy cheese sauce' },
            category: 'dips',
            price: 6,
            calories: 100,
            image: 'dip-cheese.jpg'
        },
        {
            id: 23,
            name: { ar: 'تغميسة أفوكادو', en: 'Avocado Sauce' },
            description: { ar: 'صلصة أفوكادو طازجة', en: 'Fresh avocado sauce' },
            category: 'dips',
            price: 7,
            calories: 90,
            image: 'dip-avocado.jpg'
        },

        // FALAFEL CATEGORY
        {
            id: 24,
            name: { ar: 'فلافل دونر', en: 'Falafel Doner' },
            description: { ar: 'فلافل بأسلوب الدونر', en: 'Falafel doner style' },
            category: 'falafel',
            price: 22,
            calories: 300,
            image: 'falafel-doner.jpg'
        },
        {
            id: 25,
            name: { ar: 'صحن فلافل', en: 'Falafel Plate' },
            description: { ar: 'صحن فلافل كامل', en: 'Complete falafel plate' },
            category: 'falafel',
            price: 25,
            calories: 350,
            image: 'falafel-plate.jpg'
        },

        // DRINKS CATEGORY
        {
            id: 26,
            name: { ar: 'عصير برتقال طازج', en: 'Fresh Orange Juice' },
            description: { ar: 'عصير برتقال طبيعي 100%', en: '100% natural orange juice' },
            category: 'drinks',
            price: 12,
            calories: 120,
            image: 'juice-orange.jpg'
        },
        {
            id: 27,
            name: { ar: 'كوكاكولا', en: 'Coca Cola' },
            description: { ar: 'مشروب غازي', en: 'Soft drink' },
            category: 'drinks',
            price: 5,
            calories: 140,
            image: 'drink-cola.jpg'
        },
        {
            id: 28,
            name: { ar: 'ماء', en: 'Water' },
            description: { ar: 'ماء معدني', en: 'Mineral water' },
            category: 'drinks',
            price: 3,
            calories: 0,
            image: 'drink-water.jpg'
        },

        // APPETIZERS CATEGORY
        {
            id: 29,
            name: { ar: 'حمص', en: 'Hummus' },
            description: { ar: 'حمص طازج مع زيت الزيتون', en: 'Fresh hummus with olive oil' },
            category: 'appetizers',
            price: 15,
            calories: 200,
            image: 'appetizer-hummus.jpg'
        },
        {
            id: 30,
            name: { ar: 'بطاطس مقلية', en: 'French Fries' },
            description: { ar: 'بطاطس ذهبية مقرمشة', en: 'Golden crispy fries' },
            category: 'appetizers',
            price: 10,
            calories: 300,
            image: 'appetizer-fries.jpg'
        },
    ]
};

export default menuData;
