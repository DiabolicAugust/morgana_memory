import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { menuData } from '../../data/menu';
import styles from './Sidebar.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { SlSettings } from 'react-icons/sl';
// import { GoKebabHorizontal } from 'react-icons/go';
import CardComponent from '../card-component/CardComponent';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div style={{ display: 'flex' }}>
      <div className={styles.main}>
        <CardComponent
          text="Jhon Snow"
          imgElement={
            <img
              src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_1280.jpg"
              height="28px"
              alt=""
            />
          }
          buttonElement={<IoIosArrowDown size="24px" />}
        />
        <div className={styles.menu}>
          {menuData.map((e, index) => (
            <NavLink to={e.url} key={index} style={{ textDecoration: 'none' }}>
              <CardComponent
                text={e.title}
                imgElement={e.image}
                isSimpleClassName={location.pathname.includes(e.url)}
              />
            </NavLink>
          ))}
        </div>
        <CardComponent
          text="Settings"
          imgElement={<SlSettings size="24px" />}
          onComponentClick={() => console.log('meow')}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
