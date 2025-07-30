import placeholder from "../../assets/images/placeholder_pic.png";
import placeholder02 from "../../assets/images/placeholder02_pic.png";
import placeholder03 from "../../assets/images/placeholder03_pic.png";

interface Quote {
  picture: string;
  collegueName: string;
  company: string;
  description: string;
}

export const quotesData: Quote[] = [
  {
    picture: placeholder,
    collegueName: "Lem",
    company: "Loudly",
    description: `“Trabalhar com Gutu foi um divisor de águas para nosso time.
    Ele tem um olhar incrível para detalhes e traduz nossas ideias em interfaces limpas e intuitivas.
    Seu comprometimento com a usabilidade elevou o padrão do nosso produto.”`,
  },
  {
    picture: placeholder02,
    collegueName: "Hugo Nogueira",
    company: "Tilda",
    description: `“A colaboração com Gutu sempre flui naturalmente.
    Ele entende as limitações técnicas do backend e propõe soluções inteligentes no frontend. Além disso, seu código é limpo, bem documentado e fácil de manter.
    Um verdadeiro parceiro de equipe!”`,
  },
  {
    picture: placeholder03,
    collegueName: "Feli",
    company: "Super Vista",
    description: `“Gutu tem uma sensibilidade única para transformar protótipos em experiências reais.
    Ele não apenas implementa, mas também melhora a visão do design com sugestões valiosas.
    A atenção que ele dá à acessibilidade faz toda a diferença!”`,
  },
  {
    picture: placeholder,
    collegueName: "Igor Santos",
    company: "Super Vista",
    description: `“Gutu tem uma sensibilidade única para transformar protótipos em experiências reais.
      Ele não apenas implementa, mas também melhora a visão do design com sugestões valiosas.
      A atenção que ele dá à acessibilidade faz toda a diferença!”`,
  },
];
