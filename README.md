# 📞 **Zaperson Lib**

_Uma biblioteca poderosa e fácil de usar para validar, formatar e obter informações sobre números de telefone brasileiros._

---

## 🛠️ **Como Usar**

A Zaperson Lib é projetada para ser simples e eficiente. Aqui está um exemplo básico de uso:

```typescript
import Zaperson from "zaperson-lib";

// 🔧 Inicialize a biblioteca
const zaperson = new Zaperson({ validateDDD: true });

// 📞 Parse de número
const numero = zaperson.parse("11987654321");
console.log(numero); // 5511987654321

// 💁 Formate o número de forma amigável
const formatado = zaperson.humanize("11987654321");
console.log(formatado); // +55 11 98765-4321

// 🔍 Obtenha informações detalhadas
const informacoes = zaperson.info("11987654321");
console.log(informacoes);
/*
  {
    number: "5511987654321",
    formattedNumber: "+55 11 98765-4321",
    ddi: "55",
    ddd: "11",
    location: {
      ddd: "11",
      region: "São Paulo",
      state: "SP",
    }
  }
*/

// ✅ Valide o número
const isValid = zaperson.validate("11987654321");
console.log(isValid); // true
```

## 🔎 **Funcionalidades Principais**

1. **Validação de números brasileiros**  
   🔗 Certifique-se de que o número segue o padrão brasileiro e que o DDD é válido.

2. **Formatação amigável**  
   🎨 Converta números brutos para um formato legível, como `+55 11 98765-4321`.

3. **Informações detalhadas sobre o DDD**  
   🗺️ Obtenha a região, estado e outras informações baseadas no DDD.

4. **Suporte a números com e sem DDI**  
   🌎 Identifique e normalize números internacionais começando com `55`.

## 🌟 **Por Que Usar Zaperson?**

- 📌 **Fácil de usar**: APIs simples e bem definidas.
- 📌 **Focado no Brasil**: Ideal para sistemas que lidam com números brasileiros.
- 📌 **Validação de DDDs**: Dados confiáveis baseados na localização brasileira.

## ⚖️ **Licença**

Este projeto está licenciado sob a licença MIT.

📦 _Desenvolvido com ❤️ para facilitar a manipulação de números de telefone no Brasil._
