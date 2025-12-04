// Doner Pasha Menu Data
// Based on actual menu structure

export const menuData = {
    categories: [
        { id: 'doner', name: { ar: 'دونير', en: 'Doner' }, icon: 'doner' },
        { id: 'iraqi', name: { ar: 'عراقي', en: 'Iraqi' }, icon: 'iraqi' },
        { id: 'saj', name: { ar: 'صاج', en: 'Saj' }, icon: 'saj' },
        { id: 'shawarma', name: { ar: 'الشاورما', en: 'Shawarma' }, icon: 'shawarma' },
        { id: 'jumbo', name: { ar: 'جمبو', en: 'Jumbo' }, icon: 'jumbo' },
        { id: 'mini', name: { ar: 'ميني', en: 'Mini' }, icon: 'mini' },
        { id: 'pizza', name: { ar: 'البيتزا', en: 'Pizza' }, icon: 'pizza' },
        { id: 'meals', name: { ar: 'الوجبات', en: 'Meals' }, icon: 'meals' },
        { id: 'dips', name: { ar: 'التغميسات', en: 'Dips' }, icon: 'dips' },
        { id: 'falafel_doner', name: { ar: 'دونير فلافل', en: 'Falafel Doner' }, icon: 'falafel' },
        { id: 'falafel_iraqi', name: { ar: 'عراقي فلافل', en: 'Falafel Iraqi' }, icon: 'falafel' },
        { id: 'falafel_saj', name: { ar: 'صاج الفلافل', en: 'Falafel Saj' }, icon: 'falafel' },
        { id: 'falafel', name: { ar: 'الفلافل', en: 'Falafel' }, icon: 'falafel' },
        { id: 'falafel_jumbo', name: { ar: 'جمبو فلافل', en: 'Falafel Jumbo' }, icon: 'falafel' },
        { id: 'falafel_plates', name: { ar: 'صحون الفلافل', en: 'Falafel Plates' }, icon: 'plate' },
        { id: 'juices', name: { ar: 'العصائر', en: 'Juices' }, icon: 'juice' },
        { id: 'soft_drinks', name: { ar: 'المشروبات الغازية', en: 'Soft Drinks' }, icon: 'soda' },
        { id: 'appetizers', name: { ar: 'المقبلات', en: 'Appetizers' }, icon: 'appetizers' },
        { id: 'pastries', name: { ar: 'معجناتنا اللذيذة', en: 'Our Delicious Pastries' }, icon: 'pastries' },
        { id: 'fresh_juices', name: { ar: 'عصيرات طازجة', en: 'Fresh Juices' }, icon: 'fresh_juice' },
        { id: 'drinks', name: { ar: 'المشروبات', en: 'Drinks' }, icon: 'drinks' },
    ],

    products: [
        // DONER
        {
            id: 101,
            name: { ar: 'دونر دجاج', en: 'Chicken Doner' },
            description: { ar: 'ساندويتش دونر دجاج كلاسيكي', en: 'Classic Chicken Doner Sandwich' },
            category: 'doner',
            price: 25,
            calories: 400,
            image: 'doner-chicken.jpg'
        },
        {
            id: 102,
            name: { ar: 'دونر لحم', en: 'Beef Doner' },
            description: { ar: 'ساندويتش دونر لحم كلاسيكي', en: 'Classic Beef Doner Sandwich' },
            category: 'doner',
            price: 30,
            calories: 450,
            image: 'doner-beef.jpg'
        },

        // IRAQI
        {
            id: 201,
            name: { ar: 'عراقي دجاج', en: 'Iraqi Chicken' },
            description: { ar: 'خبز عراقي مع دجاج', en: 'Iraqi bread with chicken' },
            category: 'iraqi',
            price: 28,
            calories: 420,
            image: 'iraqi-chicken.jpg'
        },
        {
            id: 202,
            name: { ar: 'عراقي لحم', en: 'Iraqi Beef' },
            description: { ar: 'خبز عراقي مع لحم', en: 'Iraqi bread with beef' },
            category: 'iraqi',
            price: 33,
            calories: 480,
            image: 'iraqi-beef.jpg'
        },

        // SAJ
        {
            id: 301,
            name: { ar: 'صاج دجاج', en: 'Saj Chicken' },
            description: { ar: 'خبز صاج مقرمش مع دجاج', en: 'Crispy saj bread with chicken' },
            category: 'saj',
            price: 26,
            calories: 380,
            image: 'saj-chicken.jpg'
        },
        {
            id: 302,
            name: { ar: 'صاج لحم', en: 'Saj Beef' },
            description: { ar: 'خبز صاج مقرمش مع لحم', en: 'Crispy saj bread with beef' },
            category: 'saj',
            price: 31,
            calories: 430,
            image: 'saj-beef.jpg'
        },

        // SHAWARMA
        {
            id: 401,
            name: { ar: 'شاورما عربي', en: 'Arabic Shawarma' },
            description: { ar: 'وجبة شاورما عربي مقطعة', en: 'Sliced Arabic Shawarma meal' },
            category: 'shawarma',
            price: 35,
            calories: 600,
            image: 'shawarma-arabic.jpg'
        },

        // JUMBO
        {
            id: 501,
            name: { ar: 'ساندويتش جمبو', en: 'Jumbo Sandwich' },
            description: { ar: 'ساندويتش حجم كبير للمشاركة', en: 'Large size sandwich for sharing' },
            category: 'jumbo',
            price: 45,
            calories: 800,
            image: 'jumbo-sandwich.jpg'
        },

        // MINI
        {
            id: 601,
            name: { ar: 'ساندويتش ميني', en: 'Mini Sandwich' },
            description: { ar: 'ساندويتش حجم صغير', en: 'Small size sandwich' },
            category: 'mini',
            price: 15,
            calories: 200,
            image: 'mini-sandwich.jpg'
        },

        // PIZZA
        {
            id: 701,
            name: { ar: 'بيتزا مارغريتا', en: 'Margherita Pizza' },
            description: { ar: 'جبنة وموزاريلا وصلصة طماطم', en: 'Cheese, mozzarella and tomato sauce' },
            category: 'pizza',
            price: 35,
            calories: 700,
            image: 'pizza-margherita.jpg'
        },
        {
            id: 702,
            name: { ar: 'بيتزا دجاج', en: 'Chicken Pizza' },
            description: { ar: 'بيتزا مع قطع الدجاج', en: 'Pizza with chicken pieces' },
            category: 'pizza',
            price: 40,
            calories: 750,
            image: 'pizza-chicken.jpg'
        },

        // MEALS
        {
            id: 801,
            name: { ar: 'وجبة برجر', en: 'Burger Meal' },
            description: { ar: 'برجر مع بطاطس ومشروب', en: 'Burger with fries and drink' },
            category: 'meals',
            price: 45,
            calories: 900,
            image: 'meal-burger.jpg'
        },

        // DIPS
        {
            id: 901,
            name: { ar: 'ثومية', en: 'Garlic Dip' },
            description: { ar: 'صلصة الثوم الكريمية', en: 'Creamy garlic sauce' },
            category: 'dips',
            price: 5,
            calories: 100,
            image: 'dip-garlic.jpg'
        },

        // FALAFEL DONER
        {
            id: 1001,
            name: { ar: 'دونر فلافل', en: 'Falafel Doner' },
            description: { ar: 'فلافل بخبز الدونر', en: 'Falafel in doner bread' },
            category: 'falafel_doner',
            price: 20,
            calories: 350,
            image: 'falafel-doner.jpg'
        },

        // FALAFEL IRAQI
        {
            id: 1101,
            name: { ar: 'عراقي فلافل', en: 'Falafel Iraqi' },
            description: { ar: 'فلافل بخبز عراقي', en: 'Falafel in Iraqi bread' },
            category: 'falafel_iraqi',
            price: 22,
            calories: 370,
            image: 'falafel-iraqi.jpg'
        },

        // FALAFEL SAJ
        {
            id: 1201,
            name: { ar: 'صاج فلافل', en: 'Falafel Saj' },
            description: { ar: 'فلافل بخبز الصاج', en: 'Falafel in saj bread' },
            category: 'falafel_saj',
            price: 20,
            calories: 340,
            image: 'falafel-saj.jpg'
        },

        // FALAFEL
        {
            id: 1301,
            name: { ar: 'ساندويتش فلافل', en: 'Falafel Sandwich' },
            description: { ar: 'ساندويتش فلافل تقليدي', en: 'Traditional falafel sandwich' },
            category: 'falafel',
            price: 18,
            calories: 320,
            image: 'falafel-sandwich.jpg'
        },

        // FALAFEL JUMBO
        {
            id: 1401,
            name: { ar: 'جمبو فلافل', en: 'Jumbo Falafel' },
            description: { ar: 'ساندويتش فلافل حجم كبير', en: 'Large falafel sandwich' },
            category: 'falafel_jumbo',
            price: 30,
            calories: 500,
            image: 'falafel-jumbo.jpg'
        },

        // FALAFEL PLATES
        {
            id: 1501,
            name: { ar: 'صحن فلافل مشكل', en: 'Mixed Falafel Plate' },
            description: { ar: 'فلافل مع خضروات وطحينة', en: 'Falafel with vegetables and tahini' },
            category: 'falafel_plates',
            price: 25,
            calories: 400,
            image: 'falafel-plate.jpg'
        },

        // JUICES
        {
            id: 1601,
            name: { ar: 'عصير برتقال', en: 'Orange Juice' },
            description: { ar: 'عصير برتقال طبيعي', en: 'Natural orange juice' },
            category: 'juices',
            price: 15,
            calories: 120,
            image: 'juice-orange.jpg'
        },

        // SOFT DRINKS
        {
            id: 1701,
            name: { ar: 'بيبسي', en: 'Pepsi' },
            description: { ar: 'مشروب غازي بارد', en: 'Cold soft drink' },
            category: 'soft_drinks',
            price: 5,
            calories: 140,
            image: 'drink-pepsi.jpg'
        },

        // APPETIZERS
        {
            id: 1801,
            name: { ar: 'بطاطس مقلية', en: 'French Fries' },
            description: { ar: 'بطاطس مقلية مقرمشة', en: 'Crispy french fries' },
            category: 'appetizers',
            price: 12,
            calories: 300,
            image: 'fries.jpg'
        },
        {
            id: 1802,
            name: { ar: 'كبة', en: 'Kibbeh' },
            description: { ar: 'كبة مقلية (3 قطع)', en: 'Fried Kibbeh (3 pcs)' },
            category: 'appetizers',
            price: 18,
            calories: 250,
            image: 'kibbeh.jpg'
        },

        // PASTRIES
        {
            id: 1901,
            name: { ar: 'فطيرة جبن', en: 'Cheese Pie' },
            description: { ar: 'فطيرة محشوة بالجبن', en: 'Pie stuffed with cheese' },
            category: 'pastries',
            price: 15,
            calories: 350,
            image: 'pie-cheese.jpg'
        },
        {
            id: 1902,
            name: { ar: 'فطيرة سبانخ', en: 'Spinach Pie' },
            description: { ar: 'فطيرة محشوة بالسبانخ', en: 'Pie stuffed with spinach' },
            category: 'pastries',
            price: 15,
            calories: 300,
            image: 'pie-spinach.jpg'
        },

        // FRESH JUICES
        {
            id: 2001,
            name: { ar: 'عصير ليمون نعناع', en: 'Lemon Mint Juice' },
            description: { ar: 'عصير منعش', en: 'Refreshing juice' },
            category: 'fresh_juices',
            price: 18,
            calories: 100,
            image: 'juice-lemon-mint.jpg'
        },

        // DRINKS (General/Hot)
        {
            id: 2101,
            name: { ar: 'شاي', en: 'Tea' },
            description: { ar: 'شاي أحمر ساخن', en: 'Hot red tea' },
            category: 'drinks',
            price: 3,
            calories: 5,
            image: 'tea.jpg'
        },
        {
            id: 2102,
            name: { ar: 'قهوة تركية', en: 'Turkish Coffee' },
            description: { ar: 'قهوة تركية أصيلة', en: 'Authentic Turkish coffee' },
            category: 'drinks',
            price: 10,
            calories: 10,
            image: 'coffee-turkish.jpg'
        },
    ]
};

export default menuData;

