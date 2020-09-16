import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Results } from './Results';

afterEach(cleanup);

const results = [
    {
        "title": "Capacity Planning",
        "description": "Create a capacity plan for your team, with your team.",
        "link": "https://example.com/capacity-planning",
        "category": "leadership",
        "image": "https://www.atlassian.com/dam/jcr:fa55c05f-c087-4d8f-9f9b-4615216ca4db/newplay.png"
    },
    {
        "title": "5 Whys Analysis",
        "description": "Uncover the root of a problem and explore possible solutions.",
        "link": "https://example.com/5-whys",
        "category": "project",
        "image": "https://www.atlassian.com/dam/jcr:8b081c1f-6a30-46a8-8683-b149a5fa0e2b/5whys.png"
    }
];

test('renders Results component', () => {
    const { getAllByTestId } = render(<Results results={ results } />);
    const title = getAllByTestId('title');
    const description = getAllByTestId('description');
    const link = getAllByTestId('link');
    const image = getAllByTestId('image');

    title.forEach((nameNode, index) => {
        expect(nameNode.textContent).toBe(results[index]['title'])
    });

    description.forEach((nameNode, index) => {
        expect(nameNode.textContent).toBe(results[index]['description'])
    });
    
    link.forEach((nameNode, index) => {
        expect(nameNode.getAttribute("href")).toBe(results[index]['link'])
    });

    image.forEach((nameNode, index) => {
        expect(nameNode.getAttribute("src")).toBe(results[index]['image'])
    });
    
});
