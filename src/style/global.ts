import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

  :root{
    --color-blue: #0244A1 ;
    --color-green: #3F923A ;
  }

  *{
    margin: 0 ;
    padding: 0 ;
  }

  body{
    background-color: var(--color-blue) ;
    font-family: 'Fjalla One', sans-serif;
  }
  header{
    display:flex ;
    align-items:center ;
    justify-content:center ;
    gap: 30rem;
    
    span{
      color:#FFF ;
    }
    h1{
      font-size:45px ;
      color:#E7E00D ;
      text-shadow: 
               -2px -1px 0px #000, 
               -2px 1px 0px #000,      
                2px -1px 0px #000,    
                2px 0px 0px #000;
    }
    img{
      width:7rem ;
    }
  }
  div.card{
    background-color: #970C36;
    width:17rem ;
    height: 24rem ;
    margin: 0 auto ;
    border-radius:5px ;
    border:1px solid #FFF;
    box-shadow: 2px 2px 5px #000 ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    padding:10px ;
    span{
      margin-left:12rem ;
      margin-top:2rem ;
      font-size:18px ;
      color: #000;
      text-shadow: 
               -1px -1px 0px #EFE46C, 
               -1px 1px 0px #EFE46C,      
                1px -1px 0px #EFE46C,    
                1px 0px 0px #EFE46C;
    }

    p{
      position:absolute ;
      top:28rem ;
      left:33.5rem ;
      background-color:#FFF ;
      padding:10px 40px;
      color:#970C36;
      font-size:20px ;
      font-weight:bold ;
      border-radius: 1px 1000px 1000px 1px ;
    }
    img.bandeira{
      position:absolute ;
      z-index:0;
      width:18rem ;
      height:13rem ;
      margin-top:3rem ;
    }
    img{
      z-index:1 ;
      width:10rem ;
      height:20rem ;
    }
  }


`