const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} Blog. All rights reserved JTP.</p>
                <div className="mt-2">
                    <a href="/privacy-policy" className="text-blue-400 hover:underline">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;