import {ReactElement} from 'react';
import s from './rank-card.module.scss'
import Typography from '@/common/components/typography/typography';

type Props = {
	count: number
}


const RankCard = ({count}:Props):ReactElement => {
	return (
		<div className={s.container}>
   <Typography variant={'h4'}>{count}</Typography>
		</div>
	)
}
export default RankCard