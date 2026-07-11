const matrix = [
    {
        text: "When seeking to anchor your life's work, where does your focus instinctively pull?",
        options: [
            {
                text: "Toward building a quiet, unshakeable foundation that transforms a localized space... even if forgotten by history...",
                effect: { landscape: -2, operation: -1 }
            },
            {
                text: "Toward igniting a massive, disruptive shift across wider horizons... even if the movement eventually outgrows your control...",
                effect: { landscape: +2, operation: +2 }
            }
        ]
    },
    {
        text: "In the crucible of a major paradigm transition, which discomfort do you choose to endure?",
        options: [
            {
                text: "The heavy friction of waiting out stagnation in a safe, fully mapped space... until the natural timing unveils itself...",
                effect: { landscape: -1, operation: -2 }
            },
            {
                text: "The chaotic friction of a premature leap into the unknown... trusting yourself to assemble your coordinates on the descent...",
                effect: { landscape: +1, operation: +2 }
            }
        ]
    },
    {
        text: "When navigating systemic truth, which lens offers you the greatest sense of clarity?",
        options: [
            {
                text: "The architectural view... deconstructing the deep, historical root structures and hidden mechanics beneath the surface...",
                effect: { landscape: -2, operation: 0 }
            },
            {
                text: "The dynamic view... observing the current trends, external momentum, and future trajectories on the horizon...",
                effect: { landscape: +2, operation: 0 }
            }
        ]
    },
    {
        text: "If you were forced to live with an asymmetric state of understanding, which would you accept?",
        options: [
            {
                text: "Possessing absolute, unshakeable clarity regarding your internal nature... while the outer world remains completely illegible...",
                effect: { landscape: -1, operation: -2 }
            },
            {
                text: "Mastering the patterns and variables of the external system... while your own ultimate personal purpose remains a fluid mystery...",
                effect: { landscape: +1, operation: +2 }
            }
        ]
    },
    {
        text: "When a deep realization hits you, how do you naturally integrate the weight of the insight?",
        options: [
            {
                text: "By pulling inward... incubating the idea in isolation until it fully settles into your internal framework...",
                effect: { landscape: 0, operation: -2 }
            },
            {
                text: "By testing it against reality... immediately throwing it into conversation or practice to watch it collide with the world...",
                effect: { landscape: 0, operation: +2 }
            }
        ]
    },
    {
        text: "Ultimately, how do you measure the authenticity of a chosen path?",
        options: [
            {
                text: "By its structural integrity... how closely it aligns with your deep internal values and timeless principles...",
                effect: { landscape: -2, operation: -1 }
            },
            {
                text: "By its systemic velocity... how effectively it expands your capacity to move, impact, and create change in real spaces...",
                effect: { landscape: +2, operation: +1 }
            }
        ]
    }
];

// Expanded, deeply descriptive archetype data
const archetypes = {
    silentAnchor: {
        name: "The Silent Anchor",
        desc: "We tend to look outward for markers of reality... yet your alignment proves that the truest architecture is subterranean. You find meaning not in the loud expanse, but in the silent weight of localized transformation and timeless root structures... processing life with a quiet, protective clarity that preserves core values when external systems fracture."
    },
    internalAlchemist: {
        name: "The Internal Alchemist",
        desc: "A rare paradox of stillness and friction... you harbor a deeply quiet internal landscape, yet you use it as a high-precision focal lens to spark catalytic shifts in the immediate environment. You do not seek attention... instead, your realizations incubate in shadow until they are mature enough to deliberately disrupt and reshape the spaces you step into."
    },
    systemicCartographer: {
        name: "The Systemic Cartographer",
        desc: "You stand at the edge of the horizon... observing the grand design with a beautiful, necessary detachment. While others are caught in the immediate storm, you map out the larger historical currents and overarching variables... providing the structural clarity required to understand exactly where the collective landscape is drifting next."
    },
    cosmicDisruptor: {
        name: "The Cosmic Disruptor",
        desc: "You move at the speed of experiential friction... realizing that true alignment is found only within momentum. You choose the beautiful chaos of the unknown over structured stagnation... viewing reality as a canvas to be constantly tested, broken, and expanded through direct impact and expansive evolutionary growth."
    }
};
