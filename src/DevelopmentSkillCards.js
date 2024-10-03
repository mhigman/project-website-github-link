import styles from "./DevelopmentSkillCards.module.css"

function DevelopmentSkillCards({ skills }) {

    return (
        <div className={styles.skillCardContainer}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              {skill}
            </div>
          ))}
        </div>
      );
}

export default DevelopmentSkillCards;