import Link from 'next/link';


const Sidebar = () => {
  return (
    <amp-sidebar id="sidebar" className="sidebar" layout="nodisplay">
      <button on="tap:sidebar.toggle" className="sidebar-trigger">
        ✕
      </button>
      <ul>
          <li>
              Tshirts
          </li>
          <li>
              Umbrellas
          </li>
          <li>
              Exclusive
          </li>
          <li>
              Badges
          </li>
      </ul>
    </amp-sidebar>
  );
};

export default Sidebar;