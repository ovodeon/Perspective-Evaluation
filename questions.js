const matrix = [
    // --- Phase 1: Perception & Illusion ---
    {
        text: "When seeking to anchor your life's work, where does your focus instinctively pull?",
        options: [
            {
                text: "Toward building a quiet, unshakeable foundation that transforms a localized space... even if forgotten by history...",
                effect: { landscape: -2, operation: -1, orientation: -1 }
            },
            {
                text: "Toward igniting a massive, disruptive shift across wider horizons... even if the movement eventually outgrows your control...",
                effect: { landscape: +2, operation: +2, orientation: +1 }
            }
        ]
    },
    {
        text: "When you look past the surface of human struggle, what do you recognize as the root of true transformation?",
        options: [
            {
                text: "The sacred wounds themselves... treating our scars as necessary windows through which the unconditioned light finally enters...",
                effect: { landscape: -2, operation: -1, orientation: -2 }
            },
            {
                text: "The deliberate shattering of the mirror... realizing that the identity claiming to be wounded was entirely an illusion to begin with...",
                effect: { landscape: +1, operation: +2, orientation: +2 }
            }
        ]
    },
    {
        text: "When navigating systemic truth, which lens offers you the greatest sense of clarity?",
        options: [
            {
                text: "The architectural view... deconstructing the deep, historical root structures and hidden mechanics beneath the surface...",
                effect: { landscape: -2, operation: 0, orientation: -1 }
            },
            {
                text: "The dynamic view... observing the current trends, external momentum, and future trajectories on the horizon...",
                effect: { landscape: +2, operation: 0, orientation: +1 }
            }
        ]
    },
    // --- Phase 2: Friction & Identification ---
    {
        text: "In the crucible of a major paradigm transition, which discomfort do you choose to endure?",
        options: [
            {
                text: "The heavy friction of waiting out stagnation in a safe, fully mapped space... until the natural timing unveils itself...",
                effect: { landscape: -1, operation: -2, orientation: -1 }
            },
            {
                text: "The chaotic friction of a premature leap into the unknown... trusting yourself to assemble your coordinates on the descent...",
                effect: { landscape: +1, operation: +2, orientation: +1 }
            }
        ]
    },
    {
        text: "When confronted by power structures or conditioned dogmas inherited from past generations, what is your primary instinct?",
        options: [
            {
                text: "To quietly step completely outside the field of play... rendering their authority irrelevant through your absolute detachment...",
                effect: { landscape: -2, operation: -2, orientation: -2 }
            },
            {
                text: "To actively step into the center of the structure... absorbing and subverting its energy to collapse the framework from within...",
                effect: { landscape: +1, operation: +2, orientation: +1 }
            }
        ]
    },
    {
        text: "If you were forced to live with an asymmetric state of understanding, which would you accept?",
        options: [
            {
                text: "Possessing absolute, unshakeable clarity regarding your internal nature... while the outer world remains completely illegible...",
                effect: { landscape: -1, operation: -2, orientation: -2 }
            },
            {
                text: "Mastering the patterns and variables of the external system... while your own ultimate personal purpose remains a fluid mystery...",
                effect: { landscape: +1, operation: +2, orientation: +2 }
            }
        ]
    },
    // --- Phase 3: Realization & Return ---
    {
        text: "When a deep realization hits you, how do you naturally integrate the weight of the insight?",
        options: [
            {
                text: "By pulling inward... incubating the idea in isolation until it fully settles into your internal framework...",
                effect: { landscape: 0, operation: -2, orientation: -1 }
            },
            {
                text: "By testing it against reality... immediately throwing it into conversation or practice to watch it collide with the world...",
                effect: { landscape: 0, operation: +2, orientation: +1 }
            }
        ]
    },
    {
        text: "As we dismantle conditioning to reach the unconditioned state, where does your awareness reside?",
        options: [
            {
                text: "In the absolute formlessness of existence... resting as the silent, unmoving witness behind all passing phenomena...",
                effect: { landscape: -2, operation: -2, orientation: -2 }
            },
            {
                text: "In the conscious expression of the form... playing your part in the grand theater while fully aware it is a dance of shadows...",
                effect: { landscape: +2, operation: +1, orientation: +2 }
            }
        ]
    },
    {
        text: "Ultimately, how do you measure the authenticity of a chosen path?",
        options: [
            {
                text: "By its structural integrity... how closely it aligns with your deep internal values and timeless, changeless principles...",
                effect: { landscape: -2, operation: -1, orientation: -2 }
            },
            {
                text: "By its systemic velocity... how effectively it expands your capacity to move, impact, and create change in real spaces...",
                effect: { landscape: +2, operation: +1, orientation: +2 }
            }
        ]
    }
];

