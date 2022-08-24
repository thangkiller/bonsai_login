import { Header, Footer } from '../component';

function MainLayout({ className, children }) {
  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
