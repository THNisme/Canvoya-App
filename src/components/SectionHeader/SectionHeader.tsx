import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  variant?: 'light' | 'dark';
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  variant = 'light',
}: SectionHeaderProps) {
  return (
    <div
      className={`${styles.header} ${align === 'left' ? styles.left : styles.center} ${
        variant === 'dark' ? styles.dark : ''
      }`}
      data-reveal
    >
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
