var path = "/images/jobs/n26/";

module.exports = {
    name: "N26",
    icon: "/images/logos/n26.png",
    positions: [
        {
            name: "Product Manager",
            descriptionAbove: "N26 is a mobile bank accessible on Android, iOS, and web platforms. It provides users with bank accounts and associated debit cards, and offers multiple common banking services such as credit, overdraft, and insurance. They use a freemium model to bring down the prices of their basic banking services, at the cost of limiting certain digital features. I worked as a product manager intern on the Bank Core team, which is responsible for the core services of the product, such as SEPA transfers, MoneyBeam, and Cash26. After 3 months I took over as product owner for this team, leading plannings, refinements, and retros. Managing the team was the most difficult part of the job, as almost every engineer in the team of 7 was new, either arriving at the same time or after me. This meant a lot of time spent familiarizing the team with the codebase and architecture. This was compounded by ongoing technical debt and dealing with fire fighting, which broke up the main themes of our sprints making it difficult for the team to gain cohesion and momentum. It also made prioritization of features over technical debt challenging. These challenges taught me a lot about the value of recording data and making data driven decisions, as well as leading and motivating a team",
            descriptionBelow: "",
            additional: [
            ]
        },
        {
            name: "Junior Backend Engineer",
            descriptionAbove: "As a backend software engineer I contributed to the card lifecycle service, which integrates with a third party mastercard processor. It is written in Kotlin using functional programming best practices. I've learnt a lot about both building scalable applications, and building applications in the contexted of a large distributed system from this project. We migrated this system out of a monolith architecture with the requirement that the current architecture still run wihtout downtime. This meant a lot of migrations with two flows (new and legacy) with data being written to new and legacy systems, and dealing with eventual inconsistency between the various systems. Working with distributed systems has given me an appreciation for robustness and fault tolerence, as well as the various drawbacks and difficulties of having a realtime distributed system",
            descriptionBelow: "",
            additional: [
            ]
        }
    ]
};