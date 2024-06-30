import "./verticalNavigation.css";

function VerticalNavigationItem({ item }) {
  const { mainId, name, svg, target, subid, subLink } = item;

  return (
    <li>
      <a
        href={target}
        className="nav-link align-middle px-0 setColor"
        id={mainId}
      >
        <img src={svg} className="dashboardSvg" />
        <span className="ms-1 d-none d-sm-inline">{name}</span>
      </a>
    </li>
  );
}

export default VerticalNavigationItem;
