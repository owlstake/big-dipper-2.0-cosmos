import Name from '@/components/name';
import MsgCreateDistribution from '@/models/msg/dispensation/msg_create_distribution';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';
import React, { FC } from 'react';

const CreateDistribution: FC<{ message: MsgCreateDistribution }> = (props) => {
  const { message } = props;

  const distributor = useProfileRecoil(message.distributor);
  const distributorMoniker = distributor ? distributor?.name : message.distributor;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:MsgCreateDistribution"
        components={[<Name address={message.distributor} name={distributorMoniker} />, <b />]}
        values={{
          distributionType: message.distributionType,
        }}
      />
    </Typography>
  );
};

export default CreateDistribution;
