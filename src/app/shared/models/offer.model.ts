export class Offer {
    constructor(
    public id: number,
    public categoria: string,
    public titulo: string,
    public descricao_oferta: string,
    public anunciante: string,
    public valor: number,
    public destaque: boolean,
    public imagens: Array<Imagem>,
    
    ) { }
}

export class Imagem {
    url: string;
}

// "ofertas": [
//     {
//       "id": 1,
//       "categoria": "restaurante",
//       "titulo": "Super Burger",
//       "descricao_oferta": "Rodízio de Mini-hambúrger com opção de entrada.",
//       "anunciante": "Original Burger",
//       "valor": 29.9,
//       "destaque": true,
//       "imagens": [
//         {
//           "url": "/assets/ofertas/1/img1.jpg"
//         },
//         {
//           "url": "/assets/ofertas/1/img2.jpg"
//         },
//         {
//           "url": "/assets/ofertas/1/img3.jpg"
//         },
//         {
//           "url": "/assets/ofertas/1/img4.jpg"
//         }
//       ]
//     }