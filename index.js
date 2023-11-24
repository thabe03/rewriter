const axios = require("axios");

const options = {
  method: 'POST',
  url: 'https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '55b2293cb7msh3bae1b9b9303c93p1ce5dbjsnfab1f671a5cf',
    'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com'
  },
  data: '{"language":"fr","strength":3,"text":":L’approche Modèle-Vue-Contrôleur est une approche de conception de systèmes informatiques permettant de diviser en modules logiques une application comportant des interfaces graphiques, des données et de la logique (c’est-à-dire du contrôle). Le modèle est la composante qui gère les données d’une application (p. ex., la modification ou la création de données). Dans la plupart des applications, le modèle gère les accès aux bases de données dans lesquelles les données sont stockées. Par contre, si le modèle est capable de manipuler les données, il est complètement dissocié de la manière de les présenter aux usagers. Ainsi, le Modèle offre au reste de l’application un ensemble d’objets permettant d’accéder aux données et de les manipuler. La vue est la composante permettant d’afficher les données aux utilisateurs selon des modèles de conception  établis par les concepteurs. La Vue a pour seule tâche  d’afficher les données par l’intermédiaire des composantes graphiques (champs de texte, tableaux, etc.) et de récupérer les entrées des utilisateurs par l’intermédiaire de ces mêmes composantes (boutons, champs d’écriture, etc.). Les données affichées proviennent de la composante Modèle et les entrées sont envoyées vers le Contrôleur. Le contrôleur de la pièce maîtresse de l’architecture MVC. Le Contrôleur connaît les besoins de la Vue et du Modèle et sait quel moyen la Vue utilise pour modifier ou demander des informations au Modèle. Il transforme les requêtes de la Vue en action, ou suite d’actions, compréhensibles par le Modèle et informe la Vue de changements d’état du Modèle. Cette dynamique peut s’exécuter de façon synchrone ou non. Très souvent, la Vue et le Contrôleur forment une paire."}'};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});