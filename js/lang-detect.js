(function() {
    // Supported languages and their corresponding paths
    const supportedLangs = {
        'tr': '/',
        'de': '/de/',
        'ru': '/ru/',
        'ar': '/ar/',
        'en': '/en/'
    };

    // Prevent infinite redirect loop
    const currentPath = window.location.pathname;
    if (Object.values(supportedLangs).some(path => path !== '/' && currentPath.startsWith(path))) {
        return;
    }

    // Get browser language
    const browserLang = (navigator.language || navigator.userLanguage).split('-')[0].toLowerCase();
    
    // Determine target path
    let targetPath = supportedLangs[browserLang] || supportedLangs['en'];

    // Don't redirect if we're already on target (root scenario)
    if (targetPath === '/' && currentPath === '/') return;

    // Redirect
    if (targetPath !== '/') {
        window.location.href = targetPath;
    }
})();
