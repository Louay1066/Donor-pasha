import React from 'react';

const icons = {
    all: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8M12 8v8" />
        </svg>
    ),
    doner: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4h12c1 0 2 1 2 2v12c0 1-1 2-2 2H6c-1 0-2-1-2-2V6c0-1 1-2 2-2z" />
            <path d="M8 8h8M8 12h8M8 16h4" />
            <circle cx="18" cy="8" r="1" />
        </svg>
    ),
    iraqi: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="12" rx="9" ry="4" />
            <path d="M3 12v2c0 2.2 4 4 9 4s9-1.8 9-4v-2" />
            <path d="M3 14v2c0 2.2 4 4 9 4s9-1.8 9-4v-2" />
        </svg>
    ),
    saj: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3c-2 2-3 5-3 9s1 7 3 9" />
            <path d="M12 3c2 2 3 5 3 9s-1 7-3 9" />
            <path d="M3 12h18" />
        </svg>
    ),
    shawarma: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
            <path d="M12 22V12" />
            <path d="M20 7l-8 5-8-5" />
        </svg>
    ),
    jumbo: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" />
            <path d="M6 15V9a6 6 0 1 1 12 0v6" />
            <line x1="6" y1="12" x2="18" y2="12" />
        </svg>
    ),
    mini: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="8" width="18" height="8" rx="2" />
            <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
            <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
    ),
    pizza: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 19h20L12 2z" />
            <circle cx="10" cy="13" r="1.5" />
            <circle cx="14" cy="11" r="1.5" />
            <circle cx="12" cy="16" r="1.5" />
        </svg>
    ),
    meals: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v4" />
            <path d="M12 17v4" />
            <path d="M3 12h4" />
            <path d="M17 12h4" />
        </svg>
    ),
    dips: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 11h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            <path d="M12 15v4" />
        </svg>
    ),
    falafel: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5" />
            <circle cx="7" cy="16" r="4" />
            <circle cx="17" cy="16" r="4" />
        </svg>
    ),
    plate: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="14" rx="10" ry="4" />
            <path d="M2 14v2c0 2.2 4.5 4 10 4s10-1.8 10-4v-2" />
            <path d="M12 6v4" />
            <circle cx="12" cy="5" r="2" />
        </svg>
    ),
    juice: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2h8v3H8z" />
            <path d="M6 5h12l-1 17H7L6 5z" />
            <path d="M9 9l6 6M15 9l-6 6" />
        </svg>
    ),
    soda: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2h8v2c0 1-1 2-2 2h-4c-1 0-2-1-2-2V2z" />
            <rect x="6" y="6" width="12" height="16" rx="2" />
            <ellipse cx="12" cy="12" rx="3" ry="2" />
            <path d="M12 10v-2" />
        </svg>
    ),
    appetizers: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="10" width="16" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            <line x1="8" y1="15" x2="16" y2="15" />
        </svg>
    ),
    pastries: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 18c0-2 2-3 4-3 1 0 2 0 3-1s2-2 3-2 2 1 3 2 2 1 3 1c2 0 4 1 4 3" />
            <path d="M2 18h20v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
            <path d="M12 4v4" />
            <path d="M10 6h4" />
        </svg>
    ),
    fresh_juice: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="8" />
            <path d="M12 4v3" />
            <path d="M15 5l-3 3" />
            <path d="M12 8v8" />
            <path d="M9 13c0 2 1.5 3 3 3s3-1 3-3" />
        </svg>
    ),
    drinks: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
    )
};

const CategoryIcon = ({ name }) => {
    return (
        <span className="category-icon">
            {icons[name] || icons.all}
        </span>
    );
};

export default CategoryIcon;