// The 8 Resonant Consciousness Archetypes
const archetypes = {
    pureWitness: {
        name: "The Pure Witness // The Formless Void",
        desc: "We spend lifetimes collecting layers of identity... yet you have recognized the freedom of absolute un-mapping. You operate from the silent space behind the mind. Immune to the noise of passing external systems or historical currents, you serve as the changeless ground of awareness, reminding the world that before anything can be built, it must first be allowed to be empty..."
    },
    silentAnchor: {
        name: "The Silent Anchor // The Rooted Guardian",
        desc: "You understand that the highest truths are local and deeply buried. Your consciousness anchors itself in the structural roots of existence, honoring the long processing of internal healing. You do not chase transient movements... instead, you preserve the essential, uncorrupted architecture of spirit, acting as a stable sanctuary when external environments fracture."
    },
    internalAlchemist: {
        name: "The Internal Alchemist // The Hidden Catalyst",
        desc: "A profound paradox of stillness and targeted disruption. You harbor a quiet, insulated inner landscape, yet your realizations act as an intense lens. You do not seek broad systemic control... instead, you drop singular insights with perfect timing, using the friction of reality to transform the immediate spaces and communities you touch."
    },
    subversiveSage: {
        name: "The Subversive Sage // The Mirror of Form",
        desc: "You refuse to accept inherited scripts or social dogmas. Your mind operates on deep deconstruction, peeling back the layers of conditioning to reveal the raw reality beneath. You move within the world with a detached fluid power—stepping into structures not to validate them, but to gently reveal their internal inconsistencies."
    },
    systemicCartographer: {
        name: "The Systemic Cartographer // The Loom Weaver",
        desc: "You look at the world from a sweeping panoramic vantage point. While others are caught in immediate crises, your eye naturally charts the overarching variables, historical trajectories, and cosmic patterns. You provide the vital structural blueprint required to comprehend how the collective consciousness is shifting across time."
    },
    quantumYogi: {
        name: "The Quantum Yogi // The Paradox Navigator",
        desc: "You exist comfortably at the exact intersection of formless clarity and active manifestation. Recognizing that individual identity is a fluid mask, you use it intentionally to navigate reality. You harmonize ancient, internal knowing with complex modern systems, treating the entire material landscape as a conscious laboratory for evolution."
    },
    cosmicDisruptor: {
        name: "The Cosmic Disruptor // The Breaking Wave",
        desc: "You realize that stagnation is the only true illusion. Your awareness thrives within the momentum of direct experience, jumping prematurely into the chaotic unknown because you know clarity is forged within friction. You are the necessary lightning strike that breaks obsolete systems apart to make room for new growth."
    },
    architectOfDawn: {
        name: "The Architect of Dawn // The Systemic Visionary",
        desc: "You carry a vast horizon inside your awareness. Your ultimate aim is the grand scale—igniting massive shifts in perspective that outlast your own name. You see the world not as it is, but as a dynamic grid of possibilities, designing structures and movements that guide the collective towards a higher, unconditioned state."
    }
};
