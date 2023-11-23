import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';

export const SpecSection = styled.section`
  margin: 2rem 0;
`;

export const SpecPaper = styled(Paper)`
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const SpecTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const SpecCategoryTitle = styled(Typography)`
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const SpecTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th,
  td {
    text-align: left;
    padding: 0.5rem;
    vertical-align: top;
    border-bottom: 1px solid #eee;
  }

  th {
    font-weight: bold;
    white-space: nowrap;
    width: 40%;
  }

  td {
    width: 60%;
  }
`;
