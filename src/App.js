import { NavBar, PrivateRoute } from './components/index';
import { StyledWrapper, StyledContainer } from './App.styles';

export default function App() {
  return (
    <StyledWrapper>
      <NavBar />
      <StyledContainer>
        <PrivateRoute />
      </StyledContainer>
    </StyledWrapper>
  );
}
