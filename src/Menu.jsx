import { useState } from 'react';
import MenuItem from './MenuItem';

const Menu = ({ menu }) => {
  const [category, setCategory] = useState(menu);

  const handleAll = () => {
    setCategory(menu);
  };

  const handleBreakfast = () => {
    const breakfast = menu.filter((item) => item.category === 'breakfast');
    setCategory(breakfast);
  };

  const handleLunch = () => {
    const lunch = menu.filter((item) => item.category === 'lunch');
    setCategory(lunch);
  };

  const handleShakes = () => {
    const shakes = menu.filter((item) => item.category === 'shakes');
    setCategory(shakes);
  };

  return (
    <>
      <div className="btn-container">
        <button className="btn" onClick={handleAll}>
          all
        </button>
        <button className="btn" onClick={handleBreakfast}>
          breakfast
        </button>
        <button className="btn" onClick={handleLunch}>
          lunch
        </button>
        <button className="btn" onClick={handleShakes}>
          shakes
        </button>
      </div>
      <div className="section-center">
        {category.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default Menu;
