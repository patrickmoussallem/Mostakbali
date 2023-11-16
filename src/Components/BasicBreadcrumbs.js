import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';



export default function BasicBreadcrumbs(props) {
  return (
    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover"  href= '/'>
          Home
        </Link>
      
        <Typography color="text.primary">{props.page}</Typography>
      </Breadcrumbs>
    </div>
  );
}
