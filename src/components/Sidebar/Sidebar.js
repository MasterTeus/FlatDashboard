import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  BusinessCenterOutlined,
  PeopleOutline,
  HomeOutlined,
  BusinessOutlined,
  FolderOpenOutlined,
  GavelOutlined,
  LibraryBooksOutlined,
  ListAltOutlined,
  AssignmentIndOutlined,
  AssignmentOutlined,
  AttachMoneyOutlined,
  AttachFileOutlined
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

function Sidebar({ location }) {
  const structure = [
    {
      id: 0,
      label: "Painel",
      link: "/app/painel",
      icon: <HomeOutlined style={{ color: "white" }} />,
    },
    {
      id: 1,
      label: "Licitações",
      link: "/app/licitacoes",
      icon: <GavelOutlined style={{ color: "white" }} />,
    },
    {
      id: 2,
      label: "Empresas",
      link: "/app/empresas",
      icon: <BusinessCenterOutlined style={{ color: "white" }} />,
    },
    {
      id: 3,
      label: "Funcionarios",
      link: "/app/funcionarios",
      icon: <AssignmentIndOutlined style={{ color: "white" }} />,
    },
    {
      id: 4,
      label: "Pessoas",
      link: "/app/pessoas",
      icon: <PeopleOutline style={{ color: "white" }} />,
    },
    {
      id: 5,
      label: "Docs",
      link: "/app/docs",
      icon: <FolderOpenOutlined style={{ color: "white" }} />,
      children: [
        {
          label: "Editais",
          link: "/app/docs/editais",
          icon: <LibraryBooksOutlined style={{ color: "white" }} />,
        },
        {
          label: "Atas",
          link: "/app/docs/atas",
          icon: <ListAltOutlined style={{ color: "white" }} />,
        },
        {
          label: "Atos Iniciais",
          link: "/app/docs/atosiniciais",
          icon: <AssignmentOutlined style={{ color: "white" }} />,
        },
      ],
    },
    {
      id: 6,
      label: "Secretarias",
      link: "/app/secretarias",
      icon: <BusinessOutlined style={{ color: "white" }} />,
    },
    {
      id: 7,
      label: "Cotações",
      link: "/app/cotacoes",
      icon: <AttachMoneyOutlined style={{ color: "white" }} />,
    },
    {
      id: 9,
      label: "CRC's",
      link: "/app/crc",
      icon: <AttachFileOutlined style={{ color: "white" }} />,
    },
  ];
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      style={{ background: "transparent" }}
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map((link) => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
