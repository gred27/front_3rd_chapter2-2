import { useCallback, useState } from 'react';
import { CartPage } from './components/pages/CartPage';
import { AdminPage } from './components/pages/AdminPage';

import { Gnb } from './components/layout/Gnb';
import { MainContent } from './components/layout/MainContent';
import { AppLayout } from './components/layout/AppLayout';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const handleClickToggleBtn = useCallback(() => setIsAdmin((prevState) => !prevState), []);

  return (
    <AppLayout>
      <Gnb isAdmin={isAdmin} onClick={handleClickToggleBtn} />
      <MainContent>{isAdmin ? <AdminPage /> : <CartPage />}</MainContent>
    </AppLayout>
  );
};

export default App;
