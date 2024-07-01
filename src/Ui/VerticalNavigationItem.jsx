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
      {subLink != "null" ? (
        <ul
          class="collapse show nav flex-column subLinkContent"
          data-bs-parent="#menu"
          id={subid}
        >
          <li>
            <a href="#" class="nav-link px-0" id="2">
              <span class="d-none d-sm-inline">item 1</span>
            </a>
          </li>
        </ul>
      ) : null}
    </li>
  );
}

export default VerticalNavigationItem;
