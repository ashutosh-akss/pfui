// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/ExitToApp";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Logs from "@material-ui/icons/BookOutlined";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import StoreInfo from "views/StoreInfo/StoreInfo.js";
import Users from "views/Users/Users.js";
import Devices from 'views/Devices/PickFastDevices';
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
import LogsPage from "views/Logs/LogsPage";
import BroadcastMessage from "views/Messaging/BroadcastMessage";
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ChatIcon from '@material-ui/icons/Chat';
import PermDeviceInformationIcon from '@material-ui/icons/PermDeviceInformation';

// Device related pages
import ClockedIn from "./views/Devices/ClockedIn";
import DeviceDetailPage from "views/Devices/DeviceDetailPage";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/storeinfo",
    name: "User Store Info",
    rtlName: "ملف تعريفي للمستخدم",
    icon: ContactPhoneIcon,
    component: StoreInfo,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    rtlName: "قائمة الجدول",
    icon: PeopleOutlineIcon,
    component: Users,
    layout: "/admin"
  },
  {
    path: "/devices",
    name: "Devices",
    rtlName: "طباعة",
    icon: ImportantDevicesIcon,
    component: Devices,
    layout: "/admin"
  },
  {
    path: "/devices/hi",
    name: "Devices Details",
    rtlName: "طباعة",
    icon: PermDeviceInformationIcon,
    component: BroadcastMessage,
    layout: "/admin"
  },
  {
    path: "/messaging",
    name: "Messaging",
    rtlName: "Messaging",
    icon: ChatIcon,
    component: BroadcastMessage,
    layout: "/admin"
  },
  {
    path: "/logs",
    name: "Logs",
    rtlName: "Logs",
    icon: Logs,
    component: LogsPage,
    layout: "/admin"
  },
  {
    path: "/sign-out",
    name: "Sign Out",
    rtlName: "Sign out",
    icon: Unarchive,
    // component: UpgradeToPro,
    layout: "/admin"
  }
];

export default dashboardRoutes;
