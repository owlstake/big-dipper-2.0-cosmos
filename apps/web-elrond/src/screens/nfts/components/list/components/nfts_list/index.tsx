import NoData from '@/components/no_data';
import Desktop from '@/screens/nfts/components/list/components/nfts_list/components/desktop';
import Mobile from '@/screens/nfts/components/list/components/nfts_list/components/mobile';
import type { NFTTypes } from '@/screens/nfts/components/list/types';
import useSharedStyles from '@/styles/useSharedStyles';
import { FC } from 'react';

const NftsList: FC<{ items: NFTTypes[] }> = (props) => {
  const { classes } = useSharedStyles();

  if (!props.items.length) {
    return <NoData />;
  }

  return (
    <>
      <Desktop className={classes.hiddenUntilLg} items={props.items} />
      <Mobile className={classes.hiddenWhenLg} items={props.items} />
    </>
  );
};

export default NftsList;
