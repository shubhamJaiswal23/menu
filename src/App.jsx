import { useState } from 'react';
import Title from './Title';
import data from './data';
import Menu from './Menu';

const App = () => {
  const [menu, setMenu] = useState(data);

  return (
    <main>
      <section className="menu">
        <Title />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
