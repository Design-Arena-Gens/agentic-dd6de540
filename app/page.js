export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl'
    }}>
      <main style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          marginBottom: '1rem',
          color: '#667eea',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          مرحباً بك! 👋
        </h1>
        <p style={{
          fontSize: '1.5rem',
          color: '#555',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          أهلاً وسهلاً في تطبيقك الجديد
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#667eea',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            fontWeight: 'bold'
          }}>
            ابدأ الآن
          </button>
          <button style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#764ba2',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            fontWeight: 'bold'
          }}>
            معرفة المزيد
          </button>
        </div>
      </main>
      <footer style={{
        marginTop: '2rem',
        color: 'white',
        fontSize: '1rem'
      }}>
        تم الإنشاء بواسطة Claude Code
      </footer>
    </div>
  );
}
