import Layout from '../components/Layout';

const Home = () => {
  

    return (
    <Layout>
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center' }}>
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center' }}>
          <h1>Worksheet Generator</h1>
          <p><em>printable dot point math worksheets</em></p>
        </div>
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60px', 
            width: '100vw', 
            padding: '20px',
            marginTop: '24px', 
            backgroundColor: '#83b692', 
            }}>
          <h2>Instructions</h2>
        </div>
        <div style={{ marginTop: '24px' }}><em>Coming Soon!</em></div>
      </div>
    </Layout>
    )
}

export default Home;