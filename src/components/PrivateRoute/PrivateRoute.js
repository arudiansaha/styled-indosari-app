import { Routes, Route } from 'react-router-dom';
import { Wrapper } from '../index';
import {
  Dashboard,
  Report,
  Record,
  UpdateSupply,
  UpdateDemand,
  RecapSupply,
  RecapDemand
} from '../../views/index';

export function PrivateRoute() {
  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/record"
          element={<Record />}
        />
        <Route
          path="/report"
          element={<Report />}
        />
        <Route
          path="/update/demand/:id"
          element={<UpdateDemand />}
        />
        <Route
          path="/update/supply/:id"
          element={<UpdateSupply />}
        />
        <Route
          path="/recap/supply/"
          element={<RecapSupply />}
        />
        <Route
          path="/recap/demand/"
          element={<RecapDemand />}
        />
      </Routes>
    </Wrapper>
  );
}
