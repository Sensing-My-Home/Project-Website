import MS1Presentation from './assets/presentations/MS1_Presentation.pptx'
import MS2Presentation from './assets/presentations/MS2_Presentation.pptx'
import MS3Presentation from './assets/presentations/MS3_Presentation.pptx'

const Deliveries = [
    {
        name: "M1 - Presentation of the lifecycle objectives and calendar for the project.",
        state: false,
        data: [
            {
                name: "MS1-Presentation",
                link: MS1Presentation,
                icon: "TV",
            },
        ]
    },
    {
        name: "M2 - Presentation of the lifecycle architecture.",
        state: false,
        data: [
            {
                name: "MS2-Presentation",
                link: MS2Presentation,
                icon: "TV"
            },
        ]
    },
    {
        name: "M3 - Prototype.",
        state: false,
        data: [
            {
                name: "Presentation",
                link: MS3Presentation,
                icon: "pdf"
            },
        ]
    },
    {
        name: "M4 - Project Presentation.",
        state: true,
        data: [
            {
                name: "Presentation",
                link: "",
                icon: "pdf"
            },
        ]
    }
]

export default Deliveries;