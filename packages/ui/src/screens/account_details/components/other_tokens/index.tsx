import Box from '@/components/box';
import Pagination from '@/components/pagination';
import { usePagination } from '@/hooks';
import useShallowMemo from '@/hooks/useShallowMemo';
import useStyles from '@/screens/account_details/components/other_tokens/styles';
import type { OtherTokenType } from '@/screens/account_details/types';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';
import { FC, useMemo } from 'react';

import Desktop from '@/screens/account_details/components/other_tokens/components/desktop';
import Mobile from '@/screens/account_details/components/other_tokens/components/mobile';

type OtherTokensProps = {
  className?: string;
  otherTokens: {
    data: OtherTokenType[];
    count: number;
  };
};

const OtherTokens: FC<OtherTokensProps> = ({ className, otherTokens }) => {
  const { t } = useTranslation('accounts');
  const { classes } = useStyles();
  const { page, rowsPerPage, handlePageChange, handleRowsPerPageChange, sliceItems } =
    usePagination({});
  const dataMemo = useShallowMemo(otherTokens.data);
  const items = useMemo(() => sliceItems(dataMemo), [dataMemo, sliceItems]);

  const count = dataMemo.length;
  if (!dataMemo.length) {
    return null;
  }

  return (
    <Box className={className}>
      <Typography variant="h2">{t('otherTokens')}</Typography>
      <Desktop className={classes.hiddenUntilLg} items={items} />
      <Mobile className={classes.hiddenWhenLg} items={items} />
      <Pagination
        className={classes.paginate}
        total={count}
        rowsPerPage={rowsPerPage}
        page={page}
        handlePageChange={handlePageChange}
        handleRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </Box>
  );
};

export default OtherTokens;
