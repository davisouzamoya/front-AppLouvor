import styled from 'styled-components'


export const Container = styled.div`
    margin-top:120px;
    /* font-family: 'Times New Roman', Times, serif; */
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

  ul {
    margin: 0px; 
    padding:0px;
    left:0px;
    list-style-type:none;
    
    li{ 
      width:100%;
      align-items:center;

    a{
      display:grid;
      grid-template-areas:
        'image infos'
        'image infos';
      grid-template-columns: 60px ;
      gap:10px;
      margin-top:15px;

      img{
      margin-left:5px;
      grid-area: image;
      width:50px;
      height:50px;
      border-radius:50%;
    }

      div{
        grid-area: infos;
        display:grid;
        color:white;
      }

      div > span {
        text-transform:capitalize
      }
    }
  }
}
`


