import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar
                src="https://github.com/fgom-dev.png"
                hasBorder={false}
            /> 
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>                            
                            <strong>Fernando Gomes</strong>
                            <span> (você)</span>                           
                            
                            <time title='17 de Junho ás 18:10' dateTime='2022-06-27 18:10:34'>Cerca de 1h</time>                            
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir<span>33</span>
                    </button>
                </footer>                
            </div>
        </div>
    )
}