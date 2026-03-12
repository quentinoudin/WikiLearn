import React from "react";

const styles = {
  page: {
    fontFamily: "Georgia, serif",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  },

  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 40px",
    borderBottom: "1px solid #e5e7eb",
    backgroundColor: "#fff",
  },

  logoZone: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logoIcon: {
    width: "40px",
    height: "40px",
    backgroundColor: "#1e3a6e",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "18px",
  },

  logoTexte: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#1e3a6e",
  },

  logoOr: {
    color: "#d4a017",
  },

  navLinks: {
    display: "flex",
    gap: "32px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },

  navLink: {
    color: "#374151",
    textDecoration: "none",
    fontSize: "15px",
    cursor: "pointer",
  },

  navDroite: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  btnClassement: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "none",
    border: "none",
    fontSize: "15px",
    color: "#1e3a6e",
    cursor: "pointer",
    fontFamily: "Georgia, serif",
  },

  btnProfil: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "8px 18px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    background: "none",
    fontSize: "15px",
    cursor: "pointer",
    fontFamily: "Georgia, serif",
  },
  badgeZone: {
    display: "flex",
    justifyContent: "center",
    marginTop: "48px",
    marginBottom: "48px",
  },

  badge: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 24px",
    border: "1px solid #c7d2fe",
    borderRadius: "999px",
    backgroundColor: "#eef2ff",
    color: "#3730a3",
    fontSize: "14px",
  },

  badgeIcone: {
    fontSize: "18px",
  },

  hero: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "0 80px 80px 80px",
    gap: "60px",
  },

  heroGauche: {
    flex: 1,
    maxWidth: "560px",
  },

  heroTitre: {
    fontSize: "58px",
    fontWeight: "bold",
    color: "#1e3a6e",
    lineHeight: "1.1",
    margin: "0 0 24px 0",
  },

  heroTitreOr: {
    color: "#d4a017",
  },

  heroDesc: {
    fontSize: "18px",
    color: "#4b5563",
    lineHeight: "1.7",
    margin: 0,
  },
  heroDroite: {
    flex: 1,
    maxWidth: "520px",
  },

  heroDroiteTitre: {
    textAlign: "center",
    fontSize: "17px",
    color: "#1e3a6e",
    fontStyle: "italic",
    marginBottom: "16px",
  },

  carteImage: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "20px",
  },

  imageHero: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    display: "block",
    borderRadius: "16px",
  },

  badgeStreak: {
    position: "absolute",
    bottom: "16px",
    left: "16px",
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "#fff",
    padding: "10px 14px",
    borderRadius: "12px",
    fontSize: "13px",
    lineHeight: "1.5",
    textAlign: "center",
  },

  streakXP: {
    color: "#fbbf24",
    fontWeight: "bold",
    fontSize: "14px",
  },

  boutonsZone: {
    display: "flex",
    gap: "12px",
  },

  btnPrimaire: {
    flex: 1,
    padding: "14px 20px",
    backgroundColor: "#1e3a6e",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    cursor: "pointer",
    fontFamily: "Georgia, serif",
  },

  btnSecondaire: {
    flex: 1,
    padding: "14px 20px",
    backgroundColor: "#fff",
    color: "#1e3a6e",
    border: "2px solid #1e3a6e",
    borderRadius: "10px",
    fontSize: "15px",
    cursor: "pointer",
    fontFamily: "Georgia, serif",
  },
};
function App() {
  return (
    <div style={styles.page}>

      <nav style={styles.navbar}>
        <div style={styles.logoZone}>
          <div style={styles.logoIcon}>W</div>
          <span style={styles.logoTexte}>
            Wikipedia <span style={styles.logoOr}>Learning</span>
          </span>
        </div>

        <ul style={styles.navLinks}>
          <li><a style={styles.navLink} href="#">Parcours</a></li>
          <li><a style={styles.navLink} href="#">Lecon</a></li>
          <li><a style={styles.navLink} href="#">Quizz</a></li>
        </ul>

        <div style={styles.navDroite}>
          <button style={styles.btnClassement}>Classement</button>
          <button style={styles.btnProfil}>Profil</button>
        </div>
      </nav>
