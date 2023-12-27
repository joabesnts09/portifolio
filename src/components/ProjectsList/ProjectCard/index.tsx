import Image, { StaticImageData } from 'next/image'
import styles from './style.module.scss'
import imageShare from '../../../../public/assets/share-imag.png'



export const ProjectsCard = ({ project }) => {
    return (
        <>
            <div className={styles.conatiner}>
                <div className={styles.boxImg}>
                    <Image
                        src={project.image}
                        className={styles.imageSkill}
                        width={350}
                        alt={project.name}
                    />
                </div>

                <div className={styles.boxDescription}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>

                <div className={styles.boxFooter}>
                    <a target="-bland" href={project.url}>
                        <Image src={imageShare} width={22} />
                        <span>Ver site</span>
                    </a>
                </div>
            </div>
        </>
    )
}
