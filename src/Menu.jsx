import MenuItem from './MenuItem';

const Menu = ({ menu }) => {
  return (
    <>
      <div className="btn-container">
        <button className="btn">all</button>
        <button className="btn">breakfast</button>
        <button className="btn">lunch</button>
        <button className="btn">shakes</button>
      </div>
      <div className="section-center">
        {menu.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};
export default Menu;
