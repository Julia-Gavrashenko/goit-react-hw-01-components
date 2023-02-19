import { Global, css } from '@emotion/react'

export const GlobalStyles = () => {
    return (
  <div>
      <Global
        styles={css`
         
          body {
            background-color: #f5f4fa;
            margin: 0;
             font-family: Raleway, sans-serif;
             line-height: 1.5;
          }
       
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
          }

          img {
            display: block;
            max-width: 100%;
            height: auto;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
        `}
      />
    </div>
)
}



