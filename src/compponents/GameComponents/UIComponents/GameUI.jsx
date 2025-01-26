import { useKeyboardControls } from '@react-three/drei'
import './GameUI.css'
import Timer from './Timer'
import useGame from '../../store/useGame.jsx'

export default function GameUI() {
    const forward = useKeyboardControls((state) => state.forward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const move = useKeyboardControls((state) => state.move)

    const gameState = useGame();

    return (
        <div className="game-ui">
            {/* <div className="debug">
                <button onClick={gameState.start}>Start</button>
                <button onClick={gameState.stop}>Stop</button>
                <button onClick={gameState.reset}>Reset</button>
            </div> */}
            { gameState.status == 'ended' && <div className="final-screen">
                Time's up!
                Your final score is: <span className="final-screen-score">{gameState.score}</span> bubbles caught.
                Great job! You’ve successfully navigated the deep blue to collect as many bubbles as you could in 60 seconds.
                Want to try again and beat your score?
            </div>}
            <div className="game-title-block">
                <div className="game-title">
                    Bubble Game
                </div>
                <div className="game-subtitle">
                    <span>Game Jam 2025 Project</span>
                </div>
                <div className="game-data">
                    <div className="game-subtitle right-border column">
                        <span className="game-result-title">Time</span>
                        <span className="game-result"><Timer/></span>
                    </div>
                    <div className="game-subtitle column">
                        <span className="game-result-title">Score</span>
                        <span className="game-result">{gameState.score}</span>
                    </div>
                    {/* <div className="game-subtitle column">
                        <span className="game-result-title">Power</span>
                        <span className="game-result">000</span>
                    </div> */}
                </div>
            </div>
                <div className="controls">
                    <div className="block left">
                        <div className="raw">
                            <div className="key"><span>Up</span></div>
                        </div>
                        <div className="raw">
                            <div className="key"><span>Left</span></div>
                            <div className="key"><span>Down</span></div>
                            <div className="key"><span>Right</span></div>
                        </div>
                    </div>
                </div>
                <div className="controls">
                    <div className="raw right">
                        <div className="key w-100 btn" onClick={gameState.start}><span>START</span></div>
                        <div className="key w-100 btn" onClick={gameState.stop}><span>STOP</span></div>
                        <div className="key w-100 btn" onClick={gameState.reset}><span>RESET</span></div>
                    </div>
                </div>
            </div>
    )
}