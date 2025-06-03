

const styles = {
    nav: {
      background: '#ff8800',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderRadius: '0 0 10px 10px',
      width:'100%',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: '600',
      fontSize: '16px',
      padding: '8px 12px',
      borderRadius: '6px',
      transition: 'all 0.3s ease',
    },
    linkHover: {
      backgroundColor: '#e67300',
      transform: 'scale(1.05)',
    },
    activeLink: {
      backgroundColor: '#cc6600',
    }
  };
  
  export default styles;