import {ReactElement} from 'react';
import Image from 'next/image'
import s from './progress-card.module.scss'
import Typography from '@/common/components/typography/typography';

type Props = {
	title: string;
}

const ProgressCard = ({title}: Props):ReactElement => {
	return (
		<div className={s.container}>
			<div className={s.title}>
			 <Image src='icons/star.svg' alt='star' width={24} height={24} />
			 <Typography variant={'h3'} gray>{title}</Typography>
			</div>
		</div>
	)
}

export default ProgressCard