import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div>
            <h1>About Page 🤘</h1>
            <p className={styles.extraGreen}>I'm a super cool software engineer now!</p>
            <Image   // loading an image locally
                src='/background.jpeg'
                alt='background'
                width={300}
                height={300}
            />

            <Image
                src="https://placekitten.com/300/300"
                alt="a magnificent creature"
                width={300}
                height={300}
            />
        </div>
    )
}