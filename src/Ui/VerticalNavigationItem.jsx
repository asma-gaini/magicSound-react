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
      {subLink && (
        <ul
          class="collapse show nav flex-column subLinkContent"
          data-bs-parent="#menu"
          id={subid}
        >
          {subLink.map((l) => (
            <li>
              <a href="#" class="nav-link px-0" id={l.mainId}>
                <span class="d-none d-sm-inline">{l.name}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default VerticalNavigationItem;
