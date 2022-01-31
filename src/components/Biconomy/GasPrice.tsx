import { Box, makeStyles, Typography, useTheme } from '@material-ui/core';
import { LocalGasStation } from '@material-ui/icons';
import { CustomTooltip, ToggleSwitch } from 'components';
import { useBiconomy } from 'context/Biconomy';
import { useGasPrice } from 'context/GasPrice';
import React from 'react';

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  gasPrice: {
    padding: 4,
    fontWeight: 600,
  },
  gasTankIcon: {
    height: 18,
    width: 'auto',
  },
}));

const GasPrice: React.FunctionComponent = (props) => {
  const { isGaslessAllowed } = useBiconomy();
  const classes = useStyles({ isGaslessAllowed });
  const { gasPrice } = useGasPrice();
  return (
    <CustomTooltip title='Current gas price' arrow>
      <Box display='flex' alignItems='center'>
        <LocalGasStation className={classes.gasTankIcon} />
        <Typography className={classes.gasPrice} variant='body2'>
          {gasPrice}
        </Typography>
      </Box>
    </CustomTooltip>
  );
};

export default GasPrice;
