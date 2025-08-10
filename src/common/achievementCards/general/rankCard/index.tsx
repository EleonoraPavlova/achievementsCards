import {ReactElement} from 'react';

import Typography from '@/common/components/typography/typography';

import s from './rank-card.module.scss'

type Props = {
	count: number
	rank: number | null
}


const RankCard = ({count, rank}:Props):ReactElement => {
	const descRank = rank ? `Достижений открито ${rank} ранга` : "Досягнення закрито"

	return (
		<div className={s.container}>
   <Typography variant='h4'>{count}</Typography>
			<Typography variant='h3'>{descRank}</Typography>
		</div>
	)
}
export default RankCard