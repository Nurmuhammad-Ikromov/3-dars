import './SidebarItem.css'

function SideBarItem({src, text , className}) {
	return (
		<li id='sidebar-item' className= {className}>
			<img className='sidebar-icon' src={src} alt="site icon" />
            <span className='sidebar-title'>{text}</span>
		</li>
	);
}

export default SideBarItem
