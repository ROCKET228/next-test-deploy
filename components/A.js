import Link from "next/link";
import styles from '../styles/A.module.css'

const A = ({text, href}) => {
    return (
        <Link style={{textDecoration:'none'}} href={href}>
            <span className={styles.link}>{text}</span>
        </Link>
    );
};

export default A;