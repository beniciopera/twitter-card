import {useState} from 'react'

export default function TwitterFollowCard({children, userName}) {
	const [isFollowing, setIsFollowing] = useState(false)

	const handleClick = () => {
		setIsFollowing(!isFollowing)
	}

	const text = isFollowing ? 'Siguiendo' : 'Seguir'
	const buttonClassName = isFollowing
		? 'tw-followCard-button is-following'
		: 'tw-followCard-button'
	return (
		<article className='tw-followCard'>
			<header className='tw-followCard-header'>
				<img
					src={`https://unavatar.io/${userName}`}
					alt='Avatar'
					className='tw-followCard-img'
				/>
				<div className='tw-followCard-info'>
					<strong>{children}</strong>
					<span className='tw-followCard-username'>@{userName}</span>
				</div>
			</header>
			<aside>
				<button className={buttonClassName} onClick={handleClick}>
					{text}
				</button>
			</aside>
		</article>
	)
}
