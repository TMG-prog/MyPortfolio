import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
return (
<footer id="footer" className="footer">
<div className="footer-contact-info">
<h1 className="footer-heading">Connect With Me</h1>
<p className="footer-contact-access">Email: t.gmugure@gmail.com
</p>
<p className="footer-contact-access">Mobile: +254 7990361899
</p>
</div>
<div>
<h1>Social Links</h1>
<div className="social-icons">

<a href="www.linkedin.com/in/
tracy-mugure-1940022a7
"><i><FaLinkedin />
</i></a>
</div>
</div>
</footer>
)
}
export default Footer;