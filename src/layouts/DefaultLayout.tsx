import { ReactNode } from 'react';
import styles from './DefaultLayout.module.css';
import Banner from '../components/Banner/Banner';

type Props = {
    children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => (
    <>
        <div className={styles.container}>
            <Banner />
            {/* <Navigator /> */}
            {children}
            {/* <Sidebar />  */}
        </div>
    </>
);

export default DefaultLayout;
