import  './styles.scss';

import usrImg from '../../assets/user-image.jpg';
// import gameImg from '../../assets/zelda.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../../service/api';

type GameProps = {
  name: string;
  cover: string;
  platforms: string;
  publisher: string
}

export function HomePage() {
  const [games ,setGames] = useState([]);

  useEffect(() => {
    async function loadGames(): Promise<void> {
      try{
        const { data } = await api.get('games', {
          headers: {
            'client_id': 'ta5rzk0aq0l78tw6u7l0jqim78i3pz',
            'Authorization': 'Bearer tl39ftykibppqywv6xurlm80fd0679',
        }
        });
        setGames(data);
      }catch(err) {
        console.log(err)
      }       
    }

  loadGames()
  },[]);

  return (
    <div className="container">
      <div className="wrapper">
      <header>
        <nav>
          <div className="ident-container">
            <h3>Bem vindo</h3>
            <h3>Rone</h3>
          </div>
          <h1>Backlog Games</h1>
          <img src={usrImg} alt="usuario" />
          
        </nav>
      </header>
      <main>
        <h1>Game List</h1>
        <section>
          
          <div className="card-game">
            <div className="card-img">
              {games.map((game: GameProps) => 
                (
                  <>
                    <img src={game.cover} alt="game-name"/>
                    <div className="card-content">
                      <h3>{game.name}</h3>
                      <h3>{game.publisher}</h3>
                      <h3>{game.platforms}</h3>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </section>
       </main>
      </div>
    </div>
  )
}