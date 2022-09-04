import './ResourcePanel.css';
import { HirePersonButton } from "../Common/HirePersonButton";

const humanResources = [
    {
        text: "Hire a developer"
    },
    {
        text: "Hire a Tester"
    },
    {
        text: "Hire a Business Analyst"
    },
    {
        text: "Hire a Product Owner"
    }
];


export const ResourcePanel = () => (
    <div className="human-resources-panel">
        {humanResources.map(person => <HirePersonButton key={person.text} {...person} />)}
    </div>
);
