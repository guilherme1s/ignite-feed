import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1719253480609-579ad1622c65?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            
            <div className={styles.profile}>
               
                <Avatar src="https://www.github.com/guilherme1s.png"/>

                <strong>Guilherme</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size="20" />
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}