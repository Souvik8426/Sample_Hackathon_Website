import React from 'react';

const styles = {
  card: {
    backgroundColor: '#000000',
    border: '3px solid',
    borderImageSource: 'linear-gradient(to bottom, #72CBD3, #ffd966)',
    borderImageSlice: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
    fontWeight: 700,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    padding: '30px 40px',
    color: '#72CBD3',
    borderRadius: '45px',
  },
  logo: {
    pointerEvents: 'none',
    width: '220px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: '#72CBD3',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '15px',
    border: '3px solid #72CBD3',
    borderRadius: '5em',
    marginTop: '20px',
    transition: '0.2s',
  },
  buttonHover: {
    color: '#2e2d23',
    backgroundColor: '#72CBD3',
  },
  paragraph: {
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to left, #72CBD3, #ffd966)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1.5',
    margin: '10px 0',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
  }
};

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    return (
      <div style={styles.card}>
        <svg style={styles.logo} xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512">
          <rect width="512" height="512" rx="15%" fill="#f7df1e"></rect>
          <path fill="#25241c" d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path>
        </svg>
        <div style={styles.header}>
          <center>Event Name</center>
        </div>
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, ut.
        </p>
        <button
          style={this.state.isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          Get Tickets
        </button>
      </div>
    );
  }
}

export default Card;

