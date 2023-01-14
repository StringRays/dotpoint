import { ReactNode } from "react";
import NavBar from './NavBar';
type Props = {
    children: ReactNode;
};

const Layout = ({ children }: Props) => {
    return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <NavBar />
      <div>{children}</div>
    </div>
    )
}

export default Layout;