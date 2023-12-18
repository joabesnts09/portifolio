import Image from 'next/image'
import styles from './style.module.scss'
import styleSkills from '../style.module.scss'

interface IItemProps {
    item: {
        name: string
        img: any
        id: number
    }
}

export const SkillCard = ({ item }: IItemProps) => {
    return (
        <div className={`${styles.container} ${styleSkills.card}`}>
            <div className={styles.containertBox}>
                <Image
                    className={styles.imageSkill}
                    width={78}
                    src={item.img}
                    alt={item.name}
                />
                <div className={styles.boxTitle}>
                    <span>{item.name}</span>
                </div>
            </div>
        </div>
    )
}
