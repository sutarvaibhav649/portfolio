export default function Footer({ name }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {name}. Built with care.</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
