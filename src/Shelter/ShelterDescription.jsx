import React from "react";

export const ShelterDescription = ({attributes}) => {
    return (
        <div className="row" style={{ textAlign: 'left' }}>
            <h4 style={{ color: '#4d4751', fontSize: '30px',lineHeight: '1.2' }}>
                Description
            </h4>
            <br/>
            <br/>
            <h7 style={{ color: '#4d4751',fontSize: '14px' }}>
                Welcome to the cozy confines of our local pet shelter. Upon entering, you're greeted by a chorus of eager barks, gentle purrs, and the occasional chirp. Volunteers and staff bustle about, tending to the needs of our furry and feathered friends.

                    In one corner, kittens playfully pounce on dangling toys, while nearby, dogs engage in spirited games of fetch. The walls are adorned with vibrant posters showcasing animals awaiting adoption, each with its own story and charm.

                    Despite the hustle, there's a serene atmosphere, a sanctuary where every creature is cherished and safe. As you explore, you're enveloped by the warmth and love that define our humble shelter, where hope thrives and tails wag with anticipation.
            </h7>
        </div>
    )
}