import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam consequuntur nisi impedit itaque perspiciatis voluptate sint tenetur error corporis veniam aspernatur dolore fugiat quidem laboriosam, fuga eveniet velit minima laborum!</p>
            <br></br>
            <p>Este é um projeto desenvolvido assistindo as aulas do professor <Link href='https://www.youtube.com/watch?v=xDvekzesbh4&list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft&index=17'><a>Matheus Battisti</a></Link>.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"></Image>
        </div>
    )
}
