import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Wrapper } from 'components/App/App.styled';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = () => {
  return (
    <Wrapper>
      <Header />

      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Layout;
