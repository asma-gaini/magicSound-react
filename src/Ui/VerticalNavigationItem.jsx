import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./verticalNavigation.css";

function VerticalNavigationItem({ item }) {
  const { mainId, name, svg, target, subid, subLink } = item;
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  function handleDropdownSublink(subId) {
    if (showDropdown == false) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  return (
    <li>
      <a
        href={target}
        className="nav-link align-middle px-0 setColor"
        id={mainId}
        subId={subLink && subid}
      >
        <img src={svg} className="dashboardSvg" />
        <span
          onClick={() => {
            subLink && handleDropdownSublink(subid);
            navigate({ target });
          }}
          className="ms-1 d-none d-sm-inline"
        >
          {name}
        </span>
      </a>
      {subLink && (
        <ul
          className={`collapse nav flex-column subLinkContent ${
            showDropdown == true ? "show" : ""
          }`}
          data-bs-parent="#menu"
          id={subid}
        >
          {subLink.map((link) => (
            <li>
              <span className="nav-link px-0" id={link.mainId}>
                <span className="d-none d-sm-inline sublink_text">
                  {link.name}
                </span>
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default VerticalNavigationItem;
