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
        <div style={{ height: '100px', width: '100vw', marginTop: '24px', backgroundColor: '#83b692', }}>
        </div>
      </div>
    </Layout>
    )
}

export default Home;