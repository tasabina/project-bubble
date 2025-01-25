import { useKeyboardControls } from '@react-three/drei'
import './GameUI.css'
import Timer from './Timer'

export default function GameUI() {
    const forward = useKeyboardControls((state) => state.forward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const jump = useKeyboardControls((state) => state.jump)

    console.log(forward, backward, leftward, rightward, jump)

    return (
        <div className="game-ui">
            <div className="game-title-block">
                <div className="game-title">
                    Bubble Game
                </div>
                <div className="game-subtitle">
                    Game Jam 2025 Project
                </div>
                <div className="game-data">
                    <div className="game-subtitle right-border column">
                        <span className="game-result-title">Time</span>
                        <span className="game-result"><Timer/></span>
                    </div>
                    <div className="game-subtitle right-border column">
                        <span className="game-result-title">Score</span>
                        <span className="game-result">000</span>
                    </div>
                    <div className="game-subtitle column">
                        <span className="game-result-title">Power</span>
                        <span className="game-result">000</span>
                    </div>
                </div>
            </div>
            <div className="controls">
            <div className="raw">
                <div className="key"><span>Up</span></div>
            </div>
            <div className="raw">
                <div className="key"><span>Left</span></div>
                <div className="key"><span>Down</span></div>
                <div className="key"><span>Right</span></div>
            </div>
            <div className="raw">
                <div className="key large"><span>Space</span></div>
            </div>
        </div>
        </div>
    )
}