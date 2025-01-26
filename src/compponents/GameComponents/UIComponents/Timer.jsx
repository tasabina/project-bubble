import { useEffect } from 'react';
import useGame from '../../store/useGame.jsx'

export default function Timer() {
  const { seconds } = useGame();

  useEffect(() => {
    let interval;
    const unsubscribe = useGame.subscribe(
      (state) => state.status,
      (status) => {
        if (status == 'playing') {
          interval = setInterval(() => {
            useGame.getState().tick();
          }, 1000);
        } else {
          clearInterval(interval);
        }
      },
      { fireImmediately: true }
    );

    return () => {
      clearInterval(interval);
      unsubscribe();
    }
  }, []);

  return (
    <>
      {seconds}
    </>
  );
}
