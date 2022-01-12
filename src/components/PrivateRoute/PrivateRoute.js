import { Routes, Route } from 'react-router-dom';
import { Wrapper } from '../index';
import { Dashboard, Report } from '../../views/index';

export function PrivateRoute() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Wrapper>
  );
}
