import Image from 'next/image'
import {ReactElement} from 'react';

import Typography from '@/common/components/typography/typography';

import s from './progress-card.module.scss'

type Props = {
	title: string;
	progress: string;
}

const ProgressCard = ({title, progress}: Props):ReactElement => {
	const percent = Number(progress) * 100;

	return (
		<div className={s.container}>
			<div className={s.header}>
				<div className={s.title}>
					<Image src='icons/star.svg' alt='star' width={24} height={24} />
					<Typography variant="h3" gray>{title}</Typography>
				</div>
				<div>
					<Typography variant="h3" gray>{progress}</Typography>
				</div>

			</div>
			<div className={s.progressLine}>
					<div className={s.left} style={{ width: `${percent}%` }} />
					<div className={s.right} style={{ width: `${100 - percent}%` }} />
			</div>
		</div>
	)
}

export default ProgressCard