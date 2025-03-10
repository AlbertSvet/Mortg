import { createContext } from "react";
const mainBlock = [
    {
        subTitle: 'Rate',
        subText: 'Yes. Rate is important, but it’s not everything. Understanding your rate, is more important.',
        img: '/books/percent.svg'
    },
    {
        subTitle: 'Relationships',
        subText: 'Build a solid relationship with a realtor a lender and never look back!',
        img: '/books/clipboard.svg'
    },
    {
        subTitle: 'Pre-Approved',
        subText: 'Getting pre-approved early will play a key part in finding your dream home.',
        img: '/books/users.svg'
    },
]
const dataContext = createContext(mainBlock);
console.log(dataContext);
export default dataContext