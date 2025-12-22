import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there is a hash, let the page handle the scroll to element
        if (!hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' // Instant is better for full page navigation
            });

            // Aggressively reset overflow to ensure scrolling is never locked on navigation
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }
    }, [pathname, hash]);

    return null;
}
