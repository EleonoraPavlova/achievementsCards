import {ReactElement} from 'react';

import ProgressCard from '@/common/achievementCards/general/progressCard';
import RankCard from '@/common/achievementCards/general/rankCard';
import NamedCard from '@/common/components/namedCard';
import {toUpperCase} from '@/utils/toUpperCase';

import s from './general-card.module.scss'

const GeneralCard = ():ReactElement => {
	const achievement = "Досягнення"
	const desc = "Ви крутіші, ніж 87% спеціалістів!"
	const title = "Вiдкрито досягнень"
	const progress = "18/ 143"

	return (
		<NamedCard title={achievement} description={desc} useMuseoTitle>
     <div className={s.container}>
       <ProgressCard title={toUpperCase(title)} progress={progress}/>
						 <RankCard count={8} rank={6}/>
						 <RankCard count={9} rank={5}/>
						 <RankCard count={10} rank={1}/>
						 <RankCard count={123} rank={null}/>
      </div>
		</NamedCard>
	)
}

export default GeneralCard;