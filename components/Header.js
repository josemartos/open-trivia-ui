import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div className="page-container">
        <Link href="/">
          <a title="Open Trivia UI">Open Trivia UI</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
