import "./sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarRateIcon from '@mui/icons-material/StarRate';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <TagIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Explore</span>
          </li>
          <li className="sidebarListItem">
            <NotificationsNoneIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Notifications</span>
          </li>
          <li className="sidebarListItem">
            <MailOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Messages</span>
          </li>
          <li className="sidebarListItem">
            <BookmarkBorderIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <ListIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Lists</span>
          </li>
          <li className="sidebarListItem">
            <PersonOutlineIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonthIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Calendar</span>
          </li>
          <li className="sidebarListItem">
            <StarRateIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Mentorship</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
