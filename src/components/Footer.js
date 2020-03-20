import React from 'react';

const Footer = () => {
    return (
        <footer id="main-footer">
            <div className="container">
                <p>
                    Made with{' '}
                    <a
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="react-word">React</span>
                    </a>
                    .
                </p>
                <a
                    href="https://www.linkedin.com/in/pantelis-liafas-6438a8169/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
