import { Avatar, Box, Grid, Skeleton, Typography } from '@mui/material';

function LoaderChildren() {
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <Box display="flex" alignItems="center">
        <Box margin={1}>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        </Box>
        <Box width="100%">
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
      <Skeleton variant="rectangular" width="100%" height="550px">
        <div style={{ paddingTop: '57%' }} />
      </Skeleton>
    </div>
  );
}

export default function Loader() {
  return (
    <Grid container spacing={0}>
      <Grid item xs>
        <LoaderChildren />
      </Grid>
    </Grid>
  );
}