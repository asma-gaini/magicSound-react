import VerticalNavigationItem from "./VerticalNavigationItem";
import "./verticalNavigation.css";

const vertical_navigation = [
  {
    mainId: "1",
    name: "Home",
    svg: "../image/svg/home-svgrepo-com.svg",
    target: "/",
  },
  {
    mainId: "2",
    name: "Dashboard",
    svg: "../image/svg/dashboard.svg",
    target: "#",
    subid: "sub1",
    subLink: [
      {
        mainId: "3",
        name: "item 1",
        target: "#",
      },
      {
        mainId: "4",
        name: "item 2",
        target: "#",
      },
    ],
  },
  {
    mainId: "5",
    name: "Order",
    svg: "../image/svg/cart-check-svgrepo-com.svg",
    target: "#",
    subid: "sub2",
    subLink: [
      {
        mainId: "6",
        name: "item 1",
        target: "#",
      },
      {
        mainId: "7",
        name: "item 2",
        target: "#",
      },
    ],
  },
  {
    mainId: "8",
    name: "upload music",
    svg: "../image/svg/upload.svg",
    target: "/uploadMusic",
  },
  {
    mainId: "9",
    name: "favorit music",
    svg: "../image/svg/heart-straight.svg",
    target: "/favoritSongs",
  },
];

function VerticalNavigation() {
  const verticalNavigation = vertical_navigation;
  return (
    <div
      id="verticalNavigation"
      className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark"
    >
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <span className="fs-5 d-none d-sm-inline">Menu</span>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          {verticalNavigation.map((item) => (
            <VerticalNavigationItem item={item} key={item.mainId} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VerticalNavigation;
