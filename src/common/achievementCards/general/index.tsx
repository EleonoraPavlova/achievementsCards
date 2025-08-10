import NamedCard from '@/common/components/namedCard';
import {ReactElement} from 'react';
import s from './general-card.module.scss'
import ProgressCard from '@/common/achievementCards/general/progressCard';
import RankCard from '@/common/achievementCards/general/rankCard';

const GeneralCard = ():ReactElement => {
	const achievement = "Досягнення"
	const desc = "Ви крутіші, ніж 87% спеціалістів!"
	const title = "Вiдкрито досягнень"

	return (
		<NamedCard title={achievement} description={desc} useMuseoTitle>
     <div className={s.container}>
       <ProgressCard title={title}/>
						 <RankCard count={8} />
      </div>
		</NamedCard>
	)
}

export default GeneralCard;