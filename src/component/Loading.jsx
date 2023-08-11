import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Box>
      <Grid container>
      <Grid item xs={12} sm={6} lg={4}  >
      <Skeleton variant="text" width={400} sx={{ fontSize: "1rem" }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={400} height={60} />
      <Skeleton variant="rounded" width={400} height={60} />
      <Skeleton variant="rounded" width={400} height={60} />
      </Grid>

      <Grid item xs={12} sm={6} lg={4}  >
      <Skeleton variant="text" width={400} sx={{ fontSize: "1rem" }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={400} height={60} />
      <Skeleton variant="rounded" width={400} height={60} />
      <Skeleton variant="rounded" width={400} height={60} />
      </Grid>

      <Grid item xs={12} sm={6} lg={4}  >
      <Skeleton variant="text" width={400} sx={{ fontSize: "1rem" }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={400} height={60} />
      <Skeleton variant="rounded" width={400} height={60} />
      <Skeleton variant="rounded" width={400} height={60} />
      </Grid>

      </Grid>
      
    </Box>
  );
};

export default Loading;
