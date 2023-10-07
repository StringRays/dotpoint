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
            alignItems: 'center',
            paddingTop: "20px" }}>
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
        <div style={{ marginTop: '24px', display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "90%" }}>
          <ol>
            <li style={{ padding: "20px", fontWeight: "bold" }}>Use the menu to navigate to the type of worksheet you would like to generate.</li>
            <li style={{ padding: "20px", fontWeight: "bold"  }}>Click "Generate New Workseet" to get a worksheet with a new random set of numbers.</li>
            <li style={{ padding: "20px", fontWeight: "bold"  }}>Print as many of each worksheet as you would like, for use in classrooms, as homework, or as practice.</li>
          </ol>
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
          <h2>Explanation</h2>
        </div>
        <div style={{ marginTop: '24px', display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "90%", textAlign: "center", fontWeight: "bold", paddingBottom: "50px" }}>
          <div style={{ padding: "20px" }}>These worksheets use numbers with solid and hollow dots to provide an extra layer of sensory input for early math learners.</div>
          <div style={{ padding: "20px" }}>Each solid dot signifies "1".</div>
          <div style={{ padding: "20px" }}>Each hollow dot signifies "2".</div>
          <div style={{ padding: "20px", maxWidth: "80%", alignSelf: "center" }}>For many learners with dyslexia or dyscalculia (or simply those who learn best with tactile input),
            touching the dots on the page while working through the problem can assist with full comprehension. 
          </div>
        </div>
      </div>
    </Layout>
    )
}

export default Home;