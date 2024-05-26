function Test(){

    const styles = {
        main:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6rem',
            height: '100vh',
            color: 'var(--Angel-pink)'
        },
    }

    return (
        <div style={styles.main}>
            <h1>Test</h1>
        </div>
    )
}

export default Test