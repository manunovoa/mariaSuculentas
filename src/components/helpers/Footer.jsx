const Footer = () => {
  return (
    <section className="footer-basic">
      <footer>
        <section className="social">
          <img className="a" src="../../../public/instagram.png" alt="" />
          <img className="a" src="../../../public/snapchat.png" alt="" />
          <img className="a" src="../../../public/facebook.png" alt="" />
          <img className="a" src="../../../public/twitter.png" alt="" />
        </section>

        <ul className="list-inline">
          <li className="list-inline-item">
            <a className="link" href="#">
              Home
            </a>
          </li>
          <li className="list-inline-item">
            <a className="link" href="#">
              Services
            </a>
          </li>
          <li className="list-inline-item">
            <a className="link" href="#">
              About
            </a>
          </li>
        </ul>
        <p className="copyright">Maria Suculentas © 2022</p>
      </footer>
    </section>
  );
};

export default Footer;
