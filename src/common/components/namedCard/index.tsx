import {ReactElement, ReactNode} from 'react';

import Card from '@/common/components/card';
import Typography from '@/common/components/typography/typography';

type Props = {
	title: string;
	description: string;
	useMuseoTitle: boolean;
	children:ReactNode
}

const NamedCard = ({title, description, useMuseoTitle, children}:Props):ReactElement => {
	return ( <Card useMuseoTitle>
        <Typography as="h2" variant={useMuseoTitle ? "museoH2" : "h2"}>{title}</Typography>
		      {description && <Typography variant="subtitle" gray>{description}</Typography>}
		{children}
	</Card>)
}

export default NamedCard