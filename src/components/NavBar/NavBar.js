import { StyledWrapper, Nav, StyledLink } from './NavBar.styles';

export function NavBar() {
  return (
    <StyledWrapper>
      <Nav>
        <StyledLink to="/">Dashboard</StyledLink>
        <StyledLink to="/record">Record</StyledLink>
        <StyledLink to="/report">Report</StyledLink>
      </Nav>
    </StyledWrapper>
  );
}
