import styles from '../styles/Character.module.css'

export default function Character({character}) {
  
  return (
    <div className={styles.character}>
        <h2>{character.name}</h2>
        <ul>
            <li>Height: {character.height}</li>
            <li>Gender: {character.gender}</li>
            <li>Hair Color: {character.hair_color}</li>
            <li>Skin Color: {character.name}</li>
            
        </ul>
    </div>
  )
}