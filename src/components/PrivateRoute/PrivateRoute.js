import { Routes, Route } from 'react-router-dom';
import { Wrapper } from '../index';
import { Dashboard, Report, Record } from '../../views/index';

export function PrivateRoute() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/record" element={<Record />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Wrapper>
  );
}
