import './Content.css';
import search from '../../assets/search.svg';
import newBtn from '../../assets/new.svg';
import Person from '../../assets/photo.svg';
import Me from '../../assets/me (3).jpg';
import Plus from '../../assets/plus.svg';

function Content() {
	function Card({ title, count }) {
		return (
			<li className='card-item'>
				<p className='card-title'>{title}</p>

				<strong className='card-count'>{count}</strong>
			</li>
		);
	}

	function ContentBodyItem({ contentBodyTitle, contentBodyCount }) {
		return (
			<li className='content-body-item'>
				<p className='content-body-item-title'>{contentBodyTitle}</p>

				<strong className='content-body-item-time'>
					{contentBodyCount}
				</strong>
			</li>
		);
	}

	function ContentTicketsItem({ ticketText, ticketCount }) {
		return (
			<li className='content-tickets-item'>
				<p className='ticket-item-text'>{ticketText}</p>
				<span className='ticket-item-count'>{ticketCount}</span>
			</li>
		);
	}

	function TasksItem({btn, tasksText, id, defaultChecked}) {
		return (
			<li className='tasks-item'>
				<input className='tasks-item-check' type="checkbox" defaultChecked= {defaultChecked}/>

                <span  className='tasks-item-title'>{tasksText}</span>
                <button id={id} className='tasks-item-btn'>{btn}</button>
			</li>
		);
	}

	return (
		<div className='content'>
			<div className='content-header'>
				<h2 className='content-title'>Overview</h2>

				<div className='content-header-person'>
					<button className='content-search'>
						<img src={search} />
					</button>

					<button className='content-newBtn'>
						<img src={newBtn} />
					</button>
					<span className='content-name'>Jones Ferdinand</span>
					<img className='content-header-img' src={Person} />
				</div>
			</div>

			<ul className='card-list'>
				<Card title='Unresolved' count='60' />
				<Card title='Overdue' count='16' />
				<Card title='Open' count='43' />
				<Card title='On hold' count='64' />
			</ul>

			<div className='content-body'>
				<div className='content-body-main'>
					<h3 className='content-body-title'>Today’s trends</h3>
					<div className='content-body-time'>
						<time className='content-body-date'>as of 25 May 2019, 09:41 PM</time>
						<span className='divider-now'>Today</span>
						<span className='divider-last'>Yesterday</span>
					</div>

					<img width={715} height={400} src={Me} />
				</div>

				<ul className='content-body-list'>
					<ContentBodyItem
						contentBodyTitle='Resolved'
						contentBodyCount='449'
					/>
					<ContentBodyItem
						contentBodyTitle='Received'
						contentBodyCount='426'
					/>
					<ContentBodyItem
						contentBodyTitle='Average first response time'
						contentBodyCount='33m'
					/>
					<ContentBodyItem
						contentBodyTitle='Average response time'
						contentBodyCount='3h 8m'
					/>
					<ContentBodyItem
						contentBodyTitle='Resolution within SLA'
						contentBodyCount='94%'
					/>
				</ul>
			</div>

			<div className='content-tickets'>
				<div className='content-tickets-info'>
					<div className='tickets-info-box'>
						<h3 className='content-tickets-title'>
							Unresolved tickets
						</h3>
						<span className='content-tickets-link'>
							View details
						</span>
					</div>
					<p className='content-tickets-infoText'>
						Group: <span className='tickets-support'>Support</span>
					</p>
				</div>

				<ul className='content-tickets-list'>
					<ContentTicketsItem
						ticketText='Waiting on Feature Request'
						ticketCount='4238'
					/>
					<ContentTicketsItem
						ticketText='Awaiting Customer Response'
						ticketCount='1005'
					/>
					<ContentTicketsItem
						ticketText='Awaiting Developer Fix'
						ticketCount='914'
					/>
					<ContentTicketsItem
						ticketText='Pending'
						ticketCount='281'
					/>
				</ul>
			</div>

			<div className='tasks'>
				<div className='content-tickets-info'>
					<div className='tickets-info-box'>
						<h3 className='content-tickets-title'>Tasks</h3>
						<span className='content-tickets-link'>View all</span>
					</div>
					<p className='content-tickets-infoText'>Today</p>
				</div>

				<div className='create-tasks'>
					<p className='tasks-creator'>Create new task</p>
					<button className='tasks-create-btn'>
						<img src={Plus} />
					</button>
				</div>

				<ul className='tasks-list'>
					<TasksItem tasksText="Finish ticket update" btn="Urgent" id="warning"/>
					<TasksItem tasksText="Create new ticket example" btn="New" id = "good"/>
					<TasksItem tasksText="Update ticket report" btn="Default" defaultChecked/>
				</ul>
			</div>
		</div>
	);
}

export default Content;
