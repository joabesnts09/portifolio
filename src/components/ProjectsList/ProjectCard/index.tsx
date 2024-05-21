import Image, { StaticImageData } from 'next/image'
import styles from './style.module.scss'
import imageShare from '../../../../public/assets/share-imag.png'

export interface IProjectProps {
    buttonText: string
    project: {
        id: number
        name: string
        image: any
        description: string
        url: string
    }
}

export const ProjectsCard = ({buttonText, project }: IProjectProps) => {
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
                    <div className={styles.description}>
                        <p>{project.description}</p>
                    </div>
                </div>

                <div className={styles.boxFooter}>
                    <a target="-bland" href={project.url}>
                        <Image src={imageShare} width={22} alt='image share'/>
                        <span>{buttonText}</span>
                    </a>
                </div>
            </div>
        </>
    )
}
