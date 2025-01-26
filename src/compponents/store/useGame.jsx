import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set, get) => ({
    seconds: 0,
    score: 0,
    status: 'ready',

    start: () =>
    {
        set((state) =>
        {
            if(state.status === 'ready')
                return { status: 'playing' }

            return {}
        })
    },

    reset: () =>
    {
        set((state) =>
        {
            if(state.status === 'playing' || state.status === 'ended')
                return { status: 'ready', seconds: 0, score: 0 }

            return {}
        })
    },

    stop: () =>
    {
        set((state) =>
        {
            if(state.status === 'playing')
                return { status: 'ended' }

            return {}
        })
    },

    tick: () => {
        const { seconds, stop } = get();
        if (seconds >= 60) {
          stop();
        } else {
          set((state) => ({ seconds: state.seconds + 1 }));
        }
    },

    increaseScore: () => {
        set((state) =>
            {
                if(state.status === 'playing')
                    return { score: state.score + 1 }
    
                return {}
            }
        )
    },

  })))