import antonios from "../../assets/images/quoteSection/Antonios02.png";
import lem from "../../assets/images/quoteSection/Lem03.jpg";
import igor from "../../assets/images/quoteSection/IgorBG.png";

interface Quote {
	picture: string;
	collegueName: string;
	company: string;
	description: string;
}

export const quotesData: Quote[] = [
	{
		picture: antonios,
		collegueName: "Antonios Kolovos",
		company: "Loudly",
		description: `“Augusto is a detail-oriented team member who consistently suggests improvements that enhances our project.
    His positive energy and strong collaboration skills create a great working environment,
    and his contributions have a big impact on our product.
    He is also eager to learn new technologies, which helps drive innovation within the team.”`,
	},
	{
		picture: lem,
		collegueName: "Mateusz Lamczyk",
		company: "Loudly",
		description: `“Augusto is a detail-oriented team member who consistently suggests improvements that enhances our project.
    His positive energy and strong collaboration skills create a great working environment,
    and his contributions have a big impact on our product.
    He is also eager to learn new technologies, which helps drive innovation within the team.”`,
	},
	{
		picture: igor,
		collegueName: "Igor Santos",
		company: "Super Vista",
		description: `“Gutu tem uma sensibilidade única para transformar protótipos em experiências reais.
      Ele não apenas implementa, mas também melhora a visão do design com sugestões valiosas.
      A atenção que ele dá à acessibilidade faz toda a diferença!”`,
	},
	// {
	// 	picture: placeholder02,
	// 	collegueName: "Hugo Nogueira",
	// 	company: "Tilda",
	// 	description: `“A colaboração com Gutu sempre flui naturalmente.
	//   Ele entende as limitações técnicas do backend e propõe soluções inteligentes no frontend. Além disso, seu código é limpo, bem documentado e fácil de manter.
	//   Um verdadeiro parceiro de equipe!”`,
	// },
	// {
	// 	picture: placeholder03,
	// 	collegueName: "Feli",
	// 	company: "Super Vista",
	// 	description: `“Gutu tem uma sensibilidade única para transformar protótipos em experiências reais.
	//   Ele não apenas implementa, mas também melhora a visão do design com sugestões valiosas.
	//   A atenção que ele dá à acessibilidade faz toda a diferença!”`,
	// },
];
