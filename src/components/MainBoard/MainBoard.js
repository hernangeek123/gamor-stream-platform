import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainBoard.css';

const MainBoard = ({ theme }) => {
  const [search, setSearch] = useState('');
  const [selectedGames, setSelectedGames] = useState([]);
  const [countdown, setCountdown] = useState(11 * 60 + 45); // Inicia el temporizador en 11:45
  
  // Lista de juegos
  const games = [
    { id: 1, name: 'Fortnite' },
    { id: 2, name: 'Call of Duty' },
    { id: 3, name: 'Minecraft' },
    { id: 4, name: 'Among Us' },
    { id: 5, name: 'Roblox' }
  ];

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleAddGame = (game) => {
    setSelectedGames([...selectedGames, game]);
  };

  const filteredGames = games.filter(game => game.name.toLowerCase().includes(search.toLowerCase()));

  // Actualiza el temporizador cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown === 0) {
          return 11 * 60 + 45; // Reinicia el temporizador a 11:45
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(timer);
  }, []);

  // Formatea el temporizador en minutos y segundos
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;

  
// Para la redirección
const navigate = useNavigate();

const handleCreateAccountClick = () => {
    navigate('/register');
};

const handleSignInClick = () => {
    navigate('/login');
};

return (
    <main className={theme}>
      <div className="banner">
        <h1>Welcome to Gamor</h1>
        <p>Start streaming games differently.</p>
        <button onClick={handleCreateAccountClick}>Create Account</button>
        <button onClick={handleSignInClick}>Sign In</button>
      </div>
      <div className="countdown">
        <h2>Fortnite New Season</h2>
        <p>{minutes}:{seconds < 10 ? '0' + seconds : seconds}</p>
      </div>
      <div className="platform-selection">
        <h2>Choose Platform</h2>
        <p>Platform Selection Here</p>
        <h2>Search for a Game</h2>
        <input type="text" value={search} onChange={handleSearchChange} />
        {filteredGames.map(game => (
          <div key={game.id}>
            {game.name}
            <button onClick={() => handleAddGame(game)}>+</button>
          </div>
        ))}
      </div>
    </main>
);
};

export default MainBoard;