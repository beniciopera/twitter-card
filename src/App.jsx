import './App.css'
import TwitterFollowCard from './TwitterFollowCard.jsx'

export default function App() {
	return (
		<section className='container'>
			<TwitterFollowCard isFollowing userName='beniciopera'>
				Benicio Pera
			</TwitterFollowCard>
			<TwitterFollowCard
				isFollowing={false}
				userName='midudev'
				name='Miguel Angel'
			>
				Miguel Angel Darin
			</TwitterFollowCard>
		</section>
	)
}
