import __spacing from 'settings/__spacing';
import __layouts from 'settings/__layouts';

export const __wrapper = `
    height: 100vh;
    width: 100vw;
    display: flex;
`;

export const __content = `
    width: 100vw;
    height: 100vh;
    padding: ${__spacing.large};
    box-shadow: rgba(153, 153, 153, 0.1) 0px 0.32em 2em;
    main.main-content {
        height: calc(100vh - 7.8875em);
        overflow-y: auto;
    }
    @media (max-width: ${__layouts.xLg}) {
        width: 100vw;
        
        main.main-content {
          height: auto;
          padding: ${__spacing.xLarge} 0;
        }
     }
`;
