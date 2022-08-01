import './Sidebar.css';

import logo from '../../assets/logo.svg';
import Agents from '../../assets/Agents.svg';
import articles from '../../assets/articles.svg';
import contacts from '../../assets/contacts.svg';
import overview from '../../assets/overview.svg';
import tickets from '../../assets/tickets.svg';
import settings from '../../assets/settings.svg';
import subscription from '../../assets/subscription.svg';
import ideas from '../../assets/ideas.svg';
import SideBarItem from '../../SidebarItem/SidebarItem';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar-top'>
				<img className='sidebar-logo' src={logo} />
				<span className='sidebar-headText'>Dashboard Kit</span>
			</div>

			<ul className='sidebar-list'>
				<SideBarItem src={overview} text='Overview' className="sidebar-item--active" />
				<SideBarItem src={tickets} text='Tickets' />
				<SideBarItem src={ideas} text='Ideas' />
				<SideBarItem src={contacts} text='Contacts' />
				<SideBarItem src={Agents} text='Agents' />
				<SideBarItem src={articles} text='Articles' className = "line-bottom" />
				<SideBarItem src={settings} text='Settings' />
				<SideBarItem src={subscription} text='Subscription' />
			</ul>
		</div>
	);
}

export default Sidebar;
